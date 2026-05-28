import type { Metadata } from "next";
import Link from "next/link";

import {
  FadeIn,
  SectionHeader,
  Tag,
  AccentBar,
  PlaceholderImage,
} from "@/components/ui";

import { resolveImagePath } from "@/lib/images";
import { accentStyle } from "@/lib/styles";
import { getReleases } from "@/lib/content";

export const metadata: Metadata = {
  title: "Music",
  description:
    "Discography IMPURITY — releases, streaming links, lyrics, dan credits.",
};

export default function MusicPage() {
  const releases = getReleases();

  return (
    <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <FadeIn>
        <SectionHeader
          label="Music"
          title="Releases"
          description="Semua rilis IMPURITY — dari demo hingga EP. Streaming links, lyrics, credits, dan release notes."
        />
      </FadeIn>

      <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
        {releases.map((release, i) => (
          <FadeIn
            key={release.slug}
            delay={i * 0.08}
          >
            <Link
              href={`/music/${release.slug}`}
              className="group relative grid overflow-hidden card-base md:grid-cols-[200px_1fr] lg:grid-cols-[240px_1fr]"
              style={accentStyle(
                release.meta.bgAccent,
                release.meta.fgAccent,
              )}
            >
              <PlaceholderImage
                src={resolveImagePath(
                  release.meta.artwork ??
                    release.meta.coverImage,
                  release.slug,
                  "release",
                )}
                alt={release.meta.title}
                variant="release"
                aspectRatio="square"
                sublabel={release.meta.type}
                className="border-0 md:min-h-full"
              />

              <div className="relative flex flex-col justify-center p-6 md:py-8 md:pr-8">
                <div>
                  <p className="font-mono mb-2 text-[10px] tracking-[0.15em] text-(--fg-accent) uppercase">
                    {release.meta.type} ·{" "}
                    {new Date(
                      release.meta.publishedAt,
                    ).getFullYear()}
                  </p>

                  <h3 className="font-display mb-3 text-2xl text-foreground transition-colors group-hover:text-accent lg:text-3xl">
                    {release.meta.title}
                  </h3>

                  <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-muted">
                    {release.meta.description}
                  </p>

                  {release.meta.tags && (
                    <div className="flex flex-wrap gap-2">
                      {release.meta.tags
                        .slice(0, 3)
                        .map((tag) => (
                          <Tag key={tag} variant="accent">
                            {tag}
                          </Tag>
                        ))}
                    </div>
                  )}
                </div>
              </div>
            </Link>

          </FadeIn>
        ))}
      </div>
    </div>
  );
}
