import { facilities, products, users as mockUsers } from "../data/mockData.js";

const BOOKINGS_STORAGE_KEY = "craft_bookings";
const FAVORITES_MAP_STORAGE_KEY = "craft_favorites_by_user";
const SEED_FLAG_KEY = "craft_user_data_seeded_v1";
const USER_DATA_EVENT = "craft-user-data-updated";

function emitUserDataUpdated() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(USER_DATA_EVENT));
  }
}

export function getUserKey(user) {
  if (!user) return "";
  return String(user.id || user.userName || "").trim();
}

export function resolveCanonicalProductId(rawId) {
  if (!rawId) return "";
  const lower = String(rawId).toLowerCase();
  const matched = products.find(
    (p) =>
      String(p.id).toLowerCase() === lower ||
      (Array.isArray(p.aliasIds) && p.aliasIds.some((a) => String(a).toLowerCase() === lower))
  );
  return matched ? matched.id : String(rawId);
}

function readJson(key, fallback) {
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    return parsed ?? fallback;
  } catch {
    return fallback;
  }
}

function writeJson(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value));
  emitUserDataUpdated();
}

function pickSeedProduct(preferredIds = []) {
  for (const pid of preferredIds) {
    const found = products.find((p) => p.id === pid || p.aliasIds?.includes(pid));
    if (found) return found;
  }
  return products[0] || null;
}

function pickSeedFacility(preferredIds = []) {
  for (const fid of preferredIds) {
    const found = facilities.find((f) => f.id === fid);
    if (found) return found;
  }
  return facilities[0] || null;
}

export function ensureDemoSeedData() {
  if (typeof window === "undefined") return;
  if (window.localStorage.getItem(SEED_FLAG_KEY) === "1") return;

  const existingBookings = readJson(BOOKINGS_STORAGE_KEY, []);
  const existingFavMap = readJson(FAVORITES_MAP_STORAGE_KEY, {});

  const userSeeds = [
    {
      user: mockUsers[0],
      facilities: ["NLC_NLTTH", "QCS_QCS", "MTD_VQ"],
      products: ["SP_QCS_QLTDG", "SP_NLC_NQTKN", "SP_LNX_ADHV"],
      dates: ["2026-11-22", "2026-11-28"],
      purposes: ["Xem mẫu sản phẩm", "Tham quan xưởng"],
    },
    {
      user: mockUsers[1],
      facilities: ["MTD_VQ", "LNX_SHV"],
      products: ["SP_MTD_VDNT", "SP_SHV_05"],
      dates: ["2026-11-24", "2026-12-02"],
      purposes: ["Đặt gia công / sản xuất", "Tư vấn trực tiếp"],
    },
    {
      user: mockUsers[2],
      facilities: ["GBT_GMH", "LNX_SHV"],
      products: ["SP_GBT_BGLH", "SP_SHV_06"],
      dates: ["2026-11-26"],
      purposes: ["Trao đổi hợp tác"],
    },
  ];

  const seedBookings = [...(Array.isArray(existingBookings) ? existingBookings : [])];
  const seedFavMap =
    existingFavMap && typeof existingFavMap === "object" && !Array.isArray(existingFavMap)
      ? { ...existingFavMap }
      : {};

  userSeeds.forEach((cfg, uIdx) => {
    if (!cfg.user) return;
    const uKey = getUserKey(cfg.user);

    const hasUserBooking = seedBookings.some(
      (b) => b.userId === cfg.user.id || b.userName === cfg.user.userName
    );
    if (!hasUserBooking) {
      cfg.dates.forEach((prefDate, idx) => {
        const fac = pickSeedFacility([cfg.facilities[idx], ...cfg.facilities]);
        const prd = pickSeedProduct([cfg.products[idx], ...cfg.products]);
        if (!fac) return;
        seedBookings.push({
          id: `BK-${7100 + uIdx * 10 + idx}`,
          userId: cfg.user.id,
          userName: cfg.user.userName,
          facilityId: fac.id,
          facilityName: fac.name,
          productId: prd?.id || "",
          productName: prd?.name || "",
          fullName: cfg.user.fullName || cfg.user.userName,
          phone: cfg.user.phone || "0901234567",
          email: cfg.user.email || "",
          purpose: cfg.purposes[idx] || "Tham quan xưởng",
          preferredDate: prefDate,
          timeSlot: idx % 2 === 0 ? "08:30 - 10:00" : "14:00 - 15:30",
          notes: prd
            ? `Quan tâm sản phẩm ${prd.name}, mong muốn xem mẫu trực tiếp tại xưởng.`
            : "Đặt lịch trao đổi nhu cầu hợp tác lâu dài.",
          status: "pending",
          createdAt: new Date(Date.now() - (uIdx + idx + 1) * 86400000).toISOString(),
        });
      });
    }

    if (!Array.isArray(seedFavMap[uKey]) || seedFavMap[uKey].length === 0) {
      seedFavMap[uKey] = cfg.products
        .map((pid) => resolveCanonicalProductId(pid))
        .filter(Boolean);
    }
  });

  window.localStorage.setItem(BOOKINGS_STORAGE_KEY, JSON.stringify(seedBookings));
  window.localStorage.setItem(FAVORITES_MAP_STORAGE_KEY, JSON.stringify(seedFavMap));
  window.localStorage.setItem(SEED_FLAG_KEY, "1");
}

