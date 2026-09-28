import { skills } from "../data/portfolioData";
import SectionHeader from "./SectionHeader";

export default function Skills() {
  return (
    <section id="skills" className="section section--alt">
      <SectionHeader id="skills" />

      <div className="skills__grid">
        {skills.map(group => (
          <div key={group.category} className="skill-card reveal">
            <h3>{group.category}</h3>
            <ul className="skill-card__tags">
              {group.items.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
