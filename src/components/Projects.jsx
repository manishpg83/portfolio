import { projectGroups } from "../data/portfolioData";
import SectionHeader from "./SectionHeader";
import { ArrowUpRightIcon } from "./Icons";

export default function Projects() {
  return (
    <section id="projects" className="section section--alt">
      <SectionHeader id="projects" />

      <div className="project-groups">
        {projectGroups.map(group => (
          <div key={group.category} className="project-group reveal">
            <h3 className="project-group__title">{group.category}</h3>
            <div className="project-mini-grid">
              {group.items.map(item => (
                <a
                  key={item.name}
                  className="project-mini-card"
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="project-mini-card__name">
                    {item.name}
                    <ArrowUpRightIcon className="project-mini-card__icon" width="16" height="16" />
                  </span>
                  <span className="project-mini-card__desc">{item.description}</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
