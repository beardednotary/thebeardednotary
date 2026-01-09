import Link from 'next/link';

export default function Home() {
  const articles = [
    {
      title: "How Much Should You Charge as a Mobile Notary in 2026?",
      slug: "how-much-to-charge-mobile-notary",
      excerpt: "Complete pricing guide: state maximum fees, travel charges, loan signing rates, and package pricing strategies. Don't undercharge your services!",
      date: "December 2025"
    },
    {
      title: "Your First 30 Days as a Mobile Notary: Complete Action Plan",
      slug: "first-30-days-new-notary",
      excerpt: "Day-by-day checklist for new notaries. Get your first clients, build systems, and start earning $500-1,500 in your first month.",
      date: "December 2025"
    },   
    {
      title: "10 Free Sites to Market Your Notary Business (2026)",
      slug: "free-marketing-sites-notaries",
      excerpt: "Boost your mobile notary visibility with these 10 free business listing sites. Learn NAP consistency and get more clients in 2026.",
      date: "December 2025"
    },
    {
      title: "Target Industries for Notaries: Where to Find Your Best Clients",
      slug: "target-industries-for-notaries",
      excerpt: "Discover the 15 most profitable industries for mobile notaries. Learn where to market your services for steady income and consistent signings.",
      date: "December 2025"
    },
    {
      title: "Common Documents Notaries Encounter: Complete Glossary",
      slug: "document-types-notaries-glossary",
      excerpt: "From affidavits to quit claim deeds - comprehensive guide to documents mobile notaries and loan signing agents will encounter.",
      date: "December 2025"
    },
    {
      title: "Best Printers for Notaries & Loan Signing Agents (2025)",
      slug: "best-printers-for-notaries",
      excerpt: "Comprehensive guide to the best dual-tray laser printers for mobile notaries. Compare Brother HL-L5200DWT, HL-L6210DWT, HP M402n and more with real notary reviews.",
      date: "December 2025"
    },
    {
      title: "Why 2026 is the Perfect Time to Become a Loan Signing Agent",
      slug: "why-now-is-perfect-time-loan-signing-agent",
      excerpt: "Despite market changes, 2026 presents unique opportunities for new loan signing agents. Learn why now is the ideal time to start this flexible, profitable career.",
      date: "December 2025"
    },
    {
      title: "85+ Notary Business Resources",
      slug: "notary-business-resources",
      excerpt: "Essential resources for taking your notary business to the next level, from professional associations to marketing sites.",
      date: "April 16, 2020"
    },
    {
      title: "7 Essential Books That Will Help You Make Money As A Notary",
      slug: "essential-notary-books",
      excerpt: "A comprehensive library is essential for both seasoned and new notaries. These seven books will elevate your expertise and income.",
      date: "Updated 2025"
    },
    {
      title: "Mobile Notary Supplies Checklist",
      slug: "mobile-notary-supplies",
      excerpt: "The 12 essential supplies every mobile notary needs to succeed, from sequential journals to dual tray laser printers.",
      date: "April 16, 2020"
    },
    {
      title: "How to Become a Notary in California in Seven Easy Steps",
      slug: "how-to-become-a-notary-in-california",
      excerpt: "Complete guide to becoming a commissioned notary public in California, from education to filing your oath and bond.",
      date: "May 18, 2020"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-notary-navy text-white py-6 border-b-4 border-notary-gold">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold">The Bearded Notary</h1>
          <p className="text-gray-300 mt-1">Building Profitable Notary Businesses Since 2019</p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white border-b-2 border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-4xl md:text-5xl font-bold text-notary-navy mb-6">
            Your Trusted Resource for Mobile Notaries &amp; Loan Signing Agents
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl">
            Whether you're a newly-sworn notary public or a seasoned pro, these resources will help you build a profitable, 
            professional mobile notary business. From essential supplies to proven marketing strategies, we've got you covered.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#articles" 
              className="bg-notary-navy text-white px-8 py-3 font-semibold hover:bg-opacity-90 transition"
            >
              Browse Resources
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

      {/* Quick Stats */}
      <section className="bg-notary-navy text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-notary-gold mb-2">6+</div>
              <div className="text-gray-300">Years Helping Notaries</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-notary-gold mb-2">1,000+</div>
              <div className="text-gray-300">Instagram Followers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-notary-gold mb-2">85+</div>
              <div className="text-gray-300">Curated Resources</div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles */}
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
                <span className="text-notary-gold font-semibold">Read More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-notary-navy mb-4">
            Ready to Build Your Notary Business?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Join 1,000+ notaries who follow The Bearded Notary for actionable advice, 
            essential resources, and industry insights.
          </p>
          <a 
            href="https://www.instagram.com/thebeardednotary" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-notary-gold text-notary-navy px-8 py-3 font-bold hover:bg-opacity-90 transition"
          >
            Follow on Instagram
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-notary-navy text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} The Bearded Notary. Amazon Associates Participant.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Helping notaries build profitable businesses since 2019
          </p>
        </div>
      </footer>
    </div>
  );
}
