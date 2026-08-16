export type Locale = "de" | "ro";
export type PageId = "home" | "prices" | "info" | "contact";

export const locales: Locale[] = ["de", "ro"];

export const routes: Record<PageId, Record<Locale, string>> = {
  home: { de: "/de/", ro: "/ro/" },
  prices: { de: "/de/preise/", ro: "/ro/preturi/" },
  info: { de: "/de/infos/", ro: "/ro/informatii/" },
  contact: { de: "/de/kontakt/", ro: "/ro/contact/" },
};

export const site = {
  name: "Übersetzungsbüro Schuster",
  owner: "Otto Schuster",
  address: {
    street: "Eva-Zeisel-Str. 4",
    city: "78713 Schramberg-Sulgen",
    country: "Deutschland",
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

export const getAlternateLocale = (locale: Locale): Locale =>
  locale === "de" ? "ro" : "de";

export const getAlternateRoute = (page: PageId, locale: Locale): string =>
  routes[page][getAlternateLocale(locale)];

export const assetPath = {
  portrait480: "/images/otto-portrait-480.jpg",
  portrait900: "/images/otto-portrait-900.jpg",
  mountain720: "/images/bucegi-720.jpg",
  mountain1200: "/images/bucegi-1200.jpg",
  card720: "/images/business-card-720.jpg",
  card1440: "/images/business-card-1440.jpg",
  flagDe: "/images/flag-de.jpg",
  flagRo: "/images/flag-ro.jpg",
} as const;
