export const BAND_MEMBERS = [
  { name: "Felix Frasch", instrument: "Keyboard" },
  { name: "André Ruzak", instrument: "E-Gitarre" },
  { name: "Elijah Herth", instrument: "E-Gitarre" },
  { name: "Hannah Kazda", instrument: "Schlagzeug" },
  { name: "Cedric Hardtmann", instrument: "Bass" },
];

function initials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("");
}

export function memberInitials(member) {
  return initials(member.name);
}
