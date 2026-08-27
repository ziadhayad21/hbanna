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
import Showcase from "@/components/Showcase";
import SvgDefs from "@/components/SvgDefs";

export default function HomePage() {
  return (
    <>
      <SvgDefs />
      <Nav />
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
