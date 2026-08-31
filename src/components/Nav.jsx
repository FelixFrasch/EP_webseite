import { useEffect, useState } from "react";
import "./Nav.css";
import { SOCIAL_LINKS } from "../data/socials";

const NAV_BREAKPOINT_QUERY = "(max-width: 859px)";

const MENU_ITEMS = [
  { label: "Band", href: "#band" },
  { label: "Termine", href: "#termine" },
  { label: "Musik", href: "#musik" },
  { label: "Repertoire", href: "#repertoire" },
  { label: "Booking", href: "#booking" },
];

const DESKTOP_LINKS = MENU_ITEMS.slice(0, 4);

export default function Nav() {
  const [isNarrow, setIsNarrow] = useState(
    () => typeof window !== "undefined" && window.matchMedia(NAV_BREAKPOINT_QUERY).matches
  );
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(NAV_BREAKPOINT_QUERY);
    const onChange = (e) => {
      setIsNarrow(e.matches);
      if (!e.matches) setMenuOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <>
      <nav className="nav">
        {isNarrow && (
          <button type="button" className="nav__burger" aria-label="Menü" onClick={() => setMenuOpen((v) => !v)}>
            <span className="nav__burger-bar" />
            <span className="nav__burger-bar" />
            <span className="nav__burger-bar nav__burger-bar--short" />
          </button>
        )}
        <a href="#top" className="nav__brand">
          Empty<span className="nav__brand-dot">.</span>Promises
        </a>
        <div className="nav__spacer" />
        {!isNarrow && (
          <div className="nav__links">
            {DESKTOP_LINKS.map((item) => (
              <a key={item.href} href={item.href} className="nav__link">
                {item.label}
              </a>
            ))}
          </div>
        )}
        <a href="#booking" className="btn btn-primary nav__cta">
          Anfragen
        </a>
      </nav>

      {isNarrow && menuOpen && (
        <div className="nav-menu">
          {MENU_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className="nav-menu__link" onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <div className="nav-menu__socials">
            {SOCIAL_LINKS.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
