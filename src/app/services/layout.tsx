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
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
