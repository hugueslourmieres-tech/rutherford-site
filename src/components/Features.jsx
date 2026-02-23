export default function Features({ sections }) {
  return (
    <section className="features container">
      {sections.map((section) => (
        <article key={section.title} className="feature-row card">
          <div>
            <h2>{section.title}</h2>
            <p>{section.description}</p>
          </div>
          <ul>
            {section.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}
