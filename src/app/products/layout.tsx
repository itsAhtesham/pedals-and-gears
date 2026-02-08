import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | Hero & Firefox Bikes | Pedals & Gears",
  description:
    "Explore mountain, road, kids, electric, hybrid and gear cycles from Hero & Firefox at Pedals & Gears, Sector 104, Noida. Prices from ₹3,000.",
  openGraph: {
    title: "Products | Pedals & Gears",
    description:
      "Hero & Firefox cycles: mountain, road, kids, electric, hybrid and more in Noida.",
    url: "https://pedalsandgears.in/products",
    siteName: "Pedals & Gears",
    locale: "en_IN",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Pedals & Gears — Bicycle Products",
  description:
    "Hero & Firefox cycles: mountain, road, kids, electric, hybrid and gear cycles.",
  url: "https://pedalsandgears.in/products",
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
            description: "Rugged mountain bikes for trail and off-road adventures.",
            brand: [{ "@type": "Brand", name: "Hero" }, { "@type": "Brand", name: "Firefox" }],
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
            description: "Lightweight road bikes for speed and commuting.",
            brand: [{ "@type": "Brand", name: "Hero" }, { "@type": "Brand", name: "Firefox" }],
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
    {
      "@type": "OfferCatalog",
      name: "Kids Bikes",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Kids Bikes",
            description: "Safe and fun bikes for children of all ages.",
            brand: [{ "@type": "Brand", name: "Hero" }, { "@type": "Brand", name: "Firefox" }],
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "INR",
            minPrice: "3000",
            maxPrice: "12000",
          },
        },
      ],
    },
    {
      "@type": "OfferCatalog",
      name: "Electric Bikes",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Electric Bikes",
            description: "Eco-friendly electric bikes for effortless rides.",
            brand: [{ "@type": "Brand", name: "Hero" }, { "@type": "Brand", name: "Firefox" }],
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "INR",
            minPrice: "25000",
            maxPrice: "80000",
          },
        },
      ],
    },
    {
      "@type": "OfferCatalog",
      name: "Hybrid Bikes",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Hybrid Bikes",
            description: "Versatile hybrid bikes for road and trail.",
            brand: [{ "@type": "Brand", name: "Hero" }, { "@type": "Brand", name: "Firefox" }],
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "INR",
            minPrice: "10000",
            maxPrice: "40000",
          },
        },
      ],
    },
    {
      "@type": "OfferCatalog",
      name: "Gear Cycles",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Gear Cycles",
            description: "Multi-gear cycles for all terrains.",
            brand: [{ "@type": "Brand", name: "Hero" }, { "@type": "Brand", name: "Firefox" }],
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "INR",
            minPrice: "7000",
            maxPrice: "30000",
          },
        },
      ],
    },
  ],
};

export default function ProductsLayout({
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
