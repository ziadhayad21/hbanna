"use client";

import { useLanguage } from "@/contexts/LanguageProvider";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-pad">
      <div className="about-grid">
        <div className="about-text reveal">
          <span className="eyebrow">{t.about.eyebrow}</span>
          <h2 className="serif">{t.about.title}</h2>
          <p className="about-lead">{t.about.lead}</p>
          <div className="about-body">
            <p>{t.about.body1}</p>
            <p>{t.about.body2}</p>
          </div>
          <ul className="about-pills" aria-label={t.about.eyebrow}>
            <li>{t.about.pill1}</li>
            <li>{t.about.pill2}</li>
            <li>{t.about.pill3}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
