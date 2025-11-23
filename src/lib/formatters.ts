import { format, parseISO } from "date-fns";

export function formatDate(value?: string | null) {
  if (!value) return "TBD";
  const date = typeof value === "string" ? parseISO(value) : value;
  return format(date, "MMMM d, yyyy");
}

export function formatDuration(seconds?: number | null) {
  if (!seconds || seconds <= 0) return "—";
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const parts = [];
  if (h) parts.push(`${h}h`);
  if (m) parts.push(`${m}m`);
  if (!parts.length) parts.push(`${seconds}s`);
  return parts.join(" ");
}

