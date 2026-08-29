import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import RevealObserver from "@/components/RevealObserver";
import {
  productCategories,
  getCategoryBySlug,
  getProductBySlug,
} from "@/lib/products";

type PageProps = {
  params: { slug: string; productSlug: string };
};

export function generateStaticParams() {
  const params: { slug: string; productSlug: string }[] = [];
  for (const cat of productCategories) {
    for (const prod of cat.products) {
      if (prod.slug) {
        params.push({ slug: cat.slug, productSlug: prod.slug });
      }
    }
  }
  return params;
}

export function generateMetadata({ params }: PageProps): Metadata {
  const product = getProductBySlug(params.slug, params.productSlug);
  if (!product) {
    return { title: "Product Details — HBanna" };
  }
  return {
    title: `${product.name} — Egyptian Export Center (HBanna)`,
    description: product.info || `Export details for ${product.name}`,
  };
}

export default function ProductDetailPage({ params }: PageProps) {
  const category = getCategoryBySlug(params.slug);
  const product = getProductBySlug(params.slug, params.productSlug);
  
  if (!category || !product) notFound();

  return (
    <>
      <Nav solidOnLoad />
      <main className="subpage" style={{ background: 'var(--cream)' }}>
        <section className="subpage-intro section-pad">
          <PageHero
            eyebrow="Product Details"
            title={product.name}
            description={product.info || ""}
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: category.title, href: `/products/${category.slug}` },
              { label: product.name },
            ]}
          />
        </section>

        <section className="section-pad" style={{ paddingTop: 0 }}>
          <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ display: 'flex', gap: '60px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
              
              <div style={{ flex: '1 1 400px', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--line-light)', background: 'var(--white)' }}>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={600}
                  height={600}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
              
              <div style={{ flex: '1 1 400px', background: 'var(--white)', padding: '40px', borderRadius: '16px', border: '1px solid var(--line-light)' }}>
                <h3 className="serif" style={{ fontSize: '28px', color: 'var(--brown)', marginBottom: '24px' }}>Export Specifications</h3>
                
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--line-light)', paddingBottom: '8px' }}>
                    <span style={{ color: 'var(--muted)', fontSize: '14px' }}>Varieties</span>
                    <span style={{ color: 'var(--ink)', fontWeight: 600, fontSize: '14px', textAlign: 'right', maxWidth: '60%' }}>{product.varieties || "N/A"}</span>
                  </li>
                  <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--line-light)', paddingBottom: '8px' }}>
                    <span style={{ color: 'var(--muted)', fontSize: '14px' }}>Origin</span>
                    <span style={{ color: 'var(--ink)', fontWeight: 600, fontSize: '14px', textAlign: 'right', maxWidth: '60%' }}>{product.origin || "Egypt"}</span>
                  </li>
                  <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--line-light)', paddingBottom: '8px' }}>
                    <span style={{ color: 'var(--muted)', fontSize: '14px' }}>Season</span>
                    <span style={{ color: 'var(--ink)', fontWeight: 600, fontSize: '14px', textAlign: 'right', maxWidth: '60%' }}>{product.season || "N/A"}</span>
                  </li>
                  <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--line-light)', paddingBottom: '8px' }}>
                    <span style={{ color: 'var(--muted)', fontSize: '14px' }}>Sizes / Grades</span>
                    <span style={{ color: 'var(--ink)', fontWeight: 600, fontSize: '14px', textAlign: 'right', maxWidth: '60%' }}>{product.sizes || "N/A"}</span>
                  </li>
                  <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--line-light)', paddingBottom: '8px' }}>
                    <span style={{ color: 'var(--muted)', fontSize: '14px' }}>Packaging</span>
                    <span style={{ color: 'var(--ink)', fontWeight: 600, fontSize: '14px', textAlign: 'right', maxWidth: '60%' }}>{product.packaging || "N/A"}</span>
                  </li>
                  <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--line-light)', paddingBottom: '8px' }}>
                    <span style={{ color: 'var(--muted)', fontSize: '14px' }}>Shelf Life</span>
                    <span style={{ color: 'var(--ink)', fontWeight: 600, fontSize: '14px', textAlign: 'right', maxWidth: '60%' }}>{product.shelfLife || "N/A"}</span>
                  </li>
                  <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--line-light)', paddingBottom: '8px' }}>
                    <span style={{ color: 'var(--muted)', fontSize: '14px' }}>Certifications</span>
                    <span style={{ color: 'var(--ink)', fontWeight: 600, fontSize: '14px', textAlign: 'right', maxWidth: '60%' }}>{product.certifications || "N/A"}</span>
                  </li>
                  <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--line-light)', paddingBottom: '8px' }}>
                    <span style={{ color: 'var(--muted)', fontSize: '14px' }}>Export Markets</span>
                    <span style={{ color: 'var(--ink)', fontWeight: 600, fontSize: '14px', textAlign: 'right', maxWidth: '60%' }}>{product.exportMarkets || "N/A"}</span>
                  </li>
                </ul>

                <div style={{ marginTop: '40px', display: 'flex', gap: '16px', flexDirection: 'column' }}>
                  <Link href={`/#contact`} className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                    Request a Quote
                  </Link>
                  <Link href={`/products/${category.slug}`} className="btn btn-ghost" style={{ width: '100%', textAlign: 'center' }}>
                    Back to {category.title}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}
