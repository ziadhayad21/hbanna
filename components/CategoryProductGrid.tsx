"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { CategoryProduct } from "@/lib/products";
import ProductModal from "@/components/ProductModal";

type Props = {
  summary: string;
  products: CategoryProduct[];
  categorySlug?: string;
};

function chunkProducts(items: CategoryProduct[], size: number) {
  const slides: CategoryProduct[][] = [];
  for (let i = 0; i < items.length; i += size) {
    slides.push(items.slice(i, i + size));
  }
  return slides;
}

function getCardsPerSlide(): number {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth <= 640) return 1;
  if (window.innerWidth <= 1024) return 2;
  return 3;
}

function ProductCard({
  product,
  onClick,
  priority = false,
  loading,
}: {
  product: CategoryProduct;
  onClick: (product: CategoryProduct) => void;
  priority?: boolean;
  loading?: "eager" | "lazy";
}) {
  return (
    <article
      className="product-card product-card--clickable"
      onClick={() => onClick(product)}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${product.name}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick(product);
        }
      }}
    >
      <div className="product-card-media">
        <Image
          src={product.image}
          alt={product.name}
          width={480}
          height={360}
          sizes="(max-width: 640px) 280px, (max-width: 1024px) 45vw, 384px"
          priority={priority}
          {...(priority ? {} : { loading: loading ?? "lazy" })}
        />
        <div className="product-card-hover-hint">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="9" r="7.2" />
            <path d="M9 6v6M6 9h6" />
          </svg>
          <span>View Details</span>
        </div>
      </div>
      <div className="product-card-body">
        <h3 className="serif">{product.name}</h3>
        {product.info ? (
          <p className="product-card-info">{product.info}</p>
        ) : null}
        <span className="product-card-cta">View Details →</span>
      </div>
    </article>
  );
}

export default function CategoryProductGrid({ summary, products }: Props) {
  const [cardsPerSlide, setCardsPerSlide] = useState(3);
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<CategoryProduct | null>(null);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  const slides = chunkProducts(products, cardsPerSlide);
  const slideCount = slides.length;
  const atStart = activeSlide === 0;
  const atEnd = activeSlide === slideCount - 1;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setCardsPerSlide(getCardsPerSlide());
      setActiveSlide(0);
    };

    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
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

  const handleProductClick = useCallback((product: CategoryProduct) => {
    setSelectedProduct(product);
  }, []);

  const handleModalClose = useCallback(() => {
    setSelectedProduct(null);
  }, []);

  return (
    <>
      <div className="product-catalog">
        {/* Desktop carousel (>768px): Only render when not strictly mobile */}
        {isMobile !== true && (
          <div className="product-catalog-carousel product-desktop-carousel reveal in-view">
            <div className="product-catalog-viewport">
              <div
                className="product-catalog-track"
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
                aria-live="polite"
              >
                {slides.map((slideProducts, slideIndex) => {
                  const isCurrent = slideIndex === activeSlide;
                  const isNext = slideIndex === activeSlide + 1;
                  const isPriority = slideIndex === 0;
                  const loadingMode = isCurrent || isNext ? "eager" : "lazy";

                  return (
                    <div
                      key={slideProducts.map((item) => item.name).join("-")}
                      className="product-catalog-slide"
                      aria-hidden={slideIndex !== activeSlide}
                    >
                      <div
                        className="product-catalog-grid"
                        style={{
                          gridTemplateColumns: `repeat(${cardsPerSlide}, minmax(0, 1fr))`,
                        }}
                      >
                        {slideProducts.map((product) => (
                          <ProductCard
                            key={product.name}
                            product={product}
                            onClick={handleProductClick}
                            priority={isPriority}
                            loading={loadingMode}
                          />
                        ))}
                      </div>
                    </div>
                  );
                })}
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
        )}

        {/* Mobile horizontal scroll / swipe (<=768px): Only render when mobile is active */}
        {isMobile === true && (
          <div className="product-mobile-scroll-wrap">
            <div
              className="product-mobile-scroll"
              role="region"
              aria-label="Products horizontal scroll"
              tabIndex={0}
            >
              {products.map((product, idx) => (
                <ProductCard
                  key={product.name}
                  product={product}
                  onClick={handleProductClick}
                  priority={idx < 2}
                  loading={idx < 3 ? "eager" : "lazy"}
                />
              ))}
            </div>
            <div className="product-mobile-swipe-hint" aria-hidden="true">
              <span>Swipe to explore {products.length} products</span>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </div>
          </div>
        )}
      </div>

      <ProductModal product={selectedProduct} onClose={handleModalClose} />
    </>
  );
}
