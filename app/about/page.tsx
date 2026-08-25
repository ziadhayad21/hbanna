import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import RevealObserver from "@/components/RevealObserver";
import SvgDefs from "@/components/SvgDefs";

export const metadata: Metadata = {
  title: "About Us — Egyptian Export Center (HBanna)",
  description:
    "Since 1992, HBanna has been a vertically integrated Egyptian grower, producer, and exporter of dates, citrus, fruits, vegetables, herbs, pulses, and grains.",
};

export default function AboutPage() {
  return (
    <>
      <SvgDefs />
      <Nav solidOnLoad />
      <main className="subpage">
        <section className="subpage-intro section-pad">
          <PageHero
            eyebrow="Who We Are"
            title="Quality Starts at the Source."
            description="A vertically integrated Egyptian agricultural house — from grove to packing house to global market — since 1992."
            crumbs={[
              { label: "Home", href: "/" },
              { label: "About Us" },
            ]}
          />
        </section>

        <section className="section-pad about-page-main">
          <div className="about-grid">
            <div className="about-text reveal">
              <span className="eyebrow">Our Story</span>
              <h2 className="serif">Growing Excellence. Delivering Trust.</h2>
              <p className="about-lead">
                Since our establishment in 1992, we have been pioneers in the
                cultivation, production, packing, and export of Dates, Citrus,
                Fresh Fruits &amp; Vegetables, Herbs &amp; Spices, Pulses, and
                Grains.
              </p>
              <div className="about-body">
                <p>
                  Our vertically integrated approach lets us oversee every step
                  — from cultivation and harvesting to packing and delivery —
                  ensuring consistent quality, freshness, and reliability
                  throughout the supply chain.
                </p>
                <p>
                  We combine generations of agricultural experience with modern
                  farming techniques, advanced production methods, and strict
                  quality control.
                </p>
              </div>
              <ul className="about-pills" aria-label="Company highlights">
                <li>Vertically integrated</li>
                <li>Own groves &amp; factories</li>
                <li>Export-ready quality</li>
              </ul>
            </div>

            <div className="about-media about-frame reveal">
              <div className="ph-inner">
                <Image
                  src="/images/farm.jpg"
                  alt="Egyptian farm and agricultural groves"
                  width={1100}
                  height={1050}
                  sizes="(max-width: 900px) 100vw, 52vw"
                  priority
                />
              </div>
              <div className="about-media-badge" aria-hidden="true">
                <span className="about-media-badge-year">1992</span>
                <span className="about-media-badge-label">Established</span>
              </div>
            </div>
          </div>
        </section>

        <section className="about-page-points section-pad">
          <div className="about-points-grid reveal-stagger">
            <article className="about-point">
              <span className="about-point-num">01</span>
              <h3 className="serif">From Our Groves</h3>
              <p>
                Cultivation across our own farms and trusted partner growers,
                with oversight from orchard to harvest.
              </p>
            </article>
            <article className="about-point">
              <span className="about-point-num">02</span>
              <h3 className="serif">Modern Facilities</h3>
              <p>
                Two modern dates factories and a dedicated citrus packing house
                engineered for scale and freshness.
              </p>
            </article>
            <article className="about-point">
              <span className="about-point-num">03</span>
              <h3 className="serif">Certified Quality</h3>
              <p>
                International food safety and quality standards backing every
                shipment we send to market.
              </p>
            </article>
          </div>
        </section>

        <section className="subpage-cta section-pad">
          <div className="subpage-cta-inner reveal">
            <span className="eyebrow">Next Step</span>
            <h2 className="serif">Explore our products or talk to trade.</h2>
            <div className="cta-actions">
              <Link href="/products" className="btn btn-primary">
                View Products
              </Link>
              <Link href="/#contact" className="btn btn-ghost">
                Contact Export Desk
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
