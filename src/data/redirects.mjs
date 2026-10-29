// Original flat pages plus routes used by earlier versions of the redesign.
// Keep each old address pointed directly at its closest current equivalent.
const flatPages = {
  index: "/de/",
  kontakt: "/de/kontakt/",
  preise: "/de/preise/",
  infos: "/de/faq/",
  faq: "/de/faq/",
  impressum: "/de/impressum/",
  datenschutz: "/de/datenschutz/",
};

export const legacyRedirects = {
  ...Object.fromEntries(Object.entries(flatPages).flatMap(([page, target]) => [
    ...[".html", ".htm"].map((extension) => [`/${page}${extension}`, target]),
    ...(page === "index" ? [] : [[`/${page}`, target]]),
  ])),
  "/ro/preturi": "/ro/preise/",
  "/de/infos": "/de/faq/",
  "/ro/infos": "/ro/faq/",
  "/ro/informatii": "/ro/faq/",
  "/ro/contact": "/ro/kontakt/",
};

export const getLegacyRedirects = (basePath = "") => Object.fromEntries(
  Object.entries(legacyRedirects).map(([source, target]) => [source, `${basePath}${target}`]),
);

export const renderApacheRedirects = (basePath = "") => [
  "# Generated from src/data/redirects.mjs.",
  "# Only the root chooses a language. Explicit language URLs remain stable.",
  `<If "%{REQUEST_URI} == '${basePath}/'">`,
  '  Header always merge Vary "Accept-Language"',
  '  Header always set Cache-Control "no-store"',
  '  <If "req(\'Accept-Language\') =~ m#(?i)^ro(?:[-,;]|$)#">',
  `    RedirectMatch 302 "^${basePath}/$" "${basePath}/ro/"`,
  "  </If>",
  "  <Else>",
  `    RedirectMatch 302 "^${basePath}/$" "${basePath}/de/"`,
  "  </Else>",
  "</If>",
  "# Legacy addresses keep permanent redirects to their established language.",
  ...Object.entries(getLegacyRedirects(basePath)).map(([source, target]) => {
    const pattern = `${basePath}${source}`.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return `RedirectMatch 301 "^${pattern}/?$" "${target}"`;
  }),
  "",
].join("\n");
