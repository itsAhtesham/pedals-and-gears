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
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