export function getUserBookings(user) {
  if (!user) return [];
  ensureDemoSeedData();
  const all = readJson(BOOKINGS_STORAGE_KEY, []);
  if (!Array.isArray(all)) return [];
  const uId = user.id;
  const uName = user.userName;
  return all
    .filter((b) => (uId && b.userId === uId) || (uName && b.userName === uName))
    .sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
}

export function addUserBooking(user, bookingInput) {
  if (!user) return null;
  ensureDemoSeedData();
  const all = readJson(BOOKINGS_STORAGE_KEY, []);
  const record = {
    id: bookingInput.id || `BK-${Math.floor(1000 + Math.random() * 9000)}`,
    userId: user.id,
    userName: user.userName,
    facilityId: bookingInput.facilityId || "",
    facilityName: bookingInput.facilityName || "",
    productId: bookingInput.productId ? resolveCanonicalProductId(bookingInput.productId) : "",
    productName: bookingInput.productName || "",
    fullName: bookingInput.fullName || user.fullName || user.userName,
    phone: bookingInput.phone || user.phone || "",
    email: bookingInput.email || user.email || "",
    purpose: bookingInput.purpose || "Tham quan xưởng",
    preferredDate: bookingInput.preferredDate || "",
    timeSlot: bookingInput.timeSlot || "08:30 - 10:00",
    notes: bookingInput.notes || "",
    status: "pending",
    createdAt: new Date().toISOString(),
  };
  const next = [record, ...(Array.isArray(all) ? all : [])];
  writeJson(BOOKINGS_STORAGE_KEY, next);
  return record;
}

export function cancelUserBooking(user, bookingId) {
  if (!user || !bookingId) return false;
  const all = readJson(BOOKINGS_STORAGE_KEY, []);
  if (!Array.isArray(all)) return false;
  let updated = false;
  const next = all.map((b) => {
    if (
      b.id === bookingId &&
      ((user.id && b.userId === user.id) || (user.userName && b.userName === user.userName))
    ) {
      updated = true;
      return { ...b, status: "cancelled", cancelledAt: new Date().toISOString() };
    }
    return b;
  });
  if (updated) {
    writeJson(BOOKINGS_STORAGE_KEY, next);
  }
  return updated;
}

export function getUserFavorites(user) {
  if (!user) return [];
  ensureDemoSeedData();
  const map = readJson(FAVORITES_MAP_STORAGE_KEY, {});
  const key = getUserKey(user);
  const rawList = Array.isArray(map?.[key]) ? map[key] : [];
  return Array.from(new Set(rawList.map((id) => resolveCanonicalProductId(id)).filter(Boolean)));
}

export function isProductFavorited(user, rawProductId) {
  if (!user || !rawProductId) return false;
  const canonicalId = resolveCanonicalProductId(rawProductId);
  return getUserFavorites(user).includes(canonicalId);
}

export function toggleUserFavorite(user, rawProductId) {
  if (!user || !rawProductId) return { favorites: [], isFavorite: false };
  ensureDemoSeedData();
  const canonicalId = resolveCanonicalProductId(rawProductId);
  const key = getUserKey(user);
  const map = readJson(FAVORITES_MAP_STORAGE_KEY, {});
  const current = Array.isArray(map?.[key])
    ? map[key].map((id) => resolveCanonicalProductId(id)).filter(Boolean)
    : [];

  const exists = current.includes(canonicalId);
  const nextList = exists
    ? current.filter((id) => id !== canonicalId)
    : [canonicalId, ...current.filter((id) => id !== canonicalId)];

  writeJson(FAVORITES_MAP_STORAGE_KEY, {
    ...(map && typeof map === "object" && !Array.isArray(map) ? map : {}),
    [key]: nextList,
  });

  return { favorites: nextList, isFavorite: !exists };
}

export function subscribeUserDataChanges(listener) {
  if (typeof window === "undefined") return () => {};
  const handler = () => listener();
  window.addEventListener(USER_DATA_EVENT, handler);
  window.addEventListener("storage", handler);
  return () => {
    window.removeEventListener(USER_DATA_EVENT, handler);
    window.removeEventListener("storage", handler);
  };
}
