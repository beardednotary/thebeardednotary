import type { Metadata } from 'next';
import Link from 'next/link';
import AffiliateDisclosure from '../../components/AffiliateDisclosure';
import ArticleHeader from '../../components/ArticleHeader';
import ArticleSignupCta from '../../components/ArticleSignupCta';
import AuthorByline from '../../components/AuthorByline';
import JsonLd from '../../components/JsonLd';
import PrimeDealBadge from '../../components/PrimeDealBadge';
import { buildArticleSchema, buildBreadcrumbSchema, getAbsoluteUrl } from '../../lib/schema';
import { PRIME_EVENT_DATES_LABEL, PRIME_EVENT_NAME, PRIME_SIGNUP_URL } from '../../lib/primeDay';

export const metadata: Metadata = {
  title: 'Prime Day for Notaries: What to Buy and What to Skip | The Bearded Notary',
  description:
    'Which notary and loan signing gear is worth buying during Amazon Prime Day: dual-tray printers, scanners, toner and paper to stock up on, and what you should never buy on Amazon.',
  alternates: {
    canonical: '/prime-day-notary-deals',
  },
  openGraph: {
    title: 'Prime Day for Notaries: What to Buy and What to Skip',
    description:
      'Which notary and loan signing gear is worth buying during Amazon Prime Day, and what to skip.',
    images: ['/images/best-printers-notaries-featured.png'],
  },
};

type DealPick = {
  name: string;
  role: string;
  why: string;
  href: string;
  guideHref?: string;
  // Set to true (and optionally add saleNote) during the event once you've confirmed the deal on Amazon.
  // The badge only renders while the event is live.
  onSale?: boolean;
  saleNote?: string;
};

const bigTicketPicks: DealPick[] = [
  {
    name: 'Brother HL-L5210DWT',
    role: 'Best overall loan signing printer',
    why: 'The dual-tray workhorse most signing agents should own. It is the most expensive thing you will buy for this business, so this is where a sale matters most.',
    href: 'https://amzn.to/48SFGdB',
    guideHref: '/best-printers-for-notaries',
  },
  {
    name: 'Brother HL-L2480DW',
    role: 'Budget single-tray printer',
    why: 'Right for general notarizations and part-time work. Do not let a discount talk you into this if you are doing regular loan packages. Get the dual-tray instead.',
    href: 'https://www.amazon.com/dp/B0CPL8JTLW?ref=t_ac_spc_accepted_tile&linkCode=tr1&tag=beardednotary-20&linkId=B0CPL8JTLW_1783024885486',
    guideHref: '/best-printers-for-notaries',
  },
  {
    name: 'Brother HL-L6210DWT',
    role: 'High-volume dual-tray printer',
    why: 'Bigger trays and lower cost per page than the L5210DWT. If you print 5,000+ pages a month, a sale can close most of the price gap.',
    href: 'https://www.amazon.com/dp/B0CGCBZD8B?ref=t_ac_spc_accepted_tile&linkCode=tr1&tag=beardednotary-20&linkId=B0CGCBZD8B_1783024885492',
    guideHref: '/best-printers-for-notaries',
  },
  {
    name: 'Epson WorkForce ES-300W',
    role: 'Best overall portable scanner',
    why: 'The scanner I would carry for scan-backs. Duplex, battery-friendly, and serious enough for regular title-company work.',
    href: 'https://amzn.to/3TzOoYS',
    guideHref: '/best-scanners-for-notaries',
  },
  {
    name: 'Brother DS-640',
    role: 'Budget portable scanner',
    why: 'Slim and simple. A good first scanner if your scan-back volume is still light.',
    href: 'https://www.amazon.com/dp/B083R36CY4?ref=t_ac_spc_accepted_tile&linkCode=tr1&tag=beardednotary-20&linkId=B083R36CY4_1784098041631',
    guideHref: '/best-scanners-for-notaries',
  },
  {
    name: 'Fujitsu ScanSnap iX1600',
    role: 'Home-office scanner upgrade',
    why: 'Only worth it if you scan a lot from a desk. Electronics like this are the kind of item that tends to see real event discounts.',
    href: 'https://www.amazon.com/dp/B0F9B1H5VN?ref=t_ac_spc_accepted_tile&linkCode=tr1&tag=beardednotary-20&linkId=B0F9B1H5VN_1784098222762',
    guideHref: '/best-scanners-for-notaries',
  },
  {
    name: 'HP OfficeJet 250',
    role: 'Portable backup printer',
    why: 'Not your main printer. It is the backup that saves a signing when a corrected page shows up at the table.',
    href: 'https://www.amazon.com/dp/B01HGD8R5S?ref=t_ac_spc_accepted_tile&linkCode=tr1&tag=beardednotary-20&linkId=B01HGD8R5S_1784100100383',
    guideHref: '/best-portable-printers-for-notaries',
  },
];

