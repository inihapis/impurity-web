import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  FadeIn,
  Tag,
  ImageGallery,
} from "@/components/ui";

import { MDXContent } from "@/lib/mdx";
import { accentStyle } from "@/lib/styles";

import {
  getCampaign,
  getAllSlugs,
} from "@/lib/content";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs("campaigns").map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const campaign = getCampaign(slug);

  if (!campaign) {
    return {
      title: "Not Found",
    };
  }

  return {
    title: campaign.meta.title,
    description: campaign.meta.description,
  };
}

export default async function CampaignPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const campaign = getCampaign(slug);

  if (!campaign) {
    notFound();
  }

  const { meta, content } = campaign;

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
          href="/campaigns"
          className="font-mono mb-8 inline-flex min-h-11 items-center text-[10px] tracking-[0.15em] text-muted uppercase transition-colors hover:text-foreground"
        >
          ← Back to Campaigns
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

      <div className="grid gap-12 lg:grid-cols-[minmax(280px,420px)_1fr] lg:gap-20">
        {(meta.coverImage || (meta.gallery && meta.gallery.length > 0)) && (
          <FadeIn>
            <ImageGallery 
              coverImage={meta.coverImage} 
              gallery={meta.gallery} 
              slug={slug} 
              title={meta.title} 
              variant="campaign" 
            />
          </FadeIn>
        )}

        <div>
          <FadeIn delay={0.08}>
            <header className="mb-10 max-w-2xl">
              <p className="font-mono mb-4 text-[10px] tracking-[0.2em] text-(--fg-accent) uppercase">
                {meta.status}

                {meta.partner
                  ? ` · ${meta.partner}`
                  : ""}
              </p>

              <h1 className="font-display mb-6 text-4xl text-foreground md:text-5xl lg:text-6xl">
                {meta.title}
              </h1>

              <p className="text-base leading-relaxed text-muted md:text-lg">
                {meta.description}
              </p>

              {meta.tags && (
                <div className="mt-6 flex flex-wrap gap-2">
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
            </header>
          </FadeIn>

          <FadeIn delay={0.16}>
            <div className="prose-editorial max-w-3xl">
              <MDXContent source={content} />
            </div>
          </FadeIn>
        </div>
      </div>
    </article>
  );
}