import Link from "next/link";
import PrimaryNav from "./PrimaryNav";

type ArticleHeaderProps = {
  title: string;
  eyebrow?: string;
};

export default function ArticleHeader({ title, eyebrow }: ArticleHeaderProps) {
  return (
    <header className="border-b-4 border-notary-gold bg-notary-navy text-white">
      <div className="mx-auto max-w-5xl px-4 py-6">
        <div className="mb-6 flex flex-col gap-4 border-b border-white/10 pb-5 md:flex-row md:items-center md:justify-between">
          <Link href="/" className="text-lg font-bold tracking-[0.18em] text-white transition hover:text-notary-gold">
            THE BEARDED NOTARY
          </Link>
          <PrimaryNav light />
        </div>
        <Link href="/" className="mb-3 inline-block text-sm font-semibold text-notary-gold transition hover:text-white">
          Back to Home
        </Link>
        {eyebrow ? <p className="mb-2 text-sm text-gray-300">{eyebrow}</p> : null}
        <h1 className="max-w-4xl text-4xl font-bold md:text-5xl">{title}</h1>
      </div>
    </header>
  );
}
