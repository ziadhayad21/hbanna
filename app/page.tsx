import dynamic from "next/dynamic";
import About from "@/components/About";
import Categories from "@/components/Categories";
import Certifications from "@/components/Certifications";
import Cta from "@/components/Cta";
import Facilities from "@/components/Facilities";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Marquee from "@/components/Marquee";
import Metrics from "@/components/Metrics";
import Nav from "@/components/Nav";
import RevealObserver from "@/components/RevealObserver";
import SvgDefs from "@/components/SvgDefs";

const Showcase = dynamic(() => import("@/components/Showcase"));

export default function HomePage() {
  return (
    <>
      <SvgDefs />
      <Nav isHome />
      <Hero />
      <Marquee />
      <Metrics />
      <About />
      <Categories />
      <Showcase />
      <Journey />
      <Facilities />
      <Certifications />
      <Cta />
      <Footer />
      <RevealObserver />
    </>
  );
}
