"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
} from "react-simple-maps";

/* ─────────────────────────────────────────────
   MARKET DATA  –  only verified export markets
   [lng, lat] geographic coordinates
───────────────────────────────────────────── */
type Market = {
  id: string;
  label: string;
  region: string;
  coordinates: [number, number]; // [longitude, latitude]
  tagline: string;
  /** Adjust label anchor to avoid overlap: "start"|"middle"|"end" */
  labelAnchor?: "start" | "middle" | "end";
  /** dy offset for label in px */
  labelDy?: number;
};

const MARKETS: Market[] = [
  {
    id: "europe",
    label: "European Markets",
    region: "Europe",
    coordinates: [13.4, 51.2],
    tagline: "Premium fresh produce for EU retail & wholesale channels.",
    labelAnchor: "middle",
    labelDy: 14,
  },
  {
    id: "russia",
    label: "Russia",
    region: "Eurasia",
    coordinates: [60.0, 55.8],
    tagline: "Citrus, fresh fruits and vegetables for Russian distributors.",
    labelAnchor: "middle",
    labelDy: 14,
  },
  {
    id: "morocco",
    label: "Morocco",
    region: "Africa",
    coordinates: [-7.1, 31.8],
    tagline: "Egyptian citrus and fresh produce to North African markets.",
    labelAnchor: "middle",
    labelDy: 14,
  },
  {
    id: "senegal",
    label: "Senegal",
    region: "Africa",
    coordinates: [-14.5, 14.5],
    tagline: "Fresh agricultural produce for West African markets.",
    labelAnchor: "middle",
    labelDy: 14,
  },
  {
    id: "ethiopia",
    label: "Ethiopia",
    region: "Africa",
    coordinates: [40.5, 9.1],
    tagline: "Grains, pulses and fresh produce for Ethiopian buyers.",
    labelAnchor: "middle",
    labelDy: 14,
  },
  {
    id: "kenya",
    label: "Kenya",
    region: "Africa",
    coordinates: [37.9, 0.0],
    tagline: "Fresh produce and dates for East African buyers.",
    labelAnchor: "middle",
    labelDy: 14,
  },
  {
    id: "rwanda",
    label: "Rwanda",
    region: "Africa",
    coordinates: [29.9, -1.9],
    tagline: "Quality Egyptian produce for Rwandan importers.",
    labelAnchor: "start",
    labelDy: 14,
  },
  {
    id: "congo",
    label: "Congo",
    region: "Africa",
    coordinates: [24.0, -4.3],
    tagline: "Premium Egyptian exports to Central African trade partners.",
    labelAnchor: "middle",
    labelDy: 14,
  },
  {
    id: "southafrica",
    label: "South Africa",
    region: "Africa",
    coordinates: [25.1, -29.0],
    tagline: "Dates and dried products to South African importers.",
    labelAnchor: "middle",
    labelDy: 14,
  },
  {
    id: "comoros",
    label: "Comoros",
    region: "Africa",
    coordinates: [43.3, -11.8],
    tagline: "Specialty Egyptian products to island markets.",
    labelAnchor: "start",
    labelDy: 14,
  },
  {
    id: "mauritius",
    label: "Mauritius",
    region: "Africa",
    coordinates: [57.6, -20.2],
    tagline: "Premium dates and fresh produce to Mauritius.",
    labelAnchor: "start",
    labelDy: 14,
  },
  {
    id: "china",
    label: "China",
    region: "Asia",
    coordinates: [104.2, 35.9],
    tagline: "Premium agricultural commodities for the Chinese market.",
    labelAnchor: "middle",
    labelDy: 14,
  },
  {
    id: "maldives",
    label: "Maldives",
    region: "Asia",
    coordinates: [73.5, 3.2],
    tagline: "Specialty fresh produce for the Maldivian hospitality sector.",
    labelAnchor: "start",
    labelDy: 14,
  },
  {
    id: "latam",
    label: "Latin America",
    region: "Latin America",
    coordinates: [-58.0, -14.0],
    tagline: "Export-grade Egyptian produce for Latin American importers.",
    labelAnchor: "middle",
    labelDy: 14,
  },
  {
    id: "australia",
    label: "Australia",
    region: "Australia & Oceania",
    coordinates: [134.0, -25.3],
    tagline: "High-quality Egyptian exports meeting Australian standards.",
    labelAnchor: "middle",
    labelDy: 14,
  },
];

const EGYPT_COORDS: [number, number] = [30.8, 26.8];

const REGION_COLORS: Record<string, string> = {
  Europe: "#EC7914",
  Asia: "#D4630C",
  "Latin America": "#F4A04A",
  "Australia & Oceania": "#C05A0A",
  Eurasia: "#E08020",
  Africa: "#EC7914",
};

