import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleHeader from '../../components/ArticleHeader';
import JsonLd from '../../components/JsonLd';
import { buildBreadcrumbSchema, buildCollectionPageSchema, getAbsoluteUrl } from '../../lib/schema';
import { getStateFee } from '../../lib/stateFees';
import { stateMarketData } from '../../lib/stateMarketData';

export const metadata: Metadata = {
  title: 'Mobile Notary Fees by State (2026) | The Bearded Notary',
  description: 'State-by-state mobile notary and loan signing pricing guides: fee caps, typical local rates, and loan signing pay for 2026.',
  alternates: {
    canonical: '/mobile-notary-fees',
  },
  openGraph: {
    title: 'Mobile Notary Fees by State (2026)',
    description: 'State-by-state mobile notary and loan signing pricing guides for 2026.',
    images: ['/images/notary-pricing-guide-featured.png'],
  },
};

export default function MobileNotaryFeesHub() {
  const states = stateMarketData
    .map((market) => {
      const fee = getStateFee(market.slug);
      return fee ? { ...fee, market } : null;
    })
    .filter((state): state is NonNullable<typeof state> => state !== null)
    .sort((a, b) => a.name.localeCompare(b.name));

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: getAbsoluteUrl('/') },
    { name: 'Mobile Notary Fees by State', url: getAbsoluteUrl('/mobile-notary-fees') },
  ]);
  const collectionSchema = buildCollectionPageSchema({
    title: 'Mobile Notary Fees by State',
    description: 'State-by-state mobile notary and loan signing pricing guides for 2026.',
    path: '/mobile-notary-fees',
    items: states.map((state) => ({
      name: `Mobile Notary Fees in ${state.name}`,
      url: getAbsoluteUrl(`/mobile-notary-fees/${state.slug}`),
    })),
  });

  return (
    <div className="min-h-screen bg-white">
      <ArticleHeader title="Mobile Notary Fees by State" eyebrow="2026 Pricing Guides" />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <JsonLd data={[breadcrumbSchema, collectionSchema]} />

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-8 font-semibold">
            State notary fee caps only tell part of the story. Each guide below breaks down the legal fee cap,
            typical local mobile notary pricing, and typical loan signing rates for that state.
          </p>

          <p className="text-gray-700 mb-10">
            Looking for the full national breakdown, travel fee structure, and a pricing calculator instead? See the{' '}
            <Link href="/how-much-to-charge-mobile-notary" className="text-notary-gold hover:underline font-semibold">
              complete notary pricing guide
            </Link>
            .
          </p>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 mb-12">
            {states.map((state) => (
              <Link
                key={state.slug}
                href={`/mobile-notary-fees/${state.slug}`}
                className="block border-2 border-gray-200 bg-gray-50 p-5 transition hover:border-notary-gold"
              >
                <h2 className="text-lg font-bold text-notary-navy mb-1">{state.name}</h2>
                <p className="text-sm text-gray-600">{state.acknowledgmentFee}/signature · {state.market.typicalMobileRate} typical</p>
              </Link>
            ))}
          </div>

          <div className="bg-gray-50 border-2 border-notary-gold/40 p-6 rounded">
            <p className="text-gray-700">
              Don't see your state yet — more state guides are on the way. In the meantime, the{' '}
              <Link href="/how-much-to-charge-mobile-notary" className="text-notary-gold hover:underline font-semibold">
                complete pricing guide
              </Link>{' '}
              covers the fee cap for all 50 states.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
