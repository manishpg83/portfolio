import { about, stats } from "../data/portfolioData";
import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <section id="about" className="section">
      <SectionHeader id="about" />

      <div className="about__grid">
        <div className="about__text reveal">
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="about__stats reveal">
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
