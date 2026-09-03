"use client";

import { useState, useRef, useEffect, useMemo, useCallback } from "react";

/* ─────────────────────────────────────────────────────────────
   TYPES & DATA MODELS
───────────────────────────────────────────────────────────── */
export type Avail = 0 | 1 | 2; // 0 = off-season, 1 = limited/stored, 2 = peak harvest

export type SeasonProduct = {
  id: string;
  name: string;
  categoryId: string;
  categoryLabel: string;
  /** 12 values: index 0 = January … index 11 = December */
  months: Avail[];
};

export type SeasonCategory = {
  id: string;
  label: string;
  products: SeasonProduct[];
};

/* ─────────────────────────────────────────────────────────────
   HELPER – build a 12-slot availability array (1-indexed input)
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
   SEASONALITY DATA (Exact same products & months preserved)
───────────────────────────────────────────────────────────── */
const CATEGORIES: SeasonCategory[] = [
  {
    id: "citrus",
    label: "Citrus",
    products: [
      { id: "navel",        name: "Navel Oranges",     categoryId: "citrus", categoryLabel: "Citrus", months: avail([11,12,1,2,3,4]) },
      { id: "valencia",     name: "Valencia Oranges",  categoryId: "citrus", categoryLabel: "Citrus", months: avail([3,4,5,6]) },
      { id: "baladi",       name: "Baladi Oranges",    categoryId: "citrus", categoryLabel: "Citrus", months: avail([12,1,2,3]) },
      { id: "sweet-orange", name: "Sweet Oranges",     categoryId: "citrus", categoryLabel: "Citrus", months: avail([11,12,1,2]) },
      { id: "shamouti",     name: "Shamouti",          categoryId: "citrus", categoryLabel: "Citrus", months: avail([1,2,3,4]) },
      { id: "blood",        name: "Blood Oranges",     categoryId: "citrus", categoryLabel: "Citrus", months: avail([12,1,2,3]) },
      { id: "mandarins",    name: "Mandarins",         categoryId: "citrus", categoryLabel: "Citrus", months: avail([10,11,12,1]) },
      { id: "murcott",      name: "Murcott Mandarins", categoryId: "citrus", categoryLabel: "Citrus", months: avail([1,2,3]) },
      { id: "easy",         name: "Easy Peelers",      categoryId: "citrus", categoryLabel: "Citrus", months: avail([10,11,12]) },
      { id: "lemons",       name: "Lemons",            categoryId: "citrus", categoryLabel: "Citrus", months: avail([10,11,12,1,2,3,4,5,6]) },
      { id: "limes",        name: "Limes",             categoryId: "citrus", categoryLabel: "Citrus", months: avail([6,7,8,9,10]) },
      { id: "grapefruit",   name: "Grapefruit",        categoryId: "citrus", categoryLabel: "Citrus", months: avail([11,12,1,2,3,4]) },
    ],
  },
  {
    id: "dates",
    label: "Dates",
    products: [
      { id: "semi-dry",      name: "Semi-Dry Dates",   categoryId: "dates", categoryLabel: "Dates", months: avail([8,9,10]) },
      { id: "dry",           name: "Dry Dates",         categoryId: "dates", categoryLabel: "Dates", months: avail([9,10,11]) },
      { id: "medjool",       name: "Medjool Dates",     categoryId: "dates", categoryLabel: "Dates", months: avail([9,10]) },
      { id: "barhi",         name: "Fresh Barhi Dates", categoryId: "dates", categoryLabel: "Dates", months: avail([8,9]) },
      { id: "fresh-dates",   name: "Fresh Dates",       categoryId: "dates", categoryLabel: "Dates", months: avail([8,9,10,11]) },
      { id: "premium-dates", name: "Premium Varieties", categoryId: "dates", categoryLabel: "Dates", months: avail([8,9,10,11]) },
      { id: "date-products", name: "Date Products",     categoryId: "dates", categoryLabel: "Dates", months: avail([8,9,10,11,12],[1,2,3,4,5,6,7]) },
    ],
  },
  {
    id: "fresh-fruits",
    label: "Fresh Fruits",
    products: [
      { id: "grapes",       name: "Grapes",          categoryId: "fresh-fruits", categoryLabel: "Fresh Fruits", months: avail([6,7,8,9]) },
      { id: "pomegranates", name: "Pomegranates",    categoryId: "fresh-fruits", categoryLabel: "Fresh Fruits", months: avail([9,10,11,12]) },
      { id: "mangoes",      name: "Mangoes",         categoryId: "fresh-fruits", categoryLabel: "Fresh Fruits", months: avail([6,7,8,9]) },
      { id: "strawberries", name: "Strawberries",    categoryId: "fresh-fruits", categoryLabel: "Fresh Fruits", months: avail([12,1,2,3,4]) },
      { id: "peaches",      name: "Peaches",         categoryId: "fresh-fruits", categoryLabel: "Fresh Fruits", months: avail([4,5,6,7]) },
      { id: "apricots",     name: "Apricots",        categoryId: "fresh-fruits", categoryLabel: "Fresh Fruits", months: avail([4,5,6]) },
      { id: "melons",       name: "Melons",          categoryId: "fresh-fruits", categoryLabel: "Fresh Fruits", months: avail([4,5,6,7,8]) },
      { id: "watermelons",  name: "Watermelons",     categoryId: "fresh-fruits", categoryLabel: "Fresh Fruits", months: avail([4,5,6,7,8]) },
      { id: "guava",        name: "Guava",           categoryId: "fresh-fruits", categoryLabel: "Fresh Fruits", months: avail([7,8,9,11,12,1]) },
    ],
  },
  {
    id: "vegetables",
    label: "Vegetables",
    products: [
      { id: "onions",        name: "Red & Yellow Onions", categoryId: "vegetables", categoryLabel: "Vegetables", months: avail([2,3,4,5,6]) },
      { id: "garlic",        name: "Garlic",              categoryId: "vegetables", categoryLabel: "Vegetables", months: avail([3,4,5,6]) },
      { id: "potatoes",      name: "Potatoes",            categoryId: "vegetables", categoryLabel: "Vegetables", months: avail([2,3,4,5,10,11]) },
      { id: "sweet-potato",  name: "Sweet Potatoes",      categoryId: "vegetables", categoryLabel: "Vegetables", months: avail([9,10,11,12,1,2]) },
      { id: "tomatoes",      name: "Tomatoes",            categoryId: "vegetables", categoryLabel: "Vegetables", months: avail([11,12,1,2,3,4,5]) },
      { id: "peppers",       name: "Peppers",             categoryId: "vegetables", categoryLabel: "Vegetables", months: avail([11,12,1,2,3,4,5]) },
      { id: "cucumbers",     name: "Cucumbers",           categoryId: "vegetables", categoryLabel: "Vegetables", months: avail([11,12,1,2,3,4]) },
      { id: "carrots",       name: "Carrots",             categoryId: "vegetables", categoryLabel: "Vegetables", months: avail([11,12,1,2,3,4]) },
      { id: "broccoli",      name: "Broccoli",            categoryId: "vegetables", categoryLabel: "Vegetables", months: avail([11,12,1,2,3]) },
      { id: "eggplant",      name: "Eggplant",            categoryId: "vegetables", categoryLabel: "Vegetables", months: avail([3,4,5,6,10,11,12]) },
      { id: "okra",          name: "Okra",                categoryId: "vegetables", categoryLabel: "Vegetables", months: avail([5,6,7,8,9,10]) },
    ],
  },
];

