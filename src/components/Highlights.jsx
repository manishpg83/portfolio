import { highlights } from "../data/portfolioData";

export default function Highlights() {
  return (
    <section id="highlights" className="section">
      <h2 className="section__title">Highlights</h2>

      <div className="highlights__grid">
        {highlights.map(item => (
          <div key={item.title} className="highlight-card">
            <h3>{item.title}</h3>
            <p>{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
