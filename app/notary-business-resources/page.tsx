import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '85+ Notary Business Resources | The Bearded Notary',
  description: 'Essential resources for mobile notaries and loan signing agents. Professional associations, marketing sites, training programs, and business tools.',
  alternates: {
    canonical: '/notary-business-resources', 
  },
  openGraph: {
    title: '85+ Notary Business Resources',
    description: 'Essential resources for mobile notaries and loan signing agents. Professional associations, marketing sites, training programs, and business tools.',
    images: ['/images/notary-business-resources-featured.png'],
  },
};

export default function NotaryBusinessResources() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-notary-navy text-white py-4 border-b-4 border-notary-gold">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/" className="text-notary-gold hover:underline">← Back to Home</Link>
        </div>
      </header>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <p className="text-sm text-gray-500 mb-2">April 16, 2020</p>
          <h1 className="text-4xl md:text-5xl font-bold text-notary-navy mb-4">
            85+ Notary Business Resources
          </h1>
          <p className="text-xl text-gray-700">
            Whether you're a newly-sworn in Notary Public or a long-time pro, these notary business 
            resources are available to take your business to the next level.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          
          {/* Featured Image */}
          <div className="my-8">
            <img 
              src="/images/notary-business-resources-featured.png"
              alt="85+ Notary Business Resources Every Notary Public Should Know - Professional associations, training, and marketing tools"
              className="w-full max-w-2xl mx-auto"
            />
          </div>

          <p className="text-gray-700 mb-8">
            Just beginning your Notary Public business? Check out our list of the{' '}
            <Link href="/mobile-notary-supplies" className="text-notary-gold hover:underline">
              10 essential supplies every Notary Public needs
            </Link>.
          </p>

          <h2 className="text-2xl font-bold text-notary-navy mt-12 mb-4">Professional Associations</h2>
          
          <div className="space-y-3 mb-8">
            <div>
              <a href="https://www.nationalnotary.org/" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline font-semibold">
                National Notary Association
              </a>
            </div>
            <div>
              <a href="https://www.americannotaryusa.com/" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline font-semibold">
                American Association of Notaries
              </a>
            </div>
            <div>
              <a href="https://www.notaryassociation.org/" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline font-semibold">
                Notary Association of America
              </a>
            </div>
            <div>
              <a href="https://www.asnnotary.org/" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline font-semibold">
                American Society of Notaries
              </a>
            </div>
            <div>
              <a href="https://www.calnotary.org/" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline font-semibold">
                California Association of Notaries
              </a>
              <p className="text-gray-600 text-sm mt-1">
                Largest directory for California notaries. Promote your business to various companies looking to hire notaries in California.
              </p>
            </div>
            <div>
              <a href="https://www.delawarenotaryassociation.org/" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline font-semibold">
                Delaware Notary Association
              </a>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-notary-navy mt-12 mb-4">State Notary Sites</h2>
          
          <p className="text-gray-700 mb-4">
            Official state notary resources for all 50 states and US territories:
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            <a href="https://www.sos.alabama.gov/administrative-services/notary" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline">Alabama</a>
            <a href="https://www.dnr.alaska.gov/mlw/notary/" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline">Alaska</a>
            <a href="https://www.azsos.gov/notary" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline">Arizona</a>
            <a href="https://www.sos.arkansas.gov/business-commercial-services-bcs/notary-division" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline">Arkansas</a>
            <a href="https://www.sos.ca.gov/notary/" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline">California</a>
            <a href="https://www.sos.state.co.us/pubs/notary/home.html" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline">Colorado</a>
            <a href="https://portal.ct.gov/SOTS/Business-Services/Notary-Public" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline">Connecticut</a>
            <a href="https://sos.delaware.gov/notary.shtml" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline">Delaware</a>
            <a href="https://os.dc.gov/service/become-notary-public" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline">District of Columbia</a>
            <a href="https://dos.myflorida.com/sunbiz/other-services/notaries/" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline">Florida</a>
            <a href="https://sos.ga.gov/notary-public" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline">Georgia</a>
            <a href="https://cca.hawaii.gov/breg/notary/" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline">Hawaii</a>
            <a href="https://sos.idaho.gov/notary/" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline">Idaho</a>
            <a href="https://www.ilsos.gov/departments/index/notary/home.html" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline">Illinois</a>
            <a href="https://www.in.gov/sos/business/notary/" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline">Indiana</a>
            <a href="https://sos.iowa.gov/notary/" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline">Iowa</a>
            <a href="https://sos.ks.gov/business-services/notary.html" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline">Kansas</a>
            <a href="https://www.sos.ky.gov/bus/notary/" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline">Kentucky</a>
            <a href="https://www.sos.la.gov/BusinessServices/NotaryServices/" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline">Louisiana</a>
            <a href="https://www.maine.gov/sos/cec/notary/" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline">Maine</a>
            <a href="https://sos.maryland.gov/Notary/" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline">Maryland</a>
            <a href="https://www.mass.gov/how-to/become-a-notary-public" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline">Massachusetts</a>
            <a href="https://www.michigan.gov/sos/notary" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline">Michigan</a>
            <a href="https://www.sos.state.mn.us/business-liens/notaries/" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline">Minnesota</a>
            <a href="https://www.sos.ms.gov/elections-voting/notary" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline">Mississippi</a>
            <a href="https://www.sos.mo.gov/business/commissions" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline">Missouri</a>
            <a href="https://sosmt.gov/notary/" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline">Montana</a>
            <a href="https://sos.nebraska.gov/business-services/notary-public" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline">Nebraska</a>
            <a href="https://www.nvsos.gov/sos/businesses/notary" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline">Nevada</a>
            <a href="https://sos.nh.gov/notary-public/" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline">New Hampshire</a>
            <a href="https://www.nj.gov/treasury/revenue/notary.shtml" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline">New Jersey</a>
            <a href="https://www.sos.state.nm.us/business-services/notary/" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline">New Mexico</a>
            <a href="https://www.dos.ny.gov/licensing-services/notary-public" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline">New York</a>
            <a href="https://www.sosnc.gov/online_services/notary" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline">North Carolina</a>
            <a href="https://sos.nd.gov/business/notary-public" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline">North Dakota</a>
            <a href="https://www.ohiosos.gov/businesses/notary/" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline">Ohio</a>
            <a href="https://www.sos.ok.gov/notary/" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline">Oklahoma</a>
            <a href="https://sos.oregon.gov/business/Pages/notary.aspx" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline">Oregon</a>
            <a href="https://www.dos.pa.gov/BusinessCharities/Notaries/" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline">Pennsylvania</a>
            <a href="https://www.estado.pr.gov/en/notary/" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline">Puerto Rico</a>
            <a href="https://sos.ri.gov/divisions/business-services/notary" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline">Rhode Island</a>
            <a href="https://www.scsos.com/notary" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline">South Carolina</a>
            <a href="https://sdsos.gov/business-services/notary/default.aspx" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline">South Dakota</a>
            <a href="https://sos.tn.gov/notary" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline">Tennessee</a>
            <a href="https://www.sos.texas.gov/statdoc/notary.shtml" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline">Texas</a>
            <a href="https://notary.utah.gov/" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline">Utah</a>
            <a href="https://sos.vermont.gov/corporations/notary/" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline">Vermont</a>
            <a href="https://www.commonwealth.virginia.gov/secretary-of-the-commonwealth/notaries/" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline">Virginia</a>
            <a href="https://www.sos.wa.gov/notary/" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline">Washington</a>
            <a href="https://sos.wv.gov/business/notary/" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline">West Virginia</a>
            <a href="https://sos.wi.gov/Pages/Notaries.aspx" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline">Wisconsin</a>
            <a href="https://sos.wyo.gov/Business/Notary.aspx" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline">Wyoming</a>
            <a href="https://dca.guam.gov/notary-public/" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline">Guam</a>
            <a href="https://cnmileg.gov.mp/notary.aspx" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline">Northern Mariana Islands</a>
            <a href="https://ltg.vi.gov/notary-public/" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline">US Virgin Islands</a>
          </div>

          <h2 className="text-2xl font-bold text-notary-navy mt-12 mb-4">Loan Signing Agent Training</h2>
          
          <div className="bg-gray-50 border-l-4 border-notary-gold p-6 mb-8">
            <h3 className="text-xl font-bold text-notary-navy mb-3">
              <a href="http://loansigningsystem.com/?afmc=x5" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline">
                Loan Signing System
              </a>
            </h3>
            <p className="text-gray-700 mb-3">
              Get America's #1 Rated Notary Loan Signing Agent Training Course
            </p>
          </div>

          <div className="space-y-3 mb-8">
            <div>
              <a href="https://www.nationalnotary.org/" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline font-semibold">
                National Notary Association
              </a>
            </div>
            <div>
              <a href="https://www.notary2pro.com/" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline font-semibold">
                Notary2Pro
              </a>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-notary-navy mt-12 mb-4">Notary Marketing Sites</h2>
          
          <div className="space-y-4 mb-8">
            <div>
              <a href="https://www.notaryrotary.com/" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline font-semibold">
                NotaryRotary.com
              </a>
              <p className="text-gray-600 text-sm mt-1">
                Provides a profile at an affordable price. Cost varies by membership level. Basic membership is free.
              </p>
            </div>
            <div>
              <a href="https://www.123notary.com/" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline font-semibold">
                123Notary.com
              </a>
              <p className="text-gray-600 text-sm mt-1">
                Develops relationships with title, escrow and signing companies and provides notary and loan signing business for their members. Includes a FREE business listing.
              </p>
            </div>
            <div>
              <a href="https://www.gogetnotary.com/" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline font-semibold">
                GoGetNotary.com
              </a>
              <p className="text-gray-600 text-sm mt-1">
                Provides a professional profile website with a FREE basic listing. Profile includes a photo, logo and links to your social media networks.
              </p>
            </div>
            <div>
              <a href="https://www.notary.net/" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline font-semibold">
                Notary.net
              </a>
              <p className="text-gray-600 text-sm mt-1">
                FREE membership includes a newsletter and access to the Notary.net forum. An inexpensive paid membership allows members to create a multi-page mini website.
              </p>
            </div>
            <div>
              <a href="https://www.signingagent.com/" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline font-semibold">
                SigningAgent.com
              </a>
            </div>
            <div>
              <a href="https://www.snapdocs.com/" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline font-semibold">
                SnapDocs.com
              </a>
            </div>
            <div>
              <a href="https://www.notaryresume.com/" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline font-semibold">
                NotaryResume.com
              </a>
            </div>
            <div>
              <a href="https://www.notarycafe.com/" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline font-semibold">
                NotaryCafe.com
              </a>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-notary-navy mt-12 mb-4">Free Marketing Sites</h2>
          
          <div className="space-y-4 mb-8">
            <div>
              <a href="https://www.google.com/business/" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline font-semibold">
                Google My Business
              </a>
              <p className="text-gray-600 text-sm mt-1">
                Free business listing and review page. 300 million+ monthly local searches
              </p>
            </div>
            <div>
              <a href="https://www.yelp.com/" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline font-semibold">
                Yelp
              </a>
              <p className="text-gray-600 text-sm mt-1">
                Free business listing and review page. Over 100 million local business reviews.
              </p>
            </div>
            <div>
              <a href="https://www.facebook.com/business" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline font-semibold">
                Facebook
              </a>
              <p className="text-gray-600 text-sm mt-1">
                Highly-targeted marketing ads
              </p>
            </div>
            <div>
              <a href="https://www.bing.com/business" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline font-semibold">
                Bing
              </a>
              <p className="text-gray-600 text-sm mt-1">
                2nd most popular search engine in the US
              </p>
            </div>
            <div>
              <a href="https://www.yellowpages.com/" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline font-semibold">
                Yellow Pages/YP.com
              </a>
              <p className="text-gray-600 text-sm mt-1">
                29 million+ monthly local searches
              </p>
            </div>
            <div>
              <a href="https://www.superpages.com/" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline font-semibold">
                Super Pages
              </a>
              <p className="text-gray-600 text-sm mt-1">
                19 million+ monthly local searches
              </p>
            </div>
            <div>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline font-semibold">
                LinkedIn
              </a>
              <p className="text-gray-600 text-sm mt-1">
                250 million+ monthly active users
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-notary-navy mt-12 mb-4">Business Resources</h2>

          <h3 className="text-xl font-semibold text-notary-navy mt-8 mb-3">Web Hosting</h3>
          <div className="bg-gray-50 border-l-4 border-notary-gold p-6 mb-8">
            <h4 className="font-bold text-notary-navy mb-2">
              <a href="https://www.bluehost.com/" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline">
                Bluehost
              </a>
            </h4>
            <p className="text-gray-700">
              Set up your WordPress site in only 15 minutes. Premium web hosting for only $3.95/month. Includes a free domain.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-notary-navy mt-8 mb-3">E&O Insurance</h3>
          <div className="bg-gray-50 border-l-4 border-notary-gold p-6 mb-8">
            <h4 className="font-bold text-notary-navy mb-2">
              <a href="https://www.hiscox.com/" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline">
                Hiscox Small Business Insurance
              </a>
            </h4>
            <p className="text-gray-700">
              Hiscox offers professional service businesses a new way to buy small business insurance online in minutes. 
              They specialize in protecting IT/technology, marketing, consulting, and many other professional service businesses—
              including notaries!—tailoring coverage to the specific risks in each industry.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-notary-navy mt-8 mb-3">Email Marketing</h3>
          <div className="bg-gray-50 border-l-4 border-notary-gold p-6 mb-8">
            <h4 className="font-bold text-notary-navy mb-2">
              <a href="https://www.getresponse.com/" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline">
                GetResponse
              </a>
            </h4>
            <p className="text-gray-700">
              Simple and straightforward newsletters, landing pages and email collection tool. Get your free 30-day trial. No CC required!
            </p>
          </div>

          <h3 className="text-xl font-semibold text-notary-navy mt-8 mb-3">Business Marketing</h3>
          <div className="bg-gray-50 border-l-4 border-notary-gold p-6 mb-8">
            <h4 className="font-bold text-notary-navy mb-2">
              <a href="https://www.vistaprint.com/" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline">
                VistaPrint
              </a>
            </h4>
            <p className="text-gray-700">
              Business cards, banners, postcards, window decals and more.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-notary-navy mt-8 mb-3">Business Finance</h3>
          <div className="space-y-6 mb-8">
            <div className="bg-gray-50 border-l-4 border-notary-gold p-6">
              <h4 className="font-bold text-notary-navy mb-2">
                <a href="https://squareup.com/" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline">
                  Square
                </a>
              </h4>
              <p className="text-gray-700">
                Take credit and debit card payments anywhere – straight from your smartphone or tablet. 
                Just pay a small processing fee. Join today and receive free processing on your first $1000 in sales.
              </p>
            </div>
            <div className="bg-gray-50 border-l-4 border-notary-gold p-6">
              <h4 className="font-bold text-notary-navy mb-2">
                <a href="https://quickbooks.intuit.com/" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline">
                  QuickBooks
                </a>
              </h4>
              <p className="text-gray-700">
                From invoicing to mileage tracking to expense tracking and integrations, QuickBooks Online and 
                QuickBooks Self-Employed have everything you need to manage your small business finances.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-notary-navy mt-8 mb-3">Social Media</h3>
          <div className="bg-gray-50 border-l-4 border-notary-gold p-6 mb-8">
            <h4 className="font-bold text-notary-navy mb-2">
              <a href="https://www.crowdfireapp.com/" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline">
                Crowdfire
              </a>
            </h4>
            <p className="text-gray-700">
              Crowdfire is a social media management platform used by brands, businesses, agencies, and individuals 
              all over the world to help drive social media engagement and growth. Features range from content publishing 
              to content curation to customer service to engagement.
            </p>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16 pt-8 border-t-2 border-gray-200">
          <h2 className="text-2xl font-bold text-notary-navy mb-6">More from The Bearded Notary</h2>
          <div className="space-y-3">
            <Link href="/mobile-notary-supplies" className="block text-notary-gold hover:underline font-semibold">
              10 Mobile Notary Supplies You Can't Live Without
            </Link>
            <Link href="/how-to-become-a-notary-in-california" className="block text-notary-gold hover:underline font-semibold">
              How to Become a Notary in California
            </Link>
            <Link href="/essential-notary-books" className="block text-notary-gold hover:underline font-semibold">
              7 Essential Notary Books That Will Benefit Every Notary Business
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 p-4 bg-gray-100 text-sm text-gray-600">
          <p>
            Some links on this page are affiliate links. Upgrades or purchases made through these links may 
            earn The Bearded Notary a small commission at no additional cost to you.
          </p>
        </div>
      </article>

      {/* Footer */}
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
