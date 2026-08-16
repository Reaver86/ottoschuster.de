# Otto Schuster Website Redesign

**Status:** Approved design direction

**Date:** 2026-08-16

**Reference:** [linguation.com](https://www.linguation.com/)

**Existing site:** [ottoschuster.de](https://ottoschuster.de/)

## 1. Outcome

The new ottoschuster.de will be a modern, bilingual website for Otto Schuster's German–Romanian certified translation service. It will preserve the existing site's facts, prices, document examples, contact details, biography, and specialist guidance while replacing the framed legacy layout with a responsive, accessible, trust-first design.

Linguation provides the baseline for information hierarchy, generous spacing, strong calls to action, and progressive disclosure. The new site will not reproduce Linguation's brand, wave artwork, copy, reviews, checkout flow, or agency positioning. Its identity is built around Otto's personal expertise, German–Romanian specialization, direct contact, and professional history since 1993.

The first release is an informational and direct-contact site. WhatsApp is the primary conversion path. There is no upload form, instant price calculation, account system, online payment, or automated ordering.

## 2. Reference audit: Linguation

The audit covered Linguation's homepage at desktop and mobile sizes, its responsive navigation, lower-page sections, About page, Contact page, Prices page, and document-upload flow.

### 2.1 Visual characteristics

- A white, high-air layout with a centered desktop content width of roughly 1140px.
- A light, single-weight geometric sans-serif, CVAverta, used for both headings and body copy.
- Large, low-weight headings; the desktop homepage H1 is approximately 45px/46px.
- Dark charcoal hero text, blue-gray section headings, muted blue-gray body text, and high-saturation blue actions.
- Primary actions use a blue gradient, uppercase labels, wide letter spacing, sharp corners, and restrained shadows.
- A translucent blue wave runs behind the hero and recurs on secondary-page headers.
- Pale blue list rows, gray content bands, a dark blue feature band, and a dark slate footer create section rhythm without heavy decoration.
- Iconography is thin and functional. Trust cues are placed close to the action they support.

### 2.2 Page and component patterns

- The homepage opens with a two-column hero: promise and proof points on the left, primary action and review proof on the right.
- A three-step strip turns an otherwise complex service into a simple sequence.
- Dense information is organized as benefit rows, accordions, category tabs, language grids, testimonial cards, and repeated action points.
- Secondary pages reuse the same header shell and wave background, producing strong visual continuity.
- The upload flow uses a prominent three-step progress bar and a single, visually dominant task area.
- The contact page presents different contact intentions as large color blocks rather than a conventional form.

### 2.3 Responsive behavior

- At 390px, navigation collapses to a hamburger, the wordmark remains centered, and search stays visible.
- The hero becomes centered and single-column. Proof points remain above the primary action.
- Section order is preserved rather than radically rearranged.
- Desktop grids collapse to stacked layouts, while typography and spacing remain generous.
- Some Linguation mobile content remains dense and overly centered. The Otto design will use more left-aligned long-form content and shorter line lengths.

### 2.4 What the redesign adopts

- Trust before detail.
- One unmistakable primary action.
- Large whitespace and a calm reading rhythm.
- A concise process explanation.
- Progressive disclosure for FAQs and large information sets.
- Reusable section shells across the site.
- Mobile hierarchy that protects credentials and contact access.

### 2.5 What the redesign changes

- Personal expertise replaces agency scale as the central proof.
- Otto's portrait replaces generic review graphics in the hero.
- A ridgeline/translation-path motif replaces Linguation's wave.
- German–Romanian accents replace Linguation's generic international language grid.
- WhatsApp replaces “Sofort Angebot” as the primary action.
- The existing fixed prices remain visible and are not replaced by a calculator.
- Softer cards, accessible focus states, and restrained rounding replace sharp Bootstrap-style controls.

## 3. Approved design principles

1. **Personal authority:** Otto is visible, named, credentialed, and directly reachable.
2. **Immediate clarity:** Visitors understand the language pair, certified status, typical timing, and primary contact method in the first screen.
3. **Calm professionalism:** The interface is spacious and contemporary without feeling like a technology marketplace.
4. **Bilingual parity:** German and Romanian visitors receive equivalent content and navigation.
5. **Transparent pricing:** One source of price data feeds both languages; language changes never change an amount.
6. **Direct contact:** WhatsApp leads, followed by telephone and email. No form stands between a visitor and Otto.
7. **Progressive detail:** The homepage answers the essential questions; dedicated pages hold the complete catalogue and specialist guidance.
8. **Resilient access:** Contact information and core content work without JavaScript.

## 4. Information architecture

The site uses paired German and Romanian routes. `/` redirects to the German homepage at `/de/`.

| Purpose | German route | Romanian route | Navigation label DE | Navigation label RO |
| --- | --- | --- | --- | --- |
| Homepage | `/de/` | `/ro/` | Startseite | Acasă |
| Prices | `/de/preise` | `/ro/preturi` | Preise | Prețuri |
| Information | `/de/infos` | `/ro/informatii` | Infos | Informații |
| Contact | `/de/kontakt` | `/ro/contact` | Kontakt | Contact |

Impressum and Datenschutz remain authoritative German legal pages. Romanian routes link to them with a short Romanian explanation that the legal text is provided in German.

Every translatable page declares its German/Romanian counterpart. The flag switch moves to that counterpart rather than returning visitors to a homepage.

## 5. Primary user journeys

### 5.1 Request a translation through WhatsApp

1. The visitor sees “Beglaubigte Übersetzungen Deutsch ↔ Rumänisch” and Otto's credentials.
2. The visitor selects “Per WhatsApp anfragen.”
3. WhatsApp opens a blank conversation with `+49 176 62712091`.
4. The visitor sends document details or attachments directly in WhatsApp.

The website does not prefill a message. This matches the QR code on the current business card.

### 5.2 Look up a price

1. The visitor opens Prices or selects a homepage price example.
2. The visitor searches in German or Romanian, or selects a category.
3. A matching price entry shows the unchanged net amount, notes, and existing PDF examples.
4. Fixed-price entries offer WhatsApp as the next step; variable-price entries say that a personal quote is required.

### 5.3 Check official acceptance or Apostille requirements

1. The visitor opens Infos or an essential homepage FAQ.
2. The visitor reads the distinction between certified translation, Apostille, and legalisation.
3. The visitor can open the existing official sources and document examples.
4. A short disclaimer directs case-specific questions to Otto or the relevant authority.

### 5.4 Change language

1. The visitor selects the inactive flag in the segmented control.
2. The equivalent page opens in the other language.
3. Prices and factual data remain identical; only translated labels and prose change.

## 6. Homepage design

### 6.1 Desktop composition

```text
┌──────────────────────────────────────────────────────────────┐
│ Wordmark       Startseite Preise Infos Kontakt   [🇩🇪 | 🇷🇴] │
├──────────────────────────────────────────────────────────────┤
│ Beglaubigte Übersetzungen              Portrait + credential │
│ Deutsch ↔ Rumänisch                    card                  │
│ Short personal promise                                       │
│ ✓ Court-sworn  ✓ Since 1993  ✓ Accepted nationwide          │
│ [Per WhatsApp anfragen] [Anrufen] [E-Mail]                   │
├──────────────────────────────────────────────────────────────┤
│ Court-sworn · German ↔ Romanian · 2–4 working days · Direct │
├──────────────────────────────────────────────────────────────┤
│ Document categories                                          │
├──────────────────────────────────────────────────────────────┤
│ 1 Send documents   2 Receive quote   3 Receive translation   │
├──────────────────────────────────────────────────────────────┤
│ Representative prices                     [All prices]        │
├──────────────────────────────────────────────────────────────┤
│ Biography + Bucegi image                  Credentials/PDFs    │
├──────────────────────────────────────────────────────────────┤
│ Essential FAQ and Apostille guidance                         │
├──────────────────────────────────────────────────────────────┤
│ WhatsApp-first closing contact band                           │
├──────────────────────────────────────────────────────────────┤
│ Footer                                                       │
└──────────────────────────────────────────────────────────────┘
```

### 6.2 Mobile composition

```text
┌─────────────────────────────┐
│ Menu  Wordmark  [🇩🇪 | 🇷🇴] │
├─────────────────────────────┤
│ Service promise             │
│ Credentials                 │
│ Portrait                    │
│ [Per WhatsApp anfragen]     │
│ [Anrufen]       [E-Mail]    │
├─────────────────────────────┤
│ Trust facts                 │
│ Categories                  │
│ Three-step process          │
│ Price preview               │
│ Biography                   │
│ Credentials                 │
│ FAQ                         │
│ Contact                     │
│ Footer                      │
└─────────────────────────────┘
```

### 6.3 Section content

1. **Header:** text wordmark, primary navigation, flag toggle, and a compact mobile menu.
2. **Hero:** H1, short service promise, four proof points, three contact actions, portrait, and court-sworn credential.
3. **Trust strip:** publicly appointed/court-sworn, German ↔ Romanian, active since 1993, accepted throughout Germany, and typical processing time of 2–4 working days.
4. **Document categories:** civil-status documents, diplomas/certificates, identity and driving documents, legal decisions/contracts, powers of attorney/declarations, medical documents, Moldovan documents, and other work.
5. **Process:** send documents by WhatsApp/email/post or visit; receive a personal price and timing confirmation; receive the certified translation by post plus the usual digital copy.
6. **Price preview:** six common examples spanning the main categories and a link to the complete catalogue.
7. **Biography:** German mother tongue, Romanian education and engineering study context, move to Germany in 1990, appointment in 1993, and professional teaching background.
8. **Credentials:** oath/appointment PDFs, Landgericht confirmation, and official interpreter/translator directories.
9. **Essential FAQ:** originals, acceptance, processing time, Apostille, use in Romania/Germany, digital copies, and later duplicate copies.
10. **Closing contact band:** WhatsApp first, then mobile/landline and email.

## 7. Detail pages

### 7.1 Prices

The existing large table becomes a searchable catalogue rather than one horizontal table.

**Desktop:** search and wrapped category filters sit above compact price rows.

**Mobile:** filter controls followed by stacked price entries.

Search matches German names, Romanian names, common alternative terms, and notes. Categories can be combined with search.

Approved categories:

- Civil-status documents
- Identity and driving documents
- Education and qualifications
- Employment and professional records
- Courts, contracts, and declarations
- Apostilles and legalisations
- Republic of Moldova
- Other and individually quoted work

Each price entry supports this structure:

```text
id
category
name.de
name.ro
searchTerms.de[]
searchTerms.ro[]
price.type: fixed | range | quote | free
price.netAmount or price.netRange
notes.de
notes.ro
examples[]: label, PDF URL
lastVerifiedDate
```

Price values live outside the translated copy so German and Romanian output cannot diverge. The visible catalogue states:

- All listed amounts are net prices.
- 19% VAT is added.
- Shipping within Germany is currently €3.00 standard or €6.00 registered mail.
- Certification is included where stated by the existing catalogue.
- Payment is by advance bank transfer.
- Individually priced documents require a personal quote.

The catalogue begins with its verified effective date. Updating that single date and the shared data updates both language versions.

### 7.2 Contact

The page opens with a large WhatsApp panel, followed by telephone and email cards.

Authoritative contact data:

- Übersetzungsbüro Schuster
- Eva-Zeisel-Str. 4, 78713 Schramberg-Sulgen, Germany
- WhatsApp/mobile: `+49 176 62712091`
- Landline: `+49 7422 567820`
- Email: `otto.schuster@ottoschuster.de`
- Preferred calling time: after 14:00
- VAT ID: `DE305288111`

The page also contains location information, the current printable business card, guidance on what to send when requesting a quote, and a “Direkt verbinden” QR group.

### 7.3 Information

The information page uses a short anchored contents list followed by readable article sections:

- Certified translation versus Apostille
- Apostille versus legalisation
- Documents from Romania
- Documents from the Republic of Moldova
- Acceptance in Germany and Romania
- Whether originals are required
- Translation delivery and duplicate copies
- Official external resources and existing example PDFs

Important caveats remain visible and are not hidden inside accordions.

## 8. Visual system

### 8.1 Color tokens

| Token | Value | Use |
| --- | --- | --- |
| Ink navy | `#162F45` | Primary headings, footer, high-authority text |
| Service blue | `#2468C9` | Links, focus accents, selected controls |
| Deep blue | `#194E9C` | Hover/pressed blue states |
| Pale blue | `#EAF2FB` | Alternating section and row backgrounds |
| Warm paper | `#FCFBF8` | Main page background |
| White | `#FFFFFF` | Cards and raised controls |
| Body slate | `#526674` | Long-form body copy |
| Border | `#D8E2EA` | Dividers and card boundaries |
| Warm yellow | `#F2C94C` | Small German–Romanian identity accents |
| Accent red | `#C74747` | Rare identity details; never long text |
| WhatsApp dark | `#0B6B5B` | Primary WhatsApp action with white text |
| WhatsApp bright | `#25D366` | Icon/detail only, not white-text background |

The national colors appear through the actual flags and small identity rules. Large flag-gradient backgrounds and saturated tricolor panels are excluded.

### 8.2 Typography

- **Headings and wordmark:** Manrope, self-hosted, weights 500–700.
- **Body, prices, and UI:** Source Sans 3, self-hosted, weights 400–700.
- **Desktop H1:** 52px/1.06 with a maximum text block width of 720px.
- **Mobile H1:** 38px/1.1.
- **Desktop H2:** 36px/1.2; mobile H2: 29px/1.2.
- **H3:** 24px/1.3.
- **Body:** 18px/1.6 desktop, 17px/1.6 mobile.
- **Small/meta:** 15px/1.45.

Long text is left aligned. Center alignment is reserved for short headings, trust strips, and compact calls to action.

### 8.3 Spacing and geometry

- Content maximum width: 1180px.
- Desktop side gutters: 32px; tablet: 24px; mobile: 18px.
- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, and 96px.
- Standard section padding: 80–96px desktop, 56–72px tablet, 44–56px mobile.
- Card radius: 12px. Small controls: 8px. Flag toggle outer radius: 10px.
- Shadows are limited to the portrait, active flag, mobile navigation, and high-priority contact surfaces.
- Borders carry most component separation.

### 8.4 Imagery and motif

- Otto's portrait is the primary human image.
- The Bucegi photograph appears as a restrained full-width transition band at the start of the biography section. Its original caption is presented beneath the image instead of overlaid on it.
- A thin, original ridgeline/translation-path motif appears behind the hero and once more above the closing contact band. It uses three parallel lines that converge, inspired by translation between languages and by the mountain silhouette.
- Linguation's exact wave artwork is not reused or traced.
- Icons use a consistent 24px outline family, reduced to 20px only inside compact inline controls.

## 9. Component specifications

### 9.1 Header and wordmark

The wordmark reads:

```text
Übersetzungsbüro Schuster
Deutsch ↔ Rumänisch
```

The desktop header is 88px high and becomes 72px after scrolling. It remains sticky. The mobile header remains compact and contains the menu trigger, wordmark, and flag toggle. WhatsApp is the first item in the opened mobile navigation.

### 9.2 Flag language toggle

The existing `images/deutschland_flagge.jpg` and `images/rumänien_flagge.jpg` assets form a two-segment language control.

- German flag on the left, Romanian flag on the right.
- Each segment is a normal language link and works without JavaScript.
- Images use fixed visual dimensions and `object-fit: cover` so the matching 106×85 source images render consistently.
- The active segment has full color, white raised surface, navy outline, and subtle shadow.
- The inactive segment is slightly desaturated and has no shadow.
- Hover and keyboard-focus states are distinct.
- Active state is conveyed by outline, position, and `aria-current="page"`, not color alone.
- Accessible names are “Deutsch” and “Română”; visual tooltips expose the same labels.

### 9.3 Contact actions

Priority is fixed across the site:

1. **Per WhatsApp anfragen:** filled WhatsApp-dark button.
2. **Anrufen:** outlined navy/blue button.
3. **E-Mail schreiben:** outlined service-blue button.

All touch targets are at least 44×44px. The WhatsApp action opens a blank chat and does not include a `text` parameter.

### 9.4 Trust strip

A compact, wrap-safe list presents five verified facts: publicly appointed/court-sworn, German ↔ Romanian, active since 1993, accepted throughout Germany, and typical processing in 2–4 working days. It uses icons plus text, never icons alone. On mobile it becomes a vertical list.

### 9.5 Document category cards

Category cards use an outline icon, German/Romanian title on the corresponding language page, one-line explanation, and optional deep link to Prices. The cards are informational rather than selectable form controls.

### 9.6 Three-step process

The process shows numbered circles and connecting rules on desktop. On mobile it becomes a vertical sequence. Wording reflects direct personal service and never suggests automation.

### 9.7 Price preview and catalogue entries

Homepage price examples show document name, net price or range, and a link to the full catalogue. Catalogue entries disclose notes and example PDFs directly on desktop. On mobile, name and price remain visible while secondary notes and examples use native `<details>` disclosure elements.

### 9.8 Biography and credentials

The biography begins after the full-width Bucegi transition band and uses a two-column text-and-timeline composition on desktop. Otto's portrait remains in the hero rather than being repeated here. Credentials are separate linked cards with document type, year, issuing institution, and PDF affordance. External directory links are visually distinguished from local PDFs.

### 9.9 FAQ accordions

Each question is a native button with a visible chevron, keyboard support, `aria-expanded`, and a persistent focus ring. Multiple panels may remain open so visitors can compare related answers. Critical warnings are ordinary visible content outside accordions.

### 9.10 QR connection group

The current high-resolution business card contains five QR codes. The homepage QR is deliberately excluded. Four QR cards are included:

| Label | Direct destination |
| --- | --- |
| WhatsApp | `https://wa.me/4917662712091` |
| Facebook | `https://www.facebook.com/uebersetzer.otto.schuster` |
| Instagram | `https://www.instagram.com/ottoschuster.de` |
| Google review | `https://search.google.com/local/writereview?placeid=ChIJ9wTZ8Qy4kEcRnmhw8CX44C8` |

The implementation regenerates the QR images from these direct destinations instead of retaining the `vqr.vc` redirect dependency. Each QR image has a text label and normal clickable link. On mobile, direct buttons precede the QR grid.

## 10. Responsive behavior

### 10.1 Wide desktop: 1200px and above

- Full 1180px container.
- Two-column hero with copy at 58% and portrait at 42%.
- Document categories use four columns; credentials use three columns.
- Price search and category filters remain above the catalogue rows.

### 10.2 Desktop/tablet landscape: 900–1199px

- Two-column hero with reduced gap.
- Three-column cards reduce to two where text wraps poorly.
- Header navigation remains visible while spacing tightens.

### 10.3 Tablet: 640–899px

- Hero becomes one column; copy, credentials, portrait, then actions remain near the top.
- Header uses the mobile menu.
- Card grids become two columns.
- Price categories become wrapped filter controls with no horizontal control scrolling.

### 10.4 Mobile: below 640px

- Single-column layout with 18px gutters.
- H1 reduces to 38px and long Romanian headings may reduce to 34px without changing hierarchy.
- WhatsApp is a full-width primary action; call and email share the next row when labels fit, otherwise stack.
- Cards, process steps, catalogue entries, QR cards, and footer columns stack.
- Direct QR destination links appear before QR images.
- No sticky bottom bar obscures content.

Decorative imagery disappears before credentials, prices, or contact access. The design must not introduce horizontal page scrolling at 360px.

## 11. Bilingual content system

- German and Romanian routes use the same component structure and content identifiers.
- Navigation labels are translated on Romanian pages because doing so adds negligible implementation complexity and completes the language experience.
- The language switch preserves page context through an explicit route-pair map.
- `<html lang="de">` and `<html lang="ro">`, canonical URLs, and `hreflang` alternates are required.
- Prices, phone numbers, addresses, dates, PDF references, and other factual data are shared, not duplicated inside translation files.
- Build-time content validation fails if a required German or Romanian title, description, or route pair is missing.
- Romanian copy may wrap more or less than German; components must accommodate content rather than clip it.

## 12. Interaction and failure behavior

### 12.1 No-JavaScript baseline

Navigation, language links, WhatsApp, telephone, email, price content, contact details, PDFs, and information articles work without JavaScript.

### 12.2 Enhanced behavior

JavaScript enhances:

- Sticky-header size transition.
- Mobile-menu open/close behavior.
- Price search and category filtering.
- FAQ accordion animation.
- Minor hover and focus transitions.

### 12.3 States and errors

- Price search with no matches displays a bilingual empty-state message and a clear-filter action, followed by WhatsApp contact.
- Invalid language routes resolve to the corresponding valid language homepage rather than a blank page.
- A catalogue entry with no example PDF omits the example action; it does not render a disabled or broken link.
- Official external sources, social profiles, Google review, and PDFs open in a new tab with an external-link indicator and safe `rel` attributes. Internal site links stay in the current tab.
- If JavaScript fails, all price entries remain visible and FAQ content remains reachable.

## 13. Accessibility and performance requirements

- Target WCAG 2.2 AA.
- All interactive controls are keyboard reachable and have visible focus states.
- Touch targets are at least 44×44px.
- Active flag state is not communicated by color alone.
- Portrait, mountain, flag, QR, and document imagery have useful alternative text or are marked decorative as appropriate.
- Heading levels follow document order and do not skip for visual reasons.
- Accordion and mobile-menu state is exposed to assistive technology.
- Motion respects `prefers-reduced-motion`.
- Body text and actions meet AA color contrast.
- The 7216×5150 business card is never shipped directly into a small viewport. The implementation creates optimized portrait, card-preview, and responsive image derivatives.
- Below-the-fold imagery is lazy loaded; hero imagery has fixed dimensions to prevent layout shift.
- Performance targets on representative mobile hardware are LCP ≤2.5s, CLS ≤0.1, and INP ≤200ms.

## 14. Asset disposition

| Asset | Decision |
| --- | --- |
| `images/deutschland_flagge.jpg` | Keep and use in the language toggle. |
| `images/rumänien_flagge.jpg` | Keep and use in the language toggle. |
| `images/muntii-bucegi original.jpg` | Keep, optimize, and use as restrained atmospheric imagery. |
| `images/visitenkarte.jpeg` | Outdated; do not use in the new site. |
| `https://ottoschuster.de/grafiken/visitenkarte.jpg` | Authoritative current card. Import an optimized local copy during implementation. |
| Portrait inside current card | Use an optimized crop for the initial hero/profile treatment. |
| Existing credential and example PDFs | Preserve after link and content review. |
| QR images | Regenerate locally from the four approved direct destinations. |

The production site must not depend on the old site at runtime for the current business card, portrait, PDFs, or QR assets; approved source material is imported into the new project.

## 15. Content and visual acceptance criteria

### 15.1 Content

- Existing facts, prices, biography, contact data, specialist guidance, credential links, and example documents are preserved unless superseded by the current business card.
- No instant quote, upload, checkout, or automatic-delivery promise appears.
- Typical processing time is described as 2–4 working days, not guaranteed.
- German and Romanian pages contain equivalent information.
- German and Romanian catalogue amounts are generated from the same records and are exactly equal.

### 15.2 Contact

- WhatsApp is the most visually prominent contact method in the hero, navigation, Prices, Contact, and closing contact band.
- WhatsApp opens a blank chat to `+49 176 62712091`.
- Telephone and email remain visible and usable without JavaScript.
- WhatsApp, Facebook, Instagram, and Google-review QR codes use direct destinations.
- No homepage QR code appears.

### 15.3 Visual and responsive

- Visitors understand the service, language pair, official status, experience, typical timing, and next action within the first screen.
- The site is recognizably inspired by Linguation's clarity but does not reuse its branding, artwork, copy, or reviews.
- Otto's portrait is prominent and the design feels personal rather than agency-like.
- The flag toggle always shows both flags and clearly identifies the active language.
- Layouts are reviewed at 360px, 768px, and 1440px with no horizontal page scrolling.
- The portrait and essential hero copy remain visible near the top at all target widths.

### 15.4 Interaction and quality

- All navigation, contact links, flag links, filters, accordions, PDF links, and QR destinations are verified.
- Complete keyboard navigation and screen-reader state are verified.
- JavaScript-disabled browsing preserves core content and contact paths.
- Image optimization and fixed dimensions prevent avoidable layout shift.
- Automated content validation prevents missing bilingual fields, unmatched route pairs, and divergent price values.

## 16. Explicit non-goals for the first release

- Document upload form
- Automated quote or price calculation
- Online ordering or checkout
- Payment processing
- Customer accounts or order tracking
- CMS or editor dashboard
- Live social feeds
- Imported Linguation testimonials, ratings, badges, or claims
- New services or changed prices not present in Otto's approved source content

## 17. Handoff to implementation planning

The next session should select the implementation technology, inventory and import the live PDFs/content, convert this design into component and content tasks, and define the build/test sequence. That implementation plan must treat this document as the approved product and visual source of truth.
