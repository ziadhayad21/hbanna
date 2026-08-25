import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="about-grid">
        <div className="about-text reveal">
          <span className="eyebrow">Who We Are</span>
          <h2 className="serif">Quality Starts at the Source.</h2>
          <p className="about-lead">
            Since our establishment in 1992, we have been pioneers in the
            cultivation, production, packing, and export of Dates, Citrus, Fresh
            Fruits &amp; Vegetables, Herbs &amp; Spices, Pulses, and Grains.
          </p>
          <div className="about-body">
            <p>
              Our vertically integrated approach lets us oversee every step —
              from cultivation and harvesting to packing and delivery — ensuring
              consistent quality, freshness, and reliability throughout the
              supply chain.
            </p>
            <p>
              We combine generations of agricultural experience with modern
              farming techniques, advanced production methods, and strict quality
              control.
            </p>
          </div>
          <ul className="about-pills" aria-label="Company highlights">
            <li>Vertically integrated</li>
            <li>Own groves &amp; factories</li>
            <li>Export-ready quality</li>
          </ul>
          <div className="about-actions">
            <Link href="/about" className="btn btn-ghost">
              Learn More About Us
            </Link>
          </div>
        </div>

        <div className="about-media about-frame reveal">
          <div className="ph-inner">
            <Image
              src="/images/farm.jpg"
              alt="Egyptian farm and agricultural groves"
              width={1100}
              height={1050}
              sizes="(max-width: 900px) 100vw, 52vw"
            />
          </div>
          <div className="about-media-badge" aria-hidden="true">
            <span className="about-media-badge-year">1992</span>
            <span className="about-media-badge-label">Established</span>
          </div>
        </div>
      </div>
    </section>
  );
}
