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

const INQUIRY_TYPES = [
  "Product Inquiry",
  "Export Partnership",
  "Logistics Information",
  "Quality Assurance",
  "General Inquiry",
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

export default function ContactForm() {
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
    return () => observer.disconnect();
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

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      if (success) {
        success.classList.remove("is-visible");
        void success.offsetWidth;
        success.classList.add("is-visible");
      }

      form.reset();
      form.querySelectorAll<HTMLElement>(".form-field").forEach((field) => {
        field.classList.remove("has-value", "is-active");
      });
    }, 1500);
  };

  return (
    <div 
      ref={sectionRef}
      className={`contact-form-wrapper ${inView ? "in-view" : ""}`}
    >
      <div className="contact-form-header">
        <span className="eyebrow">Send a Message</span>
        <h2 className="serif">Start Your Inquiry.</h2>
        <p className="form-intro">
          Fill out the form below and our export team will get back to you 
          with product availability, pricing, and logistics options.
        </p>
      </div>

      <div className="contact-form-panel">
        <form
          className="contact-form"
          id="contactForm"
          noValidate
          ref={formRef}
          onSubmit={onSubmit}
        >
          <div className="form-field">
            <label htmlFor="contactName">
              Full Name<span className="req">*</span>
            </label>
            <input
              id="contactName"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder=" "
            />
          </div>

          <div className="form-field">
            <label htmlFor="contactCompany">
              Company Name<span className="req">*</span>
            </label>
            <input
              id="contactCompany"
              name="company"
              type="text"
              required
              autoComplete="organization"
              placeholder=" "
            />
          </div>

          <div className="form-field">
            <label htmlFor="contactEmail">
              Email Address<span className="req">*</span>
            </label>
            <input
              id="contactEmail"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder=" "
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
              placeholder=" "
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

          <div className="form-field">
            <label htmlFor="contactInquiry">
              Inquiry Type<span className="req">*</span>
            </label>
            <select id="contactInquiry" name="inquiry" required defaultValue="">
              <option value="" disabled></option>
              {INQUIRY_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="form-field form-field-full">
            <label htmlFor="contactMessage">
              Your Message<span className="req">*</span>
            </label>
            <textarea
              id="contactMessage"
              name="message"
              required
              placeholder=" "
              rows={5}
            ></textarea>
          </div>

          <div className="form-field form-field-full">
            <button 
              type="submit" 
              className="contact-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span>Sending...</span>
                  <svg className="spinner" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle 
                      cx="12" cy="12" r="10" 
                      stroke="currentColor" 
                      strokeWidth="2"
                      strokeDasharray="60"
                      strokeDashoffset="20"
                    />
                  </svg>
                </>
              ) : (
                <>
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
                </>
              )}
            </button>
            
            <p className="form-note">
              <span className="form-note-dot" aria-hidden="true"></span>
              We typically respond within 1–2 business days
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
              Thank you. Your inquiry has been received — we will be in touch shortly.
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}