export default function Certifications() {
  return (
    <section id="certifications">
      <span className="eyebrow reveal" style={{ color: "var(--orange)" }}>
        Quality &amp; Food Safety
      </span>
      <h2 className="serif reveal">Certified to International Standards.</h2>
      <div className="cert-row reveal-stagger">
        <div className="cert-mark">
          <div className="cert-badge">
            ISO
            <br />
            22000
          </div>
          <span className="cert-name">Food Safety Management</span>
        </div>
        <div className="cert-mark">
          <div className="cert-badge">
            ISO
            <br />
            9001
          </div>
          <span className="cert-name">Quality Management</span>
        </div>
      </div>
      <p className="cert-sub reveal">
        Our commitment to quality, food safety, and continuous improvement is
        backed by internationally recognized certifications.
      </p>
    </section>
  );
}
