import { useEffect, useState } from "react";
import { profile, roles } from "../data/portfolioData";
import profilePhoto from "../assets/profile.jpg";
import { ChevronDownIcon, DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

const TYPE_MS = 70;
const DELETE_MS = 35;
const HOLD_MS = 1600;

// Types each role out, holds it, deletes it, then moves to the next.
function useTypedRoles(words) {
  const [reducedMotion] = useState(
    () => window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false,
  );
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reducedMotion) return;

    const word = words[index % words.length];
    let delay = deleting ? DELETE_MS : TYPE_MS;
    if (!deleting && text === word) delay = HOLD_MS;

    const timer = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex(i => i + 1);
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [words, index, text, deleting, reducedMotion]);

  return reducedMotion ? words[0] : text;
}

export default function Hero() {
  const typed = useTypedRoles(roles);

  return (
    <section id="top" className="hero">
      <div className="hero__glow" aria-hidden="true" />

      <div className="hero__content">
        <img className="hero__photo" src={profilePhoto} alt={profile.name} />
        <p className="hero__eyebrow">Welcome to my portfolio</p>
        <h1 className="hero__name">
          Hi, I'm <span className="text-gradient">{profile.name}</span>
        </h1>
        <p className="hero__title" aria-label={profile.title}>
          <span aria-hidden="true">{typed}</span>
          <span className="hero__caret" aria-hidden="true" />
        </p>
        <p className="hero__tagline">{profile.tagline}</p>

        <div className="hero__cta">
          <a className="btn btn--primary" href="#projects">
            View Projects
          </a>
          <a className="btn btn--ghost" href="#contact">
            Get In Touch
          </a>
          <a className="btn btn--ghost" href={profile.resumeUrl} download>
            <DownloadIcon width="18" height="18" /> Resume
          </a>
        </div>

        <div className="hero__social">
          <a className="icon-btn" href={profile.social.github} target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub">
            <GitHubIcon />
          </a>
          <a className="icon-btn" href={profile.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn">
            <LinkedInIcon />
          </a>
          <a className="icon-btn" href={`mailto:${profile.email}`} aria-label="Email" title="Email">
            <MailIcon />
          </a>
        </div>
      </div>

      <a className="hero__scroll" href="#about" aria-label="Scroll to About section">
        <ChevronDownIcon />
      </a>
    </section>
  );
}
