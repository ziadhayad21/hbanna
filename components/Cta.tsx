"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageProvider";

type CtaProps = {
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function Cta({ secondaryLabel, secondaryHref }: CtaProps = {}) {
  const { t } = useLanguage();

  const secLabel = secondaryLabel ?? (t.hero.ctaProducts || "Explore Products");
  const secHref = secondaryHref ?? "/products";

  return (
    <section id="cta">
      <svg className="cta-botanical" viewBox="0 0 200 200" fill="none">
        <circle cx="100" cy="100" r="90" stroke="#EC7914" strokeWidth="0.8" />
        <path
          d="M100 10c0 50-30 80-70 90 40 10 70 40 70 90 0-50 30-80 70-90-40-10-70-40-70-90Z"
          stroke="#F4A04A"
          strokeWidth="0.6"
          fill="none"
        />
        <circle cx="100" cy="100" r="55" stroke="#EC7914" strokeWidth="0.4" />
      </svg>
      <svg className="cta-botanical-right" viewBox="0 0 200 200" fill="none">
        <circle cx="100" cy="100" r="90" stroke="#EC7914" strokeWidth="0.6" />
        <path
          d="M100 10c0 50-30 80-70 90 40 10 70 40 70 90 0-50 30-80 70-90-40-10-70-40-70-90Z"
          stroke="#F4A04A"
          strokeWidth="0.5"
          fill="none"
        />
      </svg>
      <span className="eyebrow reveal">{t.cta.eyebrow}</span>
      <h2 className="serif reveal">{t.cta.title}</h2>
      <p className="reveal">{t.cta.body}</p>
      <div className="cta-actions reveal">
        <Link href="/contact" className="btn btn-primary">
          Request a Quote
        </Link>
        {secHref.startsWith("/") ? (
          <Link href={secHref} className="btn btn-ghost">
            {secLabel}
          </Link>
        ) : (
          <a href={secHref} className="btn btn-ghost">
            {secLabel}
          </a>
        )}
      </div>
    </section>
  );
}
