export const STORE_INFO = {
  name: "Pedals & Gears",
  nameHindi: "पेडल्स एंड गियर्स",
  tagline: "Hero & Firefox Cycles",
  taglineHindi: "हीरो & फायरफॉक्स साइकिल्स",
  phone: "096544 88788",
  email: "pedalsandgears104noida@gmail.com",
  website: "pedalsandgears.in",
  instagram: "https://www.instagram.com/pedalsgears/",
  instagramHandle: "@pedalsgears",
  address: "GF Floor, 14, Jupiter Enclave, behind Patanjali Store, Hazipur, Sector 104, Noida, Uttar Pradesh 201304",
  addressHindi: "GF फ्लोर, 14, जुपिटर एन्क्लेव, पतंजलि स्टोर के पीछे, हाजीपुर, सेक्टर 104, नोएडा, उत्तर प्रदेश 201304",
  rating: 4.3,
  reviewCount: 101,
  hours: {
    monday: "11:00 AM - 8:00 PM",
    tuesday: "11:00 AM - 8:00 PM",
    wednesday: "11:00 AM - 8:00 PM",
    thursday: "11:00 AM - 8:00 PM",
    friday: "11:00 AM - 8:00 PM",
    saturday: "11:00 AM - 8:00 PM",
    sunday: "11:00 AM - 8:00 PM",
  },
  coordinates: {
    lat: 28.5397633,
    lng: 77.3680267,
  },
  googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=28.5397633,77.3680267",
  services: ["In-store Shopping", "In-store Pick-up", "Delivery"],
} as const;

export const NAV_LINKS = [
  { href: "/", labelKey: "nav.home" },
  { href: "/about", labelKey: "nav.about" },
  { href: "/products", labelKey: "nav.products" },
  { href: "/services", labelKey: "nav.services" },
  { href: "/gallery", labelKey: "nav.gallery" },
  { href: "/contact", labelKey: "nav.contact" },
] as const;
