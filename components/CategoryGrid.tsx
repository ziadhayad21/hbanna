"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageProvider";
import { getTranslatedProducts } from "@/lib/i18n/products";

type Props = {
  showViewAll?: boolean;
  headingReveal?: boolean;
};

export default function CategoryGrid({
  showViewAll = false,
  headingReveal = true,
}: Props) {
  const { t, locale } = useLanguage();
  const products = getTranslatedProducts(locale);
  const reveal = headingReveal ? " reveal" : "";
  const stagger = headingReveal ? " reveal-stagger" : " in-view";

  return (
    <>
      <span className={`eyebrow${reveal}`}>{t.categories.eyebrow}</span>
      <h2 className={`serif${reveal}`}>{t.categories.title}</h2>
      <div className={`cat-grid${stagger}`}>
        {products.map((cat, idx) => {
          return (
            <Link
              href={`/products/${cat.slug}`}
              className="cat-card"
              key={cat.slug}
            >
              <div className="cat-visual">
                <Image
                  src={cat.image}
                  alt={cat.alt}
                  fill
                  sizes="(max-width: 600px) 90vw, (max-width: 1024px) 45vw, 320px"
                  priority={idx < 2}
                  style={{ objectFit: "cover", objectPosition: "center center" }}
                />
              </div>
              <div className="cat-body">
                <h3>{cat.title}</h3>
                <p>{cat.summary}</p>
                <div className="cat-footer">
                  <div className="cat-arrow">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </div>
                  <span className="cat-link">{t.categories.viewProducts}</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      {showViewAll ? (
        <div className="section-cta-row">
          <Link href="/products" className="btn btn-ghost">
            {t.categories.viewAll}
          </Link>
        </div>
      ) : null}
    </>
  );
}
