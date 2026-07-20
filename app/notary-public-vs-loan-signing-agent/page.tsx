import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleHeader from '../../components/ArticleHeader';
import ArticleSignupCta from '../../components/ArticleSignupCta';
import JsonLd from '../../components/JsonLd';
import { buildArticleSchema, buildBreadcrumbSchema, buildFaqSchema, getAbsoluteUrl } from '../../lib/schema';

export const metadata: Metadata = {
  title: 'Notary Public vs. Loan Signing Agent: What Is the Difference in 2026? | The Bearded Notary',
  description:
    'Learn the real difference between a notary public and a loan signing agent, including duties, income potential, startup costs, and which path makes sense first.',
  alternates: {
    canonical: '/notary-public-vs-loan-signing-agent',
  },
  openGraph: {
    title: 'Notary Public vs. Loan Signing Agent: What Is the Difference?',
    description:
      'Duties, income, startup costs, and which path makes sense first for new notaries.',
    images: ['/images/notary-pricing-guide-featured.png'],
  },
};

const comparisonRows = [
  {
    category: 'Core role',
    notary: 'Performs general notarizations such as acknowledgments, jurats, oaths, and certified copies where allowed.',
    signingAgent: 'A notary public who also handles mortgage and real-estate closing packages for title and escrow work.',
  },
  {
    category: 'Training required',
    notary: 'Only your state commission requirements.',
    signingAgent: 'Your notary commission plus loan signing training, process knowledge, and often background screening expectations from hiring companies.',
  },
  {
    category: 'Typical clients',
    notary: 'Individuals, families, hospitals, jails, law offices, local businesses, and the general public.',
    signingAgent: 'Title companies, escrow officers, signing services, lenders, and borrowers at closing appointments.',
  },
  {
    category: 'Appointment style',
    notary: 'Usually shorter, simpler appointments with one or a few documents.',
    signingAgent: 'Longer appointments with large document packages, print requirements, scan-backs, and tighter deadlines.',
  },
  {
    category: 'Equipment needs',
    notary: 'Basic notary kit, journal, stamp, thumbprint pad where needed, and mobile appointment essentials.',
    signingAgent: 'Everything a notary needs plus a dual-tray printer, reliable scanner, better document organization, and stronger workflow systems.',
  },
  {
    category: 'Income per appointment',
    notary: 'Often modest per visit, especially if you are doing standard general notarizations.',
    signingAgent: 'Usually much higher per appointment because you are handling full loan packages and a more specialized workflow.',
  },
];

const faqItems = [
  {
    question: 'What is the difference between a notary public and a loan signing agent?',
    answer:
      'A loan signing agent is a notary public who specializes in mortgage and real-estate closing appointments. All loan signing agents are notaries, but not all notaries are loan signing agents.',
  },
  {
    question: 'Do I need to become a notary before becoming a loan signing agent?',
    answer:
      'Yes. You must first become a commissioned notary public before you can work as a loan signing agent.',
  },
  {
    question: 'Do loan signing agents make more than regular notaries?',
    answer:
      'In many cases, yes. Loan signing appointments usually pay more than general notarizations because the work is more specialized and operationally demanding.',
  },
  {
    question: 'Can I start as a general notary and become a loan signing agent later?',
    answer:
      'Yes. That is a very common path. Many people start by learning general notary work, building confidence, and then adding loan signing services once they are ready.',
  },
  {
    question: 'Is a loan signing agent better than being a notary public?',
    answer:
      'Not automatically. It is usually better for people who want higher-ticket work and are willing to handle printers, scan-backs, deadlines, and more complex appointments. A general notary path can still be a great fit depending on your goals.',
  },
];

