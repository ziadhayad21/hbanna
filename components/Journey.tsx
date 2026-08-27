"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageProvider";

export default function Journey() {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const section = sectionRef.current;
    const path = document.getElementById("processPath") as SVGPathElement | null;
    if (!section || !path) return;

    const stations = Array.from(
      section.querySelectorAll<HTMLElement>(".process-station")
    );
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const length = path.getTotalLength();

    const showAll = () => {
      path.style.strokeDasharray = "none";
      path.style.strokeDashoffset = "0";
      stations.forEach((s) => s.classList.add("is-visible"));
      section.classList.add("is-ready");
    };

    const play = () => {
      path.getBoundingClientRect();
      section.classList.add("is-ready");
      requestAnimationFrame(() => {
        path.style.strokeDashoffset = "0";
      });
      stations.forEach((station, i) => {
        window.setTimeout(() => station.classList.add("is-visible"), i * 300);
      });
    };

    if (reduced) {
      showAll();
      return;
    }

    path.style.strokeDasharray = String(length);
    path.style.strokeDashoffset = String(length);

    let started = false;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            started = true;
            play();
            io.disconnect();
          }
        });
      },
      { threshold: 0.28 }
    );
    io.observe(section);

    return () => io.disconnect();
  }, []);

  return (
    <section id="journey" ref={sectionRef}>
      <div className="process-inner">
        <header className="process-header">
          <span className="process-eyebrow">{t.journey.eyebrow}</span>
          <h2 className="process-title">
            <span className="line-ink">{t.journey.title}</span>
          </h2>
          <div className="process-rule" aria-hidden="true"></div>
          <p className="process-lead">{t.journey.lead}</p>
        </header>

        <div className="process-scroll">
          <div className="process-canvas" id="processCanvas">
            <svg
              className="process-path-svg"
              viewBox="0 0 1180 660"
              preserveAspectRatio="xMidYMid meet"
              aria-hidden="true"
            >
              <path
                id="processPath"
                d="M 140 250 H 640 Q 690 250 690 300 V 430 Q 690 480 740 480 H 1040"
              />
            </svg>

            {/* 01 Farm */}
            <div
              className="process-station"
              data-anchor="top"
              data-step="0"
              style={{ left: "11.86%", top: "37.88%" }}
            >
              <span className="process-node" aria-hidden="true"></span>
              <div className="process-station-body">
                <div className="process-icon" aria-hidden="true">
                  <svg viewBox="0 0 96 96" fill="none">
                    <path
                      d="M22 58c0-10 6-18 14-22 2-8 8-14 16-14s14 6 16 14c8 4 14 12 14 22"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M36 58V72M52 36v36M68 58v14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <circle cx="40" cy="48" r="3" fill="#EC7914" />
                    <circle cx="60" cy="44" r="3" fill="#EC7914" />
                    <path
                      d="M14 78h68"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M18 78v-8h10l4-6h16l3 6h11v8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="28"
                      cy="80"
                      r="3.5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <circle
                      cx="54"
                      cy="80"
                      r="3.5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <rect
                      x="22"
                      y="66"
                      width="8"
                      height="5"
                      rx="0.5"
                      fill="#EC7914"
                      opacity="0.85"
                    />
                  </svg>
                </div>
                <span className="process-dept">01 — Origin</span>
                <h3>Farm</h3>
                <p>Cultivated across our own groves and trusted partner farms.</p>
              </div>
            </div>

            {/* 02 Harvest */}
            <div
              className="process-station"
              data-anchor="top"
              data-step="1"
              style={{ left: "35.17%", top: "37.88%" }}
            >
              <span className="process-node" aria-hidden="true"></span>
              <div className="process-station-body">
                <div className="process-icon" aria-hidden="true">
                  <svg viewBox="0 0 96 96" fill="none">
                    <path
                      d="M48 22c12 0 22 9 22 22 0 8-4 14-10 18H36c-6-4-10-10-10-18 0-13 10-22 22-22Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M48 22v50"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M34 40c4-6 10-10 14-10M62 40c-4-6-10-10-14-10"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      opacity="0.7"
                    />
                    <circle cx="38" cy="36" r="3" fill="#EC7914" />
                    <circle cx="58" cy="34" r="3" fill="#EC7914" />
                    <path
                      d="M30 78c0-8 8-14 18-14s18 6 18 14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M30 78h36"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M36 70h24"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      opacity="0.5"
                    />
                  </svg>
                </div>
                <span className="process-dept">02 — Season</span>
                <h3>Harvest</h3>
                <p>Hand-selected at peak ripeness for quality and flavor.</p>
              </div>
            </div>

            {/* 03 Packing */}
            <div
              className="process-station"
              data-anchor="top"
              data-step="2"
              style={{ left: "58.47%", top: "37.88%" }}
            >
              <span className="process-node" aria-hidden="true"></span>
              <div className="process-station-body">
                <div className="process-icon" aria-hidden="true">
                  <svg viewBox="0 0 96 96" fill="none">
                    <path
                      d="M20 38l28-12 28 12v34l-28 12L20 72V38Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20 38l28 12 28-12M48 50v34"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M28 44l20 9 20-9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      opacity="0.45"
                    />
                    <rect x="34" y="56" width="10" height="10" fill="#EC7914" />
                    <rect
                      x="52"
                      y="56"
                      width="10"
                      height="10"
                      fill="#EC7914"
                      opacity="0.7"
                    />
                  </svg>
                </div>
                <span className="process-dept">03 — Process</span>
                <h3>Packing</h3>
                <p>
                  Processed in our modern dates factories and citrus packing
                  house.
                </p>
              </div>
            </div>

            {/* 04 Quality */}
            <div
              className="process-station"
              data-anchor="bottom"
              data-step="3"
              style={{ left: "62.71%", top: "72.73%" }}
            >
              <span className="process-node" aria-hidden="true"></span>
              <div className="process-station-body">
                <div className="process-icon" aria-hidden="true">
                  <svg viewBox="0 0 96 96" fill="none">
                    <circle
                      cx="42"
                      cy="42"
                      r="20"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M56 56l18 18"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M34 43l6 6 12-14"
                      stroke="#EC7914"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="42"
                      cy="42"
                      r="3"
                      fill="#EC7914"
                      opacity="0.35"
                    />
                  </svg>
                </div>
                <span className="process-dept">04 — Control</span>
                <h3>Quality</h3>
                <p>Every batch verified under strict international standards.</p>
              </div>
            </div>

            {/* 05 Export */}
            <div
              className="process-station"
              data-anchor="bottom"
              data-step="4"
              style={{ left: "88.14%", top: "72.73%" }}
            >
              <span className="process-node" aria-hidden="true"></span>
              <div className="process-station-body">
                <div className="process-icon" aria-hidden="true">
                  <svg viewBox="0 0 96 96" fill="none">
                    <path
                      d="M14 62h52c8 0 14 4 18 10H18c-4-4-4-10-4-10Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 62V48h28l8 14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M30 48V36h16v12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M68 28v34M68 28h18M86 28v10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M78 38v8h-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <rect x="74" y="46" width="10" height="8" fill="#EC7914" />
                    <circle cx="34" cy="54" r="2.5" fill="#EC7914" />
                    <path
                      d="M14 74h70"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      opacity="0.45"
                    />
                  </svg>
                </div>
                <span className="process-dept">05 — Dispatch</span>
                <h3>Export</h3>
                <p>Delivered fresh and reliable to global markets.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
