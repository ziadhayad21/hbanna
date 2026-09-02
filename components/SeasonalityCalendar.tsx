"use client";

import { useState, useRef, useEffect, useCallback } from "react";

/* ─────────────────────────────────────────────────────────────
   TYPES
───────────────────────────────────────────────────────────── */
type Avail = 0 | 1 | 2; // 0=not available · 1=limited · 2=available

type SeasonProduct = {
  id: string;
  name: string;
  /** 12 values: index 0 = January … index 11 = December */
  months: Avail[];
};

type SeasonCategory = {
  id: string;
  label: string;
  emoji: string;
  products: SeasonProduct[];
};

/* ─────────────────────────────────────────────────────────────
   HELPER – build a 12-slot availability array
   available = full season; limited = shoulder / stored supply
───────────────────────────────────────────────────────────── */
function avail(available: number[], limited: number[] = []): Avail[] {
  return Array.from({ length: 12 }, (_, i) => {
    const m = i + 1;
    if (available.includes(m)) return 2;
    if (limited.includes(m)) return 1;
    return 0;
  });
}

/* ─────────────────────────────────────────────────────────────
   SEASONALITY DATA
   Sourced from harvestMonths in lib/products.ts.
   "limited" = shoulder season / cold-store availability.
   No data is invented; all months are based on Egyptian
   agricultural production windows.
───────────────────────────────────────────────────────────── */
const CATEGORIES: SeasonCategory[] = [
  /* ── CITRUS ── */
  {
    id: "citrus",
    label: "Citrus",
    emoji: "🍊",
    products: [
      { id: "navel",        name: "Navel Oranges",     months: avail([11,12,1,2,3,4]) },
      { id: "valencia",     name: "Valencia Oranges",  months: avail([3,4,5,6]) },
      { id: "baladi",       name: "Baladi Oranges",    months: avail([12,1,2,3]) },
      { id: "sweet-orange", name: "Sweet Oranges",     months: avail([11,12,1,2]) },
      { id: "shamouti",     name: "Shamouti",           months: avail([1,2,3,4]) },
      { id: "blood",        name: "Blood Oranges",      months: avail([12,1,2,3]) },
      { id: "mandarins",    name: "Mandarins",           months: avail([10,11,12,1]) },
      { id: "murcott",      name: "Murcott Mandarins",  months: avail([1,2,3]) },
      { id: "easy",         name: "Easy Peelers",        months: avail([10,11,12]) },
      { id: "lemons",       name: "Lemons",              months: avail([10,11,12,1,2,3,4,5,6]) },
      { id: "limes",        name: "Limes",               months: avail([6,7,8,9,10]) },
      { id: "grapefruit",   name: "Grapefruit",          months: avail([11,12,1,2,3,4]) },
    ],
  },
  /* ── DATES ── */
  {
    id: "dates",
    label: "Dates",
    emoji: "🌴",
    products: [
      { id: "semi-dry",      name: "Semi-Dry Dates",     months: avail([8,9,10]) },
      { id: "dry",           name: "Dry Dates",           months: avail([9,10,11]) },
      { id: "medjool",       name: "Medjool Dates",       months: avail([9,10]) },
      { id: "barhi",         name: "Fresh Barhi Dates",   months: avail([8,9]) },
      { id: "fresh-dates",   name: "Fresh Dates",         months: avail([8,9,10,11]) },
      { id: "premium-dates", name: "Premium Varieties",   months: avail([8,9,10,11]) },
      { id: "date-products", name: "Date Products",       months: avail([8,9,10,11,12],[1,2,3,4,5,6,7]) },
    ],
  },
  /* ── FRESH FRUITS ── */
  {
    id: "fresh-fruits",
    label: "Fresh Fruits",
    emoji: "🍇",
    products: [
      { id: "grapes",       name: "Grapes",          months: avail([6,7,8,9]) },
      { id: "pomegranates", name: "Pomegranates",    months: avail([9,10,11,12]) },
      { id: "mangoes",      name: "Mangoes",         months: avail([6,7,8,9]) },
      { id: "strawberries", name: "Strawberries",    months: avail([12,1,2,3,4]) },
      { id: "peaches",      name: "Peaches",         months: avail([4,5,6,7]) },
      { id: "apricots",     name: "Apricots",        months: avail([4,5,6]) },
      { id: "melons",       name: "Melons",          months: avail([4,5,6,7,8]) },
      { id: "watermelons",  name: "Watermelons",     months: avail([4,5,6,7,8]) },
      { id: "guava",        name: "Guava",           months: avail([7,8,9,11,12,1]) },
    ],
  },
  /* ── VEGETABLES ── */
  {
    id: "vegetables",
    label: "Vegetables",
    emoji: "🥕",
    products: [
      { id: "onions",        name: "Red & Yellow Onions", months: avail([2,3,4,5,6]) },
      { id: "garlic",        name: "Garlic",               months: avail([3,4,5,6]) },
      { id: "potatoes",      name: "Potatoes",             months: avail([2,3,4,5,10,11]) },
      { id: "sweet-potato",  name: "Sweet Potatoes",       months: avail([9,10,11,12,1,2]) },
      { id: "tomatoes",      name: "Tomatoes",             months: avail([11,12,1,2,3,4,5]) },
      { id: "peppers",       name: "Peppers",              months: avail([11,12,1,2,3,4,5]) },
      { id: "cucumbers",     name: "Cucumbers",            months: avail([11,12,1,2,3,4]) },
      { id: "carrots",       name: "Carrots",              months: avail([11,12,1,2,3,4]) },
      { id: "broccoli",      name: "Broccoli",             months: avail([11,12,1,2,3]) },
      { id: "eggplant",      name: "Eggplant",             months: avail([3,4,5,6,10,11,12]) },
      { id: "okra",          name: "Okra",                 months: avail([5,6,7,8,9,10]) },
    ],
  },
];

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const MONTHS_LONG = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];

