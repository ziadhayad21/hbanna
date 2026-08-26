import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import RevealObserver from "@/components/RevealObserver";
import SvgDefs from "@/components/SvgDefs";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us — Egyptian Export Center (HBanna)",
  description: "Get in touch with HBanna's export desk for premium Egyptian dates, citrus, fruits, vegetables, and agricultural products. Worldwide shipping.",
};

export default function ContactPage() {
  return (
    <>
      <SvgDefs />
      <Nav solidOnLoad />
      <main className="subpage">
        <section className="subpage-intro section-pad contact-hero-section">
          <div className="contact-hero-bg"></div>
          <PageHero
            eyebrow="Get In Touch"
            title="Let's Start a Conversation."
            description="Whether you're exploring new suppliers or ready to place an order, our export desk is here to help with expertise and efficiency."
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Contact Us" },
            ]}
          />
        </section>

        <section className="contact-page-main section-pad">
          <div className="contact-page-grid">
            <div className="contact-info-section reveal">
              <span className="eyebrow">Contact Information</span>
              <h2 className="serif">Reach Out Directly.</h2>
              <p className="contact-intro">
                Our trade desk operates across time zones to serve global markets. 
                Connect with us through your preferred channel.
              </p>

              <div className="contact-info-cards">
                <div className="contact-info-card">
                  <div className="contact-info-icon">
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
                  </div>
                  <div className="contact-info-content">
                    <h3>Email</h3>
                    <a href="mailto:export@hbanna.com">export@hbanna.com</a>
                    <p>For general inquiries and product information</p>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="contact-info-icon">
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M7 4.5h3.2l1.2 3.2-1.8 1.2a11.5 11.5 0 0 0 5.5 5.5l1.2-1.8 3.2 1.2V17a2 2 0 0 1-2 2A12.5 12.5 0 0 1 5 6.5a2 2 0 0 1 2-2Z"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="contact-info-content">
                    <h3>Phone</h3>
                    <a href="tel:+201000000000">+20 100 000 0000</a>
                    <p>Sunday–Thursday, 9:00–17:00 Cairo time</p>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="contact-info-icon">
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
                  </div>
                  <div className="contact-info-content">
                    <h3>Office</h3>
                    <address>Cairo, Egypt</address>
                    <p>Strategic location for global logistics coordination</p>
                  </div>
                </div>
              </div>

              <div className="contact-response-time">
                <div className="response-time-badge">
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6"/>
                    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                  </svg>
                  <span>1–2 Business Days</span>
                </div>
                <p>Typical response time for export inquiries</p>
              </div>
            </div>

            <div className="contact-form-section reveal">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}