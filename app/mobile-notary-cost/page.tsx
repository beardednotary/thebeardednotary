import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleHeader from '../../components/ArticleHeader';
import AuthorByline from '../../components/AuthorByline';
import JsonLd from '../../components/JsonLd';
import MobileNotaryCostEstimator from '../../components/MobileNotaryCostEstimator';
import { buildArticleSchema, buildBreadcrumbSchema, buildFaqSchema, getAbsoluteUrl } from '../../lib/schema';
import { stateFees } from '../../lib/stateFees';
import { stateMarketData } from '../../lib/stateMarketData';

// Customer-facing companion to /how-much-to-charge-mobile-notary (which is written for notaries
// setting prices). Same price ranges, so the two pages never disagree.
const PATH = '/mobile-notary-cost';
const TITLE = 'How Much Does a Mobile Notary Cost? (2026 Price Guide)';
const DESCRIPTION =
  'A mobile notary costs $50-$100 for a typical local visit in 2026: the state notary fee plus a travel fee. Loan signings run $100-$200. Estimate your cost by state.';

export const metadata: Metadata = {
  title: `${TITLE} | The Bearded Notary`,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: ['/images/notary-pricing-guide-featured.png'],
  },
};

const PRICE_LIST = [
  ['One or two documents at your home or office', '$50 – $100', 'State notary fee plus a local travel fee.'],
  ['Several signers or a stack of documents', '$75 – $150', 'Each notarized signature adds the state fee.'],
  ['Loan signing (refinance, purchase, HELOC)', '$100 – $200', 'Usually paid by the lender or title company.'],
  ['Evening, weekend or same-hour visit', '1.5 – 2x the normal price', 'Premium for short notice or off hours.'],
  ['Hospital, care facility or jail', '$150 – $300', 'Extra time for check-in, ID issues and waiting.'],
  ['Remote online notarization (video call)', '$25 – $50', 'No travel. Allowed in most states; some cap it at $25.'],
];

const FAQ = [
  {
    question: 'How much does a mobile notary cost?',
    answer:
      'A mobile notary typically costs $50 to $100 for a local appointment in 2026. That is the state notary fee (capped at $1 to $15 per signature in most states) plus a travel fee of about $25 to $75 within 20 miles. Loan signings usually cost $100 to $200, and evening or weekend visits run 1.5 to 2 times the normal price.',
  },
  {
    question: 'How much does it cost to have a notary come to your house?',
    answer:
      'Expect $50 to $100 for a notary to come to your house for one or two documents, most of which is the travel fee. More signatures, a longer drive, or an evening or weekend appointment push it higher. A visit to a hospital, care facility or jail usually costs $150 to $300.',
  },
  {
    question: 'Do mobile notaries charge per signature?',
    answer:
      "Yes, the notary fee itself is charged per notarized signature, and most states cap it, from $1 in Illinois and Kansas to $15 in California, Nevada and Washington. The travel fee is separate and set by the notary, so ask for the total price before the appointment.",
  },
  {
    question: 'Is a mobile notary travel fee legal?',
    answer:
      'In most states a notary can charge a travel fee on top of the capped notary fee, as long as you agree to it in advance. A few states regulate travel fees, so a reputable notary will quote the travel fee and the per-signature fee separately before booking.',
  },
  {
    question: 'Who pays the notary for a loan signing?',
    answer:
      'When a lender, title company or signing service books the notary for your closing, they pay the notary and the cost is usually included in your closing costs. You typically pay a mobile notary directly only when you book one yourself.',
  },
  {
    question: 'Is it cheaper to use a bank or an online notary?',
    answer:
      'Usually. Many banks notarize for free or a few dollars for their customers, and shipping stores charge roughly $10 to $25 per signature, but you have to go to them during business hours. Remote online notarization costs about $25 to $50 with no travel. A mobile notary costs more because they come to you.',
  },
];

