import EmailCapture from "./EmailCapture";

type ArticleSignupCtaProps = {
  source: string;
};

const copyBySource: Record<
  string,
  {
    heading: string;
    description: string;
    buttonLabel: string;
  }
> = {
  "california-notary-article": {
    heading: "Get the Free First 30 Days Action Plan",
    description: "Now that you know how to get commissioned, get the action plan that helps you turn that commission into actual appointments.",
    buttonLabel: "Send my action plan",
  },
  "pricing-guide-article": {
    heading: "Get the Free First 30 Days Action Plan",
    description: "Use the action plan to pair better pricing with the marketing and setup steps that help new notaries start earning faster.",
    buttonLabel: "Get the free plan",
  },
  "supplies-article": {
    heading: "Get the Free First 30 Days Action Plan",
    description: "Your gear is only part of the setup. Get the action plan that shows what to do with that setup in your first month.",
    buttonLabel: "Send the action plan",
  },
  "best-printers-article": {
    heading: "Get the Free First 30 Days Action Plan",
    description: "If you are building for real signing work, get the action plan that connects gear, pricing, and early client momentum.",
    buttonLabel: "Get the free plan",
  },
  "best-portable-printers-article": {
    heading: "Get the Free First 30 Days Action Plan",
    description: "Backup gear matters most when the rest of your business is moving. Get the action plan that helps you build that foundation.",
    buttonLabel: "Send my plan",
  },
  "best-scanners-article": {
    heading: "Get the Free First 30 Days Action Plan",
    description: "If you are gearing up for signings and scan-backs, get the action plan that helps you build the rest of the business around it.",
    buttonLabel: "Get the free plan",
  },
  "free-marketing-sites-article": {
    heading: "Get the Free First 30 Days Action Plan",
    description: "Listings are step one. Get the action plan that helps you turn visibility into early bookings and repeat momentum.",
    buttonLabel: "Send my action plan",
  },
  "target-industries-article": {
    heading: "Get the Free First 30 Days Action Plan",
    description: "Know who to target, then get the action plan that helps you turn outreach into your first real client base.",
    buttonLabel: "Get the free plan",
  },
  "money-management-article": {
    heading: "Get the Free First 30 Days Action Plan",
    description: "Better margins start with the right setup and early habits. Get the action plan that helps new notaries build both.",
    buttonLabel: "Send my plan",
  },
  "resources-article": {
    heading: "Get the Free First 30 Days Action Plan",
    description: "You have the resources. Get the step-by-step plan that shows what to focus on first so you do not stall out.",
    buttonLabel: "Get the free plan",
  },
  "essential-books-article": {
    heading: "Get the Free First 30 Days Action Plan",
    description: "Reading helps, but action builds the business. Get the free plan that gives you the first-month steps to follow next.",
    buttonLabel: "Send my action plan",
  },
  "document-types-article": {
    heading: "Get the Free First 30 Days Action Plan",
    description: "Document confidence is powerful. Get the action plan that helps you turn that knowledge into better early execution.",
    buttonLabel: "Get the free plan",
  },
  "first-30-days-article": {
    heading: "Want the PDF version too?",
    description: "Get the free First 30 Days Action Plan by email so you can keep the checklist handy while you work through it.",
    buttonLabel: "Email me the plan",
  },
  "loan-signing-opportunity-article": {
    heading: "Get the Free First 30 Days Action Plan",
    description: "If loan signings are part of the goal, get the action plan that helps you build the notary business underneath that opportunity.",
    buttonLabel: "Send my action plan",
  },
  "ca-notary-cost-article": {
    heading: "Get the Free First 30 Days Action Plan",
    description: "Once you know the startup costs, get the step-by-step plan that helps you make those first dollars back faster.",
    buttonLabel: "Send my action plan",
  },
  "ca-notary-exam-article": {
    heading: "Get the Free First 30 Days Action Plan",
    description: "Pass the exam, then use the action plan to turn that win into a real first-month game plan.",
    buttonLabel: "Get the free plan",
  },
  "notary-vs-signing-agent-article": {
    heading: "Get the Free First 30 Days Action Plan",
    description: "Whether you stay general or move toward signings, get the first-month plan that helps you build a real business foundation.",
    buttonLabel: "Send my action plan",
  },
  "business-email-article": {
    heading: "Get the Free First 30 Days Action Plan",
    description: "Once your business email is set up, get the first-month plan that shows what to do next.",
    buttonLabel: "Send my action plan",
  },
  "payment-methods-article": {
    heading: "Get the Free First 30 Days Action Plan",
    description: "Once your payment setup is ready, get the first-month plan that shows what to tackle next.",
    buttonLabel: "Send my action plan",
  },
};

export default function ArticleSignupCta({ source }: ArticleSignupCtaProps) {
  const copy = copyBySource[source] ?? {
    heading: "Get the Free First 30 Days Action Plan",
    description: "Join the list for actionable guidance on pricing, equipment, marketing, and the systems that help mobile notaries earn more.",
    buttonLabel: "Send my action plan",
  };

  return (
    <section className="my-12 border-2 border-notary-gold/40 bg-gray-50 p-8">
      <EmailCapture
        heading={copy.heading}
        description={copy.description}
        buttonLabel={copy.buttonLabel}
        source={source}
        className="max-w-3xl"
      />
    </section>
  );
}
