import { useState } from "react";
import "./Repertoire.css";
import repertoireData from "../data/repertoire.json";

const CATEGORIES = repertoireData.categories;

export default function Repertoire() {
  const [open, setOpen] = useState({});
  const songTotal = CATEGORIES.reduce((n, c) => n + c.songs.length, 0);

  const toggle = (name) => {
    setOpen((s) => ({ ...s, [name]: !s[name] }));
  };

  return (
    <section id="repertoire" className="repertoire section section--alt">
      <h2 className="section-heading">Repertoire</h2>
      <p className="repertoire__intro">
        {songTotal} Songs im Set. Wunschtitel bis zwei Wochen vor dem Auftritt sind meist machbar.
      </p>

      <div className="repertoire__list">
        {CATEGORIES.map((cat) => {
          const isOpen = !!open[cat.name];
          return (
            <div key={cat.name} className="repertoire__item">
              <button type="button" className="repertoire__toggle" onClick={() => toggle(cat.name)}>
                <span className="repertoire__toggle-label">
                  <span className="repertoire__name">{cat.name}</span>
                  <span className="repertoire__count">({cat.songs.length})</span>
                </span>
                <span className="repertoire__sign">{isOpen ? "–" : "+"}</span>
              </button>
              {isOpen && (
                <div className="repertoire__songs">
                  {cat.songs.map((song) => (
                    <div key={song} className="repertoire__song">
                      {song}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <a href="#" className="btn btn-outline repertoire__pdf">
        Komplette Songliste als PDF <span className="repertoire__pdf-size">↓ 84 kB</span>
      </a>
    </section>
  );
}
