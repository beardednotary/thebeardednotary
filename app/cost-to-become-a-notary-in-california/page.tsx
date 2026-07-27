import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleHeader from '../../components/ArticleHeader';
import ArticleSignupCta from '../../components/ArticleSignupCta';
import JsonLd from '../../components/JsonLd';
import { buildArticleSchema, buildBreadcrumbSchema, buildFaqSchema, getAbsoluteUrl } from '../../lib/schema';

export const metadata: Metadata = {
  title: 'Cost to Become a Notary in California (2026 Breakdown) | The Bearded Notary',
  description:
    'How much it really costs to become a notary in California in 2026. See the required fees, typical startup costs, optional extras, and realistic total budget ranges.',
  alternates: {
    canonical: '/cost-to-become-a-notary-in-california',
  },
  openGraph: {
    title: 'Cost to Become a Notary in California (2026 Breakdown)',
    description:
      'Required fees, startup costs, optional extras, and realistic budget ranges for becoming a California notary.',
    images: ['/images/how-to-become-a-notary-california-infographic.png'],
  },
};

const requiredCosts = [
  {
    item: 'State exam and application fee',
    cost: '$40',
    note: 'Fixed official fee paid at the exam site.',
  },
  {
    item: 'Approved six-hour education course',
    cost: '$35-$200',
    note: 'Varies by vendor and format. California requires the six-hour course for new applicants.',
  },
  {
    item: 'Live Scan fingerprinting',
    cost: '$70-$125',
    note: 'Varies by rolling fee location. This is one of the most variable required costs.',
  },
  {
    item: '$15,000 surety bond',
    cost: '$38-$60',
    note: 'Required for the full four-year commission term.',
  },
  {
    item: 'County oath and bond filing',
    cost: '$15-$107',
    note: 'Varies by county clerk. This is not a single statewide flat fee.',
  },
  {
    item: 'Notary stamp and journal',
    cost: '$45-$100',
    note: 'Required before you can start working, even if you keep the setup basic.',
  },
];

const optionalCosts = [
  {
    item: 'Passport photo',
    cost: '$10-$20',
    note: 'Needed for the application packet unless you already have one.',
  },
  {
    item: 'Inkless thumbprint pad',
    cost: '$8-$20',
    note: 'A practical add-on for California work, even if you buy it separately from your journal bundle.',
  },
  {
    item: 'Errors and Omissions insurance',
    cost: '$50-$150 per year',
    note: 'Not required by California, but very common and strongly recommended.',
  },
  {
    item: 'Business cards and starter marketing',
    cost: '$20-$75',
    note: 'Optional, but useful if you want to start treating the commission like a business right away.',
  },
  {
    item: 'Basic mobile setup extras',
    cost: '$25-$100+',
    note: 'Pens, folders, bag, organizer, and appointment basics if you plan to do mobile work.',
  },
];

const faqItems = [
  {
    question: 'How much does it cost to become a notary in California in 2026?',
    answer:
      'A realistic total range for most new applicants is about $250 to $600, depending on your course vendor, Live Scan location, county filing fee, and how much of your supplies you buy up front.',
  },
  {
    question: 'What are the fixed California notary fees?',
    answer:
      'The official exam and application fee is $40. Other major costs such as your course, Live Scan, bond, county filing, and supplies vary by provider or county.',
  },
  {
    question: 'What is the cheapest way to become a California notary?',
    answer:
      'The cheapest path is usually an affordable approved course, a lower-cost Live Scan location, a basic bond, and a no-frills stamp and journal setup. You can add optional business extras later.',
  },
  {
    question: 'Do I need E&O insurance to become a California notary?',
    answer:
      'No. California requires a $15,000 surety bond, but E&O insurance is optional. Many notaries still buy it because it protects the notary rather than the public.',
  },
  {
    question: 'Is the California notary commission worth the cost?',
    answer:
      'For many people, yes. If you plan to do mobile notary work or eventually move into loan signings, the startup cost can be recovered fairly quickly once you begin booking paid appointments.',
  },
];

