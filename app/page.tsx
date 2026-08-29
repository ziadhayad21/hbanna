import About from "@/components/About";
import Categories from "@/components/Categories";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Cta from "@/components/Cta";
import Facilities from "@/components/Facilities";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Marquee from "@/components/Marquee";
import Metrics from "@/components/Metrics";
import Nav from "@/components/Nav";
import RevealObserver from "@/components/RevealObserver";
import Showcase from "@/components/Showcase";
import SvgDefs from "@/components/SvgDefs";

import TrustBar from "@/components/TrustBar";
import SeasonalityCalendar from "@/components/SeasonalityCalendar";
import GlobalMarkets from "@/components/GlobalMarkets";

export default function HomePage() {
  return (
    <>
      <SvgDefs />
      <Nav />
      <Hero />
      <TrustBar />
      <Marquee />
      <Metrics />
      <Showcase />
      <Categories />
      <SeasonalityCalendar />
      <Facilities />
      <GlobalMarkets />
      <Certifications />
      <Journey />
      <About />
      <Cta />
      <Contact />
      <Footer />
      <RevealObserver />
    </>
  );
}
