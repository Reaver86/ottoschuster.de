import { defineConfig } from "astro/config";

const site = process.env.SITE_URL ?? "https://www.ottoschuster.de";
const base = process.env.BASE_PATH ?? "/";

export default defineConfig({
  site,
  base,
  output: "static",
  trailingSlash: "always",
  build: {
    format: "directory",
    inlineStylesheets: "always",
  },
  markdown: {
    syntaxHighlight: false,
  },
  security: {
    csp: {
      directives: [
        "default-src 'self'",
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
