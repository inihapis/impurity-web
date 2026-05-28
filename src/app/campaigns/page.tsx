import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui";
import { CampaignCard } from "@/components/page/campaigns/CampaignCard";
import { getCampaigns } from "@/lib/content";

export const metadata: Metadata = {
  title: "Campaigns",
  description:
    "Inisiatif kolaboratif dan campaign IMPURITY — community support, visual projects, dan creative collaborations.",
};

export default function CampaignsPage() {
  const campaigns = getCampaigns();

  return (
    <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <FadeIn>
        <SectionHeader
          label="Campaigns"
          title="Collaborative Initiatives"
          description="Proyek kolaboratif yang tetap relevan dengan identitas IMPURITY — mendukung komunitas, visual, dan ekosistem kreatif."
        />
      </FadeIn>

      <div className="grid gap-6 md:grid-cols-2">
        {campaigns.map((campaign, i) => (
          <FadeIn key={campaign.slug} delay={i * 0.08}>
            <CampaignCard campaign={campaign} />
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
