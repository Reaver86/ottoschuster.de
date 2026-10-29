import { readdir, readFile, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import { extname, join, normalize } from "node:path";
import { getLegacyRedirects, renderApacheRedirects } from "../src/data/redirects.mjs";

const outputRoot = "dist";
const basePath = (process.env.BASE_PATH ?? "/").replace(/\/$/, "");
const failures = [];

const walk = async (directory) => {
  const entries = await readdir(directory);
  const files = [];
  for (const entry of entries) {
    const path = join(directory, entry);
    if ((await stat(path)).isDirectory()) files.push(...(await walk(path)));
    else files.push(path);
  }
  return files;
};

if (!existsSync(outputRoot)) {
  console.error("dist/ does not exist. Run npm run build first.");
  process.exit(1);
}

const files = await walk(outputRoot);
const htmlFiles = files.filter((file) => extname(file) === ".html");
let localReferenceCount = 0;

const rootHtml = await readFile(join(outputRoot, "index.html"), "utf8");
if (!rootHtml.includes(`http-equiv="refresh" content="0;url=${basePath}/de/"`)) {
  failures.push("dist/index.html: missing permanent redirect to the German homepage");
}

const apacheRules = await readFile(join(outputRoot, ".htaccess"), "utf8");
if (apacheRules !== renderApacheRedirects(basePath)) {
  failures.push("dist/.htaccess: missing or outdated permanent legacy redirects");
}

for (const [source, target] of Object.entries(getLegacyRedirects(basePath))) {
  const fallback = source === "/index.html"
    ? rootHtml
    : await readFile(join(outputRoot, source.slice(1), "index.html"), "utf8");
  if (!fallback.includes(`http-equiv="refresh" content="0;url=${target}"`)) {
    failures.push(`${source}: missing static redirect to ${target}`);
  }
  const targetPath = target.slice(basePath.length).replace(/^\//, "");
  if (!existsSync(join(outputRoot, targetPath, "index.html"))) {
    failures.push(`${source}: redirect destination does not exist: ${target}`);
  }
}

const resolveTarget = (reference) => {
  const withoutFragment = reference.split("#")[0].split("?")[0];
  if (!withoutFragment) return null;
  const decoded = decodeURIComponent(withoutFragment);
  const withoutBase = basePath && decoded.startsWith(`${basePath}/`)
    ? decoded.slice(basePath.length)
    : decoded;
  const relative = withoutBase.startsWith("/") ? withoutBase.slice(1) : withoutBase;
  const normalized = normalize(relative);
  if (normalized.startsWith("..")) return null;
  if (decoded.endsWith("/")) return join(outputRoot, normalized, "index.html");
  return join(outputRoot, normalized);
};

for (const htmlFile of htmlFiles) {
  const html = await readFile(htmlFile, "utf8");

  if (/vqr\.vc|ottoschuster\.de\/grafiken\//i.test(html)) {
    failures.push(`${htmlFile}: contains a forbidden legacy runtime dependency`);
  }

  const references = [...html.matchAll(/(?:href|src)="([^"]+)"/g)].map((match) => match[1]);
  for (const reference of references) {
    if (/^(?:https?:|mailto:|tel:|data:|#)/i.test(reference)) continue;
    if (basePath && reference.startsWith("/") && !reference.startsWith(`${basePath}/`)) {
      failures.push(`${htmlFile}: local reference omits base path ${reference}`);
      continue;
    }
    const target = resolveTarget(reference);
    if (!target) continue;
    localReferenceCount += 1;
    if (!existsSync(target)) failures.push(`${htmlFile}: missing local target ${reference} (${target})`);
  }
}

if (failures.length) {
  console.error("Build link check failed:\n" + failures.map((failure) => `- ${failure}`).join("\n"));
  process.exit(1);
}

console.log(`Checked ${htmlFiles.length} HTML pages and ${localReferenceCount} local asset/link references; no broken or legacy runtime targets found.`);
