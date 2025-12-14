import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://thebeardednotary.com'),
  title: "The Bearded Notary | Resources for Mobile Notaries & Loan Signing Agents",
  description: "Your trusted resource for building a profitable mobile notary and loan signing business. Essential guides, books, supplies, and training for aspiring and seasoned notaries.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-notary-cream">{children}</body>
    </html>
  );
}
