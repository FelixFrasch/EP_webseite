import "./Musik.css";
import mediaData from "../data/media.json";
import { youtubeEmbedUrl } from "../lib/youtube";

export default function Musik() {
  return (
    <section id="musik" className="musik section section--alt">
      <h2 className="section-heading">Musik</h2>
      <p className="musik__intro">Videos und Soundsamples folgen in Kürze.</p>

      <div className="musik__videos">
        {mediaData.videos.map((video) => {
          const embedUrl = youtubeEmbedUrl(video.youtubeUrl);
          return embedUrl ? (
            <iframe
              key={video.id}
              className="musik__video-embed"
              src={embedUrl}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div key={video.id} className="musik__video-slot">
              <span className="musik__play">▶</span>
              <span>{video.title}</span>
            </div>
          );
        })}
      </div>

      <div className="musik__audio">
        {mediaData.audioSamples.map((sample) =>
          sample.url ? (
            <div key={sample.id} className="musik__audio-row">
              <span className="musik__audio-title">{sample.title}</span>
              <audio className="musik__audio-player" controls src={sample.url} />
            </div>
          ) : (
            <div key={sample.id} className="musik__audio-row musik__audio-row--placeholder">
              <span className="musik__audio-icon">♪</span>
              <span className="musik__audio-title">{sample.title}</span>
            </div>
          )
        )}
      </div>
    </section>
  );
}
