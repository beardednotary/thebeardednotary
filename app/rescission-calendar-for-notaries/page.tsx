import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleSignupCta from '../../components/ArticleSignupCta';
import AffiliateDisclosure from '../../components/AffiliateDisclosure';
import ArticleHeader from '../../components/ArticleHeader';
import AuthorByline from '../../components/AuthorByline';
import JsonLd from '../../components/JsonLd';
import RescissionCalculator from '../../components/RescissionCalculator';
import { buildArticleSchema, buildBreadcrumbSchema, buildFaqSchema, getAbsoluteUrl } from '../../lib/schema';

export const metadata: Metadata = {
  title: 'Rescission Calendar & Deadline Calculator for Notaries | The Bearded Notary',
  description: 'A 3-business-day right-of-rescission calculator for loan signing agents, plus which loans actually qualify, how business days are counted under Regulation Z, and common mistakes.',
  alternates: {
    canonical: '/rescission-calendar-for-notaries',
  },
  openGraph: {
    title: 'Rescission Calendar & Deadline Calculator for Notaries',
    description: 'A right-of-rescission deadline calculator plus the Regulation Z rules loan signing agents actually need to know.',
    images: ['/images/notary-pricing-guide-featured.png'],
  },
};

export default function RescissionCalendarForNotaries() {
  const articleSchema = buildArticleSchema({
    title: 'Rescission Calendar & Deadline Calculator for Notaries',
    description:
      'A 3-business-day right-of-rescission calculator for loan signing agents, plus which loans actually qualify, how business days are counted under Regulation Z, and common mistakes.',
    path: '/rescission-calendar-for-notaries',
    image: '/images/notary-pricing-guide-featured.png',
    dateModified: '2026-09-11',
  });
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: getAbsoluteUrl('/') },
    { name: 'Rescission Calendar for Notaries', url: getAbsoluteUrl('/rescission-calendar-for-notaries') },
  ]);
  const faqSchema = buildFaqSchema([
    {
      question: 'Does Saturday count as a business day for rescission?',
      answer:
        'Yes. Under Regulation Z 1026.2(a)(6), the rescission definition of business day includes all calendar days except Sundays and federal legal holidays. A signing with no holidays in the window that falls on Wednesday ends on Saturday at midnight, not the following Monday.',
    },
    {
      question: 'Does the signing date count as day one?',
      answer:
        'No. The rescission period begins the day after the signing date, or the day after the last of the required disclosures is received if that is later. A Thursday signing makes Friday day one, Saturday day two, and Monday day three, assuming no holidays.',
    },
    {
      question: 'What happens when a fixed-date holiday like July 4 falls on a weekend?',
      answer:
        "Only the actual legal holiday date is excluded from the count, not an alternate day banks may observe when the holiday falls on a weekend. If July 4 falls on a Saturday, the Friday before it still counts as a business day for rescission purposes, even though many offices are closed that Friday.",
    },
    {
      question: 'Does a refinance with my current lender have a rescission period?',
      answer:
        'Only partially. If no new money is advanced beyond paying off the existing loan, the refinance is generally exempt under the same-creditor exemption. If the lender advances additional funds, that new-money portion is generally still subject to rescission.',
    },
    {
      question: 'Do reverse mortgages have a rescission period?',
      answer:
        'Generally yes, for a standard HECM reverse mortgage. The exception is an HECM for Purchase transaction, which generally does not have a 3-day right to cancel.',
    },
  ]);

  return (
    <div className="min-h-screen bg-white">
      <ArticleHeader title="Rescission Calendar & Deadline Calculator for Notaries" eyebrow="Updated September 2026" />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <JsonLd data={[articleSchema, breadcrumbSchema, faqSchema]} />

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-8 font-semibold">
            The 3-day right of rescission trips up new loan signing agents constantly — not because the rule is
            complicated, but because it uses a different definition of "business day" than everything else in
            lending. Here's the calculator, and the rules behind it.
          </p>

          <AuthorByline className="mb-8" />
          <AffiliateDisclosure className="mb-8" />

          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
            <p className="text-gray-800">
              <strong>Disclaimer:</strong> This is general information and a planning estimate, not legal or
              compliance advice. The controlling deadline is whatever the borrower's actual Notice of Right to
              Cancel states. Confirm with the title company or lender before relying on any calculated date,
              especially around holidays.
            </p>
          </div>

          <RescissionCalculator />

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">How the Rescission Period Works</h2>

          <p className="text-gray-700 mb-6">
            The right of rescission is a consumer protection under Regulation Z (12 CFR 1026.23), enforced by the
            Consumer Financial Protection Bureau. It applies to certain refinances and home equity loans secured by
            the borrower's primary residence. The borrower has until midnight of the third business day to cancel
            the transaction in writing.
          </p>

          <p className="text-gray-700 mb-8">
            The clock starts the day after the latest of three events: the signing date, the date the borrower
            receives the Truth in Lending disclosure, and the date the borrower receives the Notice of Right to
            Cancel. Most of the time, all three happen at the signing table. If the lender sends a corrected
            disclosure after the signing, the clock restarts from the date that corrected disclosure is received —
            the original signing date stops being relevant.
          </p>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">What Counts as a Business Day</h2>

          <p className="text-gray-700 mb-6">
            For rescission purposes specifically, Regulation Z's definition of "business day" (1026.2(a)(6)) means
            every calendar day except Sundays and federal legal holidays. That's a narrower exclusion list than the
            "business day" most people assume — Saturdays are included. A Wednesday signing with no holidays in the
            window ends on Saturday, not the following Monday.
          </p>

          <div className="bg-gray-50 p-6 mb-8 rounded">
            <h3 className="text-xl font-bold text-notary-navy mb-4">The 11 excluded federal holidays</h3>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-1 text-gray-700">
              <p>New Year's Day — January 1</p>
              <p>MLK Day — 3rd Monday of January</p>
              <p>Washington's Birthday — 3rd Monday of February</p>
              <p>Memorial Day — last Monday of May</p>
              <p>Juneteenth — June 19</p>
              <p>Independence Day — July 4</p>
              <p>Labor Day — 1st Monday of September</p>
              <p>Columbus Day — 2nd Monday of October</p>
              <p>Veterans Day — November 11</p>
              <p>Thanksgiving — 4th Thursday of November</p>
              <p>Christmas Day — December 25</p>
            </div>
          </div>

          <p className="text-gray-700 mb-8">
            When a fixed-date holiday lands on a weekend, only the actual legal holiday date is excluded from the
            count — not whatever alternate day banks close for. If July 4 falls on a Saturday, the Friday before it
            is still a business day for rescission purposes, even though a lot of offices treat it as a day off.
            Some lenders take a more conservative approach anyway and treat the observed day as a non-business day
            too, so confirm with the title company whenever a holiday weekend is involved.
          </p>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">Which Loans Have a Rescission Period</h2>

          <p className="text-gray-700 mb-6">
            Not every signing triggers rescission. It applies only to certain transactions secured by the borrower's
            principal dwelling — and a couple of the common categories are more conditional than a flat yes/no.
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse border-2 border-gray-300 text-sm">
              <thead>
                <tr className="bg-notary-navy text-white">
                  <th className="border border-gray-300 p-3 text-left">Transaction Type</th>
                  <th className="border border-gray-300 p-3 text-left">Rescission Required?</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3">Refinance of primary residence (new lender)</td>
                  <td className="border border-gray-300 p-3">Yes</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">Home equity loan or HELOC</td>
                  <td className="border border-gray-300 p-3">Yes</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3">Cash-out refinance on primary residence</td>
                  <td className="border border-gray-300 p-3">Yes</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">Refinance with the same lender, no new money advanced</td>
                  <td className="border border-gray-300 p-3">No (same-creditor exemption)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3">Refinance with the same lender, WITH new money advanced</td>
                  <td className="border border-gray-300 p-3">Partial — the new-money portion generally is rescindable</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">Purchase of any property</td>
                  <td className="border border-gray-300 p-3">No</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3">Investment property or second home</td>
                  <td className="border border-gray-300 p-3">No</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">Reverse mortgage (HECM)</td>
                  <td className="border border-gray-300 p-3">Yes</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3">Reverse mortgage for purchase (HECM for Purchase)</td>
                  <td className="border border-gray-300 p-3">No</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 mb-8">
            Not sure whether a package requires it? Look for a Notice of Right to Cancel in the loan documents. If
            the lender included one, rescission applies. If there isn't one, the loan typically funds the same or
            next business day.
          </p>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">How a Borrower Actually Rescinds</h2>

          <p className="text-gray-700 mb-6">
            The borrower cancels by providing written notice by midnight of the third business day. The notice
            doesn't need to be received by the lender by the deadline, and it doesn't need to be postmarked by the
            deadline — it just needs to be sent. If the deadline is midnight Saturday and the borrower drops a
            cancellation letter in a USPS mailbox at 10pm Saturday, that's a valid rescission even though it won't
            get postmarked until Monday. Hand-delivery to the lender's office works too, and some loan documents
            allow electronic notice.
          </p>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">Common Rescission Mistakes</h2>

          <div className="space-y-6 mb-12">
            <div className="bg-red-50 border-l-4 border-red-500 p-6">
              <h4 className="font-bold text-red-900 mb-2">❌ Counting the signing date itself</h4>
              <p className="text-gray-700">
                The period starts the day after signing. A Monday signing makes Tuesday day one, not Monday. This is
                the single most common error, and it shortchanges the borrower's actual cancellation window.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6">
              <h4 className="font-bold text-red-900 mb-2">❌ Excluding Saturdays</h4>
              <p className="text-gray-700">
                Saturdays are business days for rescission under Reg Z. A Wednesday signing with no holidays in the
                window ends Saturday — period, not the following Monday.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6">
              <h4 className="font-bold text-red-900 mb-2">❌ Ignoring a corrected disclosure</h4>
              <p className="text-gray-700">
                If the lender mails a corrected disclosure after the signing, the clock restarts from the date the
                borrower receives that corrected disclosure. The original signing date becomes irrelevant.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6">
              <h4 className="font-bold text-red-900 mb-2">❌ Forgetting the window can span a holiday</h4>
              <p className="text-gray-700">
                A signing that would normally clear in three calendar days can stretch to four or five when a
                federal holiday falls in the window — Thanksgiving and Christmas week are where this catches people
                off guard most often.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">Frequently Asked Questions</h2>

          <div className="space-y-6 mb-12">
            <div className="bg-gray-50 p-6 rounded">
              <h3 className="text-xl font-bold text-notary-navy mb-3">Does Saturday count as a business day for rescission?</h3>
              <p className="text-gray-700">
                Yes. Regulation Z's rescission-specific definition of business day includes all calendar days except
                Sundays and federal legal holidays. A Wednesday signing with no holidays in between ends Saturday at
                midnight.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded">
              <h3 className="text-xl font-bold text-notary-navy mb-3">Does the signing date count as day one?</h3>
              <p className="text-gray-700">
                No. The period begins the day after the signing date (or the day after the last required disclosure
                is delivered, if later). A Thursday signing makes Friday day one, Saturday day two, and Monday day
                three, assuming no holidays — the loan funds Tuesday.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded">
              <h3 className="text-xl font-bold text-notary-navy mb-3">What happens when a holiday falls on a weekend?</h3>
              <p className="text-gray-700">
                Only the actual legal holiday date is excluded. An alternate day banks observe when the holiday
                falls on a weekend is still a business day for rescission counting. Some lenders are more
                conservative about this, so confirm with the title company when a holiday weekend is involved.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded">
              <h3 className="text-xl font-bold text-notary-navy mb-3">Which loans don't have a rescission period?</h3>
              <p className="text-gray-700">
                Purchase loans, investment property or second-home loans, same-lender refinances with no new money,
                and HECM-for-Purchase reverse mortgages generally don't have one. If there's no Notice of Right to
                Cancel in the package, the loan typically doesn't have rescission.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded">
              <h3 className="text-xl font-bold text-notary-navy mb-3">Can a borrower rescind after the three-day period?</h3>
              <p className="text-gray-700">
                Generally no. If the lender failed to provide the required disclosures or the Notice of Right to
                Cancel, the rescission period may extend up to three years under certain circumstances — that's a
                question for the borrower's attorney, not something to estimate here.
              </p>
            </div>
          </div>

          <ArticleSignupCta source="rescission-calculator-article" />

          <div className="border-t-2 border-gray-200 pt-8 mt-12">
            <h3 className="text-2xl font-bold text-notary-navy mb-6">Related Resources:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/document-types-notaries-glossary" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
                <h4 className="font-bold text-notary-navy mb-2">Common Documents Notaries Encounter</h4>
                <p className="text-gray-600 text-sm">Where the Notice of Right to Cancel fits into a closing package</p>
              </Link>
              <Link href="/notary-public-vs-loan-signing-agent" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
                <h4 className="font-bold text-notary-navy mb-2">Notary Public vs. Loan Signing Agent</h4>
                <p className="text-gray-600 text-sm">Understand the role before you're explaining rescission at the table</p>
              </Link>
              <Link href="/how-much-to-charge-mobile-notary" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
                <h4 className="font-bold text-notary-navy mb-2">Mobile Notary Pricing Guide</h4>
                <p className="text-gray-600 text-sm">Rescindable signings can mean extra scheduling coordination — price accordingly</p>
              </Link>
              <Link href="/why-now-is-perfect-time-loan-signing-agent" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
                <h4 className="font-bold text-notary-navy mb-2">Loan Signing Agent in 2026: Is It Still Worth It?</h4>
                <p className="text-gray-600 text-sm">The bigger picture on moving into loan signing work</p>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
