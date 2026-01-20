import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Common Documents Notaries Encounter: Complete Glossary (2026) | The Bearded Notary',
  description: 'Comprehensive guide to documents mobile notaries and loan signing agents will encounter. Learn what each document is, when it\'s used, and what to watch for.',
  alternates: {
    canonical: '/document-types-notaries-glossary', 
  },
  openGraph: {
    title: 'Common Documents Notaries Encounter: Complete Glossary',
    description: 'From affidavits to quit claim deeds - everything notaries need to know about document types.',
    images: ['/images/document-types-notaries.png'],
  },
};

export default function DocumentTypesNotariesGlossary() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-notary-navy text-white py-6">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/" className="text-notary-gold hover:underline text-sm mb-2 block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold">
            Common Documents Notaries Encounter: Complete Glossary
          </h1>
        </div>
      </header>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        
        {/* Featured Image */}
        <div className="my-8">
          <img 
            src="/images/document-types-notaries.png"
            alt="Document types notaries specialize in"
            className="w-full rounded shadow-lg"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          
          <p className="text-xl text-gray-700 mb-8 font-semibold">
            As a mobile notary or loan signing agent, you'll encounter dozens of different document types. Understanding what each document is, when it's used, and what to watch for will make you more confident, faster, and more valuable to clients.
          </p>

          <div className="bg-notary-gold bg-opacity-10 border-l-4 border-notary-gold p-6 my-8">
            <h3 className="text-xl font-bold text-notary-navy mb-3">Important Note</h3>
            <p className="text-gray-800">
              As a notary, you are <strong>not</strong> providing legal advice or explaining what documents mean. Your role is to verify identity, ensure willingness, and witness signatures. If a signer asks what a document means, direct them to their attorney, lender, or the party who prepared the document.
            </p>
          </div>

          <p className="text-gray-700 mb-8">
            This glossary helps you recognize documents and understand their general purpose - not to give legal advice. When working with <Link href="/target-industries-for-notaries" className="text-notary-gold hover:underline">different industries</Link>, you'll see these documents frequently.
          </p>

          {/* Table of Contents */}
          <div className="bg-gray-50 p-6 mb-12 rounded">
            <h3 className="text-xl font-bold text-notary-navy mb-4">Document Categories:</h3>
            <div className="grid md:grid-cols-2 gap-3">
              <a href="#affidavits" className="text-notary-gold hover:underline">• Affidavits & Sworn Statements</a>
              <a href="#medical" className="text-notary-gold hover:underline">• Advance Medical Directives</a>
              <a href="#poa" className="text-notary-gold hover:underline">• Powers of Attorney</a>
              <a href="#wills" className="text-notary-gold hover:underline">• Wills & Living Trusts</a>
              <a href="#deeds" className="text-notary-gold hover:underline">• Grant Deeds & Property Transfer</a>
              <a href="#contracts" className="text-notary-gold hover:underline">• Contracts & Agreements</a>
              <a href="#travel" className="text-notary-gold hover:underline">• Minor Travel Documents</a>
              <a href="#quitclaim" className="text-notary-gold hover:underline">• Quit Claim Deeds</a>
              <a href="#divorce" className="text-notary-gold hover:underline">• Divorce Papers</a>
              <a href="#financial" className="text-notary-gold hover:underline">• Financial Documents</a>
              <a href="#dmv" className="text-notary-gold hover:underline">• DMV Documents</a>
              <a href="#loan" className="text-notary-gold hover:underline">• Loan Signing Documents</a>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">Document Types A-Z</h2>

          {/* Affidavits */}
          <div id="affidavits" className="mb-12">
            <h3 className="text-2xl font-bold text-notary-navy mb-4 border-b-2 border-notary-gold pb-2">Affidavits</h3>
            
            <div className="bg-gray-50 p-6 mb-4 rounded">
              <h4 className="text-xl font-bold text-notary-navy mb-2">What is an Affidavit?</h4>
              <p className="text-gray-700 mb-3">
                A written statement of facts sworn to be true under oath. The signer affirms the truthfulness of the statements before a notary.
              </p>
              <div className="bg-white p-4 mt-3">
                <p className="font-semibold text-notary-navy mb-2">Common types you'll see:</p>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li><strong>Affidavit of Identity:</strong> Confirms person's identity (used in real estate, immigration)</li>
                  <li><strong>Affidavit of Residency:</strong> Proves where someone lives (school enrollment, DMV)</li>
                  <li><strong>Affidavit of Support:</strong> Immigration documents promising financial support</li>
                  <li><strong>Affidavit of Heirship:</strong> Establishes who inherits property when there's no will</li>
                  <li><strong>Small Estate Affidavit:</strong> Simplifies probate for smaller estates</li>
                </ul>
                <p className="text-gray-700 mt-3 italic">
                  <strong>Notary note:</strong> Affidavits require a jurat (sworn statement), not just an acknowledgment.
                </p>
              </div>
            </div>
          </div>

          {/* Advance Medical Directives */}
          <div id="medical" className="mb-12">
            <h3 className="text-2xl font-bold text-notary-navy mb-4 border-b-2 border-notary-gold pb-2">Advance Medical Directives</h3>
            
            <div className="bg-gray-50 p-6 mb-4 rounded">
              <h4 className="text-xl font-bold text-notary-navy mb-2">What are Advance Medical Directives?</h4>
              <p className="text-gray-700 mb-3">
                Legal documents specifying healthcare wishes if the person becomes unable to make decisions. Common at <Link href="/target-industries-for-notaries" className="text-notary-gold hover:underline">assisted living facilities and hospitals</Link>.
              </p>
              <div className="bg-white p-4 mt-3">
                <p className="font-semibold text-notary-navy mb-2">Includes:</p>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li><strong>Living Will:</strong> Specifies end-of-life care preferences (life support, resuscitation)</li>
                  <li><strong>Healthcare Power of Attorney:</strong> Designates someone to make medical decisions</li>
                  <li><strong>HIPAA Release:</strong> Allows healthcare providers to share information</li>
                  <li><strong>Do Not Resuscitate (DNR):</strong> Medical order, sometimes requires notarization</li>
                </ul>
                <p className="text-gray-700 mt-3 italic">
                  <strong>Important:</strong> Signer must have mental capacity. If you doubt capacity, decline to notarize.
                </p>
              </div>
            </div>
          </div>

          {/* Durable Power of Attorney */}
          <div id="poa" className="mb-12">
            <h3 className="text-2xl font-bold text-notary-navy mb-4 border-b-2 border-notary-gold pb-2">Durable Power of Attorney</h3>
            
            <div className="bg-gray-50 p-6 mb-4 rounded">
              <h4 className="text-xl font-bold text-notary-navy mb-2">What is a Power of Attorney?</h4>
              <p className="text-gray-700 mb-3">
                Legal document granting someone (the "attorney-in-fact" or "agent") authority to act on another person's (the "principal") behalf.
              </p>
              <div className="bg-white p-4 mt-3">
                <p className="font-semibold text-notary-navy mb-2">Types:</p>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li><strong>General POA:</strong> Broad powers over finances, property, business</li>
                  <li><strong>Limited/Special POA:</strong> Specific tasks (sell a car, sign at closing)</li>
                  <li><strong>Durable POA:</strong> Remains valid if principal becomes incapacitated</li>
                  <li><strong>Springing POA:</strong> Only becomes effective upon specific event (incapacity)</li>
                  <li><strong>Healthcare POA:</strong> Medical decisions only (see Advance Directives)</li>
                </ul>
                <p className="text-gray-700 mt-3 italic">
                  <strong>Red flags:</strong> POAs are commonly used in elder fraud. Verify signer understands and is not being coerced.
                </p>
              </div>
            </div>
          </div>

          {/* Wills and Living Trusts */}
          <div id="wills" className="mb-12">
            <h3 className="text-2xl font-bold text-notary-navy mb-4 border-b-2 border-notary-gold pb-2">Wills and Living Trusts</h3>
            
            <div className="bg-gray-50 p-6 mb-4 rounded">
              <h4 className="text-xl font-bold text-notary-navy mb-2">Estate Planning Documents</h4>
              <p className="text-gray-700 mb-3">
                Documents that determine how assets are distributed after death or during incapacity.
              </p>
              <div className="bg-white p-4 mt-3">
                <p className="font-semibold text-notary-navy mb-2">Common documents:</p>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li><strong>Last Will and Testament:</strong> Specifies asset distribution, guardians for minors</li>
                  <li><strong>Living Trust (Revocable Trust):</strong> Assets placed in trust, avoids probate</li>
                  <li><strong>Trust Amendment:</strong> Changes to existing trust</li>
                  <li><strong>Certification of Trust:</strong> Proves trust exists without revealing details</li>
                </ul>
                <p className="text-gray-700 mt-3 italic">
                  <strong>State rules vary:</strong> Some states don't require notarization of wills. Check your state laws.
                </p>
              </div>
            </div>
          </div>

          {/* Grant Deeds */}
          <div id="deeds" className="mb-12">
            <h3 className="text-2xl font-bold text-notary-navy mb-4 border-b-2 border-notary-gold pb-2">Grant Deeds</h3>
            
            <div className="bg-gray-50 p-6 mb-4 rounded">
              <h4 className="text-xl font-bold text-notary-navy mb-2">What is a Grant Deed?</h4>
              <p className="text-gray-700 mb-3">
                Legal document transferring ownership of real property from one party to another. Used in real estate transactions.
              </p>
              <div className="bg-white p-4 mt-3">
                <p className="font-semibold text-notary-navy mb-2">Key points:</p>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>Guarantees property is free from liens (unless disclosed)</li>
                  <li>Grantor (seller) signs; Grantee (buyer) receives</li>
                  <li>Must be notarized to be recorded</li>
                  <li>Common in CA, OR, and other western states</li>
                </ul>
                <p className="text-gray-700 mt-3">
                  <strong>Related:</strong> Warranty Deeds (stronger guarantees, used in other states)
                </p>
              </div>
            </div>
          </div>

          {/* Contracts */}
          <div id="contracts" className="mb-12">
            <h3 className="text-2xl font-bold text-notary-navy mb-4 border-b-2 border-notary-gold pb-2">Contracts</h3>
            
            <div className="bg-gray-50 p-6 mb-4 rounded">
              <h4 className="text-xl font-bold text-notary-navy mb-2">Business and Personal Contracts</h4>
              <p className="text-gray-700 mb-3">
                While most contracts don't legally require notarization, many parties choose it to add authenticity and deter fraud.
              </p>
              <div className="bg-white p-4 mt-3">
                <p className="font-semibold text-notary-navy mb-2">Common contracts you'll notarize:</p>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li><strong>Lease Agreements:</strong> Rental contracts for property</li>
                  <li><strong>Purchase Agreements:</strong> Real estate, vehicles, business sales</li>
                  <li><strong>Business Partnership Agreements:</strong> Formation documents</li>
                  <li><strong>Employment Contracts:</strong> High-level executive agreements</li>
                  <li><strong>Non-Disclosure Agreements (NDAs):</strong> Sometimes notarized for extra protection</li>
                  <li><strong>Construction Contracts:</strong> Contractor agreements</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Minor Travel Documents */}
          <div id="travel" className="mb-12">
            <h3 className="text-2xl font-bold text-notary-navy mb-4 border-b-2 border-notary-gold pb-2">Minor Travel Documents</h3>
            
            <div className="bg-gray-50 p-6 mb-4 rounded">
              <h4 className="text-xl font-bold text-notary-navy mb-2">Parental Consent for Travel</h4>
              <p className="text-gray-700 mb-3">
                When a minor travels without one or both parents, airlines and countries may require notarized consent.
              </p>
              <div className="bg-white p-4 mt-3">
                <p className="font-semibold text-notary-navy mb-2">What to include:</p>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>Child's full name and birth date</li>
                  <li>Parent(s) giving consent</li>
                  <li>Adult(s) traveling with child</li>
                  <li>Travel dates and destinations</li>
                  <li>Parent signature(s) - both parents if possible</li>
                </ul>
                <p className="text-gray-700 mt-3 italic">
                  <strong>Pro tip:</strong> This is high-demand in summer and around holidays. Market to families, schools, and travel agencies.
                </p>
              </div>
            </div>
          </div>

          {/* Quit Claim Deeds */}
          <div id="quitclaim" className="mb-12">
            <h3 className="text-2xl font-bold text-notary-navy mb-4 border-b-2 border-notary-gold pb-2">Quit Claim Deeds</h3>
            
            <div className="bg-gray-50 p-6 mb-4 rounded">
              <h4 className="text-xl font-bold text-notary-navy mb-2">What is a Quit Claim Deed?</h4>
              <p className="text-gray-700 mb-3">
                Transfers property ownership without any guarantees about clear title. "Whatever interest I have, I give to you."
              </p>
              <div className="bg-white p-4 mt-3">
                <p className="font-semibold text-notary-navy mb-2">Common uses:</p>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>Transferring property between family members</li>
                  <li>Adding/removing spouse from title (divorce, marriage)</li>
                  <li>Clearing title issues</li>
                  <li>Transferring to trust</li>
                </ul>
                <p className="text-gray-700 mt-3">
                  <strong>Difference from Grant Deed:</strong> Grant Deed guarantees clear title; Quit Claim makes no promises.
                </p>
              </div>
            </div>
          </div>

          {/* Divorce Papers */}
          <div id="divorce" className="mb-12">
            <h3 className="text-2xl font-bold text-notary-navy mb-4 border-b-2 border-notary-gold pb-2">Divorce Papers</h3>
            
            <div className="bg-gray-50 p-6 mb-4 rounded">
              <h4 className="text-xl font-bold text-notary-navy mb-2">Divorce-Related Documents</h4>
              <p className="text-gray-700 mb-3">
                Various documents in divorce proceedings may require notarization.
              </p>
              <div className="bg-white p-4 mt-3">
                <p className="font-semibold text-notary-navy mb-2">Common documents:</p>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li><strong>Marital Settlement Agreement:</strong> Division of assets, custody, support</li>
                  <li><strong>Parenting Plan:</strong> Custody and visitation arrangements</li>
                  <li><strong>Financial Affidavits:</strong> Income and asset declarations</li>
                  <li><strong>Consent to Divorce:</strong> Uncontested divorce agreement</li>
                </ul>
                <p className="text-gray-700 mt-3 italic">
                  <strong>Sensitivity required:</strong> Divorces are emotional. Be professional and neutral.
                </p>
              </div>
            </div>
          </div>

          {/* Financial Documents */}
          <div id="financial" className="mb-12">
            <h3 className="text-2xl font-bold text-notary-navy mb-4 border-b-2 border-notary-gold pb-2">Financial Documents</h3>
            
            <div className="bg-gray-50 p-6 mb-4 rounded">
              <h4 className="text-xl font-bold text-notary-navy mb-2">Banking and Financial Paperwork</h4>
              <p className="text-gray-700 mb-3">
                Banks and financial institutions often require notarization for account changes and large transactions.
              </p>
              <div className="bg-white p-4 mt-3">
                <p className="font-semibold text-notary-navy mb-2">Common financial docs:</p>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li><strong>Loan Applications:</strong> Personal, business, mortgage modifications</li>
                  <li><strong>Promissory Notes:</strong> IOU for loans between individuals</li>
                  <li><strong>Financial Statements:</strong> Sworn statements of assets/liabilities</li>
                  <li><strong>IRS Forms:</strong> Some tax documents (Form 2848, Form 8821)</li>
                  <li><strong>Safe Deposit Box Access:</strong> Authorization forms</li>
                </ul>
              </div>
            </div>
          </div>

          {/* DMV Documents */}
          <div id="dmv" className="mb-12">
            <h3 className="text-2xl font-bold text-notary-navy mb-4 border-b-2 border-notary-gold pb-2">DMV Documents</h3>
            
            <div className="bg-gray-50 p-6 mb-4 rounded">
              <h4 className="text-xl font-bold text-notary-navy mb-2">Vehicle-Related Documents</h4>
              <p className="text-gray-700 mb-3">
                Vehicle transactions frequently require notarization. High volume at <Link href="/target-industries-for-notaries" className="text-notary-gold hover:underline">auto dealerships</Link>.
              </p>
              <div className="bg-white p-4 mt-3">
                <p className="font-semibold text-notary-navy mb-2">Common DMV documents:</p>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li><strong>Bill of Sale:</strong> Vehicle purchase documentation</li>
                  <li><strong>Title Transfer:</strong> Changing vehicle ownership</li>
                  <li><strong>Odometer Disclosure:</strong> Mileage statement (required under 10 years old)</li>
                  <li><strong>Power of Attorney for Vehicle:</strong> Authorize someone to handle DMV transactions</li>
                  <li><strong>Lien Release:</strong> Confirming loan paid off</li>
                  <li><strong>Affidavit of Loss:</strong> Lost title or registration</li>
                </ul>
                <p className="text-gray-700 mt-3 italic">
                  <strong>State variations:</strong> Some states require notarization of vehicle titles, others don't.
                </p>
              </div>
            </div>
          </div>

          {/* Loan Signing Documents */}
          <div id="loan" className="mb-12">
            <h3 className="text-2xl font-bold text-notary-navy mb-4 border-b-2 border-notary-gold pb-2">Loan Signing Documents (Real Estate)</h3>
            
            <div className="bg-gray-50 p-6 mb-4 rounded">
              <h4 className="text-xl font-bold text-notary-navy mb-2">Mortgage Closing Package</h4>
              <p className="text-gray-700 mb-3">
                The most complex and highest-paying notary work. A typical loan signing includes 100-300 pages with multiple notarizations.
              </p>
              <div className="bg-white p-4 mt-3">
                <p className="font-semibold text-notary-navy mb-2">Key documents in closing package:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Promissory Note:</strong> Borrower's promise to repay loan (MOST IMPORTANT - requires notarization)</li>
                  <li><strong>Deed of Trust / Mortgage:</strong> Secures property as collateral</li>
                  <li><strong>Closing Disclosure (CD):</strong> Final loan terms (replaces HUD-1)</li>
                  <li><strong>Notice of Right to Cancel:</strong> 3-day rescission period for refinances</li>
                  <li><strong>Disbursement Authorization:</strong> Permission to release funds</li>
                  <li><strong>Occupancy Affidavit:</strong> Confirms primary residence</li>
                  <li><strong>Title Documents:</strong> Grant Deed, Deed of Trust</li>
                  <li><strong>Compliance Documents:</strong> TRID, RESPA, TILA disclosures</li>
                </ul>
                <p className="text-gray-700 mt-3 font-semibold">
                  <strong>Critical:</strong> Loan signings require specialized training. Do NOT attempt without certification.
                </p>
              </div>
            </div>
          </div>

          {/* Training CTA */}
          <div className="bg-gradient-to-r from-notary-navy to-blue-900 text-white p-8 my-12 rounded">
            <h3 className="text-2xl font-bold mb-4">Want to Master Loan Signing Documents?</h3>
            <p className="text-lg mb-4">
              Loan closings are the most profitable notary work ($75-200 per signing), but they're also the most complex. One mistake can delay a closing and cost you the client.
            </p>
            <p className="text-lg mb-6">
              <strong>Loan Signing System</strong> teaches you:
            </p>
            <ul className="space-y-2 mb-6">
              <li>• Every document in a closing package (what it is, what to watch for)</li>
              <li>• How to walk borrowers through the process</li>
              <li>• Common mistakes and how to avoid them</li>
              <li>• How to get hired by title companies</li>
            </ul>
            <p className="text-lg mb-6">
              Don't risk your reputation with an error-filled signing. Get certified first.
            </p>
            <a 
              href="http://loansigningsystem.com/?afmc=x5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-notary-navy text-white px-8 py-4 font-bold text-lg hover:bg-opacity-90 transition shadow-lg"
            >
              Get Certified with Loan Signing System
            </a>
          </div>

          {/* Quick Reference Section */}
          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">Quick Reference: When to Use Jurat vs. Acknowledgment</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gray-50 p-6 rounded border-2 border-notary-navy">
              <h4 className="text-xl font-bold text-notary-navy mb-3">Jurat (Sworn Statement)</h4>
              <p className="text-gray-700 mb-3">
                Signer swears/affirms content is true. You administer oath.
              </p>
              <p className="font-semibold text-notary-navy mb-2">Use for:</p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Affidavits</li>
                <li>Depositions</li>
                <li>Any document requiring oath</li>
              </ul>
              <p className="text-gray-700 mt-3 italic">
                <strong>Wording:</strong> "Subscribed and sworn to before me..."
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded border-2 border-notary-navy">
              <h4 className="text-xl font-bold text-notary-navy mb-3">Acknowledgment</h4>
              <p className="text-gray-700 mb-3">
                Signer acknowledges they signed document willingly. No oath required.
              </p>
              <p className="font-semibold text-notary-navy mb-2">Use for:</p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Deeds (Grant Deed, Quit Claim)</li>
                <li>Powers of Attorney</li>
                <li>Contracts</li>
                <li>Loan documents</li>
              </ul>
              <p className="text-gray-700 mt-3 italic">
                <strong>Wording:</strong> "Acknowledged before me..."
              </p>
            </div>
          </div>

          {/* Additional Resources */}
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
            <h3 className="text-xl font-bold text-notary-navy mb-3">Still Learning?</h3>
            <p className="text-gray-800 mb-3">
              This glossary covers the most common documents, but every state has unique requirements and document types. Essential resources:
            </p>
            <ul className="space-y-2 text-gray-800">
              <li>• Your state's notary handbook (required reading)</li>
              <li>• <Link href="/essential-notary-books" className="text-notary-gold hover:underline font-semibold">7 Essential Notary Books</Link> for deeper knowledge</li>
              <li>• <Link href="/notary-business-resources" className="text-notary-gold hover:underline font-semibold">85+ Notary Business Resources</Link> including training</li>
              <li>• National Notary Association (NNA) for continuing education</li>
            </ul>
          </div>

          {/* Related Resources */}
          <div className="border-t-2 border-gray-200 pt-8 mt-12">
            <h3 className="text-2xl font-bold text-notary-navy mb-6">Continue Learning:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/target-industries-for-notaries" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
                <h4 className="font-bold text-notary-navy mb-2">Target Industries for Notaries</h4>
                <p className="text-gray-600 text-sm">Where to find clients who need these documents</p>
              </Link>
              <Link href="/why-now-is-perfect-time-loan-signing-agent" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
                <h4 className="font-bold text-notary-navy mb-2">Become a Loan Signing Agent</h4>
                <p className="text-gray-600 text-sm">Master the most profitable document type</p>
              </Link>
              <Link href="/mobile-notary-supplies" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
                <h4 className="font-bold text-notary-navy mb-2">Mobile Notary Supplies</h4>
                <p className="text-gray-600 text-sm">What you need to notarize these documents professionally</p>
              </Link>
              <Link href="/essential-notary-books" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
                <h4 className="font-bold text-notary-navy mb-2">7 Essential Notary Books</h4>
                <p className="text-gray-600 text-sm">Deepen your knowledge of documents and procedures</p>
              </Link>
            </div>
          </div>

        </div>
      </article>
    </div>
  );
}
