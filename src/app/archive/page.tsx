import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui";
import { ArchiveGrid } from "@/components/page/archive/ArchiveGrid";
import { getArchiveItems } from "@/lib/content";

export const metadata: Metadata = {
  title: "Archive",
  description:
    "Arsip visual IMPURITY — flyer, rehearsal docs, BTS materials, logo evolution, dan historical assets.",
};

export default function ArchivePage() {
  const items = getArchiveItems();

  return (
    <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <FadeIn>
        <SectionHeader
          label="Archive"
          title="Historical Assets"
          description="Flyer, visual, rehearsal docs, BTS materials, dan jejak historis dari perjalanan IMPURITY."
        />
      </FadeIn>

      <FadeIn delay={0.05}>
        <ArchiveGrid items={items} />
      </FadeIn>
    </div>
  );
}
