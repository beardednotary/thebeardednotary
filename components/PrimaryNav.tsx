"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type PrimaryNavProps = {
  light?: boolean;
};

const links = [
  { href: "/", label: "Home" },
  { href: "/first-30-days-new-notary", label: "Start Here" },
  { href: "/how-much-to-charge-mobile-notary", label: "Pricing" },
  { href: "/mobile-notary-supplies", label: "Supplies" },
  { href: "/notary-business-resources", label: "Resources" },
];

export default function PrimaryNav({ light = false }: PrimaryNavProps) {
  const pathname = usePathname();

  function isActive(href: string) {
    if (href === "/") {
      return pathname === "/";
    }

    if (!pathname) {
      return false;
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <nav aria-label="Primary" className="flex flex-wrap gap-x-5 gap-y-2">
      {links.map((link) => {
        const active = isActive(link.href);
        const linkClass = light
          ? active
            ? "text-sm font-semibold text-notary-gold underline decoration-2 underline-offset-4"
            : "text-sm font-semibold text-gray-200 transition hover:text-notary-gold"
          : active
            ? "text-sm font-semibold text-notary-gold underline decoration-2 underline-offset-4"
            : "text-sm font-semibold text-notary-navy transition hover:text-notary-gold";

        return (
          <Link key={link.href} href={link.href} aria-current={active ? "page" : undefined} className={linkClass}>
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
