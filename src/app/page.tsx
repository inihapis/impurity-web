import { Hero } from "@/components/page/home/Hero";
import {
  LatestReleaseSection,
  FeaturedJournalSection,
  ArchivePreviewSection,
  CampaignHighlightSection,
} from "@/components/page/home/sections";

import {
  getLatestRelease,
  getJournalPosts,
  getArchivePreview,
  getActiveCampaign,
} from "@/lib/content";

export default function HomePage() {
  const release = getLatestRelease();
  
  // Get top 2 journals (featured first, then fill with latest)
  const allJournals = getJournalPosts();
  const featured = allJournals.filter((p) => p.meta.featured).slice(0, 2);
  const journals = featured.length >= 2
    ? featured
    : [
        ...featured,
        ...allJournals.filter((p) => !p.meta.featured)
      ].slice(0, 2);

  const archive = getArchivePreview();
  const campaign = getActiveCampaign();

  return (
    <>
      <Hero />
      {release && <LatestReleaseSection release={release} />}
      {journals.length > 0 && <FeaturedJournalSection posts={journals} />}
      {archive.length > 0 && <ArchivePreviewSection items={archive} />}
      {campaign && <CampaignHighlightSection campaign={campaign} />}
    </>
  );
}
