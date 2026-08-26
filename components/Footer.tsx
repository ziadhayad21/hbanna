import Image from "next/image";
import Link from "next/link";
import { productCategories } from "@/lib/products";

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="logo">
            <Link href="/">
              <Image
                className="logo-img"
                src="/hbanna-logo.png"
                alt="HBanna Dates — Egyptian Export Center"
                width={188}
                height={158}
              />
            </Link>
          </div>
          <p>
            A leading Egyptian grower, producer, and exporter of premium
            agricultural products since 1992.
          </p>
        </div>
        <div className="footer-col">
          <h4>Products</h4>
          <ul>
            {productCategories.map((cat) => (
              <li key={cat.slug}>
                <Link href={`/products/${cat.slug}`}>{cat.shortLabel}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li>
              <Link href="/#about">About Us</Link>
            </li>
            <li>
              <Link href="/products">All Products</Link>
            </li>
            <li>
              <Link href="/#journey">Our Process</Link>
            </li>
            <li>
              <Link href="/#facilities">Facilities</Link>
            </li>
            <li>
              <Link href="/#certifications">Quality &amp; Certifications</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="footer-col footer-form">
          <h4>Trade Inquiries</h4>
          <p>
            Ready to discuss volumes, specs, or shipping? Reach our export desk
            directly.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Open Contact Form
          </Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Egyptian Export Center (HBanna). All rights reserved.</p>
        <span className="footer-tagline">
          Growing Excellence. Delivering Trust Since 1992.
        </span>
      </div>
    </footer>
  );
}