const stockUpPicks: DealPick[] = [
  {
    name: 'Brother TN920 series toner (OEM)',
    role: 'For the HL-L5210DWT and HL-L6210DWT',
    why: 'Toner is your biggest ongoing printer cost. Buy genuine Brother cartridges, not third-party, and get a spare so you never run out mid-package.',
    href: 'https://www.amazon.com/s?k=brother+tn920+toner&tag=beardednotary-20',
  },
  {
    name: 'Legal-size copy paper (8.5 x 14)',
    role: 'Tray two',
    why: 'Loan packages are full of legal pages. A case on Subscribe & Save means you never have to make an emergency office-supply run.',
    href: 'https://www.amazon.com/s?k=legal+size+copy+paper+8.5+x+14+case&tag=beardednotary-20',
  },
  {
    name: 'Letter-size copy paper',
    role: 'Tray one',
    why: 'You will go through more of this than you expect. Set it on a recurring schedule and forget about it.',
    href: 'https://www.amazon.com/s?k=letter+copy+paper+case&tag=beardednotary-20',
  },
  {
    name: 'Blue and black pen set',
    role: 'Bag essential',
    why: 'Cheap, but signers walk off with them. Restock now.',
    href: 'https://amzn.to/4fG6wcg',
  },
];

const smallKitPicks: DealPick[] = [
  {
    name: 'Notary journal',
    role: 'Recordkeeping',
    why: 'Inexpensive either way. Fine to add to the cart, not worth waiting for.',
    href: 'https://amzn.to/4yiwud8',
    guideHref: '/mobile-notary-supplies',
  },
  {
    name: 'Inkless thumbprint pad',
    role: 'Signing table',
    why: 'Small purchase, rarely meaningfully discounted. Buy it when you need it.',
    href: 'https://www.amazon.com/dp/B00I2XJZG2?ref=t_ac_spc_accepted_tile&linkCode=tr1&tag=beardednotary-20&linkId=B00I2XJZG2_1784263667931',
    guideHref: '/mobile-notary-supplies',
  },
  {
    name: 'Locking document bag',
    role: 'Journal security',
    why: 'Bags and cases do go on sale. Worth a look if yours is wearing out.',
    href: 'https://www.amazon.com/dp/B0DTJWWDQZ?ref=t_ac_spc_accepted_tile&linkCode=tr1&tag=beardednotary-20&linkId=B0DTJWWDQZ_1784267993790',
    guideHref: '/mobile-notary-supplies',
  },
  {
    name: 'Heavy-duty stapler',
    role: 'Thick packages',
    why: 'A better stapler is a small upgrade you will feel at every signing.',
    href: 'https://amzn.to/4birH1J',
    guideHref: '/mobile-notary-supplies',
  },
];

