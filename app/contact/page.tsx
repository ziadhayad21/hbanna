import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import RevealObserver from "@/components/RevealObserver";
import SvgDefs from "@/components/SvgDefs";
import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "Contact Us — Egyptian Export Center (HBanna)",
  description:
    "Get in touch with HBanna's export desk for premium Egyptian dates, citrus, fruits, vegetables, and agricultural products. Worldwide shipping.",
};

export default function ContactPage() {
  return (
    <>
      <SvgDefs />
      <Nav solidOnLoad />
      <main className="subpage contact-page">
        <div className="contact-shapes" aria-hidden="true">
          <span className="contact-shape contact-shape-ring" />
          <span className="contact-shape contact-shape-orbit" />
          <span className="contact-shape contact-shape-square" />
          <span className="contact-shape contact-shape-bar" />
          <span className="contact-shape contact-shape-dot" />
          <span className="contact-shape contact-shape-arc" />
        </div>
        <ContactContent />
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}
