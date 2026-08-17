import { getAbsoluteLocaleUrl, getRelativeLocaleUrl } from "astro:i18n";
import { pagePaths, type Locale, type PageId } from "./config";

export const getLocalizedPath = (page: PageId, locale: Locale): string =>
  getRelativeLocaleUrl(locale, pagePaths[page]);

export const getLocalizedUrl = (page: PageId, locale: Locale): string =>
  getAbsoluteLocaleUrl(locale, pagePaths[page]);
