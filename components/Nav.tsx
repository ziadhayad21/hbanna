"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { useTheme } from "@/hooks/useTheme";
import { useLanguage } from "@/contexts/LanguageProvider";
import LanguageSwitcher from "@/components/LanguageSwitcher";

type NavProps = {
  solidOnLoad?: boolean;
  isHome?: boolean;
};

export default function Nav({ solidOnLoad = false, isHome = false }: NavProps) {
  const [solid, setSolid] = useState(solidOnLoad);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();

  const navLinks = [
    { href: "/#about", label: t.nav.about },
    { href: "/products", label: t.nav.products },
    { href: "/#journey", label: t.nav.process },
    { href: "/#facilities", label: t.nav.facilities },
    { href: "/#certifications", label: t.nav.quality },
    { href: "/contact", label: "Request a Quote" },
  ] as const;

  useEffect(() => {
    let navTicking = false;
    const onScroll = () => {
      if (navTicking) return;
      navTicking = true;
      requestAnimationFrame(() => {
        setSolid(solidOnLoad || window.scrollY > 60);
        navTicking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [solidOnLoad]);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  const ariaLabel =
    theme === "dark" ? t.nav.themeToLight : t.nav.themeToDark;

  return (
    <>
      <header className={`nav${solid ? " solid" : ""}${isHome ? " nav--home" : ""}`} id="nav">
        <Link href="/" className="logo" aria-label={t.nav.logoAlt}>
          <Image
            className="logo-img"
            src="/hbanna-logo.png"
            alt={t.nav.logoAlt}
            width={280}
            height={140}
            priority
          />
        </Link>
        <nav className="nav-links">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="nav-actions">
          <button
            type="button"
            className="theme-toggle"
            id="themeToggle"
            aria-label={ariaLabel}
            title={ariaLabel}
            onClick={toggleTheme}
          >
            <svg
              className="icon-moon"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5 7 7 0 1 0 20.5 14.2Z"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              className="icon-sun"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <circle
                cx="12"
                cy="12"
                r="4"
                stroke="currentColor"
                strokeWidth="1.7"
              />
              <path
                d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.05 5.05l1.55 1.55M17.4 17.4l1.55 1.55M18.95 5.05l-1.55 1.55M6.6 17.4l-1.55 1.55"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <LanguageSwitcher />
          <div
            className={`nav-toggle${drawerOpen ? " open" : ""}`}
            id="navToggle"
            role="button"
            tabIndex={0}
            aria-label={t.nav.toggleMenu}
            onClick={() => setDrawerOpen((o) => !o)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setDrawerOpen((o) => !o);
              }
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>

      <div
        className={`nav-drawer${drawerOpen ? " open" : ""}`}
        id="navDrawer"
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="drawer-link"
            onClick={closeDrawer}
          >
            {link.label}
          </Link>
        ))}
        <div className="nav-drawer-lang" onClick={(e) => e.stopPropagation()}>
          <LanguageSwitcher />
        </div>
      </div>
    </>
  );
}
