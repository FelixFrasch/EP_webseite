import { useEffect, useState } from "react";
import "./Nav.css";
import socialsData from "../data/socials.json";

const SOCIAL_LINKS = socialsData.links;

const NAV_BREAKPOINT_QUERY = "(max-width: 859px)";

const MENU_ITEMS = [
  { label: "Band", href: "#band" },
  { label: "Termine", href: "#termine" },
  { label: "Musik", href: "#musik" },
  { label: "Repertoire", href: "#repertoire" },
  { label: "Booking", href: "#booking" },
];

const DESKTOP_LINKS = MENU_ITEMS.slice(0, 4);

// The nav bar still takes up its own space in normal document flow (it only
// becomes fixed-like once you've scrolled past it), so the hero section's
// natural top sits below it. Following the "#top" anchor natively would
// only scroll to that resting position — with the now-stuck nav overlapping
// the top of the hero. Scrolling to 0 directly avoids that.
function scrollToTop(e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

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
        <a href="#top" className="nav__brand" onClick={scrollToTop}>
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
