"use client";

import { useEffect } from "react";

const SELECTOR =
  ".reveal, .reveal-stagger, .about-frame, .fac-panel";

/**
 * IntersectionObserver reveal — adds `.in-view` once and unobserves.
 * Matches original threshold 0.18.
 */
export function useRevealOnScroll(enabled = true) {
  useEffect(() => {
    if (!enabled || typeof window === "undefined") return;

    const revealEls = document.querySelectorAll(SELECTOR);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    revealEls.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, [enabled]);
}
