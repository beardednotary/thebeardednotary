import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Become a Notary in California in Seven Easy Steps | The Bearded Notary',
  description: 'Complete guide to becoming a commissioned notary public in California. From completing approved education to filing your oath and bond.',
  openGraph: {
    title: 'How to Become a Notary in California in Seven Easy Steps',
    description: 'Complete guide to becoming a commissioned notary public in California. From completing approved education to filing your oath and bond.',
    images: ['/images/how-to-become-a-notary-california-infographic.png'],
  },
};

export default function HowToBecomeNotaryCalifornia() {
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
          <p className="text-sm text-gray-500 mb-2">May 18, 2020</p>
          <h1 className="text-4xl md:text-5xl font-bold text-notary-navy mb-4">
            How to Become a Notary in California in Seven Easy Steps
          </h1>
          <p className="text-xl text-gray-700">
            If you are wondering how to become a notary in California, this post will walk you through the 
            seven necessary steps to become a commissioned notary public.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          
          {/* Featured Infographic */}
          <div className="my-8">
            <img 
              src="/images/how-to-become-a-notary-california-infographic.png"
              alt="How to Become a Notary in California - Complete 7-step infographic showing the process from education to filing oath and bond"
              className="w-full max-w-2xl mx-auto"
            />
          </div>

          {/* Step 1 */}
          <div className="mb-12 border-l-4 border-notary-gold pl-6">
            <h2 className="text-2xl font-bold text-notary-navy mb-4">
              Step 1: Complete Approved Education
            </h2>
            <p className="text-gray-700 mb-4">
              All applicants must complete a six-hour course of study prescribed by the Secretary of State 
              prior to appointment. Current notaries hoping to renew their commissions must complete a 3-
              hour refresher course prior to appointment. The 3-hour refresher course must be completed 
              prior to the expiration of the current notary commission.
            </p>
            <p className="text-gray-700 mb-4">
              According to the California Secretary of State, an approved course of study for notaries public will:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Provide proper training for all notaries public</li>
              <li>Provide a full understanding of the duties and responsibilities of a notary public</li>
              <li>Standardize knowledge for all notaries public</li>
              <li>Reduce complaints and lawsuits due to negligence or misconduct by a notary public</li>
            </ul>
            <p className="text-gray-700">
              The California Secretary of State provides a{' '}
              <a 
                href="https://www.sos.ca.gov/notary/education/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-notary-gold hover:underline"
              >
                full list of approved education vendors
              </a>.
            </p>
          </div>

          {/* Step 2 */}
          <div className="mb-12 border-l-4 border-notary-gold pl-6">
            <h2 className="text-2xl font-bold text-notary-navy mb-4">
              Step 2: Register for the Exam
            </h2>
            <p className="text-gray-700 mb-4">
              All notary public hopefuls must pass a state-approved written exam prior to appointment as a 
              notary public. The exam covers topics outlined in the California State Notary Public Handbook.
            </p>
            <p className="text-gray-700">
              For information about the test and to schedule an exam date, visit{' '}
              <a 
                href="https://www.cpshr.us/exams/notary" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-notary-gold hover:underline"
              >
                CPS HR Consulting
              </a>, the state's contracted provider.
            </p>
          </div>

          {/* Step 3 */}
          <div className="mb-12 border-l-4 border-notary-gold pl-6">
            <h2 className="text-2xl font-bold text-notary-navy mb-4">
              Step 3: Take (and Pass) the Exam
            </h2>
            <p className="text-gray-700 mb-4">
              Familiarize yourself with your course materials and the Notary Public Handbook.
            </p>
            <p className="text-gray-700 mb-4">
              Allow plenty of time for travel in order to arrive early for your exam. Make sure to bring the 
              following items to ensure you can take the test on your scheduled day:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>A current photo identification (e.g. California Driver's License or Identification Card 
              issued by the Department of Motor Vehicles)</li>
              <li>A complete current Notary Public Application form</li>
              <li>A 2″ x 2″ color passport photo of yourself</li>
              <li>The Proof of Completion certificate of your six-hour or three-hour approved education course</li>
              <li>The registration confirmation letter</li>
              <li>The $40.00 exam and application processing fee (or $20.00 exam fee for applicants who 
              previously took the exam and failed). Payment must be by check or money order made 
              payable to the Secretary of State (cash is not accepted at the exam site)</li>
            </ul>
          </div>

          {/* Step 4 */}
          <div className="mb-12 border-l-4 border-notary-gold pl-6">
            <h2 className="text-2xl font-bold text-notary-navy mb-4">
              Step 4: Submit Fingerprints via Live Scan
            </h2>
            <p className="text-gray-700 mb-4">
              After passing your exam, you must pass a required background check by submitting your 
              fingerprints through Live Scan. This must be completed within one year of passing the exam.
            </p>
            <p className="text-gray-700 mb-4">
              To complete the background check:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Download the Request for Live Scan Service form found on the Secretary of State website</li>
              <li>Take the completed form to an authorized Live Scan provider</li>
            </ul>
          </div>

          {/* Step 5 */}
          <div className="mb-12 border-l-4 border-notary-gold pl-6">
            <h2 className="text-2xl font-bold text-notary-navy mb-4">
              Step 5: Await Commission Packet
            </h2>
            <p className="text-gray-700 mb-4">
              This packet will be mailed to your address of record once your application has been approved 
              and you've cleared the background check.
            </p>
            <p className="text-gray-700 mb-4">
              The packet includes:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>A cover letter with instructions</li>
              <li>Filing instructions</li>
              <li>A notary public commission certificate</li>
              <li>Two Notary Public Oath and Certificate of Filing forms</li>
              <li>A Certificate of Authorization to Manufacture Notary Public Seals</li>
              <li>A list of Authorized Manufacturers of Notary Public Seals</li>
            </ul>
          </div>

          {/* Step 6 */}
          <div className="mb-12 border-l-4 border-notary-gold pl-6">
            <h2 className="text-2xl font-bold text-notary-navy mb-4">
              Step 6: Purchase Notary Public Materials
            </h2>
            <p className="text-gray-700 mb-4">
              Once you receive your commission packet, you should purchase the necessary notary public supplies:
            </p>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4">
                <h3 className="font-bold text-notary-navy mb-2">Notary Public Bond</h3>
                <p className="text-gray-700">
                  An official bond must be filed with the county clerk within 30 calendar days of the commission date
                </p>
              </div>
              <div className="bg-gray-50 p-4">
                <h3 className="font-bold text-notary-navy mb-2">E&O Insurance</h3>
                <p className="text-gray-700 mb-2">
                  While not technically required, Errors and Omissions (or E&O) insurance protects you in the case of an 
                  error during signing, oversight, or negligence.
                </p>
                <a 
                  href="https://www.hiscox.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-notary-gold hover:underline"
                >
                  Get a free E&O quote from Hiscox Business Insurance
                </a>
              </div>
              <div className="bg-gray-50 p-4">
                <h3 className="font-bold text-notary-navy mb-2">Notary Public Journal</h3>
                <p className="text-gray-700">
                  A notary public is required to keep and maintain one active sequential journal for all their notarial acts. 
                  Journals may be purchased through local stationary supply stores. Be sure that your journal has sufficient 
                  space for you to record the required entries.
                </p>
              </div>
              <div className="bg-gray-50 p-4">
                <h3 className="font-bold text-notary-navy mb-2">Notary Public Seal</h3>
                <p className="text-gray-700">
                  A list of Secretary of State authorized seal manufacturers will be mailed with the notary public commission 
                  packet. These are the only manufacturers that are authorized to make notary public seals.
                </p>
              </div>
            </div>
            <p className="text-gray-700 mt-4">
              Additional Notary Public supplies can be found in our{' '}
              <Link href="/mobile-notary-supplies" className="text-notary-gold hover:underline">
                Mobile Notary Supplies Checklist
              </Link>.
            </p>
          </div>

          {/* Step 7 */}
          <div className="mb-12 border-l-4 border-notary-gold pl-6">
            <h2 className="text-2xl font-bold text-notary-navy mb-4">
              Step 7: File Notary Public Oath & Bond
            </h2>
            <p className="text-gray-700 mb-4">
              All newly-commissioned notaries public must file an oath of office and bond with the county 
              clerk's office in the county where their principal place of business is located. This needs to be 
              completed within 30 calendar days from the commencement date of the commission. This 30 
              day period cannot be extended.
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <p className="text-gray-800 font-semibold">
                It is recommended that the oath and bond be submitted in person to guarantee timely filing.
              </p>
            </div>
          </div>

          <div className="bg-notary-navy text-white p-8 my-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Congratulations!</h3>
            <p className="text-lg">
              You're now ready to start your career as a California Notary Public.
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
            <Link href="/notary-business-resources" className="block text-notary-gold hover:underline font-semibold">
              85+ Notary Business Resources
            </Link>
            <Link href="/essential-notary-books" className="block text-notary-gold hover:underline font-semibold">
              7 Essential Notary Books That Will Benefit Every Notary Business
            </Link>
          </div>
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
