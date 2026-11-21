import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { villages, facilities, products } from "../src/data/mockData.js";

const SITE_URL = "https://craft-village.vercel.app";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const FRONTEND_DIR = path.resolve(__dirname, "..");
const NEWS_DATA_PATH = path.join(FRONTEND_DIR, "src", "data", "newsData.js");
const OUTPUT_SITEMAP_PATH = path.join(FRONTEND_DIR, "public", "sitemap.xml");

function extractNewsSlugs(filePath) {
  const source = fs.readFileSync(filePath, "utf8");
  const slugs = [];
  const regex = /^\s*slug:\s*["']([^"']+)["']/gm;
  let match;
  while ((match = regex.exec(source)) !== null) {
    if (match[1]) slugs.push(match[1]);
  }
  return Array.from(new Set(slugs));
}

function escapeXml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function buildSitemapEntries() {
  const entries = [
    { loc: "/", changefreq: "weekly", priority: "1.0" },
    { loc: "/ve-chung-toi", changefreq: "monthly", priority: "0.8" },
    { loc: "/tin-tuc", changefreq: "weekly", priority: "0.85" },
    { loc: "/tham-gia", changefreq: "monthly", priority: "0.7" },
    { loc: "/dang-ky-doanh-nghiep", changefreq: "monthly", priority: "0.7" },
  ];

  const seenPaths = new Set(entries.map((entry) => entry.loc));

  const pushUnique = (routePath, changefreq, priority) => {
    const cleanPath = routePath.startsWith("/") ? routePath : `/${routePath}`;
    if (seenPaths.has(cleanPath)) return;
    seenPaths.add(cleanPath);
    entries.push({ loc: cleanPath, changefreq, priority });
  };

  for (const village of villages || []) {
    if (village?.id) {
      pushUnique(`/lang-nghe/${encodeURIComponent(village.id)}`, "weekly", "0.9");
    }
  }

  for (const facility of facilities || []) {
    if (facility?.id) {
      pushUnique(`/co-so/${encodeURIComponent(facility.id)}`, "weekly", "0.85");
    }
  }

  for (const product of products || []) {
    if (product?.id) {
      pushUnique(`/san-pham/${encodeURIComponent(product.id)}`, "weekly", "0.75");
    }
  }

  for (const slug of extractNewsSlugs(NEWS_DATA_PATH)) {
    pushUnique(`/tin-tuc/${encodeURIComponent(slug)}`, "monthly", "0.75");
  }

  return entries;
}

function generateSitemapXml() {
  const today = new Date().toISOString().slice(0, 10);
  const entries = buildSitemapEntries();

  const urlNodes = entries
    .map(
      ({ loc, changefreq, priority }) => `  <url>
    <loc>${escapeXml(`${SITE_URL}${loc}`)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlNodes}
</urlset>
`;

  fs.mkdirSync(path.dirname(OUTPUT_SITEMAP_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_SITEMAP_PATH, xml, "utf8");
  console.log(`Generated sitemap.xml with ${entries.length} URLs -> ${OUTPUT_SITEMAP_PATH}`);
}

generateSitemapXml();
