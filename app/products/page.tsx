import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import RevealObserver from "@/components/RevealObserver";
import SvgDefs from "@/components/SvgDefs";
import { productCategories } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products — Egyptian Export Center (HBanna)",
  description:
    "Explore HBanna's full range of Egyptian agricultural exports: citrus, dates, fresh fruits, vegetables, herbs & spices, pulses and grains.",
};

export default function ProductsPage() {
  return (
    <>
      <SvgDefs />
      <Nav solidOnLoad />
      <main className="subpage">
        <section className="subpage-intro section-pad">
          <PageHero
            eyebrow="Our Products"
            title="Premium Egyptian Agricultural Products."
            description="Browse our export categories — from citrus and dates to fresh produce, herbs, pulses, and grains. Select a category to see the full product range."
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Products" },
            ]}
          />
        </section>

        <section className="section-pad products-index">
          <div className="products-index-grid reveal-stagger">
            {productCategories.map((cat) => (
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
                  />
                </div>
                <div className="product-index-body">
                  <span className="product-index-num">{cat.num}</span>
                  <h2 className="serif">{cat.title}</h2>
                  <p>{cat.description}</p>
                  <span className="cat-link">View category</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="subpage-cta section-pad">
          <div className="subpage-cta-inner reveal">
            <span className="eyebrow">Trade Inquiries</span>
            <h2 className="serif">Need volumes, specs, or shipping options?</h2>
            <div className="cta-actions">
              <Link href="/#contact" className="btn btn-primary">
                Contact Export Desk
              </Link>
              <Link href="/about" className="btn btn-ghost">
                About HBanna
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}
