import Link from 'next/link';
import type { Metadata } from 'next';
import ArticleSignupCta from '../../components/ArticleSignupCta';
import ArticleHeader from '../../components/ArticleHeader';
import JsonLd from '../../components/JsonLd';
import { buildBreadcrumbSchema, buildCollectionPageSchema, buildItemListSchema, getAbsoluteUrl } from '../../lib/schema';

export const metadata: Metadata = {
  title: '9 Essential Books That Will Help You Make Money As A Notary | The Bearded Notary',
  description:
    'A practical 9-book library for mobile notaries and loan signing agents covering business building, marketing, loan documents, specialty work, and ID awareness.',
  openGraph: {
    title: '9 Essential Books That Will Help You Make Money As A Notary',
    description:
      'A practical reading list for mobile notaries and loan signing agents who want stronger skills, better systems, and more income opportunities.',
    images: ['/images/essential-notary-books-featured.png'],
  },
};

const books = [
  {
    title: 'Sign and Thrive: How to Make Six Figures As a Mobile Notary and Loan Signing Agent',
    href: 'https://amzn.to/4pt6S9E',
    paragraphs: [
      'Bill Soroka\'s Sign and Thrive is still one of the most practical books for notaries who want to treat this like a real business instead of a casual side hustle. It focuses on building income through mobile notary and loan signing work while also helping you think more strategically about marketing, client experience, and long-term growth.',
      'What makes this one useful is that it speaks to the bigger picture. It does not just explain what the work is. It helps you think about how to build a six-figure operation with better habits, stronger positioning, and more confidence.',
    ],
  },
  {
    title: 'The Best Kept Secret In The Real Estate Industry: How To Become A Successful Notary Loan Signing Agent',
    href: 'https://amzn.to/4f6j78x',
    paragraphs: [
      'Mark Wills\' book remains one of the better entry points for people who are specifically interested in loan signing work. It frames the opportunity clearly, explains why the field can be lucrative, and gives newer notaries a simple path into a niche that often feels confusing from the outside.',
      'If your goal is to understand the loan signing side of the business and decide whether it fits your income goals, this is still worth reading. It pairs especially well with hands-on training because it helps you understand the why behind the work.',
    ],
  },
  {
    title: '$50k to Sign Your Name: A Definitive Guide to Becoming a Mobile Signing Agent',
    href: 'https://amzn.to/4gCzXgp',
    paragraphs: [
      'This book is a straightforward overview of the mobile signing agent path, especially for people trying to understand the economics of the business. It breaks down the opportunity in a simple way and helps readers think through time, expenses, and the workflow of loan signing appointments.',
      'It is useful because it keeps the conversation practical. If you want a book that helps you picture what the job looks like in the real world and what it might take to make it worthwhile, this one belongs on the list.',
    ],
  },
  {
    title: 'Just Win! How To Be A Great Notary Public: A Business Guide For Mobile Notaries and Loan Signing Agents',
    href: 'https://amzn.to/4gZuuk3',
    paragraphs: [
      'Rhonda DeYampert\'s Just Win! is a business-minded guide for notaries who want help turning a commission into something profitable and sustainable. It covers the mindset, resourcefulness, and practical foundation needed to grow beyond the basics.',
      'One of the strengths of this book is that it feels grounded in experience. It is written for notaries who want practical direction, not fluff, and it can help you tighten your systems early instead of learning every lesson the hard way.',
    ],
  },
  {
    title: 'Notary Marketing',
    href: 'https://amzn.to/4w8V7aR',
    paragraphs: [
      'This updated marketing-focused addition replaces the older Notary Marketing 2019 recommendation. The value here is obvious: many notaries know how to complete the work, but far fewer know how to consistently attract new clients and stand out in a crowded market.',
      'Based on the synopsis, this book leans into scripts, networking, sales techniques, referrals, and positioning. That makes it especially useful for general notary work and for anyone who feels stuck waiting on platforms instead of building direct client demand.',
    ],
  },
  {
    title: 'Start Your Notary Public & Loan Signing Agent Business: The Insiders Guide to Starting a Six-Figure Notary Side Hustle',
    href: 'https://amzn.to/3QW2uTN',
    paragraphs: [
      'This is a strong option for readers who want a broader business-startup perspective around notary and loan signing work. It focuses on building a side hustle that can scale, while also addressing common startup concerns like positioning, insurance, and mistakes to avoid.',
      'If you are in the early stages and want a book that combines opportunity, setup, and business-building advice in one place, this is a solid pick for your shelf.',
    ],
  },
  {
    title: 'Loan Documents Cheat Sheet: Descriptions of Loan Documents with images! (ESA Notary Academy)',
    href: 'https://amzn.to/4yqvOlW',
    paragraphs: [
      'This is one of the most practical additions on the list because it helps bridge the gap between theory and live signings. A lot of newer notaries freeze up when they are sitting in front of a borrower and trying to remember what a document is or how to describe it confidently.',
      'The compact format, document images, and short descriptions make this a great desk reference or bag reference. It is especially helpful for newer signing agents who want a confidence booster before and during appointments.',
    ],
  },
  {
    title: 'Beyond Loan Signings: The Ultimate Guide to Monetizing Your Notary Commission with Specialty Work',
    href: 'https://amzn.to/4fdxcQg',
    paragraphs: [
      'This is a smart addition because it pushes beyond the usual "become a signing agent" conversation. Beyond Loan Signings explores specialty work, alternative service lines, and adjacent revenue opportunities that can make a notary business more resilient and more profitable.',
      'That matters because not every market behaves the same way, and not every notary wants to depend only on loan signings. If you want to diversify into areas like apostille work, fingerprinting, inspections, family law appointments, or other specialty niches, this book is highly relevant.',
    ],
  },
  {
    title: 'The Novice-Friendly State I. D. Verification Guide Book 2026: Understanding Identity Checks, Document Features, Verification Basics, and Common Identification Review Practices',
    href: 'https://amzn.to/4bNRfUn',
    paragraphs: [
      'This replaces the older I.D. checking recommendation with a more beginner-friendly resource. The strength of this book is that it helps readers build awareness around identification review without pretending to replace official policy, legal requirements, or formal training.',
      'For notaries, that makes it a helpful support resource. It can sharpen your awareness of document features, common review habits, and frequent verification mistakes, which is valuable for newer notaries who want to be more careful and consistent with ID-related decisions.',
    ],
  },
];

