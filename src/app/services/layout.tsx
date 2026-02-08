import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Repairs, Sales & Delivery | Pedals & Gears",
  description:
    "Bicycle sales, repair, custom builds, accessories, home delivery and warranty support at Pedals & Gears, Sector 104, Noida.",
  openGraph: {
    title: "Services | Pedals & Gears",
    description:
      "Cycle sales, repair, delivery and more in Sector 104, Noida.",
    url: "https://pedalsandgears.in/services",
    siteName: "Pedals & Gears",
    locale: "en_IN",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  provider: {
    "@type": "BikeStore",
    name: "Pedals & Gears",
    url: "https://pedalsandgears.in",
  },
  areaServed: {
    "@type": "City",
    name: "Noida",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Bicycle Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Bike Sales" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Repair & Service" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Accessories" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Customization" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Home Delivery" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Warranty Support" },
      },
    ],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
