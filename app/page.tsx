import Link from 'next/link';
import EmailCapture from '../components/EmailCapture';
import JsonLd from '../components/JsonLd';
import PrimaryNav from '../components/PrimaryNav';
import { buildCollectionPageSchema, getAbsoluteUrl } from '../lib/schema';

export default function Home() {
  const articles = [
    {
      title: "How Much Should You Charge as a Mobile Notary in 2026?",
      slug: "how-much-to-charge-mobile-notary",
      excerpt: "Complete pricing guide: state maximum fees, travel charges, loan signing rates, and package pricing strategies. Don't undercharge your services!",
      date: "Updated July 2026"
    },
    {
      title: "Your First 30 Days as a Mobile Notary: Complete Action Plan",
      slug: "first-30-days-new-notary",
      excerpt: "Day-by-day checklist for new notaries. Get your first clients, build systems, and start earning $500-1,500 in your first month.",
      date: "Updated July 2026"
    },
    {
      title: "10 Free Sites to Market Your Notary Business (2026)",
      slug: "free-marketing-sites-notaries",
      excerpt: "Boost your mobile notary visibility with these 10 free business listing sites. Learn NAP consistency and get more clients in 2026.",
      date: "Updated July 2026"
    },
    {
      title: "Target Industries for Notaries: Where to Find Your Best Clients",
      slug: "target-industries-for-notaries",
      excerpt: "Discover the 15 most profitable industries for mobile notaries. Learn where to market your services for steady income and consistent signings.",
      date: "Updated July 2026"
    },
    {
      title: "Common Documents Notaries Encounter: Complete Glossary",
      slug: "document-types-notaries-glossary",
      excerpt: "From affidavits to quit claim deeds - comprehensive guide to documents mobile notaries and loan signing agents will encounter.",
      date: "Updated July 2026"
    },
    {
      title: "Best Printers for Notaries & Loan Signing Agents (2026)",
      slug: "best-printers-for-notaries",
      excerpt: "Comprehensive guide to the best dual-tray laser printers for mobile notaries. Compare Brother HL-L5200DWT, HL-L6210DWT, HP M402n and more with real notary reviews.",
      date: "Updated July 2026"
    },
    {
      title: "Best Scanners for Notaries & Loan Signing Agents (2026)",
      slug: "best-scanners-for-notaries",
      excerpt: "Portable scanner picks, scan-back workflow advice, and the best options for working notaries who need reliable document handling.",
      date: "July 2026"
    },
    {
      title: "Best Portable Printers for Notaries (2026)",
      slug: "best-portable-printers-for-notaries",
      excerpt: "Backup and travel-friendly portable printer picks for last-minute corrections, emergency pages, and true mobile notary workflows.",
      date: "July 2026"
    },
    {
      title: "Why 2026 is the Perfect Time to Become a Loan Signing Agent",
      slug: "why-now-is-perfect-time-loan-signing-agent",
      excerpt: "Despite market changes, 2026 presents unique opportunities for new loan signing agents. Learn why now is the ideal time to start this flexible, profitable career.",
      date: "Updated July 2026"
    },
    {
      title: "85+ Notary Business Resources",
      slug: "notary-business-resources",
      excerpt: "Essential resources for taking your notary business to the next level, from professional associations to marketing sites.",
      date: "Updated July 2026"
    },
    {
      title: "9 Essential Books That Will Help You Make Money As A Notary",
      slug: "essential-notary-books",
      excerpt: "A comprehensive library is essential for both seasoned and new notaries. These seven books will elevate your expertise and income.",
      date: "Updated July 2026"
    },
    {
      title: "Mobile Notary Supplies Checklist",
      slug: "mobile-notary-supplies",
      excerpt: "The 12 essential supplies every mobile notary needs to succeed, from sequential journals to dual tray laser printers.",
      date: "Updated July 2026"
    },
    {
      title: "How to Become a Notary in California in Seven Easy Steps",
      slug: "how-to-become-a-notary-in-california",
      excerpt: "Complete guide to becoming a commissioned notary public in California, from education to filing your oath and bond.",
      date: "Updated July 2026"
    },
    {
      title: "How Much Does It Cost to Become a Notary in California in 2026?",
      slug: "cost-to-become-a-notary-in-california",
      excerpt: "Required fees, startup costs, optional extras, and realistic budget ranges for becoming a California notary.",
      date: "Updated July 2026"
    },
    {
      title: "How to Pass the California Notary Exam",
      slug: "how-to-pass-california-notary-exam",
      excerpt: "What to study, what to bring, common mistakes, and a practical plan for passing the California notary exam with less stress.",
      date: "Updated July 2026"
    },
    {
      title: "Notary Public vs. Loan Signing Agent: What Is the Difference?",
      slug: "notary-public-vs-loan-signing-agent",
      excerpt: "A practical comparison of duties, startup costs, equipment, and income potential so new notaries can choose the right path.",
      date: "Updated July 2026"
    }
  ];

  const featuredPaths = [
    {
      title: "Best Printers for Notaries",
      slug: "best-printers-for-notaries",
      description: "High-intent gear buyers looking for dual-tray laser printers and portable options.",
      label: "Equipment"
    },
    {
      title: "How Much Should You Charge as a Mobile Notary?",
      slug: "how-much-to-charge-mobile-notary",
      description: "Commercial pricing traffic that can feed gear, tools, and training offers.",
      label: "Pricing"
    },
    {
      title: "Mobile Notary Supplies Checklist",
      slug: "mobile-notary-supplies",
      description: "A buyer-friendly checklist that supports affiliate clicks across the full setup.",
      label: "Operations"
    }
  ];

  const growthTracks = [
    {
      title: "Equipment Guides",
      text: "Build trust with working notaries who need printers, scanners, toner, paper, bags, and backup gear.",
      links: [
        { href: "/best-printers-for-notaries", label: "Best Printers for Notaries" },
        { href: "/best-scanners-for-notaries", label: "Best Scanners for Notaries" },
        { href: "/best-portable-printers-for-notaries", label: "Best Portable Printers for Notaries" }
      ]
    },
    {
      title: "Pricing and Profit",
      text: "Capture commercial search intent around fees, travel charges, and profitable signing work.",
      links: [
        { href: "/how-much-to-charge-mobile-notary", label: "Notary Pricing Guide" },
        { href: "/smart-money-management-for-notaries", label: "Smart Money Management for Notaries" }
      ]
    },
    {
      title: "Client Acquisition",
      text: "Turn motivated new notaries into repeat readers with marketing and niche guidance.",
      links: [
        { href: "/free-marketing-sites-notaries", label: "Free Marketing Sites for Notaries" },
        { href: "/target-industries-for-notaries", label: "Target Industries for Notaries" }
      ]
    }
  ];

  const homepageSchema = buildCollectionPageSchema({
    title: 'The Bearded Notary | Resources for Mobile Notaries & Loan Signing Agents',
    description:
      'A collection of guides, tools, and business resources for mobile notaries and loan signing agents.',
    path: '/',
    items: articles.map((article) => ({
      name: article.title,
      url: getAbsoluteUrl(`/${article.slug}`),
    })),
  });

  return (
    <div className="min-h-screen">
      <JsonLd data={homepageSchema} />
      <header className="bg-notary-navy text-white py-6 border-b-4 border-notary-gold">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold">The Bearded Notary</h1>
              <p className="text-gray-300 mt-1">Building Profitable Notary Businesses Since 2019</p>
            </div>
            <PrimaryNav light />
          </div>
        </div>
      </header>

      <section className="bg-white border-b-2 border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-4xl md:text-5xl font-bold text-notary-navy mb-6">
            Your Trusted Resource for Mobile Notaries &amp; Loan Signing Agents
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl">
            Whether you&apos;re a newly-sworn notary public or a seasoned pro, these resources will help you build a profitable,
            professional mobile notary business. From essential supplies to proven marketing strategies, we&apos;ve got you covered.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#featured-paths"
              className="bg-notary-navy text-white px-8 py-3 font-semibold hover:bg-opacity-90 transition"
            >
              Start with the Best Pages
            </a>
            <a
              href="https://www.instagram.com/thebeardednotary"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-notary-navy text-notary-navy px-8 py-3 font-semibold hover:bg-notary-navy hover:text-white transition"
            >
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>

      <section id="featured-paths" className="bg-white py-16 border-b-2 border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-notary-gold mb-3">
              Best Starting Points
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-notary-navy mb-4">
              The strongest paths for working notaries
            </h2>
            <p className="text-lg text-gray-700">
              These pages line up best with buyer intent: gear research, pricing decisions, and the tools needed to run a profitable mobile notary business.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredPaths.map((path) => (
              <Link
                key={path.slug}
                href={`/${path.slug}`}
                className="border-2 border-notary-gold/40 bg-gray-50 p-6 hover:bg-white hover:border-notary-gold transition"
              >
                <div className="text-sm font-semibold uppercase tracking-wide text-notary-gold mb-3">
                  {path.label}
                </div>
                <h3 className="text-2xl font-bold text-notary-navy mb-3">{path.title}</h3>
                <p className="text-gray-700 mb-4">{path.description}</p>
                <span className="text-notary-navy font-semibold">Open guide -&gt;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 border-b-2 border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-notary-navy mb-8">Grow by Topic</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {growthTracks.map((track) => (
              <div key={track.title} className="bg-white border border-gray-200 p-6">
                <h3 className="text-2xl font-bold text-notary-navy mb-3">{track.title}</h3>
                <p className="text-gray-700 mb-5">{track.text}</p>
                <div className="space-y-3">
                  {track.links.map((link) => (
                    <Link key={link.href} href={link.href} className="block text-notary-gold font-semibold hover:underline">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="articles" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-notary-navy mb-8">Essential Guides</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/${article.slug}`}
                className="border-2 border-gray-200 p-6 hover:border-notary-gold transition group"
              >
                <div className="text-sm text-gray-500 mb-2">{article.date}</div>
                <h3 className="text-2xl font-bold text-notary-navy mb-3 group-hover:text-notary-gold transition">
                  {article.title}
                </h3>
                <p className="text-gray-700 mb-4">{article.excerpt}</p>
                <span className="text-notary-gold font-semibold">Read More -&gt;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <EmailCapture
            heading="Get New Notary Growth Tips and the Free First 30 Days Action Plan"
            description="Join the list for actionable guidance on pricing, equipment, marketing, and the systems that help mobile notaries earn more. You'll also get the free First 30 Days Mobile Notary Action Plan right away."
            buttonLabel="Get the free action plan"
            source="homepage-cta"
          />
          <div className="mt-8">
            <a
              href="https://www.instagram.com/thebeardednotary"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-notary-navy px-8 py-3 font-bold text-notary-navy transition hover:bg-notary-navy hover:text-white"
            >
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-notary-navy text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="border-b border-white/10 pb-8 mb-8">
            <EmailCapture
              heading="Stay in the loop"
              description="Get fresh notary business tips and the free First 30 Days Mobile Notary Action Plan."
              buttonLabel="Send my action plan"
              source="footer-signup"
              compact
              className="max-w-3xl"
            />
          </div>
          <div className="text-center">
          <p className="text-gray-400">
            (c) {new Date().getFullYear()} The Bearded Notary. Amazon Associates Participant.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Helping notaries build profitable businesses since 2019
          </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
