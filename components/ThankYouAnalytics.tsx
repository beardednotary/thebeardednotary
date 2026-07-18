"use client";

import { useEffect } from "react";
import { ATTRIBUTION_KEYS, type PendingSignupPayload } from "../lib/signupAttribution";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function ThankYouAnalytics() {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const rawPayload = sessionStorage.getItem(ATTRIBUTION_KEYS.pendingSignup);

    if (!rawPayload) {
      return;
    }

    try {
      const payload = JSON.parse(rawPayload) as PendingSignupPayload;

      window.gtag?.("event", "sign_up", payload);
    } catch {
      // Ignore malformed analytics payloads so the page still renders cleanly.
    } finally {
      sessionStorage.removeItem(ATTRIBUTION_KEYS.pendingSignup);
    }
  }, []);

  return null;
}
