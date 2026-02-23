export default function Hero({ title, subtitle, cta, secondary }) {
  return (
    <section className="hero">
      <div className="container hero-content">
        <p className="eyebrow">Learning Management System</p>
        <h1>{title}</h1>
        <p className="lead">{subtitle}</p>
        <div className="hero-actions">
          <a className="btn btn-solid" href={cta.href}>
            {cta.label}
          </a>
          <a className="btn btn-ghost" href={secondary.href}>
            {secondary.label}
          </a>
        </div>
      </div>
      <div className="hero-art" aria-hidden="true">
        <div className="orb orb-a" />
        <div className="orb orb-b" />
      </div>
    </section>
  );
}
