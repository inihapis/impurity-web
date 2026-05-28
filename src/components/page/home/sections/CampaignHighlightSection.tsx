import Link from "next/link";

import {
  FadeIn,
  SectionContainer,
  SectionHeader,
  AccentBar,
  AccentPanel,
  SectionImage
} from "@/components/ui";

import { accentStyle } from "@/lib/styles";

interface CampaignHighlightSectionProps {
  campaign: {
    slug: string;
    meta: {
      title: string;
      description: string;
      status: string;
      bgAccent?: string;
      fgAccent?: string;
      partner?: string;
      coverImage?: string;
    };
  };
}

export function CampaignHighlightSection({
  campaign,
}: CampaignHighlightSectionProps) {
  return (
    <SectionContainer id="campaign-highlight">
      <SectionHeader
        label="Campaigns"
        title="Current Initiative"
        action={{
          label: "All campaigns",
          href: "/campaigns",
        }}
      />

      <FadeIn>
        <Link
          href={`/campaigns/${campaign.slug}`}
          className="group relative flex flex-col overflow-hidden card-base md:flex-row"
          style={accentStyle(
            campaign.meta.bgAccent,
            campaign.meta.fgAccent,
          )}
        >
          {campaign.meta.coverImage && (
            <div className="relative aspect-portrait overflow-hidden w-full md:w-[160px] lg:w-[240px]">
              <SectionImage
                src={campaign.meta.coverImage}
                alt={campaign.meta.title}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent md:hidden" />

              <AccentPanel />
            </div>
          )}

          <div className="relative flex flex-1 flex-col justify-center overflow-hidden p-8 md:p-12">
            <AccentPanel />

            <AccentBar />

            <div className="relative">
              <p className="font-mono mb-3 text-[10px] tracking-[0.15em] text-muted uppercase">
                {campaign.meta.status}

                {campaign.meta.partner
                  ? ` · ${campaign.meta.partner}`
                  : ""}
              </p>

              <h3 className="font-display mb-4 text-3xl text-foreground md:text-4xl">
                {campaign.meta.title}
              </h3>

              <p className="max-w-2xl text-base leading-relaxed text-muted">
                {campaign.meta.description}
              </p>

              <span className="font-mono mt-6 inline-block text-[10px] tracking-[0.15em] text-muted uppercase transition-colors group-hover:text-foreground">
                Learn more →
              </span>
            </div>
          </div>
          </Link>
          </FadeIn>
    </SectionContainer>
  );
}