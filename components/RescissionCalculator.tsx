"use client";

import { useMemo, useState } from "react";
import { computeRescissionDeadline } from "../lib/federalHolidays";

type TransactionType =
  | "refi-new-lender"
  | "heloc"
  | "cashout-refi"
  | "refi-same-lender-no-new-money"
  | "refi-same-lender-new-money"
  | "purchase"
  | "investment-second-home"
  | "reverse-mortgage"
  | "reverse-mortgage-purchase";

type EligibilityResult = {
  applies: boolean;
  note: string;
};

const transactionOptions: { value: TransactionType; label: string }[] = [
  { value: "refi-new-lender", label: "Refinance of a primary residence, with a different lender" },
  { value: "heloc", label: "Home equity loan or HELOC" },
  { value: "cashout-refi", label: "Cash-out refinance, primary residence, different lender" },
  { value: "refi-same-lender-no-new-money", label: "Refinance with your current lender, no additional money borrowed" },
  { value: "refi-same-lender-new-money", label: "Refinance with your current lender, WITH additional money borrowed" },
  { value: "purchase", label: "Purchase of a home" },
  { value: "investment-second-home", label: "Investment property or second home (not primary residence)" },
  { value: "reverse-mortgage", label: "Reverse mortgage (HECM)" },
  { value: "reverse-mortgage-purchase", label: "Reverse mortgage for purchase (HECM for Purchase)" },
];

function getEligibility(type: TransactionType): EligibilityResult {
  switch (type) {
    case "refi-new-lender":
    case "heloc":
    case "cashout-refi":
    case "reverse-mortgage":
      return { applies: true, note: "This transaction type generally has a 3-business-day rescission period." };
    case "refi-same-lender-new-money":
      return {
        applies: true,
        note:
          "Same-lender refinances are only partially exempt: the portion that pays off the original balance is not rescindable, but any new money advanced beyond that is generally still subject to rescission. Confirm the exact treatment with the lender or title company — this is a case where the flat yes/no answer isn't reliable.",
      };
    case "refi-same-lender-no-new-money":
      return {
        applies: false,
        note: "A same-lender refinance with no new money advanced is generally exempt from rescission (the \"same-creditor\" exemption).",
      };
    case "purchase":
      return { applies: false, note: "Purchase-money loans generally do not have a rescission period." };
    case "investment-second-home":
      return { applies: false, note: "Rescission generally applies only to a borrower's primary residence." };
    case "reverse-mortgage-purchase":
      return { applies: false, note: "HECM for Purchase transactions generally do not have a 3-day right to cancel." };
    default:
      return { applies: false, note: "" };
  }
}

function formatDate(date: Date): string {
  return date.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function parseDateInput(value: string): Date | null {
  if (!value) return null;
  const [year, month, day] = value.split("-").map(Number);
  if (!year || !month || !day) return null;
  return new Date(year, month - 1, day);
}

export default function RescissionCalculator() {
  const [transactionType, setTransactionType] = useState<TransactionType>("refi-new-lender");
  const [triggerDateInput, setTriggerDateInput] = useState("");

  const eligibility = useMemo(() => getEligibility(transactionType), [transactionType]);
  const triggerDate = useMemo(() => parseDateInput(triggerDateInput), [triggerDateInput]);

  const deadline = useMemo(() => {
    if (!triggerDate || !eligibility.applies) return null;
    return computeRescissionDeadline(triggerDate);
  }, [triggerDate, eligibility.applies]);

  return (
    <section className="my-12 border-2 border-notary-gold bg-gray-50 p-8">
      <div className="mb-6 max-w-3xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-notary-gold">Interactive Tool</p>
        <h2 className="mb-4 text-3xl font-bold text-notary-navy">Rescission Deadline Calculator</h2>
        <p className="text-gray-700">
          Estimates the 3-business-day right-of-rescission deadline under Regulation Z. This is a planning estimate,
          not legal or compliance advice — the controlling deadline is whatever the borrower's actual Notice of
          Right to Cancel states. Always confirm with the title company or lender, especially around holidays.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="grid gap-4">
          <label className="block">
            <span className="mb-2 block font-semibold text-notary-navy">Transaction type</span>
            <select
              value={transactionType}
              onChange={(event) => setTransactionType(event.target.value as TransactionType)}
              className="w-full border border-gray-300 bg-white px-4 py-3"
            >
              {transactionOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="mb-2 block font-semibold text-notary-navy">
              Trigger date (signing date, or the date a corrected disclosure was received if later)
            </span>
            <input
              type="date"
              value={triggerDateInput}
              onChange={(event) => setTriggerDateInput(event.target.value)}
              className="w-full border border-gray-300 bg-white px-4 py-3"
            />
            <p className="mt-2 text-sm text-gray-600">
              Use the latest of: the signing date, the date the borrower received the Truth in Lending disclosure,
              and the date the borrower received the Notice of Right to Cancel. Most of the time these are the same
              day.
            </p>
          </label>
        </div>

        <div className="border-2 border-notary-navy bg-white p-6">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-notary-gold">Result</p>

          {!eligibility.applies ? (
            <>
              <p className="mb-3 text-xl font-bold text-notary-navy">No rescission period applies</p>
              <p className="text-sm text-gray-700">{eligibility.note}</p>
            </>
          ) : !triggerDate ? (
            <p className="text-gray-700">Enter a trigger date to calculate the deadline.</p>
          ) : deadline ? (
            <>
              <p className="mb-1 text-sm text-gray-600">Rescission expires at midnight on:</p>
              <p className="mb-4 text-2xl font-bold text-notary-navy">{formatDate(deadline)}</p>
              <p className="text-sm text-gray-700">
                The loan generally cannot fund until this date has fully passed. {eligibility.note}
              </p>
            </>
          ) : null}

          <div className="mt-5 border-t border-gray-200 pt-5 text-sm text-gray-600">
            <p>
              This estimate is not a substitute for the actual Notice of Right to Cancel in the loan package. If the
              signing generates a corrected disclosure after the fact, the clock restarts from the date that
              corrected disclosure is received — recalculate using that later date.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
