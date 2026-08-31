# Empty Promises — Website

One-Pager-Webseite für die Coverband Empty Promises. React + Vite, kein Backend.

## Entwickeln

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Platzhalter / offene Inhalte

Diese Bereiche sind aktuell mit Platzhaltern gefüllt und sollten vor dem Live-Gang ersetzt werden:

- **Termine** (`src/data/gigs.json`) — Beispiel-Termine, keine echte Liste. Kommende/vergangene Termine werden automatisch anhand des heutigen Datums berechnet (`src/lib/gigs.js`): ein Auftritt gilt bis Mitternacht nach seinem Tag als "kommend".
- **Repertoire** (`src/data/repertoire.json`) — Beispiel-Setliste, nicht die echte Songliste der Band.
- **Die Band** (`src/data/band.js`) — Namen/Instrumente sind final, aber Fotos und Kurzvorstellungen fehlen noch.
- **Musik** (`src/data/media.js`) — noch keine Video-/Audio-Links.
- **Galerie** — noch keine Live-Fotos.
- **Referenzen** — noch keine Stimmen/Testimonials.
- **Booking** — das Kontaktformular hat noch kein echtes Ziel (E-Mail/Backend), der Tech-Rider hat noch keine echten Werte (Platzbedarf/Strom/PA), und der Presskit-Button verlinkt noch auf keine echte Datei.
- **Footer** — Impressum/Datenschutz sind noch Platzhalter-Links (rechtlich vor Live-Gang nötig).
