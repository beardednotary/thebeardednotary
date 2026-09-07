import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleHeader from '../../components/ArticleHeader';
import JsonLd from '../../components/JsonLd';
import { buildBreadcrumbSchema, getAbsoluteUrl } from '../../lib/schema';

export const metadata: Metadata = {
  title: 'About The Bearded Notary | Who Writes This Site',
  description: 'The Bearded Notary is written by Ray, a former commissioned California Notary Public (2018-2022) who handled both general notarizations and loan signings.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About The Bearded Notary',
    description: 'Written by Ray, a former commissioned California Notary Public who handled both general notarizations and loan signings.',
    images: ['/images/ray-bearded-notary-author-photo.jpg'],
  },
};

export default function AboutPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: getAbsoluteUrl('/') },
    { name: 'About', url: getAbsoluteUrl('/about') },
  ]);

  return (
    <div className="min-h-screen bg-white">
      <ArticleHeader title="About The Bearded Notary" eyebrow="Who writes this site" />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <JsonLd data={[breadcrumbSchema]} />

        <div className="prose prose-lg max-w-none">
          <div className="mb-10 flex flex-col gap-8 sm:flex-row sm:items-start">
            <img
              src="/images/ray-bearded-notary-author-photo.jpg"
              alt="Ray, founder of The Bearded Notary"
              className="w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover border-4 border-notary-gold flex-shrink-0"
            />
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-notary-gold mb-2">Written by Ray</p>
              <h2 className="text-3xl font-bold text-notary-navy mb-4">Founder, The Bearded Notary</h2>
              <p className="text-gray-700">
                I was a commissioned California Notary Public from 2018 to 2022, working both general notarizations
                and loan signings. I am not currently commissioned. This site is where I put together what I
                learned doing that work — pricing, equipment, workflow, and the mistakes that cost time or money the
                first time around — for people getting into or currently working as mobile notaries and loan signing
                agents.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-notary-navy mt-10 mb-4">Why This Site Exists</h2>
          <p className="text-gray-700 mb-6">
            Most of what's written about becoming a notary online is either an official state page that only
            covers the legal minimum, or a listicle that reads like nobody involved has actually done the job.
            The Bearded Notary is meant to sit in between: practical, specific guidance grounded in real experience
            with general notarizations and loan signings, covering the parts of the job — pricing, equipment,
            first-month setup, the tax and mileage side of running it as a business — that the official paperwork
            doesn't explain.
          </p>

          <h2 className="text-2xl font-bold text-notary-navy mt-10 mb-4">What I Actually Did</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
            <li>Commissioned California Notary Public, 2018-2022</li>
            <li>Handled general notarizations (acknowledgments, jurats, and related notarial acts)</li>
            <li>Handled loan signings, including mixed letter/legal mortgage closing packages</li>
            <li>Not currently commissioned — this site reflects experience from that period, updated over time as laws, fees, and equipment recommendations change</li>
          </ul>

          <h2 className="text-2xl font-bold text-notary-navy mt-10 mb-4">How This Site Makes Money</h2>
          <p className="text-gray-700 mb-6">
            The Bearded Notary is a participant in the Amazon Services LLC Associates Program and features affiliate
            links to other products and services (accounting software, mileage tracking apps, notary training, and
            similar tools) I think are genuinely useful for this work. If you buy or sign up through one of those
            links, I may earn a commission at no extra cost to you. Recommendations are based on what actually holds
            up for mobile notary and loan signing work, not on which link pays the most — see the specific
            comparisons and reasoning in each guide.
          </p>

          <h2 className="text-2xl font-bold text-notary-navy mt-10 mb-4">Keeping This Current</h2>
          <p className="text-gray-700 mb-6">
            State fee caps, equipment models, and tax figures change. Articles are reviewed and updated over time —
            each page notes when it was last updated. If you spot something that's out of date or incorrect,{' '}
            <Link href="mailto:hello@thebeardednotary.com" className="text-notary-gold hover:underline">
              let me know
            </Link>
            .
          </p>

          <div className="mt-12 border-t-2 border-gray-200 pt-8">
            <h3 className="text-2xl font-bold text-notary-navy mb-6">Start Here</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/first-30-days-new-notary" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
                <h4 className="font-bold text-notary-navy mb-2">Your First 30 Days as a Mobile Notary</h4>
                <p className="text-gray-600 text-sm">Day-by-day action plan for getting started</p>
              </Link>
              <Link href="/how-much-to-charge-mobile-notary" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
                <h4 className="font-bold text-notary-navy mb-2">Mobile Notary Pricing Guide</h4>
                <p className="text-gray-600 text-sm">What to charge for every type of service</p>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
