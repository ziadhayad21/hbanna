"use client";

import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { useLanguage } from "@/contexts/LanguageProvider";
import { getTranslatedProducts } from "@/lib/i18n/products";

export default function ProductsContent() {
  const { t, locale } = useLanguage();
  const products = getTranslatedProducts(locale);

  return (
    <>
      <section className="subpage-intro section-pad">
        <PageHero
          eyebrow={t.productsPage.eyebrow}
          title={t.productsPage.title}
          description={t.productsPage.desc}
          crumbs={[
            { label: t.nav.home, href: "/" },
            { label: t.nav.products },
          ]}
        />
      </section>

      <section className="section-pad products-index">
        <div className="products-index-grid reveal-stagger">
          {products.map((cat, idx) => {
            return (
              <Link
                key={cat.slug}
                href={`/products/${cat.slug}`}
                className="product-index-card"
              >
                <div className="product-index-media">
                  <Image
                    src={cat.image}
                    alt={cat.alt}
                    width={640}
                    height={420}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 640px"
                    priority={idx < 2}
                  />
                </div>
                <div className="product-index-body">
                  <span className="product-index-num">{cat.num}</span>
                  <h2 className="serif">{cat.title}</h2>
                  <p>{cat.description}</p>
                  <span className="cat-link">{t.productsPage.viewCategory}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="subpage-cta section-pad">
        <div className="subpage-cta-inner reveal">
          <span className="eyebrow">{t.productsPage.ctaEyebrow}</span>
          <h2 className="serif">{t.productsPage.ctaTitle}</h2>
          <div className="cta-actions">
            <Link href="/contact" className="btn btn-primary">
              {t.productsPage.ctaContact}
            </Link>
            <Link href="/#about" className="btn btn-ghost">
              {t.productsPage.ctaAbout}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
