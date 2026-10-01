export const locales = ["de", "ro"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "de";

export const pagePaths = {
  home: "",
  prices: "preise",
  info: "faq",
  contact: "kontakt",
  imprint: "impressum",
  privacy: "datenschutz",
} as const;

export type PageId = keyof typeof pagePaths;
export type NavigationPageId = Exclude<PageId, "imprint" | "privacy">;

export const isLocale = (value: string | undefined): value is Locale =>
  locales.some((locale) => locale === value);

export const getCurrentLocale = (value: string | undefined): Locale =>
  isLocale(value) ? value : defaultLocale;
