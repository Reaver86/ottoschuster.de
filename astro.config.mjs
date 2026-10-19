import { defineConfig } from "astro/config";
import { defaultLocale, locales } from "./src/i18n/config";

const site = process.env.SITE_URL ?? "https://www.ottoschuster.de";
const base = process.env.BASE_PATH ?? "/";
const basePath = base.replace(/\/$/, "");
const withBasePath = (path) => `${basePath}${path}`;

export default defineConfig({
  site,
  base,
  output: "static",
  trailingSlash: "always",
  i18n: {
    locales: [...locales],
    defaultLocale,
    routing: {
      prefixDefaultLocale: true,
      // The root page returns a permanent redirect without creating a duplicate
      // prerender route in Astro's static build.
      redirectToDefaultLocale: false,
    },
  },
  redirects: {
    "/impressum": withBasePath("/de/impressum/"),
    "/datenschutz": withBasePath("/de/datenschutz/"),
    "/ro/preturi": withBasePath("/ro/preise/"),
    "/de/infos": withBasePath("/de/faq/"),
    "/ro/infos": withBasePath("/ro/faq/"),
    "/ro/informatii": withBasePath("/ro/faq/"),
    "/ro/contact": withBasePath("/ro/kontakt/"),
  },
  build: {
    format: "directory",
    inlineStylesheets: "always",
  },
  markdown: {
    syntaxHighlight: false,
  },
  security: {
    csp: {
      scriptDirective: {
        resources: ["'self'"],
      },
      directives: [
        "default-src 'self'",
        "connect-src 'self'",
        "base-uri 'self'",
        "font-src 'self' data:",
        "form-action 'self'",
        "frame-src 'none'",
        "object-src 'none'",
      ],
    },
  },
  vite: {
    build: {
      cssMinify: true,
    },
  },
});