export default function MobileNotaryCostPage() {
  const statePages = new Set(stateMarketData.map((m) => m.slug));
  const articleSchema = buildArticleSchema({
    title: TITLE,
    description: DESCRIPTION,
    path: PATH,
    image: '/images/notary-pricing-guide-featured.png',
    datePublished: '2026-11-06',
    dateModified: '2026-11-06',
  });
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: getAbsoluteUrl('/') },
    { name: 'Mobile Notary Cost', url: getAbsoluteUrl(PATH) },
  ]);
  const faqSchema = buildFaqSchema(FAQ);

  return (
    <div className="min-h-screen bg-white">
      <ArticleHeader title="How Much Does a Mobile Notary Cost?" eyebrow="2026 Price Guide for Customers" />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <JsonLd data={[articleSchema, breadcrumbSchema, faqSchema]} />

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-900 mb-4">
            <strong>A mobile notary costs $50–$100 for a typical local appointment in 2026.</strong> You pay the
            state&apos;s notary fee for each notarized signature ($1–$15 in most states) plus a travel fee of about
            $25–$75 for a visit within 20 miles. Loan signings run $100–$200, and evenings or weekends cost 1.5–2x
            the normal price.
          </p>

          <AuthorByline className="mb-8" />

          <p className="text-gray-700 mb-6">
            Here&apos;s how a mobile notary&apos;s price is built, what&apos;s normal in your state, and how to tell
            whether a quote you&apos;ve been given is fair.
          </p>

          <MobileNotaryCostEstimator />

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-4">Mobile notary price list</h2>
          <div className="not-prose overflow-x-auto mb-4">
            <table className="w-full border-collapse text-left text-base">
              <thead>
                <tr className="bg-notary-navy text-white">
                  <th className="p-3">What you need</th>
                  <th className="p-3">Typical cost</th>
                  <th className="p-3">Why</th>
                </tr>
              </thead>
              <tbody>
                {PRICE_LIST.map(([what, cost, why]) => (
                  <tr key={what} className="border-b border-gray-200">
                    <td className="p-3 font-semibold text-notary-navy">{what}</td>
                    <td className="p-3 whitespace-nowrap">{cost}</td>
                    <td className="p-3 text-gray-600">{why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mb-10">
            Ranges are typical 2026 prices, not a survey of every notary. Individual notaries set their own travel
            fees.
          </p>

          <h2 className="text-3xl font-bold text-notary-navy mb-4">What you&apos;re actually paying for</h2>
          <p className="text-gray-700 mb-4">A mobile notary&apos;s price has two parts:</p>
          <ul className="mb-6 text-gray-700">
            <li>
              <strong>The notary fee.</strong> Set by your state and charged per notarized signature. It&apos;s usually
              the small part: in most states it&apos;s $5–$15, and in a few, like Illinois, it&apos;s $1.
            </li>
            <li>
              <strong>The travel fee.</strong> Set by the notary to cover the drive, the time and the scheduling.
              This is most of the bill, which is why the same two signatures cost $10 at a counter and $60 at your
              kitchen table.
            </li>
          </ul>
          <p className="text-gray-700 mb-10">
            The price goes up with more signers or signatures, a longer drive, short notice, evenings and weekends,
            printing or scanning documents for you, and waiting time, such as a hospital check-in or a signer who
            isn&apos;t ready.
          </p>

          <h2 className="text-3xl font-bold text-notary-navy mb-4">Mobile notary vs. bank, shipping store or online</h2>
          <div className="not-prose overflow-x-auto mb-10">
            <table className="w-full border-collapse text-left text-base">
              <thead>
                <tr className="bg-gray-100 text-notary-navy">
                  <th className="p-3">Option</th>
                  <th className="p-3">Typical cost</th>
                  <th className="p-3">Best when</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-3 font-semibold">Your bank</td>
                  <td className="p-3">Free – $10 for customers</td>
                  <td className="p-3 text-gray-600">You can go in during business hours and they&apos;ll notarize your document type.</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 font-semibold">Shipping or print store</td>
                  <td className="p-3">$10 – $25 per signature</td>
                  <td className="p-3 text-gray-600">A quick walk-in for one or two signatures.</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 font-semibold">Online notary</td>
                  <td className="p-3">$25 – $50</td>
                  <td className="p-3 text-gray-600">Your state and the receiving party accept remote online notarization.</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 font-semibold">Mobile notary</td>
                  <td className="p-3">$50 – $100+</td>
                  <td className="p-3 text-gray-600">You can&apos;t travel, need evenings or weekends, have several signers, or need a hospital or care-facility visit.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-notary-navy mb-4">How to keep the cost down</h2>
          <ul className="mb-10 text-gray-700">
            <li>Count the signatures that need notarizing and tell the notary up front, so the quote is accurate.</li>
            <li>Have every signer there with a current, unexpired government photo ID.</li>
            <li>Don&apos;t sign the documents before the notary arrives. They have to watch you sign.</li>
            <li>Book weekday business hours if you can; evening and weekend premiums add up.</li>
            <li>Bundle everything into one visit rather than booking twice.</li>
            <li>Print the documents yourself if the notary charges for printing.</li>
          </ul>

          <h2 className="text-3xl font-bold text-notary-navy mb-4">Questions to ask before you book</h2>
          <ul className="mb-10 text-gray-700">
            <li>What&apos;s the total, including the travel fee and per-signature fees?</li>
            <li>Is there an extra charge for evenings, weekends, waiting time or printing?</li>
            <li>Do you accept my form of ID, and what if a signer doesn&apos;t have one?</li>
            <li>Are you commissioned in my state, and do you carry E&amp;O insurance?</li>
            <li>How do you take payment: cash, card or an app?</li>
          </ul>

          <h2 className="text-3xl font-bold text-notary-navy mb-4">Notary fee limits by state (2026)</h2>
          <p className="text-gray-700 mb-4">
            The maximum a notary can charge per notarized signature, before any travel fee. &ldquo;No max&rdquo; means
            the state doesn&apos;t set a cap.
          </p>
          <div className="not-prose grid gap-2 sm:grid-cols-2 md:grid-cols-3 mb-10 text-base">
            {stateFees.map((s) => (
              <div key={s.slug} className="flex justify-between border-b border-gray-200 py-2 pr-2">
                {statePages.has(s.slug) ? (
                  <Link href={`/mobile-notary-fees/${s.slug}`} className="text-notary-gold hover:underline">
                    {s.name}
                  </Link>
                ) : (
                  <span>{s.name}</span>
                )}
                <span className="font-semibold text-notary-navy">{s.acknowledgmentFee}</span>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-notary-navy mb-4">Frequently asked questions</h2>
          {FAQ.map((f) => (
            <div key={f.question} className="mb-6">
              <h3 className="text-xl font-bold text-notary-navy mb-2">{f.question}</h3>
              <p className="text-gray-700">{f.answer}</p>
            </div>
          ))}

          <div className="bg-gray-50 border-2 border-notary-gold/40 p-6 rounded mt-10">
            <p className="text-gray-700">
              <strong>Are you a notary setting your own prices?</strong> See{' '}
              <Link href="/how-much-to-charge-mobile-notary" className="text-notary-gold hover:underline font-semibold">
                how much to charge as a mobile notary
              </Link>{' '}
              and the{' '}
              <Link href="/mobile-notary-fees" className="text-notary-gold hover:underline font-semibold">
                state-by-state fee guides
              </Link>
              .
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
