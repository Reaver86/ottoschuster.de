const basePath = (process.env.BASE_PATH ?? "/").replace(/\/$/, "");

export const withBasePath = (path: string): string =>
  path.startsWith("/") ? `${basePath}${path}` : path;

export const site = {
  name: "Übersetzungsbüro Schuster",
  owner: "Otto Schuster",
  address: {
    street: "Eva-Zeisel-Str. 4",
    city: "78713 Schramberg-Sulgen",
  },
  phone: {
    mobileDisplay: "+49 176 62712091",
    mobileHref: "tel:+4917662712091",
    landlineDisplay: "+49 7422 567820",
    landlineHref: "tel:+497422567820",
  },
  email: "otto.schuster@ottoschuster.de",
  whatsapp: "https://wa.me/4917662712091",
  vatId: "DE305288111",
  callAfter: "14:00",
  priceVerified: "25.08.2025",
  taxRate: 19,
  shipping: {
    standard: 3,
    registered: 6,
  },
  social: {
    facebook: "https://www.facebook.com/uebersetzer.otto.schuster",
    instagram: "https://www.instagram.com/ottoschuster.de",
    googleReview:
      "https://search.google.com/local/writereview?placeid=ChIJ9wTZ8Qy4kEcRnmhw8CX44C8",
  },
  directories: {
    justiz: "https://www.justiz-dolmetscher.de/Recherche/",
    gerichte: "https://www.gerichts-dolmetscher.de/",
  },
} as const;

export const assetPath = {
  favicon: withBasePath("/favicon.svg"),
  portrait480: withBasePath("/images/otto-schuster-portrait-480.webp"),
  portrait900: withBasePath("/images/otto-schuster-portrait-900.webp"),
  mountain720: withBasePath("/images/bucegi-mountains-720.webp"),
  mountain1200: withBasePath("/images/bucegi-mountains-1200.webp"),
  priceHero: withBasePath("/images/one-leu-banknote.webp"),
  infoContactHero: withBasePath("/images/romania-map.webp"),
  card720: withBasePath("/images/business-card-720.jpg"),
  card1440: withBasePath("/images/business-card-1440.jpg"),
  flagDe: withBasePath("/images/germany-flag.webp"),
  flagRo: withBasePath("/images/romania-flag.webp"),
} as const;
