"use client";

import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { useLanguage } from "@/contexts/LanguageProvider";

export default function ContactContent() {
  const { t } = useLanguage();

  const rows = [
    {
      label: t.contact.emailLabel,
      value: "marketing@hbanna.com",
      href: "mailto:marketing@hbanna.com",
      note: t.contact.emailNote,
    },
    {
      label: t.contact.phoneLabel || "WhatsApp",
      value: (
        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ width: '20px', height: '20px' }}>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
          WhatsApp
        </span>
      ),
      href: "https://wa.me/201158898866",
      note: t.contact.phoneNote,
      target: "_blank"
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
                    <a className="contact-row-value" href={row.href} target={(row as any).target} rel={row.href.startsWith("http") ? "noopener noreferrer" : undefined}>
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
