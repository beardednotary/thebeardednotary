"use client";

import { useEffect, useState } from "react";
import { isPrimeEventLive } from "../lib/primeDay";

type PrimeDealBadgeProps = {
  note?: string;
};

// Renders only while the Prime event is live, so a stale "on sale" claim can't linger.
export default function PrimeDealBadge({ note }: PrimeDealBadgeProps) {
  const [live, setLive] = useState(false);

  useEffect(() => {
    setLive(isPrimeEventLive());
  }, []);

  if (!live) {
    return null;
  }

  return (
    <span className="inline-block rounded bg-green-700 px-2 py-0.5 text-xs font-bold uppercase tracking-wide text-white">
      {note || "On sale now"}
    </span>
  );
}
