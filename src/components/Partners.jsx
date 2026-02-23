export default function Partners({ items }) {
  return (
    <section className="partners">
      <div className="container">
        <p className="eyebrow">Ils nous font confiance</p>
        <div className="partners-grid">
          {items.map((item) => (
            <div className="partner-pill" key={item}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
