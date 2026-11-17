import React from "react";
import { Link, useLocation } from "react-router-dom";
import { contactDetails } from "../data/contactData.js";

function ContactIcon({ type }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {type === "phone" ? (
        <path d="M5.4 4.2h3.1l1.5 3.7-2 1.7a12.6 12.6 0 0 0 6.4 6.4l1.7-2 3.7 1.5v3.1a1.7 1.7 0 0 1-1.8 1.7A16.5 16.5 0 0 1 3.7 6a1.7 1.7 0 0 1 1.7-1.8Z" />
      ) : (
        <><path d="M3 10 12 3l9 7v10H3V10Z" /><path d="M9 20v-7h6v7" /></>
      )}
    </svg>
  );
}

export default function QuickContact() {
  const { pathname } = useLocation();
  if (pathname === "/tham-gia" || pathname === "/dang-ky-doanh-nghiep") return null;

  return (
    <nav className="quick-contact" aria-label="Liên hệ nhanh">
      <Link className="quick-contact__link quick-contact__link--primary" to="/tham-gia">
        <ContactIcon type="join" /><span>Đăng ký tham gia</span>
      </Link>
      <a className="quick-contact__link" href={`tel:${contactDetails.phone}`} aria-label={`Gọi Craft Folio: ${contactDetails.phoneLabel}`}>
        <ContactIcon type="phone" /><span>{contactDetails.phoneLabel}</span>
      </a>
    </nav>
  );
}
