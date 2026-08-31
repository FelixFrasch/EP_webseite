import "./Band.css";
import bandData from "../data/band.json";

function initials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("");
}

export default function Band() {
  return (
    <section id="band" className="band section">
      <h2 className="section-heading">Die Band</h2>
      <div className="band__grid">
        {bandData.members.map((member) => (
          <div key={member.name} className="band-card">
            <div className="band-card__photo" aria-hidden="true">
              <span>{initials(member.name)}</span>
            </div>
            <div className="band-card__name">{member.name}</div>
            <div className="band-card__instrument">{member.instrument}</div>
            <div className={`band-card__bio${member.bio ? "" : " band-card__bio--placeholder"}`}>
              {member.bio || "Kurzvorstellung folgt"}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
