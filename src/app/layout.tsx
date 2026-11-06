import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SiteMotion } from "@/components/SiteMotion";
import { site } from "@/lib/site";

const cabin = localFont({
  src: [
    { path: "./fonts/cabin-latin-500-normal.woff2", weight: "500" },
    { path: "./fonts/cabin-latin-600-normal.woff2", weight: "600" },
    { path: "./fonts/cabin-latin-700-normal.woff2", weight: "700" },
  ],
  variable: "--font-cabin",
  display: "swap",
});

const sourceSans = localFont({
  src: [
    { path: "./fonts/source-sans-3-latin-400-normal.woff2", weight: "400" },
    { path: "./fonts/source-sans-3-latin-400-italic.woff2", weight: "400", style: "italic" },
    { path: "./fonts/source-sans-3-latin-600-normal.woff2", weight: "600" },
    { path: "./fonts/source-sans-3-latin-700-normal.woff2", weight: "700" },
  ],
  variable: "--font-source-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Benton Youth Initiative | College access for first-generation students",
    template: "%s | Benton Youth Initiative",
  },
  description:
    "Benton Youth Initiative (BYI) is a North Carolina nonprofit that partners with Title I schools to get first-generation and at-risk students onto HBCU campuses and into college.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: "#27374b",
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: site.name,
  alternateName: "BYI",
  url: site.url,
  logo: `${site.url}/images/byi-crest.png`,
  telephone: "+1-336-575-0754",
  email: site.email,
  founder: { "@type": "Person", name: site.founder },
  areaServed: "North Carolina",
  description: site.mission,
  sameAs: [site.social.facebook, site.social.instagram],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cabin.variable} ${sourceSans.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-gold focus:px-4 focus:py-2 focus:text-navy-900"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <SiteMotion />
      </body>
    </html>
  );
}