/* ─────────────────────────────────────────────────────────────
   CELL COMPONENT
───────────────────────────────────────────────────────────── */
function Cell({
  avail,
  dimRow,
  dimCol,
  highlightRow,
  highlightCol,
  isRowSelected,
  isColSelected,
}: {
  avail: Avail;
  dimRow: boolean;
  dimCol: boolean;
  highlightRow: boolean;
  highlightCol: boolean;
  isRowSelected: boolean;
  isColSelected: boolean;
}) {
  const dim = (dimRow || dimCol) && !highlightRow && !highlightCol;
  const active = highlightRow || highlightCol;

  let cls = "sc-cell";
  if (avail === 2) cls += " sc-cell--full";
  else if (avail === 1) cls += " sc-cell--limited";
  else cls += " sc-cell--none";

  if (dim) cls += " sc-cell--dim";
  if (active && avail > 0) cls += " sc-cell--glow";
  if (isRowSelected || isColSelected) cls += " sc-cell--selected-axis";

  return <div className={cls} aria-hidden="true" />;
}

/* ─────────────────────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────────────────────── */
export default function SeasonalityCalendar() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  const [catId, setCatId]   = useState("citrus");
  const [rowId, setRowId]   = useState<string | null>(null);
  const [colIdx, setColIdx] = useState<number | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.06 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const category = CATEGORIES.find((c) => c.id === catId)!;

  /* Reset row/col selection when category changes */
  const handleCatChange = useCallback((id: string) => {
    setCatId(id);
    setRowId(null);
    setColIdx(null);
  }, []);

  const handleRowClick = useCallback((id: string) => {
    setRowId((prev) => (prev === id ? null : id));
    setColIdx(null);
  }, []);

  const handleColClick = useCallback((idx: number) => {
    setColIdx((prev) => (prev === idx ? null : idx));
    setRowId(null);
  }, []);

  /* ── derive info bar content ── */
  const selectedProduct = rowId
    ? category.products.find((p) => p.id === rowId)
    : null;

  const availableInMonth = colIdx !== null
    ? category.products.filter((p) => p.months[colIdx] > 0)
    : [];

  /* ── info bar text ── */
  let infoText: React.ReactNode = (
    <span className="sc-info-hint">
      Click a <strong>product row</strong> or a <strong>month column</strong> to explore availability.
    </span>
  );
  if (selectedProduct) {
    const availMonths = selectedProduct.months
      .map((a, i) => ({ a, i }))
      .filter(({ a }) => a > 0)
      .map(({ a, i }) => (
        <span key={i} className={`sc-info-month${a === 2 ? " full" : " limited"}`}>
          {MONTHS[i]}
        </span>
      ));
    infoText = (
      <>
        <strong className="sc-info-product">{selectedProduct.name}</strong>
        <span className="sc-info-sep">·</span>
        {availMonths.length > 0
          ? <span className="sc-info-months">{availMonths}</span>
          : <span className="sc-info-none">Data not yet available for this product</span>}
      </>
    );
  } else if (colIdx !== null) {
    infoText = (
      <>
        <strong className="sc-info-month-title">{MONTHS_LONG[colIdx]}</strong>
        <span className="sc-info-sep">·</span>
        {availableInMonth.length > 0 ? (
          <span className="sc-info-products">
            {availableInMonth.map((p) => (
              <span
                key={p.id}
                className={`sc-info-product-tag${p.months[colIdx] === 1 ? " limited" : ""}`}
              >
                {p.name}
              </span>
            ))}
          </span>
        ) : (
          <span className="sc-info-none">No products available this month in this category.</span>
        )}
      </>
    );
  }

  return (
    <section
      id="seasonality"
      ref={sectionRef}
      className="sc-section"
      aria-label="Seasonality Calendar"
    >
      {/* Decorative orbs */}
      <div className="sc-orb sc-orb-a" aria-hidden="true" />
      <div className="sc-orb sc-orb-b" aria-hidden="true" />

      {/* ── Header ── */}
      <div className={`sc-header${inView ? " in-view" : ""}`}>
        <span className="eyebrow">Sourcing Calendar</span>
        <h2 className="serif sc-title">When Can You Source It?</h2>
        <p className="sc-lead">
          A clear view of HBanna&apos;s product availability throughout the year —
          helping international buyers plan their sourcing schedule with confidence.
        </p>
      </div>

      {/* ── Category Tabs ── */}
      <div className={`sc-tabs-wrap${inView ? " in-view" : ""}`} role="tablist" aria-label="Product categories">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            role="tab"
            aria-selected={cat.id === catId}
            aria-controls={`sc-panel-${cat.id}`}
            className={`sc-tab${cat.id === catId ? " is-active" : ""}`}
            onClick={() => handleCatChange(cat.id)}
            type="button"
          >
            <span className="sc-tab-emoji" aria-hidden="true">{cat.emoji}</span>
            {cat.label}
          </button>
        ))}
      </div>

      {/* ── Calendar Grid ── */}
      <div
        className={`sc-grid-wrap${inView ? " in-view" : ""}`}
        id={`sc-panel-${catId}`}
        role="tabpanel"
      >
        {/* Horizontal scroll container */}
        <div className="sc-scroll">
          <div className="sc-grid" style={{ gridTemplateColumns: `180px repeat(12, 1fr)` }}>

            {/* ── Header row ── */}
            <div className="sc-corner" aria-hidden="true">
              <span className="sc-corner-hint">Product</span>
            </div>
            {MONTHS.map((m, mi) => (
              <button
                key={m}
                type="button"
                className={`sc-month-head${colIdx === mi ? " is-active" : ""}`}
                onClick={() => handleColClick(mi)}
                aria-pressed={colIdx === mi}
                aria-label={`Show products available in ${MONTHS_LONG[mi]}`}
              >
                {m}
              </button>
            ))}

            {/* ── Product rows ── */}
            {category.products.map((product) => {
              const isRowSel = rowId === product.id;
              const hasRowSel = rowId !== null;
              const hasColSel = colIdx !== null;

              return [
                /* Product name button */
                <button
                  key={`label-${product.id}`}
                  type="button"
                  className={`sc-product-label${isRowSel ? " is-active" : ""}`}
                  onClick={() => handleRowClick(product.id)}
                  aria-pressed={isRowSel}
                  aria-label={`Show availability for ${product.name}`}
                >
                  <span className="sc-product-name">{product.name}</span>
                  <svg
                    className="sc-label-arrow"
                    width="12" height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  >
                    <path d="M2 6h8M7 3l3 3-3 3" />
                  </svg>
                </button>,

                /* Month cells */
                ...product.months.map((a, mi) => (
                  <Cell
                    key={`${product.id}-${mi}`}
                    avail={a}
                    dimRow={hasRowSel && !isRowSel}
                    dimCol={hasColSel && colIdx !== mi}
                    highlightRow={isRowSel}
                    highlightCol={hasColSel && colIdx === mi}
                    isRowSelected={isRowSel}
                    isColSelected={hasColSel && colIdx === mi}
                  />
                )),
              ];
            })}
          </div>
        </div>

        {/* ── Info bar ── */}
        <div className={`sc-info-bar${selectedProduct || colIdx !== null ? " is-visible" : ""}`}>
          <div className="sc-info-content">
            {infoText}
          </div>
          {(selectedProduct || colIdx !== null) && (
            <button
              type="button"
              className="sc-info-clear"
              onClick={() => { setRowId(null); setColIdx(null); }}
              aria-label="Clear selection"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* ── Legend ── */}
      <div className={`sc-legend${inView ? " in-view" : ""}`} aria-label="Legend">
        <div className="sc-legend-item">
          <div className="sc-legend-swatch sc-legend-swatch--full" />
          <span>Available</span>
        </div>
        <div className="sc-legend-item">
          <div className="sc-legend-swatch sc-legend-swatch--limited" />
          <span>Limited / Stored Supply</span>
        </div>
        <div className="sc-legend-item">
          <div className="sc-legend-swatch sc-legend-swatch--none" />
          <span>Not Available</span>
        </div>
        <p className="sc-legend-note">
          Availability windows are indicative. Contact our export desk for confirmed scheduling.
        </p>
      </div>
    </section>
  );
}
