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
      <div className="cert-row reveal-stagger">
        <div className="cert-mark">
          <div className="cert-badge">
            ISO
            <br />
            22000
          </div>
          <span className="cert-name">Food Safety Management</span>
        </div>
        <div className="cert-mark">
          <div className="cert-badge">
            ISO
            <br />
            9001
          </div>
          <span className="cert-name">Quality Management</span>
        </div>
      </div>
      <p className="cert-sub reveal">{t.certs.body}</p>
    </section>
  );
}
