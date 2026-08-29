"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GlobalMarkets() {
  const sectionRef = useRef<HTMLElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const regions = [
    {
      id: "europe",
      name: "Europe",
      markets: ["United Kingdom", "Germany", "Netherlands", "France", "Italy"],
      x: 35,
      y: 25,
      path: "M 50 50 Q 40 30 35 25"
    },
    {
      id: "gcc",
      name: "GCC",
      markets: ["Saudi Arabia", "UAE", "Kuwait", "Oman", "Qatar"],
      x: 65,
      y: 45,
      path: "M 50 50 Q 55 48 65 45"
    },
    {
      id: "asia",
      name: "Asia",
      markets: ["China", "India", "Malaysia", "Singapore", "Indonesia"],
      x: 80,
      y: 60,
      path: "M 50 50 Q 65 55 80 60"
    },
    {
      id: "africa",
      name: "Africa",
      markets: ["Kenya", "South Africa", "Senegal", "Morocco"],
      x: 45,
      y: 75,
      path: "M 50 50 Q 48 65 45 75"
    }
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        }
      });

      tl.fromTo(
        ".market-path",
        { strokeDasharray: 200, strokeDashoffset: 200 },
        { strokeDashoffset: 0, duration: 1.5, ease: "power2.out", stagger: 0.2 }
      );

      tl.fromTo(
        ".market-node",
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.5)", stagger: 0.15 },
        "-=1.2"
      );

      tl.fromTo(
        ".market-card",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out", stagger: 0.15 },
        "-=1"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="global-markets" ref={sectionRef} style={{ padding: '120px 0', background: 'var(--ink)', color: 'var(--white)', position: 'relative', overflow: 'hidden' }}>
      
      <div style={{ position: 'absolute', inset: 0, opacity: 0.05, backgroundImage: 'radial-gradient(var(--white) 1px, transparent 1px)', backgroundSize: '40px 40px' }} aria-hidden="true" />
      
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <header style={{ textAlign: 'center', marginBottom: '80px', maxWidth: '700px', margin: '0 auto 80px' }}>
          <span className="eyebrow" style={{ color: 'var(--orange)', marginBottom: '16px', display: 'inline-block' }}>Global Reach</span>
          <h2 className="serif" style={{ fontSize: 'clamp(36px, 4vw, 56px)', marginBottom: '24px', lineHeight: 1.1 }}>
            Exporting Egyptian Quality to the World
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
            Our integrated supply chain allows us to deliver premium fresh produce to strategic markets across four continents with uncompromising consistency.
          </p>
        </header>

        <div className="markets-visualization" style={{ position: 'relative', minHeight: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          
          <svg ref={svgRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }} viewBox="0 0 100 100" preserveAspectRatio="none">
            {regions.map((region) => (
              <path 
                key={region.id}
                className="market-path"
                d={region.path}
                fill="none"
                stroke="var(--orange)"
                strokeWidth="0.2"
                strokeDasharray="2 1"
                style={{ opacity: 0.5 }}
              />
            ))}
          </svg>

          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', zIndex: 10 }}>
            <div style={{ width: '16px', height: '16px', background: 'var(--orange)', borderRadius: '50%', margin: '0 auto', boxShadow: '0 0 20px var(--orange)' }}></div>
            <div style={{ marginTop: '12px', fontWeight: 700, letterSpacing: '0.1em', fontSize: '14px', color: 'var(--orange)', textTransform: 'uppercase' }}>Egypt</div>
          </div>

          {regions.map((region) => (
            <div 
              key={region.id}
              className="market-node-container"
              style={{ position: 'absolute', top: `${region.y}%`, left: `${region.x}%`, transform: 'translate(-50%, -50%)', zIndex: 5 }}
            >
              <div className="market-node" style={{ width: '8px', height: '8px', background: 'var(--white)', borderRadius: '50%', margin: '0 auto', boxShadow: '0 0 10px rgba(255,255,255,0.5)' }}></div>
              
              <div className="market-card" style={{ marginTop: '16px', background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)', padding: '24px', borderRadius: '12px', width: '220px', transform: 'translateX(-50%)', marginLeft: '4px' }}>
                <h3 className="serif" style={{ fontSize: '24px', marginBottom: '16px', color: 'var(--white)' }}>{region.name}</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {region.markets.map(market => (
                    <li key={market} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>
                      <span style={{ width: '4px', height: '4px', background: 'var(--orange)', borderRadius: '50%' }}></span>
                      {market}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
