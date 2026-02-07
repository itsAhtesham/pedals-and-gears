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
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
