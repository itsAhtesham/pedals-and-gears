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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${montserrat.variable} ${inter.variable}`}>
      <body suppressHydrationWarning>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
