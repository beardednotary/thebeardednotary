import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleHeader from '../../components/ArticleHeader';
import ArticleSignupCta from '../../components/ArticleSignupCta';
import JsonLd from '../../components/JsonLd';
import { buildArticleSchema, buildBreadcrumbSchema, buildFaqSchema, getAbsoluteUrl } from '../../lib/schema';

export const metadata: Metadata = {
  title: 'How to Pass the California Notary Exam in 2026 | The Bearded Notary',
  description:
    'How to pass the California notary exam with less stress. Learn what to study, how the test works, what to bring, common mistakes, and a practical study plan for 2026.',
  alternates: {
    canonical: '/how-to-pass-california-notary-exam',
  },
  openGraph: {
    title: 'How to Pass the California Notary Exam in 2026',
    description:
      'A practical guide to passing the California notary exam, including format, passing score, study plan, test-day tips, and common mistakes.',
    images: ['/images/how-to-become-a-notary-california-infographic.png'],
  },
};

const studyPlan = [
  {
    day: 'Day 1',
    focus: 'Understand the test and gather materials',
    tasks: [
      'Download the current California Notary Public Handbook and make that your primary study source.',
      'Review how the exam fits into the full California commission process so the rules make more sense in context.',
      'Make note of the basics: you need a score of 70 or higher, the standard exam/application fee is $40, and exam results are typically mailed within about 15 business days.',
    ],
  },
  {
    day: 'Day 2',
    focus: 'Master notarial acts',
    tasks: [
      'Study acknowledgments, jurats, oaths, affirmations, and certified copies of powers of attorney.',
      'Pay special attention to when a signer must appear, when an oath is required, and what you are actually certifying.',
      'Make your own simple comparison notes so you can distinguish similar acts under pressure.',
    ],
  },
  {
    day: 'Day 3',
    focus: 'Study identification and journal rules',
    tasks: [
      'Review California identification requirements and when credible witnesses may be used.',
      'Study journal entry requirements, thumbprint situations, and recordkeeping expectations.',
      'These are common stress points for new applicants because they blend procedure with legal compliance.',
    ],
  },
  {
    day: 'Day 4',
    focus: 'Study prohibited acts and discipline',
    tasks: [
      'Focus on what notaries cannot do: giving legal advice, overcharging, notarizing incomplete documents, and handling conflicts improperly.',
      'Review penalties, misconduct examples, and why California treats some mistakes so seriously.',
      'This helps you answer scenario questions more confidently.',
    ],
  },
  {
    day: 'Day 5',
    focus: 'Take a practice-style review',
    tasks: [
      'Quiz yourself from your notes and the handbook rather than only re-reading passively.',
      'Flag weak areas instead of pretending everything is sticking.',
      'Spend extra time on the topics that feel similar or easy to confuse.',
    ],
  },
  {
    day: 'Day 6',
    focus: 'Clean up weak areas',
    tasks: [
      'Revisit the sections you are still missing, especially IDs, journal entries, and notarial certificates.',
      'Shorten your notes into a final review sheet you can scan quickly the day before the exam.',
      'Do not try to memorize every sentence. Focus on the rules and distinctions that drive correct answers.',
    ],
  },
  {
    day: 'Day 7',
    focus: 'Final review and logistics',
    tasks: [
      'Review your short notes, then stop cramming.',
      'Prepare your photo ID, completed application, passport photo, proof of completion certificate, registration confirmation, and payment.',
      'Give yourself extra travel time and go in calm rather than trying to salvage things at the last minute.',
    ],
  },
];

const faqItems = [
  {
    question: 'How hard is the California notary exam?',
    answer:
      'It is manageable, but it is not a throwaway test. California requires real knowledge of notarial acts, identification, journal rules, and prohibited conduct, so most applicants do best with focused preparation.',
  },
  {
    question: 'What score do you need to pass the California notary exam?',
    answer:
      'You need a score of 70 or higher to pass the California notary exam.',
  },
  {
    question: 'How much does the California notary exam cost?',
    answer:
      'The standard exam and application fee is $40. If you fail and retake the exam, the exam retake fee is $20.',
  },
  {
    question: 'How long does it take to get California notary exam results?',
    answer:
      'California says exam results are typically available about 15 business days after the test and are mailed to applicants.',
  },
  {
    question: 'How often can you retake the California notary exam?',
    answer:
      'If you fail, you can retake the exam, but not more than once in the same calendar month.',
  },
];

