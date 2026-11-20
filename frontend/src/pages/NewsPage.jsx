import React, { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  NEWS_CATEGORIES,
  getNewsArticlesSorted,
} from "../data/newsData.js";
import { resolveMockAsset } from "../utils/resolveMockAsset.js";
import { HOME_BACKGROUND } from "../assets/pageBackgrounds.js";

function CalendarIcon() {
  return (
    <svg viewBox="0 0 18 18" aria-hidden="true">
      <rect x="2.25" y="3.5" width="13.5" height="12.25" rx="2.2" />
      <path d="M5.5 2v3M12.5 2v3M2.25 7.5h13.5" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 18 18" aria-hidden="true">
      <circle cx="9" cy="9" r="6.75" />
      <path d="M9 5.25V9l2.6 1.5" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 18 18" aria-hidden="true">
      <path d="M3.5 9h11M10.25 4.75L14.5 9l-4.25 4.25" />
    </svg>
  );
}

function BentoCard({ article, isHero = false }) {
  return (
    <Link
      to={`/tin-tuc/${article.slug}`}
      className={`news-bento-card ${isHero ? "news-bento-card--hero" : ""}`}
    >
      <img
        src={article.images[0]}
        alt={article.title}
        className="news-bento-card__img"
        loading={isHero ? "eager" : "lazy"}
      />
      <div className="news-bento-card__scrim" aria-hidden="true" />
      <div className="news-bento-card__content">
        <div className="news-bento-card__meta">
          <span className="news-bento-card__badge">{article.categoryLabel}</span>
          <span className="news-bento-card__date">{article.date}</span>
        </div>
        <h2 className="news-bento-card__title">{article.title}</h2>
        {isHero && <p className="news-bento-card__sapo">{article.sapo}</p>}
      </div>
    </Link>
  );
}

function GridArticleCard({ article }) {
  return (
    <Link to={`/tin-tuc/${article.slug}`} className="news-grid-card">
      <div className="news-grid-card__media">
        <img
          src={article.images[0]}
          alt={article.title}
          className="news-grid-card__img"
          loading="lazy"
        />
        <span className="news-grid-card__badge">{article.categoryLabel}</span>
      </div>
      <div className="news-grid-card__body">
        <div className="news-card-meta">
          <span>
            <CalendarIcon />
            {article.date}
          </span>
          <span>
            <ClockIcon />
            {article.readTime}
          </span>
        </div>
        <h3 className="news-grid-card__title">{article.title}</h3>
        <p className="news-grid-card__sapo">{article.sapo}</p>
        <span className="news-card-more">
          Đọc thêm
          <ArrowRightIcon />
        </span>
      </div>
    </Link>
  );
}

function HorizontalArticleCard({ article }) {
  return (
    <Link to={`/tin-tuc/${article.slug}`} className="news-row-card">
      <div className="news-row-card__media">
        <img
          src={article.images[0]}
          alt={article.title}
          className="news-row-card__img"
          loading="lazy"
        />
      </div>
      <div className="news-row-card__body">
        <div className="news-card-meta">
          <span className="news-row-card__badge">{article.categoryLabel}</span>
          <span>
            <CalendarIcon />
            {article.date}
          </span>
          <span>
            <ClockIcon />
            {article.readTime}
          </span>
        </div>
        <h2 className="news-row-card__title">{article.title}</h2>
        <p className="news-row-card__sapo">{article.sapo}</p>
        <span className="news-card-more">
          Đọc thêm
          <ArrowRightIcon />
        </span>
      </div>
    </Link>
  );
}

function ExploreVillagesBanner() {
  return (
    <section className="news-explore-cta" aria-label="Khám phá làng nghề">
      <div className="news-explore-cta__card">
        <div className="news-explore-cta__copy">
          <p className="news-explore-cta__eyebrow">Craft Folio</p>
          <h2 className="news-explore-cta__title">
            Khám phá Làng nghề Việt Nam
          </h2>
          <p className="news-explore-cta__desc">
            Tìm hiểu thông tin các làng nghề truyền thống, năng lực cơ sở sản
            xuất và kết nối đặt mẫu trực tiếp cùng nghệ nhân.
          </p>
        </div>
        <Link to="/" className="news-explore-cta__btn">
          Khám phá ngay
          <ArrowRightIcon />
        </Link>
      </div>
    </section>
  );
}

