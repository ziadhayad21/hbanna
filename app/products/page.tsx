import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import ProductsContent from "@/components/ProductsContent";
import RevealObserver from "@/components/RevealObserver";
import SvgDefs from "@/components/SvgDefs";

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
        <ProductsContent />
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}
