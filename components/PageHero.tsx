import Link from "next/link";
import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  crumbs?: Array<{ label: string; href?: string }>;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
}: PageHeroProps) {
  return (
    <header className="page-hero">
      {crumbs && crumbs.length > 0 ? (
        <nav className="page-crumbs" aria-label="Breadcrumb">
          {crumbs.map((crumb, i) => (
            <span key={`${crumb.label}-${i}`} className="page-crumb">
              {i > 0 ? <span className="page-crumb-sep">/</span> : null}
              {crumb.href ? (
                <Link href={crumb.href}>{crumb.label}</Link>
              ) : (
                <span aria-current="page">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>
      ) : null}
      <span className="eyebrow">{eyebrow}</span>
      <h1 className="serif page-hero-title">{title}</h1>
      {description ? <p className="page-hero-desc">{description}</p> : null}
    </header>
  );
}
