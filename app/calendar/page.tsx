import dynamic from "next/dynamic";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import RevealObserver from "@/components/RevealObserver";
import SvgDefs from "@/components/SvgDefs";
import Cta from "@/components/Cta";

const SeasonalityCalendar = dynamic(
  () => import("@/components/SeasonalityCalendar"),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "Seasonal Availability & Harvest Calendar — Egyptian Export Center (HBanna)",
  description:
    "Direct visibility into Egyptian harvest cycles, peak export windows, and cold-storage availability across all 39 export varieties. Plan your annual import schedule with HBanna.",
};

export default function CalendarPage() {
  return (
    <>
      <SvgDefs />
      <Nav solidOnLoad />
      <main className="subpage calendar-page">
        <SeasonalityCalendar />
        <Cta secondaryLabel="Explore Products" secondaryHref="/products" />
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}
