import EmailCapture from "./EmailCapture";

type ArticleSignupCtaProps = {
  source: string;
};

export default function ArticleSignupCta({ source }: ArticleSignupCtaProps) {
  return (
    <section className="my-12 border-2 border-notary-gold/40 bg-gray-50 p-8">
      <EmailCapture
        heading="Get the Free First 30 Days Action Plan"
        description="Join the list for actionable guidance on pricing, equipment, marketing, and the systems that help mobile notaries earn more."
        buttonLabel="Send my action plan"
        source={source}
        className="max-w-3xl"
      />
    </section>
  );
}
