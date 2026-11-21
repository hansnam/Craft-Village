import { useEffect } from "react";

export const SITE_URL = "https://craft-village.vercel.app";
export const SITE_NAME = "Craft Folio";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/download/images/about_us/header_poster.jpg`;

export const DEFAULT_SEO = {
  title: "Craft Folio | Kết nối Xưởng Thủ Công & Làng Nghề Truyền Thống Việt Nam",
  description:
    "Craft Folio kết nối các xưởng sản xuất làng nghề truyền thống Việt Nam như Gốm Bát Tràng, Nón Làng Chuông, Quạt Chàng Sơn, Mây Tre Đan Phú Vinh, Lụa Nha Xá với khách hàng doanh nghiệp.",
  canonicalPath: "/",
  ogType: "website",
  image: DEFAULT_OG_IMAGE,
  noIndex: false,
};

export function buildCanonicalUrl(path = "/") {
  if (!path) return `${SITE_URL}/`;
  if (/^https?:\/\//i.test(path)) {
    return path.split(/[?#]/)[0];
  }
  const cleanPath = path.split(/[?#]/)[0];
  const normalized = cleanPath.startsWith("/") ? cleanPath : `/${cleanPath}`;
  if (normalized.length > 1 && normalized.endsWith("/")) {
    return `${SITE_URL}${normalized.slice(0, -1)}`;
  }
  return `${SITE_URL}${normalized}`;
}

export function buildAbsoluteAssetUrl(assetPath) {
  if (!assetPath) return DEFAULT_OG_IMAGE;
  if (/^https?:\/\//i.test(assetPath)) return assetPath;
  if (assetPath.startsWith("data:") || assetPath.startsWith("blob:")) {
    return DEFAULT_OG_IMAGE;
  }
  const normalized = assetPath.startsWith("/") ? assetPath : `/${assetPath}`;
  return `${SITE_URL}${encodeURI(normalized)}`;
}

export function truncateSeoText(text, maxLength = 158) {
  const cleaned = String(text || "").replace(/\s+/g, " ").trim();
  if (!cleaned) return "";
  if (cleaned.length <= maxLength) return cleaned;
  const sliced = cleaned.slice(0, maxLength - 1);
  const lastSpace = sliced.lastIndexOf(" ");
  return `${(lastSpace > maxLength * 0.6 ? sliced.slice(0, lastSpace) : sliced).trim()}…`;
}

function upsertMeta(attrName, attrValue, content) {
  if (typeof document === "undefined" || !content) return;
  const selector = `meta[${attrName}="${attrValue}"]`;
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel, href) {
  if (typeof document === "undefined" || !href) return;
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function applySeoMetadata({
  title,
  description,
  canonicalPath = "/",
  ogType = "website",
  image,
  noIndex = false,
} = {}) {
  if (typeof document === "undefined") return;

  const resolvedTitle = (title || DEFAULT_SEO.title).trim();
  const resolvedDescription =
    truncateSeoText(description, 160) || DEFAULT_SEO.description;
  const canonicalUrl = buildCanonicalUrl(canonicalPath);
  const resolvedImage = buildAbsoluteAssetUrl(image || DEFAULT_OG_IMAGE);
  const robotsContent = noIndex ? "noindex, nofollow" : "index, follow";

  document.title = resolvedTitle;

  upsertLink("canonical", canonicalUrl);
  upsertMeta("name", "description", resolvedDescription);
  upsertMeta("name", "robots", robotsContent);

  upsertMeta("property", "og:site_name", SITE_NAME);
  upsertMeta("property", "og:locale", "vi_VN");
  upsertMeta("property", "og:type", ogType);
  upsertMeta("property", "og:title", resolvedTitle);
  upsertMeta("property", "og:description", resolvedDescription);
  upsertMeta("property", "og:url", canonicalUrl);
  upsertMeta("property", "og:image", resolvedImage);

  upsertMeta("name", "twitter:card", "summary_large_image");
  upsertMeta("name", "twitter:title", resolvedTitle);
  upsertMeta("name", "twitter:description", resolvedDescription);
  upsertMeta("name", "twitter:image", resolvedImage);
}

export function usePageSeo(config) {
  const title = config?.title || "";
  const description = config?.description || "";
  const canonicalPath = config?.canonicalPath || "/";
  const ogType = config?.ogType || "website";
  const image = config?.image || "";
  const noIndex = Boolean(config?.noIndex);

  useEffect(() => {
    applySeoMetadata({
      title,
      description,
      canonicalPath,
      ogType,
      image,
      noIndex,
    });
  }, [title, description, canonicalPath, ogType, image, noIndex]);
}