export default function EssentialNotaryBooks() {
  const collectionSchema = buildCollectionPageSchema({
    title: '9 Essential Books That Will Help You Make Money As A Notary',
    description:
      'A practical 9-book library for mobile notaries and loan signing agents covering business building, marketing, loan documents, specialty work, and ID awareness.',
    path: '/essential-notary-books',
    items: books.map((book) => ({ name: book.title, url: book.href })),
  });
  const itemListSchema = buildItemListSchema({
    title: 'Essential Notary Books',
    path: '/essential-notary-books',
    items: books.map((book) => ({ name: book.title, url: book.href })),
  });
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: getAbsoluteUrl('/') },
    { name: 'Essential Notary Books', url: getAbsoluteUrl('/essential-notary-books') },
  ]);

  return (
    <div className="min-h-screen bg-white">
      <ArticleHeader title="9 Essential Books That Will Help You Make Money As A Notary" eyebrow="Updated July 2026" />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <JsonLd data={[collectionSchema, itemListSchema, breadcrumbSchema]} />
        <div className="mb-8">
          <p className="text-xl text-gray-700">
            A strong notary business is built on more than just a commission and a stamp. These nine books cover
            the skills that actually move the business forward: loan signings, marketing, specialty work, document
            familiarity, and better decision-making in the field.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="my-8">
            <img
              src="/images/essential-notary-books-featured.png"
              alt="9 essential books for mobile notaries and loan signing agents"
              className="w-full max-w-2xl mx-auto"
            />
          </div>

          {books.map((book, index) => (
            <div key={book.title} className={index === books.length - 1 ? 'mb-12' : 'mb-12 border-b pb-8'}>
              <h2 className="text-2xl font-bold text-notary-navy mb-4">{book.title}</h2>
              {book.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-gray-700 mb-4">
                  {paragraph}
                </p>
              ))}
              <a
                href={book.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-notary-navy text-white px-6 py-3 font-semibold hover:bg-opacity-90 transition"
              >
                View on Amazon
              </a>
            </div>
          ))}
        </div>

        <ArticleSignupCta source="essential-books-article" />

        <div className="mt-16 pt-8 border-t-2 border-gray-200">
          <h2 className="text-2xl font-bold text-notary-navy mb-6">More from The Bearded Notary</h2>
          <div className="space-y-3">
            <Link href="/mobile-notary-supplies" className="block text-notary-gold hover:underline font-semibold">
              Mobile Notary Supplies Checklist
            </Link>
            <Link href="/how-to-become-a-notary-in-california" className="block text-notary-gold hover:underline font-semibold">
              How to Become a Notary in California
            </Link>
            <Link href="/notary-business-resources" className="block text-notary-gold hover:underline font-semibold">
              85+ Notary Business Resources
            </Link>
          </div>
        </div>

        <div className="mt-12 p-4 bg-gray-100 text-sm text-gray-600">
          <p>
            The Bearded Notary is a participant in the Amazon Services LLC Associates Program, an affiliate advertising
            program. Making a purchase through one of these links may earn us a small commission at no cost to you.
          </p>
        </div>
      </article>

      <footer className="bg-notary-navy text-white py-8 mt-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} The Bearded Notary. Amazon Associates Participant.
          </p>
        </div>
      </footer>
    </div>
  );
}
