import Link from "next/link";

import {
  FadeIn,
  SectionContainer,
  SectionHeader,
  PlaceholderImage,
  AccentBar,
  AccentPanel,
} from "@/components/ui";


import { resolveImagePath } from "@/lib/images";
import { accentStyle } from "@/lib/styles";

import type {
  ContentItem,
  ArchiveMeta,
} from "@/lib/types";

interface ArchivePreviewSectionProps {
  items: ContentItem<ArchiveMeta>[];
}

export function ArchivePreviewSection({
  items,
}: ArchivePreviewSectionProps) {
  return (
    <SectionContainer id="archive-preview">
      <SectionHeader
        label="Archive"
        title="Fragments"
        description="Flyer, visual, rehearsal docs, dan jejak historis dari perjalanan IMPURITY."
        action={{
          label: "Browse archive",
          href: "/archive",
        }}
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <FadeIn
            key={item.slug}
            delay={i * 0.08}
          >
            <Link
              href={`/archive/${item.slug}`}
              className="group block h-full overflow-hidden card-base"
              style={accentStyle(
                item.meta.bgAccent,
                item.meta.fgAccent,
              )}
            >
              <div className="relative overflow-hidden">
                <PlaceholderImage
                  src={resolveImagePath(
                    item.meta.coverImage,
                    item.slug,
                    "archive",
                  )}
                  alt={item.meta.title}
                  variant="archive"
                  aspectRatio="wide"
                  className="border-0"
                />

                <AccentPanel />
              </div>

              <div className="relative p-4">
                <AccentBar className="w-full h-px md:w-full md:h-px" />

                <div className="relative pt-3">
                  <p className="font-mono text-[10px] tracking-[0.15em] text-muted uppercase">
                    {item.meta.category}
                    {item.meta.year
                      ? ` · ${item.meta.year}`
                      : ""}
                  </p>

                  <h3 className="font-display mt-2 text-lg text-foreground transition-colors group-hover:text-accent">
                    {item.meta.title}
                  </h3>
                </div>
              </div>
            </Link>
            </FadeIn>
            ))}
      </div>
    </SectionContainer>
  );
}