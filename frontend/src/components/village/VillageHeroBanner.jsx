import React, { useState, useEffect, useRef } from "react";
import { resolveMockAsset } from "../../utils/resolveMockAsset.js";
import SpinningNonLaLoader from "../SpinningNonLaLoader.jsx";

// Giữ bộ nhớ cache các URL ảnh banner đã được giải mã bitmap để chuyển trang qua lại mượt tức thì
const loadedVillageImageCache = new Set();

export default function VillageHeroBanner({ village }) {
  const headerImageUrl = resolveMockAsset(village?.headerImage);
  const villageName = village?.name || "";

  const [isReady, setIsReady] = useState(() => {
    return headerImageUrl ? loadedVillageImageCache.has(headerImageUrl) : true;
  });

  const imgRef = useRef(null);

  useEffect(() => {
    if (!headerImageUrl) {
      setIsReady(true);
      return undefined;
    }

    if (loadedVillageImageCache.has(headerImageUrl)) {
      setIsReady(true);
      return undefined;
    }

    setIsReady(false);
    let mounted = true;
    let minHoldDone = false;
    let assetDone = false;

    const tryReveal = () => {
      if (mounted && minHoldDone && assetDone) {
        loadedVillageImageCache.add(headerImageUrl);
        setIsReady(true);
      }
    };

    // Giữ hiệu ứng nón lá xoay tối thiểu 400ms để chuyển cảnh mượt mà, không bị chớp giật
    const holdTimer = window.setTimeout(() => {
      minHoldDone = true;
      tryReveal();
    }, 400);

    // Chốt an toàn phòng trường hợp mạng yếu hoặc tải ảnh lâu
    const failSafeTimer = window.setTimeout(() => {
      if (mounted) {
        loadedVillageImageCache.add(headerImageUrl);
        setIsReady(true);
      }
    }, 4500);

    // Tải trước và giải mã bitmap ảnh header nặng
    const preloader = new Image();
    preloader.decoding = "async";
    preloader.src = headerImageUrl;

    const onAssetLoaded = () => {
      if (typeof preloader.decode === "function") {
        preloader
          .decode()
          .catch(() => {})
          .finally(() => {
            assetDone = true;
            tryReveal();
          });
      } else {
        assetDone = true;
        tryReveal();
      }
    };

    if (preloader.complete && preloader.naturalWidth > 0) {
      onAssetLoaded();
    } else {
      preloader.addEventListener("load", onAssetLoaded, { once: true });
      preloader.addEventListener(
        "error",
        () => {
          assetDone = true;
          tryReveal();
        },
        { once: true }
      );
    }

    return () => {
      mounted = false;
      window.clearTimeout(holdTimer);
      window.clearTimeout(failSafeTimer);
    };
  }, [headerImageUrl]);

  return (
    <section
      className={`village-hero ${
        isReady ? "village-hero--ready" : "village-hero--loading"
      }`}
      aria-labelledby="village-hero-heading"
      aria-busy={!isReady}
    >
      <h1 id="village-hero-heading" className="visually-hidden">
        Làng nghề {villageName}
      </h1>

      {headerImageUrl ? (
        <>
          <SpinningNonLaLoader
            isReady={isReady}
            title={
              villageName
                ? `Đang tải làng nghề ${villageName}`
                : "Đang tải không gian làng nghề"
            }
          />
          <img
            ref={imgRef}
            className="village-hero__img"
            src={headerImageUrl}
            alt={`Banner làng nghề ${villageName}`}
            fetchPriority="high"
            decoding="async"
          />
        </>
      ) : (
        <div className="village-hero__fallback">
          <span className="village-hero__fallback-kicker">LÀNG NGHỀ</span>
          <span className="village-hero__fallback-title">
            {villageName || "Làng nghề truyền thống"}
          </span>
        </div>
      )}
    </section>
  );
}
