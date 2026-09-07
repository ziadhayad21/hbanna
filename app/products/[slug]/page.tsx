import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CategoryDetailContent from "@/components/CategoryDetailContent";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import RevealObserver from "@/components/RevealObserver";
import SvgDefs from "@/components/SvgDefs";
import {
  getAllCategorySlugs,
  getCategoryBySlug,
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



  return (
    <>
      <SvgDefs />
      <Nav solidOnLoad />
      <main className="subpage">
        <CategoryDetailContent slug={category.slug} />
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}
