import React from "react";

const contactItems = [
  {
    label: "Địa chỉ",
    value: "Làng nghề truyền thống, Hà Nội, Việt Nam",
    icon: "⌖",
  },
  {
    label: "Điện thoại",
    value: "+84 912 345 678",
    icon: "☎",
    href: "tel:+84912345678",
  },
  {
    label: "Email",
    value: "hello@craftfolk.vn",
    icon: "✉",
    href: "mailto:hello@craftfolk.vn",
  },
];

function WaveDecoration() {
  return (
    <svg
      className="footer__waves"
      viewBox="0 0 1440 110"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        className="footer__wave footer__wave--back"
        d="M0 34C128 5 196 34 328 65S520 87 655 42 865 12 1003 36s245 13 437-10v160H0Z"
      />
      <path
        className="footer__wave footer__wave--middle"
        d="M0 47C119 16 193 46 326 72s200 3 326-33 205-25 340 1 250 25 448-7v150H0Z"
      />
      <path
        className="footer__wave footer__wave--front"
        d="M0 58C122 27 202 56 335 78s199-1 323-34 203-22 337 2 251 24 459-8v140H0Z"
      />
    </svg>
  );
}

function BrandMark() {
  return (
    <a className="brand" href="#" aria-label="Craft Folk - về đầu trang">
      <span className="brand__icon" aria-hidden="true">
        <span />
      </span>
      <span className="brand__name">Craft Folk</span>
    </a>
  );
}

export default function Footer() {
  function handleSubscribe(event) {
    event.preventDefault();
  }

  return (
    <footer className="footer">
      <WaveDecoration />
      <div className="footer__inner">
        <section className="footer__story" aria-labelledby="footer-story-title">
          <h3 className="footer__heading" id="footer-story-title">
            Tâm tình của chúng tôi
          </h3>
          <p>
            Craft Folk kết nối bạn với những làng nghề và người thợ thủ công
            Việt Nam. Mỗi sản phẩm là một câu chuyện về đôi bàn tay tài hoa,
            những giá trị văn hóa lâu đời và tình yêu dành cho nghề.
          </p>
          <p className="footer__motto">GÌN GIỮ DI SẢN · LAN TỎA GIÁ TRỊ</p>
        </section>

        <section className="footer__details" aria-label="Thông tin Craft Folk">
          <BrandMark />
          <p className="footer__intro">
            Khám phá vẻ đẹp thủ công và những câu chuyện đáng tự hào của Việt
            Nam.
          </p>
          <address className="footer__contact">
            {contactItems.map((item) => (
              <div className="footer__contact-item" key={item.label}>
                <span className="footer__contact-icon" aria-hidden="true">
                  {item.icon}
                </span>
                <span className="footer__contact-copy">
                  <span className="footer__contact-label">{item.label}</span>
                  {item.href ? (
                    <a href={item.href}>{item.value}</a>
                  ) : (
                    <span>{item.value}</span>
                  )}
                </span>
              </div>
            ))}
          </address>

          <div className="footer__newsletter">
            <h6 className="footer__newsletter-title">
              ĐỒNG HÀNH CÙNG CHÚNG TÔI
            </h6>
            <p>Nhận câu chuyện làng nghề và tin tức mới nhất.</p>
            <form className="footer__form" onSubmit={handleSubscribe}>
              <label className="visually-hidden" htmlFor="newsletter-email">
                Địa chỉ email
              </label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                placeholder="Nhập email của bạn"
                required
              />
              <button type="submit">ĐĂNG KÝ</button>
            </form>
          </div>
        </section>
      </div>
      <div className="footer__bottom">
        <span>© 2026 Craft Folk. Tự hào làng nghề Việt.</span>
        <div className="footer__socials" aria-label="Mạng xã hội">
          <a href="https://www.facebook.com/" aria-label="Facebook">
            f
          </a>
          <a href="https://www.instagram.com/" aria-label="Instagram">
            ◎
          </a>
        </div>
      </div>
    </footer>
  );
}
