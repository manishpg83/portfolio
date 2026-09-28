import { highlights } from "../data/portfolioData";
import SectionHeader from "./SectionHeader";

export default function Highlights() {
  return (
    <section id="highlights" className="section">
      <SectionHeader id="highlights" />

      <div className="highlights__grid">
        {highlights.map(item => (
          <div key={item.title} className="highlight-card reveal">
            <h3>{item.title}</h3>
            <p>{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