export default function CaliforniaNotaryCostPage() {
  const articleSchema = buildArticleSchema({
    title: 'How Much Does It Cost to Become a Notary in California in 2026?',
    description:
      'How much it really costs to become a notary in California in 2026. See the required fees, typical startup costs, optional extras, and realistic total budget ranges.',
    path: '/cost-to-become-a-notary-in-california',
    image: '/images/how-to-become-a-notary-california-infographic.png',
    datePublished: '2026-07-19',
    dateModified: '2026-07-19',
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: getAbsoluteUrl('/') },
    { name: 'Cost to Become a Notary in California', url: getAbsoluteUrl('/cost-to-become-a-notary-in-california') },
  ]);

  const faqSchema = buildFaqSchema(faqItems);

  return (
    <div className="min-h-screen bg-white">
      <ArticleHeader title="How Much Does It Cost to Become a Notary in California in 2026?" eyebrow="Updated July 2026" />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <JsonLd data={[articleSchema, breadcrumbSchema, faqSchema]} />

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-8 font-semibold">
            Most new California notaries should budget somewhere between about $250 and $600 to get commissioned and
            ready to work. The low end is possible if you keep your setup lean. The higher end happens when you choose
            a pricier course, pay higher county filing fees, add E&amp;O insurance, and buy your starter supplies all at once.
          </p>

          <p className="text-gray-700 mb-8">
            If you want the full step-by-step process, read the{' '}
            <Link href="/how-to-become-a-notary-in-california" className="text-notary-gold hover:underline">
              complete California notary guide
            </Link>
            . This page stays focused on one question only: what you should realistically expect to spend.
          </p>

          <div className="bg-blue-50 border-2 border-blue-500 p-8 mb-8 rounded">
            <h2 className="text-2xl font-bold text-notary-navy mb-4">Quick Answer</h2>
            <div className="space-y-3 text-gray-700">
              <p><strong>Lean budget:</strong> about $250-$350</p>
              <p><strong>Typical budget:</strong> about $350-$500</p>
              <p><strong>Higher-end startup:</strong> about $500-$600+</p>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              The official California exam/application fee is fixed at $40. Most of the rest of the range comes from
              vendor pricing, county filing fees, and how much of your supplies you buy immediately.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">What You Have to Pay for</h2>

          <p className="text-gray-700 mb-6">
            Some costs are required by the state process. Others are practically required if you want to start working
            once your commission arrives.
          </p>

          <div className="bg-white border-2 border-gray-300 p-6 mb-8 rounded overflow-x-auto">
            <h3 className="text-xl font-bold text-notary-navy mb-4">Required California Notary Costs</h3>
            <table className="w-full text-gray-700">
              <thead>
                <tr className="border-b-2 border-notary-navy">
                  <th className="py-2 pr-4 text-left">Item</th>
                  <th className="py-2 pr-4 text-left">Typical Cost</th>
                  <th className="py-2 pr-4 text-left">Notes</th>
                </tr>
              </thead>
              <tbody>
                {requiredCosts.map((row) => (
                  <tr key={row.item} className="border-b border-gray-300 align-top">
                    <td className="py-3 pr-4 font-semibold">{row.item}</td>
                    <td className="py-3 pr-4">{row.cost}</td>
                    <td className="py-3 pr-4">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-notary-gold bg-opacity-10 border-l-4 border-notary-gold p-6 mb-8">
            <p className="text-gray-800 font-semibold">
              <strong>Important:</strong> California requires a six-hour approved education course, a passed exam,
              a cleared background check, a $15,000 surety bond, and a filed oath and bond before you can legally work.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">What Pushes the Total Higher</h2>

          <p className="text-gray-700 mb-6">
            The people who feel surprised by the total usually are not surprised by the state fee. They are surprised by
            all the smaller pieces that stack on top of it.
          </p>

          <div className="bg-white border-2 border-gray-300 p-6 mb-8 rounded overflow-x-auto">
            <h3 className="text-xl font-bold text-notary-navy mb-4">Optional or Variable Startup Costs</h3>
            <table className="w-full text-gray-700">
              <thead>
                <tr className="border-b-2 border-notary-navy">
                  <th className="py-2 pr-4 text-left">Item</th>
                  <th className="py-2 pr-4 text-left">Typical Cost</th>
                  <th className="py-2 pr-4 text-left">Notes</th>
                </tr>
              </thead>
              <tbody>
                {optionalCosts.map((row) => (
                  <tr key={row.item} className="border-b border-gray-300 align-top">
                    <td className="py-3 pr-4 font-semibold">{row.item}</td>
                    <td className="py-3 pr-4">{row.cost}</td>
                    <td className="py-3 pr-4">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">Three Realistic Budget Scenarios</h2>

          <div className="space-y-6 mb-8">
            <div className="bg-gray-50 p-6 rounded border-l-4 border-notary-navy">
              <h3 className="text-2xl font-bold text-notary-navy mb-3">1. Lean Starter Budget: $250-$350</h3>
              <p className="text-gray-700 mb-3">
                This is the “I want my commission first and I will keep extras to a minimum” path.
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Lower-cost approved course</li>
                <li>Budget-friendly Live Scan location</li>
                <li>Basic bond</li>
                <li>Simple stamp and journal setup</li>
                <li>No E&amp;O insurance or business extras yet</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded border-l-4 border-notary-gold">
              <h3 className="text-2xl font-bold text-notary-navy mb-3">2. Typical Working Budget: $350-$500</h3>
              <p className="text-gray-700 mb-3">
                This is where most people land if they buy solid basics and want to be reasonably prepared to start working.
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Mid-range course</li>
                <li>Average Live Scan and county filing costs</li>
                <li>Standard bond</li>
                <li>Stamp, journal, thumbprint pad, and a few appointment basics</li>
                <li>Maybe E&amp;O insurance, maybe not</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded border-l-4 border-blue-700">
              <h3 className="text-2xl font-bold text-notary-navy mb-3">3. Higher-End Ready-to-Work Budget: $500-$600+</h3>
              <p className="text-gray-700 mb-3">
                This is the path for people who want to walk out of the commission process with a stronger business-ready setup.
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Pricier vendor or package-style course</li>
                <li>Higher county filing costs</li>
                <li>E&amp;O insurance added up front</li>
                <li>Better bag, business cards, supplies, and mobile appointment extras</li>
              </ul>
            </div>
          </div>

          <p className="text-gray-700 mb-8">
            If you are planning to do mobile work right away, also look at the{' '}
            <Link href="/mobile-notary-supplies" className="text-notary-gold hover:underline">
              Mobile Notary Supplies Checklist
            </Link>{' '}
            so you do not underestimate the difference between “commissioned” and “actually ready for appointments.”
          </p>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">Cheapest Way to Become a California Notary</h2>

          <div className="bg-gray-50 p-6 mb-8 rounded">
            <ol className="list-decimal pl-6 text-gray-700 space-y-3">
              <li>Choose a lower-cost approved six-hour course rather than a bundled upsell package.</li>
              <li>Compare Live Scan providers, because rolling fees vary.</li>
              <li>Buy a basic surety bond rather than an oversized package immediately.</li>
              <li>Start with the required stamp and journal, then add nicer business extras later.</li>
              <li>Wait on optional upgrades unless they solve a real near-term need.</li>
            </ol>
          </div>

          <p className="text-gray-700 mb-8">
            The key is not to go so cheap that you create friction later. A small amount of thoughtful spending up front
            can save you from replacing weak supplies or stalling once your commission arrives.
          </p>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">Is It Worth It?</h2>

          <p className="text-gray-700 mb-6">
            For many people, yes. California allows up to $15 per signature, and mobile notaries can also charge travel fees.
            That means the startup cost is not tiny, but it also is not so high that it takes forever to recover.
          </p>

          <div className="bg-notary-navy text-white p-8 my-12 rounded">
            <h3 className="text-2xl font-bold mb-4">Simple break-even example</h3>
            <div className="space-y-3 text-lg text-gray-200">
              <p><strong>If you spend $350:</strong> 7 mobile appointments at $50 each can cover it.</p>
              <p><strong>If you spend $500:</strong> 10 mobile appointments at $50 each can cover it.</p>
              <p><strong>If you move into loan signings:</strong> a handful of better-paying appointments can recover the startup cost even faster.</p>
            </div>
          </div>

          <p className="text-gray-700 mb-8">
            If you want the next-step business roadmap after the commission, start with the{' '}
            <Link href="/first-30-days-new-notary" className="text-notary-gold hover:underline">
              First 30 Days action plan
            </Link>{' '}
            and the{' '}
            <Link href="/how-much-to-charge-mobile-notary" className="text-notary-gold hover:underline">
              pricing guide
            </Link>
            .
          </p>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">Frequently Asked Questions</h2>

          <div className="space-y-6 mb-12">
            {faqItems.map((faq) => (
              <div key={faq.question} className="bg-gray-50 p-6 rounded">
                <h3 className="text-xl font-bold text-notary-navy mb-3">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>

          <ArticleSignupCta source="ca-notary-cost-article" />

          <div className="border-t-2 border-gray-200 pt-8 mt-12">
            <h3 className="text-2xl font-bold text-notary-navy mb-6">Continue Your California Notary Path</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/how-to-become-a-notary-in-california" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
                <h4 className="font-bold text-notary-navy mb-2">How to Become a Notary in California</h4>
                <p className="text-gray-600 text-sm">Read the full step-by-step process from education through filing your oath and bond.</p>
              </Link>
              <Link href="/mobile-notary-supplies" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
                <h4 className="font-bold text-notary-navy mb-2">Mobile Notary Supplies Checklist</h4>
                <p className="text-gray-600 text-sm">See what else you may want to budget for once the commission process is done.</p>
              </Link>
              <Link href="/first-30-days-new-notary" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
                <h4 className="font-bold text-notary-navy mb-2">Your First 30 Days as a Mobile Notary</h4>
                <p className="text-gray-600 text-sm">Use the first-month plan to move from “commissioned” to “booked.”</p>
              </Link>
              <Link href="/notary-business-resources" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
                <h4 className="font-bold text-notary-navy mb-2">85+ Notary Business Resources</h4>
                <p className="text-gray-600 text-sm">Explore tools, associations, directories, and practical resources once you are ready.</p>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
