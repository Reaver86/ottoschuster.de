import assert from "node:assert/strict";
import { legacyRedirects } from "../src/data/redirects.mjs";

// Run against a local Apache serving dist/; static preview servers ignore .htaccess.
const root = new URL(process.argv[2] ?? "http://127.0.0.1:4381/");
const request = (path, language = "") => fetch(new URL(path.replace(/^\//, ""), root), {
  headers: language ? { "Accept-Language": language } : {},
  redirect: "manual",
});

const languageCases = [
  ["ro-RO,ro;q=0.9,en;q=0.8", "ro"],
  ["ro-MD,ro;q=0.9", "ro"],
  ["ro", "ro"],
  ["RO-ro", "ro"],
  ["de-DE,de;q=0.9,ro;q=0.8", "de"],
  ["en-US,en;q=0.9", "de"],
  ["", "de"],
];

for (const [language, locale] of languageCases) {
  const response = await request("?utm_source=redirect-test", language);
  assert.equal(response.status, 302, language || "missing language");
  assert.equal(response.headers.get("location"), new URL(`${locale}/?utm_source=redirect-test`, root).href);
  assert.match(response.headers.get("vary") ?? "", /Accept-Language/i);
  assert.equal(response.headers.get("cache-control"), "no-store");
}

for (const [source, target] of Object.entries(legacyRedirects)) {
  const response = await request(`${source}?utm_source=redirect-test`, "ro-RO");
  assert.equal(response.status, 301, source);
  const destination = new URL(response.headers.get("location"));
  assert.equal(destination.href, new URL(`${target.slice(1)}?utm_source=redirect-test`, root).href);
  assert.equal((await fetch(destination, { redirect: "manual" })).status, 200, target);
}

for (const locale of ["de", "ro"]) {
  const oppositeLanguage = locale === "de" ? "ro-RO" : "de-DE";
  for (const page of ["", "kontakt/"]) {
    const response = await request(`${locale}/${page}`, oppositeLanguage);
    assert.equal(response.status, 200, `${locale}/${page}`);
    assert.equal(response.headers.get("location"), null);
    assert.equal(response.headers.get("cache-control"), null);
  }
}
assert.equal((await request("unknown-page.html", "ro-RO")).status, 404);
console.log(`HTTP checks passed: ${languageCases.length} root-language cases, ${Object.keys(legacyRedirects).length} legacy redirects, explicit language URLs, and unknown-URL 404.`);
