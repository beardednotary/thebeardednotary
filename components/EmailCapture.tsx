"use client";

import { FormEvent, useState } from "react";

type EmailCaptureProps = {
  className?: string;
  compact?: boolean;
  heading: string;
  description: string;
  buttonLabel?: string;
  source: string;
};

export default function EmailCapture({
  className = "",
  compact = false,
  heading,
  description,
  buttonLabel = "Join the list",
  source,
}: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          source,
        }),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setMessage(data.message || "Thanks for subscribing.");
      setEmail("");
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
