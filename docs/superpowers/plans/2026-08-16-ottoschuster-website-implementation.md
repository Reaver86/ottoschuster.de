# Otto Schuster Website Implementation Plan

**Date:** 2026-08-16  
**Status:** Ready for implementation  
**Source of truth:** `docs/superpowers/specs/2026-08-16-ottoschuster-website-design.md`

## 1. Goal

Build and verify the approved bilingual redesign as a production-ready static website. The release must make Otto's credentials, German–Romanian specialization, typical turnaround, transparent prices, and direct contact options immediately clear. WhatsApp remains the primary conversion path, and all core content and contact links must work without JavaScript.

## 2. Technical decision

Use Astro in static-output mode with TypeScript.

Why this option:

- Astro emits complete HTML for every route and therefore supports the no-JavaScript baseline.
- Shared Astro components keep the German and Romanian routes structurally identical without shipping a client framework.
- Typed shared data prevents contact details, route pairs, and price amounts from drifting between languages.
- Small, page-specific scripts can enhance the menu, catalogue filters, and accordions without making rendering depend on JavaScript.
- The output is ordinary static files that can be deployed to the existing hosting setup.

Alternatives considered:

- Handwritten multi-page HTML would minimize dependencies but duplicate navigation, metadata, cards, and bilingual route logic.
- A client-rendered React application would add runtime JavaScript and failure modes without providing a benefit for this informational site.
- A server-rendered application or CMS would add hosting and maintenance complexity outside the first-release scope.

## 3. Target structure

```text
astro.config.mjs
package.json
scripts/
  validate-content.mjs
src/
  components/
    Header.astro
    Footer.astro
    LanguageToggle.astro
    ContactActions.astro
    MountainPath.astro
    PriceCatalogue.astro
    ContactBand.astro
  data/
    content.ts
    prices.ts
    site.ts
  layouts/
    BaseLayout.astro
  pages/
    index.astro
    404.astro
    de/
      index.astro
      preise.astro
      infos.astro
      kontakt.astro
    ro/
      index.astro
      preturi.astro
      informatii.astro
      contact.astro
    impressum.astro
    datenschutz.astro
  styles/
    global.css
  scripts/
    site.ts
public/
  documents/
    credentials/
    examples/
  fonts/
  images/
  qr/
tests/
  content.test.mjs
  site.spec.ts
```

Components may be combined when their rendered markup is only used once, but the site data, price catalogue, route map, layout shell, header, footer, contact actions, and language toggle remain independent units.

## 4. Data and content model

### Shared factual data

Store the business name, address, phone numbers, email, VAT ID, WhatsApp URL, social/review destinations, typical timing, shipping prices, tax rate, price verification date, and external-directory links in `src/data/site.ts`. Components consume these values rather than copying literals.

### Translated content

Store German and Romanian navigation, headings, descriptions, process steps, biography, FAQs, information articles, contact guidance, accessibility labels, and metadata in `src/data/content.ts`. A `Locale = "de" | "ro"` type and a complete locale record make missing translations a TypeScript error.

### Prices

Represent each live catalogue row once in `src/data/prices.ts`. Every entry includes:

- a stable ID and category;
- German and Romanian names plus optional search terms;
- one shared fixed, range, quote, or free price value;
- translated notes;
- zero or more local example-PDF references.

The visible effective date is `2025-08-25`, matching the current live catalogue. A build-time validator rejects missing translations, invalid categories, duplicate IDs, missing local PDFs, bad route pairs, and incomplete locale records.

## 5. Asset work

1. Copy the supplied German and Romanian flag images and Bucegi photograph into optimized public assets.
2. Import the current 7216×5150 live business card as a local, optimized preview.
3. Create a clean portrait crop from the current business card for the hero, preserving the source likeness and avoiding generative changes.
4. Generate responsive JPEG/WebP derivatives for the portrait, card, and mountain image with fixed dimensions.
5. Import the existing oath/appointment, court confirmation, order/example, and price-catalogue PDFs used by the redesigned pages. Production markup must point to local files.
6. Generate four local QR PNG/SVG assets from the approved direct WhatsApp, Facebook, Instagram, and Google-review destinations. Do not include the old homepage QR or any `vqr.vc` redirect.
7. Self-host Manrope and Source Sans 3 font files, or use a tested system-font fallback if the licensed static files cannot be obtained reliably.

## 6. Page implementation sequence

### Phase A: foundation

1. Replace the placeholder TypeScript package with Astro static build, preview, content-validation, and test scripts.
2. Configure the canonical site URL, trailing-slash output, `/de/` default redirect, and German/Romanian locale metadata.
3. Implement the design tokens, typography, container, section rhythm, buttons, cards, focus states, reduced-motion handling, and responsive breakpoints.
4. Build `BaseLayout`, the sticky header, route-preserving language toggle, mobile navigation, footer, and reusable contact actions.

### Phase B: core pages

1. Build the German homepage from the approved section order: hero, trust strip, categories, process, price preview, biography/credentials, essential FAQs, and closing contact band.
2. Render the Romanian homepage from the same components and equivalent translated content.
3. Build the searchable/filterable price catalogue. All entries are visible without JavaScript; enhancement activates search, category filtering, match count, empty state, and clear action.
4. Build the information pages with visible warnings, anchored article navigation, official sources, and example documents.
5. Build the contact pages with WhatsApp first, phone/email/address cards, request guidance, business-card preview, direct links, and four QR cards.
6. Add German Impressum and Datenschutz pages and link them from both language footers with a Romanian explanation.
7. Add a useful 404 page and a safe route back to `/de/` and `/ro/`.

### Phase C: enhancement and polish

1. Add sticky-header compaction and mobile-menu state with correct ARIA attributes, outside-click/escape handling, and scroll locking.
2. Use native `<details>` for FAQs and mobile price notes so content remains reachable without JavaScript.
3. Add the original three-line ridgeline/translation-path motif as lightweight inline SVG/CSS decoration.
4. Add fixed image dimensions, `loading="lazy"` below the fold, and responsive `srcset` values.
5. Add canonical links, `hreflang` alternates, Open Graph metadata, descriptive titles, and language-specific descriptions.

## 7. Testing and acceptance checks

### Automated

- `npm run validate`: validates bilingual content, shared route pairs, catalogue IDs/categories, price data, and local asset targets.
- `npm run check`: runs Astro/TypeScript checks.
- `npm run build`: produces all expected static routes.
- Browser tests verify navigation, route-preserving language changes, WhatsApp/phone/email URLs, mobile menu behavior, price search/filter/empty state, FAQ disclosure, and the absence of horizontal overflow.
- Link checks verify internal HTML targets and local PDFs.

### Browser review

Review `/de/`, `/ro/`, both catalogues, both information pages, both contact pages, and legal pages at 360×800, 768×1024, and 1440×1000.

Confirm:

- hero copy, portrait, credentials, timing, and primary action remain near the top;
- both flags are always visible and the active language is clear without relying on color;
- no page has horizontal overflow;
- all touch targets are at least 44×44px;
- focus rings, heading order, labels, and menu/accordion state are usable by keyboard;
- JavaScript-disabled pages retain navigation, all prices, FAQs, PDFs, and contact paths;
- there are no broken internal links, missing images, or requests to old-site assets at runtime;
- the built pages meet the design spec's contact, content, visual, responsive, and performance acceptance criteria.

## 8. Delivery boundary

The implementation ends with a verified static build in `dist/` and documented local commands. Deployment, analytics migration, a CMS, uploads, automated quotes, checkout, payments, accounts, and price changes remain out of scope.
