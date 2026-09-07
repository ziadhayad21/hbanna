"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

const COUNTRIES = [
  "Egypt",
  "United Arab Emirates",
  "Saudi Arabia",
  "Kuwait",
  "Qatar",
  "Bahrain",
  "Oman",
  "Jordan",
  "Lebanon",
  "Turkey",
  "United Kingdom",
  "Germany",
  "Netherlands",
  "France",
  "Italy",
  "Spain",
  "Russia",
  "India",
  "China",
  "Malaysia",
  "Indonesia",
  "United States",
  "Canada",
  "Other",
] as const;

function syncFieldValue(field: HTMLElement) {
  const input = field.querySelector(
    "input, select, textarea"
  ) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null;
  if (!input) return;
  const filled =
    input.tagName === "SELECT"
      ? !!input.value
      : input.value.trim().length > 0;
  field.classList.toggle("has-value", filled);
}

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const contactIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            contactIO.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -5% 0px" }
    );
    contactIO.observe(section);

    const fallback = window.setTimeout(() => setInView(true), 1500);

    return () => {
      contactIO.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    const fields = form.querySelectorAll<HTMLElement>(".form-field");
    const cleanups: Array<() => void> = [];

    fields.forEach((field) => {
      const input = field.querySelector(
        "input, select, textarea"
      ) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null;
      if (!input) return;

      const onFocus = () => field.classList.add("is-active");
      const onBlur = () => {
        field.classList.remove("is-active");
        syncFieldValue(field);
      };
      const onInput = () => syncFieldValue(field);

      input.addEventListener("focus", onFocus);
      input.addEventListener("blur", onBlur);
      input.addEventListener("input", onInput);
      input.addEventListener("change", onInput);
      syncFieldValue(field);

      cleanups.push(() => {
        input.removeEventListener("focus", onFocus);
        input.removeEventListener("blur", onBlur);
        input.removeEventListener("input", onInput);
        input.removeEventListener("change", onInput);
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    const success = successRef.current;
    if (!form) return;

    if (!form.checkValidity()) {
      form.reportValidity();
      const firstInvalid = form.querySelector(":invalid") as HTMLElement | null;
      if (firstInvalid) {
        const wrap = firstInvalid.closest(".form-field");
        if (wrap) wrap.classList.add("is-active");
        firstInvalid.focus();
      }
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to send request");
      }

      if (success) {
        success.classList.remove("is-visible");
        void success.offsetWidth;
        success.classList.add("is-visible");
      }

      form.reset();
      form.querySelectorAll<HTMLElement>(".form-field").forEach((field) => {
        field.classList.remove("has-value", "is-active");
      });
    } catch (error) {
      console.error(error);
      setErrorMessage("An error occurred while sending your request. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={inView ? "in-view" : undefined}
    >
      <div className="contact-orb contact-orb-a" aria-hidden="true"></div>
      <div className="contact-orb contact-orb-b" aria-hidden="true"></div>
      <div className="contact-orb contact-orb-c" aria-hidden="true"></div>

      <div className="contact-inner">
        <header className="contact-header">
          <span className="eyebrow">Request a Quote</span>
          <h2 className="serif">
            Let&apos;s talk <em>export.</em>
          </h2>
          <p>
            Share your product needs, destination market, and volumes — our
            trade desk will reply with availability and logistics options.
          </p>
          <div className="contact-meta">
            <a href="mailto:export@hbanna.com">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M4 6.5h16v11H4v-11Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <path
                  d="M4 7l8 6 8-6"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              export@hbanna.com
            </a>
            <a href="https://wa.me/201158898866" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ width: '20px', height: '20px', verticalAlign: 'middle', marginRight: '8px' }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              WhatsApp
            </a>
            <span>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M12 21s6.5-5.2 6.5-10.2A6.5 6.5 0 0 0 12 4.3a6.5 6.5 0 0 0-6.5 6.5C5.5 15.8 12 21 12 21Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <circle
                  cx="12"
                  cy="10.8"
                  r="2.2"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
              </svg>
              Cairo, Egypt
            </span>
          </div>
        </header>

        <div className="contact-form-wrap">
          <div className="contact-form-panel">
            <form
              className="contact-form"
              id="contactForm"
              noValidate
              ref={formRef}
              onSubmit={onSubmit}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                <div className="form-field">
                  <label htmlFor="quoteProduct">
                    Product<span className="req">*</span>
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
                    Quantity<span className="req">*</span>
                  </label>
                  <input
                    id="quoteQuantity"
                    name="quantity"
                    type="text"
                    required
                    placeholder="e.g., 2 Containers (40ft)"
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '24px' }}>
                <div className="form-field">
                  <label htmlFor="quoteDestination">
                    Destination<span className="req">*</span>
                  </label>
                  <select id="quoteDestination" name="destination" required defaultValue="">
                    <option value="" disabled></option>
                    {COUNTRIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-field">
                  <label htmlFor="quoteShipping">
                    Expected Shipping Date
                  </label>
                  <input
                    id="quoteShipping"
                    name="shipping"
                    type="text"
                    placeholder="e.g., End of November"
                  />
                </div>
              </div>

              <div className="form-field form-field-full" style={{ marginTop: '24px' }}>
                <label htmlFor="quotePackaging">
                  Packaging
                </label>
                <input
                  id="quotePackaging"
                  name="packaging"
                  type="text"
                  placeholder="e.g., 15kg Telescopic Cartons"
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '24px' }}>
                <div className="form-field">
                  <label htmlFor="quoteCompany">
                    Company<span className="req">*</span>
                  </label>
                  <input
                    id="quoteCompany"
                    name="company"
                    type="text"
                    required
                    autoComplete="organization"
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="quoteEmail">
                    Email<span className="req">*</span>
                  </label>
                  <input
                    id="quoteEmail"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="form-field form-field-full" style={{ marginTop: '24px' }}>
                <label htmlFor="quoteWhatsapp">
                  WhatsApp Number<span className="req">*</span>
                </label>
                <input
                  id="quoteWhatsapp"
                  name="whatsapp"
                  type="tel"
                  required
                  placeholder="+20 100 000 0000"
                />
              </div>

              <div className="form-field form-field-full" style={{ marginTop: '40px' }}>
                <button type="submit" className="contact-submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <span>Sending...</span>
                      <svg className="spinner" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ width: '20px', height: '20px', animation: 'spin 1s linear infinite' }}>
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeDasharray="60" strokeDashoffset="20" />
                      </svg>
                    </>
                  ) : (
                    <>
                      Request Quote
                      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path
                          d="M5 12h14M13 6l6 6-6 6"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </>
                  )}
                </button>
                {errorMessage && (
                  <div style={{ color: 'red', marginTop: '10px', fontSize: '14px' }}>
                    {errorMessage}
                  </div>
                )}
                <p className="form-note">
                  <span className="form-note-dot" aria-hidden="true"></span>
                  Export desk online · typically replies within 1–2 business days
                </p>
                <div
                  className="form-success"
                  id="contactSuccess"
                  role="status"
                  aria-live="polite"
                  ref={successRef}
                >
                  <span className="form-success-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 12.5l5 5 9-10"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  Thank you. Your inquiry has been received — we will be in touch
                  shortly.
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
