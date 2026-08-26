"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { useTheme } from "@/hooks/useTheme";

const NAV_LINKS = [
  { href: "/#about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/#journey", label: "Our Process" },
  { href: "/#facilities", label: "Facilities" },
  { href: "/#certifications", label: "Quality" },
  { href: "/contact", label: "Contact" },
] as const;

type NavProps = {
  solidOnLoad?: boolean;
};

export default function Nav({ solidOnLoad = false }: NavProps) {
  const [solid, setSolid] = useState(solidOnLoad);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
    theme === "dark" ? "Switch to light mode" : "Switch to dark mode";
  const title = theme === "dark" ? "Light mode" : "Dark mode";

  return (
    <>
      <header className={`nav${solid ? " solid" : ""}`} id="nav">
        <Link
          href="/"
          className="logo"
          aria-label="HBanna Dates — Egyptian Export Center"
        >
          <Image
            className="logo-img"
            src="/hbanna-logo.png"
            alt="HBanna Dates — Egyptian Export Center"
            width={164}
            height={138}
            priority
          />
        </Link>
        <nav className="nav-links">
          {NAV_LINKS.map((link) => (
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
            title={title}
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
          <Link href="/contact" className="nav-cta">
            Partner With Us
          </Link>
          <div
            className={`nav-toggle${drawerOpen ? " open" : ""}`}
            id="navToggle"
            role="button"
            tabIndex={0}
            aria-label="Toggle menu"
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
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="drawer-link"
            onClick={closeDrawer}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/contact"
          className="nav-cta-mobile"
          onClick={closeDrawer}
        >
          Partner With Us
        </Link>
      </div>
    </>
  );
}
