import { about, stats } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="section">
      <h2 className="section__title">About Me</h2>

      <div className="about__grid">
        <div className="about__text">
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="about__stats">
          {stats.map(stat => (
            <div key={stat.label} className="stat-card">
              <span className="stat-card__value">{stat.value}</span>
              <span className="stat-card__label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
