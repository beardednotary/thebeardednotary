"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { stateFees } from "../lib/stateFees";
import { stateMarketData } from "../lib/stateMarketData";

const STATE_PAGES = new Set(stateMarketData.map((m) => m.slug));

// Customer-side estimate. Figures match the ranges on /how-much-to-charge-mobile-notary:
// travel about $25-$75 within 20 miles and $75-$150 beyond, loan signings $100-$200,
// after-hours 1.5-2x, hospitals/jails/care facilities $150-$300 total.
type Service = "general" | "loan-signing";
type Distance = "near" | "mid" | "far";
type Timing = "business" | "after-hours";
type Setting = "home" | "facility";

const TRAVEL: Record<Distance, { label: string; lo: number; hi: number }> = {
  near: { label: "Under 10 miles", lo: 25, hi: 50 },
  mid: { label: "10-20 miles", lo: 40, hi: 75 },
  far: { label: "Over 20 miles", lo: 75, hi: 150 },
};

const NO_MAX_ASSUMED = 10; // states with no statutory cap: assume a typical $10 per signature

function capFor(slug: string): { perSignature: number; noMax: boolean } {
  const entry = stateFees.find((s) => s.slug === slug);
  const raw = entry?.acknowledgmentFee ?? "$10";
  const n = Number(raw.replace(/[^0-9.]/g, ""));
  return Number.isFinite(n) && n > 0 ? { perSignature: n, noMax: false } : { perSignature: NO_MAX_ASSUMED, noMax: true };
}

function money(v: number) {
  return `$${Math.round(v)}`;
}

export default function MobileNotaryCostEstimator() {
  const [state, setState] = useState("california");
  const [service, setService] = useState<Service>("general");
  const [signatures, setSignatures] = useState(2);
  const [distance, setDistance] = useState<Distance>("near");
  const [timing, setTiming] = useState<Timing>("business");
  const [setting, setSetting] = useState<Setting>("home");

  const result = useMemo(() => {
    const cap = capFor(state);
    const stateName = stateFees.find((s) => s.slug === state)?.name ?? "your state";
    let lo: number;
    let hi: number;
    let notarial = 0;
    if (service === "loan-signing") {
      lo = 100;
      hi = 200;
      if (distance === "far") {
        lo += 25;
        hi += 50;
      }
    } else {
      notarial = cap.perSignature * Math.max(1, signatures);
      lo = notarial + TRAVEL[distance].lo;
      hi = notarial + TRAVEL[distance].hi;
      if (setting === "facility") {
        lo = Math.max(lo + 50, 150);
        hi = Math.max(hi + 100, 300);
      }
    }
    if (timing === "after-hours") {
      lo *= 1.5;
      hi *= 2;
    }
    return { lo, hi, notarial, cap, stateName };
  }, [state, service, signatures, distance, timing, setting]);

  const select = "w-full border border-gray-300 bg-white px-4 py-3";

  return (
    <section className="my-10 border-2 border-notary-gold bg-gray-50 p-6 md:p-8" id="estimator">
      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-notary-gold">Cost estimator</p>
      <h2 className="mb-3 text-3xl font-bold text-notary-navy">What will a mobile notary cost you?</h2>
      <p className="mb-6 text-gray-700">
        Pick your state and appointment details for a typical price range. Individual notaries set their own travel
        fees, so use this to sanity-check a quote, not as a guaranteed price.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block font-semibold text-notary-navy">State</span>
          <select className={select} value={state} onChange={(e) => setState(e.target.value)}>
            {stateFees.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-2 block font-semibold text-notary-navy">What do you need?</span>
          <select className={select} value={service} onChange={(e) => setService(e.target.value as Service)}>
            <option value="general">Documents notarized (POA, affidavit, deed, forms)</option>
            <option value="loan-signing">Loan signing (refinance, purchase, HELOC)</option>
          </select>
        </label>

        {service === "general" ? (
          <label className="block">
            <span className="mb-2 block font-semibold text-notary-navy">Number of notarized signatures</span>
            <input
              type="number"
              min={1}
              max={50}
              value={signatures}
              onChange={(e) => setSignatures(Math.min(50, Math.max(1, Number(e.target.value) || 1)))}
              className={select}
            />
          </label>
        ) : null}

        <label className="block">
          <span className="mb-2 block font-semibold text-notary-navy">How far will the notary travel?</span>
          <select className={select} value={distance} onChange={(e) => setDistance(e.target.value as Distance)}>
            {(Object.keys(TRAVEL) as Distance[]).map((d) => (
              <option key={d} value={d}>
                {TRAVEL[d].label}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-2 block font-semibold text-notary-navy">When?</span>
          <select className={select} value={timing} onChange={(e) => setTiming(e.target.value as Timing)}>
            <option value="business">Weekday, business hours</option>
            <option value="after-hours">Evening, weekend or same-hour</option>
          </select>
        </label>

        {service === "general" ? (
          <label className="block">
            <span className="mb-2 block font-semibold text-notary-navy">Where?</span>
            <select className={select} value={setting} onChange={(e) => setSetting(e.target.value as Setting)}>
              <option value="home">Home, office or coffee shop</option>
              <option value="facility">Hospital, care facility or jail</option>
            </select>
          </label>
        ) : null}
      </div>

      <div className="mt-8 border-l-4 border-notary-gold bg-white p-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">Typical total</p>
        <p className="text-4xl font-bold text-notary-navy">
          {money(result.lo)} &ndash; {money(result.hi)}
        </p>
        {service === "general" ? (
          <p className="mt-3 text-gray-700">
            {result.cap.noMax
              ? `${result.stateName} doesn't cap notary fees, so we assumed about $${NO_MAX_ASSUMED} per signature`
              : `${result.stateName} caps the notary fee at $${result.cap.perSignature} per signature`}{" "}
            ({money(result.notarial)} for {signatures} signature{signatures === 1 ? "" : "s"}). The rest is the travel
            fee{setting === "facility" ? " and the extra time a facility visit takes" : ""}
            {timing === "after-hours" ? ", with the usual after-hours premium" : ""}.
          </p>
        ) : (
          <p className="mt-3 text-gray-700">
            Loan signings are usually a flat fee that covers travel, printing the loan package and returning it. If the
            lender or title company booked the signing, they normally pay the notary, not you.
          </p>
        )}
        <p className="mt-3 text-sm text-gray-500">
          {STATE_PAGES.has(state) ? (
            <>
              Full breakdown for your state:{" "}
              <Link href={`/mobile-notary-fees/${state}`} className="text-notary-gold hover:underline">
                mobile notary fees in {result.stateName}
              </Link>
            </>
          ) : (
            <>
              State-by-state guides:{" "}
              <Link href="/mobile-notary-fees" className="text-notary-gold hover:underline">
                mobile notary fees by state
              </Link>
            </>
          )}
        </p>
      </div>
    </section>
  );
}
