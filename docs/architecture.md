# Architecture and conventions

This is a small bilingual brochure website for Übersetzungsbüro Schuster.
Keep these notes focused on decisions that affect future edits; a separate
component-library handbook or API design system is unnecessary for this project.

## Static site

Astro generates HTML and assets into `dist/`. Production serves those files from
Netcup; page delivery needs no Node process. Optional first-party analytics uses a separate PHP collector and MySQL database; see analytics.md. Node 24 and npm
are build tools. Use `npm ci` with the committed lockfile to install dependencies.
Keep ordinary content and navigation usable without client-side JavaScript.

`astro.config.mjs` defines the production origin, directory-style output,
trailing slashes, legacy redirects, and Content Security Policy. `SITE_URL` and
`BASE_PATH` allow the same source to build for production or the GitHub Pages
preview. Do not hardcode preview paths into components.

`src/data/redirects.mjs` maps the former flat `.html`/`.htm` pages and earlier
redesign routes directly to their current equivalents. It drives both Astro's
static redirect pages (for the Pages preview) and the generated `dist/.htaccess`
with Apache HTTP 301 rules (for Netcup). Static redirects alone return HTML with
a meta refresh, not an HTTP 301. Keep the map when changing routes, preserve the
original language, and avoid redirecting unrelated missing pages to the homepage.
Keep legacy mappings indefinitely so external links and bookmarks keep working.
The root `/` selects Romanian when the first browser language in `Accept-Language`
is `ro` (including `ro-RO`/`ro-MD`), and German otherwise. Apache returns HTTP 302
with `Vary: Accept-Language` and `Cache-Control: no-store`; it never overrides an
explicit `/de/` or `/ro/` URL. No preference cookie or location lookup is used.
`src/pages/index.astro` provides the same first-language choice using
`navigator.languages` on static hosts such as the Pages preview, preserving query
parameters and fragments. Without JavaScript, that fallback opens German and
also provides explicit links to both languages. Previously cached permanent
redirects may still send returning visitors to German until their cache expires.

## Languages and content

- `src/pages/de/` and `src/pages/ro/` are thin route wrappers around shared
  `src/components/pages/` components. Both languages use the same layout.
- `src/i18n/config.ts` defines locales and page IDs. `src/i18n/routes.ts` builds
  localized links using Astro's helpers. Romanian routes intentionally also use
  slugs such as `preise`, `faq`, and `kontakt`; changing them requires redirects.
- `src/data/content.ts` holds translated copy; `prices.ts` holds the catalogue;
  `legal.ts` holds legal copy; `site.ts` holds shared business details and asset
  paths. Edit the relevant data instead of duplicating values in page markup.
- Update both languages for shared content changes. Use `getLocalizedPath` /
  `getLocalizedUrl` for page links and `withBasePath` for local asset paths.

## Components, styles, and scripts

`BaseLayout.astro` supplies shared document metadata, header/footer, and assets.
Reuse existing components for contact actions, headings, icons, and language
switching. Follow the existing TypeScript strict configuration, two-space
indentation, double quotes, semicolons, and typed locale/page identifiers.

`src/styles/global.css` contains shared styles and CSS custom properties for
colors, spacing-related dimensions, radii, and typography. Extend these patterns
before introducing another styling system. Keep semantic HTML, keyboard focus,
responsive images, and native interactions such as FAQ disclosure controls.
Use small browser scripts only where interaction requires them; the shared
header scroll behavior lives in `src/scripts/site.ts`.

`public/` contains assets copied directly into the build: images, PDFs, QR codes,
and favicon. Keep document examples and QR assets local. Generation helpers live
in `scripts/`; regenerate assets deliberately rather than on every build.

## Delivery and checks

`npm test` runs Astro diagnostics, content validation, the static build, and
local-link checks. See [verification.md](verification.md) for browser acceptance.
See [analytics.md](analytics.md) before changing tracking or its privacy text.

`.github/workflows/deploy.yml` publishes a **GitHub Pages preview** on pushes to
`main`; it does not update Netcup. Production is an explicitly requested operation
described in [deploy.md](deploy.md). Upload only generated site files, never the
repository, credentials, or development artifacts.
`npm run deploy` builds production and uploads changed files using a local hash
manifest; routine deployments only check homepage reachability.
