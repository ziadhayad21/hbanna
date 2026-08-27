"use client";

import { useEffect, useRef, useState } from "react";
import { LOCALE_LABELS, LOCALE_SHORT, LOCALES, type Locale } from "@/lib/i18n/config";
import { useLanguage } from "@/contexts/LanguageProvider";

export default function LanguageSwitcher() {
  const { locale, setLocale, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onPointer = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const choose = (next: Locale) => {
    setLocale(next);
    setOpen(false);
  };

  return (
    <div className={`lang-switcher${open ? " is-open" : ""}`} ref={rootRef}>
      <button
        type="button"
        className="lang-switcher-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t.nav.language}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="lang-switcher-code">{LOCALE_SHORT[locale]}</span>
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M6 9l6 6 6-6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {open ? (
        <ul className="lang-switcher-menu" role="listbox" aria-label={t.nav.language}>
          {LOCALES.map((code) => (
            <li key={code} role="option" aria-selected={code === locale}>
              <button
                type="button"
                className={`lang-switcher-option${code === locale ? " is-active" : ""}`}
                onClick={() => choose(code)}
              >
                <span className="lang-switcher-option-code">{LOCALE_SHORT[code]}</span>
                <span>{LOCALE_LABELS[code]}</span>
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
