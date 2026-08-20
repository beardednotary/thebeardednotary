import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleSignupCta from '../../components/ArticleSignupCta';
import AffiliateDisclosure from '../../components/AffiliateDisclosure';
import ArticleHeader from '../../components/ArticleHeader';
import JsonLd from '../../components/JsonLd';
import MileageDeductionCalculator from '../../components/MileageDeductionCalculator';
import { buildArticleSchema, buildBreadcrumbSchema, buildFaqSchema, getAbsoluteUrl } from '../../lib/schema';

export const metadata: Metadata = {
  title: 'Notary Mileage Tracking & Deduction Guide (2026) | The Bearded Notary',
  description: 'How mobile notaries track mileage and claim the deduction in 2026: current IRS rate, log requirements, a mileage deduction calculator, and the best tracking apps.',
  alternates: {
    canonical: '/mileage-tracking-for-notaries',
  },
  openGraph: {
    title: 'Notary Mileage Tracking & Deduction Guide (2026)',
    description: 'Current IRS mileage rate, log requirements, a deduction calculator, and the best mileage tracking apps for mobile notaries.',
    images: ['/images/notary-pricing-guide-featured.png'],
  },
};

export default function MileageTrackingForNotaries() {
  const articleSchema = buildArticleSchema({
    title: 'Notary Mileage Tracking & Deduction Guide (2026)',
    description:
      'How mobile notaries track mileage and claim the deduction in 2026: current IRS rate, log requirements, a mileage deduction calculator, and the best tracking apps.',
    path: '/mileage-tracking-for-notaries',
    image: '/images/notary-pricing-guide-featured.png',
    dateModified: '2026-08-19',
  });
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: getAbsoluteUrl('/') },
    { name: 'Notary Mileage Tracking & Deduction Guide', url: getAbsoluteUrl('/mileage-tracking-for-notaries') },
  ]);
  const faqSchema = buildFaqSchema([
    {
      question: 'Can mobile notaries deduct mileage?',
      answer:
        'Yes. Driving to appointments is a legitimate business expense. If your home is your principal place of business, trips from home to a signing are deductible business miles, not commuting.',
    },
    {
      question: 'What is the 2026 IRS mileage rate?',
      answer:
        'The IRS set the 2026 standard business mileage rate at 72.5 cents per mile for January through June, then raised it mid-year to 76 cents per mile for July through December 2026.',
    },
    {
      question: 'Do I need a mileage tracking app?',
      answer:
        'The IRS requires a contemporaneous log of every trip. Manually logging every drive is realistic for a week, then most people stop. An automatic tracking app is the only reliable way to actually capture the deduction.',
    },
    {
      question: 'Standard mileage vs actual expenses: which is better for notaries?',
      answer:
        'Most mobile notaries come out ahead with the standard mileage rate because it is simpler and does not require tracking every gas, repair, and insurance receipt. Actual expenses can win out if you drive an expensive or high-maintenance vehicle.',
    },
  ]);

  return (
    <div className="min-h-screen bg-white">
      <ArticleHeader
        title="Notary Mileage Tracking & Deduction Guide (2026)"
        eyebrow="Updated August 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <JsonLd data={[articleSchema, breadcrumbSchema, faqSchema]} />

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-8 font-semibold">
            Mileage is the single biggest tax deduction most mobile notaries qualify for, and it's also the one most notaries
            botch by not logging it correctly. Here's how the deduction actually works in 2026, and how to make sure you
            don't lose it.
          </p>

          <AffiliateDisclosure className="mb-8" />

          <div className="bg-blue-50 border-2 border-blue-500 p-8 mb-8 rounded">
            <h2 className="text-2xl font-bold text-notary-navy mb-4">Quick Answer</h2>
            <div className="space-y-3 text-gray-700">
              <p><strong>2026 IRS rate:</strong> 72.5¢/mile (Jan–Jun), 76¢/mile (Jul–Dec)</p>
              <p><strong>Typical notary deduction:</strong> $2,500–$8,000+ per year depending on volume</p>
              <p><strong>What the IRS requires:</strong> A contemporaneous log — date, start/end location, purpose, and miles for every trip</p>
              <p><strong>Best way to actually capture it:</strong> An automatic mileage tracking app, not a notebook</p>
            </div>
          </div>

          <p className="text-gray-700 mb-8">
            This page works best alongside the{' '}
            <Link href="/smart-money-management-for-notaries" className="text-notary-gold hover:underline">
              Smart Money Management guide
            </Link>{' '}
            (bank accounts, credit cards, and the rest of the tax deduction list) and the{' '}
            <Link href="/how-much-to-charge-mobile-notary" className="text-notary-gold hover:underline">
              pricing guide
            </Link>
            , since your real hourly rate depends on what driving is actually costing and saving you.
          </p>

          <MileageDeductionCalculator />

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">Why Mileage Is the Biggest Deduction for Mobile Notaries</h2>

          <p className="text-gray-700 mb-6">
            Unlike an office-based business, your car is core equipment. A mobile notary driving 5,000–10,000 business
            miles a year is sitting on a $3,600–$7,600 deduction at the current 2026 rate — money that directly reduces
            what you owe the IRS, not just a nice-to-have write-off.
          </p>

          <div className="bg-gray-50 p-6 mb-8 rounded">
            <h3 className="text-xl font-bold text-notary-navy mb-4">What Counts as Business Mileage</h3>
            <p className="text-gray-700 mb-4">
              If your home is your principal place of business (true for most mobile notaries — no separate office you
              commute to), trips from home count as business miles, not commuting. That includes:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Driving to and from signings and notarization appointments</li>
              <li>Supply runs (paper, toner, journal, stamp supplies)</li>
              <li>Bank trips to deposit checks or handle business banking</li>
              <li>Notary association meetings, continuing education, and networking events</li>
              <li>Trips to FedEx/UPS or a print shop for business purposes</li>
            </ul>
            <p className="text-gray-700 mt-4">
              What does not count: your regular commute if you also work a separate job with a fixed location, and any
              personal errands you run along the way.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">2026 IRS Standard Mileage Rate</h2>

          <p className="text-gray-700 mb-6">
            The IRS made a rare mid-year adjustment in 2026. Make sure you're using the right rate for the right half of
            the year when you calculate your deduction.
          </p>

          <div className="bg-gray-50 p-6 mb-8 rounded overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-notary-navy text-white">
                  <th className="border border-gray-300 px-4 py-2 text-left">Period</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Business Rate</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Notes</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr>
                  <td className="border border-gray-300 px-4 py-2">January 1 – June 30, 2026</td>
                  <td className="border border-gray-300 px-4 py-2">72.5¢/mile</td>
                  <td className="border border-gray-300 px-4 py-2">Up 2.5¢ from the 2025 rate</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">July 1 – December 31, 2026</td>
                  <td className="border border-gray-300 px-4 py-2">76¢/mile</td>
                  <td className="border border-gray-300 px-4 py-2">Mid-year increase, up 3.5¢</td>
                </tr>
              </tbody>
            </table>
            <p className="text-gray-600 text-sm mt-4 italic">
              Rates set by the IRS. If you're filing for a different year, verify the current rate at irs.gov before you file —
              it changes annually and, as 2026 showed, can change mid-year too.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">Standard Mileage Rate vs. Actual Expenses</h2>

          <p className="text-gray-700 mb-6">
            You get to pick one method per vehicle (with some restrictions on switching later). Here's how they compare
            for a typical mobile notary.
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse border-2 border-gray-300 text-sm">
              <thead>
                <tr className="bg-notary-navy text-white">
                  <th className="border border-gray-300 p-3 text-left">Factor</th>
                  <th className="border border-gray-300 p-3 text-left">Standard Mileage Rate</th>
                  <th className="border border-gray-300 p-3 text-left">Actual Expenses</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-semibold">What you track</td>
                  <td className="border border-gray-300 p-3">Miles driven for business, per trip</td>
                  <td className="border border-gray-300 p-3">Every gas, repair, insurance, and depreciation receipt</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">Effort</td>
                  <td className="border border-gray-300 p-3">Low — one app running in the background</td>
                  <td className="border border-gray-300 p-3">High — receipts plus a business-use percentage calculation</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-semibold">Best for</td>
                  <td className="border border-gray-300 p-3">Most mobile notaries, especially with an economical vehicle</td>
                  <td className="border border-gray-300 p-3">Expensive or high-maintenance vehicles with real deductible costs</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">Typical result</td>
                  <td className="border border-gray-300 p-3">Usually equals or beats actual expenses for reliable daily drivers</td>
                  <td className="border border-gray-300 p-3">Can win for gas-guzzlers or vehicles with big loan interest/repairs</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 mb-8">
            <strong>Most notaries use the standard mileage rate.</strong> It's simpler, and for a typical reliable
            daily-driver vehicle it usually matches or beats what actual expenses would produce.
          </p>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">IRS Record-Keeping Requirements</h2>

          <p className="text-gray-700 mb-6">
            The IRS requires <strong>contemporaneous records</strong> — logged at the time of the trip, not reconstructed
            from memory months later. For every business drive, you need:
          </p>

          <div className="bg-gray-50 p-6 mb-8 rounded">
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Date</strong> of the trip</li>
              <li><strong>Starting location</strong></li>
              <li><strong>Destination</strong></li>
              <li><strong>Business purpose</strong> (client name, type of appointment)</li>
              <li><strong>Miles driven</strong></li>
            </ul>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
            <p className="text-gray-700">
              <strong>Reality check:</strong> A notebook log works for about two weeks before it stops happening. If the
              IRS audits you and your mileage log was reconstructed after the fact, they can reject the deduction entirely —
              turning a $3,000–$8,000 write-off into $0.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">Best Mileage Tracking Apps</h2>

          <p className="text-gray-700 mb-6">
            An app that detects drives automatically solves the "I forgot to log it" problem. Here's how the main options compare.
          </p>

          <div className="space-y-6 mb-8">
            <div className="bg-white border-2 border-notary-gold p-6 rounded">
              <div className="flex items-center mb-3">
                <span className="bg-notary-gold text-notary-navy px-3 py-1 rounded font-bold mr-3 text-sm">TOP PICK</span>
                <h3 className="text-xl font-bold text-notary-navy">MileIQ</h3>
              </div>

              <div className="mb-4">
                <p className="text-gray-700 mb-2"><strong>Best for:</strong> Notaries who drive regularly and want it fully automatic</p>
                <p className="text-gray-700"><strong>Price:</strong> $60/year or $6/month (40 free drives/month to start)</p>
              </div>

              <div className="bg-gray-50 p-4 mb-4">
                <h4 className="font-bold text-notary-navy mb-2">How It Works:</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                  <li>Automatically detects when you drive — no manual start/stop</li>
                  <li>Swipe right for business, left for personal, after each trip</li>
                  <li>Learns your regular routes and can auto-classify repeat trips</li>
                  <li>Exports IRS-compliant mileage reports</li>
                  <li>Calculates your total deduction using the current IRS rate</li>
                </ul>
              </div>

              <div className="mt-4">
                <a
                  href="https://try.mileiq.com/NGEnoN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-notary-navy text-white px-6 py-3 font-bold hover:bg-opacity-90 transition"
                >
                  Try MileIQ Free (40 Drives/Month)
                </a>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded">
              <h3 className="text-xl font-bold text-notary-navy mb-3">Everlance</h3>
              <p className="text-gray-700 mb-2"><strong>Best for:</strong> Notaries who want mileage and expense tracking combined</p>
              <p className="text-gray-700 mb-3"><strong>Price:</strong> $60/year or $8/month</p>
              <p className="text-gray-700">
                Automatic mileage tracking plus receipt scanning and expense categorization in one app. A reasonable pick if
                you'd rather not run separate mileage and accounting tools.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded">
              <h3 className="text-xl font-bold text-notary-navy mb-3">Stride</h3>
              <p className="text-gray-700 mb-2"><strong>Best for:</strong> Part-time notaries and tight budgets</p>
              <p className="text-gray-700 mb-3"><strong>Price:</strong> Free</p>
              <p className="text-gray-700">
                Automatic tracking with a free tier that covers the basics — good for year one or lower mileage volume.
                Upgrade to a paid app once your mileage (and the deduction) grows.
              </p>
            </div>

            <div className="bg-gray-100 p-6 rounded border-2 border-gray-300">
              <h3 className="text-xl font-bold text-notary-navy mb-3">Manual Log (Notebook or Spreadsheet)</h3>
              <p className="text-gray-700 mb-2"><strong>Best for:</strong> Nobody, honestly — use an app</p>
              <p className="text-gray-700">
                Free, but you'll forget. Reconstructed logs are exactly what the IRS rejects in an audit. If you're going
                to try it anyway, log every trip the same day, not at tax time.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">Common Mileage Deduction Mistakes</h2>

          <div className="space-y-6 mb-12">
            <div className="bg-red-50 border-l-4 border-red-500 p-6">
              <h4 className="font-bold text-red-900 mb-2">❌ Reconstructing Mileage at Tax Time</h4>
              <p className="text-gray-700">
                Guessing your annual mileage from memory in April is not a contemporaneous record. If audited, the IRS can
                disallow the entire deduction.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6">
              <h4 className="font-bold text-red-900 mb-2">❌ Deducting Both Standard Mileage and Gas Receipts</h4>
              <p className="text-gray-700">
                Pick one method. The standard mileage rate already bakes in gas, maintenance, and depreciation — you can't
                also deduct gas receipts on top of it.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6">
              <h4 className="font-bold text-red-900 mb-2">❌ Using the Wrong Rate for the Wrong Half of 2026</h4>
              <p className="text-gray-700">
                Miles driven January through June 2026 are worth 72.5¢/mile. Miles driven July through December 2026 are
                worth 76¢/mile. Mixing them up under- or over-states your deduction.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6">
              <h4 className="font-bold text-red-900 mb-2">❌ Not Tracking "Small" Trips</h4>
              <p className="text-gray-700">
                A 3-mile supply run feels too small to log. Do that 3 times a week for a year and it's real money left on
                the table. Automatic tracking catches these without extra effort.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">Frequently Asked Questions</h2>

          <div className="space-y-6 mb-12">
            <div className="bg-gray-50 p-6 rounded">
              <h3 className="text-xl font-bold text-notary-navy mb-3">Can mobile notaries deduct mileage?</h3>
              <p className="text-gray-700">
                Yes. Driving to appointments is a legitimate business expense. If your home is your principal place of
                business, trips from home to a signing are deductible business miles, not commuting.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded">
              <h3 className="text-xl font-bold text-notary-navy mb-3">What is the 2026 IRS mileage rate?</h3>
              <p className="text-gray-700">
                72.5 cents per mile for January through June 2026, then 76 cents per mile for July through December 2026
                after a mid-year IRS increase.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded">
              <h3 className="text-xl font-bold text-notary-navy mb-3">Do I need a mileage tracking app?</h3>
              <p className="text-gray-700">
                The IRS requires a contemporaneous log of every trip. Manually logging every drive is realistic for a
                week, then most people stop. An automatic tracking app is the only reliable way to actually capture the
                deduction over a full year.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded">
              <h3 className="text-xl font-bold text-notary-navy mb-3">Standard mileage vs actual expenses — which is better for notaries?</h3>
              <p className="text-gray-700">
                Most mobile notaries come out ahead with the standard mileage rate because it's simpler and doesn't
                require tracking every gas, repair, and insurance receipt. Actual expenses can win out if you drive an
                expensive or high-maintenance vehicle.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded">
              <h3 className="text-xl font-bold text-notary-navy mb-3">What if I use my car for a day job too?</h3>
              <p className="text-gray-700">
                Only the business-use portion counts. Track miles for notary work specifically — regular commuting to a
                separate job is never deductible, even on days you also do a signing.
              </p>
            </div>
          </div>

          <ArticleSignupCta source="mileage-tracking-article" />

          {/* Related Resources */}
          <div className="border-t-2 border-gray-200 pt-8 mt-12">
            <h3 className="text-2xl font-bold text-notary-navy mb-6">Related Resources:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/smart-money-management-for-notaries" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
                <h4 className="font-bold text-notary-navy mb-2">Smart Money Management for Notaries</h4>
                <p className="text-gray-600 text-sm">Bank accounts, credit cards, and the full tax deduction list</p>
              </Link>
              <Link href="/how-much-to-charge-mobile-notary" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
                <h4 className="font-bold text-notary-navy mb-2">Mobile Notary Pricing Guide</h4>
                <p className="text-gray-600 text-sm">Make sure your travel fees actually cover your real driving costs</p>
              </Link>
              <Link href="/best-printers-for-notaries" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
                <h4 className="font-bold text-notary-navy mb-2">Best Printer for Notaries & Loan Signing Agents</h4>
                <p className="text-gray-600 text-sm">Another deductible business expense worth getting right</p>
              </Link>
              <Link href="/mobile-notary-supplies" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
                <h4 className="font-bold text-notary-navy mb-2">Mobile Notary Supplies Checklist</h4>
                <p className="text-gray-600 text-sm">Everything else you need to get started</p>
              </Link>
            </div>
          </div>

        </div>
      </article>
    </div>
  );
}
