import {
  Button,
  FadeIn,
  SectionContainer,
  SectionHeader,
  ReleaseArtwork,
} from "@/components/ui";

import type {
  ContentItem,
  ReleaseMeta,
} from "@/lib/types";

interface LatestReleaseSectionProps {
  release: ContentItem<ReleaseMeta>;
}

export function LatestReleaseSection({
  release,
}: LatestReleaseSectionProps) {
  const { meta, slug } = release;

  return (
    <SectionContainer id="latest-release">
      <SectionHeader
        label="Music"
        title="Latest Release"
      />

      <div className="grid gap-10 md:grid-cols-2 md:gap-16 lg:gap-20">
        <FadeIn>
          <ReleaseArtwork
            slug={slug}
            title={meta.title}
            type={meta.type}
            artwork={meta.artwork}
            coverImage={meta.coverImage}
            bgAccent={meta.bgAccent}
            fgAccent={meta.fgAccent}
          />
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="flex flex-col justify-center md:py-4">
            <p className="font-mono mb-2 text-[10px] tracking-[0.2em] text-muted uppercase">
              {new Date(meta.publishedAt).getFullYear()}
            </p>

            <h3 className="font-display mb-4 text-3xl text-foreground md:text-4xl lg:text-5xl">
              {meta.title}
            </h3>

            <p className="mb-8 text-base leading-relaxed text-muted md:text-lg">
              {meta.description}
            </p>

            <div className="flex flex-wrap gap-3">
              <Button href={`/music/${slug}`}>
                View Release
              </Button>

              {meta.streamingLinks?.spotify && (
                <Button
                  href={meta.streamingLinks.spotify}
                  external
                >
                  Spotify
                </Button>
              )}

              <Button href="/music" variant="outline">
                View All Releases
              </Button>
            </div>

            {meta.streamingLinks && (
              <div className="mt-8 flex flex-wrap gap-4">
                {Object.entries(meta.streamingLinks).map(
                  ([platform, url]) =>
                    url ? (
                      <a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="touch-target font-mono inline-flex min-h-11 items-center text-[10px] tracking-[0.15em] text-muted uppercase transition-colors hover:text-foreground"
                      >
                        {platform}
                      </a>
                    ) : null,
                )}
              </div>
            )}
          </div>
        </FadeIn>
      </div>
    </SectionContainer>
  );
}