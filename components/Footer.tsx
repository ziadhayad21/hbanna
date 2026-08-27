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
          <Link href="/contact" className="btn btn-primary">
            {t.footer.openForm}
          </Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>{t.footer.copyright}</p>
        <span className="footer-tagline">{t.footer.tagline}</span>
      </div>
    </footer>
  );
}