export default function NewsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showMoreArticles, setShowMoreArticles] = useState(false);

  const rawCategory = searchParams.get("danh-muc") || "all";
  const activeCategory = NEWS_CATEGORIES.some((c) => c.id === rawCategory)
    ? rawCategory
    : "all";

  const sortedArticles = useMemo(() => getNewsArticlesSorted(), []);

  const botanicalPatternUrl = HOME_BACKGROUND.url;

  const newsHeaderUrl = useMemo(
    () => resolveMockAsset("download/Ảnh làng nghề/Tin tức/header_Tintuc_upscayl_2x_upscayl-standard-4x.png"),
    []
  );

  const filteredArticles = useMemo(() => {
    if (activeCategory === "all") return sortedArticles;
    return sortedArticles.filter((article) => article.category === activeCategory);
  }, [sortedArticles, activeCategory]);

  const highlightedArticles = useMemo(() => {
    const shownSlugs = new Set(filteredArticles.map((item) => item.slug));
    const remainingFeatured = sortedArticles.filter(
      (item) => item.featured && !shownSlugs.has(item.slug)
    );
    const pool =
      remainingFeatured.length >= 4
        ? remainingFeatured
        : [
            ...remainingFeatured,
            ...sortedArticles.filter(
              (item) =>
                !remainingFeatured.some((f) => f.slug === item.slug) &&
                !shownSlugs.has(item.slug)
            ),
          ];
    return (pool.length >= 4 ? pool : sortedArticles).slice(0, 4);
  }, [sortedArticles, filteredArticles]);

  const handleCategoryChange = (categoryId) => {
    setShowMoreArticles(false);
    if (categoryId === "all") {
      searchParams.delete("danh-muc");
      setSearchParams(searchParams, { replace: true });
    } else {
      setSearchParams({ "danh-muc": categoryId }, { replace: true });
    }
  };

  const isDefaultAllView = activeCategory === "all";
  const bentoLead = filteredArticles[0] || null;
  const bentoSide = filteredArticles.slice(1, 5);
  const lowerGrid = filteredArticles.slice(5);

  return (
    <main className="news-page">
      <div
        className="news-page__bg-pattern"
        style={{ backgroundImage: `url('${botanicalPatternUrl}')` }}
        aria-hidden="true"
      />

      <section
        className="news-hero"
        style={
          newsHeaderUrl
            ? {
                backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.32) 0%, rgba(0, 0, 0, 0.44) 100%), url('${newsHeaderUrl}')`,
              }
            : undefined
        }
      >
        <div className="news-container news-hero__inner">
          <span>     </span>
          <h1 className="news-hero__title">Tin tức</h1>
          <p className="news-hero__subtitle">
            Cập nhật những câu chuyện, xu hướng và hoạt động về làng nghề Việt
            Nam
          </p>
        </div>
      </section>

      <div className="news-container news-content">
        <div className="news-toolbar">
          <div
            className="news-filters"
            role="tablist"
            aria-label="Danh mục tin tức"
          >
            {NEWS_CATEGORIES.map((category) => {
              const isSelected = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  className={`news-filter-pill ${
                    isSelected ? "is-active" : ""
                  }`}
                  onClick={() => handleCategoryChange(category.id)}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>

        {filteredArticles.length === 0 ? (
          <div className="news-empty">
            <h2 className="news-empty__title">
              Chưa có bài viết trong danh mục này
            </h2>
            <p className="news-empty__desc">
              Chọn lại danh mục "Tất cả" để khám phá đầy đủ các bài viết làng
              nghề và thị trường.
            </p>
            <button
              type="button"
              className="news-empty__btn"
              onClick={() => handleCategoryChange("all")}
            >
              Xem tất cả bài viết
            </button>
          </div>
        ) : isDefaultAllView ? (
          <>
            <div className="news-section-head news-section-head--top">
              <h2 className="news-section-head__title">Bài viết mới nhất</h2>
            </div>

            <section className="news-bento" aria-label="Tin tiêu điểm">
              {bentoLead && <BentoCard article={bentoLead} isHero />}
              <div className="news-bento__side">
                {bentoSide.map((article) => (
                  <BentoCard key={article.id} article={article} />
                ))}
              </div>
            </section>

            {lowerGrid.length > 0 && !showMoreArticles && (
              <div className="news-load-more-wrap">
                <button
                  type="button"
                  className="news-load-more-btn"
                  onClick={() => setShowMoreArticles(true)}
                >
                  Hiển thị thêm
                </button>
              </div>
            )}

            {lowerGrid.length > 0 && showMoreArticles && (
              <section className="news-grid-section" aria-label="Tất cả bài viết">
                <div className="news-grid">
                  {lowerGrid.map((article) => (
                    <GridArticleCard key={article.id} article={article} />
                  ))}
                </div>
              </section>
            )}

            <ExploreVillagesBanner />
          </>
        ) : (
          <>
            <section
              className="news-list-section"
              aria-label="Danh sách bài viết theo bộ lọc"
            >
              <div className="news-section-head">
                <h2 className="news-section-head__title">
                  {
                    NEWS_CATEGORIES.find((c) => c.id === activeCategory)
                      ?.label
                  }
                </h2>
                <span className="news-section-head__count">
                  {filteredArticles.length} bài viết
                </span>
              </div>
              <div className="news-list">
                {filteredArticles.map((article) => (
                  <HorizontalArticleCard key={article.id} article={article} />
                ))}
              </div>
            </section>

            <ExploreVillagesBanner />

            <section className="news-grid-section" aria-label="Tin nổi bật">
              <div className="news-section-head">
                <h2 className="news-section-head__title">Tin nổi bật</h2>
              </div>
              <div className="news-grid">
                {highlightedArticles.map((article) => (
                  <GridArticleCard key={article.id} article={article} />
                ))}
              </div>
            </section>
          </>
        )}
      </div>
    </main>
  );
}
