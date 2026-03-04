import type { Metadata, Viewport } from "next";
import { Cinzel, DM_Sans } from "next/font/google";
import { faqItems } from "@/data/faq";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "LotusHacks 2026 \u2014 Vietnam's Largest Hackathon",
  description:
    "Join 800+ builders for a 36-hour hackathon at LotusHacks x HackHarvard 2026. March 20-22 at VNG Campus, Ho Chi Minh City. Over 250M+ VND in prizes.",
  metadataBase: new URL("https://lotushack.org"),
  keywords: [
    "hackathon",
    "Vietnam",
    "Ho Chi Minh City",
    "HackHarvard",
    "LotusHacks",
    "LotusHack",
    "coding",
    "2026",
    "VNG Campus",
    "tech event",
    "student hackathon",
    "36 hour hackathon",
  ],
  authors: [
    { name: "LotusHacks", url: "https://lotushack.org" },
    { name: "HackHarvard", url: "https://hackharvard.io" },
  ],
  creator: "LotusHacks x HackHarvard",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://lotushack.org",
  },
  openGraph: {
    title: "LotusHacks 2026 \u2014 Vietnam's Largest Hackathon",
    description:
      "Join 800+ builders for a 36-hour hackathon at LotusHacks x HackHarvard 2026. March 20-22 at VNG Campus, Ho Chi Minh City.",
    url: "https://lotushack.org",
    siteName: "LotusHacks",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/assets/img/branding/lotushacks-color-logo.png",
        width: 1080,
        height: 1080,
        alt: "LotusHacks x HackHarvard Vietnam 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LotusHacks 2026 \u2014 Vietnam's Largest Hackathon",
    description:
      "Join 800+ builders for a 36-hour hackathon. March 20-22 at VNG Campus, Ho Chi Minh City.",
    images: ["/assets/img/branding/lotushacks-color-logo.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  applicationName: "LotusHacks",
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#0a1f1a",
};

/**
 * JSON-LD structured data for the hackathon event.
 * Content is a static constant, safe to inline (no user input).
 */
function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "LotusHacks x HackHarvard Vietnam 2026",
    description:
      "A 36-hour, in-person hackathon bringing together 800+ builders, creators, and hackers to Ho Chi Minh City. Over 250M+ VND in prizes across 4 tracks.",
    startDate: "2026-03-20T20:00:00+07:00",
    endDate: "2026-03-22T08:00:00+07:00",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: "VNG Campus",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ho Chi Minh City",
        addressRegion: "District 7",
        addressCountry: "VN",
      },
    },
    organizer: [
      {
        "@type": "Organization",
        name: "LotusHacks",
        url: "https://lotushack.org",
      },
      {
        "@type": "Organization",
        name: "HackHarvard",
        url: "https://hackharvard.io",
      },
    ],
    image:
      "https://lotushack.org/assets/img/branding/lotushacks-color-logo.png",
    url: "https://lotushack.org",
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.plainAnswer,
      },
    })),
  };

  /* Both objects are static constants with no user input - safe to serialize */
  const eventJson = JSON.stringify(data);
  const faqJson = JSON.stringify(faqData);

  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning>
        {eventJson}
      </script>
      <script type="application/ld+json" suppressHydrationWarning>
        {faqJson}
      </script>
    </>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <JsonLd />
      </head>
      <body className={`${cinzel.variable} ${dmSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
