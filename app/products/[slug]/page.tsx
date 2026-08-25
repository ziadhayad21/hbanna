import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CategoryProductGrid from "@/components/CategoryProductGrid";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import RevealObserver from "@/components/RevealObserver";
import SvgDefs from "@/components/SvgDefs";
import {
  getAllCategorySlugs,
  getCategoryBySlug,
  productCategories,
} from "@/lib/products";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getAllCategorySlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const category = getCategoryBySlug(params.slug);
  if (!category) {
    return { title: "Product Category — HBanna" };
  }
  return {
    title: `${category.title} — Egyptian Export Center (HBanna)`,
    description: category.description,
  };
}

export default function ProductCategoryPage({ params }: PageProps) {
  const category = getCategoryBySlug(params.slug);
  if (!category) notFound();

  const others = productCategories.filter((c) => c.slug !== category.slug);

  return (
    <>
      <SvgDefs />
      <Nav solidOnLoad />
      <main className="subpage">
        <section className="subpage-intro section-pad">
          <PageHero
            eyebrow={`Category ${category.num}`}
            title={category.title}
            description={category.description}
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: category.title },
            ]}
          />
        </section>

        <section className="section-pad category-detail">
          <CategoryProductGrid
            summary={category.summary}
            products={category.products}
          />
          <div className="category-detail-actions category-detail-actions-below">
            <Link href="/#contact" className="btn btn-primary">
              Request Availability
            </Link>
            <Link href="/products" className="btn btn-ghost">
              All Categories
            </Link>
          </div>
        </section>

        <section className="section-pad related-categories">
          <span className="eyebrow reveal">More Categories</span>
          <h2 className="serif reveal">Continue exploring our range</h2>
          <div className="related-grid reveal-stagger">
            {others.map((cat) => (
              <Link
                key={cat.slug}
                href={`/products/${cat.slug}`}
                className="related-card"
              >
                <div className="related-card-media">
                  <Image src={cat.image} alt={cat.alt} width={320} height={200} />
                </div>
                <div className="related-card-body">
                  <span>{cat.num}</span>
                  <h3 className="serif">{cat.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}
