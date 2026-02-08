import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import AppShell from "@/components/layout/AppShell";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pedals & Gears — Hero & Firefox Cycles | Sector 104, Noida",
  description:
    "Your trusted bicycle shop in Sector 104, Noida. Authorized Hero & Firefox dealer. New cycles, repair, accessories, and home delivery. Call 096544 88788.",
  keywords: [
    "bicycle shop noida",
    "hero cycles noida",
    "firefox cycles noida",
    "cycle shop sector 104",
    "bike repair noida",
    "pedals and gears",
    "साइकिल दुकान नोएडा",
    "cycle shop near me noida",
    "best bicycle shop noida",
    "bicycle repair sector 104 noida",
    "kids cycle noida",
    "electric bicycle noida",
    "mountain bike noida",
    "hero cycle dealer noida",
    "firefox cycle dealer noida",
    "cycle accessories noida",
    "bicycle home delivery noida",
    "gear cycle noida",
    "hybrid cycle noida",
    "cycle shop hazipur noida",
  ],
  openGraph: {
    title: "Pedals & Gears — Hero & Firefox Cycles",
    description:
      "Authorized Hero & Firefox bicycle dealer in Sector 104, Noida. Quality bikes, expert service, unbeatable prices.",
    url: "https://pedalsandgears.in",
    siteName: "Pedals & Gears",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pedals & Gears — Hero & Firefox Cycles",
    description:
      "Authorized Hero & Firefox bicycle dealer in Sector 104, Noida. Quality bikes, expert service, unbeatable prices.",
    creator: "@pedalsgears",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BikeStore",
    name: "Pedals & Gears",
    alternateName: "पेडल्स एंड गियर्स",
    description:
      "Authorized Hero & Firefox bicycle dealer in Sector 104, Noida. New cycles, repair, accessories, and home delivery.",
    url: "https://pedalsandgears.in",
    telephone: "+91-9654488788",
    email: "pedalsandgears104noida@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "GF Floor, 14, Jupiter Enclave, behind Patanjali Store, Hazipur",
      addressLocality: "Noida",
      addressRegion: "Uttar Pradesh",
      postalCode: "201304",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.5397633,
      longitude: 77.3680267,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "11:00",
      closes: "20:00",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.3",
      reviewCount: "101",
    },
    sameAs: [
      "https://www.instagram.com/pedalsgears/",
      "https://www.google.com/maps/dir/?api=1&destination=28.5397633,77.3680267",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Bicycle Products",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Mountain Bikes",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Product",
                name: "Mountain Bikes",
              },
              priceSpecification: {
                "@type": "PriceSpecification",
                priceCurrency: "INR",
                minPrice: "8000",
                maxPrice: "45000",
              },
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Road Bikes",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Product",
                name: "Road Bikes",
              },
              priceSpecification: {
                "@type": "PriceSpecification",
                priceCurrency: "INR",
                minPrice: "6000",
                maxPrice: "35000",
              },
            },
          ],
        },
      ],
    },
    potentialAction: {
      "@type": "CommunicateAction",
      name: "Call for inquiry",
      target: "tel:+91-9654488788",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Pedals & Gears",
    url: "https://pedalsandgears.in",
    logo: "https://pedalsandgears.in/icon-512.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9654488788",
      contactType: "sales",
      availableLanguage: ["English", "Hindi"],
    },
    sameAs: [
      "https://www.instagram.com/pedalsgears/",
      "https://www.google.com/maps/dir/?api=1&destination=28.5397633,77.3680267",
    ],
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${montserrat.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
