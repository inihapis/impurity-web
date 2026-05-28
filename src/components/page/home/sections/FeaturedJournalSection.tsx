import { FadeIn, SectionContainer, SectionHeader } from "@/components/ui";
import { JournalCard } from "@/components/page/journal/JournalCard";
import type { ContentItem, ContentMeta } from "@/lib/types";

interface FeaturedJournalSectionProps {
  posts: ContentItem<ContentMeta>[];
}

export function FeaturedJournalSection({
  posts,
}: FeaturedJournalSectionProps) {
  return (
    <SectionContainer id="featured-journal">
      <SectionHeader
        label="Journal"
        title="Featured Notes"
        action={{
          label: "All entries",
          href: "/journal",
        }}
      />

      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post, i) => (
          <FadeIn key={post.slug} delay={i * 0.08}>
            <JournalCard post={post} />
          </FadeIn>
        ))}
      </div>
    </SectionContainer>
  );
}