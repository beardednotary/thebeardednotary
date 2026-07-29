import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleSignupCta from '../../components/ArticleSignupCta';
import ArticleHeader from '../../components/ArticleHeader';
import JsonLd from '../../components/JsonLd';
import {
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildFaqSchema,
  getAbsoluteUrl,
} from '../../lib/schema';

export const metadata: Metadata = {
  title: 'Best Payment Methods for Notaries (2026) | The Bearded Notary',
  description:
    'Learn which payment methods work best for mobile notaries, when to collect payment, and how to handle cash, Zelle, Venmo, cards, checks, and invoices.',
  alternates: {
    canonical: '/payment-methods-for-notaries',
  },
  openGraph: {
    title: 'Best Payment Methods for Notaries (2026)',
    description:
      'A practical guide to cash, Zelle, Venmo, card readers, checks, and invoices for mobile notaries.',
    images: ['/images/first-30-days-notary-featured.png'],
  },
};

const faqItems = [
  {
    question: 'What payment methods should a mobile notary accept?',
    answer:
      'For most mobile notaries, the simplest setup is cash, Zelle, and one card option such as Square. That covers most individual clients without making setup complicated.',
  },
  {
    question: 'Should notaries accept credit cards?',
    answer:
      'Yes, if you can. Some clients expect to pay by card, and accepting one card option can save appointments you might otherwise lose.',
  },
  {
    question: 'When should a notary collect payment?',
    answer:
      'For one-time appointments with the general public, collect payment before you leave. For repeat business or company clients, invoices with clear terms are common.',
  },
  {
    question: 'Is Zelle or Venmo better for notaries?',
    answer:
      'Zelle is often simpler for direct bank-to-bank payments. Venmo can also work well, especially if local clients already use it. Many notaries keep both available.',
  },
];

const paymentMethods = [
  {
    name: 'Cash',
    bestFor: 'Same-day appointments with the general public',
    pros: ['No processing fee', 'Instant payment', 'Easy backup if apps fail'],
    watchFor: ['Carry small change', 'Always give a receipt', 'Do not leave without collecting'],
  },
  {
    name: 'Zelle',
    bestFor: 'Simple payments from individual clients',
    pros: ['Usually no fee', 'Fast transfers', 'Easy to confirm before leaving'],
    watchFor: ['Some clients do not use it', 'Double-check the name and phone number before they send'],
  },
  {
    name: 'Venmo',
    bestFor: 'Clients who already prefer app-based payments',
    pros: ['Familiar to many people', 'Quick to send', 'Useful as a second digital option'],
    watchFor: ['Use a business-facing profile name', 'Do not rely on it as your only payment method'],
  },
  {
    name: 'Square',
    bestFor: 'Credit and debit card payments',
    pros: ['Lets you take cards', 'Receipts are easy', 'Good when clients want to tap or swipe'],
    watchFor: ['Processing fee on card payments', 'Build the fee into your pricing approach ahead of time'],
  },
  {
    name: 'PayPal',
    bestFor: 'Online invoices or clients who already use PayPal',
    pros: ['Widely recognized', 'Can be used for invoices', 'Another option for remote payment'],
    watchFor: ['Fees can apply', 'Some in-person clients will still prefer simpler options'],
  },
  {
    name: 'Check',
    bestFor: 'Law offices, small businesses, and repeat local clients',
    pros: ['Common for business clients', 'Easy paper trail', 'Useful when a company already has a payment process'],
    watchFor: ['Deposit promptly', 'Less ideal for one-time public appointments'],
  },
  {
    name: 'Invoice and ACH',
    bestFor: 'Title companies, escrow, and repeat business accounts',
    pros: ['Fits normal company billing', 'Good for larger or ongoing work', 'Keeps records organized'],
    watchFor: ['Use clear due dates', 'Follow up on unpaid invoices', 'Not needed for every small appointment'],
  },
];

