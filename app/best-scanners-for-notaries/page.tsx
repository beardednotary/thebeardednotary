import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Scanners for Notaries & Loan Signing Agents 2026 | The Bearded Notary',
  description: 'Find the best scanner for mobile notary and loan signing work. Compare portable scanners, duplex speed, scan-back workflow, and the best picks for 2026.',
  openGraph: {
    title: 'Best Scanners for Notaries & Loan Signing Agents 2026',
    description: 'Portable scanner picks, scan-back workflow advice, and the best scanner options for working notaries.',
    images: ['/images/mobile-notary-supplies-featured.png'],
  },
  alternates: {
    canonical: '/best-scanners-for-notaries',
  },
};

export default function BestScannersForNotaries() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-notary-navy text-white py-6">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/" className="text-notary-gold hover:underline text-sm mb-2 block">
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold">
            Best Scanners for Notaries &amp; Loan Signing Agents (2026 Guide)
          </h1>
        </div>
      </header>

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-8 font-semibold">
            A good scanner saves deals, speeds up scan-backs, and makes you look more professional to title companies.
            If you do loan signings regularly, a scanner is no longer optional gear.
          </p>

          <div className="bg-blue-50 border-2 border-blue-500 p-8 mb-8 rounded">
            <h2 className="text-2xl font-bold text-notary-navy mb-4">Quick Answer: Best Scanners for Notaries</h2>
            <div className="space-y-3 text-gray-700">
              <p><strong>Best Overall Portable:</strong> Epson WorkForce ES-300W</p>
              <p><strong>Best Budget Portable:</strong> Brother DS-640</p>
              <p><strong>Best Ultra-Portable:</strong> Epson ES-50</p>
              <p><strong>Best Office Upgrade:</strong> Fujitsu ScanSnap iX1600</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">Why Notaries Need a Scanner</h2>

          <p className="text-gray-700 mb-6">
            General notary work can often get by without one, but loan signing work changes the equation. Many companies want
            scan-backs before they approve the package for shipment. If you cannot scan cleanly and quickly, you become slower,
            less reliable, and less attractive for repeat work.
          </p>

          <div className="bg-gray-50 p-6 mb-8 rounded">
            <h3 className="text-xl font-bold text-notary-navy mb-4">A scanner helps you:</h3>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Handle scan-backs fast</strong> - send signed pages before dropping the package</li>
              <li><strong>Catch issues early</strong> - review missed initials, signatures, or notarizations before you leave</li>
              <li><strong>Work from anywhere</strong> - scan from your car, home office, or a borrower&apos;s driveway if needed</li>
              <li><strong>Look more professional</strong> - title companies notice smooth document handling</li>
              <li><strong>Create backups</strong> - helpful when a shipment is delayed or a page is questioned</li>
            </ul>
          </div>

          <div className="bg-notary-gold bg-opacity-10 border-l-4 border-notary-gold p-6 mb-8">
            <p className="text-gray-800 font-semibold">
              <strong>Bottom line:</strong> If you do 5 or more loan signings per month, a duplex scanner is a strong ROI purchase.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">Portable Scanner vs Desktop Scanner</h2>

          <p className="text-gray-700 mb-6">
            Most notaries should start with a portable duplex scanner. Desktop scanners are faster and nicer to use from a home
            office, but portable models fit the reality of mobile signing work much better.
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse border-2 border-gray-300">
              <thead>
                <tr className="bg-notary-navy text-white">
                  <th className="border border-gray-300 p-3 text-left">Feature</th>
                  <th className="border border-gray-300 p-3 text-left">Portable Scanner</th>
                  <th className="border border-gray-300 p-3 text-left">Desktop Scanner</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-semibold">Best For</td>
                  <td className="border border-gray-300 p-3">Mobile signings and scan-backs on the go</td>
                  <td className="border border-gray-300 p-3">Heavy office use and bulk scanning</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">Weight</td>
                  <td className="border border-gray-300 p-3">1-3 lbs</td>
                  <td className="border border-gray-300 p-3">7-15 lbs</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-semibold">Typical Speed</td>
                  <td className="border border-gray-300 p-3">15-25 pages per minute</td>
                  <td className="border border-gray-300 p-3">25-40 pages per minute</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">Battery Option</td>
                  <td className="border border-gray-300 p-3">Often available</td>
                  <td className="border border-gray-300 p-3">Rare</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-semibold">Price Range</td>
                  <td className="border border-gray-300 p-3">$100-350</td>
                  <td className="border border-gray-300 p-3">$300-600</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">Recommendation</td>
                  <td className="border border-gray-300 p-3">Best first scanner for most notaries</td>
                  <td className="border border-gray-300 p-3">Best second scanner if volume grows</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">What to Look for in a Notary Scanner</h2>

          <div className="space-y-6 mb-8">
            <div className="bg-white border-2 border-notary-gold p-6 rounded">
              <h3 className="text-xl font-bold text-notary-navy mb-3">Duplex Scanning</h3>
              <p className="text-gray-700">
                You want both sides scanned in one pass. Manual flipping is slow and frustrating, especially after a long signing.
              </p>
            </div>
            <div className="bg-white border-2 border-notary-gold p-6 rounded">
              <h3 className="text-xl font-bold text-notary-navy mb-3">Reliable Paper Feed</h3>
              <p className="text-gray-700">
                Loan packages include mixed page counts, initials, signatures, and occasional thicker paper. A scanner that jams regularly is not worth saving a little money on.
              </p>
            </div>
            <div className="bg-white border-2 border-notary-gold p-6 rounded">
              <h3 className="text-xl font-bold text-notary-navy mb-3">Compact Size</h3>
              <p className="text-gray-700">
                If it lives in your car or bag, size matters. Smaller scanners are easier to keep with you so you actually use them when needed.
              </p>
            </div>
            <div className="bg-white border-2 border-notary-gold p-6 rounded">
              <h3 className="text-xl font-bold text-notary-navy mb-3">USB or Battery Power</h3>
              <p className="text-gray-700">
                Power flexibility matters for mobile work. Battery-powered models are especially useful when you are away from home or scanning from the field.
              </p>
            </div>
            <div className="bg-white border-2 border-notary-gold p-6 rounded">
              <h3 className="text-xl font-bold text-notary-navy mb-3">Fast Export to PDF</h3>
              <p className="text-gray-700">
                Your scanner should make it easy to create clean PDFs you can upload or email without fighting the software.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">Best Scanner Picks for Notaries</h2>

          <div className="bg-gradient-to-r from-notary-navy to-blue-900 text-white p-6 mb-10 rounded">
            <div className="flex items-center mb-4">
              <span className="bg-notary-gold text-notary-navy px-3 py-1 rounded font-bold mr-3">BEST OVERALL</span>
              <h3 className="text-2xl font-bold">Epson WorkForce ES-300W</h3>
            </div>
            <p className="text-lg mb-4">
              The best mix of portability, duplex speed, and real working-notary usefulness.
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <p><strong>Best for:</strong> Notaries doing regular scan-backs</p>
                <p><strong>Why it wins:</strong> Wireless, battery-powered, duplex, and fast enough for serious mobile use</p>
              </div>
              <div>
                <p><strong>Watch out for:</strong> Higher price than entry-level models</p>
                <p><strong>Verdict:</strong> Best first serious scanner if you want one tool that travels well</p>
              </div>
            </div>
            <a
              href="https://amzn.to/4j1Pntw"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 bg-notary-gold text-notary-navy px-6 py-3 font-bold hover:bg-opacity-90 transition"
            >
              Check Current Price
            </a>
          </div>

          <div className="bg-gray-50 p-6 mb-8 rounded">
            <h3 className="text-2xl font-bold text-notary-navy mb-3">Brother DS-640</h3>
            <p className="text-gray-700 mb-4">
              A smart budget pick for newer notaries who want something slim, simple, and easy to keep in a bag.
              It is best if your scan-back volume is still light.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Very portable and lightweight</li>
              <li>Lower cost of entry</li>
              <li>Best for occasional scan-backs, not heavy daily use</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 mb-8 rounded">
            <h3 className="text-2xl font-bold text-notary-navy mb-3">Epson ES-50</h3>
            <p className="text-gray-700 mb-4">
              Think of this as the ultra-portable or backup choice. It is tiny and easy to carry, but it is not the best primary scanner for busy signing agents.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Excellent emergency or backup scanner</li>
              <li>Small footprint for glovebox or briefcase carry</li>
              <li>Less ideal for thick scan-back sessions</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 mb-8 rounded">
            <h3 className="text-2xl font-bold text-notary-navy mb-3">Fujitsu ScanSnap iX1600</h3>
            <p className="text-gray-700 mb-4">
              If you scan a lot from a home office and want something faster and more comfortable, this is the premium office choice.
              It is less mobile, but great for higher-volume workflows.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Great software and workflow</li>
              <li>Excellent for heavy document handling</li>
              <li>Best as an office scanner, not a bag scanner</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">Do You Need a Scanner If Your Printer Can Scan?</h2>

          <p className="text-gray-700 mb-8">
            Sometimes yes, sometimes no. An all-in-one printer can work from a home office, but it is usually bulkier and less convenient for mobile work.
            A dedicated scanner is easier to carry, faster to deploy, and less disruptive when you only need scan-backs.
          </p>

          <div className="bg-notary-navy text-white p-8 my-12 rounded text-center">
            <h3 className="text-2xl font-bold mb-4">Scanner or printer first?</h3>
            <p className="text-lg mb-6">
              If you are still building your setup, start with the printer guide first, then come back here for the best scanner add-on.
            </p>
            <Link
              href="/best-printers-for-notaries"
              className="inline-block bg-notary-gold px-8 py-4 font-bold text-lg hover:bg-opacity-90 transition"
              style={{ color: '#1a2332' }}
            >
              Read the Printer Guide
            </Link>
          </div>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">Frequently Asked Questions About Notary Scanners</h2>

          <div className="space-y-6 mb-12">
            <div className="bg-gray-50 p-6 rounded">
              <h3 className="text-xl font-bold text-notary-navy mb-3">What is the best scanner for a mobile notary?</h3>
              <p className="text-gray-700">
                For most working notaries, the best choice is a portable duplex scanner with reliable paper feed and battery or USB flexibility. That is why the Epson WorkForce ES-300W is such a strong overall fit.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded">
              <h3 className="text-xl font-bold text-notary-navy mb-3">Do loan signing agents need a scanner?</h3>
              <p className="text-gray-700">
                If you do scan-backs regularly, yes. A scanner helps you send signed pages quickly, catch issues before shipment, and look more professional to title companies.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded">
              <h3 className="text-xl font-bold text-notary-navy mb-3">Can I use an all-in-one printer instead of a scanner?</h3>
              <p className="text-gray-700">
                You can, especially from a home office. But a dedicated portable scanner is usually more convenient for mobile work and easier to keep with you during busy signing days.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded">
              <h3 className="text-xl font-bold text-notary-navy mb-3">What matters more: speed or portability?</h3>
              <p className="text-gray-700">
                For most notaries, portability and reliability matter more than max speed. A scanner you actually keep with you is more useful than a faster machine left at home.
              </p>
            </div>
          </div>

          <div className="border-t-2 border-gray-200 pt-8 mt-12">
            <h3 className="text-2xl font-bold text-notary-navy mb-6">Complete Your Mobile Notary Setup:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/best-printers-for-notaries" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
                <h4 className="font-bold text-notary-navy mb-2">Best Printers for Notaries</h4>
                <p className="text-gray-600 text-sm">Pair your scanner with the right printer for full signing workflow coverage</p>
              </Link>
              <Link href="/mobile-notary-supplies" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
                <h4 className="font-bold text-notary-navy mb-2">Mobile Notary Supplies Checklist</h4>
                <p className="text-gray-600 text-sm">See where a scanner fits inside your full mobile setup</p>
              </Link>
              <Link href="/how-much-to-charge-mobile-notary" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
                <h4 className="font-bold text-notary-navy mb-2">Notary Pricing Guide</h4>
                <p className="text-gray-600 text-sm">Charge enough to cover your equipment and still protect your profit</p>
              </Link>
              <Link href="/smart-money-management-for-notaries" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
                <h4 className="font-bold text-notary-navy mb-2">Smart Money Management for Notaries</h4>
                <p className="text-gray-600 text-sm">Track mileage, supplies, and scanner ROI like a real business</p>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
