import type { Metadata } from "next";
import { Zilla_Slab, Work_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { getSiteSettings } from "@/lib/data/settings";

const headingFont = Zilla_Slab({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bodyFont = Work_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://welcome-to-grass-valley.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Welcome to Grass Valley Podcast",
    template: "%s | Welcome to Grass Valley",
  },
  description:
    "Real, respectful, and hopeful conversations from the Sierra Nevada foothills with hosts Nathaniel Redmond & Ryan Doty.",
  openGraph: {
    title: "Welcome to Grass Valley Podcast",
    description:
      "A community lifeline mixing local news, recovery support, and the stories of Grass Valley.",
    url: siteUrl,
    siteName: "Welcome to Grass Valley",
    images: [
      {
        url: `${siteUrl}/og-cover.svg`,
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Welcome to Grass Valley Podcast",
    description:
      "Neighbors Nathaniel Redmond & Ryan Doty host a community lifeline for Grass Valley, CA.",
    images: [`${siteUrl}/og-cover.svg`],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getSiteSettings();

  const socialLinks =
    (settings?.social_links as Record<string, string> | null) ?? null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PodcastSeries",
    name: "Welcome to Grass Valley",
    description: metadata.description,
    url: siteUrl,
    inLanguage: "en-US",
    publisher: {
      "@type": "Organization",
      name: "Welcome to Grass Valley",
    },
    producer: ["Nathaniel Redmond", "Ryan Doty"],
  };

  return (
    <html lang="en">
      <body
        className={`${headingFont.variable} ${bodyFont.variable} bg-background text-foreground antialiased`}
      >
        <SiteHeader tagline={settings?.tagline} />
        <main className="screen-edge">
          <div className="mx-auto w-full max-w-6xl">{children}</div>
        </main>
        <SiteFooter socialLinks={socialLinks} />
        <Script
          id="podcast-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
