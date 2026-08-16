import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://www.ottoschuster.de",
  output: "static",
  trailingSlash: "always",
  build: {
    format: "directory",
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
