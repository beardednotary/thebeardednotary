"use client";

import { useState } from "react";

type VolumeType = "part-time" | "regular" | "high-volume";

const RATE_H1_2026 = 0.725; // Jan 1 - Jun 30, 2026
const RATE_H2_2026 = 0.76; // Jul 1 - Dec 31, 2026 (mid-year IRS increase)

const defaultsByVolume: Record<
  VolumeType,
  {
    label: string;
    signingsPerMonth: number;
    milesPerSigning: number;
    otherMiles: number;
    note: string;
  }
> = {
  "part-time": {
    label: "Part-time (few signings/week)",
    signingsPerMonth: 12,
    milesPerSigning: 15,
    otherMiles: 20,
    note: "Typical for notaries doing general notarizations and occasional mobile appointments.",
  },
  regular: {
    label: "Regular mobile notary",
    signingsPerMonth: 25,
    milesPerSigning: 18,
    otherMiles: 40,
    note: "Typical for notaries mixing mobile notarizations with some loan signings.",
  },
  "high-volume": {
    label: "Full-time loan signing agent",
    signingsPerMonth: 45,
    milesPerSigning: 22,
    otherMiles: 60,
    note: "Typical for full-time signing agents doing 40+ signings a month.",
  },
};

function round(value: number) {
  return Math.round(value * 100) / 100;
}

function formatMoney(value: number) {
  return value.toLocaleString(undefined, { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

export default function MileageDeductionCalculator() {
  const [volumeType, setVolumeType] = useState<VolumeType>("regular");
  const [signingsPerMonth, setSigningsPerMonth] = useState(defaultsByVolume.regular.signingsPerMonth);
  const [milesPerSigning, setMilesPerSigning] = useState(defaultsByVolume.regular.milesPerSigning);
  const [otherMiles, setOtherMiles] = useState(defaultsByVolume.regular.otherMiles);
  const [taxRate, setTaxRate] = useState(27);

  const monthlyMiles = signingsPerMonth * milesPerSigning + otherMiles;
  const annualMiles = monthlyMiles * 12;
  const deductionAtH1Rate = round(annualMiles * RATE_H1_2026);
  const deductionAtH2Rate = round(annualMiles * RATE_H2_2026);
  const blendedDeduction = round((deductionAtH1Rate + deductionAtH2Rate) / 2);
  const estimatedTaxSavings = round(blendedDeduction * (taxRate / 100));

  const currentDefaults = defaultsByVolume[volumeType];

  function applyTemplate(nextType: VolumeType) {
    const template = defaultsByVolume[nextType];
    setVolumeType(nextType);
    setSigningsPerMonth(template.signingsPerMonth);
    setMilesPerSigning(template.milesPerSigning);
    setOtherMiles(template.otherMiles);
  }

  return (
    <section className="my-12 border-2 border-notary-gold bg-gray-50 p-8">
      <div className="mb-6 max-w-3xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-notary-gold">Interactive Tool</p>
        <h2 className="mb-4 text-3xl font-bold text-notary-navy">Mileage Deduction Calculator</h2>
        <p className="text-gray-700">
          Estimate your annual business mileage and what it is worth using the current IRS standard mileage rates for 2026.
          This is a planning estimate, not tax advice — talk to a CPA about your specific situation.
        </p>
      </div>

      <div className="mb-6 grid gap-3 md:grid-cols-3">
        {(Object.keys(defaultsByVolume) as VolumeType[]).map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => applyTemplate(key)}
            className={`border px-4 py-3 text-left transition ${
              volumeType === key
                ? "border-notary-gold bg-white text-notary-navy"
                : "border-gray-200 bg-white text-gray-700 hover:border-notary-gold"
            }`}
          >
            <p className="font-semibold">{defaultsByVolume[key].label}</p>
            <p className="mt-1 text-sm text-gray-500">{defaultsByVolume[key].note}</p>
          </button>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="mb-2 block font-semibold text-notary-navy">Signings per month</span>
            <input
              type="number"
              min="0"
              step="1"
              value={signingsPerMonth}
              onChange={(event) => setSigningsPerMonth(Number(event.target.value) || 0)}
              className="w-full border border-gray-300 bg-white px-4 py-3"
            />
          </label>

          <label className="block">
            <span className="mb-2 block font-semibold text-notary-navy">Round-trip miles per signing</span>
            <input
              type="number"
              min="0"
              step="1"
              value={milesPerSigning}
              onChange={(event) => setMilesPerSigning(Number(event.target.value) || 0)}
              className="w-full border border-gray-300 bg-white px-4 py-3"
            />
          </label>

          <label className="block sm:col-span-2">
            <span className="mb-2 block font-semibold text-notary-navy">Other business miles per month</span>
            <input
              type="number"
              min="0"
              step="5"
              value={otherMiles}
              onChange={(event) => setOtherMiles(Number(event.target.value) || 0)}
              className="w-full border border-gray-300 bg-white px-4 py-3"
            />
            <p className="mt-2 text-sm text-gray-600">Supply runs, bank deposits, notary association events, etc.</p>
          </label>

          <label className="block sm:col-span-2">
            <span className="mb-2 block font-semibold text-notary-navy">Estimated combined tax rate (%)</span>
            <input
              type="range"
              min="15"
              max="35"
              step="1"
              value={taxRate}
              onChange={(event) => setTaxRate(Number(event.target.value))}
              className="w-full"
            />
            <p className="mt-2 text-sm text-gray-600">{taxRate}% (federal + self-employment + state, if applicable)</p>
          </label>
        </div>

        <div className="border-2 border-notary-navy bg-white p-6">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-notary-gold">Estimated Annual Deduction</p>
          <p className="mb-1 text-4xl font-bold text-notary-navy">{formatMoney(blendedDeduction)}</p>
          <p className="mb-4 text-sm text-gray-600">
            {formatMoney(deductionAtH1Rate)} at the Jan–Jun rate (72.5¢/mi) to {formatMoney(deductionAtH2Rate)} at the
            Jul–Dec rate (76¢/mi), depending on when the miles were driven.
          </p>

          <div className="space-y-2 text-gray-700">
            <p><strong>Monthly business miles:</strong> {monthlyMiles.toLocaleString()}</p>
            <p><strong>Annual business miles:</strong> {annualMiles.toLocaleString()}</p>
          </div>

          <div className="mt-5 border-t border-gray-200 pt-5">
            <p className="font-semibold text-notary-navy">Estimated tax savings</p>
            <p className="mt-2 text-2xl font-bold text-notary-gold">{formatMoney(estimatedTaxSavings)}</p>
            <p className="mt-2 text-sm text-gray-700">{currentDefaults.note}</p>
          </div>

          <div className="mt-5 border-t border-gray-200 pt-5">
            <p className="font-semibold text-notary-navy">This only works if the miles are logged</p>
            <p className="mt-2 text-sm text-gray-700">
              The IRS requires a contemporaneous log (date, locations, purpose, miles) for every trip. An app that tracks
              automatically is the only realistic way to actually capture this deduction.
            </p>
            <a
              href="https://try.mileiq.com/NGEnoN"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block bg-notary-navy px-5 py-3 font-semibold text-white transition hover:bg-opacity-90"
            >
              Try MileIQ Free (40 Drives/Month)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
