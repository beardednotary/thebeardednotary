import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Become a Notary in California: Complete 2026 Guide (Cost, Timeline, Exam) | The Bearded Notary',
  description: 'Complete guide to becoming a California notary in 2026. Total cost: $400-600. Timeline: 6-8 weeks. Exam pass rate: 65%. Step-by-step process, study tips, and what happens after.',
  openGraph: {
    title: 'How to Become a Notary in California: Complete 2026 Guide',
    description: 'Cost breakdown, timeline, exam tips, and step-by-step process to become a California notary public.',
    images: ['/images/how-to-become-a-notary-california-infographic.png'],
  },
};

export default function HowToBecomeNotaryCalifornia() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-notary-navy text-white py-6">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/" className="text-notary-gold hover:underline text-sm mb-2 block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold">
            How to Become a Notary in California: Complete 2026 Guide
          </h1>
        </div>
      </header>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        
        <div className="prose prose-lg max-w-none">
          
          <p className="text-xl text-gray-700 mb-8 font-semibold">
            Becoming a notary public in California takes 6-8 weeks and costs $400-600. You'll need to complete a 6-hour course, pass a state exam, clear a background check, and file your commission. This comprehensive guide walks you through every step.
          </p>

          <div className="bg-blue-50 border-2 border-blue-500 p-8 mb-8 rounded">
            <h2 className="text-2xl font-bold text-notary-navy mb-4">Quick Overview: California Notary Process</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-notary-navy mb-3">Basic Requirements:</h3>
                <ul className="space-y-1 text-gray-700">
                  <li>✓ 18 years or older</li>
                  <li>✓ California legal resident</li>
                  <li>✓ Pass background check</li>
                  <li>✓ Pass state exam (70% minimum)</li>
                  <li>✓ Complete 6-hour course</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-notary-navy mb-3">Time & Cost:</h3>
                <ul className="space-y-1 text-gray-700">
                  <li>✓ Total timeline: 6-8 weeks</li>
                  <li>✓ Total cost: $400-600</li>
                  <li>✓ Commission: 4 years</li>
                  <li>✓ Exam pass rate: ~65%</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="my-8">
            <img 
              src="/images/how-to-become-a-notary-california-featured.png"
              alt="How to Become a Notary in California - Complete process infographic"
              className="w-full max-w-2xl mx-auto"
            />
          </div>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">Why Become a California Notary?</h2>

          <p className="text-gray-700 mb-6">
            California is one of the best states for notary income. Here's why:
          </p>

          <div className="bg-gray-50 p-6 mb-8 rounded">
            <h3 className="text-xl font-bold text-notary-navy mb-4">California Notary Advantages</h3>
            <ul className="space-y-3 text-gray-700">
              <li>
                <strong>$15 per signature</strong> - Highest maximum fee in the nation (tied with Washington/Nevada)
              </li>
              <li>
                <strong>40 million residents</strong> - Massive population = constant demand
              </li>
              <li>
                <strong>Active real estate market</strong> - More home sales = more notarizations
              </li>
              <li>
                <strong>Unlimited travel fees</strong> - Mobile notaries add $25-75 per appointment
              </li>
              <li>
                <strong>Flexible income</strong> - Part-time side hustle or full-time career
              </li>
            </ul>
          </div>

          <p className="text-gray-700 mb-8">
            <strong>Income potential:</strong> Part-time mobile notaries earn $1,500-3,000/month. Full-time loan signing agents can earn $6,000-12,000/month. See our <Link href="/how-much-to-charge-mobile-notary" className="text-notary-gold hover:underline">complete pricing guide</Link>.
          </p>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">California Notary Requirements</h2>

          <p className="text-gray-700 mb-6">
            Before you begin the process, make sure you meet these eligibility requirements:
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-white border-2 border-notary-gold p-6 rounded">
              <h3 className="text-xl font-bold text-notary-navy mb-3">✓ Age: 18 or Older</h3>
              <p className="text-gray-700">
                You must be at least 18 years old on the date you submit your application.
              </p>
            </div>

            <div className="bg-white border-2 border-notary-gold p-6 rounded">
              <h3 className="text-xl font-bold text-notary-navy mb-3">✓ Residency: California Legal Resident</h3>
              <p className="text-gray-700">
                You must be a legal resident of California. You do NOT need to be a U.S. citizen, but you must have legal presence in the state.
              </p>
            </div>

            <div className="bg-white border-2 border-notary-gold p-6 rounded">
              <h3 className="text-xl font-bold text-notary-navy mb-3">✓ Background: Pass Criminal Check</h3>
              <p className="text-gray-700 mb-3">
                You must pass a background check via Live Scan fingerprinting.
              </p>
              <p className="text-gray-700 mb-2"><strong>Disqualifying offenses:</strong></p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Any felony conviction</li>
                <li>Conviction involving dishonesty, fraud, or deceit</li>
                <li>Conviction for a crime involving moral turpitude</li>
                <li>Revoked notary commission in CA or another state</li>
              </ul>
              <p className="text-gray-700 mt-3 text-sm italic">
                Note: Minor traffic violations and parking tickets do NOT disqualify you.
              </p>
            </div>

            <div className="bg-white border-2 border-notary-gold p-6 rounded">
              <h3 className="text-xl font-bold text-notary-navy mb-3">✓ Education: 6-Hour Approved Course</h3>
              <p className="text-gray-700">
                Must complete a state-approved 6-hour notary education course before taking the exam. Renewals require a 3-hour refresher course.
              </p>
            </div>

            <div className="bg-white border-2 border-notary-gold p-6 rounded">
              <h3 className="text-xl font-bold text-notary-navy mb-3">✓ Exam: Pass with 70% or Higher</h3>
              <p className="text-gray-700">
                Must score at least 70% (42 out of 60 questions correct) on the California Notary Public Exam.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">How Much Does It Cost to Become a California Notary?</h2>

          <p className="text-gray-700 mb-6">
            Expect to spend <strong>$400-600 total</strong> to become a California notary. Here's the complete breakdown:
          </p>

          <div className="bg-white border-2 border-gray-300 p-6 mb-8 rounded">
            <h3 className="text-xl font-bold text-notary-navy mb-4">Complete Cost Breakdown</h3>
            <table className="w-full text-gray-700">
              <thead>
                <tr className="border-b-2 border-notary-navy">
                  <th className="text-left py-2 pr-4">Item</th>
                  <th className="text-left py-2 pr-4">Cost</th>
                  <th className="text-left py-2 pr-4">Required?</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-300">
                  <td className="py-2 pr-4">6-Hour Education Course</td>
                  <td className="py-2 pr-4">$50-150</td>
                  <td className="py-2 pr-4">Yes</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-2 pr-4">Exam + Application Fee</td>
                  <td className="py-2 pr-4">$40</td>
                  <td className="py-2 pr-4">Yes</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-2 pr-4">Live Scan Fingerprinting</td>
                  <td className="py-2 pr-4">$70-100</td>
                  <td className="py-2 pr-4">Yes</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-2 pr-4">Notary Bond ($15,000)</td>
                  <td className="py-2 pr-4">$40-60</td>
                  <td className="py-2 pr-4">Yes</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-2 pr-4">Notary Stamp/Seal</td>
                  <td className="py-2 pr-4">$25-40</td>
                  <td className="py-2 pr-4">Yes</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-2 pr-4">Notary Journal</td>
                  <td className="py-2 pr-4">$15-25</td>
                  <td className="py-2 pr-4">Yes</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-2 pr-4">E&O Insurance (recommended)</td>
                  <td className="py-2 pr-4">$50-150/year</td>
                  <td className="py-2 pr-4">No, but highly recommended</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-2 pr-4">Business Cards</td>
                  <td className="py-2 pr-4">$20-50</td>
                  <td className="py-2 pr-4">No</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-2 pr-4">Additional Supplies</td>
                  <td className="py-2 pr-4">$30-50</td>
                  <td className="py-2 pr-4">Recommended</td>
                </tr>
                <tr className="bg-notary-gold bg-opacity-20 font-bold">
                  <td className="py-3 pr-4">TOTAL</td>
                  <td className="py-3 pr-4">$400-600</td>
                  <td className="py-3 pr-4">-</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 mb-8">
            <strong>Good news:</strong> Your commission lasts 4 years. If you complete just 10 mobile notarizations at $50 each, you've covered your costs. Everything after that is profit.
          </p>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">How Long Does It Take to Become a California Notary?</h2>

          <p className="text-gray-700 mb-6">
            <strong>Total timeline: 6-8 weeks</strong> from start to finish if you move efficiently. Here's the week-by-week breakdown:
          </p>

          <div className="bg-gray-50 p-6 mb-8 rounded">
            <h3 className="text-xl font-bold text-notary-navy mb-4">Timeline Breakdown</h3>
            
            <div className="space-y-4">
              <div className="border-l-4 border-notary-gold pl-4">
                <h4 className="font-bold text-notary-navy">Week 1: Education</h4>
                <p className="text-gray-700">Complete 6-hour course (can finish in 1-2 days online)</p>
              </div>

              <div className="border-l-4 border-notary-gold pl-4">
                <h4 className="font-bold text-notary-navy">Week 2: Study & Schedule Exam</h4>
                <p className="text-gray-700">Study course materials + Notary Public Handbook. Schedule exam (usually 1-2 weeks out)</p>
              </div>

              <div className="border-l-4 border-notary-gold pl-4">
                <h4 className="font-bold text-notary-navy">Week 3: Take Exam</h4>
                <p className="text-gray-700">Take and pass exam. Complete Live Scan fingerprinting same week.</p>
              </div>

              <div className="border-l-4 border-notary-gold pl-4">
                <h4 className="font-bold text-notary-navy">Weeks 4-6: Processing</h4>
                <p className="text-gray-700">Secretary of State reviews application and background check (2-4 weeks)</p>
              </div>

              <div className="border-l-4 border-notary-gold pl-4">
                <h4 className="font-bold text-notary-navy">Week 7: Commission Packet Arrives</h4>
                <p className="text-gray-700">Purchase bond and supplies. File oath and bond at county clerk (must be within 30 days)</p>
              </div>

              <div className="border-l-4 border-notary-gold pl-4">
                <h4 className="font-bold text-notary-navy">Week 8: Start Working!</h4>
                <p className="text-gray-700">You're officially commissioned and can begin notarizing</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
            <p className="text-gray-800 font-semibold">
              ⚠️ CRITICAL DEADLINE: You have 30 calendar days from your commission start date to file your oath and bond. Miss this deadline and your commission is void - you'll have to start over.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">Step-by-Step: How to Become a California Notary</h2>

          <p className="text-gray-700 mb-6">
            Now let's walk through each step in detail:
          </p>

          {/* Step 1 */}
          <div className="mb-12 bg-gray-50 p-8 rounded">
            <div className="flex items-start mb-4">
              <div className="bg-notary-gold text-white font-bold text-2xl rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold text-notary-navy mb-2">
                  Complete 6-Hour Approved Education Course
                </h3>
              </div>
            </div>

            <p className="text-gray-700 mb-4">
              All first-time notary applicants must complete a 6-hour course approved by the California Secretary of State. (Renewals only need 3 hours.)
            </p>

            <div className="bg-white p-4 mb-4">
              <h4 className="font-bold text-notary-navy mb-2">What the Course Covers:</h4>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>California notary laws and regulations</li>
                <li>Proper notarization procedures</li>
                <li>Types of notarial acts (acknowledgments, jurats, oaths)</li>
                <li>How to identify signers and verify documents</li>
                <li>Journal requirements and record-keeping</li>
                <li>Common mistakes and how to avoid them</li>
                <li>Ethics and liability</li>
              </ul>
            </div>

            <div className="bg-white p-4 mb-4">
              <h4 className="font-bold text-notary-navy mb-2">Where to Take the Course:</h4>
              <p className="text-gray-700 mb-2">
                The Secretary of State maintains a <a href="https://www.sos.ca.gov/notary/education/" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline">list of approved education vendors</a>. Popular options:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li><strong>Online courses:</strong> $50-100, complete at your own pace</li>
                <li><strong>In-person classes:</strong> $100-150, one-day workshops</li>
                <li><strong>Recommended:</strong> National Notary Association (NNA) - comprehensive, well-reviewed</li>
              </ul>
            </div>

            <p className="text-gray-700 mb-4">
              <strong>Time commitment:</strong> 6 hours total. Online courses can be completed in 1-2 days.
            </p>

            <p className="text-gray-700">
              <strong>Proof of completion:</strong> You'll receive a certificate that you MUST bring to the exam. Keep this safe!
            </p>
          </div>

          {/* Step 2 */}
          <div className="mb-12 bg-gray-50 p-8 rounded">
            <div className="flex items-start mb-4">
              <div className="bg-notary-gold text-white font-bold text-2xl rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold text-notary-navy mb-2">
                  Schedule Your Notary Exam
                </h3>
              </div>
            </div>

            <p className="text-gray-700 mb-4">
              The California Notary Public Exam is administered by <a href="https://www.cpshr.us/exams/notary" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline">CPS HR Consulting</a>, the state's contracted testing provider.
            </p>

            <div className="bg-white p-4 mb-4">
              <h4 className="font-bold text-notary-navy mb-2">How to Schedule:</h4>
              <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                <li>Visit <a href="https://www.cpshr.us/exams/notary" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline">cpshr.us/exams/notary</a></li>
                <li>Select "Schedule an Exam"</li>
                <li>Choose your preferred test location (available statewide)</li>
                <li>Pick a date (exams offered multiple times per week)</li>
                <li>Pay the $40 exam + application fee</li>
              </ol>
            </div>

            <p className="text-gray-700 mb-4">
              <strong>Exam availability:</strong> Tests are offered year-round at multiple locations throughout California. Most applicants can find a slot within 1-2 weeks.
            </p>

            <p className="text-gray-700">
              <strong>Pro tip:</strong> Schedule your exam 1-2 weeks out to give yourself time to study, but not so far out that you forget the material.
            </p>
          </div>

          {/* Step 3 */}
          <div className="mb-12 bg-gray-50 p-8 rounded">
            <div className="flex items-start mb-4">
              <div className="bg-notary-gold text-white font-bold text-2xl rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold text-notary-navy mb-2">
                  Study for and Pass the Exam
                </h3>
              </div>
            </div>

            <p className="text-gray-700 mb-4">
              The California Notary Public Exam consists of 60 multiple-choice questions. You need to score <strong>70% or higher</strong> (42+ correct answers) to pass.
            </p>

            <div className="bg-blue-50 border-2 border-blue-500 p-6 mb-4">
              <h4 className="font-bold text-notary-navy mb-3">Exam Stats You Should Know:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Pass rate:</strong> Approximately 65% (1 in 3 people fail)</li>
                <li>• <strong>Time limit:</strong> No time limit (most finish in 45-60 minutes)</li>
                <li>• <strong>Retake policy:</strong> Can retake if you fail (costs $20)</li>
                <li>• <strong>Difficulty:</strong> Moderate - requires thorough studying</li>
              </ul>
            </div>

            <div className="bg-white p-4 mb-4">
              <h4 className="font-bold text-notary-navy mb-2">What's on the Exam:</h4>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>California notary laws and procedures (40%)</li>
                <li>Types of notarial acts and when to use them (25%)</li>
                <li>Proper identification requirements (15%)</li>
                <li>Journal entries and record-keeping (10%)</li>
                <li>Ethics, liability, and misconduct (10%)</li>
              </ul>
            </div>

            <div className="bg-white p-4 mb-4">
              <h4 className="font-bold text-notary-navy mb-2">How to Study Effectively:</h4>
              <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                <li>
                  <strong>Download the Notary Public Handbook</strong> - Available free from the <a href="https://www.sos.ca.gov/notary/" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline">California Secretary of State</a>. This is your primary study resource.
                </li>
                <li>
                  <strong>Review your course materials</strong> - Go through your 6-hour course notes
                </li>
                <li>
                  <strong>Take practice tests</strong> - Your course provider likely includes practice exams. Take them multiple times until you're consistently scoring 80%+
                </li>
                <li>
                  <strong>Focus on high-weight topics</strong> - Know the difference between acknowledgments, jurats, and oaths. Understand ID requirements cold.
                </li>
                <li>
                  <strong>Study for 1-2 weeks</strong> - 30-60 minutes per day is sufficient for most people
                </li>
              </ol>
            </div>

            <div className="bg-white p-4 mb-4">
              <h4 className="font-bold text-notary-navy mb-2">What to Bring to the Exam:</h4>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Valid photo ID (CA driver's license or DMV ID card)</li>
                <li>Completed Notary Public Application form</li>
                <li>2" x 2" color passport photo</li>
                <li>Proof of completion certificate from your 6-hour course</li>
                <li>Registration confirmation</li>
                <li>$40 fee (check or money order - NO CASH)</li>
              </ul>
            </div>

            <p className="text-gray-700">
              <strong>Exam day tips:</strong> Arrive 15 minutes early. Read each question carefully. Don't overthink - the answers are usually straightforward. If you don't know an answer, skip it and come back.
            </p>
          </div>

          {/* Step 4 */}
          <div className="mb-12 bg-gray-50 p-8 rounded">
            <div className="flex items-start mb-4">
              <div className="bg-notary-gold text-white font-bold text-2xl rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-2xl font-bold text-notary-navy mb-2">
                  Complete Live Scan Fingerprinting
                </h3>
              </div>
            </div>

            <p className="text-gray-700 mb-4">
              After passing your exam, you must complete a background check via Live Scan fingerprinting. This must be done <strong>within one year</strong> of passing the exam.
            </p>

            <div className="bg-white p-4 mb-4">
              <h4 className="font-bold text-notary-navy mb-2">How to Complete Live Scan:</h4>
              <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                <li>Download the <a href="https://www.sos.ca.gov/notary/" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline">Request for Live Scan Service form</a> from the Secretary of State website</li>
                <li>Complete the form (include your OCA number from your exam results)</li>
                <li>Find an authorized Live Scan provider near you (police stations, UPS stores, private fingerprinting services)</li>
                <li>Bring valid photo ID and the completed form</li>
                <li>Pay the Live Scan fee ($70-100 depending on provider)</li>
                <li>Results are sent electronically to the Secretary of State</li>
              </ol>
            </div>

            <p className="text-gray-700 mb-4">
              <strong>Processing time:</strong> Background check results are usually processed within 1-3 weeks.
            </p>

            <p className="text-gray-700">
              <strong>Pro tip:</strong> Complete your Live Scan the same week you pass your exam to keep momentum going.
            </p>
          </div>

          {/* Step 5 */}
          <div className="mb-12 bg-gray-50 p-8 rounded">
            <div className="flex items-start mb-4">
              <div className="bg-notary-gold text-white font-bold text-2xl rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                5
              </div>
              <div>
                <h3 className="text-2xl font-bold text-notary-navy mb-2">
                  Await Your Commission Packet
                </h3>
              </div>
            </div>

            <p className="text-gray-700 mb-4">
              Once your application is approved and your background check clears, the Secretary of State will mail your commission packet to your address of record.
            </p>

            <div className="bg-white p-4 mb-4">
              <h4 className="font-bold text-notary-navy mb-2">What's in the Commission Packet:</h4>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Cover letter with instructions</li>
                <li>Notary Public Commission Certificate (your official license!)</li>
                <li>Two Notary Public Oath and Certificate of Filing forms</li>
                <li>Certificate of Authorization to Manufacture Notary Public Seals</li>
                <li>List of authorized seal manufacturers</li>
                <li>Filing instructions</li>
              </ul>
            </div>

            <p className="text-gray-700 mb-4">
              <strong>Timeline:</strong> Expect to wait 2-4 weeks after completing Live Scan for your packet to arrive.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <p className="text-gray-800">
                <strong>Important:</strong> Your commission start date is printed on your certificate. You have 30 days from this date to file your oath and bond. The clock is ticking!
              </p>
            </div>
          </div>

          {/* Step 6 */}
          <div className="mb-12 bg-gray-50 p-8 rounded">
            <div className="flex items-start mb-4">
              <div className="bg-notary-gold text-white font-bold text-2xl rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                6
              </div>
              <div>
                <h3 className="text-2xl font-bold text-notary-navy mb-2">
                  Purchase Required Supplies
                </h3>
              </div>
            </div>

            <p className="text-gray-700 mb-4">
              Once you receive your commission packet, immediately purchase your required supplies. You'll need these to file your oath and bond.
            </p>

            <div className="space-y-4">
              <div className="bg-white p-4">
                <h4 className="font-bold text-notary-navy mb-2">1. Notary Bond ($15,000)</h4>
                <p className="text-gray-700 mb-2">
                  <strong>Cost:</strong> $40-60 for 4 years
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Required:</strong> Yes - must be filed with county clerk within 30 days
                </p>
                <p className="text-gray-700">
                  <strong>What it is:</strong> A $15,000 surety bond that protects the public if you make an error. This does NOT protect you - it protects clients.
                </p>
              </div>

              <div className="bg-white p-4">
                <h4 className="font-bold text-notary-navy mb-2">2. E&O Insurance</h4>
                <p className="text-gray-700 mb-2">
                  <strong>Cost:</strong> $50-150/year ($25,000-$100,000 coverage)
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Required:</strong> No, but HIGHLY recommended
                </p>
                <p className="text-gray-700 mb-3">
                  <strong>What it is:</strong> Errors & Omissions insurance protects YOU if you make a mistake. The bond protects the public; E&O protects your personal assets.
                </p>
                <p className="text-gray-700">
                  <strong>Recommendation:</strong> Get at least $25,000 E&O. If you plan to do loan signings, get $100,000 (title companies often require it).
                </p>
              </div>

              <div className="bg-white p-4">
                <h4 className="font-bold text-notary-navy mb-2">3. Notary Stamp/Seal</h4>
                <p className="text-gray-700 mb-2">
                  <strong>Cost:</strong> $25-40
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Required:</strong> Yes
                </p>
                <p className="text-gray-700 mb-3">
                  <strong>Where to buy:</strong> Only from manufacturers on the authorized list included in your commission packet. Do NOT buy from Amazon or random online sellers - your stamp must meet specific California requirements.
                </p>
                <p className="text-gray-700">
                  <strong>Requirements:</strong> Must include your name, commission number, county, and expiration date in the exact format required by law.
                </p>
              </div>

              <div className="bg-white p-4">
                <h4 className="font-bold text-notary-navy mb-2">4. Notary Journal</h4>
                <p className="text-gray-700 mb-2">
                  <strong>Cost:</strong> $15-25
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Required:</strong> Yes - you must keep a sequential journal of ALL notarial acts
                </p>
                <p className="text-gray-700">
                  <strong>Specifications:</strong> Must be bound (not spiral), tamper-evident, with sequential page numbers. Available from notary supply vendors or office supply stores.
                </p>
              </div>
            </div>

            <p className="text-gray-700 mt-4">
              See our complete <Link href="/mobile-notary-supplies" className="text-notary-gold hover:underline">Mobile Notary Supplies Checklist</Link> for additional recommended items (business cards, pens, folders, etc.).
            </p>
          </div>

          {/* Step 7 */}
          <div className="mb-12 bg-gray-50 p-8 rounded">
            <div className="flex items-start mb-4">
              <div className="bg-notary-gold text-white font-bold text-2xl rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                7
              </div>
              <div>
                <h3 className="text-2xl font-bold text-notary-navy mb-2">
                  File Your Oath and Bond at County Clerk
                </h3>
              </div>
            </div>

            <p className="text-gray-700 mb-4">
              This is the final step! You must file your oath of office and notary bond with the county clerk in the county where your principal place of business is located.
            </p>

            <div className="bg-red-50 border-2 border-red-500 p-6 mb-4">
              <p className="text-red-900 font-bold mb-2">
                🚨 CRITICAL DEADLINE: 30 Calendar Days
              </p>
              <p className="text-gray-800">
                You must file your oath and bond within 30 calendar days of your commission start date (printed on your certificate). This deadline CANNOT be extended. Miss it and your commission is void - you'll have to reapply and start over.
              </p>
            </div>

            <div className="bg-white p-4 mb-4">
              <h4 className="font-bold text-notary-navy mb-2">How to File:</h4>
              <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                <li>
                  <strong>Locate your county clerk's office</strong> - Usually in the county courthouse or government building
                </li>
                <li>
                  <strong>Gather required documents:</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Original notary bond from bonding company</li>
                    <li>Completed Oath of Office form (from your commission packet)</li>
                    <li>Your commission certificate (bring original + photocopy)</li>
                    <li>Valid photo ID</li>
                  </ul>
                </li>
                <li>
                  <strong>Visit in person</strong> - While some counties accept mail filings, in-person is STRONGLY recommended to ensure timely processing
                </li>
                <li>
                  <strong>Take oath before county clerk</strong> - You'll raise your right hand and swear the oath
                </li>
                <li>
                  <strong>Pay filing fee</strong> - Varies by county, typically $20-50
                </li>
                <li>
                  <strong>Receive filed stamp on your documents</strong> - This is proof you're officially commissioned
                </li>
              </ol>
            </div>

            <p className="text-gray-700 mb-4">
              <strong>Pro tip:</strong> Call your county clerk's office ahead of time to confirm:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Office hours and location</li>
              <li>Accepted payment methods</li>
              <li>Any additional requirements</li>
            </ul>

            <div className="bg-notary-gold bg-opacity-10 border-2 border-notary-gold p-6">
              <h4 className="font-bold text-notary-navy mb-3">🎉 Congratulations!</h4>
              <p className="text-gray-700">
                Once you file your oath and bond, you are officially a commissioned California Notary Public! You can immediately begin performing notarizations.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">What to Do After You're Commissioned</h2>

          <p className="text-gray-700 mb-6">
            You're now a California notary. Here's what to do next:
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-gray-50 p-6 rounded">
              <h3 className="text-xl font-bold text-notary-navy mb-3">1. Set Up Your Business Systems</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Create a Google Business Profile (free, gets you found in "notary near me" searches)</li>
                <li>Order business cards with your name, phone, email, and "California Notary Public"</li>
                <li>Set up payment methods (Venmo, Zelle, Square for credit cards)</li>
                <li>Create a simple pricing structure (see our <Link href="/how-much-to-charge-mobile-notary" className="text-notary-gold hover:underline">pricing guide</Link>)</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded">
              <h3 className="text-xl font-bold text-notary-navy mb-3">2. Market Your Services</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>List yourself on free sites like Yelp, Bing, Nextdoor (see our <Link href="/free-marketing-sites-notaries" className="text-notary-gold hover:underline">10 free marketing sites</Link>)</li>
                <li>Join local Facebook groups and introduce yourself</li>
                <li>Network with real estate agents, law firms, senior living facilities</li>
                <li>Post on Craigslist under Legal Services</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded">
              <h3 className="text-xl font-bold text-notary-navy mb-3">3. Consider Loan Signing Certification</h3>
              <p className="text-gray-700 mb-3">
                General notaries earn $15-50 per appointment. Loan signing agents earn $100-200 per signing. The training pays for itself in 2-3 signings.
              </p>
              <p className="text-gray-700">
                Learn more: <Link href="/why-now-is-perfect-time-loan-signing-agent" className="text-notary-gold hover:underline">Why 2026 is the Perfect Time to Become a Loan Signing Agent</Link>
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded">
              <h3 className="text-xl font-bold text-notary-navy mb-3">4. Get Your First Client</h3>
              <p className="text-gray-700">
                Start by offering to notarize documents for friends, family, coworkers (charge them - you need the practice and the reviews!). Ask them to leave you a Google review after.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-notary-navy to-blue-900 text-white p-8 my-12 rounded text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Build Your Notary Business?</h3>
            <p className="text-lg mb-6">
              Follow our 30-day action plan for new notaries. Day-by-day checklist to go from "just commissioned" to "earning $1,000+ per month."
            </p>
            <Link 
              href="/first-30-days-new-notary"
              className="inline-block bg-notary-gold text-notary-navy px-8 py-4 font-bold text-lg hover:bg-opacity-90 transition"
            >
              Read the 30-Day Action Plan
            </Link>
          </div>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">How to Renew Your California Notary Commission</h2>

          <p className="text-gray-700 mb-6">
            Your California notary commission is valid for 4 years. You can begin the renewal process up to 6 months before your expiration date.
          </p>

          <div className="bg-gray-50 p-6 mb-8 rounded">
            <h3 className="text-xl font-bold text-notary-navy mb-4">Renewal Process (Shorter than Initial)</h3>
            <ol className="list-decimal pl-6 text-gray-700 space-y-3">
              <li>
                <strong>Complete 3-hour refresher course</strong> (instead of 6 hours) - must be done before your current commission expires
              </li>
              <li>
                <strong>Take and pass the exam</strong> - same 60-question test, 70% to pass
              </li>
              <li>
                <strong>Complete Live Scan</strong> - background check required again
              </li>
              <li>
                <strong>Receive new commission packet</strong>
              </li>
              <li>
                <strong>Purchase new bond and supplies</strong> (new stamp with updated expiration date)
              </li>
              <li>
                <strong>File oath and bond</strong> - same 30-day deadline
              </li>
            </ol>
          </div>

          <p className="text-gray-700 mb-4">
            <strong>Total renewal cost:</strong> $300-450 (slightly less than initial because the course is shorter)
          </p>

          <p className="text-gray-700 mb-8">
            <strong>Pro tip:</strong> Start your renewal 3-4 months before expiration to avoid any gap in your commission. This is especially important if you rely on notary income.
          </p>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">Common Mistakes to Avoid</h2>

          <div className="space-y-4 mb-8">
            <div className="bg-red-50 border-l-4 border-red-500 p-6">
              <h4 className="font-bold text-red-900 mb-2">❌ Missing the 30-Day Filing Deadline</h4>
              <p className="text-gray-700">
                This is the #1 mistake. File your oath and bond IMMEDIATELY when you receive your commission packet. Don't wait until day 29. If you miss this deadline, your commission is void and you start over from scratch.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6">
              <h4 className="font-bold text-red-900 mb-2">❌ Buying Unauthorized Stamps</h4>
              <p className="text-gray-700">
                Only purchase stamps from manufacturers on the Secretary of State's authorized list (included in your commission packet). Amazon stamps are NOT acceptable and using one can result in discipline.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6">
              <h4 className="font-bold text-red-900 mb-2">❌ Not Getting E&O Insurance</h4>
              <p className="text-gray-700">
                Your bond protects the public, not you. One lawsuit could wipe out your personal savings. Get E&O insurance ($50-150/year) before your first notarization.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6">
              <h4 className="font-bold text-red-900 mb-2">❌ Not Studying Enough for the Exam</h4>
              <p className="text-gray-700">
                35% of test-takers fail. Don't be overconfident. Study for 1-2 weeks, take practice exams, and aim for 80%+ on practice tests before taking the real exam.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6">
              <h4 className="font-bold text-red-900 mb-2">❌ Notarizing for Family Without Proper Procedure</h4>
              <p className="text-gray-700">
                Just because they're family doesn't mean you can skip steps. You CANNOT notarize for anyone with a financial interest in the document. Follow all ID verification and journal requirements - every time.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">Frequently Asked Questions</h2>

          <div className="space-y-6 mb-12">
            
            <div className="bg-gray-50 p-6 rounded">
              <h3 className="text-xl font-bold text-notary-navy mb-3">How long does it take to become a notary in California?</h3>
              <p className="text-gray-700">
                6-8 weeks total from starting your education course to receiving your commission. This includes 1 week for the course, 1-2 weeks studying and scheduling, taking the exam, 2-4 weeks for background check and processing, and 1 week to file your oath and bond.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded">
              <h3 className="text-xl font-bold text-notary-navy mb-3">How much does it cost to become a notary in California?</h3>
              <p className="text-gray-700">
                $400-600 total. This includes: 6-hour course ($50-150), exam + application fee ($40), Live Scan fingerprinting ($70-100), notary bond ($40-60), stamp ($25-40), journal ($15-25), and optional E&O insurance ($50-150/year).
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded">
              <h3 className="text-xl font-bold text-notary-navy mb-3">What are the requirements to become a notary in California?</h3>
              <p className="text-gray-700">
                You must be: (1) 18 years or older, (2) a legal California resident, (3) pass a criminal background check, (4) complete a 6-hour approved education course, and (5) pass the state exam with 70% or higher.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded">
              <h3 className="text-xl font-bold text-notary-navy mb-3">How hard is the California notary exam?</h3>
              <p className="text-gray-700">
                Moderately challenging. The pass rate is approximately 65%, meaning 35% of test-takers fail. You need to score 70% (42 out of 60 questions correct). With 1-2 weeks of studying using the Notary Public Handbook and practice exams, most people pass on their first attempt.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded">
              <h3 className="text-xl font-bold text-notary-navy mb-3">Can I become a notary if I have a felony?</h3>
              <p className="text-gray-700">
                No. Any felony conviction disqualifies you from becoming a California notary public. Convictions involving dishonesty, fraud, deceit, or moral turpitude also disqualify. Minor misdemeanors and traffic violations generally do not disqualify you.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded">
              <h3 className="text-xl font-bold text-notary-navy mb-3">Do I need to be a US citizen to become a California notary?</h3>
              <p className="text-gray-700">
                No, you do not need to be a U.S. citizen. You must be a legal resident of California, but citizenship is not required.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded">
              <h3 className="text-xl font-bold text-notary-navy mb-3">How much can I make as a California notary?</h3>
              <p className="text-gray-700">
                Part-time mobile notaries typically earn $1,500-3,000/month. Full-time mobile notaries can earn $3,000-6,000/month. Full-time loan signing agents (with specialized training) can earn $6,000-12,000/month. California allows $15 per signature (highest in the nation) plus unlimited travel fees.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded">
              <h3 className="text-xl font-bold text-notary-navy mb-3">How long is a California notary commission valid?</h3>
              <p className="text-gray-700">
                4 years. Your commission start and expiration dates are printed on your certificate. You can begin the renewal process up to 6 months before expiration.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded">
              <h3 className="text-xl font-bold text-notary-navy mb-3">Do I need E&O insurance to become a California notary?</h3>
              <p className="text-gray-700">
                No, E&O (Errors & Omissions) insurance is not legally required in California. However, it is HIGHLY recommended. Your required $15,000 bond protects the public if you make an error - it does not protect you. E&O insurance protects your personal assets. Cost: $50-150/year for $25,000-$100,000 coverage.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded">
              <h3 className="text-xl font-bold text-notary-navy mb-3">What happens if I fail the California notary exam?</h3>
              <p className="text-gray-700">
                You can retake the exam. The retake fee is $20 (instead of the initial $40). There is no limit on how many times you can retake, but you must retake within one year of completing your education course. If you fail multiple times, consider studying more thoroughly or retaking the 6-hour course.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded">
              <h3 className="text-xl font-bold text-notary-navy mb-3">Can I notarize for family members in California?</h3>
              <p className="text-gray-700">
                Maybe. You can notarize for family members UNLESS you have a financial interest in the transaction. For example, you cannot notarize a deed if you're inheriting property, or notarize a loan document if you're a co-borrower. When in doubt, refer the family member to another notary to avoid any appearance of conflict of interest.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded">
              <h3 className="text-xl font-bold text-notary-navy mb-3">Where can I take the California notary course online?</h3>
              <p className="text-gray-700">
                The California Secretary of State maintains a list of approved online education providers at <a href="https://www.sos.ca.gov/notary/education/" target="_blank" rel="noopener noreferrer" className="text-notary-gold hover:underline">sos.ca.gov/notary/education/</a>. Popular options include National Notary Association (NNA), Notary Public Underwriters, and Signing Agent Mentor. Courses cost $50-150 and can be completed in 1-2 days at your own pace.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded">
              <h3 className="text-xl font-bold text-notary-navy mb-3">Do I need to pass the exam to get my notary commission?</h3>
              <p className="text-gray-700">
                Yes, passing the state exam with a score of 70% or higher is mandatory. There are no exemptions - even attorneys and government officials must pass the exam to become notaries in California.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded">
              <h3 className="text-xl font-bold text-notary-navy mb-3">Can I start notarizing immediately after passing my exam?</h3>
              <p className="text-gray-700">
                No. You cannot perform notarizations until you have: (1) received your commission packet from the Secretary of State, (2) purchased your bond and supplies, and (3) filed your oath and bond with the county clerk. Only after filing are you officially commissioned and authorized to notarize.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded">
              <h3 className="text-xl font-bold text-notary-navy mb-3">What is the pass rate for the California notary exam?</h3>
              <p className="text-gray-700">
                Approximately 65% of test-takers pass on their first attempt. This means roughly 1 in 3 people fail. The exam is not particularly difficult if you study properly, but it does require thorough preparation. Plan to study 1-2 weeks using the official Notary Public Handbook and practice exams.
              </p>
            </div>

          </div>

          {/* Final CTA */}
          <div className="bg-notary-navy text-white p-8 my-12 rounded text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-lg mb-6">
              Now that you know the complete process, start with Step 1: Find an approved 6-hour course and get rolling!
            </p>
            <a 
              href="https://www.sos.ca.gov/notary/education/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-notary-gold text-notary-navy px-8 py-4 font-bold text-lg hover:bg-opacity-90 transition mr-4"
            >
              Find Approved Courses
            </a>
            <Link 
              href="/first-30-days-new-notary"
              className="inline-block bg-white text-notary-navy px-8 py-4 font-bold text-lg hover:bg-gray-100 transition border-2 border-notary-gold"
            >
              What to Do After You're Commissioned
            </Link>
          </div>

          {/* Related Resources */}
          <div className="border-t-2 border-gray-200 pt-8 mt-12">
            <h3 className="text-2xl font-bold text-notary-navy mb-6">Related Resources:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/first-30-days-new-notary" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
                <h4 className="font-bold text-notary-navy mb-2">Your First 30 Days as a Mobile Notary</h4>
                <p className="text-gray-600 text-sm">Day-by-day action plan after you're commissioned</p>
              </Link>
              <Link href="/how-much-to-charge-mobile-notary" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
                <h4 className="font-bold text-notary-navy mb-2">California Notary Pricing Guide</h4>
                <p className="text-gray-600 text-sm">What to charge for every type of service</p>
              </Link>
              <Link href="/mobile-notary-supplies" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
                <h4 className="font-bold text-notary-navy mb-2">Mobile Notary Supplies Checklist</h4>
                <p className="text-gray-600 text-sm">Everything you need to get started</p>
              </Link>
              <Link href="/why-now-is-perfect-time-loan-signing-agent" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
                <h4 className="font-bold text-notary-navy mb-2">Why Become a Loan Signing Agent</h4>
                <p className="text-gray-600 text-sm">Earn $100-200 per signing vs $15-50</p>
              </Link>
            </div>
          </div>

        </div>
      </article>
    </div>
  );
}
