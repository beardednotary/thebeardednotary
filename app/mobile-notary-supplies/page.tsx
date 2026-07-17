import Link from 'next/link';
import type { Metadata } from 'next';
import ArticleHeader from '../../components/ArticleHeader';

type SupportingLink = {
  href: string;
  label: string;
};

type SupplyPick = {
  title: string;
  badge: string;
  why: string;
  bullets: string[];
  href?: string;
  cta?: string;
  supportingLink?: SupportingLink;
};

type SupplySection = {
  id: string;
  label: string;
  title: string;
  description: string;
  picks: SupplyPick[];
};

type SetupBundle = {
  title: string;
  items: string[];
};

type OptionPick = {
  label: string;
  href: string;
  cta: string;
  note: string;
};

export const metadata: Metadata = {
  title: 'Mobile Notary Supplies Checklist | The Bearded Notary',
  description:
    "A practical buyer's guide to mobile notary supplies, from journals and stamps to scanners, tablets, and dual-tray printers.",
  openGraph: {
    title: 'Mobile Notary Supplies Checklist',
    description:
      "A practical buyer's guide to mobile notary supplies, from journals and stamps to scanners, tablets, and dual-tray printers.",
    images: ['/images/mobile-notary-supplies-featured.png'],
  },
};

const journalOptions: OptionPick[] = [
  {
    label: 'Best Overall',
    href: 'https://amzn.to/4yiwud8',
    cta: 'View best overall journal',
    note: 'A strong all-around pick for most notaries who want a dependable journal without overcomplicating the choice.',
  },
  {
    label: 'Best Budget',
    href: 'https://www.amazon.com/dp/B0GV879B11?ref=t_ac_spc_accepted_tile&linkCode=tr1&tag=beardednotary-20&linkId=B0GV879B11_1784262605213',
    cta: 'View budget journal',
    note: 'A lower-cost option for newer notaries who want to get started and stay compliant without overspending.',
  },
  {
    label: 'Best Premium',
    href: 'https://www.amazon.com/dp/B0C4JJ6VYS?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.1TA5O12IDPJSQ&linkCode=tr1&tag=beardednotary-20&linkId=amzn1.campaign.1TA5O12IDPJSQ_1784184125395',
    cta: 'View premium journal',
    note: 'A better fit if you want a more polished journal setup and expect heavier long-term use.',
  },
];

const thumbprintPadOptions: OptionPick[] = [
  {
    label: 'Best Overall',
    href: 'https://www.amazon.com/dp/B00I2XJZG2?ref=t_ac_spc_accepted_tile&linkCode=tr1&tag=beardednotary-20&linkId=B00I2XJZG2_1784263667931',
    cta: 'View best overall pad',
    note: 'A strong all-around pick for notaries who want a clean, easy thumbprint process without much guesswork.',
  },
  {
    label: 'Best Budget',
    href: 'https://www.amazon.com/dp/B0G66RD668?ref=t_ac_spc_accepted_tile&linkCode=tr1&tag=beardednotary-20&linkId=B0G66RD668_1784263667933',
    cta: 'View budget pad',
    note: 'A lower-cost option for newer notaries who want a simple thumbprint solution that gets the job done.',
  },
  {
    label: 'Best Premium',
    href: 'https://www.amazon.com/dp/B0DBVNXC2B?ref=t_ac_spc_accepted_tile&linkCode=tr1&tag=beardednotary-20&linkId=B0DBVNXC2B_1784263667933',
    cta: 'View premium pad',
    note: 'A better fit if you want a more polished option and expect to use it regularly across a lot of signings.',
  },
];

