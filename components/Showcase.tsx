"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const STAGES = 5;

const COPY = [
  {
    title: "Navel & Valencia Oranges",
    desc: "Grown across our citrus groves and packed for global markets.",
  },
  {
    title: "Medjool & Barhi Dates",
    desc: "Processed in our own modern dates factories.",
  },
  {
    title: "Table Grapes",
    desc: "Fresh clusters selected at peak ripeness.",
  },
  {
    title: "Egyptian Mangoes",
    desc: "A seasonal signature among our fresh fruit range.",
  },
  {
    title: "Fresh Vegetables",
    desc: "Tomatoes, peppers and more — packed for freshness.",
  },
] as const;

const IMAGES = [
  { src: "/images/orange.jpg", alt: "Navel and Valencia oranges" },
  { src: "/images/dates.jpg", alt: "Medjool and Barhi dates" },
  { src: "/images/grapes.jpg", alt: "Table grapes" },
  { src: "/images/mango.jpg", alt: "Egyptian mangoes" },
  { src: "/images/tomato.jpg", alt: "Fresh vegetables" },
] as const;

export default function Showcase() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const showcaseSection = sectionRef.current;
    if (!showcaseSection) return;

    const showcaseItems =
      showcaseSection.querySelectorAll<HTMLElement>(".showcase-item");
    const showcaseTitles =
      showcaseSection.querySelectorAll<HTMLElement>(".showcase-title");
    const showcaseDescs =
      showcaseSection.querySelectorAll<HTMLElement>(".showcase-desc");
    const ticks = showcaseSection.querySelectorAll<HTMLElement>(".tick");

    let showcaseRaf: number | null = null;

    const updateShowcase = () => {
      showcaseRaf = null;
      const rect = showcaseSection.getBoundingClientRect();
      const total = showcaseSection.offsetHeight - window.innerHeight;
      if (total <= 0) return;
      let progress = -rect.top / total;
      progress = Math.max(0, Math.min(1, progress));
      let stage = Math.floor(progress * STAGES);
      if (stage >= STAGES) stage = STAGES - 1;

      showcaseItems.forEach((it) =>
        it.classList.toggle(
          "active",
          parseInt(it.dataset.stage || "-1", 10) === stage
        )
      );
      showcaseTitles.forEach((t) =>
        t.classList.toggle(
          "active",
          parseInt(t.dataset.stage || "-1", 10) === stage
        )
      );
      showcaseDescs.forEach((d) =>
        d.classList.toggle(
          "active",
          parseInt(d.dataset.stage || "-1", 10) === stage
        )
      );
      ticks.forEach((t) =>
        t.classList.toggle(
          "active",
          parseInt(t.dataset.stage || "-1", 10) === stage
        )
      );
    };

    showcaseSection.style.height = `${STAGES * 100}vh`;

    const onScroll = () => {
      if (showcaseRaf) return;
      showcaseRaf = requestAnimationFrame(updateShowcase);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateShowcase();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (showcaseRaf) cancelAnimationFrame(showcaseRaf);
      showcaseSection.style.height = "";
    };
  }, []);

  return (
    <section id="showcase" ref={sectionRef}>
      <div className="showcase-pin">
        <div className="showcase-bg"></div>

        <div className="showcase-copy">
          <span className="eyebrow">Signature Harvest</span>
          {COPY.map((item, i) => (
            <div key={item.title} style={{ display: "contents" }}>
              <h3 className="showcase-title serif" data-stage={i}>
                {item.title}
              </h3>
              <p className="showcase-desc" data-stage={i}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="showcase-stage">
          {IMAGES.map((img, i) => (
            <div className="showcase-item" data-stage={i} key={img.src}>
              <Image src={img.src} alt={img.alt} width={420} height={420} />
            </div>
          ))}
        </div>

        <div className="showcase-progress">
          {Array.from({ length: STAGES }, (_, i) => (
            <div className="tick" data-stage={i} key={i}></div>
          ))}
        </div>

        <div className="showcase-hint">Scroll to explore</div>
      </div>
    </section>
  );
}
