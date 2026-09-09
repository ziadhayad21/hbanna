"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageProvider";

const CERTIFICATES = [
  {
    src: "/certificate2.png",
    alt: "HBanna ISO 22000 Food Safety Certificate",
    title: "ISO 22000 — Food Safety Management",
    buttonLabel: "View Certificate ISO 22000",
  },
  {
    src: "/certificate.png",
    alt: "HBanna ISO 9001 Quality Certificate",
    title: "ISO 9001 — Quality Management",
    buttonLabel: "View Certificate ISO 9001",
  },
];

export default function Certifications() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setOpenIndex(null);
    }
  }, []);

  useEffect(() => {
    if (openIndex !== null) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, handleKey]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) {
      setOpenIndex(null);
    }
  };

  const activeCert = openIndex !== null ? CERTIFICATES[openIndex] : null;

  return (
    <section id="certifications">
      <span className="eyebrow reveal" style={{ color: "var(--orange)" }}>
        {t.certs.eyebrow}
      </span>
      <h2 className="serif reveal">{t.certs.title}</h2>
      <div className="cert-row reveal-stagger">
        <div className="cert-mark">
          <div className="cert-badge">
            ISO
            <br />
            22000
          </div>
          <span className="cert-name">Food Safety Management</span>
        </div>
        <div className="cert-mark">
          <div className="cert-badge">
            ISO
            <br />
            9001
          </div>
          <span className="cert-name">Quality Management</span>
        </div>
      </div>
      <p className="cert-sub reveal">{t.certs.body}</p>

      {/* Two side-by-side View Certificate buttons */}
      <div className="cert-action-wrap reveal" style={{ gap: "16px" }}>
        {CERTIFICATES.map((cert, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setOpenIndex(idx)}
            className="btn btn-primary"
            aria-haspopup="dialog"
            aria-expanded={openIndex === idx}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
            <span>{cert.buttonLabel}</span>
          </button>
        ))}
      </div>

      {/* Certificate Lightbox Modal */}
      {activeCert && (
        <div
          ref={overlayRef}
          className="cert-modal-overlay"
          onClick={handleOverlayClick}
          role="dialog"
          aria-modal="true"
          aria-label={activeCert.title}
        >
          <div className="cert-modal">
            <div className="cert-modal-header">
              <div className="cert-modal-title">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--orange)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="8" r="7" />
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                </svg>
                <span>{activeCert.title}</span>
              </div>

              <div className="cert-modal-actions">
                <a
                  href={activeCert.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                  style={{
                    padding: "8px 14px",
                    fontSize: "12px",
                    minHeight: "34px",
                    borderRadius: "4px",
                    textDecoration: "none",
                  }}
                  title="Open certificate in full resolution"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  <span>Full Size</span>
                </a>

                <button
                  type="button"
                  className="pm-close"
                  style={{ position: "static", transform: "none" }}
                  onClick={() => setOpenIndex(null)}
                  aria-label="Close certificate dialog"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  >
                    <path d="M2 2l14 14M16 2L2 16" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="cert-modal-body">
              <Image
                src={activeCert.src}
                alt={activeCert.alt}
                width={540}
                height={770}
                priority
                className="cert-modal-img"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
