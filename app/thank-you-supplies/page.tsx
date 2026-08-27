import type { Metadata } from "next";
import Link from "next/link";
import ThankYouAnalytics from "../../components/ThankYouAnalytics";

export const metadata: Metadata = {
  title: "Thank You | The Bearded Notary",
  description: "Download your free Mobile Notary Starter Kit checklist and build your setup in stages.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "/thank-you-supplies",
  },
};

const stages = [
  {
    title: "Stage 1: Legal essentials (before your first appointment)",
    items: [
      "Notary sequential journal",
      "Self-inking notary stamp (from a notary-specific supplier)",
      "Inkless thumbprint pad",
      "Blue and black ink pens (multiple)",
    ],
  },
  {
    title: "Stage 2: Mobile workflow",
    items: [
      "Locking notary bag or document case",
      "Stapler and staple remover",
      "Phone mount",
    ],
  },
  {
    title: "Stage 3: Business and client tools",
    items: [
      "Business cards",
      "Reliable cell phone",
      "Tablet or admin device (optional)",
    ],
  },
  {
    title: "Stage 4: Loan signing upgrades",
    items: [
      "Portable document scanner",
      "Dual-tray laser printer",
    ],
  },
];

const nextSteps = [
  {
    title: "Read the full supplies guide",
    href: "/mobile-notary-supplies",
    text: "Get the budget and premium option for every item, plus the full buyer's guide.",
  },
  {
    title: "Get your printer sorted",
    href: "/best-printers-for-notaries",
    text: "The single highest-impact purchase for loan signing work. See the top picks.",
  },
  {
    title: "Pick a scanner for scan-backs",
    href: "/best-scanners-for-notaries",
    text: "A reliable portable scanner saves real time once scan-backs are part of the job.",
  },
  {
    title: "Dial in your pricing",
    href: "/how-much-to-charge-mobile-notary",
    text: "Make sure your rates actually cover the gear and time your business requires.",
  },
  {
    title: "Read the First 30 Days plan",
    href: "/first-30-days-new-notary",
    text: "Turn a ready setup into booked appointments with the day-by-day action plan.",
  },
];

export default function ThankYouSuppliesPage() {
  return (
    <main className="min-h-screen bg-notary-cream">
      <ThankYouAnalytics />
      <section className="border-b-4 border-notary-gold bg-notary-navy text-white">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-notary-gold">
            Subscription Confirmed
          </p>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Your Mobile Notary Starter Kit checklist is ready.</h1>
          <p className="max-w-3xl text-lg text-gray-200">
            Use this to build your setup in stages, then jump into the full guide when you want the budget and
            premium options for every item.
          </p>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto grid max-w-5xl gap-10 px-4 md:grid-cols-[1.7fr_1fr]">
          <div>
            <div className="mb-8 border-2 border-notary-gold bg-notary-navy p-8 text-white">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-notary-gold">Best Next Step</p>
              <h2 className="mb-3 text-3xl font-bold">Read the full supplies guide now.</h2>
              <p className="mb-6 max-w-2xl text-lg text-gray-200">
                The PDF gives you the checklist. The full guide gives you budget, overall, and premium picks for
                every item, plus links to the deeper printer and scanner comparisons.
              </p>
              <Link
                href="/mobile-notary-supplies"
                className="inline-block bg-notary-gold px-6 py-3 font-bold text-notary-navy transition hover:bg-[#c79f1f]"
              >
                Open the full supplies guide
              </Link>
            </div>

            <div className="mb-8 flex flex-wrap gap-4">
              <a
                href="/downloads/mobile-notary-starter-kit.pdf"
                download
                className="bg-notary-gold px-6 py-3 font-bold text-notary-navy transition hover:bg-[#c79f1f]"
              >
                Download the PDF
              </a>
              <Link
                href="/mobile-notary-supplies"
                className="border-2 border-notary-gold px-6 py-3 font-bold text-notary-navy transition hover:bg-notary-gold/10"
              >
                Read the full guide
              </Link>
              <Link
                href="/"
                className="border-2 border-notary-navy px-6 py-3 font-bold text-notary-navy transition hover:bg-notary-navy hover:text-white"
              >
                Back to the site
              </Link>
            </div>

            <div className="border-2 border-notary-gold/30 bg-gray-50 p-8">
              <h2 className="mb-6 text-3xl font-bold text-notary-navy">Mobile Notary Starter Kit</h2>
              <p className="mb-6 text-gray-700">
                Don&apos;t buy everything on day one. Build this in four stages — legal essentials first, then
                workflow tools, then the upgrades that matter once loan signing volume becomes real.
              </p>
              <div className="space-y-6">
                {stages.map((stage) => (
                  <section key={stage.title} className="border-l-4 border-notary-navy bg-white p-5">
                    <h3 className="mb-3 text-2xl font-bold text-notary-navy">{stage.title}</h3>
                    <ul className="space-y-2 text-lg text-gray-800">
                      {stage.items.map((item) => (
                        <li key={item}>- {item}</li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="border border-gray-200 bg-white p-6">
              <h2 className="mb-3 text-2xl font-bold text-notary-navy">What to do next</h2>
              <p className="text-gray-700">
                If you want momentum quickly, start with the full guide and then use these supporting resources.
              </p>
            </div>

            {nextSteps.map((step) => (
              <Link key={step.href} href={step.href} className="block border border-gray-200 bg-white p-6 transition hover:border-notary-gold">
                <h3 className="mb-2 text-xl font-bold text-notary-navy">{step.title}</h3>
                <p className="mb-3 text-gray-700">{step.text}</p>
                <span className="font-semibold text-notary-gold">Open guide -&gt;</span>
              </Link>
            ))}
          </aside>
        </div>
      </section>
    </main>
  );
}
