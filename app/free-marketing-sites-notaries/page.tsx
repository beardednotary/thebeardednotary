import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleSignupCta from '../../components/ArticleSignupCta';
import ArticleHeader from '../../components/ArticleHeader';
import JsonLd from '../../components/JsonLd';
import { buildArticleSchema, buildBreadcrumbSchema, getAbsoluteUrl } from '../../lib/schema';

export const metadata: Metadata = {
  title: '10 Free Sites to Market Your Notary Business (2026 Guide) | The Bearded Notary',
  description: 'List your mobile notary business on 10 free sites, including Google Business Profile, Yelp, and Bing Places, and keep your business info consistent.',
  alternates: {
    canonical: '/free-marketing-sites-notaries',
  },
  openGraph: {
    title: '10 Free Sites to Market Your Notary Business (2026)',
    description: 'Free business listing sites every mobile notary should use, plus profile setup tips that help clients find you.',
    images: ['/images/free-marketing-sites-notaries.png'],
  },
};

export default function FreeMarketingSitesNotaries() {
  const articleSchema = buildArticleSchema({
    title: '10 Free Sites to Market Your Notary Business (2026)',
    description:
      'List your mobile notary business on 10 free sites, including Google Business Profile, Yelp, and Bing Places, and keep your business info consistent.',
    path: '/free-marketing-sites-notaries',
    image: '/images/free-marketing-sites-notaries.png',
    dateModified: '2026-07-15',
  });
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: getAbsoluteUrl('/') },
    { name: 'Free Marketing Sites for Notaries', url: getAbsoluteUrl('/free-marketing-sites-notaries') },
  ]);

  return (
    <div className="min-h-screen bg-white">
      <ArticleHeader title="10 Free Sites to Market Your Notary Business (2026)" />

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        <JsonLd data={[articleSchema, breadcrumbSchema]} />
        
        {/* Featured Image */}
        <div className="my-8">
          <img 
            src="/images/free-marketing-sites-notaries.png"
            alt="10 free sites to market your notary business"
            className="w-full rounded shadow-lg"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          
          <p className="text-xl text-gray-700 mb-8 font-semibold">
            You've invested in your notary commission, gotten your <Link href="/mobile-notary-supplies" className="text-notary-gold hover:underline">supplies</Link>, and maybe even <Link href="/why-now-is-perfect-time-loan-signing-agent" className="text-notary-gold hover:underline">completed loan signing training</Link>. Now it's time to get clients. These 10 free business listing sites will put you in front of people actively searching for notary services.
          </p>

          <p className="text-gray-700 mb-8">
            Once your listings are live, the next step is knowing{' '}
            <Link href="/target-industries-for-notaries" className="text-notary-gold hover:underline">
              which industries to target
            </Link>{' '}
            and making sure your{' '}
            <Link href="/how-much-to-charge-mobile-notary" className="text-notary-gold hover:underline">
              pricing
            </Link>{' '}
            reflects the value of mobile service.
          </p>

          {/* NAP Consistency Section */}
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
            <h3 className="text-xl font-bold text-notary-navy mb-3">Critical: NAP Consistency</h3>
            <p className="text-gray-800 mb-3">
              Before listing your business anywhere, decide on your <strong>NAP</strong> (Name, Address, Phone) and use it consistently across ALL platforms:
            </p>
            <ul className="space-y-2 text-gray-800">
              <li><strong>Name:</strong> "Ray's Mobile Notary" or "Ray Rodriguez, Mobile Notary" - pick one format</li>
              <li><strong>Address:</strong> If home-based, use your city/ZIP. If you have an office, use exact address</li>
              <li><strong>Phone:</strong> Use the SAME number everywhere (including area code format)</li>
            </ul>
            <p className="text-gray-800 mt-3">
              Google and search engines use NAP to verify your business legitimacy. Inconsistent information confuses them and hurts your local SEO rankings.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">The 10 Essential Free Listing Sites</h2>

          {/* Site 1: Google Business Profile */}
          <div className="bg-gray-50 p-6 mb-6 rounded">
            <h3 className="text-2xl font-bold text-notary-navy mb-3">
              1. Google Business Profile (google.com/business)
            </h3>
            <p className="text-gray-700 mb-3">
              <strong>Monthly Reach:</strong> 300+ million local searches
            </p>
            <p className="text-gray-700 mb-3">
              This is #1 for a reason. When someone Googles "notary near me," you want to show up in the map results. Free, essential, and drives more clients than any other platform.
            </p>
            <div className="bg-white p-4 mt-3">
              <p className="font-semibold text-notary-navy mb-2">Setup Tips:</p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Choose "Mobile business" if you travel to clients</li>
                <li>Set service area (your cities/ZIP codes)</li>
                <li>Add photos of your stamp, journal, professional headshot</li>
                <li>Request reviews from every satisfied client</li>
                <li>Post weekly updates (new services, hours, tips)</li>
              </ul>
            </div>
          </div>

          {/* Site 2: Yelp */}
          <div className="bg-gray-50 p-6 mb-6 rounded">
            <h3 className="text-2xl font-bold text-notary-navy mb-3">
              2. Yelp (yelp.com/biz)
            </h3>
            <p className="text-gray-700 mb-3">
              <strong>Monthly Reach:</strong> 100+ million local business reviews
            </p>
            <p className="text-gray-700 mb-3">
              Yelp is huge for local services. Many people trust Yelp reviews more than Google. Free business listing, but encourage happy clients to leave reviews.
            </p>
            <div className="bg-white p-4 mt-3">
              <p className="font-semibold text-notary-navy mb-2">Pro Tips:</p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Claim your business (it may already exist!)</li>
                <li>Complete your profile 100% (Yelp favors complete profiles)</li>
                <li>Upload 10+ photos</li>
                <li>Respond to ALL reviews (good and bad)</li>
                <li>Add your services (loan signings, general notary, mobile, etc.)</li>
              </ul>
            </div>
          </div>

          {/* Site 3: Facebook Business */}
          <div className="bg-gray-50 p-6 mb-6 rounded">
            <h3 className="text-2xl font-bold text-notary-navy mb-3">
              3. Facebook Business Page (business.facebook.com)
            </h3>
            <p className="text-gray-700 mb-3">
              <strong>Monthly Reach:</strong> Highly-targeted local marketing
            </p>
            <p className="text-gray-700 mb-3">
              Create a business page (separate from your personal profile). Facebook's local search is powerful, and you can run affordable ads later.
            </p>
            <div className="bg-white p-4 mt-3">
              <p className="font-semibold text-notary-navy mb-2">Strategy:</p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Post 2-3 times per week (tips, behind-the-scenes, signings completed)</li>
                <li>Join local Facebook groups ("Long Beach Business Owners")</li>
                <li>Share educational content about when people need notaries</li>
                <li>Enable messaging so clients can reach you easily</li>
              </ul>
            </div>
          </div>

          {/* Site 4: Bing Places */}
          <div className="bg-gray-50 p-6 mb-6 rounded">
            <h3 className="text-2xl font-bold text-notary-navy mb-3">
              4. Bing Places (bingplaces.com)
            </h3>
            <p className="text-gray-700 mb-3">
              <strong>Monthly Reach:</strong> 2nd most popular search engine in US
            </p>
            <p className="text-gray-700 mb-3">
              Don't sleep on Bing! It powers Yahoo search and is default on Windows PCs. Less competition than Google means easier ranking.
            </p>
            <div className="bg-white p-4 mt-3">
              <p className="font-semibold text-notary-navy mb-2">Quick Win:</p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Sync from Google Business Profile (saves time)</li>
                <li>Verify your listing</li>
                <li>Add photos and hours</li>
              </ul>
            </div>
          </div>

          {/* Site 5: Nextdoor Business */}
          <div className="bg-gray-50 p-6 mb-6 rounded">
            <h3 className="text-2xl font-bold text-notary-navy mb-3">
              5. Nextdoor Business (nextdoor.com/business)
            </h3>
            <p className="text-gray-700 mb-3">
              <strong>Monthly Reach:</strong> Hyperlocal neighborhood network
            </p>
            <p className="text-gray-700 mb-3">
              Perfect for mobile notaries! Nextdoor is where neighbors recommend local services. One recommendation can lead to 10+ referrals.
            </p>
            <div className="bg-white p-4 mt-3">
              <p className="font-semibold text-notary-navy mb-2">Nextdoor Strategy:</p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Post helpful tips ("What documents need notarization?")</li>
                <li>Offer neighbor discount (10% off first signing)</li>
                <li>Ask satisfied clients to recommend you</li>
                <li>Join as many nearby neighborhoods as possible</li>
              </ul>
            </div>
          </div>

          {/* Site 6: YellowPages/YP.com */}
          <div className="bg-gray-50 p-6 mb-6 rounded">
            <h3 className="text-2xl font-bold text-notary-navy mb-3">
              6. YellowPages.com / YP.com
            </h3>
            <p className="text-gray-700 mb-3">
              <strong>Monthly Reach:</strong> 29+ million monthly searches
            </p>
            <p className="text-gray-700 mb-3">
              Yes, YellowPages still exists online! Still gets massive traffic from people searching for local services.
            </p>
            <div className="bg-white p-4 mt-3">
              <p className="font-semibold text-notary-navy mb-2">Setup:</p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Claim your free business listing</li>
                <li>Add hours, photos, service description</li>
                <li>Select all relevant categories (Notary, Mobile Notary, Loan Signing)</li>
              </ul>
            </div>
          </div>

          {/* Site 7: Superpages */}
          <div className="bg-gray-50 p-6 mb-6 rounded">
            <h3 className="text-2xl font-bold text-notary-navy mb-3">
              7. Superpages.com
            </h3>
            <p className="text-gray-700 mb-3">
              <strong>Monthly Reach:</strong> 19+ million monthly searches
            </p>
            <p className="text-gray-700 mb-3">
              Part of the YP network. Free listing that appears in both Superpages and YP.com searches.
            </p>
          </div>

          {/* Site 8: CitySearch */}
          <div className="bg-gray-50 p-6 mb-6 rounded">
            <h3 className="text-2xl font-bold text-notary-navy mb-3">
              8. CitySearch.com
            </h3>
            <p className="text-gray-700 mb-3">
              <strong>Monthly Reach:</strong> 9+ million monthly searches
            </p>
            <p className="text-gray-700 mb-3">
              Local business directory with good SEO. Your listing shows up in Google searches too.
            </p>
          </div>

          {/* Site 9: LinkedIn Company Page */}
          <div className="bg-gray-50 p-6 mb-6 rounded">
            <h3 className="text-2xl font-bold text-notary-navy mb-3">
              9. LinkedIn Company Page (linkedin.com)
            </h3>
            <p className="text-gray-700 mb-3">
              <strong>Monthly Reach:</strong> 250+ million active users
            </p>
            <p className="text-gray-700 mb-3">
              Often overlooked by notaries, but powerful for B2B connections. Law firms, real estate agents, and title companies find notaries on LinkedIn.
            </p>
            <div className="bg-white p-4 mt-3">
              <p className="font-semibold text-notary-navy mb-2">LinkedIn Strategy:</p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Create your personal profile first</li>
                <li>Then create a Company Page for your notary business</li>
                <li>Connect with local real estate agents, attorneys, title officers</li>
                <li>Post about loan signing completions, certifications, industry news</li>
                <li>Join "Mobile Notary" and "Loan Signing Agent" LinkedIn groups</li>
              </ul>
            </div>
          </div>

          {/* Site 10: Chamber of Commerce */}
          <div className="bg-gray-50 p-6 mb-6 rounded">
            <h3 className="text-2xl font-bold text-notary-navy mb-3">
              10. Local Chamber of Commerce (chamberofcommerce.com + your local chamber)
            </h3>
            <p className="text-gray-700 mb-3">
              <strong>Monthly Reach:</strong> 15+ million visitors per year
            </p>
            <p className="text-gray-700 mb-3">
              Most local chambers offer free or low-cost business listings. Gets you connected with other local businesses who need notary services.
            </p>
            <div className="bg-white p-4 mt-3">
              <p className="font-semibold text-notary-navy mb-2">Chamber Benefits:</p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Online business directory listing</li>
                <li>Networking events (meet potential clients)</li>
                <li>Referrals from other members</li>
                <li>Credibility boost ("Chamber Member Since 2026")</li>
              </ul>
            </div>
          </div>

          {/* Bonus Sites Section */}
          <div className="bg-notary-navy text-white p-8 my-12 rounded">
            <h3 className="text-2xl font-bold mb-4">Notary-Specific Directories (Also Free!)</h3>
            <p className="text-lg mb-4">
              Beyond general business sites, list yourself on notary-specific platforms where people actively search for signing agents:
            </p>
            <ul className="space-y-2 text-white">
              <li>- <strong>NotaryRotary.com</strong> - Free profile + premium options</li>
              <li>- <strong>123Notary.com</strong> - Free listing in your area</li>
              <li>- <strong>NotaryCafe.com</strong> - Free directory + job board</li>
              <li>- <strong>SigningAgent.com</strong> - Free profile for loan signings</li>
              <li>- <strong>SnapDocs.com</strong> - Platform for loan signing orders</li>
            </ul>
            <p className="text-lg mt-4">
              For a complete list with setup instructions, check out our <Link href="/notary-business-resources" className="text-notary-gold hover:underline font-bold">85+ Notary Business Resources guide</Link>.
            </p>
          </div>

          {/* Implementation Strategy */}
          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">Your 30-Day Implementation Plan</h2>

          <div className="space-y-6 mb-8">
            <div className="border-l-4 border-notary-gold pl-6">
              <h4 className="text-xl font-bold text-notary-navy mb-2">Week 1: Foundation (3-4 hours)</h4>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Finalize your NAP (Name, Address, Phone)</li>
                <li>Take professional photos (headshot, workspace, stamp/journal)</li>
                <li>Write your business description (50-150 words)</li>
                <li>Create Google Business Profile (#1 priority!)</li>
              </ul>
            </div>

            <div className="border-l-4 border-notary-gold pl-6">
              <h4 className="text-xl font-bold text-notary-navy mb-2">Week 2: Major Platforms (2-3 hours)</h4>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Yelp business listing</li>
                <li>Facebook Business Page</li>
                <li>Bing Places</li>
              </ul>
            </div>

            <div className="border-l-4 border-notary-gold pl-6">
              <h4 className="text-xl font-bold text-notary-navy mb-2">Week 3: Local & Niche (2 hours)</h4>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Nextdoor Business</li>
                <li>LinkedIn Company Page</li>
                <li>Local Chamber of Commerce</li>
              </ul>
            </div>

            <div className="border-l-4 border-notary-gold pl-6">
              <h4 className="text-xl font-bold text-notary-navy mb-2">Week 4: Complete & Optimize (1-2 hours)</h4>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>YellowPages, Superpages, CitySearch</li>
                <li>NotaryRotary, 123Notary, NotaryCafe</li>
                <li>Double-check that your business name, address, and phone number match across all sites</li>
                <li>Add photos to every listing</li>
              </ul>
            </div>
          </div>

          {/* Training CTA */}
          <div className="bg-gradient-to-r from-notary-navy to-blue-900 text-white p-8 my-12 rounded">
            <h3 className="text-2xl font-bold mb-4">Thinking About Loan Signing Work?</h3>
            <p className="text-lg mb-6">
              Listings are just the first step. If you want to move into loan signing work, it helps to understand how closings work, what title companies expect, and how to handle the documents cleanly.
            </p>
            <p className="text-lg mb-6">
              <strong>Loan Signing System</strong> teaches you everything from finding your first signing to handling loan signing work with more confidence. Graduates report landing signings within weeks of certification.
            </p>
            <a 
              href="http://loansigningsystem.com/?afmc=x5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-notary-navy text-white px-8 py-4 font-bold text-lg hover:bg-opacity-90 transition shadow-lg"
            >
              See Loan Signing System
            </a>
          </div>

          {/* Maintenance Tips */}
          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">Maintaining Your Listings (Ongoing)</h2>

          <p className="text-gray-700 mb-6">
            Don't "set it and forget it." Active listings usually stay more accurate, visible, and useful:
          </p>

          <div className="bg-gray-50 p-6 mb-8">
            <ul className="space-y-3 text-gray-700">
              <li><strong>Weekly:</strong> Post to Google Business Profile (updates, photos, offers)</li>
              <li><strong>Monthly:</strong> Check all listings for accuracy, respond to reviews</li>
              <li><strong>Quarterly:</strong> Update photos, refresh business description</li>
              <li><strong>After each signing:</strong> Request a review (send Google/Yelp link via text)</li>
              <li><strong>If you change phone/hours:</strong> Update ALL 10+ sites immediately</li>
            </ul>
          </div>

          <p className="text-gray-700 mb-8">
            The notaries who consistently maintain their online presence get 3-5x more inquiries than those who don't. It's worth 30 minutes per week.
          </p>

          <ArticleSignupCta source="free-marketing-sites-article" />

          {/* Related Resources */}
          <div className="border-t-2 border-gray-200 pt-8 mt-12">
            <h3 className="text-2xl font-bold text-notary-navy mb-6">Next Steps to Grow Your Notary Business:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/notary-business-resources" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
                <h4 className="font-bold text-notary-navy mb-2">85+ Notary Business Resources</h4>
                <p className="text-gray-600 text-sm">Complete marketing guide including all free listing sites</p>
              </Link>
              <Link href="/target-industries-for-notaries" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
                <h4 className="font-bold text-notary-navy mb-2">Target Industries for Notaries</h4>
                <p className="text-gray-600 text-sm">Where to find your best clients and build steady income</p>
              </Link>
              <Link href="/mobile-notary-supplies" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
                <h4 className="font-bold text-notary-navy mb-2">Mobile Notary Supplies Checklist</h4>
                <p className="text-gray-600 text-sm">Everything you need to look professional at signings</p>
              </Link>
              <Link href="/why-now-is-perfect-time-loan-signing-agent" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
                <h4 className="font-bold text-notary-navy mb-2">Why 2026 Is Still a Good Time for Loan Signing Agents</h4>
                <p className="text-gray-600 text-sm">Market analysis and how to get started</p>
              </Link>
            </div>
          </div>

        </div>
      </article>
    </div>
  );
}


