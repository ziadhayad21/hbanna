export default function Cta() {
  return (
    <section id="cta">
      <svg className="cta-botanical" viewBox="0 0 200 200" fill="none">
        <circle cx="100" cy="100" r="90" stroke="#EC7914" strokeWidth="0.8" />
        <path
          d="M100 10c0 50-30 80-70 90 40 10 70 40 70 90 0-50 30-80 70-90-40-10-70-40-70-90Z"
          stroke="#F4A04A"
          strokeWidth="0.6"
          fill="none"
        />
        <circle cx="100" cy="100" r="55" stroke="#EC7914" strokeWidth="0.4" />
      </svg>
      <svg className="cta-botanical-right" viewBox="0 0 200 200" fill="none">
        <circle cx="100" cy="100" r="90" stroke="#EC7914" strokeWidth="0.6" />
        <path
          d="M100 10c0 50-30 80-70 90 40 10 70 40 70 90 0-50 30-80 70-90-40-10-70-40-70-90Z"
          stroke="#F4A04A"
          strokeWidth="0.5"
          fill="none"
        />
      </svg>
      <span className="eyebrow reveal">Global Partnership</span>
      <h2 className="serif reveal">Let&apos;s Build a Lasting Partnership.</h2>
      <p className="reveal">
        Trusted by wholesalers, retailers, and supermarket chains across
        international markets — reliability, flexibility, and quality since
        1992.
      </p>
      <div className="cta-actions reveal">
        <a href="#contact" className="btn btn-primary">
          Get in Touch
        </a>
        <a href="#" className="btn btn-ghost">
          Download Company Profile
        </a>
      </div>
    </section>
  );
}
