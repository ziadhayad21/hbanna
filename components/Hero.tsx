"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageProvider";

const HERO_VIDEO = "/low.mp4";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    document.body.classList.add("hero-video-page");
    return () => document.body.classList.remove("hero-video-page");
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      video.pause();
      return;
    }

    video.play().catch(() => {});
  }, []);

  return (
    <section id="hero">
      <div className="hero-video-wrap" aria-hidden="true">
        <video
          ref={videoRef}
          className="hero-video-visual"
          src={HERO_VIDEO}
          poster="/hero-poster.webp"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="hero-video-overlay" />
      </div>
      <div className="hero-vignette" />
      <div className="hero-grid hero-grid--video">
        <div className="hero-copy reveal-stagger in-view">
          <h1 className="serif">
            {t.hero.titleBefore ?? t.hero.headlineBefore}
            <br />
            <em>{t.hero.titleEm ?? t.hero.headlineEm}</em>
          </h1>
          <p>{t.hero.lead ?? t.hero.subtitle}</p>
          <div className="hero-actions">
            <a href="/products" className="btn btn-primary">
              {t.hero.ctaProducts}
            </a>
            <a href="/contact" className="btn btn-ghost hero-btn-ghost">
              {t.hero.ctaPartner ?? t.hero.ctaQuote}
            </a>
          </div>
        </div>
      </div>
      <div className="hero-scroll">
        <span>{t.hero.scroll}</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}
