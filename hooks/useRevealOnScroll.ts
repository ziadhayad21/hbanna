"use client";

import { useEffect } from "react";

const SELECTOR =
  ".reveal, .reveal-stagger, .about-frame, .fac-panel";

function isInViewport(el: Element) {
  const rect = el.getBoundingClientRect();
  const viewHeight =
    window.innerHeight || document.documentElement.clientHeight;
  return rect.bottom > 0 && rect.top < viewHeight * 0.92;
}

/**
 * IntersectionObserver reveal — adds `.in-view` once and unobserves.
 * Re-scans after hydration and falls back so content never stays hidden.
 */
export function useRevealOnScroll(enabled = true) {
  useEffect(() => {
    if (!enabled || typeof window === "undefined") return;

    const revealAll = () => {
      document.querySelectorAll(SELECTOR).forEach((el) => {
        el.classList.add("in-view");
      });
    };

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      revealAll();
      return;
    }

    const seen = new WeakSet<Element>();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06, rootMargin: "0px 0px -4% 0px" }
    );

    const scan = () => {
      document.querySelectorAll(SELECTOR).forEach((el) => {
        if (el.classList.contains("in-view") || seen.has(el)) return;
        seen.add(el);
        if (isInViewport(el)) {
          el.classList.add("in-view");
          return;
        }
        io.observe(el);
      });
    };

    scan();
    const raf = requestAnimationFrame(scan);
    const t1 = window.setTimeout(scan, 120);
    const t2 = window.setTimeout(scan, 600);
    // Generous fallback to prevent hidden content on edge-case browser freezes
    const fallback = window.setTimeout(revealAll, 5000);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(fallback);
      io.disconnect();
    };
  }, [enabled]);
}
