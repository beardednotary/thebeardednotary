import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobile Notary Supplies Checklist | The Bearded Notary',
  description: 'Complete checklist of 12 essential supplies every mobile notary needs to succeed. From sequential journals to dual tray laser printers.',
  openGraph: {
    title: 'Mobile Notary Supplies Checklist',
    description: 'Complete checklist of 12 essential supplies every mobile notary needs to succeed. From sequential journals to dual tray laser printers.',
    images: ['/images/mobile-notary-supplies-featured.png'],
  },
};

export default function MobileNotarySupplies() {
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
            Mobile Notary Supplies Checklist
          </h1>
          <p className="text-xl text-gray-700">
            Mobile notaries carry their gear with them from signing to signing, and it is important to have all 
            your mobile notary supplies with you for each appointment. As a mobile notary, you never want 
            to get to your appointment and not have what you need. Here's a list of the 12 best mobile 
            notary supplies you'll need to succeed.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          
          {/* Featured Image */}
          <div className="my-8">
            <img 
              src="/images/mobile-notary-supplies-featured.png"
              alt="Mobile Notary Supplies Checklist - Everything you need to start your essential business and make money on your schedule"
              className="w-full max-w-2xl mx-auto"
            />
          </div>

          <p className="text-gray-700 mb-8">
            Just beginning your Notary Public business?{' '}
            <Link href="/notary-business-resources" className="text-notary-gold hover:underline">
              Click here
            </Link>{' '}
            for a list of resources to take your Notary Public business to the next level.
          </p>

          {/* Supply 1 */}
          <div className="mb-12 border-b pb-8">
            <h2 className="text-2xl font-bold text-notary-navy mb-4">
              Notary Sequential Journal
            </h2>
            <p className="text-gray-700 mb-4">
              This is the item to have for a mobile notary. Most states and jurisdictions require that a notary 
              public carries and records all acts that they perform in a sequential journal. Keeping diligent 
              records of notarial acts provides security for the notary, as notarial acts are public records and 
              subpoenas can be issued for the review of notarial acts.
            </p>
            <p className="text-gray-700 mb-4">
              Not sure if your state requires you to keep a sequential journal? The National Notary Association 
              highly recommends you carry one, even if not required by law.
            </p>
            <a 
              href="https://amzn.to/3YourAffiliateLink" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-notary-navy text-white px-6 py-3 font-semibold hover:bg-opacity-90 transition"
            >
              View on Amazon
            </a>
          </div>

          {/* Supply 2 */}
          <div className="mb-12 border-b pb-8">
            <h2 className="text-2xl font-bold text-notary-navy mb-4">
              Business Cards
            </h2>
            <p className="text-gray-700 mb-4">
              When starting a mobile notary business, you should never, EVER, leave the house without your 
              mobile notary business cards. They are THE primary way for small, mobile businesses to gain 
              word of mouth while just starting out.
            </p>
            <p className="text-gray-700 mb-4">
              Business cards don't need to be super fancy, as cleaner designs help to convey the information you 
              want to share (your name, business name, job title/role/service offered, contact info). VistaPrint 
              is the best-known printing service on the web, with thousands of customizable templates and fast, 
              affordable shipping. You're sure to find just the right business card to help you stand out from the crowd.
            </p>
            <a 
              href="https://www.vistaprint.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-notary-navy text-white px-6 py-3 font-semibold hover:bg-opacity-90 transition"
            >
              Get Business Cards
            </a>
          </div>

          {/* Supply 3 */}
          <div className="mb-12 border-b pb-8">
            <h2 className="text-2xl font-bold text-notary-navy mb-4">
              Messenger Bag/Briefcase
            </h2>
            <p className="text-gray-700 mb-4">
              The briefcase is another important piece of equipment for any serious mobile notary. Not only 
              do they provide security for your sequential journal and equipment, but they are quite often 
              required for many mobile notaries public to have.
            </p>
            <p className="text-gray-700 mb-4">
              When shopping for a good locking briefcase there are several things to consider: key/passcode access, 
              portable power supply for tablets/scanners, ease of use and carrying, etc. There are any number of 
              locking briefcases online in all sizes and styles. You're sure to find one that you love and that 
              works best for you.
            </p>
            <a 
              href="https://amzn.to/3YourAffiliateLink" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-notary-navy text-white px-6 py-3 font-semibold hover:bg-opacity-90 transition"
            >
              Shop Briefcases
            </a>
          </div>

          {/* Supply 4 */}
          <div className="mb-12 border-b pb-8">
            <h2 className="text-2xl font-bold text-notary-navy mb-4">
              Self-Inking Notary Stamp
            </h2>
            <p className="text-gray-700 mb-4">
              A requirement for all notaries, ordering your stamp is one of the last steps before beginning 
              work. Order your self-inking stamp from Amazon is very easy. Just order it and the seller will 
              follow up with you to walk you through the steps needed to have it made.
            </p>
            <a 
              href="https://amzn.to/3YourAffiliateLink" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-notary-navy text-white px-6 py-3 font-semibold hover:bg-opacity-90 transition"
            >
              Order Your Stamp
            </a>
          </div>

          {/* Supply 5 */}
          <div className="mb-12 border-b pb-8">
            <h2 className="text-2xl font-bold text-notary-navy mb-4">
              Stapler/Staple Remover
            </h2>
            <p className="text-gray-700 mb-4">
              Very useful for keeping documents organized, a stapler with a built-in staple remover is a 
              must have item for mobile notaries. You don't need a full-size desktop stapler, as carrying that 
              around will add unnecessary weight to your supply kit. A small, handheld stapler and remover 
              are all you need to keep documents neat and accessible.
            </p>
            <a 
              href="https://amzn.to/3YourAffiliateLink" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-notary-navy text-white px-6 py-3 font-semibold hover:bg-opacity-90 transition"
            >
              View on Amazon
            </a>
          </div>

          {/* Supply 6 */}
          <div className="mb-12 border-b pb-8">
            <h2 className="text-2xl font-bold text-notary-navy mb-4">
              Inkless Thumbprint Pad
            </h2>
            <p className="text-gray-700 mb-4">
              Many notarizations require a thumbprint for completion. Rather than use an inkpad that dirties 
              fingers, try an inkless thumbprint pad. Easy and no mess!
            </p>
            <a 
              href="https://amzn.to/3YourAffiliateLink" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-notary-navy text-white px-6 py-3 font-semibold hover:bg-opacity-90 transition"
            >
              View on Amazon
            </a>
          </div>

          {/* Supply 7 */}
          <div className="mb-12 border-b pb-8">
            <h2 className="text-2xl font-bold text-notary-navy mb-4">
              Cell Phone
            </h2>
            <p className="text-gray-700 mb-4">
              It should go without saying, but all mobile notaries should carry a cell phone. From booking 
              clients to finding directions to your next client, a good cell phone with reliable service is the 
              lifeblood of a good mobile notary business. Before your first day on duty, put all of the most 
              important numbers into your address book on your phone, or even better, into speed dial so 
              they can be dialed almost immediately.
            </p>
          </div>

          {/* Supply 8 */}
          <div className="mb-12 border-b pb-8">
            <h2 className="text-2xl font-bold text-notary-navy mb-4">
              Cell Phone Mount
            </h2>
            <p className="text-gray-700 mb-4">
              By now, everyone should know that texting and talking on the phone while driving can be 
              dangerous. Mobile notaries are often glued to their phones, so it's a good idea to use a cell 
              phone mount or holder in your car while traveling to client destinations.
            </p>
            <p className="text-gray-700 mb-4">
              A good mount will stay securely in place, allow easy access to charger outlets, and provide a clean 
              line of sight for GPS directions while on the road. A cell phone mount can make life so much easier 
              and keep you comfortable and safe on the road.
            </p>
            <a 
              href="https://amzn.to/3YourAffiliateLink" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-notary-navy text-white px-6 py-3 font-semibold hover:bg-opacity-90 transition"
            >
              Shop Phone Mounts
            </a>
          </div>

          {/* Supply 9 */}
          <div className="mb-12 border-b pb-8">
            <h2 className="text-2xl font-bold text-notary-navy mb-4">
              Digital Camera
            </h2>
            <p className="text-gray-700 mb-4">
              A digital camera can be a useful addition to a mobile notary's supply kit. While not required in 
              notarial acts or loan signings, a digital camera could be quite beneficial for those looking to 
              expand their earnings by serving as a property inspector.
            </p>
            <p className="text-gray-700 mb-4">
              These jobs require very small commitments and pay pretty well. As a property inspector you will take 
              pictures of business locations, fill out reports and submit your report to insurance agents/property owners.
            </p>
            <a 
              href="https://amzn.to/3YourAffiliateLink" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-notary-navy text-white px-6 py-3 font-semibold hover:bg-opacity-90 transition"
            >
              Shop Cameras
            </a>
          </div>

          {/* Supply 10 */}
          <div className="mb-12 border-b pb-8">
            <h2 className="text-2xl font-bold text-notary-navy mb-4">
              Tablet
            </h2>
            <p className="text-gray-700 mb-4">
              At this point in time, everyone should understand the value a tablet adds to a small, mobile 
              business. From sending emails on the go, to managing your website, to collecting customer 
              payments, a tablet makes life easier for mobile businesses.
            </p>
            <p className="text-gray-700 mb-4">
              Point-of-Sale services such as Square make payment processing easy and give mobile notaries an 
              opportunity to diversify their income.
            </p>
            <a 
              href="https://amzn.to/3YourAffiliateLink" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-notary-navy text-white px-6 py-3 font-semibold hover:bg-opacity-90 transition"
            >
              Shop Tablets
            </a>
          </div>

          {/* Supply 11 */}
          <div className="mb-12 border-b pb-8">
            <h2 className="text-2xl font-bold text-notary-navy mb-4">
              Portable Document Scanner
            </h2>
            <p className="text-gray-700 mb-4">
              A portable document scanner is a very handy tool to have, ESPECIALLY as a loan signing 
              agent. During loan signings, two copies are produced: the borrower copy and the lender copy. 
              After completion of signing the borrower receives their copy and you send the lender's copy 
              back to them via mail or fax.
            </p>
            <p className="text-gray-700 mb-4">
              A mobile document scanner can provide an on-demand digital backup for both sides of the transaction. 
              It can serve as an important "add-on" service for your mobile notary business.
            </p>
            <a 
              href="https://amzn.to/3YourAffiliateLink" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-notary-navy text-white px-6 py-3 font-semibold hover:bg-opacity-90 transition"
            >
              Shop Scanners
            </a>
          </div>

          {/* Supply 12 */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-notary-navy mb-4">
              Dual Tray Laser Printer
            </h2>
            <p className="text-gray-700 mb-4">
              The Notary Loan Signing Agent's best friend. With more efficient printing than inkjet printers, as 
              well as the capability to print letter and legal size documents, a dual tray laser printer is an 
              absolute essential for budding notary public businesses.
            </p>
            <p className="text-gray-700 mb-4">
              Mark Willis, a prolific loan signing agent and founder of The Loan Signing System, recommends the 
              Brother HL-L5200DW laserjet printer as the best dual tray laser printer for a notary.
            </p>
            <a 
              href="https://amzn.to/3YourAffiliateLink" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-notary-navy text-white px-6 py-3 font-semibold hover:bg-opacity-90 transition"
            >
              View on Amazon
            </a>
          </div>

          <div className="bg-notary-navy text-white p-6 my-8">
            <p className="text-lg">
              With these mobile notary supplies on hand, you should have no problems delivering A+ 
              service to your clients.
            </p>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16 pt-8 border-t-2 border-gray-200">
          <h2 className="text-2xl font-bold text-notary-navy mb-6">More from The Bearded Notary</h2>
          <div className="space-y-3">
            <Link href="/notary-business-resources" className="block text-notary-gold hover:underline font-semibold">
              70+ Notary Business Resources
            </Link>
            <Link href="/essential-notary-books" className="block text-notary-gold hover:underline font-semibold">
              7 Essential Notary Books That Will Benefit Every Notary Business
            </Link>
            <Link href="/how-to-become-a-notary-in-california" className="block text-notary-gold hover:underline font-semibold">
              How to Become a Notary in California
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 p-4 bg-gray-100 text-sm text-gray-600">
          <p>
            The Bearded Notary is a participant in the Amazon Services LLC Associates Program, an affiliate 
            advertising program. Making a purchase through one of these links may earn us a small 
            commission at no cost to you.
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
