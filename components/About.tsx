"use client";

import { useLanguage } from "@/contexts/LanguageProvider";

export default function About() {
  const { t } = useLanguage();

  const proofs = [
    {
      title: "Integrated Supply Chain",
      desc: "Full visibility and control from seed to shipment, guaranteeing reliability.",
    },
    {
      title: "Own & Partner Farms",
      desc: "Extensive agricultural footprint across Egypt’s most fertile regions.",
    },
    {
      title: "Advanced Packing",
      desc: "High-capacity, automated facilities for dates and fresh produce.",
    },
    {
      title: "Quality Control",
      desc: "Strict adherence to GlobalG.A.P, BRCGS, and ISO standards.",
    },
    {
      title: "Cold Chain Integrity",
      desc: "Unbroken temperature control from harvest to final destination.",
    },
    {
      title: "Export Logistics",
      desc: "In-house experts managing global shipping and customs clearance.",
    },
    {
      title: "Consistent Supply",
      desc: "Scalable volume capabilities tailored for large international buyers.",
    },
  ];

  return (
    <section id="about" className="section-pad" style={{ background: '#FBF1E5' }}>
      <div className="container">
        <div className="about-text reveal" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <span className="eyebrow" style={{ color: 'var(--orange)', marginBottom: '24px', display: 'inline-block', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            Why HBanna
          </span>
          <h2 className="serif" style={{ fontSize: 'clamp(36px, 4vw, 56px)', color: 'var(--brown)', marginBottom: '40px', lineHeight: 1.1 }}>
            Operational Excellence from Farm to Global Markets
          </h2>
        </div>

        <div className="proof-grid reveal-stagger" style={{ marginTop: '60px' }}>
          {proofs.map((proof, i) => (
            <div key={i} className="proof-card">
              <div className="proof-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h3 className="serif">{proof.title}</h3>
              <p>{proof.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
