"use client";

import Link from "next/link";
import Image from "next/image";
import { productCategories } from "@/lib/products";
import { useLanguage } from "@/contexts/LanguageProvider";

const CAT_KEY: Record<string, "citrus" | "dates" | "freshFruits" | "freshVegetables" | "herbsSpices" | "pulsesGrains"> = {
  citrus: "citrus",
  dates: "dates",
  "fresh-fruits": "freshFruits",
  "fresh-vegetables": "freshVegetables",
  "herbs-spices": "herbsSpices",
  "pulses-grains": "pulsesGrains",
};

type Props = {
  showViewAll?: boolean;
  headingReveal?: boolean;
};

export default function CategoryGrid({
  showViewAll = false,
  headingReveal = true,
}: Props) {
  const { t } = useLanguage();
  const reveal = headingReveal ? " reveal" : "";
  const stagger = headingReveal ? " reveal-stagger" : " in-view";

  return (
    <>
      <span className={`eyebrow${reveal}`}>{t.categories.eyebrow}</span>
      <h2 className={`serif${reveal}`}>{t.categories.title}</h2>
      <div className={`cat-grid${stagger}`}>
        {productCategories.map((cat, idx) => {
          const key = CAT_KEY[cat.slug];
          return (
            <Link
              href={`/products/${cat.slug}`}
              className="cat-card"
              key={cat.slug}
            >
              <span className="cat-num">{cat.num}</span>
              <div className="cat-visual">
                <Image
                  src={cat.image}
                  alt={cat.alt}
                  width={400}
                  height={140}
                  sizes="(max-width: 600px) 90vw, (max-width: 1024px) 45vw, 320px"
                  priority={idx < 2}
                />
              </div>
              <h3>{key ? t.cats[key] : cat.title}</h3>
              <p>{cat.summary}</p>
              <span className="cat-link">{t.categories.viewProducts}</span>
            </Link>
          );
        })}
      </div>
      {showViewAll ? (
        <div className="section-cta-row">
          <Link href="/products" className="btn btn-ghost">
            {t.categories.viewAll}
          </Link>
        </div>
      ) : null}
    </>
  );
}