export default function NotaryVsLoanSigningAgentPage() {
  const articleSchema = buildArticleSchema({
    title: 'Notary Public vs. Loan Signing Agent: What Is the Difference in 2026?',
    description:
      'Learn the real difference between a notary public and a loan signing agent, including duties, income potential, startup costs, and which path makes sense first.',
    path: '/notary-public-vs-loan-signing-agent',
    image: '/images/notary-pricing-guide-featured.png',
    datePublished: '2026-07-20',
    dateModified: '2026-07-20',
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: getAbsoluteUrl('/') },
    { name: 'Notary Public vs. Loan Signing Agent', url: getAbsoluteUrl('/notary-public-vs-loan-signing-agent') },
  ]);

  const faqSchema = buildFaqSchema(faqItems);

  return (
    <div className="min-h-screen bg-white">
      <ArticleHeader title="Notary Public vs. Loan Signing Agent: What Is the Difference?" eyebrow="Updated July 2026" />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <JsonLd data={[articleSchema, breadcrumbSchema, faqSchema]} />

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-8 font-semibold">
            The short version is simple: a loan signing agent is a notary public, but with a narrower and more
            specialized role. If you are trying to choose your path, the real question is not which one is better. It
            is which one fits where you are right now.
          </p>

          <p className="text-gray-700 mb-8">
            If you are still working toward your commission, start with the{' '}
            <Link href="/how-to-become-a-notary-in-california" className="text-notary-gold hover:underline">
              California notary guide
            </Link>{' '}
            or the{' '}
            <Link href="/cost-to-become-a-notary-in-california" className="text-notary-gold hover:underline">
              California notary cost breakdown
            </Link>
            . This page is for understanding what comes after that commission and how the earning paths split.
          </p>

          <div className="bg-blue-50 border-2 border-blue-500 p-8 mb-8 rounded">
            <h2 className="text-2xl font-bold text-notary-navy mb-4">Quick Answer</h2>
            <div className="space-y-3 text-gray-700">
              <p><strong>Notary public:</strong> the base commission that lets you perform authorized notarial acts.</p>
              <p><strong>Loan signing agent:</strong> a notary who also handles mortgage closing appointments.</p>
              <p><strong>Best first step:</strong> become a notary first, then decide if signing work fits your goals.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">The Simple Difference</h2>

          <p className="text-gray-700 mb-6">
            A <strong>notary public</strong> is commissioned by the state to verify identity, witness signatures, and
            complete notarial certificates correctly. That work can include powers of attorney, affidavits, deeds,
            permission slips, and countless other routine documents.
          </p>

          <p className="text-gray-700 mb-8">
            A <strong>loan signing agent</strong> is a notary public who focuses on real-estate and mortgage packages.
            They travel to borrowers, guide the signing flow of large document sets, return completed packages, and
            often print and scan documents as part of the job.
          </p>

          <div className="bg-notary-gold/10 border-l-4 border-notary-gold p-6 mb-8">
            <p className="text-gray-800 font-semibold">
              The relationship is one-way: every loan signing agent must already be a notary, but a general notary does
              not have to do loan signings.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">Side-by-Side Comparison</h2>

          <div className="bg-white border-2 border-gray-300 p-6 mb-8 rounded overflow-x-auto">
            <table className="w-full text-gray-700">
              <thead>
                <tr className="border-b-2 border-notary-navy">
                  <th className="py-2 pr-4 text-left">Category</th>
                  <th className="py-2 pr-4 text-left">Notary Public</th>
                  <th className="py-2 pr-4 text-left">Loan Signing Agent</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.category} className="border-b border-gray-300 align-top">
                    <td className="py-3 pr-4 font-semibold">{row.category}</td>
                    <td className="py-3 pr-4">{row.notary}</td>
                    <td className="py-3 pr-4">{row.signingAgent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">What a General Notary Usually Does</h2>

          <div className="bg-gray-50 p-6 rounded mb-8">
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Meet signers for everyday documents that need notarization</li>
              <li>Verify identity and willingness</li>
              <li>Complete certificates accurately and keep journal records where required</li>
              <li>Travel to homes, hospitals, offices, care facilities, and public meeting spots</li>
              <li>Build business through local search, referrals, and repeat clients</li>
            </ul>
          </div>

          <p className="text-gray-700 mb-8">
            This side of the business is often a better starting point because it teaches the fundamentals without
            forcing you into large document packages right away. It also pairs naturally with local SEO, repeat
            community work, and the kinds of appointments that come from a strong{' '}
            <Link href="/free-marketing-sites-notaries" className="text-notary-gold hover:underline">
              online visibility strategy
            </Link>
            .
          </p>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">What a Loan Signing Agent Usually Does</h2>

          <div className="bg-gray-50 p-6 rounded mb-8">
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Print large mixed-size loan packages accurately</li>
              <li>Meet borrowers for refinance, purchase, seller, and HELOC signings</li>
              <li>Keep the appointment moving while staying within the limits of notary law</li>
              <li>Watch for signature, date, and initial errors before shipping documents back</li>
              <li>Handle scan-backs, drop-offs, scheduling windows, and service expectations from title or signing companies</li>
            </ul>
          </div>

          <p className="text-gray-700 mb-8">
            That is why the loan signing path usually requires more gear and a stronger workflow. If you want to go in
            that direction, the{' '}
            <Link href="/best-printers-for-notaries" className="text-notary-gold hover:underline">
              printer guide
            </Link>{' '}
            and{' '}
            <Link href="/best-scanners-for-notaries" className="text-notary-gold hover:underline">
              scanner guide
            </Link>{' '}
            become much more important.
          </p>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">Income Difference</h2>

          <p className="text-gray-700 mb-6">
            This is the part that gets the most attention, and for good reason. General notary work and loan signing
            work are priced very differently because the service models are different.
          </p>

          <div className="bg-notary-navy text-white p-8 my-10 rounded">
            <h3 className="text-2xl font-bold mb-4">Practical income framing</h3>
            <div className="space-y-3 text-gray-200">
              <p><strong>General notary work:</strong> often smaller tickets, but easier to repeat and easier to start.</p>
              <p><strong>Loan signing work:</strong> higher-paying appointments, but more pressure, more gear, and more operational detail.</p>
              <p><strong>Best long-term play for many people:</strong> build a strong notary foundation, then add signing work if the workflow suits you.</p>
            </div>
          </div>

          <p className="text-gray-700 mb-8">
            If you want the pricing side broken out more concretely, read the{' '}
            <Link href="/how-much-to-charge-mobile-notary" className="text-notary-gold hover:underline">
              mobile notary pricing guide
            </Link>
            . It helps connect what customers pay to what the work actually demands.
          </p>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">Startup Cost Difference</h2>

          <div className="space-y-6 mb-8">
            <div className="bg-gray-50 p-6 rounded border-l-4 border-notary-gold">
              <h3 className="text-2xl font-bold text-notary-navy mb-3">General Notary Path</h3>
              <p className="text-gray-700">
                Lower startup cost. You need the commission, the legal basics, and a practical mobile setup. That can
                be enough to start taking appointments and learning the business.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded border-l-4 border-blue-700">
              <h3 className="text-2xl font-bold text-notary-navy mb-3">Loan Signing Path</h3>
              <p className="text-gray-700">
                Higher startup cost. You still need the commission, but now you may also need better printing,
                scanning, extra paper and toner, shipping confidence, and more time invested into training and process.
              </p>
            </div>
          </div>

          <p className="text-gray-700 mb-8">
            If you are still figuring out your spending threshold, the{' '}
            <Link href="/mobile-notary-supplies" className="text-notary-gold hover:underline">
              supplies checklist
            </Link>{' '}
            and the{' '}
            <Link href="/cost-to-become-a-notary-in-california" className="text-notary-gold hover:underline">
              California cost page
            </Link>{' '}
            are the best two pages to read together.
          </p>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">Which One Should You Start With?</h2>

          <div className="bg-white border-2 border-gray-300 p-6 rounded mb-8">
            <h3 className="text-xl font-bold text-notary-navy mb-4">Start with general notary work if:</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>You are newly commissioned and still building confidence</li>
              <li>You want a simpler entry point</li>
              <li>You would rather learn local marketing and appointment flow first</li>
              <li>You do not want to buy bigger equipment right away</li>
            </ul>

            <h3 className="text-xl font-bold text-notary-navy mb-4">Add loan signing work if:</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>You want higher-ticket appointments</li>
              <li>You are comfortable with deadlines and large document packages</li>
              <li>You are willing to invest in better systems and equipment</li>
              <li>You want to build toward a stronger income ceiling</li>
            </ul>
          </div>

          <p className="text-gray-700 mb-8">
            For most people, the healthiest answer is not either-or forever. It is more like a progression: commission
            first, fundamentals second, specialization third.
          </p>

          <p className="text-gray-700 mb-8">
            If you decide to move into signings, structured training can shorten the learning curve. Programs like{' '}
            <a
              href="http://loansigningsystem.com/?afmc=x5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-notary-gold hover:underline"
            >
              Loan Signing System
            </a>{' '}
            are one option to research once you know you want the signing-agent path.
          </p>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">A Good First-Year Path</h2>

          <div className="bg-gray-50 p-6 mb-10 rounded">
            <ol className="list-decimal pl-6 text-gray-700 space-y-3">
              <li>Get commissioned and learn your state rules well.</li>
              <li>Start taking general notary work and tighten your workflow.</li>
              <li>Build visibility with listings, reviews, and repeat local relationships.</li>
              <li>Upgrade your gear only when the work justifies it.</li>
              <li>Move into loan signings once you want the larger appointments and can support them cleanly.</li>
            </ol>
          </div>

          <p className="text-gray-700 mb-8">
            That approach keeps you from overspending early while still leaving the door open to bigger opportunities.
            It also matches the logic behind the{' '}
            <Link href="/first-30-days-new-notary" className="text-notary-gold hover:underline">
              First 30 Days action plan
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

          <ArticleSignupCta source="notary-vs-signing-agent-article" />

          <div className="border-t-2 border-gray-200 pt-8 mt-12">
            <h3 className="text-2xl font-bold text-notary-navy mb-6">Keep Going</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/how-to-become-a-notary-in-california" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
                <h4 className="font-bold text-notary-navy mb-2">How to Become a Notary in California</h4>
                <p className="text-gray-600 text-sm">Start with the commission process if you are not official yet.</p>
              </Link>
              <Link href="/how-much-to-charge-mobile-notary" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
                <h4 className="font-bold text-notary-navy mb-2">How Much Should You Charge?</h4>
                <p className="text-gray-600 text-sm">See how the pricing model changes as your service level grows.</p>
              </Link>
              <Link href="/best-printers-for-notaries" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
                <h4 className="font-bold text-notary-navy mb-2">Best Printers for Notaries</h4>
                <p className="text-gray-600 text-sm">A must-read if you are moving toward serious signing work.</p>
              </Link>
              <Link href="/why-now-is-perfect-time-loan-signing-agent" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
                <h4 className="font-bold text-notary-navy mb-2">Why Become a Loan Signing Agent</h4>
                <p className="text-gray-600 text-sm">Read the bigger opportunity case if you want to specialize.</p>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