/* ─── TopoJSON world map (Natural Earth 110m) hosted locally with caching ─── */
const TOPO_URL = "/data/countries-110m.json";

/* ─────────────────────────────────────────────────────────────────
   Inner map component — loaded client-side only
───────────────────────────────────────────────────────────────── */
function WorldMap({
  activeId,
  hoveredId,
  onMarketClick,
  onMarketHover,
}: {
  activeId: string | null;
  hoveredId: string | null;
  onMarketClick: (m: Market) => void;
  onMarketHover: (id: string | null) => void;
}) {
  return (
    <ComposableMap
      projectionConfig={{ scale: 147, center: [20, 10] }}
      width={960}
      height={480}
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      {/* Subtle graticule */}
      <defs>
        <pattern id="grat" patternUnits="userSpaceOnUse" width="40" height="40">
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="rgba(87,48,18,0.04)"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect width="960" height="480" fill="url(#grat)" />

      {/* Country shapes */}
      <Geographies geography={TOPO_URL}>
        {({ geographies }: { geographies: { rsmKey: string }[] }) =>
          geographies.map((geo) => (
            <Geography
              key={(geo as { rsmKey: string }).rsmKey}
              geography={geo}
              fill="rgba(87,48,18,0.08)"
              stroke="rgba(87,48,18,0.18)"
              strokeWidth={0.5}
              style={{
                default: { outline: "none" },
                hover: { outline: "none", fill: "rgba(87,48,18,0.11)" },
                pressed: { outline: "none" },
              }}
            />
          ))
        }
      </Geographies>

      {/* Egypt highlight */}
      <Geographies geography={TOPO_URL}>
        {({ geographies }: { geographies: { rsmKey: string; properties: { name: string } }[] }) =>
          geographies
            .filter(
              (geo) =>
                (geo as { properties: { name: string } }).properties.name === "Egypt"
            )
            .map((geo) => (
              <Geography
                key={(geo as { rsmKey: string }).rsmKey}
                geography={geo}
                fill="rgba(236,121,20,0.22)"
                stroke="rgba(236,121,20,0.55)"
                strokeWidth={0.8}
                style={{
                  default: { outline: "none" },
                  hover: { outline: "none" },
                  pressed: { outline: "none" },
                }}
              />
            ))
        }
      </Geographies>

      {/* Connection lines Egypt → each market */}
      {MARKETS.map((m) => {
        const isActive = activeId === m.id || hoveredId === m.id;
        return (
          <Line
            key={`line-${m.id}`}
            from={EGYPT_COORDS}
            to={m.coordinates}
            stroke={
              isActive
                ? REGION_COLORS[m.region] ?? "#EC7914"
                : "rgba(236,121,20,0.18)"
            }
            strokeWidth={isActive ? 1.2 : 0.7}
            strokeDasharray={isActive ? "5 4" : "3 6"}
            strokeLinecap="round"
            style={{ transition: "stroke 0.35s, stroke-width 0.35s" }}
          />
        );
      })}

      {/* Egypt origin marker */}
      <Marker coordinates={EGYPT_COORDS}>
        <g>
          {/* pulse rings */}
          <circle r={14} fill="rgba(236,121,20,0.12)" className="gm-origin-pulse-r1" />
          <circle r={9} fill="rgba(236,121,20,0.18)" className="gm-origin-pulse-r2" />
          {/* core dot */}
          <circle
            r={5}
            fill="#EC7914"
            stroke="#fff"
            strokeWidth={1.5}
            style={{ filter: "drop-shadow(0 0 5px rgba(236,121,20,0.7))" }}
          />
          <text
            textAnchor="middle"
            y={-11}
            style={{
              fontFamily: "var(--font-fraunces, 'Fraunces', serif)",
              fontSize: "6.5px",
              fontWeight: 700,
              fill: "#EC7914",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            EGYPT
          </text>
        </g>
      </Marker>

      {/* Market markers */}
      {MARKETS.map((m) => {
        const isActive = activeId === m.id;
        const isHov = hoveredId === m.id;
        const color = REGION_COLORS[m.region] ?? "#EC7914";
        const anchor = m.labelAnchor ?? "middle";
        const dy = m.labelDy ?? 14;
        const labelX = anchor === "start" ? 8 : anchor === "end" ? -8 : 0;

        return (
          <Marker
            key={m.id}
            coordinates={m.coordinates}
            onClick={() => onMarketClick(m)}
            onMouseEnter={() => onMarketHover(m.id)}
            onMouseLeave={() => onMarketHover(null)}
            style={{ cursor: "pointer" }}
          >
            <g>
              {/* ripple when hovered / active */}
              {(isActive || isHov) && (
                <circle
                  r={10}
                  fill={color}
                  opacity={0.15}
                  style={{ pointerEvents: "none" }}
                />
              )}
              {/* marker dot */}
              <circle
                r={isActive ? 5.5 : isHov ? 5 : 4}
                fill={isActive ? "#fff" : color}
                stroke={color}
                strokeWidth={isActive ? 2 : 1.2}
                style={{
                  transition: "r 0.25s, fill 0.25s",
                  filter:
                    isActive || isHov
                      ? `drop-shadow(0 0 5px ${color}99)`
                      : "none",
                }}
              />
              {/* label */}
              <text
                textAnchor={anchor}
                x={labelX}
                y={dy}
                style={{
                  fontFamily: "var(--font-manrope, 'Manrope', sans-serif)",
                  fontSize: "5.5px",
                  fontWeight: isActive || isHov ? 700 : 600,
                  fill: isActive || isHov ? color : "rgba(87,48,18,0.72)",
                  letterSpacing: "0.03em",
                  transition: "fill 0.25s, font-weight 0.25s",
                  pointerEvents: "none",
                  userSelect: "none",
                }}
              >
                {m.label}
              </text>
            </g>
          </Marker>
        );
      })}
    </ComposableMap>
  );
}

/* ─── Dynamic import with SSR disabled ─── */
const DynamicWorldMap = dynamic(
  () => Promise.resolve(WorldMap),
  { ssr: false, loading: () => <div className="gm-map-loading">Loading map…</div> }
);

/* ─────────────────────────────────────────────────────────────────
   MAIN SECTION
───────────────────────────────────────────────────────────────── */
export default function GlobalMarkets() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState<Market | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const handleMarketClick = (m: Market) => {
    setActive((prev) => (prev?.id === m.id ? null : m));
  };

  /* group sidebar list by region */
  const regionGroups: Record<string, Market[]> = {};
  MARKETS.forEach((m) => {
    if (!regionGroups[m.region]) regionGroups[m.region] = [];
    regionGroups[m.region].push(m);
  });

  return (
    <section
      id="global-markets"
      ref={sectionRef}
      className="gm-section"
      aria-label="Global Markets"
    >
      {/* Background orbs */}
      <div className="gm-orb gm-orb-a" aria-hidden="true" />
      <div className="gm-orb gm-orb-b" aria-hidden="true" />

      {/* Header */}
      <div className={`gm-header${inView ? " in-view" : ""}`}>
        <span className="eyebrow">Global Reach</span>
        <h2 className="serif gm-title">From Egypt to the&nbsp;World</h2>
        <p className="gm-lead">
          HBanna exports premium Egyptian agricultural products to international
          markets across Europe, Asia, Africa, Latin America, and beyond.
        </p>
      </div>

      {/* Map + Sidebar */}
      <div className={`gm-body${inView ? " in-view" : ""}`}>
        {/* MAP */}
        <div className="gm-map-wrap" role="img" aria-label="World map showing HBanna export markets">
          <DynamicWorldMap
            activeId={active?.id ?? null}
            hoveredId={hovered}
            onMarketClick={handleMarketClick}
            onMarketHover={setHovered}
          />
        </div>

        {/* SIDEBAR */}
        <aside className="gm-sidebar">
          {/* Info panel */}
          <div className={`gm-info-panel${active ? " is-visible" : ""}`}>
            {active ? (
              <>
                <span className="gm-info-region">{active.region}</span>
                <h3 className="gm-info-title serif">{active.label}</h3>
                <p className="gm-info-tagline">{active.tagline}</p>
                <button
                  type="button"
                  className="gm-info-close"
                  onClick={() => setActive(null)}
                  aria-label="Deselect market"
                >
                  ✕ Deselect
                </button>
              </>
            ) : (
              <p className="gm-info-placeholder">
                Select a market on the map to learn more.
              </p>
            )}
          </div>

          {/* Region list */}
          <div className="gm-region-list">
            {Object.entries(regionGroups).map(([region, markets]) => (
              <div key={region} className="gm-region-group">
                <span className="gm-region-heading">{region}</span>
                <ul className="gm-region-markets">
                  {markets.map((m) => (
                    <li key={m.id}>
                      <button
                        type="button"
                        className={`gm-region-btn${active?.id === m.id ? " is-active" : ""}`}
                        onClick={() => handleMarketClick(m)}
                        onMouseEnter={() => setHovered(m.id)}
                        onMouseLeave={() => setHovered(null)}
                        aria-pressed={active?.id === m.id}
                      >
                        <span
                          className="gm-region-dot"
                          style={{
                            background:
                              REGION_COLORS[region] ?? "#EC7914",
                          }}
                        />
                        {m.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </aside>
      </div>

      {/* Footnote */}
      <p className="gm-footnote">
        HBanna exports from Egypt — our international reach continues to grow.
      </p>
    </section>
  );
}
