type AffiliateDisclosureProps = {
  className?: string;
};

export default function AffiliateDisclosure({ className = '' }: AffiliateDisclosureProps) {
  return (
    <div className={`rounded border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-gray-800 ${className}`.trim()}>
      <strong>Disclosure:</strong> This page includes affiliate links. If you buy or sign up through them, The Bearded Notary may earn a commission at no extra cost to you.
    </div>
  );
}
