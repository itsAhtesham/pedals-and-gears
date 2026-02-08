import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Pedals & Gears — Sector 104, Noida",
  description:
    "Get in touch with Pedals & Gears. Visit us in Sector 104, Noida, or call 096544 88788. We're open 11 AM–8 PM every day.",
  openGraph: {
    title: "Contact | Pedals & Gears",
    description:
      "Visit or call Pedals & Gears in Sector 104, Noida. Hero & Firefox cycles.",
    url: "https://pedalsandgears.in/contact",
    siteName: "Pedals & Gears",
    locale: "en_IN",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Pedals & Gears",
  url: "https://pedalsandgears.in/contact",
  mainEntity: {
    "@type": "LocalBusiness",
    "@id": "https://pedalsandgears.in",
    name: "Pedals & Gears",
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
  },
};

export default function ContactLayout({
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
