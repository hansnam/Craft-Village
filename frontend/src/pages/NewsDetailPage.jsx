import React, { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ImageLightboxModal from "../components/facility/ImageLightboxModal.jsx";
import {
  getNewsArticleBySlug,
  getRelatedNewsArticles,
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

function SectionProse({ section }) {
  return (
    <div className="news-detail-prose">
      <h2 className="news-detail-section__heading">{section.heading}</h2>
      {(section.paragraphs || []).map((paragraph, idx) => (
        <p key={idx} className="news-detail-section__paragraph">
          {paragraph}
        </p>
      ))}
      {section.quote && (
        <blockquote className="news-detail-quote">
          {section.quote.split("\n").map((line, lineIdx) => (
            <span key={lineIdx} className="news-detail-quote__line">
              {line}
            </span>
          ))}
        </blockquote>
      )}
      {(section.afterQuoteParagraphs || []).map((paragraph, idx) => (
        <p key={`after-${idx}`} className="news-detail-section__paragraph">
          {paragraph}
        </p>
      ))}
    </div>
  );
}

export default function NewsDetailPage() {
  const { slug } = useParams();
  const article = useMemo(() => getNewsArticleBySlug(slug), [slug]);
  const relatedArticles = useMemo(
    () => (article ? getRelatedNewsArticles(article.slug, 4) : []),
    [article]
  );

  const [lightbox, setLightbox] = useState({
    isOpen: false,
    imageUrl: "",
    title: "",
  });

  const botanicalPatternUrl = HOME_BACKGROUND.url;

  const openLightbox = (imageUrl, caption) => {
    if (!imageUrl) return;
    setLightbox({
      isOpen: true,
      imageUrl,
      title: caption || article?.title || "",
    });
  };

  if (!article) {
    return (
      <main className="news-detail-page news-detail-page--empty">
        <div
          className="news-page__bg-pattern"
          style={{ backgroundImage: `url('${botanicalPatternUrl}')` }}
          aria-hidden="true"
        />
        <div className="news-container news-detail-notfound">
          <p className="news-detail-notfound__code">404</p>
          <h1 className="news-detail-notfound__title">
            Không tìm thấy bài viết
          </h1>
          <p className="news-detail-notfound__desc">
            Bài viết bạn đang tìm có thể đã được cập nhật đường dẫn hoặc chuyển
            sang chuyên mục khác.
          </p>
          <Link to="/tin-tuc" className="news-detail-notfound__btn">
            Quay lại trang Tin tức
          </Link>
        </div>
      </main>
    );
  }

  const heroImage = article.images[0];
  const pairImages = article.images.slice(1, 3);
  const sideRightImage = article.images[3] || "";
  const sideLeftImage = article.images[4] || "";

  return (
    <main className="news-detail-page">
      <div
        className="news-page__bg-pattern"
        style={{ backgroundImage: `url('${botanicalPatternUrl}')` }}
        aria-hidden="true"
      />

      <article className="news-container news-detail-article">
        <nav className="news-breadcrumb" aria-label="Đường dẫn trang">
          <div className="news-breadcrumb__trail">
            <Link to="/">Trang chủ</Link>
            <span aria-hidden="true">/</span>
            <Link to="/tin-tuc">Tin tức</Link>
            <span aria-hidden="true">/</span>
            <Link to={`/tin-tuc?danh-muc=${article.category}`}>
              {article.categoryLabel}
            </Link>
          </div>
          <Link to="/tin-tuc" className="news-breadcrumb__back">
            ← Tất cả bài viết
          </Link>
        </nav>

        <header className="news-detail-header">
          <h1 className="news-detail-header__title">{article.title}</h1>
          <div className="news-detail-header__meta">
            <span>
              <CalendarIcon />
              {article.date}
            </span>
            <span>
              <ClockIcon />
              {article.readTime}
            </span>
          </div>
        </header>

        {heroImage && (
          <figure className="news-detail-hero-media">
            <button
              type="button"
              className="news-detail-image-trigger"
              onClick={() => openLightbox(heroImage, article.title)}
              aria-label={`Phóng to ảnh bài viết ${article.title}`}
            >
              <img
                src={heroImage}
                alt={article.title}
                className="news-detail-hero-media__img"
              />
            </button>
          </figure>
        )}

        <p className="news-detail-sapo">{article.sapo}</p>

        <div className="news-detail-body">
          {article.sections.map((section, idx) => {
            const isSideRight = section.layout === "side-right" && Boolean(sideRightImage);
            const isSideLeft = section.layout === "side-left" && Boolean(sideLeftImage);
            const sideImg = isSideRight ? sideRightImage : isSideLeft ? sideLeftImage : "";

            return (
              <React.Fragment key={section.heading}>
                {sideImg ? (
                  <section
                    className={`news-detail-split ${
                      isSideLeft ? "news-detail-split--img-left" : "news-detail-split--img-right"
                    }`}
                  >
                    <SectionProse section={section} />
                    <figure className="news-detail-split__media">
                      <button
                        type="button"
                        className="news-detail-image-trigger"
                        onClick={() => openLightbox(sideImg, section.heading)}
                        aria-label={`Phóng to ảnh minh họa ${section.heading}`}
                      >
                        <img
                          src={sideImg}
                          alt={section.heading}
                          className="news-detail-split__img"
                          loading="lazy"
                        />
                      </button>
                    </figure>
                  </section>
                ) : (
                  <section className="news-detail-full">
                    <SectionProse section={section} />
                  </section>
                )}

                {idx === 0 && pairImages.length > 0 && (
                  <div
                    className={`news-detail-pair ${
                      pairImages.length === 1 ? "news-detail-pair--single" : ""
                    }`}
                  >
                    {pairImages.map((imgUrl, pairIdx) => (
                      <figure key={pairIdx} className="news-detail-pair__item">
                        <button
                          type="button"
                          className="news-detail-image-trigger"
                          onClick={() =>
                            openLightbox(
                              imgUrl,
                              `${article.title} — Hình ${pairIdx + 2}`
                            )
                          }
                          aria-label={`Phóng to hình ảnh ${pairIdx + 2}`}
                        >
                          <img
                            src={imgUrl}
                            alt={`${article.title} - ảnh minh họa ${pairIdx + 2}`}
                            className="news-detail-pair__img"
                            loading="lazy"
                          />
                        </button>
                      </figure>
                    ))}
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {article.cta && (
          <section className="news-detail-cta" aria-label="Kết nối làng nghề">
            <div className="news-detail-cta__inner">
              <p className="news-detail-cta__text">{article.cta.text}</p>
              <Link to={article.cta.href} className="news-detail-cta__btn">
                {article.cta.buttonLabel}
                <ArrowRightIcon />
              </Link>
            </div>
          </section>
        )}
      </article>

      {relatedArticles.length > 0 && (
        <section className="news-container news-related" aria-label="Bài viết liên quan">
          <div className="news-section-head">
            <h2 className="news-section-head__title">Có thể bạn quan tâm</h2>
            <Link to="/tin-tuc" className="news-related__all">
              Xem tất cả →
            </Link>
          </div>
          <div className="news-grid">
            {relatedArticles.map((item) => (
              <Link
                key={item.id}
                to={`/tin-tuc/${item.slug}`}
                className="news-grid-card"
              >
                <div className="news-grid-card__media">
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="news-grid-card__img"
                    loading="lazy"
                  />
                  <span className="news-grid-card__badge">
                    {item.categoryLabel}
                  </span>
                </div>
                <div className="news-grid-card__body">
                  <div className="news-card-meta">
                    <span>
                      <CalendarIcon />
                      {item.date}
                    </span>
                    <span>
                      <ClockIcon />
                      {item.readTime}
                    </span>
                  </div>
                  <h3 className="news-grid-card__title">{item.title}</h3>
                  <p className="news-grid-card__sapo">{item.sapo}</p>
                  <span className="news-card-more">
                    Đọc thêm
                    <ArrowRightIcon />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <ImageLightboxModal
        isOpen={lightbox.isOpen}
        imageUrl={lightbox.imageUrl}
        title={lightbox.title}
        onClose={() => setLightbox({ isOpen: false, imageUrl: "", title: "" })}
      />
    </main>
  );
}
