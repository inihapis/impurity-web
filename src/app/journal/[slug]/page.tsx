import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FadeIn, Tag, ImageGallery } from "@/components/ui";
import { MDXContent } from "@/lib/mdx";
import { getJournalPost, getAllSlugs } from "@/lib/content";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs("journal").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getJournalPost(slug);
  if (!post) return { title: "Not Found" };
  return {
    title: post.meta.title,
    description: post.meta.description,
  };
}

export default async function JournalPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getJournalPost(slug);
  if (!post) notFound();

  const { meta, content } = post;

  return (
    <article className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <FadeIn>
        <Link
          href="/journal"
          className="font-mono mb-8 inline-flex min-h-11 items-center text-[10px] tracking-[0.15em] text-muted uppercase transition-colors hover:text-foreground"
        >
          ← Back to Journal
        </Link>
      </FadeIn>
      <FadeIn>
        <ImageGallery 
          coverImage={meta.coverImage} 
          gallery={meta.gallery} 
          slug={slug} 
          title={meta.title} 
          variant="journal" 
        />
      </FadeIn>

      <FadeIn delay={0.08}>
        <header className="prose-editorial mx-auto mb-12 mt-16 max-w-3xl">
          <p className="font-mono mb-4 text-[10px] tracking-[0.2em] text-muted uppercase">
            {meta.author ?? "IMPURITY"} ·{" "}
            {new Date(meta.publishedAt).toLocaleDateString("id-ID", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <h1 className="font-display mb-4 text-4xl text-foreground md:text-5xl lg:text-6xl">
            {meta.title}
          </h1>
          <p className="text-base leading-relaxed text-muted md:text-lg">
            {meta.description}
          </p>
          {meta.tags && (
            <div className="mt-6 flex flex-wrap gap-2">
              {meta.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          )}
        </header>
      </FadeIn>

      <FadeIn delay={0.12}>
        <div className="prose-editorial mx-auto max-w-3xl">
          <MDXContent source={content} />
        </div>
      </FadeIn>
    </article>
  );
}
