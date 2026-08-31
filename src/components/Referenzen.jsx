import "./Referenzen.css";

const PLACEHOLDER_COUNT = 3;

export default function Referenzen() {
  return (
    <section id="referenzen" className="referenzen section">
      <h2 className="section-heading">Referenzen</h2>
      <p className="referenzen__intro">Stimmen von Veranstaltern und Locations folgen in Kürze.</p>
      <div className="referenzen__grid">
        {Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => (
          <div key={i} className="referenzen__card" aria-hidden="true">
            <span className="referenzen__quote-mark">"</span>
            <span className="referenzen__placeholder">Zitat folgt</span>
          </div>
        ))}
      </div>
    </section>
  );
}
