"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SignatureHarvestScene, {
  preloadHarvestModels,
} from "@/components/SignatureHarvestScene";

export default function Showcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const progressRef = useRef(0);
  const [mobile, setMobile] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

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

    const proxy = { t: 0 };

    const ctx = gsap.context(() => {
      gsap.set(".harvest-copy > *", {
        opacity: reducedMotion ? 1 : 0,
        y: reducedMotion ? 0 : 18,
      });

      if (reducedMotion) {
        progressRef.current = 1;
        return;
      }

      progressRef.current = 0;

      ScrollTrigger.create({
        trigger: section,
        start: "top 72%",
        once: true,
        onEnter: () => {
          gsap.to(".harvest-copy > *", {
            opacity: 1,
            y: 0,
            duration: 0.85,
            stagger: 0.08,
            ease: "power2.out",
            overwrite: "auto",
          });
        },
      });

      // Fall starts when the section reaches the top of the viewport
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        once: true,
        onEnter: () => {
          preloadHarvestModels();
          gsap.to(proxy, {
            t: 1,
            duration: 1.85,
            ease: "none",
            onUpdate: () => {
              progressRef.current = proxy.t;
            },
            onComplete: () => {
              progressRef.current = 1;
            },
          });
        },
      });
    }, section);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section id="showcase" className="harvest" ref={sectionRef}>
      <div className="harvest-pin">
        <div className="harvest-bg" aria-hidden="true" />

        <div className="harvest-shell">
          <aside className="harvest-copy">
            <span className="eyebrow">Signature Harvest</span>
            <h2 className="serif harvest-headline">
              Quality You Can See.
              <br />
              Standards You Can Trust.
            </h2>
            <p className="harvest-lead">
              From Egyptian groves to export-ready fruit — selected for
              freshness, consistency, and presentation that buyers can trust.
            </p>
            <ul className="harvest-meta">
              <li>Premium citrus selection</li>
              <li>Export-grade packing</li>
              <li>Consistent quality standards</li>
            </ul>
          </aside>

          <div
            className="harvest-stage"
            aria-label="Cinematic 3D orange presentation"
          >
            <SignatureHarvestScene
              progressRef={progressRef}
              reducedMotion={reducedMotion}
              mobile={mobile}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