const sections: SupplySection[] = [
  {
    id: 'legal-essentials',
    label: 'Legal Essentials',
    title: 'The core tools every notary needs',
    description:
      'These are the foundational supplies that protect your commission, document your work, and help you complete notarizations correctly.',
    picks: [
      {
        title: 'Notary Sequential Journal',
        badge: 'Must-have',
        why: 'This is the recordkeeping tool that protects you when questions come up later.',
        bullets: [
          'Required in many states and strongly recommended in the rest.',
          'Helps you prove what was signed, when it was signed, and who appeared.',
        ],
      },
      {
        title: 'Self-Inking Notary Stamp',
        badge: 'Commission-ready',
        href: 'https://www.amazon.com/dp/B0043GD4EG?ref=t_ac_spc_accepted_tile&linkCode=tr1&tag=beardednotary-20&linkId=B0043GD4EG_1784263285226',
        cta: 'Order your stamp',
        why: 'A clean, reliable state-compliant stamp saves time and helps you avoid sloppy impressions on important documents.',
        bullets: [
          'One of the final pieces you need before taking live work.',
          'Self-inking models are faster and easier for back-to-back appointments.',
        ],
      },
      {
        title: 'Inkless Thumbprint Pad',
        badge: 'Best for clean signings',
        href: 'https://amzn.to/4j4Qvws',
        cta: 'View thumbprint pad',
        why: 'Thumbprints can be required, and an inkless option keeps the process quick and less messy.',
        bullets: [
          'Helpful for states and document types where thumbprints matter.',
          'Cleaner experience for both you and the signer.',
        ],
      },
      {
        title: 'Blue and Black Ink Pens',
        badge: 'Everyday essential',
        href: 'https://amzn.to/4fG6wcg',
        cta: 'View pen set',
        why: 'Pens are easy to overlook until an appointment stalls because a signer needs a different ink color or your main pen stops cooperating.',
        bullets: [
          'Keep multiple blue and black pens in your bag at all times.',
          'A reliable pen set is a tiny expense that prevents unnecessary friction during signings.',
        ],
      },
    ],
  },
  {
    id: 'mobile-workflow',
    label: 'Mobile Workflow',
    title: 'What keeps you organized on the road',
    description:
      'The goal here is simple: stay organized, move quickly, and keep your supplies protected between appointments.',
    picks: [
      {
        title: 'Messenger Bag or Briefcase',
        badge: 'Best for organization',
        href: 'https://amzn.to/4jb44uG',
        cta: 'Shop briefcases',
        why: 'A dedicated bag keeps your journal, certificates, pens, and tech in one reliable grab-and-go setup.',
        bullets: [
          'Useful for protecting sensitive tools and staying appointment-ready.',
          'Look for security, comfort, and enough structure to separate gear.',
        ],
      },
      {
        title: 'Stapler and Staple Remover',
        badge: 'Cheap but essential',
        href: 'https://www.amazon.com/dp/B0CC5GJKM1?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.26MSLRILODF7K&linkCode=tr1&tag=beardednotary-20&linkId=amzn1.campaign.26MSLRILODF7K_1766100860744',
        cta: 'View stapler set',
        why: 'Small tools like this make a big difference when you need to keep document packets neat and fix mistakes fast.',
        bullets: [
          'Helps you stay organized without hauling around bulky desk gear.',
          'Especially useful during loan signing appointments with thick packages.',
        ],
      },
      {
        title: 'Cell Phone Mount',
        badge: 'Best for safer travel',
        href: 'https://www.amazon.com/dp/B08DKHHTFX?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.2BRFFZM9UBWG6&linkCode=tr1&tag=beardednotary-20&linkId=amzn1.campaign.2BRFFZM9UBWG6_1766101671297',
        cta: 'Shop phone mounts',
        why: "If you're driving from signer to signer, navigation visibility and safer hands-free use matter.",
        bullets: [
          'Makes directions easier to follow while keeping your hands free.',
          'A simple upgrade that reduces friction on appointment-heavy days.',
        ],
      },
    ],
  },
  {
    id: 'business-and-client-tools',
    label: 'Business Tools',
    title: 'The items that help you book and serve more clients',
    description:
      'Notary income does not come from gear alone. These tools help you market yourself, communicate clearly, and get paid efficiently.',
    picks: [
      {
        title: 'Business Cards',
        badge: 'Best for referrals',
        href: 'https://bit.ly/bearded20',
        cta: 'Get business cards',
        why: 'For newer notaries especially, business cards are still one of the easiest ways to generate word-of-mouth business.',
        bullets: [
          'Simple, clean cards usually convert better than overdesigned ones.',
          'Useful for title offices, real estate contacts, and every signer you meet.',
        ],
      },
      {
        title: 'Cell Phone',
        badge: 'Operational essential',
        why: 'This is the command center of a mobile notary business: calls, scheduling, directions, and follow-up all run through it.',
        bullets: [
          'Keep key contacts saved and easy to reach.',
          'A dependable phone setup makes you easier to book and easier to trust.',
        ],
      },
      {
        title: 'Tablet',
        badge: 'Best for admin on the go',
        href: 'https://amzn.to/4s5Z9PC',
        cta: 'Shop tablets',
        why: 'A tablet helps with email, payments, quick document access, and everyday business management while you are mobile.',
        bullets: [
          'Pairs well with payment processing tools like Square.',
          'Useful when you need a lightweight device instead of a full laptop.',
        ],
      },
    ],
  },
  {
    id: 'loan-signing-upgrades',
    label: 'Loan Signing Upgrades',
    title: 'The gear that matters more as your business grows',
    description:
      'These are the upgrades that become much more important once you move deeper into loan signings, scan-backs, and higher-volume work.',
    picks: [
      {
        title: 'Portable Document Scanner',
        badge: 'Best for scan-backs',
        href: 'https://amzn.to/4j1Pntw',
        cta: 'Shop scanners',
        why: 'A good scanner gives you faster scan-backs, better backups, and more flexibility when handling lender packages.',
        bullets: [
          'Especially useful for loan signing agents handling time-sensitive documents.',
          'Read our scanner guide if you want a deeper comparison before buying.',
        ],
        supportingLink: {
          href: '/best-scanners-for-notaries',
          label: 'Read the best scanner guide',
        },
      },
      {
        title: 'Dual Tray Laser Printer',
        badge: 'Best overall upgrade',
        href: 'https://amzn.to/492MF2D',
        cta: 'View printer',
        why: 'If you plan to do loan signings, this is one of the most important investments you can make.',
        bullets: [
          'Handles both letter and legal paper efficiently.',
          'Faster and more practical than inkjet for consistent signing work.',
        ],
        supportingLink: {
          href: '/best-printers-for-notaries',
          label: 'Read the best printer guide',
        },
      },
      {
        title: 'Digital Camera',
        badge: 'Best for extra service lines',
        href: 'https://amzn.to/4969GBD',
        cta: 'Shop cameras',
        why: 'Not required for standard notary work, but useful if you add property inspection or field service work.',
        bullets: [
          'Can help you branch into other appointment-based income streams.',
          'A good optional upgrade for notaries looking to diversify.',
        ],
      },
    ],
  },
];

