"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageProvider";

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

export default function ContactForm() {
  const { t } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const inquiryTypes = [
    t.form.inq1,
    t.form.inq2,
    t.form.inq3,
    t.form.inq4,
    t.form.inq5,
  ];

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
    <div
      ref={sectionRef}
      className={`contact-form-wrapper ${inView ? "in-view" : ""}`}
    >
      <div className="contact-form-panel">
        <div className="contact-form-accent" aria-hidden="true" />
        <div className="contact-form-header">
          <h2 className="serif contact-form-title">{t.form.title}</h2>
          <p className="form-intro">{t.form.intro}</p>
        </div>

        <form
          className="contact-form"
          id="contactForm"
          noValidate
          ref={formRef}
          onSubmit={onSubmit}
        >
          <div className="form-field">
            <label htmlFor="contactName">
              {t.form.name}<span className="req">*</span>
            </label>
            <input
              id="contactName"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder={t.form.phName}
            />
          </div>

          <div className="form-field">
            <label htmlFor="contactCompany">
              {t.form.company}<span className="req">*</span>
            </label>
            <input
              id="contactCompany"
              name="company"
              type="text"
              required
              autoComplete="organization"
              placeholder={t.form.phCompany}
            />
          </div>

          <div className="form-field">
            <label htmlFor="contactEmail">
              {t.form.email}<span className="req">*</span>
            </label>
            <input
              id="contactEmail"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder={t.form.phEmail}
            />
          </div>

          <div className="form-field">
            <label htmlFor="contactPhone">
              {t.form.phone}<span className="req">*</span>
            </label>
            <input
              id="contactPhone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              placeholder={t.form.phPhone}
            />
          </div>

          <div className="form-field">
            <label htmlFor="contactCountry">
              {t.form.country}<span className="req">*</span>
            </label>
            <select id="contactCountry" name="country" required defaultValue="">
              <option value="" disabled>
                {t.form.selectCountry}
              </option>
              {COUNTRIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="contactInquiry">
              {t.form.inquiry}<span className="req">*</span>
            </label>
            <select id="contactInquiry" name="inquiry" required defaultValue="">
              <option value="" disabled>
                {t.form.selectInquiry}
              </option>
              {inquiryTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="form-field form-field-full">
            <label htmlFor="contactMessage">
              {t.form.message}<span className="req">*</span>
            </label>
            <textarea
              id="contactMessage"
              name="message"
              required
              placeholder={t.form.phMessage}
              rows={5}
            />
          </div>

          <div className="form-actions form-field-full">
            <button
              type="submit"
              className="contact-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span>{t.form.sending}</span>
                  <svg
                    className="spinner"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray="60"
                      strokeDashoffset="20"
                    />
                  </svg>
                </>
              ) : (
                <>
                  {t.form.submit}
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

            <p className="form-note">{t.form.note}</p>

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
              {t.form.success}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
