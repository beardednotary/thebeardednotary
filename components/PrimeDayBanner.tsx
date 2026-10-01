"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  PRIME_DEALS_PATH,
  PRIME_EVENT_DATES_LABEL,
  PRIME_EVENT_END,
  PRIME_EVENT_NAME,
  isPrimeEventLive,
  isPrimePromoActive,
} from "../lib/primeDay";

const DISMISS_KEY = `prime-banner-dismissed-${PRIME_EVENT_END.toISOString().slice(0, 10)}`;

export default function PrimeDayBanner() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [live, setLive] = useState(false);

  useEffect(() => {
    if (!isPrimePromoActive()) {
      return;
    }

    try {
      if (window.localStorage.getItem(DISMISS_KEY) === "1") {
        return;
      }
    } catch {
      // Storage unavailable; show the banner anyway.
    }

    setLive(isPrimeEventLive());
    setVisible(true);
  }, []);

  if (!visible || pathname === PRIME_DEALS_PATH || pathname?.startsWith("/thank-you")) {
    return null;
  }

  function dismiss() {
    setVisible(false);
    try {
      window.localStorage.setItem(DISMISS_KEY, "1");
    } catch {
      // Ignore.
    }
  }

  return (
    <div className="bg-notary-gold text-notary-navy">
      <div className="mx-auto flex max-w-5xl items-center gap-3 px-4 py-2 text-sm">
        <p className="flex-1">
          <span className="font-bold">
            {live ? `${PRIME_EVENT_NAME} is live` : `${PRIME_EVENT_NAME}, ${PRIME_EVENT_DATES_LABEL}`}:
          </span>{" "}
          the notary gear actually worth buying on sale, and what to skip.{" "}
          <Link href={PRIME_DEALS_PATH} className="font-semibold underline underline-offset-2 hover:opacity-80">
            See the list
          </Link>
        </p>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss"
          className="px-2 text-lg leading-none opacity-70 transition hover:opacity-100"
        >
          ×
        </button>
      </div>
    </div>
  );
}
