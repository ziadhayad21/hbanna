"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useCallback } from "react";
import type { CategoryProduct } from "@/lib/products";
import { useLanguage } from "@/contexts/LanguageProvider";

type Props = {
  product: CategoryProduct | null;
  onClose: () => void;
};

export default function ProductModal({ product, onClose }: Props) {
  const { t } = useLanguage();
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (product) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [product, handleKey]);

  if (!product) return null;

  const activeMonths = product.harvestMonths ?? [];

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  const quoteHref = product ? `/contact?product=${encodeURIComponent(product.name)}` : "/contact";

  return (
    <div
      ref={overlayRef}
      className="pm-overlay"
      aria-modal="true"
      role="dialog"
      aria-label={`${product.name} details`}
      onClick={handleOverlayClick}
    >
      <div ref={modalRef} className="pm-modal">
        {/* Close button */}
        <button
          className="pm-close"
          onClick={onClose}
          aria-label={t.modal?.close || "Close"}
          type="button"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M2 2l14 14M16 2L2 16" />
          </svg>
        </button>

        <div className="pm-inner">
          {/* LEFT: image */}
          <div className="pm-image-col">
            <div className="pm-image-wrap">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 900px) 100vw, 44vw"
                className="pm-image"
                priority
              />
              <div className="pm-image-overlay" />
              <div className="pm-image-label">{product.name}</div>
            </div>
          </div>

          {/* RIGHT: content */}
          <div className="pm-content-col">
            <div className="pm-content-scroll">
              <span className="pm-eyebrow">{t.modal?.productDetails || "Product Details"}</span>
              <h2 className="pm-title serif">{product.name}</h2>

              {product.description && (
                <p className="pm-description">{product.description}</p>
              )}

              {/* Specifications */}
              {(product.sugarBrix || product.varieties || product.sizes || product.packing || product.productClass) && (
                <div className="pm-specs-block">
                  <span className="pm-detail-label">Specifications</span>
                  <dl className="pm-specs-list">
                    {product.varieties && product.varieties.length > 0 && (
                      <div className="pm-spec-row">
                        <dt className="pm-spec-key">Varieties</dt>
                        <dd className="pm-spec-val">{product.varieties.join(", ")}</dd>
                      </div>
                    )}
                    {product.sugarBrix && (
                      <div className="pm-spec-row">
                        <dt className="pm-spec-key">Sugar (Brix)</dt>
                        <dd className="pm-spec-val">{product.sugarBrix}</dd>
                      </div>
                    )}
                    {product.sizes && (
                      <div className="pm-spec-row">
                        <dt className="pm-spec-key">Sizes</dt>
                        <dd className="pm-spec-val">{product.sizes}</dd>
                      </div>
                    )}
                    {product.productClass && (
                      <div className="pm-spec-row">
                        <dt className="pm-spec-key">Class</dt>
                        <dd className="pm-spec-val">{product.productClass}</dd>
                      </div>
                    )}
                    {product.packing && (
                      <div className="pm-spec-row">
                        <dt className="pm-spec-key">Packing</dt>
                        <dd className="pm-spec-val">{product.packing}</dd>
                      </div>
                    )}
                  </dl>
                </div>
              )}

              {/* Season bar */}
              <div className="pm-season-block">
                <span className="pm-detail-label">{t.modal?.harvestSeason || "Harvest / Availability Season"}</span>
                <div className="pm-months" role="list" aria-label="Availability by month">
                  {(t.calendarPage?.months || ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]).map((month, idx) => {
                    const active = activeMonths.includes(idx + 1);
                    return (
                      <div
                        key={month + idx}
                        className={`pm-month${active ? " pm-month--active" : ""}`}
                        role="listitem"
                        aria-label={`${month}: ${active ? "available" : "not available"}`}
                      >
                        <span className="pm-month-label">{month}</span>
                        <div className="pm-month-dot" />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* CTA */}
              <div className="pm-cta-row">
                <Link href={quoteHref} className="pm-cta-btn" onClick={onClose}>
                  {t.modal?.requestQuote || "Request a Quote"}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </Link>
                <button type="button" className="pm-close-text" onClick={onClose}>
                  {t.modal?.close || "Close"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
