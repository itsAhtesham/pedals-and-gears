import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Pedals & Gears — Hero & Firefox Cycles",
  description:
    "Learn about Pedals & Gears, your trusted bicycle shop in Sector 104, Noida. Authorized Hero & Firefox dealer with a mission to get Noida cycling.",
  openGraph: {
    title: "About Us | Pedals & Gears",
    description:
      "Your trusted bicycle shop in Sector 104, Noida. Authorized Hero & Firefox dealer.",
    url: "https://pedalsandgears.in/about",
    siteName: "Pedals & Gears",
    locale: "en_IN",
    type: "website",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