const ALL_PRODUCTS: SeasonProduct[] = CATEGORIES.flatMap((c) => c.products);

const MONTHS_SHORT = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const MONTHS_LETTERS = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
const MONTHS_FULL = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const QUARTERS = [
  { label: "Q1", range: "Jan – Mar", span: 3 },
  { label: "Q2", range: "Apr – Jun", span: 3 },
  { label: "Q3", range: "Jul – Sep", span: 3 },
  { label: "Q4", range: "Oct – Dec", span: 3 },
];

/* ─────────────────────────────────────────────────────────────
   HELPER: Summarize active season span as readable text
───────────────────────────────────────────────────────────── */
function getSeasonSummary(months: Avail[]): string {
  const peakIndices: number[] = [];
  const allActiveIndices: number[] = [];

  months.forEach((status, idx) => {
    if (status === 2) peakIndices.push(idx);
    if (status > 0) allActiveIndices.push(idx);
  });

  if (allActiveIndices.length === 12) return "Year-round availability";
  if (allActiveIndices.length === 0) return "Consult export desk";

  // Group continuous ranges
  const formatIndices = (indices: number[]) => {
    if (indices.length === 0) return "";
    const names = indices.map((i) => MONTHS_SHORT[i]);
    if (indices.length === 1) return names[0];
    // Check wrap-around e.g., Nov, Dec, Jan, Feb
    const isConsecutive = (a: number, b: number) => (b - a === 1) || (a === 11 && b === 0);
    // Simple start & end display
    return `${names[0]} – ${names[names.length - 1]}`;
  };

  const peakText = formatIndices(peakIndices);
  if (peakText) return `Peak: ${peakText}`;
  return `Harvest: ${formatIndices(allActiveIndices)}`;
}

