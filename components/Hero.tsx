"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageProvider";

const FLOAT_ITEMS = [
  {
    className: "float-item f-orange1",
    depth: "30",
    src: "/images/orange.jpg",
    width: 226,
    height: 226,
  },
  {
    className: "float-item f-dates",
    depth: "18",
    src: "/images/dates.jpg",
    width: 246,
    height: 246,
  },
  {
    className: "float-item f-grape",
    depth: "24",
    src: "/images/grapes.jpg",
    width: 156,
    height: 156,
  },
  {
    className: "float-item f-mango",
    depth: "20",
    src: "/images/mango.jpg",
    width: 176,
    height: 176,
  },
  {
    className: "float-item f-orange2",
    depth: "14",
    src: "/images/grains.jpg",
    width: 126,
    height: 126,
  },
] as const;

export default function Hero() {
  const stageRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  const titleAfterLines = t.hero.titleAfter.split("\n");

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
          <span className="eyebrow">{t.hero.eyebrow}</span>
          <h1 className="serif">
            {t.hero.titleBefore}
            <em>{t.hero.titleEm}</em>
            <br />
            {titleAfterLines.map((line, i) => (
              <span key={line}>
                {i > 0 ? <br /> : null}
                {line}
              </span>
            ))}
          </h1>
          <p>{t.hero.lead}</p>
          <div className="hero-actions">
            <a href="/products" className="btn btn-primary">
              {t.hero.ctaProducts}
            </a>
            <a href="/contact" className="btn btn-ghost">
              {t.hero.ctaPartner}
            </a>
          </div>
        </div>
        <div className="hero-stage" id="heroStage" ref={stageRef}>
          {FLOAT_ITEMS.map((item, index) => (
            <div
              key={item.src}
              className={item.className}
              data-depth={item.depth}
            >
              <Image
                src={item.src}
                alt=""
                width={item.width}
                height={item.height}
                priority={index < 2}
                loading={index < 2 ? "eager" : "lazy"}
                sizes={`${item.width}px`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="hero-scroll">
        <span>{t.hero.scroll}</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}
