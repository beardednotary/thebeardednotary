"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  PRIME_DEALS_PATH,
  PRIME_EVENT_DATES_LABEL,
  PRIME_EVENT_NAME,
  isPrimeEventLive,
  isPrimePromoActive,
} from "../lib/primeDay";

type PrimeDayCalloutProps = {
  item: string;
  className?: string;
};

export default function PrimeDayCallout({ item, className = "" }: PrimeDayCalloutProps) {
  const [active, setActive] = useState(false);
  const [live, setLive] = useState(false);

  useEffect(() => {
    setActive(isPrimePromoActive());
    setLive(isPrimeEventLive());
  }, []);

  if (!active) {
    return null;
  }

  return (
    <div className={`not-prose border-l-4 border-notary-gold bg-notary-cream px-5 py-4 text-gray-800 ${className}`.trim()}>
      <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-notary-gold">
        Buying tip: {PRIME_EVENT_NAME} {live ? "is live" : PRIME_EVENT_DATES_LABEL}
      </p>
      <p className="text-base">
        If you plan to buy {item} in the next few months, check prices during the sale before paying full price. My picks
        below don&apos;t change, only the price does.{" "}
        <Link href={PRIME_DEALS_PATH} className="font-semibold text-notary-navy underline hover:text-notary-gold">
          What&apos;s worth buying on Prime Day
        </Link>
      </p>
    </div>
  );
}
