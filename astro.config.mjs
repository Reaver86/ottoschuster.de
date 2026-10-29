import { defineConfig } from "astro/config";
import { writeFile } from "node:fs/promises";
import { defaultLocale, locales } from "./src/i18n/config";
import { getLegacyRedirects, renderApacheRedirects } from "./src/data/redirects.mjs";

const site = process.env.SITE_URL ?? "https://www.ottoschuster.de";
const base = process.env.BASE_PATH ?? "/";
const basePath = base.replace(/\/$/, "");

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
  // /index.html already exists as the root page's static redirect.
  redirects: Object.fromEntries(Object.entries(getLegacyRedirects(basePath))
    .filter(([source]) => source !== "/index.html")),
  integrations: [{
    name: "legacy-http-redirects",
    hooks: {
      "astro:build:done": async ({ dir }) => {
        await writeFile(new URL(".htaccess", dir), renderApacheRedirects(basePath));
      },
    },
  }],
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
