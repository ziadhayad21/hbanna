"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageProvider";

export default function Metrics() {
  const rowRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const metrics = [
    { target: 40, suffix: "+", label: t.metrics.years },
    { target: 75, suffix: "%+", label: t.metrics.groves },
    { target: 3, suffix: "", label: t.metrics.factories },
  ] as const;

  useEffect(() => {
    const counters =
      rowRef.current?.querySelectorAll<HTMLElement>(".count") ?? [];
    if (!counters.length) return;

    const counterIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const target = parseInt(el.dataset.target || "0", 10);
          const dur = 1200;
          const start = performance.now();
          function tick(now: number) {
            const p = Math.min((now - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = String(Math.floor(eased * target));
            if (p < 1) requestAnimationFrame(tick);
            else el.textContent = String(target);
          }
          requestAnimationFrame(tick);
          counterIO.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach((c) => counterIO.observe(c));
    return () => counterIO.disconnect();
  }, [t]);

  return (
    <section id="metrics">
      <div className="metrics-row reveal-stagger" ref={rowRef}>
        {metrics.map((m) => (
          <div className="metric" key={m.label}>
            <div className="metric-num">
              <span className="count" data-target={m.target}>
                0
              </span>
              {m.suffix ? <span className="suffix">{m.suffix}</span> : null}
            </div>
            <p className="metric-label">{m.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