export default function CaliforniaNotaryExamPage() {
  const articleSchema = buildArticleSchema({
    title: 'How to Pass the California Notary Exam in 2026',
    description:
      'How to pass the California notary exam with less stress. Learn what to study, how the test works, what to bring, common mistakes, and a practical study plan for 2026.',
    path: '/how-to-pass-california-notary-exam',
    image: '/images/how-to-become-a-notary-california-infographic.png',
    datePublished: '2026-07-19',
    dateModified: '2026-07-19',
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: getAbsoluteUrl('/') },
    { name: 'How to Pass the California Notary Exam', url: getAbsoluteUrl('/how-to-pass-california-notary-exam') },
  ]);

  const faqSchema = buildFaqSchema(faqItems);

  return (
    <div className="min-h-screen bg-white">
      <ArticleHeader title="How to Pass the California Notary Exam" eyebrow="Updated July 2026" />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <JsonLd data={[articleSchema, breadcrumbSchema, faqSchema]} />

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-8 font-semibold">
            The California notary exam is passable for most prepared applicants, but it rewards careful study and punishes overconfidence.
            If you want the best odds, use the current handbook, study the rules that are easy to confuse, and walk in already knowing the logistics.
          </p>

          <p className="text-gray-700 mb-8">
            If you need the full commission roadmap, start with the{' '}
            <Link href="/how-to-become-a-notary-in-california" className="text-notary-gold hover:underline">
              California notary guide
            </Link>
            . If you are trying to budget the process at the same time, pair this page with the{' '}
            <Link href="/cost-to-become-a-notary-in-california" className="text-notary-gold hover:underline">
              California notary cost breakdown
            </Link>
            .
          </p>

          <div className="bg-blue-50 border-2 border-blue-500 p-8 mb-8 rounded">
            <h2 className="text-2xl font-bold text-notary-navy mb-4">Quick Facts</h2>
            <div className="space-y-3 text-gray-700">
              <p><strong>Passing score:</strong> 70 or higher</p>
              <p><strong>Standard fee:</strong> $40 exam and application fee</p>
              <p><strong>Retake fee:</strong> $20 exam fee</p>
              <p><strong>Results timing:</strong> typically about 15 business days</p>
              <p><strong>Retake rule:</strong> you may not take the exam more than once in the same calendar month</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">What Makes the California Exam Feel Hard</h2>

          <p className="text-gray-700 mb-6">
            For most people, the exam is not hard because of abstract legal theory. It feels hard because the rules can sound similar,
            the wording can be precise, and scenario questions can expose weak understanding fast.
          </p>

          <div className="bg-gray-50 p-6 mb-8 rounded">
            <h3 className="text-xl font-bold text-notary-navy mb-4">Where applicants usually struggle</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Confusing acknowledgments with jurats</li>
              <li>Missing details in California ID requirements</li>
              <li>Underestimating journal and thumbprint rules</li>
              <li>Forgetting what notaries are prohibited from doing</li>
              <li>Assuming “common sense” answers are safer than rule-based answers</li>
            </ul>
          </div>

          <p className="text-gray-700 mb-8">
            The fix is simple: stop studying “generally” and start studying the exact California rules the handbook emphasizes.
          </p>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">What You Should Study First</h2>

          <div className="space-y-6 mb-8">
            <div className="bg-white border-2 border-notary-gold p-6 rounded">
              <h3 className="text-xl font-bold text-notary-navy mb-3">1. The current California Notary Public Handbook</h3>
              <p className="text-gray-700">
                This should be your anchor resource. California specifically points applicants to the current handbook when preparing for the exam, so do not rely only on summary posts or random videos.
              </p>
            </div>
            <div className="bg-white border-2 border-notary-gold p-6 rounded">
              <h3 className="text-xl font-bold text-notary-navy mb-3">2. Notarial acts and certificates</h3>
              <p className="text-gray-700">
                Make sure you can clearly distinguish acknowledgments, jurats, oaths, affirmations, and certified copies of powers of attorney.
              </p>
            </div>
            <div className="bg-white border-2 border-notary-gold p-6 rounded">
              <h3 className="text-xl font-bold text-notary-navy mb-3">3. Identification and journal requirements</h3>
              <p className="text-gray-700">
                California is detailed here, and those details matter. This is one of the biggest confidence-breakers for underprepared applicants.
              </p>
            </div>
            <div className="bg-white border-2 border-notary-gold p-6 rounded">
              <h3 className="text-xl font-bold text-notary-navy mb-3">4. Prohibited acts and misconduct</h3>
              <p className="text-gray-700">
                Study what a California notary cannot do, not just what a notary can do. That is where scenario questions become much easier.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">A Practical 7-Day Study Plan</h2>

          <div className="space-y-6 mb-8">
            {studyPlan.map((entry) => (
              <section key={entry.day} className="bg-gray-50 p-6 rounded border-l-4 border-notary-navy">
                <h3 className="text-2xl font-bold text-notary-navy mb-2">{entry.day}: {entry.focus}</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  {entry.tasks.map((task) => (
                    <li key={task}>{task}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <p className="text-gray-700 mb-8">
            If you want to keep your study time realistic, use this plan with the assumption that your job is not to memorize everything.
            Your job is to understand the rules well enough that tricky wording does not throw you off.
          </p>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">What to Bring to the Exam</h2>

          <div className="bg-white border-2 border-gray-300 p-6 mb-8 rounded">
            <ul className="space-y-3 text-gray-700">
              <li>A current government-issued photo ID</li>
              <li>Your completed notary public application</li>
              <li>A 2&quot; x 2&quot; color passport photo</li>
              <li>Your proof of completion certificate from the approved course</li>
              <li>Your registration confirmation letter</li>
              <li>Your payment in the accepted format listed by California for the exam site</li>
            </ul>
          </div>

          <p className="text-gray-700 mb-8">
            California specifically recommends allowing plenty of travel time. That sounds small, but it matters. Arriving flustered is one of the easiest ways to hurt your performance on a rule-based exam.
          </p>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">What Happens If You Fail?</h2>

          <p className="text-gray-700 mb-6">
            Failing once is not the end of the road. California allows you to retake the exam, but not more than once in the same calendar month.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
            <p className="text-gray-800 font-semibold">
              Your goal after a failed attempt should not be “study harder” in the abstract. It should be “figure out which rule areas actually broke down, then repair those.”
            </p>
          </div>

          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
            <li>Use the retake gap to diagnose weak topics rather than simply rereading everything.</li>
            <li>Revisit the handbook sections that felt most confusing on test day.</li>
            <li>If your course certificate timing becomes an issue later, be aware that proof of completion has its own validity rules under California’s process.</li>
          </ul>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">Best Mindset for Passing</h2>

          <p className="text-gray-700 mb-6">
            The people who tend to pass are usually not the ones who “feel naturally good at tests.” They are the ones who:
          </p>

          <div className="bg-gray-50 p-6 mb-8 rounded">
            <ul className="space-y-2 text-gray-700">
              <li>Use the current handbook instead of stale notes</li>
              <li>Study the exact California rules, not generic national advice</li>
              <li>Respect the parts of the process that feel boring, like journal entries and identification</li>
              <li>Show up organized and calm instead of rushing</li>
            </ul>
          </div>

          <p className="text-gray-700 mb-8">
            Once you pass, your next best page is probably the{' '}
            <Link href="/first-30-days-new-notary" className="text-notary-gold hover:underline">
              First 30 Days action plan
            </Link>
            , because that is where exam success starts turning into actual business momentum.
          </p>

          <h2 className="text-3xl font-bold text-notary-navy mt-12 mb-6">Frequently Asked Questions</h2>

          <div className="space-y-6 mb-12">
            {faqItems.map((faq) => (
              <div key={faq.question} className="bg-gray-50 p-6 rounded">
                <h3 className="text-xl font-bold text-notary-navy mb-3">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>

          <ArticleSignupCta source="ca-notary-exam-article" />

          <div className="border-t-2 border-gray-200 pt-8 mt-12">
            <h3 className="text-2xl font-bold text-notary-navy mb-6">Keep Moving Forward</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/how-to-become-a-notary-in-california" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
                <h4 className="font-bold text-notary-navy mb-2">California Notary Guide</h4>
                <p className="text-gray-600 text-sm">See the full step-by-step path from education through filing your oath and bond.</p>
              </Link>
              <Link href="/cost-to-become-a-notary-in-california" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
                <h4 className="font-bold text-notary-navy mb-2">California Notary Cost Breakdown</h4>
                <p className="text-gray-600 text-sm">Budget the process realistically before you buy more than you need.</p>
              </Link>
              <Link href="/essential-notary-books" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
                <h4 className="font-bold text-notary-navy mb-2">9 Essential Notary Books</h4>
                <p className="text-gray-600 text-sm">Go deeper on everyday notary work, loan signings, and document familiarity.</p>
              </Link>
              <Link href="/first-30-days-new-notary" className="block p-6 border-2 border-notary-gold hover:bg-gray-50 transition">
                <h4 className="font-bold text-notary-navy mb-2">Your First 30 Days as a Mobile Notary</h4>
                <p className="text-gray-600 text-sm">Use the action plan once you pass and move into the next stage.</p>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
