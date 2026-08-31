function pad(n) {
  return String(n).padStart(2, "0");
}

function todayISO() {
  const d = new Date();
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

// A gig stays "upcoming" through its entire calendar day and only flips to
// "past" at local midnight afterwards — comparing plain YYYY-MM-DD strings
// (no time-of-day) gives exactly that behavior.
export function isPastGig(gig, today = todayISO()) {
  return gig.date < today;
}

export function splitGigs(gigs) {
  const today = todayISO();
  const upcoming = gigs
    .filter((g) => !isPastGig(g, today))
    .sort((a, b) => a.date.localeCompare(b.date));
  const past = gigs
    .filter((g) => isPastGig(g, today))
    .sort((a, b) => b.date.localeCompare(a.date));
  return { upcoming, past };
}

const MONTHS_DE = ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"];

export function formatDayMonth(isoDate) {
  const [, month, day] = isoDate.split("-").map(Number);
  return { day: pad(day), month: MONTHS_DE[month - 1] };
}

export function formatGermanDate(isoDate) {
  const [year, month, day] = isoDate.split("-");
  return `${day}.${month}.${year}`;
}
