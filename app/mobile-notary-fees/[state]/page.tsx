import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ArticleHeader from '../../../components/ArticleHeader';
import ArticleSignupCta from '../../../components/ArticleSignupCta';
import JsonLd from '../../../components/JsonLd';
import { buildArticleSchema, buildBreadcrumbSchema, buildFaqSchema, getAbsoluteUrl } from '../../../lib/schema';
import { getStateFee } from '../../../lib/stateFees';
import { getStateMarketData, stateMarketData } from '../../../lib/stateMarketData';

type PageProps = {
  params: Promise<{ state: string }>;
};

export function generateStaticParams() {
  return stateMarketData.map((state) => ({ state: state.slug }));
}

function getStateData(slug: string) {
  const fee = getStateFee(slug);
  const market = getStateMarketData(slug);

  if (!fee || !market) {
    return null;
  }

  return { fee, market };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { state: slug } = await params;
  const data = getStateData(slug);

  if (!data) {
    return {};
  }

  const { fee } = data;
  const title = `Mobile Notary Fees in ${fee.name} (2026): What to Charge | The Bearded Notary`;
  const description = `What mobile notaries actually charge in ${fee.name}: the state fee cap, typical local appointment pricing, travel fees, and loan signing rates for 2026.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/mobile-notary-fees/${slug}`,
    },
    openGraph: {
      title: `Mobile Notary Fees in ${fee.name} (2026)`,
      description,
      images: ['/images/notary-pricing-guide-featured.png'],
    },
  };
}

