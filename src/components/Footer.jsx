import "./Footer.css";
import { SOCIAL_LINKS } from "../data/socials";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__socials">
        {SOCIAL_LINKS.map((s) => (
          <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
            {s.label}
          </a>
        ))}
      </div>
      <div className="footer__legal">
        {/* TODO: echte Impressum-/Datenschutz-Seiten ergänzen, bevor die Seite live geht. */}
        <a href="/impressum">Impressum</a>
        <a href="/datenschutz">Datenschutz</a>
      </div>
      <div className="footer__copy">© {new Date().getFullYear()} Empty Promises</div>
    </footer>
  );
}
