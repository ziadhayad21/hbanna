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
      { threshold: 0.18 }
    );
    contactIO.observe(section);
    return () => contactIO.disconnect();
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
        if (wrap) wrap.classList.add("is-active");
        firstInvalid.focus();
      }
      return;
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
          <span className="eyebrow">Contact Us</span>
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
            <a href="tel:+201000000000">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M7 4.5h3.2l1.2 3.2-1.8 1.2a11.5 11.5 0 0 0 5.5 5.5l1.2-1.8 3.2 1.2V17a2 2 0 0 1-2 2A12.5 12.5 0 0 1 5 6.5a2 2 0 0 1 2-2Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
              </svg>
              +20 100 000 0000
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
              <div className="form-field">
                <label htmlFor="companyName">
                  Company Name<span className="req">*</span>
                </label>
                <input
                  id="companyName"
                  name="company"
                  type="text"
                  required
                  autoComplete="organization"
                />
              </div>
              <div className="form-field">
                <label htmlFor="contactEmail">
                  Email<span className="req">*</span>
                </label>
                <input
                  id="contactEmail"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                />
              </div>
              <div className="form-field">
                <label htmlFor="contactPhone">
                  Phone Number<span className="req">*</span>
                </label>
                <input
                  id="contactPhone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                />
              </div>
              <div className="form-field">
                <label htmlFor="contactCountry">
                  Country<span className="req">*</span>
                </label>
                <select id="contactCountry" name="country" required defaultValue="">
                  <option value="" disabled></option>
                  {COUNTRIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-field form-field-full">
                <label htmlFor="contactDescription">
                  Description<span className="req">*</span>
                </label>
                <textarea
                  id="contactDescription"
                  name="description"
                  required
                ></textarea>
              </div>
              <div className="form-field form-field-full">
                <button type="submit" className="contact-submit">
                  Send Message
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
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
