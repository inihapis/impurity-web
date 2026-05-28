import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  Button,
  FadeIn,
  Tag,
} from "@/components/ui";

import {
  ReleaseArtwork,
} from "@/components/ui";

import { MDXContent } from "@/lib/mdx";
import { accentStyle } from "@/lib/styles";
import {
  getAllSlugs,
  getRelease,
} from "@/lib/content";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs("releases").map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const release = getRelease(slug);

  if (!release) {
    return {
      title: "Not Found",
    };
  }

  return {
    title: release.meta.title,
    description: release.meta.description,
  };
}

export default async function ReleasePage({
  params,
}: PageProps) {
  const { slug } = await params;

  const release = getRelease(slug);

  if (!release) {
    notFound();
  }

  const { meta, content } = release;

  return (
    <article
      className="relative mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24"
      style={accentStyle(
        meta.bgAccent,
        meta.fgAccent,
      )}
    >
      <FadeIn>
        <Link
          href="/music"
          className="font-mono mb-8 inline-flex min-h-11 items-center text-[10px] tracking-[0.15em] text-muted uppercase transition-colors hover:text-foreground"
        >
          ← Back to Music
        </Link>
      </FadeIn>
      {meta.bgAccent && (
        <div
          className="fixed inset-0 z-[-1] transition-colors duration-1000"
          style={{
            backgroundColor: meta.bgAccent,
          }}
          aria-hidden
        />
      )}

      {meta.fgAccent && (
        <>
          <div
            className="pointer-events-none absolute top-0 -right-1/4 h-screen w-screen opacity-[0.12] blur-[120px]"
            aria-hidden
            style={{
              background: `radial-gradient(circle at 70% 20%, ${meta.fgAccent} 0%, transparent 60%)`,
            }}
          />

          <div
            className="pointer-events-none absolute -bottom-1/4 -left-1/4 h-[80vh] w-[80vw] opacity-[0.08] blur-[100px]"
            aria-hidden
            style={{
              background: `radial-gradient(circle at 30% 80%, ${meta.fgAccent} 0%, transparent 60%)`,
            }}
          />
        </>
      )}

      <div className="relative z-10 grid gap-12 lg:grid-cols-[minmax(280px,420px)_1fr] lg:gap-20">
        <FadeIn>
          <div className="lg:sticky lg:top-28 space-y-8">
            <ReleaseArtwork
              slug={slug}
              title={meta.title}
              type={meta.type}
              artwork={meta.artwork}
              coverImage={meta.coverImage}
              bgAccent={meta.bgAccent}
              fgAccent={meta.fgAccent}
              priority
              className="border-0"
            />

            {meta.tags && (
              <div className="flex flex-wrap gap-2">
                {meta.tags.map((tag) => (
                  <Tag
                    key={tag}
                    variant="accent"
                  >
                    {tag}
                  </Tag>
                ))}
              </div>
            )}

            {meta.credits && meta.credits.length > 0 && (
              <section className="border-t border-border/60 pt-6">
                <h2 className="font-mono mb-4 text-[10px] tracking-[0.2em] text-foreground uppercase">
                  Credits
                </h2>

                <ul className="space-y-2">
                  {meta.credits.map((credit) => (
                    <li
                      key={credit}
                      className="text-sm text-muted"
                    >
                      {credit}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </FadeIn>

        <div>
          <FadeIn delay={0.08}>
            <header className="mb-10 max-w-2xl">
              <p className="font-mono mb-3 text-[10px] tracking-[0.2em] text-(--fg-accent) uppercase">
                {meta.type} ·{" "}
                {new Date(
                  meta.publishedAt,
                ).toLocaleDateString("id-ID", {
                  year: "numeric",
                  month: "long",
                })}
              </p>

              <h1 className="font-display mb-4 text-4xl text-foreground md:text-5xl lg:text-6xl">
                {meta.title}
              </h1>

              <p className="text-base leading-relaxed text-muted md:text-lg">
                {meta.description}
              </p>

              {meta.streamingLinks && (
                <div className="mt-8 flex flex-wrap gap-3">
                  {Object.entries(
                    meta.streamingLinks,
                  ).map(([platform, url]) =>
                    url ? (
                      <Button
                        key={platform}
                        href={url}
                        external
                        variant="accent-outline"
                      >
                        {platform}
                      </Button>
                    ) : null,
                  )}
                </div>
              )}
            </header>
          </FadeIn>

          <FadeIn delay={0.12}>
            <div className="prose-editorial max-w-2xl">
              <MDXContent source={content} />
            </div>
          </FadeIn>
        </div>
      </div>
    </article>
  );
}