const setupBundles: SetupBundle[] = [
  {
    title: 'New Notary Starter Setup',
    items: ['Journal', 'Stamp', 'Thumbprint pad', 'Business cards', 'Bag or briefcase', 'Cell phone'],
  },
  {
    title: 'Working Mobile Notary Setup',
    items: ['Everything above', 'Stapler/remover', 'Phone mount', 'Tablet', 'Portable scanner'],
  },
  {
    title: 'Loan Signing Agent Upgrade Setup',
    items: ['Everything above', 'Dual tray laser printer', 'Extra paper and toner', 'Optional camera for adjacent service lines'],
  },
];

export default function MobileNotarySupplies() {
  return (
    <div className="min-h-screen bg-white">
      <ArticleHeader title="Mobile Notary Supplies Checklist" eyebrow="Updated July 2026" />

      <article className="max-w-5xl mx-auto px-4 py-12">
        <div className="mb-8 max-w-4xl">
          <p className="text-xl text-gray-700">
            This page is meant to help you build a setup that actually supports the work. Instead of treating
            supplies like a random checklist, think of them in layers: legal essentials, mobile workflow tools,
            business-building tools, and the upgrades that matter once loan signing work starts growing.
          </p>
        </div>

        <div className="my-8">
          <img
            src="/images/mobile-notary-supplies-featured.png"
            alt="Mobile notary supplies checklist and buyer's guide"
            className="w-full max-w-2xl mx-auto"
          />
        </div>

        <div className="grid gap-6 mb-12 md:grid-cols-[1.15fr_0.85fr]">
          <section className="border-2 border-notary-gold/40 bg-gray-50 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-notary-gold mb-3">Quick Jump</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {sections.map((section) => (
                <a key={section.id} href={`#${section.id}`} className="border border-gray-200 bg-white px-4 py-3 font-semibold text-notary-navy transition hover:border-notary-gold">
                  {section.label}
                </a>
              ))}
            </div>
          </section>

          <section className="border border-gray-200 bg-white p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-notary-gold mb-3">How I Choose</p>
            <ul className="space-y-3 text-gray-700">
              <li>Reliable for real mobile notary workflows, not just generic office use.</li>
              <li>Easy to carry, organize, or use during live appointments.</li>
              <li>Worth the cost for newer notaries trying to build a practical setup.</li>
              <li>Helpful for the kind of work that leads to repeat clients and smoother signings.</li>
            </ul>
          </section>
        </div>

        <div className="mb-10 rounded bg-notary-navy p-6 text-white">
          <h2 className="text-2xl font-bold mb-3">Just getting started?</h2>
          <p className="text-gray-200">
            Use this page as your gear guide, then pair it with{' '}
            <Link href="/notary-business-resources" className="text-notary-gold hover:underline">
              85+ Notary Business Resources
            </Link>{' '}
            and the{' '}
            <Link href="/first-30-days-new-notary" className="text-notary-gold hover:underline">
              First 30 Days action plan
            </Link>{' '}
            so your setup actually turns into signed appointments.
          </p>
        </div>

        <div className="mb-12 grid gap-6 md:grid-cols-2">
          <div className="border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-xl font-bold text-notary-navy mb-3">Loose certificates matter</h2>
            <p className="text-gray-700">
              Keep compliant loose certificates on hand, but buy them carefully. Wording can be state-specific, so
              this is one category where it usually makes more sense to follow your state rules than to copy a
              generic recommendation from someone else&apos;s supply list.
            </p>
          </div>
          <div className="border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-xl font-bold text-notary-navy mb-3">Backup supplies save appointments</h2>
            <p className="text-gray-700">
              Even if you do not need a specific recommendation here, keep backup stamp ink, extra pens, and basic
              refill-type supplies on hand. These are the small things that prevent a simple appointment from turning
              into a reschedule.
            </p>
          </div>
        </div>

        <div className="space-y-16">
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-28">
              <div className="mb-8 max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-notary-gold mb-3">{section.label}</p>
                <h2 className="text-3xl font-bold text-notary-navy mb-4">{section.title}</h2>
                <p className="text-lg text-gray-700">{section.description}</p>
              </div>

              <div className="grid gap-6 lg:grid-cols-3">
                {section.picks.map((pick) => (
                  <div key={pick.title} className="border-2 border-gray-200 bg-white p-6">
                    <div className="mb-4 inline-block bg-notary-gold/15 px-3 py-1 text-sm font-semibold text-notary-navy">
                      {pick.badge}
                    </div>
                    <h3 className="text-2xl font-bold text-notary-navy mb-3">{pick.title}</h3>
                    <p className="text-gray-700 mb-4">{pick.why}</p>
                    <ul className="mb-5 space-y-2 text-gray-700">
                      {pick.bullets.map((bullet) => (
                        <li key={bullet}>- {bullet}</li>
                      ))}
                    </ul>
                    {pick.supportingLink ? (
                      <p className="mb-4 text-sm">
                        <Link href={pick.supportingLink.href} className="font-semibold text-notary-gold hover:underline">
                          {pick.supportingLink.label}
                        </Link>
                      </p>
                    ) : null}
                    {pick.title === 'Notary Sequential Journal' ? (
                      <div className="space-y-3">
                        {journalOptions.map((option) => (
                          <div key={option.label} className="border border-gray-200 bg-gray-50 p-4">
                            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-notary-gold">{option.label}</p>
                            <p className="mb-3 text-sm text-gray-700">{option.note}</p>
                            <a
                              href={option.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block bg-notary-navy px-4 py-2 text-sm font-semibold text-white transition hover:bg-opacity-90"
                            >
                              {option.cta}
                            </a>
                          </div>
                        ))}
                      </div>
                    ) : pick.title === 'Inkless Thumbprint Pad' ? (
                      <div className="space-y-3">
                        {thumbprintPadOptions.map((option) => (
                          <div key={option.label} className="border border-gray-200 bg-gray-50 p-4">
                            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-notary-gold">{option.label}</p>
                            <p className="mb-3 text-sm text-gray-700">{option.note}</p>
                            <a
                              href={option.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block bg-notary-navy px-4 py-2 text-sm font-semibold text-white transition hover:bg-opacity-90"
                            >
                              {option.cta}
                            </a>
                          </div>
                        ))}
                      </div>
                    ) : pick.href ? (
                      <a
                        href={pick.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-notary-navy px-5 py-3 font-semibold text-white transition hover:bg-opacity-90"
                      >
                        {pick.cta}
                      </a>
                    ) : null}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-16 border-t-2 border-gray-200 pt-12">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-notary-gold mb-3">Complete Setup</p>
            <h2 className="text-3xl font-bold text-notary-navy mb-4">Build your kit in stages</h2>
            <p className="text-lg text-gray-700">
              You do not need every upgrade on day one. Build the starter kit first, then add the higher-end gear
              as your appointment volume and income justify it.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {setupBundles.map((bundle) => (
              <div key={bundle.title} className="border border-gray-200 bg-gray-50 p-6">
                <h3 className="text-2xl font-bold text-notary-navy mb-4">{bundle.title}</h3>
                <ul className="space-y-2 text-gray-700">
                  {bundle.items.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-16 pt-8 border-t-2 border-gray-200">
          <h2 className="text-2xl font-bold text-notary-navy mb-6">Build the Rest of Your Setup</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/best-scanners-for-notaries" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
              <h3 className="font-bold text-notary-navy mb-2">Best Scanners for Notaries</h3>
              <p className="text-gray-600 text-sm">Choose the right scanner for scan-backs, travel, and mobile document work.</p>
            </Link>
            <Link href="/best-printers-for-notaries" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
              <h3 className="font-bold text-notary-navy mb-2">Best Printers for Notaries</h3>
              <p className="text-gray-600 text-sm">Go deeper on dual-tray, portable, and budget-friendly printer picks.</p>
            </Link>
            <Link href="/how-much-to-charge-mobile-notary" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
              <h3 className="font-bold text-notary-navy mb-2">Notary Pricing Guide</h3>
              <p className="text-gray-600 text-sm">Make sure your rates cover the gear and time your business requires.</p>
            </Link>
            <Link href="/smart-money-management-for-notaries" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
              <h3 className="font-bold text-notary-navy mb-2">Smart Money Management for Notaries</h3>
              <p className="text-gray-600 text-sm">Track supplies, mileage, and margins so your setup actually pays off.</p>
            </Link>
            <Link href="/notary-business-resources" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
              <h3 className="font-bold text-notary-navy mb-2">85+ Notary Business Resources</h3>
              <p className="text-gray-600 text-sm">Expand into training, directories, and tools once your core setup is ready.</p>
            </Link>
          </div>
        </div>

        <div className="mt-12 p-4 bg-gray-100 text-sm text-gray-600">
          <p>
            The Bearded Notary is a participant in the Amazon Services LLC Associates Program, an affiliate
            advertising program. Making a purchase through one of these links may earn us a small commission at no
            cost to you.
          </p>
        </div>
      </article>

      <footer className="bg-notary-navy text-white py-8 mt-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            (c) {new Date().getFullYear()} The Bearded Notary. Amazon Associates Participant.
          </p>
        </div>
      </footer>
    </div>
  );
}
