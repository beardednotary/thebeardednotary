"use client";

import { useEffect } from "react";
import { ATTRIBUTION_KEYS, type PendingSignupPayload } from "../lib/signupAttribution";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
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
      let attempts = 0;

      const sendEvent = () => {
        attempts += 1;

        if (window.gtag) {
          window.gtag("event", "sign_up", payload);
          sessionStorage.removeItem(ATTRIBUTION_KEYS.pendingSignup);
          return;
        }

        if (window.dataLayer) {
          window.dataLayer.push({ event: "sign_up", ...payload });
          sessionStorage.removeItem(ATTRIBUTION_KEYS.pendingSignup);
          return;
        }

        if (attempts < 10) {
          window.setTimeout(sendEvent, 300);
          return;
        }

        sessionStorage.removeItem(ATTRIBUTION_KEYS.pendingSignup);
      };

      sendEvent();
    } catch {
      // Ignore malformed analytics payloads so the page still renders cleanly.
    } finally {
      sessionStorage.removeItem(ATTRIBUTION_KEYS.gaDebug);
    }
  }, []);

  return null;
}
