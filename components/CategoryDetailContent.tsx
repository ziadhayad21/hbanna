"use client";

import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CategoryProductGrid from "@/components/CategoryProductGrid";
import { useLanguage } from "@/contexts/LanguageProvider";
import { getTranslatedProducts } from "@/lib/i18n/products";

export default function CategoryDetailContent({ slug }: { slug: string }) {
  const { t, locale } = useLanguage();
  const products = getTranslatedProducts(locale);
  
  const category = products.find(c => c.slug === slug);
  if (!category) return null;

  const others = products.filter((c) => c.slug !== category.slug);

  return (
    <>
      <section className="subpage-intro section-pad">
        <PageHero
          eyebrow={`Category ${category.num}`}
          title={category.title}
          description={category.description}
          crumbs={[
            { label: t.nav.home, href: "/" },
            { label: t.nav.products, href: "/products" },
            { label: category.title },
          ]}
        />
      </section>

      <section className="section-pad category-detail">
        <CategoryProductGrid
          summary={category.summary}
          products={category.products}
          categorySlug={category.slug}
        />
        <div className="category-detail-actions category-detail-actions-below">
          <Link href="/contact" className="btn btn-primary">
            {t.categoryPage.request}
          </Link>
          <Link href="/products" className="btn btn-ghost">
            {t.categoryPage.all}
          </Link>
        </div>
      </section>

      <section className="section-pad related-categories">
        <span className="eyebrow reveal">{t.categoryPage.more}</span>
        <h2 className="serif reveal">{t.categoryPage.continue}</h2>
        <div className="related-grid reveal-stagger">
          {others.map((cat) => {
            return (
              <Link
                key={cat.slug}
                href={`/products/${cat.slug}`}
                className="related-card"
              >
                <div className="related-card-media">
                  <Image
                    src={cat.image}
                    alt={cat.alt}
                    width={320}
                    height={200}
                    sizes="(max-width: 640px) 100vw, 320px"
                  />
                </div>
                <div className="related-card-body">
                  <span>{cat.num}</span>
                  <h3 className="serif">{cat.title}</h3>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
