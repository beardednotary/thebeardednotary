import Link from "next/link";

type AuthorBylineProps = {
  className?: string;
};

export default function AuthorByline({ className = "" }: AuthorBylineProps) {
  return (
    <div className={`flex items-center gap-3 text-sm text-gray-600 ${className}`.trim()}>
      <img
        src="/images/ray-bearded-notary-author-photo.jpg"
        alt="Ray, founder of The Bearded Notary"
        className="w-10 h-10 rounded-full object-cover border-2 border-notary-gold flex-shrink-0"
      />
      <p>
        Written by{' '}
        <Link href="/about" className="font-semibold text-notary-navy hover:text-notary-gold hover:underline">
          Ray
        </Link>
        , former commissioned California Notary Public (2018-2022) — general notarizations and loan signings.
      </p>
    </div>
  );
}
