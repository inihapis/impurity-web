export interface ContentMeta {
  title: string;
  description: string;
  author?: string;
  tags?: string[];
  publishedAt: string;
  coverImage?: string;
  featured?: boolean;
  bgAccent?: string;
  fgAccent?: string;
  gallery?: { src: string; alt: string }[];
}

export interface ReleaseMeta extends ContentMeta {
  type: "single" | "ep" | "album" | "demo";
  streamingLinks?: {
    spotify?: string;
    apple?: string;
    youtube?: string;
    bandcamp?: string;
  };
  credits?: string[];
  artwork?: string;
}

export interface ArchiveMeta extends ContentMeta {
  category: "flyer" | "visual" | "rehearsal" | "bts" | "logo" | "other";
  year?: number;
}

export interface CampaignMeta extends ContentMeta {
  status: "active" | "completed" | "upcoming";
  partner?: string;
}

export interface ContentItem<T extends ContentMeta = ContentMeta> {
  slug: string;
  meta: T;
  content: string;
}

export interface Member {
  name: string;
  role: string;
  image?: string;
}

export interface TimelineEvent {
  year: string;
  month?: string;
  title: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
}
