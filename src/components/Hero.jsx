import "./Hero.css";
import heroImage from "../assets/images/hero-live.jpg";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__image" style={{ backgroundImage: `url(${heroImage})` }} />
      <div className="hero__gradient" />
      <div className="hero__content">
        <div className="hero__eyebrow">
          <span className="hero__dot" />
          <span>Live-Coverband · Süddeutschland</span>
        </div>
        <h1 className="hero__title">
          Empty
          <br />
          Promises
        </h1>
        <p className="hero__claim">
          Fünf junge Musiker, die aus Coversongs einen Abend machen, an dem niemand sitzen bleibt.
        </p>
        <div className="hero__actions">
          <a href="#booking" className="btn btn-primary">
            Anfragen
          </a>
          <a href="#musik" className="btn btn-outline">
            Hören
          </a>
        </div>
      </div>
    </section>
  );
}
