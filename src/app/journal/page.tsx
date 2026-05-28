import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui";
import { JournalCard } from "@/components/page/journal/JournalCard";
import { getJournalPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Editorial, reviews, cultural commentary, dan catatan dari IMPURITY.",
};

export default function JournalPage() {
  const posts = getJournalPosts();

  return (
    <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <FadeIn>
        <SectionHeader
          label="Journal"
          title="Editorial & Notes"
          description="Refleksi, rekomendasi, dan komentar kultural — konten sustainable yang tetap hidup meskipun tidak ada rilis baru."
        />
      </FadeIn>

      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post, i) => (
          <FadeIn key={post.slug} delay={i * 0.08}>
            <JournalCard post={post} />
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
