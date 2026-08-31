# Empty Promises — Website

One-Pager-Webseite für die Coverband Empty Promises. React + Vite, kein Backend.

## Entwickeln

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
```

## Inhalte pflegen (JSON)

Alle Inhalte, die sich häufiger ändern, liegen als JSON in `src/data/` — Code muss dafür nicht angefasst werden. Jede Liste kann beliebig viele Einträge haben (auch 0), einfach Objekte hinzufügen/entfernen/umsortieren:

- **`band.json`** — Bandmitglieder. Jeder Eintrag: `name`, `instrument`, `bio` (leer lassen = "Kurzvorstellung folgt"-Platzhalter).
- **`gigs.json`** — Auftritte. Jeder Eintrag braucht nur ein `date` (Format `YYYY-MM-DD`) plus `location`, `city`, `time`, `kind`. Ob ein Gig als "kommend" oder "vergangen" angezeigt wird, berechnet die Seite automatisch anhand des heutigen Datums (`src/lib/gigs.js`) — ein Auftritt gilt bis Mitternacht nach seinem Tag als "kommend", danach rutscht er automatisch zu "Bisher gespielt".
- **`repertoire.json`** — Songliste. `categories` ist eine Liste beliebig vieler Kategorien, jede mit `name` und einer `songs`-Liste beliebiger Länge.
- **`media.json`** — Videos/Audiosamples. Jedes Video braucht ein `youtubeUrl` (jedes gängige YouTube-URL-Format funktioniert: `youtube.com/watch?v=...`, `youtu.be/...`, `youtube.com/shorts/...`); leer lassen zeigt einen Platzhalter. Jedes Audiosample entsprechend ein `url` zu einer Audiodatei.
- **`socials.json`** — Social-Media-Links im Footer/Menü, als Liste von `{ label, href }`.

Beispiel: eine neue Repertoire-Kategorie hinzufügen — in `repertoire.json` einfach ein neues Objekt in `categories` einfügen:
```json
{ "name": "Neue Kategorie", "songs": ["Song A", "Song B"] }
```

## Platzhalter / offene Inhalte

Diese Bereiche sind aktuell mit Platzhaltern gefüllt und sollten vor dem Live-Gang ersetzt werden:

- **Termine** (`src/data/gigs.json`) — Beispiel-Termine, keine echte Liste.
- **Repertoire** (`src/data/repertoire.json`) — Beispiel-Setliste, nicht die echte Songliste der Band.
- **Die Band** (`src/data/band.json`) — Namen/Instrumente sind final, aber Fotos und Kurzvorstellungen (`bio`) fehlen noch.
- **Musik** (`src/data/media.json`) — noch keine Video-/Audio-Links.
- **Galerie** — noch keine Live-Fotos.
- **Referenzen** — noch keine Stimmen/Testimonials.
- **Booking** — das Kontaktformular hat noch kein echtes Ziel (E-Mail/Backend), der Tech-Rider hat noch keine echten Werte (Platzbedarf/Strom/PA), und der Presskit-Button verlinkt noch auf keine echte Datei.
- **Footer** — Impressum/Datenschutz sind noch Platzhalter-Links (rechtlich vor Live-Gang nötig).
