"use client";

import Link from "next/link";
import { useState } from "react";

type JobType = "general" | "loan-signing" | "specialty";

const defaultsByJobType: Record<
  JobType,
  {
    label: string;
    stateFee: number;
    signatures: number;
    travelFee: number;
    printFee: number;
    scanBackFee: number;
    complexityFee: number;
    recommendedRange: string;
  }
> = {
  general: {
    label: "General notarization",
    stateFee: 15,
    signatures: 2,
    travelFee: 35,
    printFee: 0,
    scanBackFee: 0,
    complexityFee: 0,
    recommendedRange: "$50-$90 is common for a straightforward local mobile appointment.",
  },
  "loan-signing": {
    label: "Loan signing",
    stateFee: 15,
    signatures: 8,
    travelFee: 45,
    printFee: 30,
    scanBackFee: 25,
    complexityFee: 20,
    recommendedRange: "$100-$200 is a realistic working range for many standard signings.",
  },
  specialty: {
    label: "Hospital, jail, or urgent appointment",
    stateFee: 15,
    signatures: 2,
    travelFee: 65,
    printFee: 0,
    scanBackFee: 0,
    complexityFee: 40,
    recommendedRange: "$125-$300 is common when the appointment is high-friction or after-hours.",
  },
};

function roundMoney(value: number) {
  return Math.round(value * 100) / 100;
}