/* ─────────────────────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────────────────────── */
export default function SeasonalityCalendar() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  // Filter & interaction state
  const [selectedCat, setSelectedCat] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedRowId, setSelectedRowId] = useState<string | null>(null);
  const [selectedColIdx, setSelectedColIdx] = useState<number | null>(null);
  const [mobileView, setMobileView] = useState<"cards" | "matrix">("cards");

  // Current calendar month for "IN SEASON NOW" detection
  const currentMonthIdx = useMemo(() => new Date().getMonth(), []);

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
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Filter products by category and optional search term
  const displayedProducts = useMemo(() => {
    let list = selectedCat === "all"
      ? ALL_PRODUCTS
      : (CATEGORIES.find((c) => c.id === selectedCat)?.products || []);

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.categoryLabel.toLowerCase().includes(q)
      );
    }

    return list;
  }, [selectedCat, searchQuery]);

  // Selected product object
  const activeProduct = useMemo(
    () => (selectedRowId ? ALL_PRODUCTS.find((p) => p.id === selectedRowId) || null : null),
    [selectedRowId]
  );

  // Products available in selected month
  const productsInSelectedMonth = useMemo(() => {
    if (selectedColIdx === null) return [];
    return displayedProducts.filter((p) => p.months[selectedColIdx] > 0);
  }, [selectedColIdx, displayedProducts]);

  // Total products currently in peak season this month
  const currentlyInSeasonCount = useMemo(
    () => ALL_PRODUCTS.filter((p) => p.months[currentMonthIdx] > 0).length,
    [currentMonthIdx]
  );

  // Handlers
  const handleCatSelect = useCallback((catId: string) => {
    setSelectedCat(catId);
    setSelectedRowId(null);
    setSelectedColIdx(null);
  }, []);

  const handleRowClick = useCallback((id: string) => {
    setSelectedRowId((prev) => (prev === id ? null : id));
    setSelectedColIdx(null);
  }, []);

  const handleColClick = useCallback((idx: number) => {
    setSelectedColIdx((prev) => (prev === idx ? null : idx));
    setSelectedRowId(null);
  }, []);

  const handleClearSelection = useCallback(() => {
    setSelectedRowId(null);
    setSelectedColIdx(null);
  }, []);

  // Quote CTA handler: scroll to #contact & prefill product (or redirect to /contact)
  const handleQuoteClick = useCallback((productName: string) => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      const input = document.getElementById("quoteProduct") as HTMLInputElement | null;
      if (input) {
        input.value = productName;
        input.dispatchEvent(new Event("input", { bubbles: true }));
        input.focus();
      }
    } else {
      window.location.href = `/contact?product=${encodeURIComponent(productName)}`;
    }
  }, []);

  return (
    <section
      id="seasonality"
      ref={sectionRef}
      className="sc-section"
      aria-label="Product Availability & Harvest Calendar"
    >
      <div className="sc-container">
        {/* ── Editorial Header ── */}
        <div className={`sc-header ${inView ? "in-view" : ""}`}>
          <div className="sc-eyebrow-wrap">
            <span className="sc-eyebrow-dot" aria-hidden="true" />
            <span className="eyebrow">Export Supply Planning</span>
          </div>

          <h2 className="serif sc-title">
            Seasonal Availability <span className="sc-title-accent">& Harvest Cycles</span>
          </h2>

          <p className="sc-lead">
            Direct tracking of Egyptian cultivation seasons, peak export windows, and cold-storage availability.
            Designed for international wholesale buyers and procurement directors planning annual import programs.
          </p>

          {/* Key B2B Procurement Proof Indicators */}
          <div className="sc-metrics-ribbon">
            <div className="sc-metric-pill">
              <span className="sc-metric-val">39</span>
              <span className="sc-metric-lbl">Commercial Varieties</span>
            </div>
            <div className="sc-metric-divider" aria-hidden="true" />
            <div className="sc-metric-pill">
              <span className="sc-metric-val">12 Months</span>
              <span className="sc-metric-lbl">Continuous Export Operations</span>
            </div>
            <div className="sc-metric-divider" aria-hidden="true" />
            <div className="sc-metric-pill sc-metric-pill--active">
              <span className="sc-metric-dot" aria-hidden="true" />
              <span className="sc-metric-val">{MONTHS_FULL[currentMonthIdx]}: {currentlyInSeasonCount}</span>
              <span className="sc-metric-lbl">Varieties Active for Shipping</span>
            </div>
          </div>
        </div>

        {/* ── Control Bar: Category Tabs, Search, Mobile View Switcher ── */}
        <div className={`sc-controls ${inView ? "in-view" : ""}`}>
          {/* Category Tabs */}
          <div className="sc-tabs-rail" role="tablist" aria-label="Filter produce category">
            <button
              type="button"
              role="tab"
              aria-selected={selectedCat === "all"}
              className={`sc-tab-btn ${selectedCat === "all" ? "is-active" : ""}`}
              onClick={() => handleCatSelect("all")}
            >
              <span>All Varieties</span>
              <span className="sc-tab-count">{ALL_PRODUCTS.length}</span>
            </button>

            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={selectedCat === cat.id}
                className={`sc-tab-btn ${selectedCat === cat.id ? "is-active" : ""}`}
                onClick={() => handleCatSelect(cat.id)}
              >
                <span>{cat.label}</span>
                <span className="sc-tab-count">{cat.products.length}</span>
              </button>
            ))}
          </div>

          {/* Search & View Mode Controls */}
          <div className="sc-actions-rail">
            {/* Produce Search */}
            <div className="sc-search-wrap">
              <svg
                className="sc-search-icon"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                className="sc-search-input"
                placeholder="Search 39 varieties..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Filter products by name"
              />
              {searchQuery && (
                <button
                  type="button"
                  className="sc-search-clear"
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear product search"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Mobile View Toggle */}
            <div className="sc-view-toggle" role="group" aria-label="Mobile calendar view layout">
              <button
                type="button"
                className={`sc-view-btn ${mobileView === "cards" ? "is-active" : ""}`}
                onClick={() => setMobileView("cards")}
                title="Switch to Mobile Timeline Cards"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="7" rx="2" />
                  <rect x="3" y="14" width="18" height="7" rx="2" />
                </svg>
                <span>Cards</span>
              </button>
              <button
                type="button"
                className={`sc-view-btn ${mobileView === "matrix" ? "is-active" : ""}`}
                onClick={() => setMobileView("matrix")}
                title="Switch to Full Seasonal Matrix Table"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <line x1="3" y1="9" x2="21" y2="9" />
                  <line x1="3" y1="15" x2="21" y2="15" />
                  <line x1="9" y1="3" x2="9" y2="21" />
                  <line x1="15" y1="3" x2="15" y2="21" />
                </svg>
                <span>Matrix</span>
              </button>
            </div>
          </div>
        </div>

        {/* ── DESKTOP & TABLET MATRIX TABLE (Clean, Architectural, Minimal) ── */}
        <div className={`sc-matrix-card ${mobileView === "cards" ? "mobile-hidden" : ""} ${inView ? "in-view" : ""}`}>
          <div className="sc-table-scroll-container">
            <table className="sc-table" role="grid" aria-label="Product Availability Table">
              <thead>
                {/* Quarter Super Header */}
                <tr className="sc-tr-quarters">
                  <th className="sc-th-corner" scope="col">
                    <span className="sc-corner-label">Quarterly Cycles</span>
                  </th>
                  {QUARTERS.map((q) => (
                    <th key={q.label} colSpan={q.span} scope="colgroup" className="sc-th-quarter">
                      <span className="sc-quarter-tag">{q.label}</span>
                      <span className="sc-quarter-range">{q.range}</span>
                    </th>
                  ))}
                </tr>

                {/* Months Header Row */}
                <tr className="sc-tr-months">
                  <th className="sc-th-product" scope="col">
                    <div className="sc-th-product-inner">
                      <span>Product Variety</span>
                      <span className="sc-th-count">({displayedProducts.length})</span>
                    </div>
                  </th>
                  {MONTHS_SHORT.map((m, idx) => {
                    const isCurrent = idx === currentMonthIdx;
                    const isColActive = selectedColIdx === idx;
                    return (
                      <th
                        key={m}
                        scope="col"
                        className={`sc-th-month ${isCurrent ? "is-current-month" : ""} ${isColActive ? "is-active-col" : ""}`}
                        onClick={() => handleColClick(idx)}
                        title={`Click to filter varieties ready in ${MONTHS_FULL[idx]}`}
                      >
                        <button type="button" className="sc-th-month-btn">
                          <span className="sc-month-abbr">{m}</span>
                          <span className="sc-month-num">{String(idx + 1).padStart(2, "0")}</span>
                          {isCurrent && <span className="sc-now-badge">NOW</span>}
                        </button>
                      </th>
                    );
                  })}
                </tr>
              </thead>

              <tbody>
                {displayedProducts.length === 0 ? (
                  <tr>
                    <td colSpan={13} className="sc-empty-state">
                      No produce varieties matched your search criteria.
                    </td>
                  </tr>
                ) : (
                  displayedProducts.map((product) => {
                    const isRowActive = selectedRowId === product.id;
                    const isCurrentlyActive = product.months[currentMonthIdx] > 0;

                    return (
                      <tr
                        key={product.id}
                        className={`sc-tr-product ${isRowActive ? "is-active-row" : ""}`}
                      >
                        {/* Sticky Left Product Name Cell */}
                        <th
                          scope="row"
                          className="sc-td-product"
                          onClick={() => handleRowClick(product.id)}
                        >
                          <div className="sc-product-meta">
                            <div className="sc-product-name-row">
                              <span className="sc-product-name">{product.name}</span>
                              {isCurrentlyActive && (
                                <span className="sc-mini-now-indicator" title="Harvesting / Shipping now" />
                              )}
                            </div>
                            <span className="sc-product-cat">{product.categoryLabel}</span>
                          </div>
                        </th>

                        {/* 12 Availability Month Cells */}
                        {product.months.map((status, mIdx) => {
                          const isColActive = selectedColIdx === mIdx;
                          const isCurrent = mIdx === currentMonthIdx;

                          // Continuous connection class for clean bars
                          const prevIsActive = mIdx > 0 && product.months[mIdx - 1] === status && status > 0;
                          const nextIsActive = mIdx < 11 && product.months[mIdx + 1] === status && status > 0;

                          let cellType = "sc-cell--none";
                          if (status === 2) cellType = "sc-cell--peak";
                          else if (status === 1) cellType = "sc-cell--limited";

                          let connClass = "";
                          if (prevIsActive && nextIsActive) connClass = " sc-conn--mid";
                          else if (prevIsActive) connClass = " sc-conn--end";
                          else if (nextIsActive) connClass = " sc-conn--start";

                          return (
                            <td
                              key={`${product.id}-${mIdx}`}
                              className={`sc-td-cell ${isColActive ? "is-active-col" : ""} ${isCurrent ? "is-current-col" : ""}`}
                              onClick={() => handleRowClick(product.id)}
                            >
                              <div
                                className={`sc-cell-bar ${cellType}${connClass}`}
                                title={`${product.name} — ${MONTHS_FULL[mIdx]}: ${
                                  status === 2
                                    ? "Peak Harvest & Export Window"
                                    : status === 1
                                    ? "Limited / Cold Storage Supply"
                                    : "Off Season"
                                }`}
                              >
                                {status === 0 && <span className="sc-cell-dot" aria-hidden="true">·</span>}
                              </div>
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── MOBILE TIMELINE CARDS (Intentionally Designed for Mobile Scanning) ── */}
        <div className={`sc-cards-wrap ${mobileView === "matrix" ? "desktop-only" : ""} ${inView ? "in-view" : ""}`}>
          <div className="sc-mobile-hint">
            <span>Tap any variety for harvest details or instant quote</span>
          </div>

          <div className="sc-cards-grid">
            {displayedProducts.map((product) => {
              const isSelected = selectedRowId === product.id;
              const isNow = product.months[currentMonthIdx] > 0;
              const summary = getSeasonSummary(product.months);

              return (
                <div
                  key={`card-${product.id}`}
                  className={`sc-product-card ${isSelected ? "is-selected" : ""} ${isNow ? "is-in-season" : ""}`}
                  onClick={() => handleRowClick(product.id)}
                >
                  <div className="sc-card-top">
                    <div>
                      <div className="sc-card-cat">{product.categoryLabel}</div>
                      <h3 className="sc-card-name">{product.name}</h3>
                    </div>
                    {isNow ? (
                      <span className="sc-card-badge sc-card-badge--now">In Season</span>
                    ) : (
                      <span className="sc-card-badge sc-card-badge--off">Off Season</span>
                    )}
                  </div>

                  {/* 12-Segment Micro Timeline Bar */}
                  <div className="sc-card-timeline">
                    <div className="sc-timeline-labels" aria-hidden="true">
                      {MONTHS_LETTERS.map((letter, idx) => (
                        <span
                          key={idx}
                          className={`sc-timeline-lbl ${idx === currentMonthIdx ? "is-current" : ""}`}
                        >
                          {letter}
                        </span>
                      ))}
                    </div>

                    <div className="sc-timeline-bar" role="img" aria-label={`Seasonality timeline for ${product.name}`}>
                      {product.months.map((status, idx) => {
                        let fillClass = "sc-tb--none";
                        if (status === 2) fillClass = "sc-tb--peak";
                        else if (status === 1) fillClass = "sc-tb--limited";
                        const isCur = idx === currentMonthIdx;

                        return (
                          <div
                            key={idx}
                            className={`sc-tb-segment ${fillClass} ${isCur ? "is-current" : ""}`}
                            title={`${MONTHS_SHORT[idx]}: ${status === 2 ? "Peak" : status === 1 ? "Limited" : "None"}`}
                          />
                        );
                      })}
                    </div>
                  </div>

                  <div className="sc-card-bottom">
                    <span className="sc-card-summary">{summary}</span>
                    <button
                      type="button"
                      className="sc-card-quote-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleQuoteClick(product.name);
                      }}
                    >
                      <span>Inquire</span>
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M2 6h8M7 3l3 3-3 3" />
                      </svg>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── INTERACTIVE SOURCING DRAWER / SELECTION BAR ── */}
        <div className={`sc-inspector-bar ${activeProduct || selectedColIdx !== null ? "is-active" : ""}`}>
          {activeProduct ? (
            <div className="sc-inspector-content">
              <div className="sc-inspector-info">
                <div className="sc-inspector-tag">Selected Variety</div>
                <div className="sc-inspector-title">
                  <strong>{activeProduct.name}</strong>
                  <span className="sc-inspector-cat">({activeProduct.categoryLabel})</span>
                </div>
                <div className="sc-inspector-months">
                  <span className="sc-inspector-months-label">Active Shipping Windows:</span>
                  <div className="sc-inspector-tags-list">
                    {activeProduct.months.map((status, idx) => {
                      if (status === 0) return null;
                      return (
                        <span
                          key={idx}
                          className={`sc-month-chip ${status === 2 ? "chip-peak" : "chip-limited"}`}
                        >
                          {MONTHS_SHORT[idx]} {status === 2 ? "(Peak)" : "(Limited)"}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="sc-inspector-actions">
                <button
                  type="button"
                  className="sc-btn-primary"
                  onClick={() => handleQuoteClick(activeProduct.name)}
                >
                  <span>Request Quote for {activeProduct.name}</span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M2 6h8M7 3l3 3-3 3" />
                  </svg>
                </button>
                <button
                  type="button"
                  className="sc-btn-clear"
                  onClick={handleClearSelection}
                  aria-label="Close product details"
                >
                  ✕
                </button>
              </div>
            </div>
          ) : selectedColIdx !== null ? (
            <div className="sc-inspector-content">
              <div className="sc-inspector-info">
                <div className="sc-inspector-tag">Month Inspection</div>
                <div className="sc-inspector-title">
                  <strong>{MONTHS_FULL[selectedColIdx]} Harvest & Shipping Program</strong>
                  <span className="sc-inspector-count">({productsInSelectedMonth.length} Varieties Available)</span>
                </div>
                <div className="sc-inspector-month-products">
                  {productsInSelectedMonth.map((p) => (
                    <span
                      key={p.id}
                      className={`sc-prod-tag ${p.months[selectedColIdx] === 2 ? "tag-peak" : "tag-limited"}`}
                      onClick={() => handleRowClick(p.id)}
                    >
                      {p.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="sc-inspector-actions">
                <button
                  type="button"
                  className="sc-btn-clear"
                  onClick={handleClearSelection}
                  aria-label="Clear month filter"
                >
                  ✕
                </button>
              </div>
            </div>
          ) : null}
        </div>

        {/* ── Editorial Legend & B2B Assurance Note ── */}
        <div className={`sc-footer-row ${inView ? "in-view" : ""}`}>
          <div className="sc-legend">
            <div className="sc-legend-item">
              <span className="sc-swatch sc-swatch--peak" aria-hidden="true" />
              <span className="sc-legend-text">Peak Harvest & Direct Export</span>
            </div>
            <div className="sc-legend-item">
              <span className="sc-swatch sc-swatch--limited" aria-hidden="true" />
              <span className="sc-legend-text">Cold Storage / Shoulder Supply</span>
            </div>
            <div className="sc-legend-item">
              <span className="sc-swatch sc-swatch--none" aria-hidden="true">·</span>
              <span className="sc-legend-text">Off Season</span>
            </div>
          </div>

          <div className="sc-disclaimer">
            <p>
              <strong>B2B Logistics Note:</strong> Harvest dates correspond to Egyptian export standards. Schedule can vary +/- 10 days depending on climate and regional grove yields. Contracted quarterly programs and forward-booking available via our Cairo commercial desk.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
