import Link from "next/link";
import { PlaceholderImage, AccentBar, Tag } from "@/components/ui";
import { resolveImagePath } from "@/lib/images";
import { accentStyle } from "@/lib/styles";
import type { ContentItem, CampaignMeta } from "@/lib/types";

interface CampaignCardProps {
  campaign: ContentItem<CampaignMeta>;
}

export function CampaignCard({ campaign }: CampaignCardProps) {
  const { meta, slug } = campaign;

  return (
    <Link
      href={`/campaigns/${slug}`}
      className="group relative flex overflow-hidden card-base md:flex-row h-full max-h-52"
      style={accentStyle(
        meta.bgAccent,
        meta.fgAccent,
      )}
    >
      {meta.coverImage && (
        <div className="relative w-auto">
          <PlaceholderImage
            src={resolveImagePath(
              meta.coverImage,
              slug,
              "campaign",
            )}
            alt={meta.title}
            variant="archive"
            aspectRatio="portrait"
            className="border-0 md:h-full"
          />
        </div>
      )}

      <div className="relative flex flex-col justify-between p-6 min-w-0">
        <AccentBar />

        <div className="relative">
          <p className="font-mono mb-2 text-[10px] tracking-[0.15em] text-(--fg-accent) uppercase">
            {meta.status}

            {meta.partner
              ? ` · ${meta.partner}`
              : ""}
          </p>

          <h3 className="font-display mb-3 line-clamp-1 text-2xl text-foreground transition-colors group-hover:text-accent lg:text-3xl">
              {meta.title}
          </h3>

          {meta.description && (
            <p className="line-clamp-2 text-sm leading-relaxed text-muted">
              {meta.description}
            </p>
          )}
        </div>

        <div className="relative mt-6 flex flex-col gap-4">
          <span className="font-mono shrink-0 text-[10px] tracking-[0.15em] text-muted uppercase transition-colors group-hover:text-(--fg-accent)">
            Learn more →
          </span>
        </div>
      </div>
    </Link>

  );
}
