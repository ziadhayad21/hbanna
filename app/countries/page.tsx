import dynamic from "next/dynamic";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import RevealObserver from "@/components/RevealObserver";
import SvgDefs from "@/components/SvgDefs";
import Cta from "@/components/Cta";

const GlobalMarkets = dynamic(() => import("@/components/GlobalMarkets"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Export Countries & Global Trade Corridors — Egyptian Export Center (HBanna)",
  description:
    "Explore HBanna's international export corridors connecting Egyptian agricultural harvests to tier-one importers across Europe, Africa, Asia, Eurasia, and the Americas.",
};

export default function CountriesPage() {
  return (
    <>
      <SvgDefs />
      <Nav solidOnLoad />
      <main className="subpage countries-page">
        <GlobalMarkets />
        <Cta secondaryLabel="Explore Products" secondaryHref="/products" />
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}
