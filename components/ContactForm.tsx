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

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const params = new URLSearchParams(window.location.search);
      const prod = params.get("product");
      const dest = params.get("destination");
      if (prod) {
        const prodInput = document.getElementById("quoteProduct") as HTMLInputElement | null;
        if (prodInput) {
          prodInput.value = prod;
          prodInput.dispatchEvent(new Event("input", { bubbles: true }));
        }
      }
      if (dest) {
        const destSelect = document.getElementById("quoteDestination") as HTMLSelectElement | null;
        if (destSelect) {
          const match = Array.from(destSelect.options).find(
            (opt) =>
              opt.value.toLowerCase().includes(dest.toLowerCase()) ||
              dest.toLowerCase().includes(opt.value.toLowerCase())
          );
          if (match) {
            destSelect.value = match.value;
            destSelect.dispatchEvent(new Event("change", { bubbles: true }));
          }
        }
      }
    } catch {
      // ignore
    }
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
          {/* Row 1: Product & Quantity */}
          <div className="form-field">
            <label htmlFor="quoteProduct">
              <span>Product of Interest</span>
              <span className="req">*</span>
            </label>
            <input
              id="quoteProduct"
              name="product"
              type="text"
              required
              placeholder="e.g., Navel Oranges, Medjool Dates"
            />
          </div>

          <div className="form-field">
            <label htmlFor="quoteQuantity">
              <span>Estimated Quantity</span>
              <span className="req">*</span>
            </label>
            <input
              id="quoteQuantity"
              name="quantity"
              type="text"
              required
              placeholder="e.g., 2 Containers / 40 FT"
            />
          </div>

          {/* Row 2: Destination & Shipping Date */}
          <div className="form-field">
            <label htmlFor="quoteDestination">
              <span>Destination Country</span>
              <span className="req">*</span>
            </label>
            <div className="select-wrap">
              <select id="quoteDestination" name="destination" required defaultValue="">
                <option value="" disabled>Select destination country</option>
                {COUNTRIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="quoteShipping">
              <span>Expected Shipping Date</span>
            </label>
            <input
              id="quoteShipping"
              name="shipping"
              type="text"
              placeholder="e.g., End of November"
            />
          </div>

          {/* Row 3: Packaging (Full Width) */}
          <div className="form-field form-field-full">
            <label htmlFor="quotePackaging">
              <span>Packaging Requirements</span>
            </label>
            <input
              id="quotePackaging"
              name="packaging"
              type="text"
              placeholder="e.g., 15kg Telescopic Cartons, 5kg Loose Box, Custom Pallets"
            />
          </div>

          {/* Row 4: Company & Email */}
          <div className="form-field">
            <label htmlFor="contactCompany">
              <span>{t.form.company}</span>
              <span className="req">*</span>
            </label>
            <input
              id="contactCompany"
              name="company"
              type="text"
              required
              autoComplete="organization"
              placeholder={t.form.phCompany || "Your Company Name"}
            />
          </div>

          <div className="form-field">
            <label htmlFor="contactEmail">
              <span>{t.form.email}</span>
              <span className="req">*</span>
            </label>
            <input
              id="contactEmail"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder={t.form.phEmail || "buyer@company.com"}
            />
          </div>

          {/* Row 5: WhatsApp / Phone (Full Width) */}
          <div className="form-field form-field-full">
            <label htmlFor="contactWhatsApp">
              <span>WhatsApp / Direct Phone Number</span>
              <span className="req">*</span>
            </label>
            <input
              id="contactWhatsApp"
              name="whatsapp"
              type="tel"
              required
              autoComplete="tel"
              placeholder="+20 100 000 0000"
            />
          </div>

          {/* Row 6: Submit Button & Messages */}
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
                  <span>Request Official Quotation</span>
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </>
              )}
            </button>
            <p className="form-note">
              <span className="form-note-dot" aria-hidden="true" />
              {t.form.note || "Direct response from HBanna export desk within 1-2 business days."}
            </p>

            <div className="form-success" id="contactSuccess" role="status" aria-live="polite" ref={successRef}>
              <span className="form-success-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M5 12.5l5 5 9-10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span>{t.form.success}</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
