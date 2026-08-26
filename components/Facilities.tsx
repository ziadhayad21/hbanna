"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const facilities = [
  {
    image: "/images/dates-factory.jpg",
    title: "Two Modern Dates Factories",
    description: "Purpose-built facilities for processing and packing premium Egyptian dates."
  },
  {
    image: "/images/citrus-packing.jpg",
    title: "Dedicated Citrus Packing House",
    description: "State-of-the-art packing infrastructure ensuring freshness from grove to port."
  },
  {
    image: "/images/farm.jpg",
    title: "Premium Agricultural Lands",
    description: "Vast cultivated fields spanning across Egypt's most fertile regions."
  },
  {
    image: "/images/orange.jpg",
    title: "Advanced Storage Facilities",
    description: "Climate-controlled storage maintaining optimal conditions for maximum freshness."
  }
];

export default function Facilities() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % facilities.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + facilities.length) % facilities.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextSlide();
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  return (
    <section id="facilities">
      <span className="eyebrow reveal">Our Infrastructure</span>
      <h2 className="serif reveal">Built for Scale. Engineered for Freshness.</h2>
      
      <div 
        className="facilities-carousel reveal"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="carousel-viewport">
          <div 
            className="carousel-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {facilities.map((facility, index) => (
              <div key={index} className="carousel-slide">
                <div className="fac-img-large">
                  <div className="ph-inner">
                    <Image
                      src={facility.image}
                      alt={facility.title}
                      width={1200}
                      height={800}
                    />
                  </div>
                  <div className="fac-overlay">
                    <div className="fac-caption-large">
                      <h3>{facility.title}</h3>
                      <p>{facility.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button 
          className="carousel-nav carousel-nav-prev"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <button 
          className="carousel-nav carousel-nav-next"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="carousel-indicators">
          {facilities.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
