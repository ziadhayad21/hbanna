"use client";

import { useEffect, useMemo, useRef, type CSSProperties } from "react";
import { PROCESS_STEP_ICONS } from "@/components/ProcessIcons";
import { useLanguage } from "@/contexts/LanguageProvider";

export default function Journey() {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  const steps = useMemo(
    () => [
      { dept: t.journey.s1dept, title: t.journey.s1title, desc: t.journey.s1desc },
      { dept: t.journey.s2dept, title: t.journey.s2title, desc: t.journey.s2desc },
      { dept: t.journey.s3dept, title: t.journey.s3title, desc: t.journey.s3desc },
      { dept: t.journey.s4dept, title: t.journey.s4title, desc: t.journey.s4desc },
      { dept: t.journey.s5dept, title: t.journey.s5title, desc: t.journey.s5desc },
      { dept: t.journey.s6dept, title: t.journey.s6title, desc: t.journey.s6desc },
      { dept: t.journey.s7dept, title: t.journey.s7title, desc: t.journey.s7desc },
    ],
    [t.journey]
  );

  useEffect(() => {
    const section = sectionRef.current;
    const path = document.getElementById("processRailPath") as SVGPathElement | null;
    if (!section) return;

    const stations = Array.from(
      section.querySelectorAll<HTMLElement>(".process-station")
    );
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const revealAll = () => {
      section.classList.add("is-ready");
      stations.forEach((station) => station.classList.add("is-visible"));
      if (path) {
        path.style.strokeDasharray = "none";
        path.style.strokeDashoffset = "0";
      }
    };

    if (reduced) {
      revealAll();
      return;
    }

    if (path) {
      const length = path.getTotalLength();
      path.style.strokeDasharray = String(length);
      path.style.strokeDashoffset = String(length);
    }

    let started = false;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || started) return;
          started = true;
          section.classList.add("is-ready", "is-animating");

          if (path) {
            path.getBoundingClientRect();
            requestAnimationFrame(() => {
              path.style.strokeDashoffset = "0";
            });
          }

          stations.forEach((station, index) => {
            window.setTimeout(() => station.classList.add("is-visible"), index * 120);
          });
          io.disconnect();
        });
      },
      { threshold: 0.2 }
    );

    io.observe(section);
    const fallback = window.setTimeout(revealAll, 6000);

    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <section id="journey" ref={sectionRef}>
      <div className="process-inner">
        <header className="process-header reveal">
          <span className="process-eyebrow">{t.journey.eyebrow}</span>
          <h2 className="process-title">
            <span className="line-ink">{t.journey.title}</span>
          </h2>
          <div className="process-rule" aria-hidden="true" />
          <p className="process-lead">{t.journey.lead}</p>
        </header>

        <div className="process-rail" aria-label="Farm to port supply chain">
          <svg
            className="process-rail-svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              id="processRailPath"
              d="M 60 60 H 1140"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <ol className="process-stations">
            {steps.map((step, index) => {
              const Icon = PROCESS_STEP_ICONS[index];
              return (
                <li
                  key={step.title}
                  className="process-station"
                  style={{ "--step-index": index } as CSSProperties}
                >
                  <div className="process-node" aria-hidden="true">
                    <span className="process-node-ring" />
                    <span className="process-icon-wrap">
                      <Icon className="process-icon" />
                    </span>
                    <span className="process-node-num">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="process-station-body">
                    <span className="process-dept">{step.dept}</span>
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
