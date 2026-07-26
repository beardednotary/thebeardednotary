import type { Metadata } from "next";
import Link from "next/link";
import ThankYouAnalytics from "../../components/ThankYouAnalytics";

export const metadata: Metadata = {
  title: "Thank You | The Bearded Notary",
  description: "Download your free First 30 Days Mobile Notary Action Plan and keep building your notary business.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "/thank-you",
  },
};

const actionPlanWeeks = [
  {
    title: "Week 1: Foundation and setup",
    items: [
      "Order your core supplies: stamp, journal, business cards, thumbprint pad, and appointment basics.",
      "Set up your business email, voicemail, and payment methods.",
      "Lock in your pricing for notarizations, travel, and after-hours work.",
      "Create your Google Business Profile and define your service area.",
      "Practice your notarization process before live appointments.",
    ],
  },
  {
    title: "Week 2: Marketing and training",
    items: [
      "List your business on the strongest free directory and map platforms.",
      "Add yourself to notary-specific directories for extra visibility.",
      "Start loan signing training if that matches your income goals.",
      "Build a ready-to-go mobile notary kit for faster response times.",
      "Make your first outreach posts and direct local contacts.",
    ],
  },
  {
    title: "Week 3: First clients and reviews",
    items: [
      "Take early jobs from warm contacts and sharpen your workflow.",
      "Complete your first notarizations and tighten your payment process.",
      "Ask every happy client for a Google review.",
      "Track where each lead came from so you know what is working.",
      "Review your pricing and make small corrections where needed.",
    ],
  },
  {
    title: "Week 4: Scale and systems",
    items: [
      "Apply to signing companies if you are pursuing loan signings.",
      "Double down on the marketing channels already producing responses.",
      "Work toward your first 5 to 10 reviews.",
      "Measure signings completed, income earned, and hours worked.",
      "Set your month-two goals and map the next round of action steps.",
    ],
  },
];

const nextSteps = [
  {
    title: "Read the full 30-day guide",
    href: "/first-30-days-new-notary",
    text: "Use the full article for the day-by-day version of this action plan.",
  },
  {
    title: "Dial in your pricing",
    href: "/how-much-to-charge-mobile-notary",
    text: "Use the pricing guide to tighten your fees, travel charges, and package offers.",
  },
  {
    title: "Build your mobile setup",
    href: "/mobile-notary-supplies",
    text: "Use the supplies checklist to make sure your gear is dependable before appointments stack up.",
  },
  {
    title: "Get found by clients",
    href: "/free-marketing-sites-notaries",
    text: "Start with the easiest free listings and build local visibility fast.",
  },
];

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-notary-cream">
      <ThankYouAnalytics />
      <section className="border-b-4 border-notary-gold bg-notary-navy text-white">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-notary-gold">
            Subscription Confirmed
          </p>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Your First 30 Days Mobile Notary Action Plan is ready.</h1>
          <p className="max-w-3xl text-lg text-gray-200">
            Use this condensed version to stay focused during your first month, then jump into the full article when you
            want the day-by-day details.
          </p>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto grid max-w-5xl gap-10 px-4 md:grid-cols-[1.7fr_1fr]">
          <div>
            <div className="mb-8 border-2 border-notary-gold bg-notary-navy p-8 text-white">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-notary-gold">Best Next Step</p>
              <h2 className="mb-3 text-3xl font-bold">Read the full 30-day guide now.</h2>
              <p className="mb-6 max-w-2xl text-lg text-gray-200">
                The PDF gives you the roadmap. The full guide gives you the day-by-day execution plan, supporting links,
                and the exact actions to take this week.
              </p>
              <Link
                href="/first-30-days-new-notary"
                className="inline-block bg-notary-gold px-6 py-3 font-bold text-notary-navy transition hover:bg-[#c79f1f]"
              >
                Open the full 30-day article
              </Link>
            </div>

            <div className="mb-8 flex flex-wrap gap-4">
              <a
                href="/downloads/first-30-days-mobile-notary-action-plan.pdf"
                download
                className="bg-notary-gold px-6 py-3 font-bold text-notary-navy transition hover:bg-[#c79f1f]"
              >
                Download the PDF
              </a>
              <Link
                href="/first-30-days-new-notary"
                className="border-2 border-notary-gold px-6 py-3 font-bold text-notary-navy transition hover:bg-notary-gold/10"
              >
                Read the full article
              </Link>
              <Link
                href="/"
                className="border-2 border-notary-navy px-6 py-3 font-bold text-notary-navy transition hover:bg-notary-navy hover:text-white"
              >
                Back to the site
              </Link>
            </div>

            <div className="border-2 border-notary-gold/30 bg-gray-50 p-8">
              <h2 className="mb-6 text-3xl font-bold text-notary-navy">First 30 Days Action Plan</h2>
              <div className="space-y-6">
                {actionPlanWeeks.map((week) => (
                  <section key={week.title} className="border-l-4 border-notary-navy bg-white p-5">
                    <h3 className="mb-3 text-2xl font-bold text-notary-navy">{week.title}</h3>
                    <ul className="space-y-2 text-lg text-gray-800">
                      {week.items.map((item) => (
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
                If you want momentum quickly, start with the full article and then use these supporting guides.
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
