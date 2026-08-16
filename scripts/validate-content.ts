import { existsSync } from "node:fs";
import { content } from "../src/data/content";
import { priceCategories, priceEntries } from "../src/data/prices";
import { assetPath, locales, routes } from "../src/data/site";

const failures: string[] = [];
const fail = (message: string) => failures.push(message);

const compareShape = (left: unknown, right: unknown, path = "content") => {
  if (Array.isArray(left) || Array.isArray(right)) {
    if (!Array.isArray(left) || !Array.isArray(right)) {
      fail(`${path}: locale types differ`);
      return;
    }
    if (left.length !== right.length) fail(`${path}: locale array lengths differ (${left.length}/${right.length})`);
    left.forEach((item, index) => compareShape(item, right[index], `${path}[${index}]`));
    return;
  }

  if (left && right && typeof left === "object" && typeof right === "object") {
    const leftKeys = Object.keys(left).sort();
    const rightKeys = Object.keys(right).sort();
    if (leftKeys.join("|") !== rightKeys.join("|")) {
      fail(`${path}: locale object keys differ (${leftKeys.join(", ")} / ${rightKeys.join(", ")})`);
      return;
    }
    leftKeys.forEach((key) => {
      compareShape(
        (left as Record<string, unknown>)[key],
        (right as Record<string, unknown>)[key],
        `${path}.${key}`,
      );
    });
    return;
  }

  if (typeof left !== typeof right) fail(`${path}: locale value types differ`);
  if (typeof left === "string" && (!left.trim() || !(right as string).trim())) fail(`${path}: empty translation`);
};

compareShape(content.de, content.ro);

const routeValues = new Set<string>();
for (const [page, pair] of Object.entries(routes)) {
  for (const locale of locales) {
    const route = pair[locale];
    if (!route) fail(`Missing ${locale} route for ${page}`);
    if (routeValues.has(route)) fail(`Duplicate route: ${route}`);
    routeValues.add(route);
  }
}

const ids = new Set<string>();
for (const entry of priceEntries) {
  if (ids.has(entry.id)) fail(`Duplicate price ID: ${entry.id}`);
  ids.add(entry.id);
  if (!priceCategories.includes(entry.category)) fail(`Invalid category on ${entry.id}: ${entry.category}`);
  if (!entry.name.de.trim() || !entry.name.ro.trim()) fail(`Missing localized name on ${entry.id}`);
  if (entry.price.type === "fixed" && entry.price.amount < 0) fail(`Negative price on ${entry.id}`);
  if (entry.price.type === "range" && entry.price.min > entry.price.max) fail(`Invalid price range on ${entry.id}`);
  if (entry.note && (!entry.note.de.trim() || !entry.note.ro.trim())) fail(`Incomplete note on ${entry.id}`);
  for (const example of entry.examples ?? []) {
    const path = `public${example.file}`;
    if (!existsSync(path)) fail(`Missing example PDF for ${entry.id}: ${path}`);
    if (!example.label.de.trim() || !example.label.ro.trim()) fail(`Incomplete example label on ${entry.id}`);
  }
}

for (const [name, path] of Object.entries(assetPath)) {
  if (!existsSync(`public${path}`)) fail(`Missing shared asset ${name}: public${path}`);
}

for (const qr of ["whatsapp", "facebook", "instagram", "google"]) {
  if (!existsSync(`public/qr/${qr}.svg`)) fail(`Missing QR asset: ${qr}.svg`);
}

if (failures.length) {
  console.error("Content validation failed:\n" + failures.map((failure) => `- ${failure}`).join("\n"));
  process.exit(1);
}

console.log(`Validated 2 locales, ${Object.keys(routes).length * 2} localized routes, ${priceEntries.length} price entries, and shared assets.`);
