"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const FLOAT_ITEMS = [
  {
    className: "float-item f-orange1",
    depth: "30",
    src: "/images/orange.jpg",
    alt: "Fresh orange",
    width: 226,
    height: 226,
  },
  {
    className: "float-item f-dates",
    depth: "18",
    src: "/images/dates.jpg",
    alt: "Egyptian dates",
    width: 246,
    height: 246,
  },
  {
    className: "float-item f-grape",
    depth: "24",
    src: "/images/grapes.jpg",
    alt: "Table grapes",
    width: 156,
    height: 156,
  },
  {
    className: "float-item f-mango",
    depth: "20",
    src: "/images/mango.jpg",
    alt: "Egyptian mango",
    width: 176,
    height: 176,
  },
  {
    className: "float-item f-orange2",
    depth: "14",
    src: "/images/orange-small.jpg",
    alt: "Citrus orange",
    width: 126,
    height: 126,
  },
] as const;

export default function Hero() {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heroStage = stageRef.current;
    if (!heroStage) return;

    const items = heroStage.querySelectorAll<HTMLElement>(".float-item");
    let parallaxRaf: number | null = null;
    let mouseX = 0;
    let mouseY = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (parallaxRaf) return;
      parallaxRaf = requestAnimationFrame(() => {
        parallaxRaf = null;
        const rect = heroStage.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (mouseX - cx) / rect.width;
        const dy = (mouseY - cy) / rect.height;
        items.forEach((it) => {
          const depth = parseFloat(it.dataset.depth || "20") || 20;
          it.style.transform = `translate(${dx * depth}px, ${dy * depth}px)`;
        });
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      items.forEach((el) => {
        el.style.animation = "none";
      });
    }

    return () => {
      window.removeEventListener("mousemove", onMove);
      if (parallaxRaf) cancelAnimationFrame(parallaxRaf);
    };
  }, []);

  return (
    <section id="hero">
      <div className="hero-vignette"></div>
      <div className="hero-grid">
        <div className="hero-copy reveal-stagger in-view">
          <span className="eyebrow">
            Egyptian Grower · Producer · Exporter Since 1992
          </span>
          <h1 className="serif">
            Growing <em>Excellence.</em>
            <br />
            Delivering Trust
            <br />
            Since 1992.
          </h1>
          <p>
            A vertically integrated Egyptian agricultural house — from grove to
            global market.
          </p>
          <div className="hero-actions">
            <a href="/products" className="btn btn-primary">
              Explore Our Products
            </a>
            <a href="#contact" className="btn btn-ghost">
              Partner With Us
            </a>
          </div>
        </div>
        <div className="hero-stage" id="heroStage" ref={stageRef}>
          {FLOAT_ITEMS.map((item) => (
            <div
              key={item.src}
              className={item.className}
              data-depth={item.depth}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                priority
              />
            </div>
          ))}
        </div>
      </div>
      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}
