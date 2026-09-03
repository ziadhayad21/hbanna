"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageProvider";

export default function Certifications() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKey]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) {
      setIsOpen(false);
    }
  };

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

      {/* Centered Button Below Certifications */}
      <div className="cert-action-wrap reveal">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="btn btn-primary"
          aria-haspopup="dialog"
          aria-expanded={isOpen}
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
          <span>View Certificate</span>
        </button>
      </div>

      {/* Certificate Lightbox Modal */}
      {isOpen && (
        <div
          ref={overlayRef}
          className="cert-modal-overlay"
          onClick={handleOverlayClick}
          role="dialog"
          aria-modal="true"
          aria-label="Official Certificate"
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
                <span>Quality & Compliance Certificate</span>
              </div>

              <div className="cert-modal-actions">
                <a
                  href="/certificate.png"
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
                  onClick={() => setIsOpen(false)}
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
                src="/certificate.png"
                alt="HBanna Quality and Safety Certificate"
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
