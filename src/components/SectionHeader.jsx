import { sectionIntros } from "../data/portfolioData";

export default function SectionHeader({ id }) {
  const { eyebrow, title, subtitle } = sectionIntros[id];

  return (
    <header className="section__header reveal">
      <p className="section__eyebrow">{eyebrow}</p>
      <h2 className="section__title">{title}</h2>
      <p className="section__subtitle">{subtitle}</p>
    </header>
  );
}
