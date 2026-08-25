import Image from "next/image";

export default function Facilities() {
  return (
    <section id="facilities">
      <span className="eyebrow reveal">Our Infrastructure</span>
      <h2 className="serif reveal">Built for Scale. Engineered for Freshness.</h2>
      <div className="fac-grid">
        <div className="fac-panel reveal">
          <div className="fac-img">
            <div className="ph-inner">
              <Image
                src="/images/dates-factory.jpg"
                alt="Modern dates processing factory"
                width={800}
                height={608}
              />
            </div>
          </div>
          <div className="fac-caption">
            <h3>Two Modern Dates Factories</h3>
            <p>
              Purpose-built facilities for processing and packing premium
              Egyptian dates.
            </p>
          </div>
        </div>
        <div className="fac-panel reveal">
          <div className="fac-img">
            <div className="ph-inner">
              <Image
                src="/images/citrus-packing.jpg"
                alt="Citrus packing house facility"
                width={800}
                height={608}
              />
            </div>
          </div>
          <div className="fac-caption">
            <h3>Dedicated Citrus Packing House</h3>
            <p>
              State-of-the-art packing infrastructure ensuring freshness from
              grove to port.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
