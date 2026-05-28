export type PlaceholderVariant =
  | "release"
  | "journal"
  | "archive"
  | "campaign"
  | "press";

/** Resolve artwork/cover path; returns undefined to use inline gradient placeholder */
export function resolveImagePath(
  explicit: string | undefined,
  _slug: string,
  _variant: PlaceholderVariant,
): string | undefined {
  return explicit;
}

export const ARCHIVE_CATEGORIES = [
  "all",
  "flyer",
  "visual",
  "rehearsal",
  "bts",
  "logo",
  "other",
] as const;

export type ArchiveCategory = (typeof ARCHIVE_CATEGORIES)[number];

export function isArchiveCategory(value: string): value is ArchiveCategory {
  return ARCHIVE_CATEGORIES.includes(value as ArchiveCategory);
}
