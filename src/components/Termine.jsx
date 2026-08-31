import "./Termine.css";
import gigsData from "../data/gigs.json";
import { splitGigs, formatDayMonth, formatGermanDate } from "../lib/gigs";

const { upcoming, past } = splitGigs(gigsData.gigs);

export default function Termine() {
  return (
    <section id="termine" className="termine section">
      <div className="termine__header">
        <h2 className="section-heading" style={{ margin: 0 }}>
          Termine
        </h2>
        <span className="termine__count">{upcoming.length} live</span>
      </div>

      <div className="termine__list">
        {upcoming.map((gig) => {
          const { day, month } = formatDayMonth(gig.date);
          return (
            <div key={gig.id} className="termine__row">
              <div className="termine__date">
                <div className="termine__day">{day}</div>
                <div className="termine__month">{month}</div>
              </div>
              <div>
                <div className="termine__location">{gig.location}</div>
                <div className="termine__city">{gig.city}</div>
                <div className="termine__meta">
                  <span>{gig.time}</span>
                  <span className="termine__meta-dot" />
                  <span>{gig.kind}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {past.length > 0 && (
        <div className="termine__past">
          <div className="termine__past-label">Bisher gespielt</div>
          <div className="termine__past-list">
            {past.map((gig) => (
              <div key={gig.id} className="termine__past-row">
                <span className="termine__past-date">{formatGermanDate(gig.date)}</span>
                <span className="termine__past-location">{gig.location}</span>
                <span>{gig.city}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
