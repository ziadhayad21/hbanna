"use client";

import { useLanguage } from "@/contexts/LanguageProvider";

export default function TrustBar() {
  const { t } = useLanguage();

  const facts = [
    {
      label: "Experience",
      value: "34 Years",
      desc: "Growing & Exporting Since 1992",
    },
    {
      label: "Infrastructure",
      value: "3 Facilities",
      desc: "2 Dates Factories & 1 Citrus House",
    },
    {
      label: "Global Reach",
      value: "23 Markets",
      desc: "Exporting to Europe, Asia & MENA",
    },
    {
      label: "Quality",
      value: "ISO Certified",
      desc: "ISO 22000 & 9001 Food Safety",
    },
  ];

  return (
    <div className="trust-bar">
      <div className="container trust-bar-grid">
        {facts.map((fact, i) => (
          <div key={i} className="trust-fact reveal-stagger">
            <span className="trust-label">{fact.label}</span>
            <strong className="trust-value serif">{fact.value}</strong>
            <span className="trust-desc">{fact.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
