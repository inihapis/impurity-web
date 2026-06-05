import Link from "next/link";
import { PlaceholderImage, AccentBar, AccentPanel, Tag } from "@/components/ui";
import { resolveImagePath } from "@/lib/images";
import { accentStyle } from "@/lib/styles";
import type { ContentItem, ContentMeta } from "@/lib/types";

interface JournalCardProps {
  post: ContentItem<ContentMeta>;
}

export function JournalCard({ post }: JournalCardProps) {
  const { meta, slug } = post;

  const formattedDate = new Date(meta.publishedAt).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Link
      href={`/journal/${slug}`}
      className="group relative flex flex-col overflow-hidden card-base h-full"
      style={accentStyle(meta.bgAccent, meta.fgAccent)}
    >
      <div className="relative overflow-hidden aspect-wide w-full">
        <PlaceholderImage
          src={resolveImagePath(meta.coverImage, slug, "journal")}
          alt={meta.title}
          variant="journal"
          aspectRatio="wide"
          className="border-0"
          label={meta.coverImage ? undefined : "No Thumbnail"}
          sublabel={meta.coverImage ? undefined : "Gambar belum tersedia"}
        />
        <AccentPanel />
      </div>

      <div className="relative flex flex-1 flex-col justify-between p-6 md:p-8">
        <AccentBar className="w-full h-px md:w-full md:h-px" />

        <div className="relative pt-3">
          <p className="font-mono mb-3 text-[10px] tracking-[0.15em] text-muted uppercase">
            {meta.author ?? "IMPURITY"} · {formattedDate}
          </p>

          <h3 className="font-display mb-3 text-2xl text-foreground transition-colors group-hover:text-accent">
            {meta.title}
          </h3>

          {meta.description && (
            <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-muted">
              {meta.description}
            </p>
          )}
        </div>

        {meta.tags && meta.tags.length > 0 && (
          <div className="relative mt-auto flex flex-wrap gap-1.5 pt-2">
            {meta.tags.slice(0, 3).map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
