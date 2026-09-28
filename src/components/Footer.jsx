import { profile } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} {profile.name}. Built with React.</p>
      <div className="footer__social">
        <a href={profile.social.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={profile.social.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
}
