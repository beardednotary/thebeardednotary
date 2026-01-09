import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Smart Money Management for Mobile Notaries: Complete Financial Guide (2026) | The Bearded Notary',
  description: 'Complete financial guide for mobile notary businesses: bank accounts, credit cards, tax deductions, bookkeeping, and money-saving strategies for 2026.',
  openGraph: {
    title: 'Smart Money Management for Mobile Notaries: Complete Financial Guide',
    description: 'Bank accounts, credit cards, tax deductions, bookkeeping, and money management strategies for notary businesses.',
    images: ['/images/notary-finances-featured.png'],
  },
};

export default function NotaryFinancialGuide() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-notary-navy text-white py-6">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/" className="text-notary-gold hover:underline text-sm mb-2 block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold">
            Smart Money Management for Mobile Notaries: Complete Financial Guide
          </h1>
        </div>
      </header>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        
        <div className="prose prose-lg max-w-none">
          
          <p className="text-xl text-gray-700 mb-8 font-semibold">
            You're making money as a mobile notary - congratulations! But are you managing it like a business owner or winging it like a side hustle?
          </p>

          <p className="text-gray-700 mb-8">
            The difference between notaries who build sustainable income and those who struggle? Smart money management. Separate accounts, strategic credit cards, proper bookkeeping, and knowing every deduction you're entitled to. This guide covers everything you need to run your notary business like a profitable, professional operation.
          </p>

          <div className="bg-notary-gold bg-opacity-10 border-l-4 border-notary-gold p-6 my-8">
            <h3 className="text-xl font-bold text-notary-navy mb-3">What You'll Learn</h3>
            <ul className="space-y-2 text-gray-800">
              <li>✓ Best business bank accounts for notaries (comparison)</li>
              <li>✓ Business credit cards that earn 2-5% cash back on your expenses</li>
              <li>✓ Amazon Business: save 5-10% on supplies</li>
              <li>✓ 25 tax deductions mobile notaries forget</li>
              <li>✓ Accounting software comparison (free to $15/month)</li>
              <li>✓ Quarterly tax payments (avoid the $3,000 surprise)</li>
              <li>✓ Mileage tracking that saves $3,000+ annually</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">Why Separate Business & Personal Finances</h2>

          <p className="text-gray-700 mb-6">
            Before we dive into specific tools and strategies, understand this: <strong>mixing business and personal finances is the #1 financial mistake notaries make.</strong>
          </p>

          <div className="bg-gray-50 p-6 mb-8 rounded">
            <h3 className="text-xl font-bold text-notary-navy mb-4">5 Reasons to Separate Your Money</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-notary-navy mb-2">1. IRS Audit Protection</h4>
                <p className="text-gray-700">
                  If the IRS audits you, they want to see clear business records. Personal expenses mixed with business = red flag. Separate accounts = clean, defensible records.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-notary-navy mb-2">2. Easier Tax Filing</h4>
                <p className="text-gray-700">
                  Your CPA (or TurboTax) needs to know: What did you earn? What did you spend? One business account = one statement to review. Easy.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-notary-navy mb-2">3. Professional Appearance</h4>
                <p className="text-gray-700">
                  Accepting payment via Venmo linked to "beachbum420"? Unprofessional. Business account with your company name? Legitimate.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-notary-navy mb-2">4. Know Your Real Profit</h4>
                <p className="text-gray-700">
                  Are you actually making money or just staying busy? Separate finances show true profit: Income - Expenses = What you keep.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-notary-navy mb-2">5. Liability Protection (If LLC)</h4>
                <p className="text-gray-700">
                  Formed an LLC? Great. But if you mix personal/business money, courts can "pierce the corporate veil" and go after your personal assets. Keep them separate.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">Best Business Bank Accounts for Mobile Notaries</h2>

          <p className="text-gray-700 mb-6">
            You need a business checking account. Here's what to look for and which banks offer the best terms for mobile notaries.
          </p>

          <div className="bg-white border-2 border-gray-200 p-6 mb-8 rounded overflow-x-auto">
            <h3 className="text-xl font-bold text-notary-navy mb-4">Business Checking Account Comparison</h3>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-notary-navy">
                  <th className="text-left py-2 pr-4">Bank</th>
                  <th className="text-left py-2 pr-4">Monthly Fee</th>
                  <th className="text-left py-2 pr-4">Waive Fee If...</th>
                  <th className="text-left py-2 pr-4">Best For</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b border-gray-300">
                  <td className="py-2 pr-4"><strong>Chase Business Complete</strong></td>
                  <td className="py-2 pr-4">$15/month</td>
                  <td className="py-2 pr-4">$2,000 min balance OR $2,000 deposits/month</td>
                  <td className="py-2 pr-4">Notaries earning $2K+/month</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-2 pr-4"><strong>Bank of America Business</strong></td>
                  <td className="py-2 pr-4">$16/month</td>
                  <td className="py-2 pr-4">$5,000 min balance</td>
                  <td className="py-2 pr-4">Established businesses</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-2 pr-4"><strong>Novo</strong></td>
                  <td className="py-2 pr-4">$0</td>
                  <td className="py-2 pr-4">Always free</td>
                  <td className="py-2 pr-4">Part-time notaries, new businesses</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-2 pr-4"><strong>Relay</strong></td>
                  <td className="py-2 pr-4">$0</td>
                  <td className="py-2 pr-4">Always free</td>
                  <td className="py-2 pr-4">Want multiple checking accounts</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4"><strong>Lili</strong></td>
                  <td className="py-2 pr-4">$0</td>
                  <td className="py-2 pr-4">Always free</td>
                  <td className="py-2 pr-4">Freelancers, solopreneurs</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
            <h4 className="font-bold text-notary-navy mb-2">Our Recommendation</h4>
            <p className="text-gray-700 mb-3">
              <strong>Starting out or part-time?</strong> Novo or Lili. Free, no minimums, good mobile apps.
            </p>
            <p className="text-gray-700">
              <strong>Earning $2,000+ monthly?</strong> Chase Business Complete. Easy to waive fees, 200 free transactions/month, great for deposits.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-notary-navy mt-10 mb-4">What to Look For in a Business Bank Account</h3>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
            <li><strong>Low or no monthly fees:</strong> You're bootstrapping, every dollar counts</li>
            <li><strong>Mobile deposit:</strong> Clients pay by check? Deposit from your phone</li>
            <li><strong>Free transactions:</strong> Many deposits/withdrawals monthly = high transaction fees add up</li>
            <li><strong>Good mobile app:</strong> Check balance, transfer funds, deposit checks on the go</li>
            <li><strong>Integration with accounting software:</strong> QuickBooks, Wave, etc. sync automatically</li>
            <li><strong>Debit card:</strong> For business purchases (though credit card is better - see next section)</li>
          </ul>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">Business Credit Cards for Mobile Notaries</h2>

          <p className="text-gray-700 mb-6">
            Here's where smart notaries make money back on expenses they're already paying. The right business credit card earns 2-5% cash back on supplies, gas, and services.
          </p>

          <div className="bg-notary-navy text-white p-6 mb-8 rounded">
            <h3 className="text-xl font-bold mb-4">Why Get a Business Credit Card?</h3>
            <ul className="space-y-2">
              <li>✓ <strong>Earn cash back:</strong> 2-5% on categories you already spend in</li>
              <li>✓ <strong>Build business credit:</strong> Separate from your personal credit score</li>
              <li>✓ <strong>Expense tracking:</strong> One statement = all business purchases</li>
              <li>✓ <strong>0% intro APR:</strong> Finance startup costs interest-free (12-18 months)</li>
              <li>✓ <strong>Purchase protection:</strong> Warranty extensions, fraud protection</li>
              <li>✓ <strong>Year-end summary:</strong> Export to accounting software, make taxes easy</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-notary-navy mt-10 mb-4">Top 3 Business Credit Cards for Mobile Notaries</h3>

          <div className="space-y-6 mb-8">
            
            {/* Card 1 */}
            <div className="bg-gray-50 p-6 rounded border-l-4 border-notary-gold">
              <h4 className="text-xl font-bold text-notary-navy mb-3">1. Chase Ink Business Cash® Credit Card</h4>
              
              <div className="mb-4">
                <p className="text-gray-700 mb-2"><strong>Best for:</strong> Notaries who buy supplies and drive a lot</p>
                <p className="text-gray-700"><strong>Annual fee:</strong> $0</p>
              </div>

              <div className="bg-white p-4 mb-4">
                <h5 className="font-bold text-notary-navy mb-2">Cash Back Structure:</h5>
                <ul className="space-y-1 text-gray-700">
                  <li>• <strong>5% back</strong> on first $25,000 spent in combined purchases at office supply stores and on internet, cable and phone services (then 1%)</li>
                  <li>• <strong>2% back</strong> on first $25,000 spent at gas stations and restaurants (then 1%)</li>
                  <li>• <strong>1% back</strong> on all other purchases</li>
                </ul>
              </div>

              <div className="bg-white p-4 mb-4">
                <h5 className="font-bold text-notary-navy mb-2">Why It Works for Notaries:</h5>
                <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                  <li>Office supplies = notary journals, pens, folders, business cards (5% back)</li>
                  <li>Internet/phone = business line or % of personal (5% back)</li>
                  <li>Gas = you drive to signings constantly (2% back)</li>
                  <li>$750 bonus cash back after spending $6,000 in first 3 months</li>
                </ul>
              </div>

              <div className="mt-4">
                <a 
                  href="https://creditcards.chase.com/ink-business-credit-cards"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-notary-navy text-white px-6 py-3 font-bold hover:bg-opacity-90 transition"
                >
                  Learn More About Chase Ink Business Cash
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-50 p-6 rounded border-l-4 border-notary-gold">
              <h4 className="text-xl font-bold text-notary-navy mb-3">2. American Express Blue Business Cash™ Card</h4>
              
              <div className="mb-4">
                <p className="text-gray-700 mb-2"><strong>Best for:</strong> Simple cash back on everything</p>
                <p className="text-gray-700"><strong>Annual fee:</strong> $0</p>
              </div>

              <div className="bg-white p-4 mb-4">
                <h5 className="font-bold text-notary-navy mb-2">Cash Back Structure:</h5>
                <ul className="space-y-1 text-gray-700">
                  <li>• <strong>2% cash back</strong> on all eligible purchases (up to $50,000 per year, then 1%)</li>
                  <li>• No categories to track - everything earns 2%</li>
                </ul>
              </div>

              <div className="bg-white p-4 mb-4">
                <h5 className="font-bold text-notary-navy mb-2">Why It Works for Notaries:</h5>
                <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                  <li>Don't want to think about categories? Everything is 2%</li>
                  <li>Spend $3,000 in first 3 months, get $250 statement credit</li>
                  <li>Good if you spend across many categories</li>
                  <li>AmEx acceptance is good (though not universal)</li>
                </ul>
              </div>

              <div className="mt-4">
                <a 
                  href="https://www.americanexpress.com/us/credit-cards/business/business-credit-cards/american-express-blue-business-cash-credit-card-amex/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-notary-navy text-white px-6 py-3 font-bold hover:bg-opacity-90 transition"
                >
                  Learn More About AmEx Blue Business Cash
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-50 p-6 rounded border-l-4 border-notary-gold">
              <h4 className="text-xl font-bold text-notary-navy mb-3">3. Capital One Spark Cash for Business</h4>
              
              <div className="mb-4">
                <p className="text-gray-700 mb-2"><strong>Best for:</strong> High-volume notaries ($10K+ annual spending)</p>
                <p className="text-gray-700"><strong>Annual fee:</strong> $95 (waived first year)</p>
              </div>

              <div className="bg-white p-4 mb-4">
                <h5 className="font-bold text-notary-navy mb-2">Cash Back Structure:</h5>
                <ul className="space-y-1 text-gray-700">
                  <li>• <strong>2% cash back</strong> on all purchases, no limits</li>
                  <li>• Unlimited - no cap, no categories</li>
                </ul>
              </div>

              <div className="bg-white p-4 mb-4">
                <h5 className="font-bold text-notary-navy mb-2">Why It Works for Notaries:</h5>
                <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                  <li>Unlimited 2% back (AmEx caps at $50K)</li>
                  <li>$500 cash bonus after $4,500 in first 3 months</li>
                  <li>Worth the $95 fee if you spend $10K+/year</li>
                  <li>Employee cards free (if you hire someone)</li>
                </ul>
              </div>

              <div className="mt-4">
                <a 
                  href="https://www.capitalone.com/small-business/credit-cards/spark-cash/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-notary-navy text-white px-6 py-3 font-bold hover:bg-opacity-90 transition"
                >
                  Learn More About Capital One Spark Cash
                </a>
              </div>
            </div>

          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
            <h4 className="font-bold text-gray-800 mb-2">💡 Pro Tip: Pay It Off Monthly</h4>
            <p className="text-gray-700">
              Business credit cards work when you <strong>pay the full balance every month.</strong> Carrying a balance = interest charges eat your cash back rewards. Treat it like a debit card: only spend what you have.
            </p>
          </div>

          <div className="text-center my-8">
            <a 
              href="https://www.nerdwallet.com/best/small-business/small-business-credit-cards"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-notary-gold text-notary-navy px-8 py-4 font-bold text-lg hover:bg-opacity-90 transition"
            >
              Compare All Business Credit Cards
            </a>
          </div>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">Amazon Business: Save 5-10% on Notary Supplies</h2>

          <p className="text-gray-700 mb-6">
            You're already buying notary supplies. Why not save 5-10% and get better tax records? Amazon Business is free and built for small businesses like yours.
          </p>

          <div className="bg-blue-50 p-6 mb-8 rounded">
            <h3 className="text-xl font-bold text-notary-navy mb-4">What is Amazon Business?</h3>
            <p className="text-gray-700 mb-4">
              It's Amazon's B2B platform. Same products, same fast shipping, but with business-specific features:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Business-only pricing:</strong> 5-10% cheaper on many items</li>
              <li><strong>Quantity discounts:</strong> Buy in bulk, save more</li>
              <li><strong>Tax-exempt purchasing:</strong> If your state allows it</li>
              <li><strong>Business Prime:</strong> Same free shipping, better analytics</li>
              <li><strong>Multi-user accounts:</strong> If you hire help</li>
              <li><strong>Detailed purchase reports:</strong> Export for your CPA</li>
              <li><strong>Approval workflows:</strong> Set spending limits</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-notary-navy mt-10 mb-4">What to Buy on Amazon Business</h3>

          <div className="bg-white border-2 border-gray-200 p-6 mb-8 rounded">
            <h4 className="font-bold text-notary-navy mb-3">Common Notary Purchases:</h4>
            <ul className="grid md:grid-cols-2 gap-x-6 gap-y-2 text-gray-700">
              <li>• Notary journals (buy 2-3 at once)</li>
              <li>• Black ink pens (boxes of 12+)</li>
              <li>• Business cards (bulk orders)</li>
              <li>• Folders and clipboards</li>
              <li>• Thumbprint pads</li>
              <li>• Portable scanner</li>
              <li>• Printer (see our <Link href="/best-printers-for-notaries" className="text-notary-gold hover:underline">printer guide</Link>)</li>
              <li>• Printer paper (reams)</li>
              <li>• Toner/ink cartridges</li>
              <li>• File storage boxes</li>
              <li>• Calculator</li>
              <li>• Desk supplies</li>
            </ul>
          </div>

          <div className="bg-notary-gold bg-opacity-20 border-2 border-notary-gold p-6 mb-8 rounded">
            <h4 className="font-bold text-notary-navy mb-3">💰 Real Savings Example</h4>
            <div className="space-y-2 text-gray-700">
              <p><strong>Personal Amazon:</strong> Notary journal $24.99</p>
              <p><strong>Amazon Business:</strong> Same journal $22.49 (10% discount)</p>
              <p><strong>Buy 3 journals/year:</strong> Save $7.50</p>
              <p><strong>Add pens, folders, supplies:</strong> Save $50-100/year</p>
              <p><strong>Business Prime shipping:</strong> Save $50-150/year on shipping</p>
              <p className="pt-2 border-t-2 border-notary-gold"><strong>Annual savings: $100-300</strong></p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-notary-navy mt-10 mb-4">How to Set Up Amazon Business</h3>

          <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-8">
            <li>
              <strong>Go to Amazon Business</strong> - Visit business.amazon.com
            </li>
            <li>
              <strong>Create free account</strong> - Use your business email (the one you set up in <Link href="/first-30-days-new-notary" className="text-notary-gold hover:underline">your first 30 days</Link>)
            </li>
            <li>
              <strong>Enter business information:</strong>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Business name (your DBA or LLC name)</li>
                <li>Business address</li>
                <li>Tax ID (EIN) or sole proprietor info</li>
              </ul>
            </li>
            <li>
              <strong>Verify your business</strong> - Usually instant, sometimes requires documentation
            </li>
            <li>
              <strong>Start shopping</strong> - You'll see business pricing automatically
            </li>
            <li>
              <strong>Optional: Add Business Prime</strong> - $179/year (worth it if you order monthly)
            </li>
          </ol>

          <div className="text-center my-8">
            <a 
              href="https://business.amazon.com&tag=beardednotary-20"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-notary-navy text-white px-8 py-4 font-bold text-lg hover:bg-opacity-90 transition border-2 border-notary-gold"
            >
              Set Up Your Amazon Business Account (Free)
            </a>
          </div>

          <p className="text-gray-700 mb-8">
            For a complete list of supplies every mobile notary needs, check out our <Link href="/mobile-notary-supplies" className="text-notary-gold hover:underline font-semibold">12 Essential Mobile Notary Supplies</Link> guide.
          </p>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">Accounting Software for Mobile Notaries</h2>

          <p className="text-gray-700 mb-6">
            "Do I really need accounting software?" If you're doing 10+ signings per month, yes. Here's why and which options work best.
          </p>

          <div className="bg-gray-50 p-6 mb-8 rounded">
            <h3 className="text-xl font-bold text-notary-navy mb-4">Why You Need It</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ <strong>Track income automatically:</strong> How much did you actually earn?</li>
              <li>✓ <strong>Categorize expenses:</strong> Supplies, gas, training, insurance</li>
              <li>✓ <strong>Calculate quarterly taxes:</strong> Know what you owe</li>
              <li>✓ <strong>Generate reports:</strong> Profit & loss, expense breakdown</li>
              <li>✓ <strong>Export to tax software:</strong> TurboTax, H&R Block, or send to CPA</li>
              <li>✓ <strong>Track mileage:</strong> Biggest deduction for mobile notaries</li>
              <li>✓ <strong>Invoice clients:</strong> Professional, trackable billing</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-notary-navy mt-10 mb-4">Best Accounting Software Options</h3>

          <div className="space-y-6 mb-8">
            
            {/* Option 1 */}
            <div className="bg-white border-2 border-notary-gold p-6 rounded">
              <h4 className="text-xl font-bold text-notary-navy mb-3">QuickBooks Self-Employed</h4>
              
              <div className="mb-4">
                <p className="text-gray-700 mb-2"><strong>Best for:</strong> Serious notaries earning $2,000+/month</p>
                <p className="text-gray-700"><strong>Price:</strong> $15/month (often $7.50 for first 3 months)</p>
              </div>

              <div className="bg-gray-50 p-4 mb-4">
                <h5 className="font-bold text-notary-navy mb-2">What You Get:</h5>
                <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                  <li>Track income and expenses automatically (connects to your bank)</li>
                  <li>Categorize transactions (asks you: "Was this business or personal?")</li>
                  <li>Mileage tracking via mobile app (auto-detect drives)</li>
                  <li>Quarterly tax estimates (tells you what to pay IRS)</li>
                  <li>Schedule C ready for tax time</li>
                  <li>Invoice clients professionally</li>
                  <li>Exports to TurboTax seamlessly</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 mb-4">
                <p className="text-gray-700">
                  <strong>Why notaries love it:</strong> Made for self-employed people. Asks simple questions, does complex calculations. Worth $15/month to avoid tax surprises and save 5+ hours at tax time.
                </p>
              </div>

              <div className="mt-4">
                <a 
                  href="https://quickbooks.intuit.com/self-employed/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-notary-navy text-white px-6 py-3 font-bold hover:bg-opacity-90 transition"
                >
                  Try QuickBooks Self-Employed Free for 30 Days
                </a>
              </div>
            </div>

            {/* Option 2 */}
            <div className="bg-white border-2 border-gray-300 p-6 rounded">
              <h4 className="text-xl font-bold text-notary-navy mb-3">Wave Accounting</h4>
              
              <div className="mb-4">
                <p className="text-gray-700 mb-2"><strong>Best for:</strong> Part-time notaries, beginners</p>
                <p className="text-gray-700"><strong>Price:</strong> $0 (100% free)</p>
              </div>

              <div className="bg-gray-50 p-4 mb-4">
                <h5 className="font-bold text-notary-navy mb-2">What You Get:</h5>
                <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                  <li>Income and expense tracking</li>
                  <li>Invoice clients (unlimited)</li>
                  <li>Receipt scanning via mobile app</li>
                  <li>Bank account connection</li>
                  <li>Reports (profit & loss, expense breakdown)</li>
                  <li>Basic tax reports</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 mb-4">
                <p className="text-gray-700">
                  <strong>Why beginners love it:</strong> Free. Clean interface. Does the basics well. Upgrade to paid features (payroll, coaching) if you grow.
                </p>
              </div>

              <div className="mt-4">
                <a 
                  href="https://www.waveapps.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-notary-navy text-white px-6 py-3 font-bold hover:bg-opacity-90 transition"
                >
                  Start Using Wave (Free Forever)
                </a>
              </div>
            </div>

            {/* Option 3 */}
            <div className="bg-white border-2 border-gray-300 p-6 rounded">
              <h4 className="text-xl font-bold text-notary-navy mb-3">FreshBooks</h4>
              
              <div className="mb-4">
                <p className="text-gray-700 mb-2"><strong>Best for:</strong> Notaries who invoice clients frequently</p>
                <p className="text-gray-700"><strong>Price:</strong> $17/month (Lite plan)</p>
              </div>

              <div className="bg-gray-50 p-4 mb-4">
                <h5 className="font-bold text-notary-navy mb-2">What You Get:</h5>
                <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                  <li>Beautiful, professional invoices</li>
                  <li>Automatic payment reminders</li>
                  <li>Accept credit cards (additional fee)</li>
                  <li>Expense tracking</li>
                  <li>Time tracking (if billing hourly)</li>
                  <li>Mileage tracking</li>
                  <li>Client portal</li>
                  <li>Reports for taxes</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 mb-4">
                <p className="text-gray-700">
                  <strong>Why it's worth it:</strong> If you work with B2B clients (law firms, real estate offices) who need professional invoices, FreshBooks makes you look legit.
                </p>
              </div>

              <div className="mt-4">
                <a 
                  href="https://www.freshbooks.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-notary-navy text-white px-6 py-3 font-bold hover:bg-opacity-90 transition"
                >
                  Try FreshBooks Free for 30 Days
                </a>
              </div>
            </div>

            {/* Option 4 */}
            <div className="bg-white border-2 border-gray-300 p-6 rounded">
              <h4 className="text-xl font-bold text-notary-navy mb-3">Google Sheets (DIY)</h4>
              
              <div className="mb-4">
                <p className="text-gray-700 mb-2"><strong>Best for:</strong> Year 1, very part-time notaries</p>
                <p className="text-gray-700"><strong>Price:</strong> $0</p>
              </div>

              <div className="bg-gray-50 p-4 mb-4">
                <h5 className="font-bold text-notary-navy mb-2">What You Track:</h5>
                <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                  <li>Date, client, service, income</li>
                  <li>Expenses: category, date, amount, description</li>
                  <li>Mileage: date, miles, purpose</li>
                  <li>Monthly totals</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-4">
                <p className="text-gray-700">
                  <strong>Reality check:</strong> Works for first few months. Gets tedious fast. Plan to upgrade to Wave (free) or QuickBooks by month 6.
                </p>
              </div>
            </div>

          </div>

          <div className="bg-notary-gold bg-opacity-10 border-l-4 border-notary-gold p-6 my-8">
            <h4 className="font-bold text-notary-navy mb-3">Our Recommendation</h4>
            <p className="text-gray-700 mb-3">
              <strong>Year 1, earning &lt;$1,000/month:</strong> Wave (free) or spreadsheet
            </p>
            <p className="text-gray-700">
              <strong>Year 1, earning $1,000+/month:</strong> QuickBooks Self-Employed ($15/month saves you $500+ in tax mistakes)
            </p>
          </div>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">25 Tax Deductions for Mobile Notaries</h2>

          <p className="text-gray-700 mb-6">
            This is where notaries leave money on the table. These are legitimate business expenses you can deduct to lower your taxable income.
          </p>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
            <p className="text-gray-800">
              <strong>Disclaimer:</strong> I'm not a CPA. This is general information. Tax laws change. Hire a tax professional who understands self-employment to maximize your deductions legally.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-notary-navy mt-10 mb-4">Vehicle Expenses (Biggest Deduction)</h3>

          <div className="bg-gray-50 p-6 mb-6 rounded">
            <p className="text-gray-700 mb-4">
              You have two options. Pick one (not both):
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-notary-navy mb-2">Option 1: Standard Mileage Rate (Easier)</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>67¢ per mile in 2024 (check 2026 rate)</li>
                  <li>Track every business mile (date, starting point, destination, purpose)</li>
                  <li>Average notary: 5,000-10,000 miles/year = $3,350-6,700 deduction</li>
                  <li>Use mileage app (see section below)</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-notary-navy mb-2">Option 2: Actual Expenses (More Work)</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>Calculate business use % (miles for business ÷ total miles)</li>
                  <li>Deduct that % of: gas, oil changes, repairs, insurance, registration, depreciation</li>
                  <li>Keep ALL receipts</li>
                  <li>Usually better if you have an expensive car or high maintenance costs</li>
                </ul>
              </div>
            </div>

            <p className="text-gray-700 mt-4">
              <strong>Most notaries use standard mileage rate.</strong> It's easier and often equals or beats actual expenses.
            </p>
          </div>

          <h4 className="font-bold text-notary-navy mb-3">Other Vehicle Deductions (In Addition to Above):</h4>
          <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-8">
            <li>Parking fees for signings</li>
            <li>Tolls for business trips</li>
            <li>Car wash (keep it professional for clients)</li>
            <li>Phone mount, chargers (business use %)</li>
          </ul>

          <h3 className="text-2xl font-bold text-notary-navy mt-10 mb-4">Supplies & Equipment</h3>

          <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-8">
            <li>Notary stamp and embosser</li>
            <li>Notary journal(s)</li>
            <li>Business cards</li>
            <li>Pens, folders, clipboards</li>
            <li>Thumbprint pad and ink</li>
            <li>Printer and scanner (see our <Link href="/best-printers-for-notaries" className="text-notary-gold hover:underline">printer guide</Link>)</li>
            <li>Paper, ink, toner</li>
            <li>Laptop or tablet (business use %)</li>
            <li>Mobile hotspot or data plan</li>
            <li>Portable file boxes</li>
            <li>Calculator</li>
            <li>Notary stamp holder/case</li>
          </ul>

          <h3 className="text-2xl font-bold text-notary-navy mt-10 mb-4">Professional Development & Education</h3>

          <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-8">
            <li>Loan Signing System training (fully deductible - see <Link href="/why-now-is-perfect-time-loan-signing-agent" className="text-notary-gold hover:underline">why it's worth it</Link>)</li>
            <li>NNA membership and background screening</li>
            <li>State notary exam fees</li>
            <li>Continuing education courses</li>
            <li>Notary conferences and workshops</li>
            <li>Professional books (see our <Link href="/essential-notary-books" className="text-notary-gold hover:underline">recommended reading list</Link>)</li>
            <li>Online courses and webinars</li>
          </ul>

          <h3 className="text-2xl font-bold text-notary-navy mt-10 mb-4">Insurance</h3>

          <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-8">
            <li>E&O insurance (errors and omissions)</li>
            <li>Business liability insurance</li>
            <li>Notary bond (required in most states)</li>
            <li>Health insurance premiums (if self-employed, special deduction)</li>
          </ul>

          <h3 className="text-2xl font-bold text-notary-navy mt-10 mb-4">Home Office (If You Qualify)</h3>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
            <p className="text-gray-800 mb-3">
              <strong>Requirements:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Dedicated space used EXCLUSIVELY for business</li>
              <li>Regular and exclusive use (not the kitchen table)</li>
              <li>Principal place of business (where you do admin work)</li>
            </ul>
          </div>

          <p className="text-gray-700 mb-4">
            <strong>If you qualify, you can deduct:</strong>
          </p>

          <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-8">
            <li>% of rent or mortgage interest (square footage of office ÷ total home square footage)</li>
            <li>% of utilities (electric, gas, water)</li>
            <li>% of home internet</li>
            <li>% of homeowners/renters insurance</li>
            <li>Office furniture (desk, chair, filing cabinet)</li>
            <li>Office decorations and organization</li>
          </ul>

          <p className="text-gray-700 mb-8">
            <strong>Simplified option:</strong> $5 per square foot, up to 300 sq ft = max $1,500 deduction. Easier, no receipts needed.
          </p>

          <h3 className="text-2xl font-bold text-notary-navy mt-10 mb-4">Marketing & Advertising</h3>

          <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-8">
            <li>Website hosting and domain ($12-200/year)</li>
            <li>Paid business listings (123Notary premium, NotaryRotary featured)</li>
            <li>Facebook or Google ads</li>
            <li>Business cards and flyers</li>
            <li>Networking event fees</li>
            <li>Chamber of Commerce membership</li>
            <li>Promotional items (branded pens, magnets)</li>
          </ul>

          <h3 className="text-2xl font-bold text-notary-navy mt-10 mb-4">Professional Services</h3>

          <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-8">
            <li>CPA or accountant fees</li>
            <li>Bookkeeping services</li>
            <li>Legal fees (LLC formation, contract review)</li>
            <li>Business consultant or coach</li>
          </ul>

          <h3 className="text-2xl font-bold text-notary-navy mt-10 mb-4">Technology & Communications</h3>

          <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-8">
            <li>Business phone line (100% deductible)</li>
            <li>Personal phone bill (business use % only)</li>
            <li>Software subscriptions (QuickBooks, Canva, scheduling tools)</li>
            <li>Cloud storage (Google Drive, Dropbox)</li>
            <li>Email marketing platform (Mailchimp, etc.)</li>
          </ul>

          <h3 className="text-2xl font-bold text-notary-navy mt-10 mb-4">Licensing & Filing Fees</h3>

          <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-8">
            <li>Notary commission fees</li>
            <li>DBA (Doing Business As) filing fee</li>
            <li>LLC formation and annual fees</li>
            <li>Business license</li>
            <li>Bank fees (business account monthly fees)</li>
          </ul>

          <h3 className="text-2xl font-bold text-notary-navy mt-10 mb-4">Miscellaneous</h3>

          <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-8">
            <li>Professional attire (if required for notary work and not suitable for personal wear - rare)</li>
            <li>Background check fees</li>
            <li>Postage and shipping</li>
            <li>Meals with clients or potential clients (50% deductible)</li>
            <li>Travel expenses for out-of-town signings (airfare, hotel, meals)</li>
          </ul>

          <div className="bg-notary-navy text-white p-6 my-8 rounded">
            <h4 className="font-bold mb-3">💡 The Golden Rule of Deductions</h4>
            <p className="mb-3">
              <strong>Ordinary and necessary.</strong> Would another notary in your position reasonably incur this expense? If yes, it's likely deductible.
            </p>
            <p>
              When in doubt, keep the receipt and ask your CPA. Better to have documentation you don't need than to miss deductions you qualify for.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">Quarterly Estimated Taxes: Avoiding the $3,000 Surprise</h2>

          <p className="text-gray-700 mb-6">
            You're self-employed. No employer withholds taxes from your paychecks. The IRS expects you to pay as you earn. Welcome to quarterly estimated taxes.
          </p>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
            <h4 className="font-bold text-gray-800 mb-2">⚠️ Don't Skip This</h4>
            <p className="text-gray-700">
              Fail to pay quarterly taxes and you'll face:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700">
              <li>Underpayment penalties (can be hundreds of dollars)</li>
              <li>Interest charges on what you owe</li>
              <li>A massive tax bill in April that wipes out your savings</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-notary-navy mt-10 mb-4">When Are Quarterly Taxes Due?</h3>

          <div className="bg-gray-50 p-6 mb-8 rounded">
            <table className="w-full text-gray-700">
              <thead>
                <tr className="border-b-2 border-notary-navy">
                  <th className="text-left py-2">Quarter</th>
                  <th className="text-left py-2">Period Covered</th>
                  <th className="text-left py-2">Payment Due</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-300">
                  <td className="py-2">Q1</td>
                  <td className="py-2">January 1 - March 31</td>
                  <td className="py-2">April 15</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-2">Q2</td>
                  <td className="py-2">April 1 - May 31</td>
                  <td className="py-2">June 15</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-2">Q3</td>
                  <td className="py-2">June 1 - August 31</td>
                  <td className="py-2">September 15</td>
                </tr>
                <tr>
                  <td className="py-2">Q4</td>
                  <td className="py-2">September 1 - December 31</td>
                  <td className="py-2">January 15 (following year)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-bold text-notary-navy mt-10 mb-4">How Much Should You Pay?</h3>

          <p className="text-gray-700 mb-4">
            <strong>Simple rule of thumb: Set aside 25-30% of your NET profit.</strong>
          </p>

          <div className="bg-blue-50 p-6 mb-8 rounded">
            <h4 className="font-bold text-notary-navy mb-3">Example Calculation:</h4>
            <div className="space-y-2 text-gray-700">
              <p><strong>This quarter you earned:</strong> $3,000</p>
              <p><strong>Minus expenses:</strong> $500 (supplies, gas, etc.)</p>
              <p><strong>Net profit:</strong> $2,500</p>
              <p><strong>Set aside (25-30%):</strong> $625-750</p>
              <p className="pt-2 border-t-2 border-blue-300"><strong>Pay IRS by due date:</strong> $625-750</p>
            </div>
          </div>

          <p className="text-gray-700 mb-6">
            <strong>Why 25-30%?</strong> Covers federal income tax (10-22% bracket for most), self-employment tax (15.3%), and state income tax (if applicable).
          </p>

          <h3 className="text-2xl font-bold text-notary-navy mt-10 mb-4">How to Pay Quarterly Taxes</h3>

          <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-8">
            <li>
              <strong>IRS Direct Pay (Free, Easy)</strong>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Go to irs.gov/payments</li>
                <li>Select "Direct Pay"</li>
                <li>Choose "Estimated Tax" and year</li>
                <li>Enter amount and bank info</li>
                <li>Get confirmation number (save it!)</li>
              </ul>
            </li>
            <li>
              <strong>EFTPS.gov (Electronic Federal Tax Payment System)</strong>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Enroll once, use forever</li>
                <li>Schedule payments in advance</li>
                <li>Good if you want to automate</li>
              </ul>
            </li>
            <li>
              <strong>Through QuickBooks Self-Employed</strong>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Calculates quarterly taxes automatically</li>
                <li>One-click payment to IRS</li>
                <li>Worth the $15/month for this alone</li>
              </ul>
            </li>
          </ol>

          <div className="bg-notary-gold bg-opacity-20 border-2 border-notary-gold p-6 mb-8 rounded">
            <h4 className="font-bold text-notary-navy mb-3">💡 Pro Tip: The "Tax Account" Strategy</h4>
            <p className="text-gray-700 mb-3">
              Open a separate savings account called "Tax Account" at your bank.
            </p>
            <p className="text-gray-700 mb-3">
              After EVERY signing, immediately transfer 25-30% of your profit to this account.
            </p>
            <p className="text-gray-700 mb-3">
              <strong>Example:</strong> Earned $150 on a signing, spent $10 on gas. Transfer $42 (30% of $140 profit) to tax account.
            </p>
            <p className="text-gray-700">
              When quarterly payment is due, the money is sitting there. No scrambling, no stress.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">Mileage Tracking: The $3,000+ Deduction Notaries Miss</h2>

          <p className="text-gray-700 mb-6">
            This is the single biggest deduction for mobile notaries. It's also the one most notaries screw up. Here's how to do it right.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
            <h4 className="font-bold text-gray-800 mb-2">Why Mileage Matters</h4>
            <p className="text-gray-700 mb-3">
              Average mobile notary drives 5,000-10,000 business miles per year.
            </p>
            <p className="text-gray-700 mb-3">
              At 67¢ per mile (2024 rate): <strong>$3,350 - $6,700 deduction</strong>
            </p>
            <p className="text-gray-700">
              In the 22% tax bracket: Saves you <strong>$737 - $1,474 in taxes</strong>
            </p>
          </div>

          <h3 className="text-2xl font-bold text-notary-navy mt-10 mb-4">IRS Requirements for Mileage Deduction</h3>

          <p className="text-gray-700 mb-4">
            The IRS requires <strong>contemporaneous records.</strong> This means:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
            <li><strong>Date:</strong> When did you drive?</li>
            <li><strong>Starting location:</strong> Where did you start?</li>
            <li><strong>Destination:</strong> Where did you go?</li>
            <li><strong>Business purpose:</strong> Why? (Client name, type of signing)</li>
            <li><strong>Miles driven:</strong> How many miles?</li>
            <li><strong>Recorded timely:</strong> Logged same day or next day (not reconstructed months later)</li>
          </ul>

          <p className="text-gray-700 mb-8">
            <strong>Reality check:</strong> Ain't nobody got time to manually log all that. That's why mileage tracking apps exist.
          </p>

          <h3 className="text-2xl font-bold text-notary-navy mt-10 mb-4">Best Mileage Tracking Apps</h3>

          <div className="space-y-6 mb-8">
            
            {/* App 1 */}
            <div className="bg-white border-2 border-notary-gold p-6 rounded">
              <h4 className="text-xl font-bold text-notary-navy mb-3">MileIQ</h4>
              
              <div className="mb-4">
                <p className="text-gray-700 mb-2"><strong>Best for:</strong> Notaries who drive A LOT (3,000+ miles/year)</p>
                <p className="text-gray-700"><strong>Price:</strong> $60/year or $6/month</p>
              </div>

              <div className="bg-gray-50 p-4 mb-4">
                <h5 className="font-bold text-notary-navy mb-2">How It Works:</h5>
                <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                  <li>Automatically detects when you drive</li>
                  <li>After each trip, swipe right (business) or left (personal)</li>
                  <li>Learns your patterns (going to same client? Auto-classifies)</li>
                  <li>Exports IRS-compliant reports</li>
                  <li>Calculates total deduction for you</li>
                  <li>Integrates with QuickBooks, FreshBooks</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 mb-4">
                <p className="text-gray-700">
                  <strong>Why it's worth $60:</strong> Saves you 10+ hours of manual logging. Deducts $3,000+ you'd otherwise miss. Protects you in an audit (IRS-compliant logs).
                </p>
              </div>

              <div className="mt-4">
                <a 
                  href="https://www.mileiq.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-notary-navy text-white px-6 py-3 font-bold hover:bg-opacity-90 transition"
                >
                  Try MileIQ Free (40 Drives/Month)
                </a>
              </div>
            </div>

            {/* App 2 */}
            <div className="bg-white border-2 border-gray-300 p-6 rounded">
              <h4 className="text-xl font-bold text-notary-navy mb-3">Everlance</h4>
              
              <div className="mb-4">
                <p className="text-gray-700 mb-2"><strong>Best for:</strong> Notaries who want mileage + expense tracking combined</p>
                <p className="text-gray-700"><strong>Price:</strong> $60/year or $8/month</p>
              </div>

              <div className="bg-gray-50 p-4 mb-4">
                <h5 className="font-bold text-notary-navy mb-2">What You Get:</h5>
                <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                  <li>Automatic mileage tracking</li>
                  <li>Receipt scanning and categorization</li>
                  <li>Expense tracking</li>
                  <li>IRS-compliant mileage reports</li>
                  <li>Tax deduction estimates</li>
                  <li>Works with QuickBooks, Xero</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 mb-4">
                <p className="text-gray-700">
                  <strong>Why choose Everlance:</strong> Two tools in one. Track miles AND expenses. Good if you're not using QuickBooks for expense tracking.
                </p>
              </div>

              <div className="mt-4">
                <a 
                  href="https://www.everlance.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-notary-navy text-white px-6 py-3 font-bold hover:bg-opacity-90 transition"
                >
                  Try Everlance Free for 7 Days
                </a>
              </div>
            </div>

            {/* App 3 */}
            <div className="bg-white border-2 border-gray-300 p-6 rounded">
              <h4 className="text-xl font-bold text-notary-navy mb-3">Stride</h4>
              
              <div className="mb-4">
                <p className="text-gray-700 mb-2"><strong>Best for:</strong> Part-time notaries, tight budgets</p>
                <p className="text-gray-700"><strong>Price:</strong> FREE</p>
              </div>

              <div className="bg-gray-50 p-4 mb-4">
                <h5 className="font-bold text-notary-navy mb-2">What You Get (Free Version):</h5>
                <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                  <li>Automatic mileage tracking</li>
                  <li>Swipe to classify business/personal</li>
                  <li>Basic expense tracking</li>
                  <li>Mileage reports</li>
                  <li>Tax deduction estimates</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 mb-4">
                <p className="text-gray-700">
                  <strong>Why choose Stride:</strong> It's free. Good for year 1 or part-time. Upgrade to MileIQ when you're making real money.
                </p>
              </div>

              <div className="mt-4">
                <a 
                  href="https://www.stridehealth.com/tax-tools"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-notary-navy text-white px-6 py-3 font-bold hover:bg-opacity-90 transition"
                >
                  Download Stride (Free Forever)
                </a>
              </div>
            </div>

            {/* Manual Option */}
            <div className="bg-gray-100 p-6 rounded border-2 border-gray-400">
              <h4 className="text-xl font-bold text-notary-navy mb-3">Manual Mileage Log (Old School)</h4>
              
              <div className="mb-4">
                <p className="text-gray-700 mb-2"><strong>Best for:</strong> Nobody (seriously, use an app)</p>
                <p className="text-gray-700"><strong>Price:</strong> $0</p>
              </div>

              <div className="bg-white p-4 mb-4">
                <h5 className="font-bold text-notary-navy mb-2">What You Track:</h5>
                <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                  <li>Date of trip</li>
                  <li>Starting location and odometer reading</li>
                  <li>Ending location and odometer reading</li>
                  <li>Total miles</li>
                  <li>Purpose of trip</li>
                  <li>Client name</li>
                </ul>
                <p className="text-gray-700 mt-3">
                  Log in a notebook or spreadsheet. Must be recorded same day (contemporaneous).
                </p>
              </div>

              <div className="bg-yellow-50 p-4">
                <p className="text-gray-700">
                  <strong>Reality:</strong> You'll forget. You'll reconstruct months later. IRS audits you, they reject it. You lose $3,000+ deduction. Spend $60 on MileIQ.
                </p>
              </div>
            </div>

          </div>

          <div className="bg-notary-gold bg-opacity-10 border-l-4 border-notary-gold p-6 my-8">
            <h4 className="font-bold text-notary-navy mb-3">Our Recommendation</h4>
            <p className="text-gray-700 mb-3">
              <strong>Year 1 or part-time (&lt;3,000 miles/year):</strong> Stride (free)
            </p>
            <p className="text-gray-700">
              <strong>Serious notaries (3,000+ miles/year):</strong> MileIQ ($60/year) - it pays for itself in deductions you won't miss
            </p>
          </div>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">When to Hire a CPA</h2>

          <p className="text-gray-700 mb-6">
            You can DIY your taxes with TurboTax. Or you can hire a professional who saves you more than they cost. Here's when each makes sense.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            
            <div className="bg-green-50 border-2 border-green-500 p-6 rounded">
              <h3 className="text-xl font-bold text-green-900 mb-4">✓ DIY Your Taxes If:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Earning &lt;$20,000/year from notary work</li>
                <li>• Straightforward deductions (mileage, supplies, training)</li>
                <li>• Comfortable with TurboTax Self-Employed</li>
                <li>• Sole proprietor (not LLC or S-Corp)</li>
                <li>• No employees</li>
                <li>• Simple tax situation overall</li>
              </ul>
              <p className="mt-4 text-gray-700">
                <strong>Cost:</strong> TurboTax Self-Employed ~$120-150/year
              </p>
            </div>

            <div className="bg-blue-50 border-2 border-blue-500 p-6 rounded">
              <h3 className="text-xl font-bold text-blue-900 mb-4">✓ Hire a CPA If:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Earning &gt;$30,000/year from notary work</li>
                <li>• Formed an LLC or considering S-Corp election</li>
                <li>• Bought a vehicle through the business</li>
                <li>• Taking home office deduction</li>
                <li>• Have employees or contractors</li>
                <li>• Want tax planning (not just tax filing)</li>
                <li>• Want to minimize taxes legally</li>
              </ul>
              <p className="mt-4 text-gray-700">
                <strong>Cost:</strong> $400-600/year (basic), $800-1,500 (LLC/S-Corp)
              </p>
            </div>

          </div>

          <h3 className="text-2xl font-bold text-notary-navy mt-10 mb-4">What a Good CPA Does</h3>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
            <li><strong>Files your return correctly:</strong> Knows self-employment tax rules</li>
            <li><strong>Maximizes deductions:</strong> Finds deductions you didn't know about</li>
            <li><strong>Tax planning:</strong> Advises on LLC vs S-Corp, retirement contributions, estimated payments</li>
            <li><strong>Audit support:</strong> Represents you if IRS audits (priceless)</li>
            <li><strong>Saves you time:</strong> You focus on signings, they handle taxes</li>
            <li><strong>Peace of mind:</strong> Sleep well knowing it's done right</li>
          </ul>

          <h3 className="text-2xl font-bold text-notary-navy mt-10 mb-4">How to Find a Good CPA</h3>

          <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-8">
            <li><strong>Ask other notaries:</strong> Local notary Facebook groups, "Who does your taxes?"</li>
            <li><strong>Look for self-employment specialists:</strong> Not all CPAs understand 1099 work</li>
            <li><strong>Interview 2-3:</strong> Ask: "How many self-employed clients do you have?" "What's your fee structure?"</li>
            <li><strong>Check credentials:</strong> CPA license, good reviews, responsive communication</li>
            <li><strong>Start relationship early:</strong> Don't wait until April 14th</li>
          </ol>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
            <h4 className="font-bold text-notary-navy mb-2">💡 The ROI Test</h4>
            <p className="text-gray-700">
              Good CPA charges $500. They save you $800 in deductions you missed + give tax planning advice that saves $500 next year = Worth it.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">Setting Financial Goals</h2>

          <p className="text-gray-700 mb-6">
            You're not just a notary - you're a business owner. Business owners set goals, track progress, and adjust strategies.
          </p>

          <h3 className="text-2xl font-bold text-notary-navy mt-10 mb-4">Month 1-3 Goals</h3>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
            <li>✓ Open separate business bank account</li>
            <li>✓ Get business credit card (start building credit + cash back)</li>
            <li>✓ Set up tracking system (Wave, QuickBooks, or spreadsheet)</li>
            <li>✓ Save first $1,000 for taxes (25% of profit)</li>
            <li>✓ Install mileage tracking app</li>
            <li>✓ Track every expense (receipts + categorization)</li>
          </ul>

          <h3 className="text-2xl font-bold text-notary-navy mt-10 mb-4">Month 4-6 Goals</h3>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
            <li>✓ Reach $2,000+ monthly revenue</li>
            <li>✓ Build 3 repeat clients (consistent work)</li>
            <li>✓ Set up Amazon Business account</li>
            <li>✓ Make first quarterly tax payment (no penalties!)</li>
            <li>✓ Review profit margins (are you making money or just busy?)</li>
            <li>✓ Raise rates if needed (see our <Link href="/how-much-to-charge-mobile-notary" className="text-notary-gold hover:underline">pricing guide</Link>)</li>
          </ul>

          <h3 className="text-2xl font-bold text-notary-navy mt-10 mb-4">Month 7-12 Goals</h3>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
            <li>✓ Reach $3,000+ monthly revenue</li>
            <li>✓ Pay yourself consistent salary (not just random withdrawals)</li>
            <li>✓ Build business emergency fund ($5,000 in savings)</li>
            <li>✓ Meet with CPA for tax planning (Q4 planning session)</li>
            <li>✓ All quarterly taxes paid on time</li>
            <li>✓ Set Year 2 revenue goal</li>
          </ul>

          <h3 className="text-2xl font-bold text-notary-navy mt-10 mb-4">Year 2+ Goals</h3>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
            <li>✓ $50,000+ annual revenue ($4,000+/month average)</li>
            <li>✓ Consider LLC formation (liability protection)</li>
            <li>✓ Consider S-Corp election if earning $60K+ (tax savings)</li>
            <li>✓ Hire virtual assistant if overwhelmed (focus on high-value work)</li>
            <li>✓ Max out retirement contributions (Solo 401k or SEP IRA - up to $66K/year)</li>
            <li>✓ Build 6-month emergency fund (business + personal)</li>
          </ul>

          <div className="bg-notary-navy text-white p-8 my-12 rounded">
            <h3 className="text-2xl font-bold mb-4">Your Money Should Work as Hard as You Do</h3>
            <p className="text-lg mb-6">
              You're driving to signings, managing documents, building relationships. Your money should be doing something too: earning cash back, growing tax-free in a retirement account, compounding in a savings account.
            </p>
            <p className="text-lg">
              Smart money management isn't about being cheap. It's about being intentional. Track what you earn. Deduct what you're entitled to. Save for taxes. Invest in growth. That's how you build a sustainable notary business.
            </p>
          </div>

          {/* Related Resources */}
          <div className="border-t-2 border-gray-200 pt-8 mt-12">
            <h3 className="text-2xl font-bold text-notary-navy mb-6">Related Resources:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/how-much-to-charge-mobile-notary" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
                <h4 className="font-bold text-notary-navy mb-2">Complete Notary Pricing Guide</h4>
                <p className="text-gray-600 text-sm">What to charge for every service type</p>
              </Link>
              <Link href="/first-30-days-new-notary" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
                <h4 className="font-bold text-notary-navy mb-2">Your First 30 Days Action Plan</h4>
                <p className="text-gray-600 text-sm">Day-by-day guide to getting started</p>
              </Link>
              <Link href="/mobile-notary-supplies" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
                <h4 className="font-bold text-notary-navy mb-2">12 Essential Notary Supplies</h4>
                <p className="text-gray-600 text-sm">Everything you need (all tax-deductible)</p>
              </Link>
              <Link href="/best-printers-for-notaries" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
                <h4 className="font-bold text-notary-navy mb-2">Best Printers for Notaries</h4>
                <p className="text-gray-600 text-sm">Dual-tray printers for loan signings</p>
              </Link>
            </div>
          </div>

        </div>
      </article>
    </div>
  );
}
