import "./Musik.css";
import { VIDEOS, AUDIO_SAMPLES } from "../data/media";

export default function Musik() {
  return (
    <section id="musik" className="musik section section--alt">
      <h2 className="section-heading">Musik</h2>
      <p className="musik__intro">Videos und Soundsamples folgen in Kürze.</p>

      <div className="musik__videos">
        {VIDEOS.map((video) => (
          <div key={video.id} className="musik__video-slot">
            <span className="musik__play">▶</span>
            <span>{video.title}</span>
          </div>
        ))}
      </div>

      <div className="musik__audio">
        {AUDIO_SAMPLES.map((sample) => (
          <div key={sample.id} className="musik__audio-row">
            <span className="musik__audio-icon">♪</span>
            <span className="musik__audio-title">{sample.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
