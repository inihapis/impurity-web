"use client";

import { useMemo, useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { ARCHIVE_CATEGORIES, type ArchiveCategory } from "@/lib/images";
import { ArchiveCard } from "./ArchiveCard";
import type { ArchiveMeta, ContentItem } from "@/lib/types";

interface ArchiveGridProps {
  items: ContentItem<ArchiveMeta>[];
}

export function ArchiveGrid({ items }: ArchiveGridProps) {
  const [activeCategory, setActiveCategory] = useState<ArchiveCategory>("all");

  const filtered = useMemo(() => {
    if (activeCategory === "all") return items;
    return items.filter((item) => item.meta.category === activeCategory);
  }, [items, activeCategory]);

  return (
    <>
      <div
        className="mb-10 flex flex-wrap gap-2"
        role="tablist"
        aria-label="Filter archive by category"
      >
        {ARCHIVE_CATEGORIES.map((cat) => {
          const active = activeCategory === cat;
          const count =
              cat === "all"
                ? items.length
                : items.filter((i) => i.meta.category === cat).length;
          return (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setActiveCategory(cat)}
              className={`touch-target font-mono min-h-11 border px-4 py-2.5 text-[10px] tracking-[0.15em] uppercase transition-colors ${
                active
                  ? "border-foreground bg-foreground text-background"
                  : "border-border text-muted hover:border-foreground/40 hover:text-foreground"
              }`}
            >
              {cat}
              <span className="ml-2 opacity-60">({count})</span>
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <p className="py-16 text-center text-sm text-muted">
          Tidak ada item dalam kategori ini.
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, i) => (
            <FadeIn key={item.slug} delay={i * 0.05}>
              <ArchiveCard item={item} />
            </FadeIn>
          ))}
        </div>
      )}
    </>
  );
}
