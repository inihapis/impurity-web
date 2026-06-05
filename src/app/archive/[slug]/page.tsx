import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { FadeIn, Tag, ImageGallery } from "@/components/ui";
import { MDXContent } from "@/lib/mdx";
import { getArchiveItem, getAllSlugs } from "@/lib/content";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs("archive").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getArchiveItem(slug);
  if (!item) return { title: "Not Found" };
  return {
    title: item.meta.title,
    description: item.meta.description,
  };
}

export default async function ArchiveDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = getArchiveItem(slug);
  if (!item) notFound();

  const { meta, content } = item;

  return (
    <article className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <FadeIn>
        <Link
          href="/archive"
          className="font-mono mb-8 inline-flex min-h-11 items-center text-[10px] tracking-[0.15em] text-muted uppercase transition-colors hover:text-foreground"
        >
          ← Back to Archive
        </Link>
      </FadeIn>

      <FadeIn>
        <ImageGallery 
          coverImage={meta.coverImage} 
          gallery={meta.gallery} 
          slug={slug} 
          title={meta.title} 
          variant="archive" 
        />
      </FadeIn>

      <FadeIn delay={0.08}>
        <header className="prose-editorial mx-auto mb-12 max-w-3xl">
          <p className="font-mono mb-4 text-[10px] tracking-[0.2em] text-muted uppercase">
            {meta.category}
            {meta.year ? ` · ${meta.year}` : ""}
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
