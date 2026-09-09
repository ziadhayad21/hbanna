"use client";

import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import dynamic from "next/dynamic";
import { useLanguage } from "@/contexts/LanguageProvider";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
} from "react-simple-maps";

/* ─────────────────────────────────────────────────────────────
   VERIFIED EXPORT DESTINATIONS DATA (Preserved Exactly)
   [longitude, latitude]
───────────────────────────────────────────────────────────── */
export type Market = {
  id: string;
  label: string;
  region: string;
  coordinates: [number, number];
  tagline: string;
  labelAnchor?: "start" | "middle" | "end";
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
    labelDy: -12,
  },
  {
    id: "russia",
    label: "Russia",
    region: "Eurasia",
    coordinates: [60.0, 55.8],
    tagline: "Citrus, fresh fruits and vegetables for Russian distributors.",
    labelAnchor: "middle",
    labelDy: -12,
  },
  {
    id: "morocco",
    label: "Morocco",
    region: "Africa",
    coordinates: [-7.1, 31.8],
    tagline: "Egyptian citrus and fresh produce to North African markets.",
    labelAnchor: "end",
    labelDy: 14,
  },
  {
    id: "senegal",
    label: "Senegal",
    region: "Africa",
    coordinates: [-14.5, 14.5],
    tagline: "Fresh agricultural produce for West African markets.",
    labelAnchor: "end",
    labelDy: 14,
  },
  {
    id: "ethiopia",
    label: "Ethiopia",
    region: "Africa",
    coordinates: [40.5, 9.1],
    tagline: "Grains, pulses and fresh produce for Ethiopian buyers.",
    labelAnchor: "start",
    labelDy: 14,
  },
  {
    id: "kenya",
    label: "Kenya",
    region: "Africa",
    coordinates: [37.9, 0.0],
    tagline: "Fresh produce and dates for East African buyers.",
    labelAnchor: "start",
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
    labelAnchor: "end",
    labelDy: 14,
  },
  {
    id: "southafrica",
    label: "South Africa",
    region: "Africa",
    coordinates: [25.1, -29.0],
    tagline: "Dates and dried products to South African importers.",
    labelAnchor: "middle",
    labelDy: 16,
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
    labelDy: -12,
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
  {
    id: "uae",
    label: "UAE",
    region: "Asia",
    coordinates: [54.4, 23.7],
    tagline: "Premium dates, citrus and fresh produce to Gulf importers.",
    labelAnchor: "start",
    labelDy: 14,
  },
  {
    id: "india",
    label: "India",
    region: "Asia",
    coordinates: [78.9, 20.6],
    tagline: "Egyptian herbs, spices and commodities for Indian trade partners.",
    labelAnchor: "end",
    labelDy: 14,
  },
  {
    id: "bangladesh",
    label: "Bangladesh",
    region: "Asia",
    coordinates: [90.4, 23.7],
    tagline: "Pulses, grains and fresh produce for Bangladeshi buyers.",
    labelAnchor: "start",
    labelDy: 14,
  },
  {
    id: "malaysia",
    label: "Malaysia",
    region: "Asia",
    coordinates: [109.7, 4.2],
    tagline: "Egyptian agricultural products for Malaysian distributors.",
    labelAnchor: "start",
    labelDy: 14,
  },
  {
    id: "thailand",
    label: "Thailand",
    region: "Asia",
    coordinates: [100.9, 15.9],
    tagline: "Premium Egyptian herbs, spices and fresh produce to Thailand.",
    labelAnchor: "end",
    labelDy: 14,
  },
  {
    id: "singapore",
    label: "Singapore",
    region: "Asia",
    coordinates: [103.8, 1.4],
    tagline: "High-grade Egyptian produce for Singapore's premium retail sector.",
    labelAnchor: "start",
    labelDy: 14,
  },
  {
    id: "indonesia",
    label: "Indonesia",
    region: "Asia",
    coordinates: [117.9, -2.5],
    tagline: "Egyptian agricultural commodities for Indonesian importers.",
    labelAnchor: "start",
    labelDy: 14,
  },
  {
    id: "brunei",
    label: "Brunei",
    region: "Asia",
    coordinates: [114.7, 4.5],
    tagline: "Premium Egyptian dates and fresh produce to Brunei.",
    labelAnchor: "start",
    labelDy: -12,
  },
  {
    id: "taiwan",
    label: "Taiwan",
    region: "Asia",
    coordinates: [120.9, 23.7],
    tagline: "Export-grade Egyptian produce for Taiwanese markets.",
    labelAnchor: "start",
    labelDy: 14,
  },
  {
    id: "hongkong",
    label: "Hong Kong",
    region: "Asia",
    coordinates: [114.2, 22.3],
    tagline: "Premium Egyptian fresh produce for Hong Kong specialty retail.",
    labelAnchor: "end",
    labelDy: -12,
  },
  {
    id: "southkorea",
    label: "South Korea",
    region: "Asia",
    coordinates: [127.8, 36.5],
    tagline: "Egyptian agricultural exports for South Korean importers.",
    labelAnchor: "start",
    labelDy: 14,
  },
  {
    id: "japan",
    label: "Japan",
    region: "Asia",
    coordinates: [138.3, 36.2],
    tagline: "Premium-grade Egyptian produce meeting Japanese standards.",
    labelAnchor: "start",
    labelDy: 14,
  },
  {
    id: "france",
    label: "France",
    region: "Europe",
    coordinates: [2.3, 46.2],
    tagline: "Egyptian citrus, dates and fresh produce for French importers.",
    labelAnchor: "end",
    labelDy: -12,
  },
  {
    id: "netherlands",
    label: "Netherlands",
    region: "Europe",
    coordinates: [5.3, 52.1],
    tagline: "Serving Dutch wholesale hubs as a key European gateway.",
    labelAnchor: "middle",
    labelDy: -12,
  },
  {
    id: "germany",
    label: "Germany",
    region: "Europe",
    coordinates: [10.5, 51.2],
    tagline: "High-quality Egyptian produce for German wholesale and retail.",
    labelAnchor: "middle",
    labelDy: -12,
  },
  {
    id: "poland",
    label: "Poland",
    region: "Europe",
    coordinates: [19.1, 51.9],
    tagline: "Egyptian citrus and fresh vegetables for Polish distributors.",
    labelAnchor: "start",
    labelDy: -12,
  },
  {
    id: "romania",
    label: "Romania",
    region: "Europe",
    coordinates: [24.9, 45.9],
    tagline: "Egyptian fresh produce and pulses for Romanian trade partners.",
    labelAnchor: "start",
    labelDy: 14,
  },
  {
    id: "spain",
    label: "Spain",
    region: "Europe",
    coordinates: [-3.7, 40.4],
    tagline: "Egyptian citrus and vegetables for Spanish import channels.",
    labelAnchor: "end",
    labelDy: -12,
  },
  {
    id: "turkey",
    label: "Turkey",
    region: "Eurasia",
    coordinates: [35.2, 39.0],
    tagline: "Egyptian herbs, spices and fresh produce for Turkish buyers.",
    labelAnchor: "start",
    labelDy: 14,
  },
  {
    id: "kazakhstan",
    label: "Kazakhstan",
    region: "Eurasia",
    coordinates: [66.9, 48.0],
    tagline: "Agricultural commodities and fresh produce for Kazakh markets.",
    labelAnchor: "middle",
    labelDy: -12,
  },
  {
    id: "capeverde",
    label: "Cape Verde",
    region: "Africa",
    coordinates: [-23.6, 16.0],
    tagline: "Egyptian produce and dates for Cape Verde island markets.",
    labelAnchor: "end",
    labelDy: 14,
  },
  {
    id: "seychelles",
    label: "Seychelles",
    region: "Africa",
    coordinates: [55.5, -4.7],
    tagline: "Specialty Egyptian agricultural products to Seychelles.",
    labelAnchor: "start",
    labelDy: 14,
  },
];

