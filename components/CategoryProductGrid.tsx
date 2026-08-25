"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { CategoryProduct } from "@/lib/products";

type Props = {
  summary: string;
  products: CategoryProduct[];
};

function chunkProducts(items: CategoryProduct[], size: number) {
  const slides: CategoryProduct[][] = [];
  for (let i = 0; i < items.length; i += size) {
    slides.push(items.slice(i, i + size));
  }
  return slides;
}

function getCardsPerSlide(): number {
  if (typeof window === 'undefined') return 3;
  if (window.innerWidth <= 640) return 1;
  if (window.innerWidth <= 1024) return 2;
  return 3;
}

function ProductCard({ product }: { product: CategoryProduct }) {
  return (
    <article className="product-card">
      <div className="product-card-media">
        <Image
          src={product.image}
          alt={product.name}
          width={480}
          height={360}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="product-card-body">
        <h3 className="serif">{product.name}</h3>
        {product.info ? (
          <p className="product-card-info">{product.info}</p>
        ) : null}
      </div>
    </article>
  );
}

export default function CategoryProductGrid({ summary, products }: Props) {
  const [cardsPerSlide, setCardsPerSlide] = useState(3);
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = chunkProducts(products, cardsPerSlide);
  const slideCount = slides.length;
  const atStart = activeSlide === 0;
  const atEnd = activeSlide === slideCount - 1;

  useEffect(() => {
    const handleResize = () => {
      setCardsPerSlide(getCardsPerSlide());
      setActiveSlide(0);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [products.length]);

  const goToSlide = useCallback(
    (index: number) => {
      setActiveSlide(Math.max(0, Math.min(index, slideCount - 1)));
    },
    [slideCount]
  );

  const goPrev = useCallback(() => {
    goToSlide(activeSlide - 1);
  }, [activeSlide, goToSlide]);

  const goNext = useCallback(() => {
    goToSlide(activeSlide + 1);
  }, [activeSlide, goToSlide]);

  return (
    <div className="product-catalog">
      <div className="product-catalog-carousel reveal">
        <div className="product-catalog-viewport">
          <div
            className="product-catalog-track"
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            aria-live="polite"
          >
            {slides.map((slideProducts, slideIndex) => (
              <div
                key={slideProducts.map((item) => item.name).join("-")}
                className="product-catalog-slide"
                aria-hidden={slideIndex !== activeSlide}
              >
                <div 
                  className="product-catalog-grid"
                  style={{ 
                    gridTemplateColumns: `repeat(${cardsPerSlide}, minmax(0, 1fr))` 
                  }}
                >
                  {slideProducts.map((product) => (
                    <ProductCard key={product.name} product={product} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {slideCount > 1 && (
          <div className="product-catalog-nav-container">
            <button
              className="product-catalog-nav-btn product-catalog-nav-prev"
              onClick={goPrev}
              disabled={atStart}
              aria-label="Previous slide"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <span className="product-catalog-nav-counter">
              {activeSlide + 1} / {slideCount}
            </span>
            <button
              className="product-catalog-nav-btn product-catalog-nav-next"
              onClick={goNext}
              disabled={atEnd}
              aria-label="Next slide"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
