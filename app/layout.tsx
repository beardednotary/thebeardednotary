import type { Metadata } from "next";
import Script from "next/script";
import JsonLd from "../components/JsonLd";
import { buildOrganizationSchema, buildWebsiteSchema } from "../lib/schema";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://thebeardednotary.com'),
  title: "The Bearded Notary | Resources for Mobile Notaries & Loan Signing Agents",
  description: "Your trusted resource for building a profitable mobile notary and loan signing business. Essential guides, books, supplies, and training for aspiring and seasoned notaries.",
  alternates: {
    canonical: '/', 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = [buildOrganizationSchema(), buildWebsiteSchema()];

  return (
    <html lang="en">
      <body className="bg-notary-cream">
        <JsonLd data={structuredData} />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1P1X5KPFKC"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1P1X5KPFKC');
          `}
        </Script>
        
        {children}
      </body>
    </html>
  );
}

