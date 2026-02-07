// All images are from Unsplash — free for commercial use, no attribution required
// https://unsplash.com/license

const unsplash = (id: string, w = 800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const unsplashPlus = (id: string, w = 800) =>
  `https://plus.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMAGES = {
  // Hero section - cyclist at night
  hero: unsplashPlus("premium_photo-1746194532625-2c2f070eaadd", 1920),

  // Product categories
  mountain: unsplash("photo-1562861894-0918c74b6448", 600),
  road: unsplashPlus("premium_photo-1684274186180-026782ae24ab", 600),
  kids: unsplashPlus("premium_photo-1661715303160-9fecfaba31a9", 600),
  electric: unsplash("photo-1618322704848-b71bf61dd300", 600),
  hybrid: unsplashPlus("premium_photo-1681884298559-c94cc948bf02", 600),
  gear: unsplashPlus("premium_photo-1677564814058-34cb8d95e4d7", 600),

  // Services
  shop: unsplash("photo-1605271864611-58dd08d10547", 600),
  repair: unsplashPlus("premium_photo-1663040008232-1a7e22ba37a2", 600),

  // Gallery
  gallery: {
    mountainTrail: unsplash("photo-1562861894-0918c74b6448", 800),
    roadCycling: unsplashPlus("premium_photo-1684274186180-026782ae24ab", 800),
    kidsRiding: unsplashPlus("premium_photo-1661715303160-9fecfaba31a9", 800),
    workshop: unsplashPlus("premium_photo-1663040008232-1a7e22ba37a2", 800),
    shopInterior: unsplash("photo-1605271864611-58dd08d10547", 800),
    eBike: unsplash("photo-1618322704848-b71bf61dd300", 800),
    cityCycling: unsplashPlus("premium_photo-1681884298559-c94cc948bf02", 800),
    gearCloseup: unsplashPlus("premium_photo-1677564814058-34cb8d95e4d7", 800),
  },
} as const;
