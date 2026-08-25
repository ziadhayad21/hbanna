"use client";

import Image from "next/image";
import { useState } from "react";
import type { CategoryProduct } from "@/lib/products";

type Props = {
  categoryTitle: string;
  fallbackImage: string;
  summary: string;
  products: CategoryProduct[];
};

export default function CategoryProductViewer({
  categoryTitle,
  fallbackImage,
  summary,
  products,
}: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = products[activeIndex] ?? {
    name: categoryTitle,
    image: fallbackImage,
  };

  return (
    <div className="category-detail-grid">
      <div className="category-detail-media about-frame in-view">
        <div className="ph-inner" key={active.image}>
          <Image
            src={active.image}
            alt={active.name}
            width={900}
            height={720}
            priority
            sizes="(max-width: 900px) 100vw, 48vw"
          />
        </div>
        <div className="category-media-caption" aria-live="polite">
          {active.name}
        </div>
      </div>

      <div className="category-detail-copy">
        <span className="eyebrow">Product Range</span>
        <h2 className="serif">What we supply in this category</h2>
        <p className="category-detail-lead">{summary}</p>
        <ul className="product-range-list" role="listbox" aria-label={`${categoryTitle} products`}>
          {products.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <li key={item.name}>
                <button
                  type="button"
                  role="option"
                  aria-selected={isActive}
                  className={`product-range-btn${isActive ? " is-active" : ""}`}
                  onClick={() => setActiveIndex(index)}
                >
                  {item.name}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
