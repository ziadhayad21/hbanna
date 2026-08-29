"use client";

import { useLanguage } from "@/contexts/LanguageProvider";

export default function Certifications() {
  const { t } = useLanguage();

  return (
    <section id="certifications">
      <span className="eyebrow reveal" style={{ color: "var(--orange)" }}>
        {t.certs.eyebrow}
      </span>
      <h2 className="serif reveal">{t.certs.title}</h2>
      
      <div className="cert-list reveal-stagger">
        {[
          { name: "ISO 22000", desc: "Food Safety Management", body: "SGS", valid: "2027", pdf: "/pdfs/iso-22000.pdf" },
          { name: "ISO 9001", desc: "Quality Management", body: "SGS", valid: "2027", pdf: "/pdfs/iso-9001.pdf" },
          { name: "GlobalG.A.P.", desc: "Good Agricultural Practices", body: "Control Union", valid: "2027", pdf: "/pdfs/global-gap.pdf" },
          { name: "BRCGS", desc: "Food Safety Standard", body: "LLOYD'S", valid: "2027", pdf: "/pdfs/brcgs.pdf" },
          { name: "SMETA", desc: "Ethical Trade Audit", body: "Sedex", valid: "2027", pdf: "/pdfs/smeta.pdf" },
        ].map(cert => (
          <div key={cert.name} className="cert-card">
            <div className="cert-card-info">
              <h3 className="cert-card-title serif">{cert.name}</h3>
              <p className="cert-card-desc">{cert.desc}</p>
              <div className="cert-card-meta">
                <span><strong>Body:</strong> {cert.body}</span>
                <span><strong>Valid:</strong> {cert.valid}</span>
              </div>
            </div>
            <a href={cert.pdf} target="_blank" rel="noreferrer" className="cert-card-action btn btn-ghost">
              View Certificate
            </a>
          </div>
        ))}
      </div>

      <p className="cert-sub reveal">{t.certs.body}</p>
    </section>
  );
}