const EGYPT_COORDS: [number, number] = [30.8, 26.8];
const TOPO_URL = "/data/countries-110m.json";

const REGIONS = [
  "All",
  "Africa",
  "Europe",
  "Asia",
  "Eurasia",
  "Latin America",
  "Australia & Oceania",
] as const;

/* ─────────────────────────────────────────────────────────────
   INNER MAP COMPONENT (Subtle, realistic, high-precision)
───────────────────────────────────────────────────────────── */
function WorldMapInner({
  activeId,
  hoveredId,
  selectedRegion,
  onMarketClick,
  onMarketHover,
}: {
  activeId: string | null;
  hoveredId: string | null;
  selectedRegion: string;
  onMarketClick: (m: Market) => void;
  onMarketHover: (id: string | null) => void;
}) {
  return (
    <ComposableMap
      projectionConfig={{ scale: 152, center: [22, 12] }}
      width={960}
      height={490}
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      <defs>
        {/* Subtle architectural coordinate grid pattern */}
        <pattern id="gm-geo-grid" patternUnits="userSpaceOnUse" width="48" height="48">
          <path
            d="M 48 0 L 0 0 0 48"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="gm-grid-line"
          />
        </pattern>
      </defs>

      {/* Subtle coordinate backdrop */}
      <rect width={960} height={490} fill="url(#gm-geo-grid)" className="gm-grid-rect" />

      {/* Global Countries & Continents */}
      <Geographies geography={TOPO_URL}>
        {({ geographies }: { geographies: { rsmKey: string }[] }) =>
          geographies.map((geo) => (
            <Geography
              key={(geo as { rsmKey: string }).rsmKey}
              geography={geo}
              className="gm-land-mass"
              style={{
                default: { outline: "none" },
                hover: { outline: "none" },
                pressed: { outline: "none" },
              }}
            />
          ))
        }
      </Geographies>

      {/* Egypt Origin Country Highlight */}
      <Geographies geography={TOPO_URL}>
        {({ geographies }: { geographies: { rsmKey: string; properties: { name: string } }[] }) =>
          geographies
            .filter((geo) => (geo as { properties: { name: string } }).properties.name === "Egypt")
            .map((geo) => (
              <Geography
                key={(geo as { rsmKey: string }).rsmKey}
                geography={geo}
                className="gm-egypt-highlight"
                style={{
                  default: { outline: "none" },
                  hover: { outline: "none" },
                  pressed: { outline: "none" },
                }}
              />
            ))
        }
      </Geographies>

      {/* Maritime Shipping Corridors (Egypt → Destination) */}
      {MARKETS.map((m) => {
        const isTarget = activeId === m.id || hoveredId === m.id;
        const isRegionMatch = selectedRegion === "All" || m.region === selectedRegion;

        return (
          <Line
            key={`route-${m.id}`}
            from={EGYPT_COORDS}
            to={m.coordinates}
            className={`gm-shipping-lane ${isTarget ? "is-active" : ""} ${
              isRegionMatch ? "is-visible" : "is-muted"
            }`}
            strokeLinecap="round"
          />
        );
      })}

      {/* Egypt Origin Hub Pin */}
      <Marker coordinates={EGYPT_COORDS}>
        <g className="gm-origin-group">
          <circle r={12} className="gm-origin-ring" />
          <circle r={7} className="gm-origin-mid" />
          <circle r={3.5} className="gm-origin-core" />
          <text textAnchor="middle" y={-14} className="gm-origin-text">
            CAIRO / ALEXANDRIA HUB
          </text>
        </g>
      </Marker>

      {/* Destination Markers */}
      {MARKETS.map((m) => {
        const isActive = activeId === m.id;
        const isHov = hoveredId === m.id;
        const isRegionMatch = selectedRegion === "All" || m.region === selectedRegion;
        const anchor = m.labelAnchor ?? "middle";
        const dy = m.labelDy ?? 14;
        const labelX = anchor === "start" ? 7 : anchor === "end" ? -7 : 0;

        return (
          <Marker
            key={m.id}
            coordinates={m.coordinates}
            onClick={() => onMarketClick(m)}
            onMouseEnter={() => onMarketHover(m.id)}
            onMouseLeave={() => onMarketHover(null)}
            style={{ cursor: "pointer" }}
          >
            <g className={`gm-marker-group ${isActive ? "is-active" : ""} ${isHov ? "is-hovered" : ""} ${
              isRegionMatch ? "is-in-region" : "is-out-region"
            }`}>
              {/* Outer accent ring when selected or hovered */}
              <circle r={isActive ? 11 : isHov ? 9 : 7} className="gm-marker-halo" />
              {/* Core destination pin */}
              <circle r={isActive ? 4.5 : isHov ? 4 : 3} className="gm-marker-dot" />

              {/* Destination typography label */}
              <text
                textAnchor={anchor}
                x={labelX}
                y={dy}
                className="gm-marker-label"
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

const DynamicWorldMap = dynamic(
  () => Promise.resolve(WorldMapInner),
  {
    ssr: false,
    loading: () => (
      <div className="gm-map-skeleton">
        <div className="gm-map-skeleton-spinner" />
        <span>Loading International Freight Cartography…</span>
      </div>
    ),
  }
);

/* ─────────────────────────────────────────────────────────────
   MAIN SECTION COMPONENT
───────────────────────────────────────────────────────────── */
export default function GlobalMarkets() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const [activeMarketId, setActiveMarketId] = useState<string>("europe");
  const [hoveredMarketId, setHoveredMarketId] = useState<string | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<string>("All");

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const activeMarket = useMemo(
    () => MARKETS.find((m) => m.id === activeMarketId) || MARKETS[0],
    [activeMarketId]
  );

  const filteredMarkets = useMemo(() => {
    if (selectedRegion === "All") return MARKETS;
    return MARKETS.filter((m) => m.region === selectedRegion);
  }, [selectedRegion]);

  const handleMarketSelect = useCallback((m: Market) => {
    setActiveMarketId(m.id);
  }, []);

  // Inquiry quote CTA: scrolls to #contact (or redirects to /contact)
  const handleInquireClick = useCallback((marketLabel: string) => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      const destinationSelect = document.getElementById("quoteDestination") as HTMLSelectElement | null;
      if (destinationSelect) {
        // Find matching or similar option
        const options = Array.from(destinationSelect.options);
        const match = options.find((opt) =>
          opt.value.toLowerCase().includes(marketLabel.toLowerCase()) ||
          marketLabel.toLowerCase().includes(opt.value.toLowerCase())
        );
        if (match) {
          destinationSelect.value = match.value;
          destinationSelect.dispatchEvent(new Event("change", { bubbles: true }));
        }
      }
    } else {
      window.location.href = `/contact?destination=${encodeURIComponent(marketLabel)}`;
    }
  }, []);

  return (
    <section
      id="global-markets"
      ref={sectionRef}
      className="gm-section"
      aria-label="Export Destinations & Global Trade Network"
    >
      <div className="gm-container">
        {/* ── Editorial Header ── */}
        <div className={`gm-header ${inView ? "in-view" : ""}`}>
          <div className="gm-eyebrow-row">
            <span className="gm-eyebrow-pip" aria-hidden="true" />
            <span className="eyebrow">{t.countriesPage?.eyebrow}</span>
          </div>

          <h2 className="serif gm-title">
            {t.countriesPage?.title1} <span className="gm-title-accent">{t.countriesPage?.title2}</span>
          </h2>

          <p className="gm-lead">
            {t.countriesPage?.desc}
          </p>

          {/* Institutional Trade Metrics Bar */}
          <div className="gm-stats-ribbon">
            <div className="gm-stat-item">
              <span className="gm-stat-number">{MARKETS.length}+</span>
              <span className="gm-stat-label">{t.countriesPage?.activeCorridors}</span>
            </div>
            <div className="gm-stat-divider" aria-hidden="true" />
            <div className="gm-stat-item">
              <span className="gm-stat-number">4</span>
              <span className="gm-stat-label">{t.countriesPage?.continentsServed}</span>
            </div>
            <div className="gm-stat-divider" aria-hidden="true" />
            <div className="gm-stat-item">
              <span className="gm-stat-number">{t.countriesPage?.directOrigin}</span>
              <span className="gm-stat-label">{t.countriesPage?.seaPorts}</span>
            </div>
          </div>
        </div>

        {/* ── Main Composition: Interactive Atlas + Executive Dossier ── */}
        <div className={`gm-layout ${inView ? "in-view" : ""}`}>
          {/* Left / Centerpiece: The World Map Card */}
          <div className="gm-map-canvas-card">
            {/* Top Toolbar: Geographic Region Filter */}
            <div className="gm-map-toolbar">
              <div className="gm-toolbar-left">
                <span className="gm-toolbar-label">{t.countriesPage?.activeCorridorFilter}</span>
                <div className="gm-region-pills" role="tablist" aria-label="Filter export corridors by continent">
                  {REGIONS.map((r) => (
                    <button
                      key={r}
                      type="button"
                      role="tab"
                      aria-selected={selectedRegion === r}
                      className={`gm-region-pill ${selectedRegion === r ? "is-active" : ""}`}
                      onClick={() => setSelectedRegion(r)}
                    >
                      {t.countriesPage?.regions?.[r] || r}
                    </button>
                  ))}
                </div>
              </div>

              <div className="gm-toolbar-right">
                <span className="gm-legend-indicator">
                  <span className="gm-dot-live" aria-hidden="true" />
                  {t.countriesPage?.directCargo}
                </span>
              </div>
            </div>

            {/* Map Frame */}
            <div className="gm-map-viewport" role="img" aria-label="Interactive world map showing HBanna export trade lanes">
              <DynamicWorldMap
                activeId={activeMarketId}
                hoveredId={hoveredMarketId}
                selectedRegion={selectedRegion}
                onMarketClick={handleMarketSelect}
                onMarketHover={setHoveredMarketId}
              />
            </div>

            {/* Bottom Map Status Bar */}
            <div className="gm-map-footer">
              <div className="gm-map-footer-origin">
                <span className="gm-footer-dot" aria-hidden="true" />
                <span>{t.countriesPage?.primaryLoading}</span>
              </div>
              <div className="gm-map-footer-hint">
                <span>{t.countriesPage?.clickHint}</span>
              </div>
            </div>
          </div>

          {/* Right: Destination Dossier & Trade Corridor Directory */}
          <aside className="gm-dossier-panel">
            {/* Active Destination Dossier Card */}
            <div className="gm-active-dossier">
              <div className="gm-dossier-header">
                <div className="gm-dossier-meta">
                  <span className="gm-dossier-badge">{t.countriesPage?.regions?.[activeMarket.region] || activeMarket.region} {t.countriesPage?.corridorSuffix}</span>
                  <span className="gm-dossier-coords">
                    {Math.abs(activeMarket.coordinates[1]).toFixed(1)}°{activeMarket.coordinates[1] >= 0 ? "N" : "S"},{" "}
                    {Math.abs(activeMarket.coordinates[0]).toFixed(1)}°{activeMarket.coordinates[0] >= 0 ? "E" : "W"}
                  </span>
                </div>
                <h3 className="serif gm-dossier-title">{t.countriesPage?.markets?.[activeMarket.id]?.label || activeMarket.label}</h3>
              </div>

              <div className="gm-dossier-body">
                <div className="gm-dossier-row">
                  <span className="gm-dossier-label">{t.countriesPage?.commercialScope}</span>
                  <p className="gm-dossier-tagline">{t.countriesPage?.markets?.[activeMarket.id]?.tagline || activeMarket.tagline}</p>
                </div>

                <div className="gm-dossier-specs">
                  <div className="gm-spec-cell">
                    <span className="gm-spec-lbl">{t.countriesPage?.exportOrigin}</span>
                    <strong className="gm-spec-val">{t.countriesPage?.egyptDirect}</strong>
                  </div>
                  <div className="gm-spec-cell">
                    <span className="gm-spec-lbl">{t.countriesPage?.modality}</span>
                    <strong className="gm-spec-val">{t.countriesPage?.reeferAir}</strong>
                  </div>
                  <div className="gm-spec-cell">
                    <span className="gm-spec-lbl">{t.countriesPage?.qualityProtocol}</span>
                    <strong className="gm-spec-val">{t.countriesPage?.globalGap}</strong>
                  </div>
                  <div className="gm-spec-cell">
                    <span className="gm-spec-lbl">{t.countriesPage?.documentation}</span>
                    <strong className="gm-spec-val">{t.countriesPage?.eur1}</strong>
                  </div>
                </div>

                <button
                  type="button"
                  className="gm-dossier-cta"
                  onClick={() => handleInquireClick(activeMarket.label)}
                >
                  <span>{t.countriesPage?.requestAllocation} {t.countriesPage?.markets?.[activeMarket.id]?.label || activeMarket.label}</span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M2 6h8M7 3l3 3-3 3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Corridor Directory Index */}
            <div className="gm-directory-card">
              <div className="gm-directory-header">
                <h4 className="gm-directory-heading">{t.countriesPage?.commercialCorridors} ({filteredMarkets.length})</h4>
                <span className="gm-directory-sub">{t.countriesPage?.clickToSpotlight}</span>
              </div>

              <div className="gm-directory-list">
                {filteredMarkets.map((m) => {
                  const isCurrent = activeMarketId === m.id;
                  const isHover = hoveredMarketId === m.id;

                  return (
                    <button
                      key={m.id}
                      type="button"
                      className={`gm-corridor-item ${isCurrent ? "is-active" : ""} ${isHover ? "is-hovered" : ""}`}
                      onClick={() => handleMarketSelect(m)}
                      onMouseEnter={() => setHoveredMarketId(m.id)}
                      onMouseLeave={() => setHoveredMarketId(null)}
                    >
                      <div className="gm-corridor-indicator" aria-hidden="true" />
                      <div className="gm-corridor-info">
                        <span className="gm-corridor-name">{t.countriesPage?.markets?.[m.id]?.label || m.label}</span>
                        <span className="gm-corridor-reg">{t.countriesPage?.regions?.[m.region] || m.region}</span>
                      </div>
                      <svg
                        className="gm-corridor-arrow"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        aria-hidden="true"
                      >
                        <path d="M3 6h6M6 3l3 3-3 3" />
                      </svg>
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>
        </div>

        {/* ── Mobile-Dedicated Scannable Corridor Strip ── */}
        <div className={`gm-mobile-corridors ${inView ? "in-view" : ""}`}>
          <div className="gm-mobile-header">
            <span>Explore All {MARKETS.length} Export Corridors:</span>
          </div>
          <div className="gm-mobile-chips-scroll">
            {MARKETS.map((m) => {
              const isSelected = activeMarketId === m.id;
              return (
                <button
                  key={`mob-${m.id}`}
                  type="button"
                  className={`gm-mobile-chip ${isSelected ? "is-active" : ""}`}
                  onClick={() => handleMarketSelect(m)}
                >
                  <span className="gm-mobile-chip-dot" aria-hidden="true" />
                  <span>{m.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Editorial Assurance Note ── */}
        <div className={`gm-footnote-box ${inView ? "in-view" : ""}`}>
          <p>
            <strong>Port Operations & Forward Logistics:</strong> HBanna operates seamless cold-chain logistics from our centralized packhouses directly to major Mediterranean and Red Sea container terminals. For custom forward-booking, CIF delivery terms, or new regional market inquiries, contact our Alexandria export desk.
          </p>
        </div>
      </div>
    </section>
  );
}
