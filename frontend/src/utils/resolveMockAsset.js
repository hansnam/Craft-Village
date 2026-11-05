const allBundledModules = import.meta.glob(
  "../../download/images/**/*.{png,jpg,jpeg,webp,avif,svg,PNG,JPG,JPEG,WEBP}",
  { eager: true, import: "default" }
);

function stripVietnameseDiacritics(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D");
}

function toAsciiSlug(relPath) {
  return stripVietnameseDiacritics(relPath)
    .toLowerCase()
    .replace(/\\/g, "/")
    .split("/")
    .map((segment) =>
      segment
        .trim()
        .replace(/[\s_-]+/g, "-")
        .replace(/\s*\./g, ".")
    )
    .filter(Boolean)
    .join("/");
}

function stripExtension(pathStr) {
  return pathStr.replace(/\.(png|jpe?g|webp|avif|svg)$/i, "");
}

const exactLowerLookup = new Map();
const asciiSlugLookup = new Map();
const asciiNoExtLookup = new Map();

const GLOB_PREFIX = "../../download/images/";

Object.entries(allBundledModules).forEach(([globKey, assetUrl]) => {
  if (!globKey.startsWith(GLOB_PREFIX)) return;
  const relPath = globKey.slice(GLOB_PREFIX.length);
  const exactKey = relPath.toLowerCase();
  const slugKey = toAsciiSlug(relPath);
  const noExtKey = stripExtension(slugKey);

  exactLowerLookup.set(exactKey, assetUrl);
  if (!asciiSlugLookup.has(slugKey)) {
    asciiSlugLookup.set(slugKey, assetUrl);
  }
  if (!asciiNoExtLookup.has(noExtKey)) {
    asciiNoExtLookup.set(noExtKey, assetUrl);
  }
});

/**
 * Chuẩn hóa và phân giải đường dẫn ảnh trích xuất trực tiếp từ src/data/mockData.js
 * sang URL tài nguyên thực tế đã được Vite đóng gói.
 */
export function resolveMockAsset(rawPath) {
  if (!rawPath || typeof rawPath !== "string") return "";

  // Khắc phục ký tự xuống dòng vô tình tạo ra bởi "\n" trong chuỗi JS (VD: "\nón lá Hải Yến")
  const repaired = rawPath
    .replace(/\r?\n/g, "/n")
    .replace(/\\/g, "/")
    .trim();

  if (!repaired) return "";
  if (/^(https?:|data:|blob:)/i.test(repaired)) {
    return repaired;
  }

  const relativeFromImages = repaired
    .replace(/^\/+/, "")
    .replace(/^download\/+/i, "")
    .replace(/^images\/+/i, "");

  if (!relativeFromImages) return "";

  const exactMatch = exactLowerLookup.get(relativeFromImages.toLowerCase());
  if (exactMatch) return exactMatch;

  const slugKey = toAsciiSlug(relativeFromImages);
  const slugMatch = asciiSlugLookup.get(slugKey);
  if (slugMatch) return slugMatch;

  const noExtMatch = asciiNoExtLookup.get(stripExtension(slugKey));
  if (noExtMatch) return noExtMatch;

  return "";
}

/**
 * Lấy ảnh đại diện an toàn cho Cơ sở sản xuất từ đối tượng facility trong mockData.js
 */
export function resolveFacilityThumbnail(facility) {
  if (!facility?.images) return "";
  const candidates = [
    facility.images.header,
    facility.images.imageStory,
    facility.images.consultation,
  ];

  for (const candidate of candidates) {
    const resolved = resolveMockAsset(candidate);
    if (resolved) return resolved;
  }

  return "";
}
