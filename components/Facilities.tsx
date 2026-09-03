"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useLanguage } from "@/contexts/LanguageProvider";

const SLIDE_MS = 5500;

export default function Facilities() {
  const { t } = useLanguage();
  const facilities = useMemo(
    () => [
      {
        image: "/images/dates-factory.jpg",
        eyebrow: t.facilities.s1eyebrow,
        title: t.facilities.s1title,
        description: t.facilities.s1desc,
      },
      {
        image: "/images/citrus-packing.jpg",
        eyebrow: t.facilities.s2eyebrow,
        title: t.facilities.s2title,
        description: t.facilities.s2desc,
      },
      {
        image: "/images/farm.jpg",
        eyebrow: t.facilities.s3eyebrow,
        title: t.facilities.s3title,
        description: t.facilities.s3desc,
      },
      {
        image: "/images/orange.jpg",
        eyebrow: t.facilities.s4eyebrow,
        title: t.facilities.s4title,
        description: t.facilities.s4desc,
      },
    ],
    [t]
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const copyRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);
  const progressTween = useRef<gsap.core.Tween | null>(null);
  const isPausedRef = useRef(isPaused);

  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  const goToSlide = useCallback(
    (index: number) => {
      setCurrentIndex((prev) => {
        const next =
          ((index % facilities.length) + facilities.length) % facilities.length;
        return next === prev ? prev : next;
      });
    },
    [facilities.length]
  );

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % facilities.length);
  }, [facilities.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + facilities.length) % facilities.length
    );
  }, [facilities.length]);

  useEffect(() => {
    const copy = copyRef.current;
    if (!copy) return;

    const eyebrow = copy.querySelector(".fac-slide-eyebrow");
    const title = copy.querySelector(".fac-slide-title");
    const desc = copy.querySelector(".fac-slide-desc");

    const tl = gsap.timeline();
    tl.fromTo(
      [eyebrow, title, desc],
      { y: 22, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
      }
    );

    return () => {
      tl.kill();
    };
  }, [currentIndex]);

  useEffect(() => {
    const bar = progressRef.current;
    if (!bar) return;

    progressTween.current?.kill();
    gsap.set(bar, { scaleX: 0, transformOrigin: "left center" });

    const tween = gsap.to(bar, {
      scaleX: 1,
      duration: SLIDE_MS / 1000,
      ease: "none",
      paused: isPausedRef.current,
      onComplete: nextSlide,
    });
    progressTween.current = tween;

    return () => {
      tween.kill();
      if (progressTween.current === tween) progressTween.current = null;
    };
  }, [currentIndex, nextSlide]);

  useEffect(() => {
    const tween = progressTween.current;
    if (!tween) return;
    if (isPaused) tween.pause();
    else tween.resume();
  }, [isPaused]);

  const active = facilities[currentIndex];

  return (
    <section id="facilities">
      <header className="facilities-header">
        <span className="eyebrow reveal">{t.facilities.eyebrow}</span>
        <h2 className="serif reveal">{t.facilities.title}</h2>
      </header>

      <div
        className="facilities-showcase reveal"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="facilities-stage">
          {facilities.map((facility, index) => (
            <div
              key={facility.title}
              className={`facilities-media${index === currentIndex ? " is-active" : ""}`}
              aria-hidden={index !== currentIndex}
            >
              <Image
                src={facility.image}
                alt={facility.title}
                fill
                sizes="(max-width: 980px) 100vw, 70vw"
                className="facilities-media-img"
                priority={index === 0}
                {...(index === 0 ? {} : { loading: "eager" })}
              />
            </div>
          ))}
          <div className="facilities-media-veil" aria-hidden="true" />

          <div className="facilities-progress" aria-hidden="true">
            <span ref={progressRef} className="facilities-progress-bar" />
          </div>
        </div>

        <aside className="facilities-copy">
          <div className="facilities-copy-inner" ref={copyRef}>
            <span className="fac-slide-eyebrow">{active.eyebrow}</span>
            <h3 className="serif fac-slide-title">{active.title}</h3>
            <p className="fac-slide-desc">{active.description}</p>
          </div>

          <div className="facilities-controls">
            <div className="facilities-count" aria-live="polite">
              <span className="facilities-count-current">
                {String(currentIndex + 1).padStart(2, "0")}
              </span>
              <span className="facilities-count-sep">/</span>
              <span className="facilities-count-total">
                {String(facilities.length).padStart(2, "0")}
              </span>
            </div>

            <div className="facilities-nav">
              <button
                type="button"
                className="facilities-nav-btn"
                onClick={prevSlide}
                aria-label={t.facilities.prev}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M15 18l-6-6 6-6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="facilities-nav-btn"
                onClick={nextSlide}
                aria-label={t.facilities.next}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M9 18l6-6-6-6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          <ul className="facilities-tabs" role="tablist" aria-label="Facilities">
            {facilities.map((facility, index) => (
              <li key={facility.title}>
                <button
                  type="button"
                  role="tab"
                  aria-selected={index === currentIndex}
                  className={`facilities-tab${index === currentIndex ? " is-active" : ""}`}
                  onClick={() => goToSlide(index)}
                >
                  <span className="facilities-tab-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="facilities-tab-label">{facility.title}</span>
                </button>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
