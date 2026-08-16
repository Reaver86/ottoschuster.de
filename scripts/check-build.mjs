import { readdir, readFile, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import { extname, join, normalize } from "node:path";

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