export default function PaymentMethodsForNotariesPage() {
  const articleSchema = buildArticleSchema({
    title: 'Best Payment Methods for Notaries (2026)',
    description:
      'Learn which payment methods work best for mobile notaries, when to collect payment, and how to handle cash, Zelle, Venmo, cards, checks, and invoices.',
    path: '/payment-methods-for-notaries',
    image: '/images/first-30-days-notary-featured.png',
    dateModified: '2026-07-29',
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: getAbsoluteUrl('/') },
    { name: 'Payment Methods for Notaries', url: getAbsoluteUrl('/payment-methods-for-notaries') },
  ]);

  const faqSchema = buildFaqSchema(faqItems);

  return (
    <div className="min-h-screen bg-white">
      <ArticleHeader title="Best Payment Methods for Notaries" eyebrow="Updated July 2026" />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <JsonLd data={[articleSchema, breadcrumbSchema, faqSchema]} />

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-8 font-semibold">
            The best payment setup for most mobile notaries is simple: accept cash, Zelle, and one card option such as Square.
          </p>

          <p className="text-gray-700 mb-8">
            That gives you a fast option for clients who want to pay in person, a digital option that avoids card fees, and a card option for people who do not carry cash. If you are still setting up your basics, keep this page open alongside the{' '}
            <Link href="/first-30-days-new-notary" className="text-notary-gold hover:underline">
              first 30 days checklist
            </Link>{' '}
            and the{' '}
            <Link href="/how-much-to-charge-mobile-notary" className="text-notary-gold hover:underline">
              pricing guide
            </Link>
            .
          </p>

          <div className="bg-notary-gold bg-opacity-10 border-l-4 border-notary-gold p-6 my-8">
            <h2 className="text-2xl font-bold text-notary-navy mb-4">Best Choice for Most Notaries</h2>
            <p className="text-gray-800 mb-3">
              If you mostly serve the general public, start with cash, Zelle, and one card reader.
            </p>
            <p className="text-gray-800 mb-3">
              If you also work with law offices, title companies, or repeat business clients, add checks and simple invoicing.
            </p>
            <p className="text-gray-800">
              Keep it easy for the client, and keep it easy for yourself to confirm payment before you leave.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">What Most Notaries Should Set Up First</h2>

          <div className="bg-gray-50 p-6 rounded mb-8">
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Cash, including a small amount of change</li>
              <li>Zelle for fast bank-to-bank payments</li>
              <li>A card option such as Square for debit and credit cards</li>
              <li>Venmo as a bonus option if your local clients use it often</li>
              <li>A simple way to send or save receipts</li>
            </ul>
          </div>

          <p className="text-gray-700 mb-8">
            That setup is enough for a lot of appointments. You do not need seven payment apps on day one. You just need a small group of options that covers how real clients actually pay.
          </p>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">Best Payment Methods Compared</h2>

          <div className="space-y-6 mb-8">
            {paymentMethods.map((method) => (
              <div key={method.name} className="border border-gray-200 rounded p-6">
                <h3 className="text-2xl font-bold text-notary-navy mb-2">{method.name}</h3>
                <p className="text-gray-700 mb-4">
                  <strong>Best for:</strong> {method.bestFor}
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-4 rounded">
                    <h4 className="font-bold text-notary-navy mb-3">Why it helps</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      {method.pros.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-red-50 p-4 rounded">
                    <h4 className="font-bold text-red-900 mb-3">What to watch for</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      {method.watchFor.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">When to Collect Payment</h2>

          <div className="space-y-4 mb-8">
            <div className="bg-white border border-gray-200 p-6 rounded">
              <h3 className="text-xl font-bold text-notary-navy mb-3">General public appointments</h3>
              <p className="text-gray-700">
                Collect payment before you leave. That includes home visits, hospital visits, jail visits, and one-time office appointments. If the client is paying by app, wait until you can confirm it came through.
              </p>
            </div>
            <div className="bg-white border border-gray-200 p-6 rounded">
              <h3 className="text-xl font-bold text-notary-navy mb-3">Business and repeat clients</h3>
              <p className="text-gray-700">
                Checks, invoices, and ACH transfers are common when you work with a company that already has a billing process. Use clear due dates and follow up promptly if a payment is late.
              </p>
            </div>
          </div>

          <p className="text-gray-700 mb-8">
            If you are still working out your travel fees and appointment minimums, use the{' '}
            <Link href="/how-much-to-charge-mobile-notary" className="text-notary-gold hover:underline">
              pricing guide
            </Link>{' '}
            first. The easier your quote is to explain, the easier it is to collect.
          </p>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">How to Handle Card Fees Without Making It Awkward</h2>

          <p className="text-gray-700 mb-6">
            Decide ahead of time whether card fees are just part of your normal pricing or whether you want to mention them before the client agrees. What matters most is that the total feels clear before the appointment starts.
          </p>

          <div className="bg-gray-50 p-6 rounded mb-8">
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Give the full total before you head out</li>
              <li>If card payments cost you more, account for that in a consistent way</li>
              <li>Avoid surprising people with extra charges at the door</li>
              <li>Keep your pricing simple enough to say out loud without stumbling through it</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">Simple Setup Checklist</h2>

          <div className="bg-white border border-gray-200 p-6 rounded mb-8">
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>Choose one name to use across your payment apps</li>
              <li>Turn on Zelle and test it with a small transfer</li>
              <li>Set up one card option and save it on your phone</li>
              <li>Carry a receipt book or use digital receipts</li>
              <li>Keep a little change in your bag or car</li>
              <li>Decide what you will say when a client asks, &quot;How can I pay you?&quot;</li>
            </ol>
          </div>

          <p className="text-gray-700 mb-8">
            If you have not cleaned up your business name, phone, and email yet, the{' '}
            <Link href="/business-email-for-notaries" className="text-notary-gold hover:underline">
              business email guide
            </Link>{' '}
            and the{' '}
            <Link href="/smart-money-management-for-notaries" className="text-notary-gold hover:underline">
              money management page
            </Link>{' '}
            are the best next stops.
          </p>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">Common Mistakes to Avoid</h2>

          <div className="space-y-4 mb-8">
            <div className="bg-red-50 border-l-4 border-red-500 p-6">
              <h3 className="font-bold text-red-900 mb-2">Only offering one payment method</h3>
              <p className="text-gray-700">
                If a client says they do not carry cash or do not use Zelle, you should have a second easy option ready.
              </p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 p-6">
              <h3 className="font-bold text-red-900 mb-2">Leaving before payment is confirmed</h3>
              <p className="text-gray-700">
                This is the most avoidable problem on small appointments. Confirm it before you pack up.
              </p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 p-6">
              <h3 className="font-bold text-red-900 mb-2">Using usernames that look personal or random</h3>
              <p className="text-gray-700">
                Try to keep your payment profiles tied to your real name or business name so clients feel comfortable sending money.
              </p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 p-6">
              <h3 className="font-bold text-red-900 mb-2">Forgetting receipts and records</h3>
              <p className="text-gray-700">
                Good records make refunds, tax time, and client questions much easier to handle.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">Quick Answer</h2>

          <p className="text-gray-700 mb-8">
            For most mobile notaries, the best starting setup is cash, Zelle, and one card option. Add Venmo if your clients use it often, and use checks or invoices when you start working with regular business clients.
          </p>

          <ArticleSignupCta source="payment-methods-article" />

          <div className="border-t-2 border-gray-200 pt-8 mt-12">
            <h3 className="text-2xl font-bold text-notary-navy mb-6">Keep Going</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/how-much-to-charge-mobile-notary" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
                <h4 className="font-bold text-notary-navy mb-2">How Much to Charge as a Mobile Notary</h4>
                <p className="text-gray-600 text-sm">Set the total first so collecting payment feels straightforward</p>
              </Link>
              <Link href="/first-30-days-new-notary" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
                <h4 className="font-bold text-notary-navy mb-2">Your First 30 Days as a New Notary</h4>
                <p className="text-gray-600 text-sm">Use this checklist to finish the rest of your setup</p>
              </Link>
              <Link href="/business-email-for-notaries" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
                <h4 className="font-bold text-notary-navy mb-2">Best Business Email for Notaries</h4>
                <p className="text-gray-600 text-sm">Match your payment profiles with the same clean business contact info</p>
              </Link>
              <Link href="/smart-money-management-for-notaries" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
                <h4 className="font-bold text-notary-navy mb-2">Smart Money Management for Notaries</h4>
                <p className="text-gray-600 text-sm">Keep your records and accounts organized once payments start coming in</p>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
