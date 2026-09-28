import { profile } from "../data/portfolioData";
import profilePhoto from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__content">
        <img className="hero__photo" src={profilePhoto} alt={profile.name} />
        <p className="hero__eyebrow">Hi, I'm</p>
        <h1 className="hero__name">{profile.name}</h1>
        <h2 className="hero__title">{profile.title}</h2>
        <p className="hero__tagline">{profile.tagline}</p>

        <div className="hero__cta">
          <a className="btn btn--primary" href="#projects">
            View Projects
          </a>
          <a className="btn btn--ghost" href="#contact">
            Get In Touch
          </a>
          <a className="btn btn--ghost" href={profile.resumeUrl} download>
            Download Resume
          </a>
        </div>

        <div className="hero__social">
          <a href={profile.social.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.social.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
      </div>
    </section>
  );
}
