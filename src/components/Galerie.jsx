import "./Galerie.css";

const PLACEHOLDER_COUNT = 6;

export default function Galerie() {
  return (
    <section id="galerie" className="galerie section">
      <h2 className="section-heading">Galerie</h2>
      <p className="galerie__intro">Live-Fotos folgen in Kürze.</p>
      <div className="galerie__grid">
        {Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => (
          <div key={i} className="galerie__tile" aria-hidden="true" />
        ))}
      </div>
    </section>
  );
}