export default async function StateFeesPage({ params }: PageProps) {
  const { state: slug } = await params;
  const data = getStateData(slug);

  if (!data) {
    notFound();
  }

  const { fee, market } = data;

  const articleSchema = buildArticleSchema({
    title: `Mobile Notary Fees in ${fee.name} (2026): What to Charge`,
    description: `What mobile notaries actually charge in ${fee.name}: the state fee cap, typical local appointment pricing, travel fees, and loan signing rates for 2026.`,
    path: `/mobile-notary-fees/${slug}`,
    image: '/images/notary-pricing-guide-featured.png',
    dateModified: '2026-09-02',
  });
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: getAbsoluteUrl('/') },
    { name: 'Mobile Notary Fees by State', url: getAbsoluteUrl('/mobile-notary-fees') },
    { name: fee.name, url: getAbsoluteUrl(`/mobile-notary-fees/${slug}`) },
  ]);
  const faqSchema = buildFaqSchema([
    {
      question: `What is the maximum notary fee in ${fee.name}?`,
      answer: `${fee.name} caps the notarial fee at ${fee.acknowledgmentFee} for an acknowledgment and ${fee.juratFee} for a jurat${fee.feeNotes !== 'Market rate' && fee.feeNotes !== 'Market-based' ? ` (${fee.feeNotes.toLowerCase()})` : ', since the state does not set a maximum and pricing is market-based'}. This is the per-signature cap, separate from any travel fee.`,
    },
    {
      question: `How much does a mobile notary charge in ${fee.name}?`,
      answer: `A typical local mobile notary appointment in ${fee.name} runs about ${market.typicalMobileRate}, once the state fee and a reasonable travel charge are combined.`,
    },
    {
      question: `What do loan signing agents charge in ${fee.name}?`,
      answer: `Loan signing rates in ${fee.name} typically run ${market.typicalLoanSigningRate} per appointment, depending on distance, timing, and scan-back requirements.`,
    },
    {
      question: `Can notaries charge a travel fee in ${fee.name}?`,
      answer: `Yes. Travel fees are charged separately from the notarial fee in ${fee.name}, the same as in most states, and are a major part of mobile notary pricing.`,
    },
  ]);

  return (
    <div className="min-h-screen bg-white">
      <ArticleHeader
        title={`Mobile Notary Fees in ${fee.name}: What to Charge in 2026`}
        eyebrow="State Pricing Guide"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <JsonLd data={[articleSchema, breadcrumbSchema, faqSchema]} />

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-8 font-semibold">
            Here's what mobile notaries and loan signing agents typically charge in {fee.name} in 2026 — the state
            fee cap, realistic local pricing, and how loan signing rates compare.
          </p>

          <div className="bg-blue-50 border-2 border-blue-500 p-8 mb-8 rounded">
            <h2 className="text-2xl font-bold text-notary-navy mb-4">Quick Answer for {fee.name}</h2>
            <div className="space-y-3 text-gray-700">
              <p><strong>State fee cap:</strong> {fee.acknowledgmentFee} per signature ({fee.feeNotes})</p>
              <p><strong>Typical local mobile appointment:</strong> {market.typicalMobileRate} total (fee + travel)</p>
              <p><strong>Typical loan signing rate:</strong> {market.typicalLoanSigningRate} per appointment</p>
            </div>
          </div>

          <p className="text-gray-700 mb-8">
            This page is a {fee.name}-specific companion to the{' '}
            <Link href="/how-much-to-charge-mobile-notary" className="text-notary-gold hover:underline">
              complete notary pricing guide
            </Link>
            , which covers the full 50-state fee chart, travel fee structure, and pricing calculator.
          </p>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">{fee.name}'s Notary Fee Cap</h2>

          <div className="bg-gray-50 p-6 mb-8 rounded overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-notary-navy text-white">
                  <th className="border border-gray-300 px-4 py-2 text-left">Acknowledgment</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Jurat</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Notes</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr>
                  <td className="border border-gray-300 px-4 py-2">{fee.acknowledgmentFee}</td>
                  <td className="border border-gray-300 px-4 py-2">{fee.juratFee}</td>
                  <td className="border border-gray-300 px-4 py-2">{fee.feeNotes}</td>
                </tr>
              </tbody>
            </table>
            <p className="text-gray-600 text-sm mt-4 italic">
              This is the maximum fee per notarial act. You can charge less, but never more. Data current as of
              January 2026 — verify with {fee.name}'s Secretary of State or notary regulatory authority, since fees
              can change annually.
            </p>
          </div>

          <p className="text-gray-700 mb-8">{market.strategyNote}</p>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">What Mobile Notaries Actually Charge in {fee.name}</h2>

          <p className="text-gray-700 mb-6">
            The state fee is only one piece of the total price. A realistic local mobile appointment combines the
            per-signature fee with a travel charge for your time and mileage.
          </p>

          <div className="bg-gray-50 p-6 mb-8 rounded">
            <h3 className="text-xl font-bold text-notary-navy mb-4">Typical {fee.name} Pricing</h3>
            <ul className="space-y-2 text-gray-700">
              <li><strong>General notarization + travel:</strong> {market.typicalMobileRate}</li>
              <li><strong>Loan signing appointment:</strong> {market.typicalLoanSigningRate}</li>
              <li><strong>After-hours/weekend:</strong> 1.5x-2x your standard rate</li>
            </ul>
          </div>

          <p className="text-gray-700 mb-8">{market.metroNote} Common {fee.name} markets include {market.majorMetros.join(', ')}.</p>

          <p className="text-gray-700 mb-8">
            For the full breakdown of travel fee structure by distance, after-hours premiums, and a pricing
            calculator you can adjust for your own market, see the{' '}
            <Link href="/how-much-to-charge-mobile-notary" className="text-notary-gold hover:underline font-semibold">
              complete pricing guide
            </Link>
            .
          </p>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">Frequently Asked Questions</h2>

          <div className="space-y-6 mb-12">
            <div className="bg-gray-50 p-6 rounded">
              <h3 className="text-xl font-bold text-notary-navy mb-3">What is the maximum notary fee in {fee.name}?</h3>
              <p className="text-gray-700">
                {fee.name} caps the notarial fee at {fee.acknowledgmentFee} for an acknowledgment and {fee.juratFee} for
                a jurat ({fee.feeNotes}). This is the per-signature cap, separate from any travel fee.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded">
              <h3 className="text-xl font-bold text-notary-navy mb-3">How much does a mobile notary charge in {fee.name}?</h3>
              <p className="text-gray-700">
                A typical local mobile notary appointment in {fee.name} runs about {market.typicalMobileRate}, once
                the state fee and a reasonable travel charge are combined.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded">
              <h3 className="text-xl font-bold text-notary-navy mb-3">What do loan signing agents charge in {fee.name}?</h3>
              <p className="text-gray-700">
                Loan signing rates in {fee.name} typically run {market.typicalLoanSigningRate} per appointment,
                depending on distance, timing, and scan-back requirements.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded">
              <h3 className="text-xl font-bold text-notary-navy mb-3">Can notaries charge a travel fee in {fee.name}?</h3>
              <p className="text-gray-700">
                Yes. Travel fees are charged separately from the notarial fee in {fee.name}, the same as in most
                states, and are a major part of mobile notary pricing.
              </p>
            </div>
          </div>

          <ArticleSignupCta source="state-fees-article" />

          <div className="border-t-2 border-gray-200 pt-8 mt-12">
            <h3 className="text-2xl font-bold text-notary-navy mb-6">Related Resources:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/how-much-to-charge-mobile-notary" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
                <h4 className="font-bold text-notary-navy mb-2">Complete Notary Pricing Guide</h4>
                <p className="text-gray-600 text-sm">The full 50-state fee chart, travel fees, and pricing calculator</p>
              </Link>
              <Link href="/mobile-notary-fees" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
                <h4 className="font-bold text-notary-navy mb-2">Mobile Notary Fees by State</h4>
                <p className="text-gray-600 text-sm">See pricing guidance for other states</p>
              </Link>
              <Link href="/best-printers-for-notaries" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
                <h4 className="font-bold text-notary-navy mb-2">Best Printer for Notaries & Loan Signing Agents</h4>
                <p className="text-gray-600 text-sm">Make sure your equipment matches your pricing</p>
              </Link>
              <Link href="/first-30-days-new-notary" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
                <h4 className="font-bold text-notary-navy mb-2">Your First 30 Days as a Mobile Notary</h4>
                <p className="text-gray-600 text-sm">Day-by-day action plan after you're commissioned</p>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
