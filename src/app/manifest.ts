import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Pedals & Gears — Hero & Firefox Cycles",
    short_name: "Pedals & Gears",
    description:
      "Your trusted bicycle shop in Sector 104, Noida. Authorized Hero & Firefox dealer. New cycles, repair, accessories, and home delivery.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2563eb",
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
