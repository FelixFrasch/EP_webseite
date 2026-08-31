import "./Band.css";
import { BAND_MEMBERS, memberInitials } from "../data/band";

export default function Band() {
  return (
    <section id="band" className="band section">
      <h2 className="section-heading">Die Band</h2>
      <div className="band__grid">
        {BAND_MEMBERS.map((member) => (
          <div key={member.name} className="band-card">
            <div className="band-card__photo" aria-hidden="true">
              <span>{memberInitials(member)}</span>
            </div>
            <div className="band-card__name">{member.name}</div>
            <div className="band-card__instrument">{member.instrument}</div>
            <div className="band-card__bio">Kurzvorstellung folgt</div>
          </div>
        ))}
      </div>
    </section>
  );
}
