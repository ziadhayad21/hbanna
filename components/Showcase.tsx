"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SignatureHarvestScene, {
  preloadHarvestModels,
  type HarvestIntro,
} from "@/components/SignatureHarvestScene";
import { useLanguage } from "@/contexts/LanguageProvider";

export default function Showcase() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const introRef = useRef<HarvestIntro>({ t: 0, rotating: false });
  const [mobile, setMobile] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const FEATURES = [
    { id: "tl", zone: "tl", kicker: t.showcase.f1k, title: t.showcase.f1t },
    { id: "tr", zone: "tr", kicker: t.showcase.f2k, title: t.showcase.f2t },
    { id: "ml", zone: "ml", kicker: t.showcase.f3k, title: t.showcase.f3t },
    { id: "mr", zone: "mr", kicker: t.showcase.f4k, title: t.showcase.f4t },
    { id: "bl", zone: "bl", kicker: t.showcase.f5k, title: t.showcase.f5t },
    { id: "br", zone: "br", kicker: t.showcase.f6k, title: t.showcase.f6t },
  ] as const;

  useEffect(() => {
    preloadHarvestModels();
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 860px)");
    const rm = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setMobile(mq.matches);
    const syncRm = () => setReducedMotion(rm.matches);
    sync();
    syncRm();
    mq.addEventListener("change", sync);
    rm.addEventListener("change", syncRm);
    return () => {
      mq.removeEventListener("change", sync);
      rm.removeEventListener("change", syncRm);
    };
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    if (!section) return;

    let played = false;
    let tl: gsap.core.Timeline | null = null;
    const proxy = { t: 0 };

    const ctx = gsap.context(() => {
      gsap.set(".harvest-intro-copy > *", {
        opacity: reducedMotion ? 1 : 0,
        y: reducedMotion ? 0 : 20,
      });
      gsap.set(".harvest-orbit-inner", {
        opacity: reducedMotion ? 1 : 0,
        y: reducedMotion ? 0 : 40,
        scale: reducedMotion ? 1 : 0.9,
      });
      gsap.set(".harvest-feature", {
        opacity: reducedMotion ? 1 : 0,
        y: reducedMotion ? 0 : 18,
      });
      gsap.set(".harvest-connector, .harvest-connector-dot", {
        opacity: reducedMotion ? 0.4 : 0,
      });

      if (reducedMotion) {
        introRef.current = { t: 1, rotating: false };
        return;
      }

      introRef.current = { t: 0, rotating: false };

      const play = () => {
        if (played) return;
        played = true;
        preloadHarvestModels();

        tl = gsap.timeline({
          defaults: { ease: "power3.out" },
          onUpdate: () => {
            introRef.current.t = proxy.t;
          },
        });

        // 1 — Copy (slow)
        tl.to(
          ".harvest-intro-copy > *",
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            stagger: 0.14,
          },
          0
        );

        // 2 — Orange entrance (slow + readable)
        tl.to(
          ".harvest-orbit-inner",
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 2.2,
            ease: "power2.out",
          },
          0.35
        );

        tl.to(
          proxy,
          {
            t: 1,
            duration: 2.2,
            ease: "power2.out",
            onComplete: () => {
              introRef.current.t = 1;
              introRef.current.rotating = true;
            },
          },
          0.35
        );

        // 3 — Labels after orange has mostly landed
        tl.to(
          ".harvest-feature",
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.14,
            ease: "power3.out",
          },
          2.0
        );

        tl.to(
          ".harvest-connector, .harvest-connector-dot",
          {
            opacity: 0.45,
            duration: 0.85,
            stagger: 0.06,
            ease: "power2.out",
          },
          2.15
        );
      };

      // Start only when the 3D stage itself enters view — not early
      ScrollTrigger.create({
        trigger: ".harvest-stage-board",
        start: "top 62%",
        once: true,
        onEnter: play,
      });
    }, section);

    return () => {
      tl?.kill();
      ctx.revert();
    };
  }, [reducedMotion]);

  return (
    <section id="showcase" className="harvest" ref={sectionRef}>
      <div className="harvest-bg" aria-hidden="true" />

      <div className="harvest-showcase">
        <header className="harvest-intro-copy">
          <span className="eyebrow">{t.showcase.eyebrow}</span>
          <h2 className="serif harvest-headline">
            {t.showcase.title1}
            <br />
            {t.showcase.title2}
          </h2>
          <p className="harvest-lead">{t.showcase.lead}</p>
        </header>

        <div
          className="harvest-stage-board"
          aria-label="Open orange product showcase"
        >
          <div className="harvest-glow" aria-hidden="true" />

          <svg
            className="harvest-connectors"
            viewBox="0 0 1000 720"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path className="harvest-connector" d="M240 145 L390 290" />
            <path className="harvest-connector" d="M760 145 L610 290" />
            <path className="harvest-connector" d="M200 360 L370 360" />
            <path className="harvest-connector" d="M800 360 L630 360" />
            <path className="harvest-connector" d="M240 575 L390 430" />
            <path className="harvest-connector" d="M760 575 L610 430" />
            <circle className="harvest-connector-dot" cx="390" cy="290" r="2.2" />
            <circle className="harvest-connector-dot" cx="610" cy="290" r="2.2" />
            <circle className="harvest-connector-dot" cx="370" cy="360" r="2.2" />
            <circle className="harvest-connector-dot" cx="630" cy="360" r="2.2" />
            <circle className="harvest-connector-dot" cx="390" cy="430" r="2.2" />
            <circle className="harvest-connector-dot" cx="610" cy="430" r="2.2" />
          </svg>

          {FEATURES.map((f) => (
            <article
              key={f.id}
              className={`harvest-feature harvest-feature--${f.zone}`}
            >
              <span className="harvest-feature-kicker">{f.kicker}</span>
              <strong className="harvest-feature-title serif">{f.title}</strong>
            </article>
          ))}

          <div className="harvest-orbit">
            <div className="harvest-orbit-inner">
              <SignatureHarvestScene
                introRef={introRef}
                reducedMotion={reducedMotion}
                mobile={mobile}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
