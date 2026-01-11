import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How Much Does a Mobile Notary Cost? Complete Pricing Guide 2026 | The Bearded Notary',
  description: 'Mobile notary costs $50-100 per appointment (signatures + travel). State fees by state, loan signing rates ($100-200), what notaries actually earn. Complete 2026 pricing guide.',  openGraph: {
    title: 'How Much Should You Charge as a Mobile Notary? (2026 Pricing Guide)',
    description: 'State fee limits, travel charges, package pricing strategies. Learn what to charge for general notarizations vs loan signings.',
    images: ['/images/notary-pricing-guide-featured.png'],
  },
};

export default function NotaryPricingGuide() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-notary-navy text-white py-6">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/" className="text-notary-gold hover:underline text-sm mb-2 block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold">
            How Much Should You Charge as a Mobile Notary in 2026?
          </h1>
        </div>
      </header>

 {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        
        <div className="prose prose-lg max-w-none">
          
          {/* Featured Image */}
          <div className="my-8">
            <img 
              src="/images/notary-pricing-guide-featured.png"
              alt="Guide for pricing your services as a new notary"
              className="w-full max-w-2xl mx-auto"
            />
          </div>
          
          <p className="text-xl text-gray-700 mb-8 font-semibold">
            One of the biggest mistakes new mobile notaries make? Undercharging. You're providing a professional service that requires training, licensing, bonding, and liability. You deserve to be paid fairly.
          </p>

          <p className="text-gray-700 mb-8">
            But how much should you actually charge? The answer depends on your state's maximum fees, the type of service, travel distance, timing, and your market. This comprehensive guide breaks down exactly what to charge for every notary service in 2026.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
            <h3 className="text-xl font-bold text-notary-navy mb-3">Quick Pricing Overview</h3>
            <ul className="space-y-2 text-gray-800">
              <li>✓ <strong>General notarization:</strong> $15-25 per signature (state maximums apply)</li>
              <li>✓ <strong>Mobile travel fee:</strong> $25-75 (within 20 miles)</li>
              <li>✓ <strong>Loan signing package:</strong> $75-200 per appointment</li>
              <li>✓ <strong>After-hours/weekend:</strong> 1.5x-2x your base rate</li>
              <li>✓ <strong>Hospital/jail visits:</strong> $150-300 (specialized service)</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">How Much Does a Notary Cost? (Quick Answer)</h2>

<div className="bg-blue-50 border-2 border-blue-500 p-8 mb-8 rounded">
  <p className="text-xl text-gray-800 mb-4">
    <strong>General notarization:</strong> $10-25 per signature (state maximum applies)
  </p>
  <p className="text-xl text-gray-800 mb-4">
    <strong>Mobile notary at your location:</strong> $50-100 total (notarization + travel)
  </p>
  <p className="text-xl text-gray-800 mb-4">
    <strong>Loan signing (mortgage closing):</strong> $100-200 per appointment
  </p>
  <p className="text-xl text-gray-800">
    <strong>After-hours/weekend:</strong> 1.5x-2x standard rates
  </p>
</div>

<p className="text-gray-700 mb-6">
  The cost of notary services depends on three factors: your state's maximum fee per signature, whether the notary travels to you (mobile fee), and the complexity of service (general notarization vs loan signing). Let's break down exactly what you can expect to pay—or charge if you're a notary.
</p>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">Understanding State Maximum Fees</h2>

          <p className="text-gray-700 mb-6">
            Every state sets a <strong>maximum fee</strong> you can charge per notarial act (signature). You can charge LESS than the maximum, but never more. Violating this can result in fines or loss of commission.
          </p>

          <div className="bg-gray-50 p-6 mb-8 rounded">
  <h3 className="text-2xl font-bold text-notary-navy mb-4">State Maximum Notary Fees (All 50 States)</h3>
  <p className="text-gray-700 mb-4">
    These are the <strong>maximum fees per notarial act</strong> (per signature) set by each state. Notaries can charge less, but never more.
  </p>
  
  <div className="overflow-x-auto">
    <table className="w-full border-collapse text-sm">
      <thead>
        <tr className="bg-notary-navy text-white">
          <th className="border border-gray-300 px-4 py-2 text-left">State</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Acknowledgment</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Jurat</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Notes</th>
        </tr>
      </thead>
      <tbody className="text-gray-700">
        <tr>
          <td className="border border-gray-300 px-4 py-2">Alabama</td>
          <td className="border border-gray-300 px-4 py-2">$5</td>
          <td className="border border-gray-300 px-4 py-2">$5</td>
          <td className="border border-gray-300 px-4 py-2">Low fee state</td>
        </tr>
        <tr className="bg-gray-100">
          <td className="border border-gray-300 px-4 py-2">Alaska</td>
          <td className="border border-gray-300 px-4 py-2">$10</td>
          <td className="border border-gray-300 px-4 py-2">$10</td>
          <td className="border border-gray-300 px-4 py-2">Standard rate</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Arizona</td>
          <td className="border border-gray-300 px-4 py-2">$10</td>
          <td className="border border-gray-300 px-4 py-2">$10</td>
          <td className="border border-gray-300 px-4 py-2">Standard rate</td>
        </tr>
        <tr className="bg-gray-100">
          <td className="border border-gray-300 px-4 py-2">Arkansas</td>
          <td className="border border-gray-300 px-4 py-2">$5</td>
          <td className="border border-gray-300 px-4 py-2">$5</td>
          <td className="border border-gray-300 px-4 py-2">Low fee state</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2"><strong>California</strong></td>
          <td className="border border-gray-300 px-4 py-2">$15</td>
          <td className="border border-gray-300 px-4 py-2">$15</td>
          <td className="border border-gray-300 px-4 py-2">High fee state</td>
        </tr>
        <tr className="bg-gray-100">
          <td className="border border-gray-300 px-4 py-2">Colorado</td>
          <td className="border border-gray-300 px-4 py-2">$5</td>
          <td className="border border-gray-300 px-4 py-2">$5</td>
          <td className="border border-gray-300 px-4 py-2">Low fee state</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Connecticut</td>
          <td className="border border-gray-300 px-4 py-2">$5</td>
          <td className="border border-gray-300 px-4 py-2">$5</td>
          <td className="border border-gray-300 px-4 py-2">Low fee state</td>
        </tr>
        <tr className="bg-gray-100">
          <td className="border border-gray-300 px-4 py-2">Delaware</td>
          <td className="border border-gray-300 px-4 py-2">$5</td>
          <td className="border border-gray-300 px-4 py-2">$5</td>
          <td className="border border-gray-300 px-4 py-2">Low fee state</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2"><strong>Florida</strong></td>
          <td className="border border-gray-300 px-4 py-2">$10</td>
          <td className="border border-gray-300 px-4 py-2">$10</td>
          <td className="border border-gray-300 px-4 py-2">Online: $25</td>
        </tr>
        <tr className="bg-gray-100">
          <td className="border border-gray-300 px-4 py-2">Georgia</td>
          <td className="border border-gray-300 px-4 py-2">$2</td>
          <td className="border border-gray-300 px-4 py-2">$2</td>
          <td className="border border-gray-300 px-4 py-2">Lowest fees, rely on travel</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Hawaii</td>
          <td className="border border-gray-300 px-4 py-2">$5</td>
          <td className="border border-gray-300 px-4 py-2">$5</td>
          <td className="border border-gray-300 px-4 py-2">Standard rate</td>
        </tr>
        <tr className="bg-gray-100">
          <td className="border border-gray-300 px-4 py-2">Idaho</td>
          <td className="border border-gray-300 px-4 py-2">$2</td>
          <td className="border border-gray-300 px-4 py-2">$2</td>
          <td className="border border-gray-300 px-4 py-2">Very low</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2"><strong>Illinois</strong></td>
          <td className="border border-gray-300 px-4 py-2">$1</td>
          <td className="border border-gray-300 px-4 py-2">$1</td>
          <td className="border border-gray-300 px-4 py-2">Lowest in US</td>
        </tr>
        <tr className="bg-gray-100">
          <td className="border border-gray-300 px-4 py-2">Indiana</td>
          <td className="border border-gray-300 px-4 py-2">$10</td>
          <td className="border border-gray-300 px-4 py-2">$10</td>
          <td className="border border-gray-300 px-4 py-2">Standard rate</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Iowa</td>
          <td className="border border-gray-300 px-4 py-2">$5</td>
          <td className="border border-gray-300 px-4 py-2">$5</td>
          <td className="border border-gray-300 px-4 py-2">Low fee state</td>
        </tr>
        <tr className="bg-gray-100">
          <td className="border border-gray-300 px-4 py-2">Kansas</td>
          <td className="border border-gray-300 px-4 py-2">$1</td>
          <td className="border border-gray-300 px-4 py-2">$1</td>
          <td className="border border-gray-300 px-4 py-2">Very low</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Kentucky</td>
          <td className="border border-gray-300 px-4 py-2">No max</td>
          <td className="border border-gray-300 px-4 py-2">No max</td>
          <td className="border border-gray-300 px-4 py-2">Market rate</td>
        </tr>
        <tr className="bg-gray-100">
          <td className="border border-gray-300 px-4 py-2">Louisiana</td>
          <td className="border border-gray-300 px-4 py-2">No max</td>
          <td className="border border-gray-300 px-4 py-2">No max</td>
          <td className="border border-gray-300 px-4 py-2">Market rate</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Maine</td>
          <td className="border border-gray-300 px-4 py-2">No max</td>
          <td className="border border-gray-300 px-4 py-2">No max</td>
          <td className="border border-gray-300 px-4 py-2">Market rate</td>
        </tr>
        <tr className="bg-gray-100">
          <td className="border border-gray-300 px-4 py-2"><strong>Maryland</strong></td>
          <td className="border border-gray-300 px-4 py-2">$4</td>
          <td className="border border-gray-300 px-4 py-2">$4</td>
          <td className="border border-gray-300 px-4 py-2">Low fee state</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2"><strong>Massachusetts</strong></td>
          <td className="border border-gray-300 px-4 py-2">No max</td>
          <td className="border border-gray-300 px-4 py-2">No max</td>
          <td className="border border-gray-300 px-4 py-2">Market rate</td>
        </tr>
        <tr className="bg-gray-100">
          <td className="border border-gray-300 px-4 py-2"><strong>Michigan</strong></td>
          <td className="border border-gray-300 px-4 py-2">$10</td>
          <td className="border border-gray-300 px-4 py-2">$10</td>
          <td className="border border-gray-300 px-4 py-2">Standard rate</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Minnesota</td>
          <td className="border border-gray-300 px-4 py-2">$5</td>
          <td className="border border-gray-300 px-4 py-2">$5</td>
          <td className="border border-gray-300 px-4 py-2">Low fee state</td>
        </tr>
        <tr className="bg-gray-100">
          <td className="border border-gray-300 px-4 py-2">Mississippi</td>
          <td className="border border-gray-300 px-4 py-2">$5</td>
          <td className="border border-gray-300 px-4 py-2">$5</td>
          <td className="border border-gray-300 px-4 py-2">Low fee state</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2"><strong>Missouri</strong></td>
          <td className="border border-gray-300 px-4 py-2">$5</td>
          <td className="border border-gray-300 px-4 py-2">$5</td>
          <td className="border border-gray-300 px-4 py-2">Can charge travel</td>
        </tr>
        <tr className="bg-gray-100">
          <td className="border border-gray-300 px-4 py-2">Montana</td>
          <td className="border border-gray-300 px-4 py-2">$10</td>
          <td className="border border-gray-300 px-4 py-2">$10</td>
          <td className="border border-gray-300 px-4 py-2">Standard rate</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Nebraska</td>
          <td className="border border-gray-300 px-4 py-2">$5</td>
          <td className="border border-gray-300 px-4 py-2">$5</td>
          <td className="border border-gray-300 px-4 py-2">Low fee state</td>
        </tr>
        <tr className="bg-gray-100">
          <td className="border border-gray-300 px-4 py-2">Nevada</td>
          <td className="border border-gray-300 px-4 py-2">$15</td>
          <td className="border border-gray-300 px-4 py-2">$15</td>
          <td className="border border-gray-300 px-4 py-2">High fee state</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">New Hampshire</td>
          <td className="border border-gray-300 px-4 py-2">$10</td>
          <td className="border border-gray-300 px-4 py-2">$10</td>
          <td className="border border-gray-300 px-4 py-2">Standard rate</td>
        </tr>
        <tr className="bg-gray-100">
          <td className="border border-gray-300 px-4 py-2"><strong>New Jersey</strong></td>
          <td className="border border-gray-300 px-4 py-2">$2.50</td>
          <td className="border border-gray-300 px-4 py-2">$2.50</td>
          <td className="border border-gray-300 px-4 py-2">Very low</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">New Mexico</td>
          <td className="border border-gray-300 px-4 py-2">$5</td>
          <td className="border border-gray-300 px-4 py-2">$5</td>
          <td className="border border-gray-300 px-4 py-2">Low fee state</td>
        </tr>
        <tr className="bg-gray-100">
          <td className="border border-gray-300 px-4 py-2"><strong>New York</strong></td>
          <td className="border border-gray-300 px-4 py-2">$2</td>
          <td className="border border-gray-300 px-4 py-2">$2</td>
          <td className="border border-gray-300 px-4 py-2">Lowest fees</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2"><strong>North Carolina</strong></td>
          <td className="border border-gray-300 px-4 py-2">$5</td>
          <td className="border border-gray-300 px-4 py-2">$5</td>
          <td className="border border-gray-300 px-4 py-2">Electronic: $25</td>
        </tr>
        <tr className="bg-gray-100">
          <td className="border border-gray-300 px-4 py-2">North Dakota</td>
          <td className="border border-gray-300 px-4 py-2">$5</td>
          <td className="border border-gray-300 px-4 py-2">$5</td>
          <td className="border border-gray-300 px-4 py-2">Low fee state</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2"><strong>Ohio</strong></td>
          <td className="border border-gray-300 px-4 py-2">No max</td>
          <td className="border border-gray-300 px-4 py-2">No max</td>
          <td className="border border-gray-300 px-4 py-2">Market rate</td>
        </tr>
        <tr className="bg-gray-100">
          <td className="border border-gray-300 px-4 py-2">Oklahoma</td>
          <td className="border border-gray-300 px-4 py-2">$5</td>
          <td className="border border-gray-300 px-4 py-2">$5</td>
          <td className="border border-gray-300 px-4 py-2">Low fee state</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Oregon</td>
          <td className="border border-gray-300 px-4 py-2">$10</td>
          <td className="border border-gray-300 px-4 py-2">$10</td>
          <td className="border border-gray-300 px-4 py-2">Standard rate</td>
        </tr>
        <tr className="bg-gray-100">
          <td className="border border-gray-300 px-4 py-2"><strong>Pennsylvania</strong></td>
          <td className="border border-gray-300 px-4 py-2">$5</td>
          <td className="border border-gray-300 px-4 py-2">$5</td>
          <td className="border border-gray-300 px-4 py-2">Travel fees common</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Rhode Island</td>
          <td className="border border-gray-300 px-4 py-2">$4</td>
          <td className="border border-gray-300 px-4 py-2">$4</td>
          <td className="border border-gray-300 px-4 py-2">Low fee state</td>
        </tr>
        <tr className="bg-gray-100">
          <td className="border border-gray-300 px-4 py-2">South Carolina</td>
          <td className="border border-gray-300 px-4 py-2">$5</td>
          <td className="border border-gray-300 px-4 py-2">$5</td>
          <td className="border border-gray-300 px-4 py-2">Low fee state</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">South Dakota</td>
          <td className="border border-gray-300 px-4 py-2">$10</td>
          <td className="border border-gray-300 px-4 py-2">$10</td>
          <td className="border border-gray-300 px-4 py-2">Standard rate</td>
        </tr>
        <tr className="bg-gray-100">
          <td className="border border-gray-300 px-4 py-2"><strong>Tennessee</strong></td>
          <td className="border border-gray-300 px-4 py-2">No max</td>
          <td className="border border-gray-300 px-4 py-2">No max</td>
          <td className="border border-gray-300 px-4 py-2">Market-based</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2"><strong>Texas</strong></td>
          <td className="border border-gray-300 px-4 py-2">$6</td>
          <td className="border border-gray-300 px-4 py-2">$6</td>
          <td className="border border-gray-300 px-4 py-2">Can charge travel</td>
        </tr>
        <tr className="bg-gray-100">
          <td className="border border-gray-300 px-4 py-2">Utah</td>
          <td className="border border-gray-300 px-4 py-2">$10</td>
          <td className="border border-gray-300 px-4 py-2">$10</td>
          <td className="border border-gray-300 px-4 py-2">Standard rate</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Vermont</td>
          <td className="border border-gray-300 px-4 py-2">No max</td>
          <td className="border border-gray-300 px-4 py-2">No max</td>
          <td className="border border-gray-300 px-4 py-2">Market rate</td>
        </tr>
        <tr className="bg-gray-100">
          <td className="border border-gray-300 px-4 py-2"><strong>Virginia</strong></td>
          <td className="border border-gray-300 px-4 py-2">$5</td>
          <td className="border border-gray-300 px-4 py-2">$5</td>
          <td className="border border-gray-300 px-4 py-2">Electronic: $25</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2"><strong>Washington</strong></td>
          <td className="border border-gray-300 px-4 py-2">$15</td>
          <td className="border border-gray-300 px-4 py-2">$15</td>
          <td className="border border-gray-300 px-4 py-2">High fee state</td>
        </tr>
        <tr className="bg-gray-100">
          <td className="border border-gray-300 px-4 py-2">West Virginia</td>
          <td className="border border-gray-300 px-4 py-2">$5</td>
          <td className="border border-gray-300 px-4 py-2">$5</td>
          <td className="border border-gray-300 px-4 py-2">Low fee state</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Wisconsin</td>
          <td className="border border-gray-300 px-4 py-2">$5</td>
          <td className="border border-gray-300 px-4 py-2">$5</td>
          <td className="border border-gray-300 px-4 py-2">Low fee state</td>
        </tr>
        <tr className="bg-gray-100">
          <td className="border border-gray-300 px-4 py-2">Wyoming</td>
          <td className="border border-gray-300 px-4 py-2">$5</td>
          <td className="border border-gray-300 px-4 py-2">$5</td>
          <td className="border border-gray-300 px-4 py-2">Low fee state</td>
        </tr>
      </tbody>
    </table>
  </div>
  
  <p className="text-gray-600 text-sm mt-4 italic">
    Data current as of January 2026. Verify with your state's Secretary of State or notary regulatory authority as fees can change annually.
  </p>
</div>

          <p className="text-gray-700 mb-6">
            <strong>Key takeaway:</strong> If you're in a low-fee state (NY, IL, GA), don't panic. You'll make your money on <strong>travel fees</strong>, which are separate from notarial fees and unlimited in most states.
          </p>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">Mobile Notary Travel Fees</h2>

          <p className="text-gray-700 mb-6">
            This is where mobile notaries actually make money, especially in low-fee states. Travel fees are charged ON TOP of your per-signature fees.
          </p>

          <div className="bg-gray-50 p-6 mb-8 rounded">
            <h3 className="text-xl font-bold text-notary-navy mb-4">Standard Travel Fee Structure</h3>
            <table className="w-full text-gray-700">
              <thead>
                <tr className="border-b-2 border-notary-gold">
                  <th className="text-left py-2">Distance</th>
                  <th className="text-left py-2">Recommended Fee</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-300">
                  <td className="py-2">0-10 miles</td>
                  <td className="py-2">$25-35</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-2">11-20 miles</td>
                  <td className="py-2">$40-60</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-2">21-30 miles</td>
                  <td className="py-2">$65-85</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-2">31+ miles</td>
                  <td className="py-2">$100+ or $2-3/mile beyond 30</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-2">After hours (6pm-8am)</td>
                  <td className="py-2">1.5x-2x standard rate</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-2">Weekends</td>
                  <td className="py-2">1.5x standard rate</td>
                </tr>
                <tr>
                  <td className="py-2">Holidays</td>
                  <td className="py-2">2x-3x standard rate</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 mb-6">
            <strong>Pro tip:</strong> Build your travel fee into your quote. Instead of saying "$15 notary fee + $35 travel," say "Mobile notary appointment: $50 total" (for 1-2 signatures). Simpler for clients, same money for you.
          </p>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">Loan Signing Fees (The Big Money)</h2>

          <p className="text-gray-700 mb-6">
            Loan signings are where notaries make serious income. These are complex, 100+ page mortgage closing packages that require specialized training and precision.
          </p>

          <div className="bg-notary-navy text-white p-8 my-12 rounded">
            <h3 className="text-2xl font-bold mb-4">Loan Signing Pricing Guide</h3>
            <div className="space-y-4">
              <div>
                <p className="font-bold text-notary-gold">Standard Purchase/Refinance:</p>
                <p className="text-lg">$100-150 per signing</p>
                <p className="text-sm text-gray-300">Typical closing package, daytime hours, within 20 miles</p>
              </div>
              <div>
                <p className="font-bold text-notary-gold">Rush Signing (same-day):</p>
                <p className="text-lg">$150-200</p>
                <p className="text-sm text-gray-300">Client needs it done today, drop everything priority</p>
              </div>
              <div>
                <p className="font-bold text-notary-gold">Scan-Backs Required:</p>
                <p className="text-lg">Add $25-50</p>
                <p className="text-sm text-gray-300">Extra time to scan and upload documents after signing</p>
              </div>
              <div>
                <p className="font-bold text-notary-gold">After-Hours (evenings/weekends):</p>
                <p className="text-lg">$125-175</p>
                <p className="text-sm text-gray-300">Premium for non-business hours convenience</p>
              </div>
              <div>
                <p className="font-bold text-notary-gold">Distant Travel (30+ miles):</p>
                <p className="text-lg">$150-250</p>
                <p className="text-sm text-gray-300">Factor in drive time and fuel costs</p>
              </div>
              <div>
                <p className="font-bold text-notary-gold">Multiple Signers:</p>
                <p className="text-lg">Add $25-50 per additional signer</p>
                <p className="text-sm text-gray-300">More people = more time, more complexity</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-notary-navy to-blue-900 text-white p-8 my-12 rounded">
            <h3 className="text-2xl font-bold mb-4">Want to Earn $100-200 Per Signing?</h3>
            <p className="text-lg mb-4">
              Loan signing isn't something you can wing. Title companies expect precision, speed, and professionalism. One mistake can delay a closing and cost you repeat business.
            </p>
            <p className="text-lg mb-6">
              <strong>Loan Signing System</strong> teaches you:
            </p>
            <ul className="space-y-2 mb-6">
              <li>• How to handle every document in a closing package</li>
              <li>• What title companies expect from signing agents</li>
              <li>• How to get on signing company rosters</li>
              <li>• Common mistakes and how to avoid them</li>
              <li>• How to build a 6-figure loan signing business</li>
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

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">Specialized Service Pricing</h2>

          <p className="text-gray-700 mb-6">
            Some notary services command premium pricing because they're difficult, time-sensitive, or require specialized knowledge.
          </p>

          <div className="space-y-6 mb-8">
            <div className="bg-gray-50 p-6 rounded">
              <h3 className="text-xl font-bold text-notary-navy mb-3">Hospital / Hospice Signings</h3>
              <p className="text-gray-700 mb-3">
                <strong>Recommended: $150-300</strong>
              </p>
              <p className="text-gray-700">
                <strong>Why premium pricing:</strong> Emotionally sensitive, may involve capacity verification, potential for delays (patient sleeping, medical procedures), parking hassles, potential exposure to illness.
              </p>
              <p className="text-gray-700 mt-3">
                Documents: Healthcare directives, powers of attorney, living wills, HIPAA releases
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded">
              <h3 className="text-xl font-bold text-notary-navy mb-3">Jail / Prison Signings</h3>
              <p className="text-gray-700 mb-3">
                <strong>Recommended: $150-300</strong>
              </p>
              <p className="text-gray-700">
                <strong>Why premium pricing:</strong> Clearance requirements, security protocols, limited access hours, ID verification challenges, can't bring certain supplies.
              </p>
              <p className="text-gray-700 mt-3">
                Usually requires: Background check, facility approval, advance scheduling
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded">
              <h3 className="text-xl font-bold text-notary-navy mb-3">Assisted Living / Nursing Home</h3>
              <p className="text-gray-700 mb-3">
                <strong>Recommended: $100-200</strong>
              </p>
              <p className="text-gray-700">
                <strong>Why premium pricing:</strong> Capacity assessment, patience required, potential for confused signers, family members present creating dynamics.
              </p>
              <p className="text-gray-700 mt-3">
                See our <Link href="/target-industries-for-notaries" className="text-notary-gold hover:underline">target industries guide</Link> for more on this niche.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded">
              <h3 className="text-xl font-bold text-notary-navy mb-3">Business Signings (B2B)</h3>
              <p className="text-gray-700 mb-3">
                <strong>Recommended: $75-150</strong>
              </p>
              <p className="text-gray-700">
                <strong>Why mid-range pricing:</strong> Professional setting, scheduled in advance, usually straightforward, potential for repeat business.
              </p>
              <p className="text-gray-700 mt-3">
                Examples: Contract signings, corporate documents, commercial real estate
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded">
              <h3 className="text-xl font-bold text-notary-navy mb-3">Apostille / Authentication Services</h3>
              <p className="text-gray-700 mb-3">
                <strong>Recommended: $50-100 + state fees</strong>
              </p>
              <p className="text-gray-700">
                <strong>What you're doing:</strong> Notarizing documents that will be used internationally, may include coordination with Secretary of State office.
              </p>
              <p className="text-gray-700 mt-3">
                Higher fee justified by knowledge of international document requirements
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded">
              <h3 className="text-xl font-bold text-notary-navy mb-3">I-9 Verification (Remote)</h3>
              <p className="text-gray-700 mb-3">
                <strong>Recommended: $25-50</strong>
              </p>
              <p className="text-gray-700">
                <strong>Note:</strong> This is NOT notarization, but many notaries offer this service. You're verifying identity and employment eligibility for remote workers.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">Package Pricing Strategies</h2>

          <p className="text-gray-700 mb-6">
            Instead of charging per signature, consider package pricing for repeat clients or high-volume situations.
          </p>

          <div className="space-y-4 mb-8">
            <div className="border-l-4 border-notary-gold pl-6">
              <h4 className="text-xl font-bold text-notary-navy mb-2">Real Estate Agent Partnership</h4>
              <p className="text-gray-700">
                <strong>Package:</strong> $500/month for unlimited general notarizations at their office
              </p>
              <p className="text-gray-700 mt-2">
                <strong>Why it works:</strong> They get convenience, you get predictable income, everyone wins
              </p>
            </div>

            <div className="border-l-4 border-notary-gold pl-6">
              <h4 className="text-xl font-bold text-notary-navy mb-2">Auto Dealership Contract</h4>
              <p className="text-gray-700">
                <strong>Package:</strong> $15 per notarization, minimum 20/month
              </p>
              <p className="text-gray-700 mt-2">
                <strong>Why it works:</strong> Guaranteed volume, easy to budget, simple docs
              </p>
            </div>

            <div className="border-l-4 border-notary-gold pl-6">
              <h4 className="text-xl font-bold text-notary-navy mb-2">Law Firm Retainer</h4>
              <p className="text-gray-700">
                <strong>Package:</strong> $750/month for on-call service (up to 30 notarizations)
              </p>
              <p className="text-gray-700 mt-2">
                <strong>Why it works:</strong> They need reliability, you get steady income
              </p>
            </div>

            <div className="border-l-4 border-notary-gold pl-6">
              <h4 className="text-xl font-bold text-notary-navy mb-2">Title Company Preferred Vendor</h4>
              <p className="text-gray-700">
                <strong>Package:</strong> $125/signing, guaranteed minimum 4 signings/week
              </p>
              <p className="text-gray-700 mt-2">
                <strong>Why it works:</strong> $2,000+/month baseline, potential for more
              </p>
            </div>
          </div>

          <p className="text-gray-700 mb-8">
            Package pricing removes the "nickel and dime" feeling for clients while giving you predictable revenue. Learn more about <Link href="/target-industries-for-notaries" className="text-notary-gold hover:underline">which industries to target</Link> for package deals.
          </p>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">How to Justify Premium Pricing</h2>

          <p className="text-gray-700 mb-6">
            Clients will pay more when you demonstrate value. Here's how to position yourself as worth the premium:
          </p>

          <div className="bg-gray-50 p-6 mb-8 rounded">
            <h3 className="text-xl font-bold text-notary-navy mb-4">10 Ways to Command Higher Fees</h3>
            <ol className="list-decimal pl-6 space-y-3 text-gray-700">
              <li>
                <strong>Professional appearance:</strong> Dress business professional, arrive in a clean vehicle, use <Link href="/mobile-notary-supplies" className="text-notary-gold hover:underline">quality supplies</Link>
              </li>
              <li>
                <strong>Specialized certifications:</strong> Loan Signing System certified, NNA Background Screened, specific training credentials
              </li>
              <li>
                <strong>Fast response time:</strong> Answer within 1 hour, accommodate rush requests
              </li>
              <li>
                <strong>24/7 availability:</strong> "Emergency notary services available" justifies premium
              </li>
              <li>
                <strong>Error-free service:</strong> Double-check everything, provide confidence
              </li>
              <li>
                <strong>Tech-enabled:</strong> E-signatures for non-notarized docs, mobile payment, digital scheduling
              </li>
              <li>
                <strong>Educational approach:</strong> Explain documents (without giving legal advice), walk clients through process
              </li>
              <li>
                <strong>Insurance:</strong> $100K E&O insurance shows you're serious
              </li>
              <li>
                <strong>Reviews:</strong> 50+ five-star Google reviews = instant credibility
              </li>
              <li>
                <strong>Niche expertise:</strong> "I specialize in hospital signings" or "I only do loan signings" = expert positioning
              </li>
            </ol>
          </div>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">Common Pricing Mistakes to Avoid</h2>

          <div className="space-y-6 mb-8">
            <div className="bg-red-50 border-l-4 border-red-500 p-6">
              <h4 className="font-bold text-red-900 mb-2">❌ Mistake #1: Charging Only State Maximum</h4>
              <p className="text-gray-700">
                If you're only charging $15 in California and driving 30 minutes each way, you're working for $15/hour BEFORE expenses. Always add travel fees!
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6">
              <h4 className="font-bold text-red-900 mb-2">❌ Mistake #2: Not Charging for Your Time</h4>
              <p className="text-gray-700">
                A "quick 5-minute signing" still requires: driving there, parking, walking in, verifying ID, completing journal, driving back. That's 45 minutes minimum. Price accordingly.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6">
              <h4 className="font-bold text-red-900 mb-2">❌ Mistake #3: Competing on Price Alone</h4>
              <p className="text-gray-700">
                There's always someone cheaper. Compete on service, speed, professionalism, and expertise instead.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6">
              <h4 className="font-bold text-red-900 mb-2">❌ Mistake #4: No After-Hours Premium</h4>
              <p className="text-gray-700">
                Clients asking you to come at 8pm on Saturday? That's 2x minimum. Your personal time has value.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6">
              <h4 className="font-bold text-red-900 mb-2">❌ Mistake #5: Free Consultations That Should Be Paid</h4>
              <p className="text-gray-700">
                "Can you just quickly look at these documents and tell me if they need to be notarized?" That's your professional expertise - charge a consultation fee or politely redirect.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">What Your Competition Is Charging</h2>

          <p className="text-gray-700 mb-6">
            Want to know what other notaries in your area charge? Here's how to research:
          </p>

          <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-8">
            <li>
              <strong>Google "[your city] mobile notary"</strong> and check websites for pricing
            </li>
            <li>
              <strong>Call 5 competitors as a potential client</strong> and ask for quotes
            </li>
            <li>
              <strong>Check Yelp and Google reviews</strong> - clients sometimes mention prices
            </li>
            <li>
              <strong>Join local notary Facebook groups</strong> and see what people discuss
            </li>
            <li>
              <strong>Ask title companies</strong> what they typically pay signing agents
            </li>
          </ol>

          <p className="text-gray-700 mb-8">
            <strong>Golden rule:</strong> Price in the top 25% of your market if you're certified, professional, and reliable. Bottom 25% pricing attracts bottom 25% clients (late-night emergencies, price shoppers, payment issues).
          </p>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">Your Pricing Formula</h2>

          <div className="bg-notary-gold bg-opacity-10 border-2 border-notary-gold p-8 my-12 rounded">
            <h3 className="text-2xl font-bold text-notary-navy mb-6">Simple Pricing Calculator</h3>
            
            <div className="space-y-4 text-gray-800">
              <p className="font-bold">Base Fee (State Maximum × # of Signatures):</p>
              <p className="pl-6">Example: CA $15 × 2 signatures = $30</p>

              <p className="font-bold">+ Travel Fee (Distance-based):</p>
              <p className="pl-6">Example: 15 miles = $45</p>

              <p className="font-bold">+ Time Premium (After hours/weekend/rush):</p>
              <p className="pl-6">Example: Weekend = $45 × 1.5 = $67.50</p>

              <p className="font-bold">+ Complexity Premium (Specialized service):</p>
              <p className="pl-6">Example: Hospital visit = +$50</p>

              <p className="font-bold text-xl text-notary-navy mt-4">= Total Quote</p>
              <p className="text-2xl font-bold text-notary-navy">$30 + $67.50 + $50 = $147.50</p>
            </div>

            <p className="text-gray-700 mt-6 italic">
              Round to clean numbers: Quote "$150" instead of "$147.50"
            </p>
          </div>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">Payment Methods to Accept</h2>

          <p className="text-gray-700 mb-6">
            Make it easy for clients to pay you:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
            <li><strong>Cash:</strong> Always accepted (but provide receipt!)</li>
            <li><strong>Venmo/Zelle/CashApp:</strong> Fast, free, popular with individuals</li>
            <li><strong>Square/PayPal:</strong> Credit cards accepted (~3% fee, worth it for convenience)</li>
            <li><strong>Check:</strong> Business clients prefer this (deposit same day)</li>
            <li><strong>Invoice + ACH:</strong> For monthly retainer clients</li>
          </ul>

          <p className="text-gray-700 mb-8">
            <strong>Payment timing:</strong> For individuals, collect payment before leaving. For businesses, NET 15 or NET 30 terms are standard.
          </p>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">Tracking Your Income</h2>

          <p className="text-gray-700 mb-6">
            You're running a business, so track it like one:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
            <li>Use <strong>QuickBooks Self-Employed</strong> or <strong>Wave</strong> (free) for invoicing</li>
            <li>Track mileage with <strong>MileIQ</strong> or <strong>Everlance</strong> (tax deduction!)</li>
            <li>Log every signing in a spreadsheet: date, client, service, fee, payment method</li>
            <li>Calculate your <strong>hourly rate</strong> monthly (total income ÷ total hours worked)</li>
            <li>Set income goals and review progress weekly</li>
          </ul>

          <p className="text-gray-700 mb-8">
  Proper bookkeeping isn't just about tracking income—it's about maximizing deductions, separating business from personal finances, and actually understanding your profitability per signing. Read our complete <Link href="/smart-money-management-mobile-notaries" className="text-notary-gold hover:underline">money management guide for mobile notaries</Link> to set up a system that takes 10 minutes per week and saves you thousands at tax time.
</p>

          <div className="bg-gray-50 border-l-4 border-notary-gold p-6 my-8">
            <h3 className="text-xl font-bold text-notary-navy mb-3">Income Goal Examples</h3>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>Part-Time ($2,000/month):</strong><br />
                10 loan signings at $150 = $1,500<br />
                20 mobile notarizations at $50 = $1,000<br />
                Total: $2,500/month (10-15 hours/week)
              </p>
              <p>
                <strong>Full-Time ($6,000/month):</strong><br />
                30 loan signings at $150 = $4,500<br />
                40 mobile notarizations at $50 = $2,000<br />
                Total: $6,500/month (30-35 hours/week)
              </p>
              <p>
                <strong>Six-Figure ($10,000/month):</strong><br />
                50 loan signings at $150 = $7,500<br />
                Business retainers (3 clients) = $2,000<br />
                Premium services (hospitals, rush) = $1,500<br />
                Total: $11,000/month (40-45 hours/week)
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">How Much Do Notaries Make? (Real Income Numbers)</h2>

<p className="text-gray-700 mb-6">
  The question everyone asks: "How much money can I actually make as a notary?" The answer depends on whether you're part-time or full-time, general notary or loan signing specialist, and how well you market yourself.
</p>

<div className="bg-gray-50 p-6 mb-8 rounded">
  <h3 className="text-xl font-bold text-notary-navy mb-4">Average Notary Income by Type</h3>
  
  <div className="space-y-6">
    <div className="border-l-4 border-notary-gold pl-6">
      <h4 className="text-lg font-bold text-notary-navy mb-2">General Notary Public (Part-Time)</h4>
      <p className="text-2xl font-bold text-notary-gold mb-2">$300-1,500/month</p>
      <p className="text-gray-700">
        <strong>Time commitment:</strong> 5-10 hours/week<br />
        <strong>Services:</strong> General notarizations, occasional mobile appointments<br />
        <strong>Reality:</strong> Supplemental income, not enough to live on
      </p>
    </div>

    <div className="border-l-4 border-notary-gold pl-6">
      <h4 className="text-lg font-bold text-notary-navy mb-2">Mobile Notary Public (Part-Time)</h4>
      <p className="text-2xl font-bold text-notary-gold mb-2">$1,500-3,000/month</p>
      <p className="text-gray-700">
        <strong>Time commitment:</strong> 10-15 hours/week<br />
        <strong>Services:</strong> Mobile notarizations, some loan signings<br />
        <strong>Reality:</strong> Solid side hustle, could replace part-time job
      </p>
    </div>

    <div className="border-l-4 border-notary-gold pl-6">
      <h4 className="text-lg font-bold text-notary-navy mb-2">Loan Signing Agent (Part-Time)</h4>
      <p className="text-2xl font-bold text-notary-gold mb-2">$2,000-5,000/month</p>
      <p className="text-gray-700">
        <strong>Time commitment:</strong> 15-20 hours/week<br />
        <strong>Services:</strong> Primarily loan signings ($100-150 each)<br />
        <strong>Reality:</strong> 15-30 loan signings per month, sustainable side income
      </p>
    </div>

    <div className="border-l-4 border-notary-gold pl-6">
      <h4 className="text-lg font-bold text-notary-navy mb-2">Mobile Notary Public (Full-Time)</h4>
      <p className="text-2xl font-bold text-notary-gold mb-2">$3,000-6,000/month</p>
      <p className="text-gray-700">
        <strong>Time commitment:</strong> 30-40 hours/week<br />
        <strong>Services:</strong> Mix of mobile notarizations and loan signings<br />
        <strong>Reality:</strong> Livable wage, requires consistent marketing
      </p>
    </div>

    <div className="border-l-4 border-notary-gold pl-6">
      <h4 className="text-lg font-bold text-notary-navy mb-2">Loan Signing Agent (Full-Time)</h4>
      <p className="text-2xl font-bold text-notary-gold mb-2">$6,000-12,000/month</p>
      <p className="text-gray-700">
        <strong>Time commitment:</strong> 40-50 hours/week<br />
        <strong>Services:</strong> 40-80 loan signings per month<br />
        <strong>Reality:</strong> This is where serious money is made ($72K-144K/year)
      </p>
    </div>
  </div>
</div>

<h3 className="text-2xl font-bold text-notary-navy mt-10 mb-4">Factors That Affect Notary Income</h3>

<ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-8">
  <li>
    <strong>Your state's fee limits:</strong> California ($15 max) = higher potential than New York ($2 max)
  </li>
  <li>
    <strong>Population density:</strong> Urban areas = more demand, more competition
  </li>
  <li>
    <strong>Loan signing certification:</strong> Certified agents earn 3-10x more than general notaries
  </li>
  <li>
    <strong>Marketing effort:</strong> Google Business Profile + reviews + networking = consistent bookings
  </li>
  <li>
    <strong>Availability:</strong> After-hours and weekends = premium pricing opportunities
  </li>
  <li>
    <strong>Specialization:</strong> Hospital/jail signings, estate planning, real estate niches = higher fees
  </li>
  <li>
    <strong>Business relationships:</strong> Title companies, law firms, realtors referring you = steady income
  </li>
</ol>

<div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
  <h4 className="font-bold text-notary-navy mb-3">Real Example: California Loan Signing Agent</h4>
  <div className="space-y-2 text-gray-700">
    <p><strong>Month 1 (New):</strong> 5 signings × $100 = $500</p>
    <p><strong>Month 3 (Building):</strong> 15 signings × $125 = $1,875</p>
    <p><strong>Month 6 (Established):</strong> 30 signings × $135 = $4,050</p>
    <p><strong>Month 12 (Full-time):</strong> 60 signings × $150 = $9,000</p>
    <p className="pt-3 border-t-2 border-blue-300 font-bold">
      Annual income (Month 12 pace): $108,000
    </p>
  </div>
</div>

<h3 className="text-2xl font-bold text-notary-navy mt-10 mb-4">Notary Salary vs. Notary Signing Agent Salary</h3>

<p className="text-gray-700 mb-6">
  There's a massive income gap between general notaries and loan signing agents. Here's the reality:
</p>

<div className="bg-white border-2 border-gray-300 p-6 mb-8 rounded">
  <table className="w-full text-gray-700">
    <thead>
      <tr className="border-b-2 border-notary-navy">
        <th className="text-left py-2 pr-4">Category</th>
        <th className="text-left py-2 pr-4">General Notary</th>
        <th className="text-left py-2 pr-4">Loan Signing Agent</th>
      </tr>
    </thead>
    <tbody>
      <tr className="border-b border-gray-300">
        <td className="py-2 pr-4">Fee per service</td>
        <td className="py-2 pr-4">$15-50</td>
        <td className="py-2 pr-4">$100-200</td>
      </tr>
      <tr className="border-b border-gray-300">
        <td className="py-2 pr-4">Time per appointment</td>
        <td className="py-2 pr-4">15-30 minutes</td>
        <td className="py-2 pr-4">60-90 minutes</td>
      </tr>
      <tr className="border-b border-gray-300">
        <td className="py-2 pr-4">Hourly rate</td>
        <td className="py-2 pr-4">$30-60/hour</td>
        <td className="py-2 pr-4">$80-150/hour</td>
      </tr>
      <tr className="border-b border-gray-300">
        <td className="py-2 pr-4">Monthly income (part-time)</td>
        <td className="py-2 pr-4">$500-1,500</td>
        <td className="py-2 pr-4">$2,000-5,000</td>
      </tr>
      <tr>
        <td className="py-2 pr-4">Monthly income (full-time)</td>
        <td className="py-2 pr-4">$2,000-4,000</td>
        <td className="py-2 pr-4">$6,000-12,000</td>
      </tr>
    </tbody>
  </table>
</div>

<p className="text-gray-700 mb-8">
  <strong>Bottom line:</strong> If you want to make serious money as a notary, get <Link href="/why-now-is-perfect-time-loan-signing-agent" className="text-notary-gold hover:underline">loan signing certified</Link>. It's the difference between a side gig and a career.
</p>

          {/* Final CTA */}
          <div className="bg-notary-navy text-white p-8 my-12 rounded text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Earning?</h3>
            <p className="text-lg mb-6">
              Now you know what to charge. Next step: Learn exactly what to do in your first 30 days as a mobile notary.
            </p>
            <Link 
              href="/first-30-days-new-notary"
              className="inline-block bg-notary-gold px-8 py-4 font-bold text-lg hover:bg-opacity-90 transition mr-4"
              style={{ color: '#1a2332' }}
            >
              Read the 30-Day Action Plan
            </Link>
            <Link 
              href="/free-marketing-sites-notaries"
              className="inline-block bg-white text-notary-navy px-8 py-4 font-bold text-lg hover:bg-gray-100 transition border-2 border-notary-gold"
            >
              List Your Business for Free
            </Link>
          </div>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">Frequently Asked Questions About Notary Pricing</h2>

<div className="space-y-6 mb-12">
  
  <div className="bg-gray-50 p-6 rounded">
    <h3 className="text-xl font-bold text-notary-navy mb-3">How much should a mobile notary charge?</h3>
    <p className="text-gray-700">
      Mobile notaries should charge your state's maximum per signature ($2-15) PLUS a travel fee ($25-75 depending on distance). For a typical appointment with 1-2 signatures within 15 miles, charge $50-75 total. Premium for after-hours, weekends, or specialized services (hospitals, jails).
    </p>
  </div>

  <div className="bg-gray-50 p-6 rounded">
    <h3 className="text-xl font-bold text-notary-navy mb-3">What is a typical notary fee?</h3>
    <p className="text-gray-700">
      The typical notary fee ranges from $5-15 per signature depending on your state. California, Washington, and Nevada charge $15 (highest). New York, Illinois, and Georgia charge $1-2 (lowest). Most states fall in the $5-10 range. Remember: this is just the notarization fee—mobile notaries add travel fees on top.
    </p>
  </div>

  <div className="bg-gray-50 p-6 rounded">
    <h3 className="text-xl font-bold text-notary-navy mb-3">How much does a notary cost at a bank?</h3>
    <p className="text-gray-700">
      Banks typically charge $0-10 per signature for existing customers, sometimes free. Non-customers may pay $10-25. However, banks require you to visit during business hours (inconvenient). Mobile notaries charge more ($50-100) but come to you at your convenience.
    </p>
  </div>

  <div className="bg-gray-50 p-6 rounded">
    <h3 className="text-xl font-bold text-notary-navy mb-3">How much is a mobile notary in California?</h3>
    <p className="text-gray-700">
      California mobile notaries charge $15 per signature (state maximum) plus $25-75 travel fee. Total for a typical mobile appointment: $40-90 depending on distance and number of signatures. After-hours or rush service: $75-150.
    </p>
  </div>

  <div className="bg-gray-50 p-6 rounded">
    <h3 className="text-xl font-bold text-notary-navy mb-3">How much is a mobile notary in Texas?</h3>
    <p className="text-gray-700">
      Texas mobile notaries charge $6 per signature (state maximum) plus travel fees. Because the notarial fee is low, Texas notaries rely heavily on travel fees ($35-100 depending on distance). Typical appointment total: $50-100.
    </p>
  </div>

  <div className="bg-gray-50 p-6 rounded">
    <h3 className="text-xl font-bold text-notary-navy mb-3">How much is a mobile notary in Florida?</h3>
    <p className="text-gray-700">
      Florida mobile notaries charge $10 per signature (state maximum) plus travel fees ($25-60). Online/remote notarizations can charge up to $25 per signature. Typical mobile appointment: $50-80 total.
    </p>
  </div>

  <div className="bg-gray-50 p-6 rounded">
    <h3 className="text-xl font-bold text-notary-navy mb-3">How much do notary publics charge?</h3>
    <p className="text-gray-700">
      Stationary notaries (at an office, bank, or shipping store) charge $5-15 per signature. Mobile notaries who travel to you charge $50-100+ per appointment (notarization + travel). Loan signing agents charge $100-200 per closing appointment.
    </p>
  </div>

  <div className="bg-gray-50 p-6 rounded">
    <h3 className="text-xl font-bold text-notary-navy mb-3">Can a notary charge a travel fee?</h3>
    <p className="text-gray-700">
      Yes! Travel fees are separate from notarial fees and are unlimited in most states. Mobile notaries charge $25-75 for local travel (0-20 miles), $75-150 for distant travel (20-40 miles), and premium rates for after-hours or specialized locations (hospitals, jails).
    </p>
  </div>

  <div className="bg-gray-50 p-6 rounded">
    <h3 className="text-xl font-bold text-notary-navy mb-3">How much can a mobile notary make?</h3>
    <p className="text-gray-700">
      Part-time mobile notaries earn $1,500-3,000/month. Full-time mobile notaries earn $3,000-6,000/month. Loan signing agents (full-time) can earn $6,000-12,000/month ($72K-144K annually). Income depends on volume, marketing, and whether you're loan signing certified.
    </p>
  </div>

  <div className="bg-gray-50 p-6 rounded">
    <h3 className="text-xl font-bold text-notary-navy mb-3">Do notaries make good money?</h3>
    <p className="text-gray-700">
      General notaries make modest supplemental income ($300-1,500/month part-time). Mobile notaries can make decent income ($2,000-6,000/month). Loan signing agents make excellent income ($6,000-12,000/month full-time). The key is specialization and professional marketing.
    </p>
  </div>

  <div className="bg-gray-50 p-6 rounded">
    <h3 className="text-xl font-bold text-notary-navy mb-3">How much does a notary make per signature?</h3>
    <p className="text-gray-700">
      Notaries earn $1-15 per signature depending on state maximum fees. However, "per signature" is misleading—mobile notaries make money on travel fees, not just signatures. A mobile appointment with 2 signatures might earn $75 total ($15 per signature + $45 travel fee).
    </p>
  </div>

  <div className="bg-gray-50 p-6 rounded">
    <h3 className="text-xl font-bold text-notary-navy mb-3">How much does a traveling notary cost?</h3>
    <p className="text-gray-700">
      Traveling notaries (another term for mobile notaries) cost $50-100 for local appointments, $100-200 for distant travel or complex services. After-hours, weekends, and holidays command 1.5x-2x standard rates. Factor in convenience—they come to you!
    </p>
  </div>

  <div className="bg-gray-50 p-6 rounded">
    <h3 className="text-xl font-bold text-notary-navy mb-3">What is the average cost of a notary?</h3>
    <p className="text-gray-700">
      Average notary cost depends on service type: Walk-in notary (bank, UPS store): $5-15 per signature. Mobile notary at your location: $50-100 per appointment. Loan signing: $100-200 per closing. Average across all services: ~$75 per appointment.
    </p>
  </div>

  <div className="bg-gray-50 p-6 rounded">
    <h3 className="text-xl font-bold text-notary-navy mb-3">How much should I pay a notary?</h3>
    <p className="text-gray-700">
      Expect to pay $50-100 for a mobile notary to come to your home or office with 1-3 signatures. More signatures, longer distances, or after-hours service increases the cost. Loan signings (mortgage closings) cost $100-200 but include extensive document review.
    </p>
  </div>

  <div className="bg-gray-50 p-6 rounded">
    <h3 className="text-xl font-bold text-notary-navy mb-3">Can notaries set their own prices?</h3>
    <p className="text-gray-700">
      Notaries can charge UP TO their state's maximum per signature, but not more. However, travel fees, convenience premiums, and specialized service charges are unlimited in most states. This is how mobile notaries set competitive pricing and make sustainable income.
    </p>
  </div>

  <div className="bg-gray-50 p-6 rounded">
    <h3 className="text-xl font-bold text-notary-navy mb-3">Do notaries charge by the hour or by the signature?</h3>
    <p className="text-gray-700">
      Notaries charge by the signature (per notarial act), but mobile notaries effectively charge by the appointment (signature fees + travel). Loan signing agents charge per signing package (flat rate for the entire closing, typically $100-200 regardless of how many signatures).
    </p>
  </div>

  <div className="bg-gray-50 p-6 rounded">
    <h3 className="text-xl font-bold text-notary-navy mb-3">How much does a loan signing agent make per signing?</h3>
    <p className="text-gray-700">
      Loan signing agents earn $100-200 per signing depending on complexity, distance, and timing. Standard refinances: $100-125. Rush signings: $150-200. Distant travel (30+ miles): $150-250. Scan-backs required: add $25-50. Average experienced agent: $135/signing.
    </p>
  </div>

  <div className="bg-gray-50 p-6 rounded">
    <h3 className="text-xl font-bold text-notary-navy mb-3">Is being a notary worth it financially?</h3>
    <p className="text-gray-700">
      As a side business: Yes ($1,500-3,000/month extra income). As a full-time mobile notary: Maybe ($3,000-6,000/month, livable but not lucrative). As a full-time loan signing agent: Absolutely ($6,000-12,000/month with growth potential). The key is getting certified for loan signings.
    </p>
  </div>

  <div className="bg-gray-50 p-6 rounded">
    <h3 className="text-xl font-bold text-notary-navy mb-3">What expenses do mobile notaries have?</h3>
    <p className="text-gray-700">
      Mobile notary expenses include: Notary commission/bond ($100-300), E&O insurance ($50-150/year), supplies ($100-200), vehicle (gas, maintenance), printer for loan signings ($200-400), marketing ($0-500/year), continuing education ($50-200). Annual total: $500-2,000 depending on volume.
    </p>
  </div>

  <div className="bg-gray-50 p-6 rounded">
    <h3 className="text-xl font-bold text-notary-navy mb-3">Can I negotiate notary fees?</h3>
    <p className="text-gray-700">
      For individuals: Mobile notary prices are usually firm (they're already traveling to you). For businesses: Volume discounts or monthly retainers are negotiable. Title companies: Loan signing fees may have some flexibility ($10-20 range), but undercutting too much hurts the industry.
    </p>
  </div>

</div>

          {/* Related Resources */}
          <div className="border-t-2 border-gray-200 pt-8 mt-12">
            <h3 className="text-2xl font-bold text-notary-navy mb-6">Continue Building Your Business:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/target-industries-for-notaries" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
                <h4 className="font-bold text-notary-navy mb-2">15 Target Industries for Notaries</h4>
                <p className="text-gray-600 text-sm">Where to find clients who pay premium rates</p>
              </Link>
              <Link href="/mobile-notary-supplies" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
                <h4 className="font-bold text-notary-navy mb-2">Mobile Notary Supplies Checklist</h4>
                <p className="text-gray-600 text-sm">Look professional and command higher fees</p>
              </Link>
              <Link href="/why-now-is-perfect-time-loan-signing-agent" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
                <h4 className="font-bold text-notary-navy mb-2">Why 2026 is Perfect for Loan Signing Agents</h4>
                <p className="text-gray-600 text-sm">The highest-paying notary niche explained</p>
              </Link>
              <Link href="/essential-notary-books" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
                <h4 className="font-bold text-notary-navy mb-2">7 Essential Notary Books</h4>
                <p className="text-gray-600 text-sm">Build expertise that justifies premium pricing</p>
              </Link>
            </div>
          </div>

        </div>
      </article>
    </div>
  );
}
