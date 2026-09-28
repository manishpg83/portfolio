import { skills } from "../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="section section--alt">
      <h2 className="section__title">Skills</h2>

      <div className="skills__grid">
        {skills.map(group => (
          <div key={group.category} className="skill-card">
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
