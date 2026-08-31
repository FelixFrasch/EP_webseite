import { useState } from "react";
import "./Booking.css";

const EVENT_TYPES = ["Stadtfest", "Hochzeit", "Vereinsfeier", "Club", "Sonstiges"];

const TECH_RIDER = [
  { label: "Platzbedarf", value: "wird ergänzt" },
  { label: "Strom", value: "wird ergänzt" },
  { label: "PA vorhanden", value: "wird ergänzt" },
];

const initialForm = { name: "", email: "", date: "", eventType: EVENT_TYPES[0], message: "" };

export default function Booking() {
  const [form, setForm] = useState(initialForm);
  const [riderOpen, setRiderOpen] = useState(false);
  const [status, setStatus] = useState("idle");

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  // TODO: hier fehlt noch ein echtes Ziel für die Anfrage (E-Mail-Adresse / Formular-Backend).
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sent");
  };

  return (
    <section id="booking" className="booking section">
      <h2 className="section-heading">Booking</h2>

      <div className="booking__layout">
        <form className="booking__form" onSubmit={handleSubmit}>
          <label className="booking__field">
            <span>Name</span>
            <input type="text" required value={form.name} onChange={update("name")} />
          </label>
          <label className="booking__field">
            <span>E-Mail</span>
            <input type="email" required value={form.email} onChange={update("email")} />
          </label>
          <label className="booking__field">
            <span>Datum</span>
            <input type="date" required value={form.date} onChange={update("date")} />
          </label>
          <label className="booking__field">
            <span>Art der Veranstaltung</span>
            <select value={form.eventType} onChange={update("eventType")}>
              {EVENT_TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </label>
          <label className="booking__field">
            <span>Nachricht</span>
            <textarea rows={4} value={form.message} onChange={update("message")} />
          </label>
          <button type="submit" className="btn btn-primary booking__submit">
            Anfrage senden
          </button>
          {status === "sent" && <p className="booking__status">Danke! Wir melden uns.</p>}
        </form>

        <div className="booking__side">
          <div className="booking__rider">
            <button type="button" className="booking__rider-toggle" onClick={() => setRiderOpen((v) => !v)}>
              <span>Tech-Rider</span>
              <span className="booking__rider-sign">{riderOpen ? "–" : "+"}</span>
            </button>
            {riderOpen && (
              <dl className="booking__rider-list">
                {TECH_RIDER.map((item) => (
                  <div key={item.label} className="booking__rider-row">
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
            )}
          </div>

          <a href="#" className="btn btn-outline booking__presskit">
            Presskit herunterladen
          </a>
        </div>
      </div>
    </section>
  );
}
