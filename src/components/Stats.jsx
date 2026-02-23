export default function Stats({ blocks }) {
  return (
    <section className="stats">
      <div className="container grid-three">
        {blocks.map((item) => (
          <article key={item.title} className="card stat-card">
            <h2>{item.title}</h2>
            <p className="stat-value">{item.value}</p>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
