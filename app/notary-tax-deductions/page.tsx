import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleSignupCta from '../../components/ArticleSignupCta';
import AffiliateDisclosure from '../../components/AffiliateDisclosure';
import ArticleHeader from '../../components/ArticleHeader';
import AuthorByline from '../../components/AuthorByline';
import JsonLd from '../../components/JsonLd';
import { buildArticleSchema, buildBreadcrumbSchema, buildFaqSchema, getAbsoluteUrl } from '../../lib/schema';

export const metadata: Metadata = {
  title: 'Notary Tax Deductions & the Self-Employment Tax Exemption (2026) | The Bearded Notary',
  description: 'The notarial-fee self-employment tax exemption explained correctly, plus a full breakdown of notary and loan signing agent tax deductions by category.',
  alternates: {
    canonical: '/notary-tax-deductions',
  },
  openGraph: {
    title: 'Notary Tax Deductions & the Self-Employment Tax Exemption',
    description: 'What notarial fees are actually exempt from self-employment tax, and the full list of deductible notary business expenses.',
    images: ['/images/notary-pricing-guide-featured.png'],
  },
};

export default function NotaryTaxDeductions() {
  const articleSchema = buildArticleSchema({
    title: 'Notary Tax Deductions & the Self-Employment Tax Exemption (2026)',
    description:
      'The notarial-fee self-employment tax exemption explained correctly, plus a full breakdown of notary and loan signing agent tax deductions by category.',
    path: '/notary-tax-deductions',
    image: '/images/notary-pricing-guide-featured.png',
    dateModified: '2026-09-11',
  });
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: getAbsoluteUrl('/') },
    { name: 'Notary Tax Deductions', url: getAbsoluteUrl('/notary-tax-deductions') },
  ]);
  const faqSchema = buildFaqSchema([
    {
      question: 'Are notary fees exempt from self-employment tax?',
      answer:
        'Only the fee for the notarial act itself (an acknowledgment or jurat) is generally exempt from self-employment tax under federal rules. Travel fees, printing, document handling, administrative charges, and loan signing service fees are not exempt and remain subject to self-employment tax.',
    },
    {
      question: 'Does this exemption depend on whether I call myself a notary or a loan signing agent?',
      answer:
        'No. The exemption applies to the specific fee component for the notarial act, not to a job title. A loan signing agent still gets the exemption on the pure notarial-fee portion of a signing, but the rest of what they charge for handling the signing is not exempt.',
    },
    {
      question: 'What is the biggest tax deduction for mobile notaries?',
      answer:
        'Vehicle mileage is typically the largest deduction for mobile notaries, followed by the notarial-fee self-employment tax exemption itself. See our mileage deduction guide for the current IRS rate and record-keeping requirements.',
    },
    {
      question: 'Do I need special software to track this?',
      answer:
        'You need a way to separate notarial-fee income from everything else you charge (travel, printing, signing service fees), since that split determines what is exempt. Any accounting software that lets you categorize income works — see our accounting software comparison.',
    },
  ]);

  return (
    <div className="min-h-screen bg-white">
      <ArticleHeader title="Notary Tax Deductions & the Self-Employment Tax Exemption" eyebrow="Updated September 2026" />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <JsonLd data={[articleSchema, breadcrumbSchema, faqSchema]} />

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-8 font-semibold">
            There's one tax rule specific to notaries that most general small-business tax content never mentions,
            plus the full list of deductions that apply to running a notary or loan signing business.
          </p>

          <AuthorByline className="mb-8" />
          <AffiliateDisclosure className="mb-8" />

          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
            <p className="text-gray-800">
              <strong>Disclaimer:</strong> This is general information, not tax advice. Tax rules change and your
              situation may differ. Confirm anything here against current IRS guidance or with a tax professional
              before you file.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">The Notarial Fee Exemption (Get This Part Right)</h2>

          <p className="text-gray-700 mb-6">
            The IRS Taxpayer Advocate Service confirms it directly: fees you earn for performing an official
            notarial act — an acknowledgment or a jurat — are generally not subject to self-employment tax. That's a
            real, meaningful exemption. But it's narrower than a lot of notary content makes it sound.
          </p>

          <div className="bg-blue-50 border-2 border-blue-500 p-8 mb-8 rounded">
            <h3 className="text-xl font-bold text-notary-navy mb-4">What's actually exempt vs. what isn't</h3>
            <div className="space-y-3 text-gray-700">
              <p><strong>Exempt from self-employment tax:</strong> The specific fee for the notarial act itself (your state's per-signature acknowledgment/jurat fee)</p>
              <p><strong>NOT exempt — still subject to self-employment tax:</strong> Travel fees, printing charges, document handling, administrative fees, and loan signing service fees</p>
            </div>
          </div>

          <p className="text-gray-700 mb-6">
            This is a distinction about which fee component you're being paid, not about your job title. Plenty of
            content frames this as "notaries don't pay self-employment tax, but loan signing agents do" — that's not
            quite right. If you're a loan signing agent, the pure notarial-fee portion of what you charge is still
            exempt. The travel fee, printing, and the flat rate you charge for handling the signing itself are not.
            Since loan signing agents typically earn most of their income from that non-exempt portion, the practical
            effect is similar, but the underlying rule is about the fee type, not the title.
          </p>

          <p className="text-gray-700 mb-8">
            You still have to report notarial fees as income — they're just excluded from the self-employment tax
            calculation specifically. This gets reported on Schedule C (Profit or Loss from Business), with Schedule
            SE (Self-Employment Tax) being where the exemption is actually applied. The IRS's own guidance points to
            Publication 334 and Tax Topic 554 for the details, and recommends reviewing the Schedule SE instructions
            carefully if notarial fees are your only Schedule C income.
          </p>

          <div className="bg-gray-50 border-2 border-notary-gold/40 p-6 mb-8 rounded">
            <h3 className="text-xl font-bold text-notary-navy mb-3">Why your recordkeeping has to separate these</h3>
            <p className="text-gray-700">
              Since only the notarial-act fee is exempt, you need records that clearly separate that fee from travel
              charges, printing, and any flat signing-service rate you charge. This is exactly what a sequential
              journal is for — logging the notarial fee specifically, separate from what you invoice overall for the
              appointment.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">Tax Deductions by Category</h2>

          <p className="text-gray-700 mb-6">
            Separate from the exemption above, self-employed notaries and loan signing agents can deduct ordinary
            business expenses the same as any other small business. These generally fall into four categories.
          </p>

          <h3 className="text-2xl font-bold text-notary-navy mt-10 mb-4">1. Professional Expenses</h3>
          <p className="text-gray-700 mb-4">Costs tied to becoming and staying a notary or signing agent:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-8">
            <li>Notary commission fees and state filing costs</li>
            <li>Notary bond premiums</li>
            <li>Notary stamp, seal, and embosser</li>
            <li>Notary journal(s)</li>
            <li>E&O (errors and omissions) insurance and other business liability insurance premiums</li>
            <li>Training and certification costs (Loan Signing System, NNA background screening, continuing education)</li>
            <li>Business-related books and reference materials — see our <Link href="/essential-notary-books" className="text-notary-gold hover:underline">recommended reading list</Link></li>
          </ul>

          <h3 className="text-2xl font-bold text-notary-navy mt-10 mb-4">2. Administrative Expenses</h3>
          <p className="text-gray-700 mb-4">Day-to-day costs of running the business:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-8">
            <li>Office supplies and equipment — paper, pens, clipboards, a bag to carry it all, printers, scanners, ink, toner (see our <Link href="/best-printers-for-notaries" className="text-notary-gold hover:underline">printer guide</Link> and <Link href="/best-scanners-for-notaries" className="text-notary-gold hover:underline">scanner guide</Link>)</li>
            <li>Home office costs, if you have a space used exclusively for business (a percentage of rent/mortgage interest, utilities, and insurance, or the IRS simplified home-office rate)</li>
            <li>Office or shared workspace rent, if applicable</li>
            <li>Phone and internet costs tied to business use</li>
            <li>Software — accounting/invoicing tools, mileage tracking apps, e-journal or RON platform fees (see our <Link href="/smart-money-management-for-notaries" className="text-notary-gold hover:underline">accounting software comparison</Link> and <Link href="/mileage-tracking-for-notaries" className="text-notary-gold hover:underline">mileage tracking guide</Link>)</li>
            <li>Printing, postage, and shipping costs for loan documents</li>
            <li>Business bank account fees and credit card processing fees</li>
          </ul>

          <h3 className="text-2xl font-bold text-notary-navy mt-10 mb-4">3. Travel Expenses</h3>
          <p className="text-gray-700 mb-4">
            For mobile notaries, this is usually the single largest deduction category — bigger than any of the
            above.
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
            <li>Vehicle mileage for business trips (signings, deliveries, supply runs, business errands)</li>
            <li>Parking and tolls</li>
            <li>Lodging, meals, and car rental for trips that take you away from home overnight on business</li>
          </ul>
          <p className="text-gray-700 mb-8">
            Mileage has its own record-keeping rules and a rate that changes annually (and changed mid-year in
            2026). Rather than restate a rate here that will go stale, see the full{' '}
            <Link href="/mileage-tracking-for-notaries" className="text-notary-gold hover:underline font-semibold">
              mileage tracking and deduction guide
            </Link>{' '}
            for the current rate, what qualifies, and a deduction calculator.
          </p>

          <h3 className="text-2xl font-bold text-notary-navy mt-10 mb-4">4. Marketing Expenses</h3>
          <p className="text-gray-700 mb-4">Costs of getting found and getting booked:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-8">
            <li>Business cards, flyers, and other print marketing</li>
            <li>Online directory listings — see our <Link href="/free-marketing-sites-notaries" className="text-notary-gold hover:underline">free marketing sites guide</Link></li>
            <li>Website hosting, domain, and development costs</li>
            <li>Paid ads and social media promotion</li>
            <li>Professional photography for marketing materials</li>
            <li>Business meals with clients or referral partners (typically limited to 50% of the cost)</li>
          </ul>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">Frequently Asked Questions</h2>

          <div className="space-y-6 mb-12">
            <div className="bg-gray-50 p-6 rounded">
              <h3 className="text-xl font-bold text-notary-navy mb-3">Are notary fees exempt from self-employment tax?</h3>
              <p className="text-gray-700">
                Only the fee for the notarial act itself (an acknowledgment or jurat) is generally exempt. Travel
                fees, printing, document handling, administrative charges, and loan signing service fees are not
                exempt and remain subject to self-employment tax.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded">
              <h3 className="text-xl font-bold text-notary-navy mb-3">Does this depend on whether I'm a notary or a loan signing agent?</h3>
              <p className="text-gray-700">
                No — it depends on the fee type, not the title. A loan signing agent still gets the exemption on the
                pure notarial-fee portion of a signing; the rest of what's charged for handling the signing is not
                exempt.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded">
              <h3 className="text-xl font-bold text-notary-navy mb-3">What's the biggest tax deduction for mobile notaries?</h3>
              <p className="text-gray-700">
                Vehicle mileage is typically the largest deduction, followed by the notarial-fee exemption itself.
                See the <Link href="/mileage-tracking-for-notaries" className="text-notary-gold hover:underline">mileage guide</Link> for the current rate and requirements.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded">
              <h3 className="text-xl font-bold text-notary-navy mb-3">Do I need special software to track this?</h3>
              <p className="text-gray-700">
                You need a way to separate notarial-fee income from everything else you charge, since that split
                determines what's exempt. Any accounting software that lets you categorize income works — see our{' '}
                <Link href="/smart-money-management-for-notaries" className="text-notary-gold hover:underline">accounting software comparison</Link>.
              </p>
            </div>
          </div>

          <ArticleSignupCta source="tax-deductions-article" />

          <div className="border-t-2 border-gray-200 pt-8 mt-12">
            <h3 className="text-2xl font-bold text-notary-navy mb-6">Related Resources:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/smart-money-management-for-notaries" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
                <h4 className="font-bold text-notary-navy mb-2">Smart Money Management for Notaries</h4>
                <p className="text-gray-600 text-sm">Bank accounts, credit cards, and accounting software</p>
              </Link>
              <Link href="/mileage-tracking-for-notaries" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
                <h4 className="font-bold text-notary-navy mb-2">Notary Mileage Tracking & Deduction Guide</h4>
                <p className="text-gray-600 text-sm">The current IRS rate, log requirements, and a calculator</p>
              </Link>
              <Link href="/how-much-to-charge-mobile-notary" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
                <h4 className="font-bold text-notary-navy mb-2">Mobile Notary Pricing Guide</h4>
                <p className="text-gray-600 text-sm">Make sure your rates account for the non-exempt portion of your income</p>
              </Link>
              <Link href="/best-printers-for-notaries" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
                <h4 className="font-bold text-notary-navy mb-2">Best Printer for Notaries & Loan Signing Agents</h4>
                <p className="text-gray-600 text-sm">A deductible expense worth getting right</p>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
