"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

const AFFILIATE_PATTERNS = [
  "amzn.to/",
  "amazon.com/",
  "business.amazon.com",
  "tag=beardednotary-20",
  "ref=32597",
  "bit.ly/bearded20",
] as const;

function isAffiliateUrl(href: string) {
  return AFFILIATE_PATTERNS.some((pattern) => href.includes(pattern));
}

export default function AffiliateClickTracker() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const link = target.closest("a");

      if (!(link instanceof HTMLAnchorElement)) {
        return;
      }

      const href = link.href;

      if (!href || !isAffiliateUrl(href)) {
        return;
      }

      const payload = {
        affiliate_destination: href,
        affiliate_domain: new URL(href).hostname,
        affiliate_label: (link.textContent || "").trim().slice(0, 120),
        page_path: `${window.location.pathname}${window.location.search}`,
      };

      if (window.gtag) {
        window.gtag("event", "affiliate_click", payload);
        return;
      }

      if (window.dataLayer) {
        window.dataLayer.push({ event: "affiliate_click", ...payload });
      }
    }

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}
