import { profile } from "../data/portfolioData";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} {profile.name}. Built with React.</p>
      <div className="footer__social">
        <a className="icon-btn" href={profile.social.github} target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub">
          <GitHubIcon width="18" height="18" />
        </a>
        <a className="icon-btn" href={profile.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn">
          <LinkedInIcon width="18" height="18" />
        </a>
        <a className="icon-btn" href={`mailto:${profile.email}`} aria-label="Email" title="Email">
          <MailIcon width="18" height="18" />
        </a>
      </div>
    </footer>
  );
}
