import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Pedals & Gears — Bikes & Store",
  description:
    "Photos of our bicycle collection, workshop and store in Sector 104, Noida. Hero & Firefox cycles and more.",
  openGraph: {
    title: "Gallery | Pedals & Gears",
    description:
      "Our bikes, workshop and store in Sector 104, Noida.",
    url: "https://pedalsandgears.in/gallery",
    siteName: "Pedals & Gears",
    locale: "en_IN",
    type: "website",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
