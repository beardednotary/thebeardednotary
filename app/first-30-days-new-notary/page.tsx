import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Your First 30 Days as a Mobile Notary: Complete Action Plan (2026) | The Bearded Notary',
  description: 'Day-by-day action plan for new mobile notaries. What to do in your first month to get clients, build your business, and start earning $2,000+ monthly.',
  openGraph: {
    title: 'Your First 30 Days as a Mobile Notary: Complete Action Plan',
    description: 'Week-by-week checklist for new notaries. Get clients, build systems, start earning.',
    images: ['/images/first-30-days-notary-featured.png'],
  },
};

export default function First30DaysNewNotary() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-notary-navy text-white py-6">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/" className="text-notary-gold hover:underline text-sm mb-2 block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold">
            Your First 30 Days as a Mobile Notary: Complete Action Plan
          </h1>
        </div>
      </header>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        
        <div className="prose prose-lg max-w-none">
          
          {/* Featured Image */}
          <div className="my-8">
            <img 
              src="/images/first-30-days-notary-featured.png"
              alt="30 day action plan for new notaries"
              className="w-full max-w-2xl mx-auto"
            />
          </div>
          
          <p className="text-xl text-gray-700 mb-8 font-semibold">
            You just got your notary commission. Exciting! But now what? How do you actually get clients and start making money?
          </p>

          <p className="text-gray-700 mb-8">
            This isn't theory - it's a practical, day-by-day action plan that takes you from "brand new notary" to "earning your first $1,000+" in 30 days. Follow this plan, check off each task, and you'll build a solid foundation for a profitable notary business in 2026.
          </p>

          <div className="bg-notary-gold bg-opacity-10 border-l-4 border-notary-gold p-6 my-8">
            <h3 className="text-xl font-bold text-notary-navy mb-3">What You'll Accomplish in 30 Days</h3>
            <ul className="space-y-2 text-gray-800">
              <li>✓ Complete your notary setup (commission, supplies, systems)</li>
              <li>✓ Get listed on 10+ free marketing sites</li>
              <li>✓ Complete your first 5-10 signings</li>
              <li>✓ Earn your first reviews</li>
              <li>✓ Build momentum for month 2 and beyond</li>
              <li>✓ Realistic goal: $500-1,500 in your first month</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">Before Day 1: Prerequisites</h2>

          <p className="text-gray-700 mb-6">
            This plan assumes you've already completed (or are in the process of completing) your notary commission. If not, start here:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
            <li>
              <Link href="/how-to-become-a-notary-in-california" className="text-notary-gold hover:underline">How to Become a Notary in California</Link> (or check your state's Secretary of State website)
            </li>
            <li>Pass your state's notary exam (if required)</li>
            <li>File your oath and bond</li>
            <li>Receive your commission certificate</li>
          </ul>

          <p className="text-gray-700 mb-8">
            <strong>Once you're commissioned (or while waiting for your certificate), start this 30-day plan:</strong>
          </p>

          {/* WEEK 1 */}
          <div className="bg-gray-900 text-white p-6 my-12 rounded">
            <h2 className="text-3xl font-bold mb-2">Week 1: Foundation & Setup</h2>
            <p className="text-gray-300">Get your business infrastructure in place</p>
          </div>

          {/* Day 1-2 */}
          <div className="bg-gray-50 p-6 mb-6 rounded border-l-4 border-notary-navy">
            <h3 className="text-2xl font-bold text-notary-navy mb-4">Days 1-2: Order Your Supplies</h3>
            
            <p className="text-gray-700 mb-4">
              You can't work without the right tools. Order these immediately so they arrive by the time you're ready to start:
            </p>

            <div className="bg-white p-4 mb-4">
              <h4 className="font-bold text-notary-navy mb-2">Essential Supplies (Order Today):</h4>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Notary stamp (your state-approved format)</li>
                <li>Notary journal (sequential, bound pages)</li>
                <li>Black ink pen</li>
                <li>Thumbprint pad</li>
                <li>Business cards (500 minimum)</li>
              </ul>
              <p className="text-gray-700 mt-3">
                Complete checklist: <Link href="/mobile-notary-supplies" className="text-notary-gold hover:underline font-semibold">12 Essential Mobile Notary Supplies</Link>
              </p>
            </div>

            <div className="bg-white p-4">
              <h4 className="font-bold text-notary-navy mb-2">✅ Day 1-2 Checklist:</h4>
              <ul className="space-y-1 text-gray-700">
                <li>☐ Order notary stamp ($20-40)</li>
                <li>☐ Order notary journal ($15-25)</li>
                <li>☐ Order business cards ($20-50)</li>
                <li>☐ Get thumbprint pad ($5-10)</li>
                <li>☐ Buy black pens, folder, clipboard</li>
              </ul>
            </div>
          </div>

          {/* Day 3-4 */}
          <div className="bg-gray-50 p-6 mb-6 rounded border-l-4 border-notary-navy">
            <h3 className="text-2xl font-bold text-notary-navy mb-4">Days 3-4: Set Up Business Systems</h3>
            
            <p className="text-gray-700 mb-4">
              You're running a business, so set it up like one:
            </p>

            <div className="bg-white p-4 mb-4">
              <h4 className="font-bold text-notary-navy mb-2">Create Professional Contact Info:</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <strong>Business Email:</strong> yourname@gmail.com or get a custom domain ($12/year at Namecheap)
                </li>
                <li>
                  <strong>Business Phone:</strong> Use your personal cell OR get a Google Voice number (free) for separation
                </li>
                <li>
                  <strong>Voicemail:</strong> Professional greeting: "You've reached [Name], mobile notary public. Please leave your name, number, and best time to call back."
                </li>
              </ul>
            </div>

            <div className="bg-white p-4 mb-4">
              <h4 className="font-bold text-notary-navy mb-2">Set Up Payment Methods:</h4>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Venmo business account (free, clients love it)</li>
                <li>Zelle (free, instant transfers)</li>
                <li>Square or PayPal for credit cards (~3% fee)</li>
                <li>Always accept cash (have change on hand)</li>
              </ul>
            </div>

            <div className="bg-white p-4">
              <h4 className="font-bold text-notary-navy mb-2">✅ Day 3-4 Checklist:</h4>
              <ul className="space-y-1 text-gray-700">
                <li>☐ Set up business email</li>
                <li>☐ Configure professional voicemail</li>
                <li>☐ Create Venmo/Zelle accounts</li>
                <li>☐ Sign up for Square or PayPal</li>
                <li>☐ Decide on your pricing (use <Link href="/how-much-to-charge-mobile-notary" className="text-notary-gold hover:underline">our pricing guide</Link>)</li>
              </ul>
            </div>
          </div>

          {/* Day 5-6 */}
          <div className="bg-gray-50 p-6 mb-6 rounded border-l-4 border-notary-navy">
            <h3 className="text-2xl font-bold text-notary-navy mb-4">Days 5-6: Create Your Google Business Profile</h3>
            
            <p className="text-gray-700 mb-4">
              This is THE most important marketing task. Google Business Profile is how clients find you when they search "notary near me."
            </p>

            <div className="bg-white p-4 mb-4">
              <h4 className="font-bold text-notary-navy mb-2">How to Set It Up:</h4>
              <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                <li>Go to <strong>google.com/business</strong></li>
                <li>Click "Manage now" and sign in with your business email</li>
                <li>Enter your business name: "[Your Name] Mobile Notary" or "[City] Mobile Notary"</li>
                <li>Select category: <strong>Notary Public</strong></li>
                <li>Choose "I deliver goods and services to my customers" (you're mobile)</li>
                <li>Enter your service area (cities/ZIP codes you'll travel to)</li>
                <li>Verify your business (usually by postcard to your address)</li>
              </ol>
            </div>

            <div className="bg-white p-4 mb-4">
              <h4 className="font-bold text-notary-navy mb-2">Optimize Your Profile:</h4>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Add 10+ photos (your stamp, journal, professional headshot, you at a signing)</li>
                <li>Write a compelling description (150 words max, keyword-rich)</li>
                <li>List your services: General Notarization, Mobile Notary, Loan Signing, Apostille</li>
                <li>Set your hours (or mark as "Open 24 hours" if you do after-hours)</li>
                <li>Add your website URL (if you have one) or link to your notary profiles</li>
              </ul>
            </div>

            <div className="bg-white p-4">
              <h4 className="font-bold text-notary-navy mb-2">✅ Day 5-6 Checklist:</h4>
              <ul className="space-y-1 text-gray-700">
                <li>☐ Create Google Business Profile</li>
                <li>☐ Request verification postcard</li>
                <li>☐ Upload 10+ photos</li>
                <li>☐ Write business description</li>
                <li>☐ Add services and hours</li>
              </ul>
            </div>
          </div>

          {/* Day 7 */}
          <div className="bg-gray-50 p-6 mb-6 rounded border-l-4 border-notary-navy">
            <h3 className="text-2xl font-bold text-notary-navy mb-4">Day 7: Week 1 Review & Practice Run</h3>
            
            <p className="text-gray-700 mb-4">
              <strong>Practice signing with family/friends:</strong> Notarize a power of attorney for your parents, an affidavit for a friend, anything. Get comfortable with the process before your first real client.
            </p>

            <div className="bg-white p-4">
              <h4 className="font-bold text-notary-navy mb-2">✅ Week 1 Complete? You should have:</h4>
              <ul className="space-y-1 text-gray-700">
                <li>☐ Supplies ordered (arriving soon)</li>
                <li>☐ Business email and phone set up</li>
                <li>☐ Payment methods configured</li>
                <li>☐ Google Business Profile created (verifying)</li>
                <li>☐ Practiced notarization process with friends/family</li>
              </ul>
            </div>
          </div>

          {/* WEEK 2 */}
          <div className="bg-gray-900 text-white p-6 my-12 rounded">
            <h2 className="text-3xl font-bold mb-2">Week 2: Marketing & Training</h2>
            <p className="text-gray-300">Get visible and get educated</p>
          </div>

          {/* Days 8-10 */}
          <div className="bg-gray-50 p-6 mb-6 rounded border-l-4 border-notary-navy">
            <h3 className="text-2xl font-bold text-notary-navy mb-4">Days 8-10: List Your Business Everywhere</h3>
            
            <p className="text-gray-700 mb-4">
              List yourself on every free site possible. More listings = more ways clients can find you.
            </p>

            <div className="bg-white p-4 mb-4">
              <h4 className="font-bold text-notary-navy mb-2">10 Free Sites (Budget 2-3 hours):</h4>
              <ol className="list-decimal pl-6 space-y-1 text-gray-700 text-sm">
                <li>Google Business Profile (already done!)</li>
                <li>Yelp for Business</li>
                <li>Facebook Business Page</li>
                <li>Bing Places</li>
                <li>Nextdoor Business</li>
                <li>YellowPages.com</li>
                <li>Superpages.com</li>
                <li>CitySearch.com</li>
                <li>LinkedIn Company Page</li>
                <li>Local Chamber of Commerce</li>
              </ol>
              <p className="text-gray-700 mt-3">
                <strong>Complete guide with NAP consistency tips:</strong> <Link href="/free-marketing-sites-notaries" className="text-notary-gold hover:underline font-semibold">10 Free Sites to Market Your Notary Business</Link>
              </p>
            </div>

            <div className="bg-white p-4 mb-4">
              <h4 className="font-bold text-notary-navy mb-2">Notary-Specific Directories:</h4>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                <li>NotaryRotary.com (free profile)</li>
                <li>123Notary.com (free listing)</li>
                <li>NotaryCafe.com (free directory + forum)</li>
                <li>SigningAgent.com (free profile for loan signings)</li>
                <li>SnapDocs.com (platform for loan signing orders)</li>
              </ul>
            </div>

            <div className="bg-white p-4">
              <h4 className="font-bold text-notary-navy mb-2">✅ Days 8-10 Checklist:</h4>
              <ul className="space-y-1 text-gray-700">
                <li>☐ Create profiles on all 10 general business sites</li>
                <li>☐ List on 5 notary-specific directories</li>
                <li>☐ Use CONSISTENT name, address, phone everywhere</li>
                <li>☐ Upload your professional photo to all profiles</li>
              </ul>
            </div>
          </div>

          {/* Days 11-13 */}
          <div className="bg-gray-50 p-6 mb-6 rounded border-l-4 border-notary-navy">
            <h3 className="text-2xl font-bold text-notary-navy mb-4">Days 11-13: Get Loan Signing Training</h3>
            
            <p className="text-gray-700 mb-4">
              General notarizations pay $15-50. Loan signings pay $75-200. The math is simple: if you want to make real money, learn loan signing.
            </p>

            <div className="bg-notary-navy text-white p-6 mb-4 rounded">
              <h4 className="text-xl font-bold mb-3">Why Loan Signing System?</h4>
              <ul className="space-y-2">
                <li>✓ <strong>Proven training:</strong> Founded by Mark Wills, former loan signing agent who built a 7-figure business</li>
                <li>✓ <strong>Industry recognition:</strong> Title companies know and trust LSS certification</li>
                <li>✓ <strong>Complete curriculum:</strong> Every document explained, common mistakes covered, real-world scenarios</li>
                <li>✓ <strong>Community access:</strong> Private Facebook group with 20,000+ signing agents</li>
                <li>✓ <strong>Fast results:</strong> Graduates report landing their first signings within 2-4 weeks</li>
              </ul>
              <p className="mt-4 text-lg">
                <strong>Investment:</strong> ~$200-300 (pays for itself with 2-3 signings)
              </p>
              <div className="mt-6">
                <a 
                  href="http://loansigningsystem.com/?afmc=x5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-notary-navy px-8 py-4 font-bold text-lg hover:bg-gray-100 transition shadow-lg border-2 border-notary-gold"
                >
                  Get Certified with Loan Signing System
                </a>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4">
              <p className="text-gray-800">
                <strong>Alternative:</strong> If you're not ready for loan signing yet, that's okay! Focus on general mobile notary work and add loan signing later. But if you want to earn $2,000+ monthly, certification is essential.
              </p>
            </div>

            <div className="bg-white p-4">
              <h4 className="font-bold text-notary-navy mb-2">✅ Days 11-13 Checklist:</h4>
              <ul className="space-y-1 text-gray-700">
                <li>☐ Research loan signing agent requirements</li>
                <li>☐ Enroll in Loan Signing System (or alternative training)</li>
                <li>☐ Complete first few modules</li>
                <li>☐ Read about <Link href="/document-types-notaries-glossary" className="text-notary-gold hover:underline">common documents</Link> you'll encounter</li>
              </ul>
            </div>
          </div>

          {/* Day 14 */}
          <div className="bg-gray-50 p-6 mb-6 rounded border-l-4 border-notary-navy">
            <h3 className="text-2xl font-bold text-notary-navy mb-4">Day 14: Week 2 Review & First Client Outreach</h3>
            
            <p className="text-gray-700 mb-4">
              <strong>By now your supplies should have arrived!</strong> Unbox everything, set up your mobile notary kit.
            </p>

            <div className="bg-white p-4 mb-4">
              <h4 className="font-bold text-notary-navy mb-2">Your Mobile Notary Kit Should Include:</h4>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Notary stamp and journal (in a protective case)</li>
                <li>Black pens (3-4 extras)</li>
                <li>Thumbprint pad</li>
                <li>Business cards (in cardholder)</li>
                <li>Clipboard and folder</li>
                <li>Small stapler</li>
                <li>Calculator (for loan signings)</li>
              </ul>
              <p className="text-gray-700 mt-2">
                Keep this kit in your car at all times. You never know when you'll get a call!
              </p>
            </div>

            <div className="bg-white p-4 mb-4">
              <h4 className="font-bold text-notary-navy mb-2">First Client Outreach (30 minutes):</h4>
              <p className="text-gray-700 mb-2">
                Post in 3 local Facebook groups:
              </p>
              <div className="bg-gray-100 p-3 italic text-gray-700 text-sm">
                "Hi everyone! I'm a newly commissioned mobile notary public serving [your area]. If you or anyone you know needs documents notarized, I come to you! Available evenings and weekends. DM for details. 📝"
              </div>
              <p className="text-gray-700 mt-3">
                Search for: "[Your City] Community", "[Your City] Business Owners", "[Your City] Buy/Sell/Trade"
              </p>
            </div>

            <div className="bg-white p-4">
              <h4 className="font-bold text-notary-navy mb-2">✅ Week 2 Complete? You should have:</h4>
              <ul className="space-y-1 text-gray-700">
                <li>☐ Listed on 15+ sites</li>
                <li>☐ Started loan signing training</li>
                <li>☐ Supplies arrived and organized</li>
                <li>☐ Made first public announcements (Facebook)</li>
              </ul>
            </div>
          </div>

          {/* WEEK 3 */}
          <div className="bg-gray-900 text-white p-6 my-12 rounded">
            <h2 className="text-3xl font-bold mb-2">Week 3: First Clients & Momentum Building</h2>
            <p className="text-gray-300">Get your first signings and start earning</p>
          </div>

          {/* Days 15-17 */}
          <div className="bg-gray-50 p-6 mb-6 rounded border-l-4 border-notary-navy">
            <h3 className="text-2xl font-bold text-notary-navy mb-4">Days 15-17: Targeted Industry Outreach</h3>
            
            <p className="text-gray-700 mb-4">
              Stop waiting for clients to find you. Go find them. Pick 3 industries from our <Link href="/target-industries-for-notaries" className="text-notary-gold hover:underline font-semibold">target industries list</Link> and reach out.
            </p>

            <div className="bg-white p-4 mb-4">
              <h4 className="font-bold text-notary-navy mb-2">Best Industries for New Notaries:</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <strong>Real Estate Agents:</strong> Always need quick notarizations. Visit 5 offices, drop off business cards, introduce yourself.
                </li>
                <li>
                  <strong>Senior Living Facilities:</strong> Call 3-5 facilities, ask to speak with administrator, offer mobile notary services for residents.
                </li>
                <li>
                  <strong>Small Law Firms:</strong> Solo practitioners often don't have in-house notaries. Cold email 10 firms.
                </li>
              </ul>
            </div>

            <div className="bg-white p-4 mb-4">
              <h4 className="font-bold text-notary-navy mb-2">Email Template for Law Firms:</h4>
              <div className="bg-gray-100 p-3 text-gray-700 text-sm">
                <p className="mb-2">Subject: Mobile Notary Services for [Firm Name]</p>
                <p className="mb-2">Hi [Attorney Name],</p>
                <p className="mb-2">I'm [Your Name], a commissioned notary public serving [your area]. I provide mobile notary services to law firms for client signings, affidavits, depositions, and other legal documents.</p>
                <p className="mb-2">Benefits for your firm:</p>
                <ul className="list-disc pl-6 mb-2">
                  <li>Same-day availability</li>
                  <li>I come to your office or your client's location</li>
                  <li>Evening/weekend appointments available</li>
                  <li>Competitive rates ($[your fee] per notarization)</li>
                </ul>
                <p className="mb-2">Would you be interested in having an on-call notary for your firm? Happy to discuss how I can support your practice.</p>
                <p>Best regards,<br />[Your Name]<br />[Phone]<br />[Email]</p>
              </div>
            </div>

            <div className="bg-white p-4">
              <h4 className="font-bold text-notary-navy mb-2">✅ Days 15-17 Checklist:</h4>
              <ul className="space-y-1 text-gray-700">
                <li>☐ Visit 5 real estate offices (in person)</li>
                <li>☐ Call 5 senior living facilities</li>
                <li>☐ Email 10 small law firms</li>
                <li>☐ Drop off business cards at 3 local businesses</li>
                <li>☐ Follow up on any leads from Facebook posts</li>
              </ul>
            </div>
          </div>

          {/* Days 18-20 */}
          <div className="bg-gray-50 p-6 mb-6 rounded border-l-4 border-notary-navy">
            <h3 className="text-2xl font-bold text-notary-navy mb-4">Days 18-20: Complete First Signings</h3>
            
            <p className="text-gray-700 mb-4">
              <strong>Goal: 3-5 signings this week.</strong> Even if they're for friends/family at discounted rates, you need practice and you need reviews.
            </p>

            <div className="bg-white p-4 mb-4">
              <h4 className="font-bold text-notary-navy mb-2">Where to Find Your First Clients:</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <strong>Friends & Family:</strong> "I just became a notary! If you need anything notarized, I'm happy to help!" (Charge them, even if discounted - you need the practice)
                </li>
                <li>
                  <strong>Facebook Marketplace:</strong> Post in your local groups offering mobile notary service
                </li>
                <li>
                  <strong>Nextdoor:</strong> Post in your neighborhood offering neighbor discount
                </li>
                <li>
                  <strong>Craigslist:</strong> Post under &quot;Services &gt; Legal&quot; in your area
                </li>
              </ul>
            </div>

            <div className="bg-white p-4 mb-4">
              <h4 className="font-bold text-notary-navy mb-2">After Each Signing:</h4>
              <ol className="list-decimal pl-6 space-y-1 text-gray-700">
                <li>Complete your journal entry (every time, no exceptions)</li>
                <li>Collect payment before leaving</li>
                <li>Give them your business card ("Please refer me to anyone who needs a notary!")</li>
                <li>Send a thank-you text within 24 hours</li>
                <li>Request a Google review (text them a direct link)</li>
              </ol>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4">
              <h4 className="font-bold text-gray-800 mb-2">Review Request Template:</h4>
              <div className="bg-white p-3 text-gray-700 text-sm">
                "Hi [Client Name], thanks for using my mobile notary services today! If you were happy with the service, I'd really appreciate a quick Google review. Here's the link: [your Google review link]. It helps me grow my business. Thank you!"
              </div>
            </div>

            <div className="bg-white p-4">
              <h4 className="font-bold text-notary-navy mb-2">✅ Days 18-20 Checklist:</h4>
              <ul className="space-y-1 text-gray-700">
                <li>☐ Complete 3-5 notarizations</li>
                <li>☐ Collect payment for each (practice your process)</li>
                <li>☐ Request Google reviews from all clients</li>
                <li>☐ Note what went well / what to improve</li>
              </ul>
            </div>
          </div>

          {/* Day 21 */}
          <div className="bg-gray-50 p-6 mb-6 rounded border-l-4 border-notary-navy">
            <h3 className="text-2xl font-bold text-notary-navy mb-4">Day 21: Week 3 Review & Pricing Refinement</h3>
            
            <p className="text-gray-700 mb-4">
              <strong>You're a working notary now!</strong> Take time to reflect and adjust.
            </p>

            <div className="bg-white p-4 mb-4">
              <h4 className="font-bold text-notary-navy mb-2">Week 3 Reflection Questions:</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Did you charge enough? (See our <Link href="/how-much-to-charge-mobile-notary" className="text-notary-gold hover:underline">pricing guide</Link>)</li>
                <li>What took longer than expected?</li>
                <li>Which marketing efforts brought clients?</li>
                <li>What felt awkward? (Practice will fix this)</li>
                <li>Are you ready to raise your rates?</li>
              </ul>
            </div>

            <div className="bg-white p-4">
              <h4 className="font-bold text-notary-navy mb-2">✅ Week 3 Complete? You should have:</h4>
              <ul className="space-y-1 text-gray-700">
                <li>☐ Completed 3-5 signings</li>
                <li>☐ Earned your first $100-300</li>
                <li>☐ Requested 3-5 Google reviews</li>
                <li>☐ Built confidence in your process</li>
              </ul>
            </div>
          </div>

          {/* WEEK 4 */}
          <div className="bg-gray-900 text-white p-6 my-12 rounded">
            <h2 className="text-3xl font-bold mb-2">Week 4: Scale & Systems</h2>
            <p className="text-gray-300">Refine your process and plan for month 2</p>
          </div>

          {/* Days 22-24 */}
          <div className="bg-gray-50 p-6 mb-6 rounded border-l-4 border-notary-navy">
            <h3 className="text-2xl font-bold text-notary-navy mb-4">Days 22-24: Apply to Signing Companies</h3>
            
            <p className="text-gray-700 mb-4">
              If you've completed (or nearly completed) your loan signing training, start applying to signing companies. They're how you get consistent loan signing work.
            </p>

            <div className="bg-white p-4 mb-4">
              <h4 className="font-bold text-notary-navy mb-2">Top Signing Companies to Apply To:</h4>
              <ol className="list-decimal pl-6 space-y-1 text-gray-700 text-sm">
                <li><strong>SnapDocs</strong> - Most popular, tech platform</li>
                <li><strong>NotaryRotary</strong> - Established, good volume</li>
                <li><strong>SigningAgent.com</strong> - Direct from title companies</li>
                <li><strong>Notary2Pro</strong> - Training + signing connections</li>
                <li><strong>Café Signing Service</strong> - Good for new agents</li>
                <li><strong>Amrock</strong> - High volume, strict requirements</li>
                <li><strong>Pavaso</strong> - eClosings</li>
                <li><strong>Clear Closing</strong> - Good regional coverage</li>
              </ol>
              <p className="text-gray-700 mt-3 text-sm">
                <strong>Application tip:</strong> Most require background check ($30-50), E&O insurance proof, and LSS certification or similar training.
              </p>
            </div>

            <div className="bg-white p-4 mb-4">
              <h4 className="font-bold text-notary-navy mb-2">What You'll Need:</h4>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Loan Signing System certificate (or equivalent)</li>
                <li>Background screening (NNA or similar, $40)</li>
                <li>E&O Insurance ($25,000-$100,000 coverage, ~$50/year)</li>
                <li>Dual-tray printer for scan-backs (see our <Link href="/best-printers-for-notaries" className="text-notary-gold hover:underline">printer guide</Link>)</li>
                <li>Updated resume highlighting your notary experience</li>
              </ul>
            </div>

            <div className="bg-white p-4">
              <h4 className="font-bold text-notary-navy mb-2">✅ Days 22-24 Checklist:</h4>
              <ul className="space-y-1 text-gray-700">
                <li>☐ Apply to 5-8 signing companies</li>
                <li>☐ Get background check if needed</li>
                <li>☐ Purchase E&O insurance</li>
                <li>☐ Complete loan signing training modules</li>
              </ul>
            </div>
          </div>

          {/* Days 25-27 */}
          <div className="bg-gray-50 p-6 mb-6 rounded border-l-4 border-notary-navy">
            <h3 className="text-2xl font-bold text-notary-navy mb-4">Days 25-27: Expand Marketing & Build Reviews</h3>
            
            <p className="text-gray-700 mb-4">
              Double down on what's working. If Facebook got you 2 clients, post more. If real estate agents responded well, visit more offices.
            </p>

            <div className="bg-white p-4 mb-4">
              <h4 className="font-bold text-notary-navy mb-2">Marketing Actions (Choose 3-4):</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <strong>Instagram/Facebook:</strong> Post photos of you at signings (blur client info!), share notary tips, behind-the-scenes content
                </li>
                <li>
                  <strong>LinkedIn:</strong> Connect with 20 real estate agents, attorneys, loan officers in your area
                </li>
                <li>
                  <strong>Email signature:</strong> Add "Licensed Mobile Notary Public | Available 24/7 | [Phone]" to every email
                </li>
                <li>
                  <strong>Car magnet:</strong> Order magnetic car signs ($30-50) with your name and phone number
                </li>
                <li>
                  <strong>Networking events:</strong> Attend a Chamber of Commerce mixer, real estate association meeting
                </li>
              </ul>
            </div>

            <div className="bg-white p-4 mb-4">
              <h4 className="font-bold text-notary-navy mb-2">Review Building Strategy:</h4>
              <p className="text-gray-700 mb-2">
                <strong>Goal: 5 Google reviews by end of month.</strong> Reviews are social proof that converts browsers into clients.
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>After EVERY signing, send review request within 24 hours</li>
                <li>Make it easy: Send direct Google review link via text</li>
                <li>Follow up once if they don't leave a review</li>
                <li>Respond to every review (even bad ones) professionally</li>
              </ul>
            </div>

            <div className="bg-white p-4">
              <h4 className="font-bold text-notary-navy mb-2">✅ Days 25-27 Checklist:</h4>
              <ul className="space-y-1 text-gray-700">
                <li>☐ Post on social media 3-5 times</li>
                <li>☐ Connect with 20 potential clients on LinkedIn</li>
                <li>☐ Request reviews from all recent clients</li>
                <li>☐ Attend 1 networking event</li>
              </ul>
            </div>
          </div>

          {/* Days 28-30 */}
          <div className="bg-gray-50 p-6 mb-6 rounded border-l-4 border-notary-navy">
            <h3 className="text-2xl font-bold text-notary-navy mb-4">Days 28-30: Month 1 Review & Month 2 Planning</h3>
            
            <p className="text-gray-700 mb-4">
              <strong>Congratulations! You've completed your first 30 days as a mobile notary.</strong> Time to analyze results and plan your next move.
            </p>

            <div className="bg-white p-4 mb-4">
              <h4 className="font-bold text-notary-navy mb-2">Calculate Your Month 1 Results:</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Total signings completed:</strong> _______</li>
                <li><strong>Total income earned:</strong> $_______</li>
                <li><strong>Hourly rate:</strong> $_______ (income ÷ hours worked)</li>
                <li><strong>Google reviews earned:</strong> _______</li>
                <li><strong>Marketing channels that worked:</strong> _______</li>
              </ul>
            </div>

            <div className="bg-white p-4 mb-4">
              <h4 className="font-bold text-notary-navy mb-2">Realistic Month 1 Benchmarks:</h4>
              <div className="space-y-2 text-gray-700">
                <p><strong>Conservative:</strong> 5-10 signings, $300-600 income</p>
                <p><strong>Average:</strong> 10-20 signings, $600-1,200 income</p>
                <p><strong>Aggressive:</strong> 20-30 signings, $1,200-2,000 income</p>
              </div>
              <p className="text-gray-700 mt-3 italic">
                Don't be discouraged if you're on the lower end. Month 2 is always better as your listings gain traction and reviews accumulate!
              </p>
            </div>

            <div className="bg-white p-4 mb-4">
              <h4 className="font-bold text-notary-navy mb-2">Month 2 Goals (Set Them Now):</h4>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>☐ Complete loan signing training (if not done)</li>
                <li>☐ Land first loan signing appointment</li>
                <li>☐ Earn 10 Google reviews total</li>
                <li>☐ Get on 3+ signing company rosters</li>
                <li>☐ Double your month 1 income</li>
                <li>☐ Build repeat client relationships (2-3 regulars)</li>
              </ul>
            </div>

            <div className="bg-white p-4">
              <h4 className="font-bold text-notary-navy mb-2">✅ Days 28-30 Final Checklist:</h4>
              <ul className="space-y-1 text-gray-700">
                <li>☐ Calculate month 1 earnings</li>
                <li>☐ Review which marketing worked best</li>
                <li>☐ Set month 2 income goal</li>
                <li>☐ Plan week 1 of month 2 activities</li>
                <li>☐ Celebrate your wins! 🎉</li>
              </ul>
            </div>
          </div>

          {/* Success Summary */}
          <div className="bg-notary-gold bg-opacity-20 border-2 border-notary-gold p-8 my-12 rounded">
            <h2 className="text-3xl font-bold text-notary-navy mb-6">Your 30-Day Achievement Summary</h2>
            
            <p className="text-gray-800 mb-6 text-lg">
              If you followed this plan, you now have:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-bold text-notary-navy mb-2">✅ Business Foundation</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Professional supplies</li>
                  <li>• Business systems (email, phone, payment)</li>
                  <li>• Google Business Profile</li>
                  <li>• 15+ business listings</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-notary-navy mb-2">✅ Training & Skills</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Loan signing training started/completed</li>
                  <li>• 5-20+ real signings under your belt</li>
                  <li>• Confidence in your process</li>
                  <li>• Knowledge of common documents</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-notary-navy mb-2">✅ Client Acquisition</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• First clients served</li>
                  <li>• Google reviews started</li>
                  <li>• Industry connections made</li>
                  <li>• Marketing channels tested</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-notary-navy mb-2">✅ Income & Growth</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• First $300-2,000 earned</li>
                  <li>• Pricing strategy defined</li>
                  <li>• Signing company applications submitted</li>
                  <li>• Clear path to month 2 growth</li>
                </ul>
              </div>
            </div>

            <p className="text-gray-800 text-lg">
              <strong>You're not a "new" notary anymore - you're a working professional!</strong>
            </p>
          </div>

          {/* What's Next */}
          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">What Happens in Months 2-6?</h2>

          <p className="text-gray-700 mb-6">
            Month 1 is about setup and foundation. Months 2-6 are about growth and optimization:
          </p>

          <div className="space-y-4 mb-8">
            <div className="border-l-4 border-notary-navy pl-6">
              <h4 className="text-xl font-bold text-notary-navy mb-2">Month 2: First Loan Signings</h4>
              <p className="text-gray-700">
                Signing companies start calling. You complete your first few loan signings. Income jumps to $1,500-3,000 as you balance general notary work with higher-paying closings.
              </p>
            </div>

            <div className="border-l-4 border-notary-navy pl-6">
              <h4 className="text-xl font-bold text-notary-navy mb-2">Month 3: Repeat Clients Emerge</h4>
              <p className="text-gray-700">
                Real estate agents start calling you directly. You develop 2-3 regular clients who send consistent work. Income: $2,000-4,000.
              </p>
            </div>

            <div className="border-l-4 border-notary-navy pl-6">
              <h4 className="text-xl font-bold text-notary-navy mb-2">Months 4-6: Steady State</h4>
              <p className="text-gray-700">
                You're now doing 3-5 loan signings per week plus general notary work. You have systems, know your value, and can reliably predict income. $3,000-6,000/month.
              </p>
            </div>
          </div>

          <p className="text-gray-700 mb-8">
            <strong>The key difference between struggling notaries and successful ones?</strong> Successful notaries followed a plan like this, stayed consistent, and didn't give up after week 2.
          </p>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-notary-navy to-blue-900 text-white p-8 my-12 rounded">
            <h3 className="text-2xl font-bold mb-4">Ready to Accelerate Your Success?</h3>
            <p className="text-lg mb-6">
              This 30-day plan works. But if you want to skip straight to the highest-paying work, get loan signing certified NOW.
            </p>
            <p className="text-lg mb-6">
              <strong>Loan Signing System</strong> graduates report:
            </p>
            <ul className="space-y-2 mb-6">
              <li>✓ First signing within 2-4 weeks of certification</li>
              <li>✓ $75-200 per signing vs. $15-50 for general work</li>
              <li>✓ Title companies actively seeking certified agents</li>
              <li>✓ Clear path to $3,000-6,000+ monthly</li>
            </ul>
            <a 
              href="http://loansigningsystem.com/?afmc=x5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-notary-navy px-8 py-4 font-bold text-lg hover:bg-gray-100 transition shadow-lg border-2 border-notary-gold"
            >
              Get Certified with Loan Signing System
            </a>
          </div>

          {/* Related Resources */}
          <div className="border-t-2 border-gray-200 pt-8 mt-12">
            <h3 className="text-2xl font-bold text-notary-navy mb-6">Essential Resources Referenced in This Plan:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/how-much-to-charge-mobile-notary" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
                <h4 className="font-bold text-notary-navy mb-2">Notary Pricing Guide</h4>
                <p className="text-gray-600 text-sm">What to charge for every service type</p>
              </Link>
              <Link href="/mobile-notary-supplies" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
                <h4 className="font-bold text-notary-navy mb-2">Mobile Notary Supplies Checklist</h4>
                <p className="text-gray-600 text-sm">Everything you need to get started</p>
              </Link>
              <Link href="/free-marketing-sites-notaries" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
                <h4 className="font-bold text-notary-navy mb-2">10 Free Marketing Sites</h4>
                <p className="text-gray-600 text-sm">Where to list your business (with NAP tips)</p>
              </Link>
              <Link href="/target-industries-for-notaries" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
                <h4 className="font-bold text-notary-navy mb-2">15 Target Industries</h4>
                <p className="text-gray-600 text-sm">Where to find your best clients</p>
              </Link>
              <Link href="/document-types-notaries-glossary" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
                <h4 className="font-bold text-notary-navy mb-2">Document Types Glossary</h4>
                <p className="text-gray-600 text-sm">Every document you'll encounter explained</p>
              </Link>
              <Link href="/best-printers-for-notaries" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
                <h4 className="font-bold text-notary-navy mb-2">Best Printers for Notaries</h4>
                <p className="text-gray-600 text-sm">Dual-tray printers for loan signing scan-backs</p>
              </Link>
              <Link href="/smart-money-management-for-notaries" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
  <h4 className="font-bold text-notary-navy mb-2">Smart Money Management for Mobile Notaries</h4>
  <p className="text-gray-600 text-sm">Business accounts, expense tracking, tax deductions, and quarterly planning</p>
</Link>
            </div>
          </div>

        </div>
      </article>
    </div>
  );
}
