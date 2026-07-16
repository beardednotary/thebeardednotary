"use client";

import { usePathname, useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const ATTRIBUTION_KEYS = {
  landingPage: "bn_landing_page",
  referrer: "bn_referrer",
  utmSource: "bn_utm_source",
  utmMedium: "bn_utm_medium",
  utmCampaign: "bn_utm_campaign",
};

type EmailCaptureProps = {
  className?: string;
  compact?: boolean;
  heading: string;
  description: string;
  buttonLabel?: string;
  source: string;
  successRedirect?: string;
};

export default function EmailCapture({
  className = "",
  compact = false,
  heading,
  description,
  buttonLabel = "Join the list",
  source,
  successRedirect = "/thank-you",
}: EmailCaptureProps) {
  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
  const pathname = usePathname();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const currentPath = `${window.location.pathname}${window.location.search}`;

    if (!sessionStorage.getItem(ATTRIBUTION_KEYS.landingPage)) {
      sessionStorage.setItem(ATTRIBUTION_KEYS.landingPage, currentPath);
      sessionStorage.setItem(ATTRIBUTION_KEYS.referrer, document.referrer || "direct");
      const params = new URLSearchParams(window.location.search);
      sessionStorage.setItem(ATTRIBUTION_KEYS.utmSource, params.get("utm_source") || "");
      sessionStorage.setItem(ATTRIBUTION_KEYS.utmMedium, params.get("utm_medium") || "");
      sessionStorage.setItem(ATTRIBUTION_KEYS.utmCampaign, params.get("utm_campaign") || "");
    }
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("loading");
    setMessage("");

    if (!endpoint) {
      setStatus("error");
      setMessage("Email signup is not connected yet. Add NEXT_PUBLIC_FORMSPREE_ENDPOINT to enable it.");
      return;
    }

    const currentPath =
      typeof window !== "undefined" ? `${window.location.pathname}${window.location.search}` : pathname || "/";
    const landingPage =
      typeof window !== "undefined" ? sessionStorage.getItem(ATTRIBUTION_KEYS.landingPage) || currentPath : currentPath;
    const referrer =
      typeof window !== "undefined" ? sessionStorage.getItem(ATTRIBUTION_KEYS.referrer) || document.referrer || "direct" : "direct";
    const utmSource = typeof window !== "undefined" ? sessionStorage.getItem(ATTRIBUTION_KEYS.utmSource) || "" : "";
    const utmMedium = typeof window !== "undefined" ? sessionStorage.getItem(ATTRIBUTION_KEYS.utmMedium) || "" : "";
    const utmCampaign = typeof window !== "undefined" ? sessionStorage.getItem(ATTRIBUTION_KEYS.utmCampaign) || "" : "";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email,
          source,
          message: `Newsletter signup from ${source}`,
          _subject: `New email signup: ${source}`,
          currentPage: currentPath,
          landingPage,
          referrer,
          utmSource,
          utmMedium,
          utmCampaign,
        }),
      });

      const contentType = response.headers.get("content-type") || "";
      const data = contentType.includes("application/json")
        ? ((await response.json()) as { errors?: Array<{ message?: string }> })
        : null;

      if (!response.ok) {
        const errorMessage = data?.errors?.[0]?.message || "Something went wrong. Please try again.";
        throw new Error(errorMessage);
      }

      setStatus("success");
      setMessage("Thanks. You're on the list.");
      setEmail("");
      window.gtag?.("event", "sign_up", {
        method: "formspree",
        form_source: source,
        page_path: currentPath,
        landing_page: landingPage,
        referrer,
        utm_source: utmSource,
        utm_medium: utmMedium,
        utm_campaign: utmCampaign,
      });
      router.push(successRedirect);
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <div className={className}>
      <h3 className={compact ? "text-2xl font-bold text-notary-navy mb-3" : "text-3xl font-bold text-notary-navy mb-4"}>
        {heading}
      </h3>
      <p className={compact ? "text-gray-700 mb-5" : "text-lg text-gray-700 mb-6 max-w-2xl"}>{description}</p>
      <form onSubmit={handleSubmit} className={compact ? "flex flex-col sm:flex-row gap-3" : "flex flex-col sm:flex-row gap-4 max-w-2xl"}>
        <label className="sr-only" htmlFor={`${source}-email`}>
          Email address
        </label>
        <input
          id={`${source}-email`}
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email"
          className="flex-1 border-2 border-notary-navy/15 bg-white px-4 py-3 text-notary-navy placeholder:text-gray-500 focus:border-notary-gold focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-notary-gold px-6 py-3 font-bold text-notary-navy transition hover:bg-[#c79f1f] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "loading" ? "Submitting..." : buttonLabel}
        </button>
      </form>
      <p className="mt-3 text-sm text-gray-600">
        {status === "success" ? message : "Get new guides, pricing updates, and gear picks for working notaries."}
      </p>
      {status === "error" ? <p className="mt-2 text-sm text-red-700">{message}</p> : null}
    </div>
  );
}