function DealCard({ pick, cta }: { pick: DealPick; cta: string }) {
  return (
    <div className="flex flex-col border border-gray-200 bg-white p-6">
      <div className="mb-2 flex flex-wrap items-center gap-2">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-notary-gold">{pick.role}</p>
        {pick.onSale ? <PrimeDealBadge note={pick.saleNote} /> : null}
      </div>
      <h3 className="mb-2 text-xl font-bold text-notary-navy">{pick.name}</h3>
      <p className="mb-4 flex-1 text-gray-700">{pick.why}</p>
      <div className="flex flex-wrap items-center gap-4">
        <a
          href={pick.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-notary-navy px-5 py-3 font-semibold text-white transition hover:bg-opacity-90"
        >
          {cta}
        </a>
        {pick.guideHref ? (
          <Link href={pick.guideHref} className="text-sm font-semibold text-notary-navy underline hover:text-notary-gold">
            Read the full review
          </Link>
        ) : null}
      </div>
    </div>
  );
}

export default function PrimeDayNotaryDeals() {
  const articleSchema = buildArticleSchema({
    title: 'Prime Day for Notaries: What to Buy and What to Skip',
    description:
      'Which notary and loan signing gear is worth buying during Amazon Prime Day, what to stock up on, and what you should never buy on Amazon.',
    path: '/prime-day-notary-deals',
    image: '/images/best-printers-notaries-featured.png',
    dateModified: '2026-09-30',
  });
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: getAbsoluteUrl('/') },
    { name: 'Prime Day for Notaries', url: getAbsoluteUrl('/prime-day-notary-deals') },
  ]);

  return (
    <div className="min-h-screen bg-white">
      <ArticleHeader
        title="Prime Day for Notaries: What's Worth Buying (and What to Skip)"
        eyebrow={`${PRIME_EVENT_NAME}, ${PRIME_EVENT_DATES_LABEL}`}
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <JsonLd data={[articleSchema, breadcrumbSchema]} />

        <p className="text-xl text-gray-700 mb-8 font-semibold">
          Prime Day is not a reason to buy notary gear you don&apos;t need. It <em>is</em> the best time to buy the gear you
          were going to buy anyway, especially the expensive stuff. This is the short list I&apos;d work from, using the same
          picks I recommend year-round.
        </p>

        <AuthorByline className="mb-8" />
        <AffiliateDisclosure className="mb-8" />

        <div className="border-2 border-notary-gold bg-white p-8 mb-12">
          <h2 className="text-2xl font-bold text-notary-navy mb-4">Three rules before you shop</h2>
          <ol className="list-decimal pl-6 space-y-3 text-gray-700">
            <li>
              <strong>Spend the discount where the dollars are.</strong> 20% off a dual-tray laser printer is real money. 20%
              off a thumbprint pad is a rounding error. Start with the big-ticket items.
            </li>
            <li>
              <strong>Check the price history.</strong> Some &quot;deals&quot; are just the normal price with a strikethrough.
              A free tracker like camelcamelcamel or Keepa shows you whether today&apos;s price is actually low.
            </li>
            <li>
              <strong>Don&apos;t downgrade to chase a deal.</strong> If you do loan signings, a discounted single-tray printer is
              still the wrong printer. Buy the right tool, at a better price.
            </li>
          </ol>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-notary-navy mb-3">Worth timing for: printers and scanners</h2>
          <p className="text-gray-700 mb-6">
            These are the purchases where waiting for the sale pays off. Every one of them is a pick from my full buying
            guides. Nothing here was added because it happens to be on sale.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {bigTicketPicks.map((pick) => (
              <DealCard key={pick.name} pick={pick} cta="Check today's price" />
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-notary-navy mb-3">Stock up: toner, paper, and pens</h2>
          <p className="text-gray-700 mb-6">
            Consumables are the boring part of a signing business, and running out is how you lose a same-day job. Where
            Amazon offers <strong>Subscribe &amp; Save</strong> on these, it is worth setting up. You get a recurring
            discount and the supplies just show up. You can skip or cancel deliveries any time.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {stockUpPicks.map((pick) => (
              <DealCard key={pick.name} pick={pick} cta="See options on Amazon" />
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-notary-navy mb-3">Fine to add to the cart, not worth waiting for</h2>
          <p className="text-gray-700 mb-6">
            If you&apos;re already checking out, these are the small kit items I&apos;d round out a setup with.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {smallKitPicks.map((pick) => (
              <DealCard key={pick.name} pick={pick} cta="View on Amazon" />
            ))}
          </div>
        </section>

        <section className="mb-12 bg-gray-50 p-8">
          <h2 className="text-3xl font-bold text-notary-navy mb-4">Skip these on Amazon</h2>
          <ul className="space-y-4 text-gray-700">
            <li>
              <strong>Your notary stamp or seal.</strong> Many states require stamps to come from an authorized manufacturer
              and to match your commission exactly. A cheap marketplace stamp can get your documents rejected. Order from a
              specialist like{' '}
              <a href="https://notary.net/?ref=32597" target="_blank" rel="noopener noreferrer" className="font-semibold text-notary-navy underline">
                Notary.net
              </a>{' '}
              instead.
            </li>
            <li>
              <strong>Third-party &quot;compatible&quot; toner.</strong> It looks like a deal until it streaks a closing
              package. Stick with OEM.
            </li>
            <li>
              <strong>Color laser printers.</strong> Even on sale, you&apos;re paying for something loan documents never need.
            </li>
            <li>
              <strong>E&amp;O insurance and bonds.</strong> Not an Amazon purchase, but people ask.{' '}
              <Link href="/notary-eo-insurance" className="font-semibold text-notary-navy underline">
                Here&apos;s how to shop for E&amp;O
              </Link>
              .
            </li>
          </ul>
        </section>

        <section className="mb-12 border-2 border-notary-navy p-8">
          <h2 className="text-2xl font-bold text-notary-navy mb-3">Not a Prime member?</h2>
          <p className="text-gray-700 mb-4">
            Prime Day deals are generally only for Prime members. If you aren&apos;t one, Amazon usually offers new members a
            free trial. Check the current terms on the signup page. Free fast shipping also helps when you need a replacement
            toner cartridge before your next signing.
          </p>
          <a
            href={PRIME_SIGNUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-notary-gold px-6 py-3 font-bold transition-opacity hover:opacity-90"
            style={{ color: '#1a2332' }}
          >
            Check Prime trial eligibility
          </a>
        </section>

        <ArticleSignupCta source="prime-day-article" />

        <div className="border-t-2 border-gray-200 pt-8 mt-12">
          <h3 className="text-2xl font-bold text-notary-navy mb-6">The full buying guides</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/best-printers-for-notaries" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
              <h4 className="font-bold text-notary-navy mb-2">Best Printers for Notaries</h4>
              <p className="text-gray-600 text-sm">Dual-tray picks, cost per page, and what to avoid</p>
            </Link>
            <Link href="/best-scanners-for-notaries" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
              <h4 className="font-bold text-notary-navy mb-2">Best Scanners for Notaries</h4>
              <p className="text-gray-600 text-sm">Portable scanners for scan-backs</p>
            </Link>
            <Link href="/mobile-notary-supplies" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
              <h4 className="font-bold text-notary-navy mb-2">Mobile Notary Supplies Checklist</h4>
              <p className="text-gray-600 text-sm">Everything else that goes in the bag</p>
            </Link>
            <Link href="/notary-tax-deductions" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
              <h4 className="font-bold text-notary-navy mb-2">Notary Tax Deductions</h4>
              <p className="text-gray-600 text-sm">Your printer, toner, and supplies are likely deductible</p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
