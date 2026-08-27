"use client";

import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { useLanguage } from "@/contexts/LanguageProvider";

export default function ContactContent() {
  const { t } = useLanguage();

  const rows = [
    {
      label: t.contact.emailLabel,
      value: "export@hbanna.com",
      href: "mailto:export@hbanna.com",
      note: t.contact.emailNote,
    },
    {
      label: t.contact.phoneLabel,
      value: "+20 100 000 0000",
      href: "tel:+201000000000",
      note: t.contact.phoneNote,
    },
    {
      label: t.contact.officeLabel,
      value: "Cairo, Egypt",
      href: null as string | null,
      note: t.contact.officeNote,
    },
  ];

  return (
    <>
      <section className="subpage-intro section-pad contact-hero-section">
        <div className="contact-page-atmosphere" aria-hidden="true" />
        <PageHero
          eyebrow={t.contact.eyebrow}
          title={t.contact.title}
          description={t.contact.desc}
          crumbs={[
            { label: t.contact.home, href: "/" },
            { label: t.contact.crumb },
          ]}
        />
      </section>

      <section className="contact-page-main section-pad">
        <div
          className="contact-page-atmosphere contact-page-atmosphere-soft"
          aria-hidden="true"
        />
        <div className="contact-page-grid">
          <aside className="contact-info-section reveal">
            <h2 className="serif contact-info-title">{t.contact.reachTitle}</h2>
            <p className="contact-intro">{t.contact.intro}</p>

            <ul className="contact-rows">
              {rows.map((row) => (
                <li key={row.label} className="contact-row">
                  <span className="contact-row-label">{row.label}</span>
                  {row.href ? (
                    <a className="contact-row-value" href={row.href}>
                      {row.value}
                    </a>
                  ) : (
                    <span className="contact-row-value">{row.value}</span>
                  )}
                  <p className="contact-row-note">{row.note}</p>
                </li>
              ))}
            </ul>
          </aside>

          <div className="contact-form-section reveal">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
