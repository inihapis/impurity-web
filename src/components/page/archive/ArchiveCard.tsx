import Link from "next/link";
import { PlaceholderImage, AccentBar, AccentPanel } from "@/components/ui";
import { resolveImagePath } from "@/lib/images";
import { accentStyle } from "@/lib/styles";
import type { ContentItem, ArchiveMeta } from "@/lib/types";

interface ArchiveCardProps {
  item: ContentItem<ArchiveMeta>;
}

export function ArchiveCard({ item }: ArchiveCardProps) {
  const { meta, slug } = item;

  return (
    <Link
      href={`/archive/${slug}`}
      className="group block h-full overflow-hidden card-base"
      style={accentStyle(meta.bgAccent, meta.fgAccent)}
    >
      <div className="relative overflow-hidden">
        <PlaceholderImage
          src={resolveImagePath(meta.coverImage, slug, "archive")}
          alt={meta.title}
          variant="archive"
          aspectRatio="wide"
          className="border-0"
        />
        <AccentPanel />
      </div>

      <div className="relative p-5">
        <AccentBar className="w-full h-px md:w-full md:h-px" />

        <div className="relative pt-3">
          <p className="font-mono text-[10px] tracking-[0.15em] text-muted uppercase">
            {meta.category}
            {meta.year ? ` · ${meta.year}` : ""}
          </p>

          <h3 className="font-display mt-2 text-xl text-foreground transition-colors group-hover:text-accent">
            {meta.title}
          </h3>

          {meta.description && (
            <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
              {meta.description}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
