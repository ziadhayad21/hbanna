"use client";

import Image from "next/image";
import Link from "next/link";
import { productCategories } from "@/lib/products";
import { useLanguage } from "@/contexts/LanguageProvider";

const CAT_KEY: Record<string, keyof ReturnType<typeof useLanguage>["t"]["cats"]> = {
  citrus: "citrus",
  dates: "dates",
  "fresh-fruits": "freshFruits",
  "fresh-vegetables": "freshVegetables",
  "herbs-spices": "herbsSpices",
  "pulses-grains": "pulsesGrains",
};

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="logo">
            <Link href="/">
              <Image
                className="logo-img"
                src="/hbanna-logo.png"
                alt={t.nav.logoAlt}
                width={280}
                height={140}
                sizes="280px"
              />
            </Link>
          </div>
          <p>{t.footer.blurb}</p>
        </div>
        <div className="footer-col">
          <h4>{t.footer.products}</h4>
          <ul>
            {productCategories.map((cat) => {
              const key = CAT_KEY[cat.slug];
              return (
                <li key={cat.slug}>
                  <Link href={`/products/${cat.slug}`}>
                    {key ? t.cats[key] : cat.shortLabel}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="footer-col">
          <h4>{t.footer.company}</h4>
          <ul>
            <li>
              <Link href="/#about">{t.footer.about}</Link>
            </li>
            <li>
              <Link href="/products">{t.footer.allProducts}</Link>
            </li>
            <li>
              <Link href="/countries">Export Countries</Link>
            </li>
            <li>
              <Link href="/calendar">Sourcing Calendar</Link>
            </li>
            <li>
              <Link href="/#journey">{t.footer.process}</Link>
            </li>
            <li>
              <Link href="/#facilities">{t.footer.facilities}</Link>
            </li>
            <li>
              <Link href="/#certifications">{t.footer.quality}</Link>
            </li>
            <li>
              <Link href="/contact">{t.footer.contact}</Link>
            </li>
          </ul>
        </div>
        <div className="footer-col footer-form">
          <h4>{t.footer.inquiries}</h4>
          <p>{t.footer.inquiriesBody}</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
            <Link href="/contact" className="btn btn-primary">
              {t.footer.openForm}
            </Link>
            <a href="https://wa.me/201158898866" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'inherit', textDecoration: 'none', fontWeight: 500 }}>
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ width: '20px', height: '20px' }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>{t.footer.copyright}</p>
        <span className="footer-tagline">{t.footer.tagline}</span>
      </div>
    </footer>
  );
}
