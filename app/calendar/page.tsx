import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import RevealObserver from "@/components/RevealObserver";
import SvgDefs from "@/components/SvgDefs";
import SeasonalityCalendar from "@/components/SeasonalityCalendar";
import Cta from "@/components/Cta";

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
        <Cta />
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}
