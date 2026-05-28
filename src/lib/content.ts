import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type {
  ArchiveMeta,
  CampaignMeta,
  ContentItem,
  ContentMeta,
  ReleaseMeta,
} from "./types";

const CONTENT_DIR = path.join(process.cwd(), "content");

function readDirectory<T extends ContentMeta>(
  subdir: string,
): ContentItem<T>[] {
  const dir = path.join(CONTENT_DIR, subdir);

  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(dir, file), "utf-8");
      const { data, content } = matter(raw);
      return { slug, meta: data as T, content };
    })
    .sort(
      (a, b) =>
        new Date(b.meta.publishedAt).getTime() -
        new Date(a.meta.publishedAt).getTime(),
    );
}

export function getReleases(): ContentItem<ReleaseMeta>[] {
  return readDirectory<ReleaseMeta>("releases");
}

export function getRelease(slug: string): ContentItem<ReleaseMeta> | null {
  return getReleases().find((r) => r.slug === slug) ?? null;
}

export function getJournalPosts(): ContentItem<ContentMeta>[] {
  return readDirectory<ContentMeta>("journal");
}

export function getJournalPost(slug: string): ContentItem<ContentMeta> | null {
  return getJournalPosts().find((p) => p.slug === slug) ?? null;
}

export function getArchiveItems(): ContentItem<ArchiveMeta>[] {
  return readDirectory<ArchiveMeta>("archive");
}

export function getArchiveItem(slug: string): ContentItem<ArchiveMeta> | null {
  return getArchiveItems().find((item) => item.slug === slug) ?? null;
}

export function getCampaigns(): ContentItem<CampaignMeta>[] {
  return readDirectory<CampaignMeta>("campaigns");
}

export function getCampaign(slug: string): ContentItem<CampaignMeta> | null {
  return getCampaigns().find((c) => c.slug === slug) ?? null;
}

export function getFeaturedJournal(): ContentItem<ContentMeta> | null {
  return getJournalPosts().find((p) => p.meta.featured) ?? getJournalPosts()[0] ?? null;
}

export function getLatestRelease(): ContentItem<ReleaseMeta> | null {
  return getReleases()[0] ?? null;
}

export function getActiveCampaign(): ContentItem<CampaignMeta> | null {
  return (
    getCampaigns().find((c) => c.meta.status === "active") ??
    getCampaigns()[0] ??
    null
  );
}

export function getArchivePreview(limit = 4): ContentItem<ArchiveMeta>[] {
  return getArchiveItems().slice(0, limit);
}

export function getAllSlugs(subdir: string): string[] {
  const dir = path.join(CONTENT_DIR, subdir);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}