export default function NotaryPricingCalculator() {
  const [jobType, setJobType] = useState<JobType>("general");
  const [stateFee, setStateFee] = useState(defaultsByJobType.general.stateFee);
  const [signatures, setSignatures] = useState(defaultsByJobType.general.signatures);
  const [travelFee, setTravelFee] = useState(defaultsByJobType.general.travelFee);
  const [printFee, setPrintFee] = useState(defaultsByJobType.general.printFee);
  const [scanBackFee, setScanBackFee] = useState(defaultsByJobType.general.scanBackFee);
  const [complexityFee, setComplexityFee] = useState(defaultsByJobType.general.complexityFee);
  const [afterHoursPercent, setAfterHoursPercent] = useState(0);

  const notarialFee = stateFee * signatures;
  const subtotal = notarialFee + travelFee + printFee + scanBackFee + complexityFee;
  const afterHoursFee = subtotal * (afterHoursPercent / 100);
  const recommendedQuote = roundMoney(subtotal + afterHoursFee);

  const currentDefaults = defaultsByJobType[jobType];
  const setupHeavy = printFee > 0 || scanBackFee > 0;

  function applyTemplate(nextType: JobType) {
    const template = defaultsByJobType[nextType];
    setJobType(nextType);
    setStateFee(template.stateFee);
    setSignatures(template.signatures);
    setTravelFee(template.travelFee);
    setPrintFee(template.printFee);
    setScanBackFee(template.scanBackFee);
    setComplexityFee(template.complexityFee);
    setAfterHoursPercent(0);
  }

  return (
    <section className="my-12 border-2 border-notary-gold bg-gray-50 p-8">
      <div className="mb-6 max-w-3xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-notary-gold">Interactive Tool</p>
        <h2 className="mb-4 text-3xl font-bold text-notary-navy">Mobile Notary Pricing Calculator</h2>
        <p className="text-gray-700">
          Use this to build a realistic quote based on signatures, travel, printing, scan-backs, and complexity.
          It is not legal advice or a state fee chart. It is a practical way to see whether your quote actually covers the job.
        </p>
      </div>

      <div className="mb-6 grid gap-3 md:grid-cols-3">
        {(Object.keys(defaultsByJobType) as JobType[]).map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => applyTemplate(key)}
            className={`border px-4 py-3 text-left transition ${
              jobType === key
                ? "border-notary-gold bg-white text-notary-navy"
                : "border-gray-200 bg-white text-gray-700 hover:border-notary-gold"
            }`}
          >
            <p className="font-semibold">{defaultsByJobType[key].label}</p>
            <p className="mt-1 text-sm text-gray-500">{defaultsByJobType[key].recommendedRange}</p>
          </button>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="mb-2 block font-semibold text-notary-navy">State fee per signature</span>
            <input
              type="number"
              min="0"
              step="1"
              value={stateFee}
              onChange={(event) => setStateFee(Number(event.target.value) || 0)}
              className="w-full border border-gray-300 bg-white px-4 py-3"
            />
          </label>

          <label className="block">
            <span className="mb-2 block font-semibold text-notary-navy">Number of signatures</span>
            <input
              type="number"
              min="1"
              step="1"
              value={signatures}
              onChange={(event) => setSignatures(Number(event.target.value) || 1)}
              className="w-full border border-gray-300 bg-white px-4 py-3"
            />
          </label>

          <label className="block">
            <span className="mb-2 block font-semibold text-notary-navy">Travel fee</span>
            <input
              type="number"
              min="0"
              step="5"
              value={travelFee}
              onChange={(event) => setTravelFee(Number(event.target.value) || 0)}
              className="w-full border border-gray-300 bg-white px-4 py-3"
            />
          </label>

          <label className="block">
            <span className="mb-2 block font-semibold text-notary-navy">Printing fee</span>
            <input
              type="number"
              min="0"
              step="5"
              value={printFee}
              onChange={(event) => setPrintFee(Number(event.target.value) || 0)}
              className="w-full border border-gray-300 bg-white px-4 py-3"
            />
          </label>

          <label className="block">
            <span className="mb-2 block font-semibold text-notary-navy">Scan-back fee</span>
            <input
              type="number"
              min="0"
              step="5"
              value={scanBackFee}
              onChange={(event) => setScanBackFee(Number(event.target.value) || 0)}
              className="w-full border border-gray-300 bg-white px-4 py-3"
            />
          </label>

          <label className="block">
            <span className="mb-2 block font-semibold text-notary-navy">Complexity or rush fee</span>
            <input
              type="number"
              min="0"
              step="5"
              value={complexityFee}
              onChange={(event) => setComplexityFee(Number(event.target.value) || 0)}
              className="w-full border border-gray-300 bg-white px-4 py-3"
            />
          </label>

          <label className="block sm:col-span-2">
            <span className="mb-2 block font-semibold text-notary-navy">After-hours / weekend premium (%)</span>
            <input
              type="range"
              min="0"
              max="100"
              step="5"
              value={afterHoursPercent}
              onChange={(event) => setAfterHoursPercent(Number(event.target.value))}
              className="w-full"
            />
            <p className="mt-2 text-sm text-gray-600">{afterHoursPercent}% premium</p>
          </label>
        </div>

        <div className="border-2 border-notary-navy bg-white p-6">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-notary-gold">Recommended Quote</p>
          <p className="mb-4 text-4xl font-bold text-notary-navy">${recommendedQuote.toFixed(2)}</p>

          <div className="space-y-2 text-gray-700">
            <p><strong>Notarial fees:</strong> ${roundMoney(notarialFee).toFixed(2)}</p>
            <p><strong>Travel fee:</strong> ${roundMoney(travelFee).toFixed(2)}</p>
            <p><strong>Printing fee:</strong> ${roundMoney(printFee).toFixed(2)}</p>
            <p><strong>Scan-back fee:</strong> ${roundMoney(scanBackFee).toFixed(2)}</p>
            <p><strong>Complexity / rush:</strong> ${roundMoney(complexityFee).toFixed(2)}</p>
            <p><strong>After-hours premium:</strong> ${roundMoney(afterHoursFee).toFixed(2)}</p>
          </div>

          <div className="mt-5 border-t border-gray-200 pt-5">
            <p className="font-semibold text-notary-navy">Quick read</p>
            <p className="mt-2 text-sm text-gray-700">{currentDefaults.recommendedRange}</p>
            <p className="mt-3 text-sm text-gray-700">
              If this quote feels too high, the answer is not always to lower it. Sometimes the fix is a cleaner workflow,
              faster printing, or better scan-back handling.
            </p>
          </div>

          {setupHeavy ? (
            <div className="mt-5 border-t border-gray-200 pt-5">
              <p className="font-semibold text-notary-navy">This quote depends on equipment</p>
              <div className="mt-3 space-y-2 text-sm">
                <Link href="/best-printers-for-notaries" className="block font-semibold text-notary-gold hover:underline">
                  See the best printer picks
                </Link>
                <Link href="/best-scanners-for-notaries" className="block font-semibold text-notary-gold hover:underline">
                  See the best scanner picks
                </Link>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
