"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageProvider";

const COUNTRIES = [
  "Egypt", "United Arab Emirates", "Saudi Arabia", "Kuwait", "Qatar", "Bahrain",
  "Oman", "Jordan", "Lebanon", "Turkey", "United Kingdom", "Germany", "Netherlands",
  "France", "Italy", "Spain", "Russia", "India", "China", "Malaysia", "Indonesia",
  "United States", "Canada", "Other",
] as const;

export default function ContactForm() {
  const { t } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.18 }
    );

    observer.observe(section);
    const fallback = window.setTimeout(() => setInView(true), 1500);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    const success = successRef.current;
    if (!form) return;

    if (!form.checkValidity()) {
      form.reportValidity();
      const firstInvalid = form.querySelector(":invalid") as HTMLElement | null;
      if (firstInvalid) {
        const wrap = firstInvalid.closest(".form-field");
        if (wrap) wrap.classList.add("is-invalid");
        firstInvalid.focus();
      }
      return;
    }

    form.querySelectorAll<HTMLElement>(".form-field").forEach((field) => {
      field.classList.remove("is-invalid");
    });

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      if (success) {
        success.classList.remove("is-visible");
        void success.offsetWidth;
        success.classList.add("is-visible");
      }

      form.reset();
    }, 1500);
  };

  return (
    <div ref={sectionRef} className={`contact-form-wrapper ${inView ? "in-view" : ""}`}>
      <div className="contact-form-panel">
        <div className="contact-form-accent" aria-hidden="true" />
        <div className="contact-form-header">
          <h2 className="serif contact-form-title">Request a Quote</h2>
          <p className="form-intro">
            Provide details about your requirements and our export desk will respond with availability, specs, and pricing within 1-2 business days.
          </p>
        </div>

        <form className="contact-form" id="contactForm" noValidate ref={formRef} onSubmit={onSubmit}>
          
          <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            <div className="form-field">
              <label htmlFor="quoteProduct">Product of Interest<span className="req">*</span></label>
              <input id="quoteProduct" name="product" type="text" required placeholder="e.g., Navel Oranges, Medjool Dates" />
            </div>

            <div className="form-field">
              <label htmlFor="quoteQuantity">Estimated Quantity<span className="req">*</span></label>
              <input id="quoteQuantity" name="quantity" type="text" required placeholder="e.g., 2 Containers / 40 FT" />
            </div>
          </div>

          <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            <div className="form-field">
              <label htmlFor="quoteDestination">Destination Country<span className="req">*</span></label>
              <div className="select-wrap">
                <select id="quoteDestination" name="destination" required defaultValue="">
                  <option value="" disabled>Select destination</option>
                  {COUNTRIES.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
                <div className="select-arrow">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="quoteShipping">Expected Shipping Date</label>
              <input id="quoteShipping" name="shipping" type="text" placeholder="e.g., End of November" />
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="quotePackaging">Packaging Requirements</label>
            <input id="quotePackaging" name="packaging" type="text" placeholder="e.g., 15kg Telescopic Cartons" />
          </div>

          <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            <div className="form-field">
              <label htmlFor="contactCompany">{t.form.company}<span className="req">*</span></label>
              <input id="contactCompany" name="company" type="text" required autoComplete="organization" placeholder={t.form.phCompany} />
            </div>
            
            <div className="form-field">
              <label htmlFor="contactEmail">{t.form.email}<span className="req">*</span></label>
              <input id="contactEmail" name="email" type="email" required autoComplete="email" placeholder={t.form.phEmail} />
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="contactWhatsApp">WhatsApp Number<span className="req">*</span></label>
            <input id="contactWhatsApp" name="whatsapp" type="tel" required autoComplete="tel" placeholder="+20 100 000 0000" />
          </div>

          <div className="form-actions form-field-full">
            <button type="submit" className="contact-submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <span>{t.form.sending}</span>
                  <svg className="spinner" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeDasharray="60" strokeDashoffset="20" />
                  </svg>
                </>
              ) : (
                <>
                  Request Quote
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </>
              )}
            </button>
            <p className="form-note">{t.form.note}</p>

            <div className="form-success" id="contactSuccess" role="status" aria-live="polite" ref={successRef}>
              <span className="form-success-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M5 12.5l5 5 9-10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              {t.form.success}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
