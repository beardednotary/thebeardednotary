import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleSignupCta from '../../components/ArticleSignupCta';
import AffiliateDisclosure from '../../components/AffiliateDisclosure';
import ArticleHeader from '../../components/ArticleHeader';
import AuthorByline from '../../components/AuthorByline';
import JsonLd from '../../components/JsonLd';
import { buildArticleSchema, buildBreadcrumbSchema, buildFaqSchema, getAbsoluteUrl } from '../../lib/schema';

export const metadata: Metadata = {
  title: 'Notary E&O Insurance: Where to Get It and What It Costs (2026) | The Bearded Notary',
  description: "Errors and omissions insurance for notaries and loan signing agents: what it actually covers, realistic cost ranges, and where to get it.",
  alternates: {
    canonical: '/notary-eo-insurance',
  },
  openGraph: {
    title: 'Notary E&O Insurance: Where to Get It and What It Costs',
    description: 'What E&O insurance covers, realistic cost ranges, and where to get it as a notary or loan signing agent.',
    images: ['/images/notary-pricing-guide-featured.png'],
  },
};

export default function NotaryEOInsurance() {
  const articleSchema = buildArticleSchema({
    title: 'Notary E&O Insurance: Where to Get It and What It Costs (2026)',
    description:
      "Errors and omissions insurance for notaries and loan signing agents: what it actually covers, realistic cost ranges, and where to get it.",
    path: '/notary-eo-insurance',
    image: '/images/notary-pricing-guide-featured.png',
    dateModified: '2026-09-15',
  });
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: getAbsoluteUrl('/') },
    { name: 'Notary E&O Insurance', url: getAbsoluteUrl('/notary-eo-insurance') },
  ]);
  const faqSchema = buildFaqSchema([
    {
      question: 'Do notaries need E&O insurance?',
      answer:
        "It's not legally required in most states, but it's strongly recommended. Your notary bond protects the public if you make an error — it does not protect you. E&O insurance protects your personal assets if you're sued.",
    },
    {
      question: 'How much does notary E&O insurance cost?',
      answer:
        'Basic notary-specific E&O bundled through a state-approved bond provider often runs $50-150 per year for $25,000-$100,000 in coverage. Standalone professional liability coverage from a general small-business insurer can cost more but may offer broader protection — Hiscox, for example, states E&O coverage starting around $22.50 per month.',
    },
    {
      question: 'How much E&O coverage do I need?',
      answer:
        'A common baseline is $25,000. If you plan to do loan signings, many title and signing companies expect $100,000 in coverage before they will assign you work.',
    },
    {
      question: 'Is E&O insurance the same as a notary bond?',
      answer:
        'No. A bond protects the public — if you make an error, the bond issuer can pay a claim, then comes after you to recover it. E&O insurance protects you directly, covering legal defense costs and claims against your own personal assets.',
    },
  ]);

  return (
    <div className="min-h-screen bg-white">
      <ArticleHeader title="Notary E&O Insurance: Where to Get It and What It Costs" eyebrow="Updated September 2026" />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <JsonLd data={[articleSchema, breadcrumbSchema, faqSchema]} />

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-8 font-semibold">
            Your notary bond protects the public. It does not protect you. E&O insurance is what actually covers you
            if a mistake turns into a lawsuit — here's what it costs and where to get it.
          </p>

          <AuthorByline className="mb-8" />
          <AffiliateDisclosure className="mb-8" />

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">Why a Bond Isn't Enough</h2>

          <p className="text-gray-700 mb-8">
            Your state notary bond exists to protect the public, not you. If you make an error and someone files a
            claim, the bond issuer pays out — then comes after you to recover what they paid. One lawsuit without
            E&O coverage could genuinely wipe out your personal savings. E&O (errors and omissions) insurance is
            what protects you directly: legal defense costs, negligence claims, and claims tied to past work you've
            already completed.
          </p>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">What E&O Actually Costs</h2>

          <p className="text-gray-700 mb-6">
            There are two different paths here, and they're priced differently because they're genuinely different
            products.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 border-2 border-gray-200 p-6 rounded">
              <h3 className="text-xl font-bold text-notary-navy mb-3">Bundled with your bond</h3>
              <p className="text-gray-700 mb-3">
                <strong>Typical cost:</strong> $50-150/year for $25,000-$100,000 coverage
              </p>
              <p className="text-gray-700 text-sm">
                Many state-approved bond providers sell basic E&O alongside your notary bond at commissioning time.
                It's the cheapest path and covers most general notary work.
              </p>
            </div>
            <div className="bg-gray-50 border-2 border-notary-gold p-6 rounded">
              <h3 className="text-xl font-bold text-notary-navy mb-3">Standalone professional liability</h3>
              <p className="text-gray-700 mb-3">
                <strong>Typical cost:</strong> Higher, priced by the carrier's own underwriting
              </p>
              <p className="text-gray-700 text-sm">
                A general small-business insurer, separate from your bond provider. Hiscox states its E&O coverage
                starts around $22.50/month, with the exact rate depending on your coverage amount, state, and risk
                profile.
              </p>
            </div>
          </div>

          <p className="text-gray-700 mb-8">
            Neither of these is automatically "better" — the bundled option is usually enough for general
            notarizations at lower coverage limits, while a standalone carrier can make sense if you want higher
            limits, broader coverage, or a provider you can deal with directly rather than through your bond issuer.
          </p>

          <div className="bg-blue-50 border-2 border-blue-500 p-8 mb-8 rounded">
            <h3 className="text-xl font-bold text-notary-navy mb-4">Hiscox Small Business Insurance</h3>
            <p className="text-gray-700 mb-4">
              Hiscox offers a dedicated notary business insurance product with errors and omissions coverage —
              defense costs, negligence claims, and claims tied to services you've already performed. Get a quote
              based on your actual coverage needs and state.
            </p>
            <a
              href="https://www.anrdoezrs.net/click-101584161-13832188"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-notary-navy px-6 py-3 font-semibold text-white transition hover:bg-opacity-90"
            >
              Get a Hiscox Quote
            </a>
          </div>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">How Much Coverage Do You Need?</h2>

          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
            <li><strong>$25,000</strong> — a reasonable baseline for general notarizations</li>
            <li><strong>$100,000</strong> — the level many title companies and signing companies expect before assigning loan signing work</li>
          </ul>

          <p className="text-gray-700 mb-8">
            If you're planning to move into loan signings, see the{' '}
            <Link href="/why-now-is-perfect-time-loan-signing-agent" className="text-notary-gold hover:underline">
              loan signing agent guide
            </Link>{' '}
            for what else that path requires beyond insurance.
          </p>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">Frequently Asked Questions</h2>

          <div className="space-y-6 mb-12">
            <div className="bg-gray-50 p-6 rounded">
              <h3 className="text-xl font-bold text-notary-navy mb-3">Do notaries need E&O insurance?</h3>
              <p className="text-gray-700">
                It's not legally required in most states, but it's strongly recommended. Your bond protects the
                public; E&O protects you.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded">
              <h3 className="text-xl font-bold text-notary-navy mb-3">How much does notary E&O insurance cost?</h3>
              <p className="text-gray-700">
                Basic bundled E&O through a state-approved bond provider often runs $50-150/year for $25,000-$100,000
                coverage. Standalone coverage from a carrier like Hiscox starts around $22.50/month, depending on
                your coverage amount and state.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded">
              <h3 className="text-xl font-bold text-notary-navy mb-3">How much coverage do I need?</h3>
              <p className="text-gray-700">
                $25,000 is a common baseline. If you do loan signings, many title and signing companies expect
                $100,000 in coverage before assigning you work.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded">
              <h3 className="text-xl font-bold text-notary-navy mb-3">Is E&O the same as a notary bond?</h3>
              <p className="text-gray-700">
                No. A bond protects the public and the issuer can come after you to recover a paid claim. E&O
                protects you directly — legal defense costs and claims against your own assets.
              </p>
            </div>
          </div>

          <ArticleSignupCta source="eo-insurance-article" />

          <div className="border-t-2 border-gray-200 pt-8 mt-12">
            <h3 className="text-2xl font-bold text-notary-navy mb-6">Related Resources:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/smart-money-management-for-notaries" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
                <h4 className="font-bold text-notary-navy mb-2">Smart Money Management for Notaries</h4>
                <p className="text-gray-600 text-sm">Bank accounts, credit cards, and accounting software</p>
              </Link>
              <Link href="/notary-tax-deductions" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
                <h4 className="font-bold text-notary-navy mb-2">Notary Tax Deductions</h4>
                <p className="text-gray-600 text-sm">E&O premiums are generally deductible — see the full list</p>
              </Link>
              <Link href="/how-to-become-a-notary-in-california" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
                <h4 className="font-bold text-notary-navy mb-2">How to Become a Notary in California</h4>
                <p className="text-gray-600 text-sm">Where E&O fits into your commissioning checklist</p>
              </Link>
              <Link href="/why-now-is-perfect-time-loan-signing-agent" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
                <h4 className="font-bold text-notary-navy mb-2">Loan Signing Agent in 2026: Is It Still Worth It?</h4>
                <p className="text-gray-600 text-sm">Why higher coverage matters once you move into signings</p>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
