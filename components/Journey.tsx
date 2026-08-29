"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageProvider";

export default function Journey() {
  const { t } = useLanguage();

  const steps = [
    {
      id: "01",
      title: "Farm",
      desc: "Cultivated across our own groves and trusted partner farms in Egypt's most fertile regions.",
      img: "/images/farm.jpg"
    },
    {
      id: "02",
      title: "Harvest",
      desc: "Hand-selected at peak ripeness to ensure optimal flavor, color, and nutritional value.",
      img: "/images/orange.jpg"
    },
    {
      id: "03",
      title: "Sorting & Grading",
      desc: "Advanced optical sorting guarantees consistent sizing and eliminates defects.",
      img: "/images/citrus-packing.jpg"
    },
    {
      id: "04",
      title: "Packing",
      desc: "Packed in our modern facilities using materials designed for long-distance transit.",
      img: "/images/dates-factory.jpg"
    },
    {
      id: "05",
      title: "Quality Control",
      desc: "Every batch verified under strict GlobalG.A.P., BRCGS, and ISO standards.",
      img: "/images/citrus.jpg"
    },
    {
      id: "06",
      title: "Cold Storage",
      desc: "Immediate temperature reduction and unbroken cold chain management.",
      img: "/images/grapes.jpg"
    },
    {
      id: "07",
      title: "Export",
      desc: "Delivered fresh and reliable to global markets via sea and air freight.",
      img: "/images/mango.jpg" // placeholder for export ship/logistics
    }
  ];

  return (
    <section id="journey" style={{ padding: '120px 0', background: 'var(--bg)', overflow: 'hidden' }}>
      <div className="container">
        <header style={{ marginBottom: '60px', maxWidth: '600px' }}>
          <span className="eyebrow reveal" style={{ color: 'var(--orange)' }}>Farm to Port</span>
          <h2 className="serif reveal" style={{ fontSize: 'clamp(36px, 4vw, 56px)', color: 'var(--brown)', marginTop: '16px' }}>
            The Journey of Quality
          </h2>
          <p className="reveal" style={{ fontSize: '18px', color: 'var(--muted)', marginTop: '24px', lineHeight: 1.6 }}>
            Every step from the soil to your facility is meticulously managed to ensure our produce arrives in pristine condition.
          </p>
        </header>
      </div>

      <div className="journey-scroller reveal-stagger">
        <div className="journey-track">
          {steps.map((step, idx) => (
            <article key={step.id} className="journey-card">
              <div className="journey-card-media">
                <Image
                  src={step.img}
                  alt={step.title}
                  width={400}
                  height={500}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div className="journey-step-badge">{step.id}</div>
              </div>
              <div className="journey-card-body">
                <h3 className="serif">{step.title}</h3>
                <p>{step.desc}</p>
              </div>
              {idx < steps.length - 1 && (
                <div className="journey-connector">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
