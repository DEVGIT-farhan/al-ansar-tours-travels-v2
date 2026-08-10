import SEO from "@/components/common/SEO";
import PageHeader from "@/components/common/PageHeader";
import MissionVision from "@/features/about/components/MissionVision";
import AboutStory from "@/features/about/components/AboutStory";
import CoreValues from "@/features/about/components/CoreValues";
import JourneyTimeline from "@/features/about/components/JourneyTimeline";
import AboutCTA from "@/features/about/components/AboutCTA";
import AboutFAQ from "@/features/about/components/AboutFAQ";
import { useSiteContent } from "@/features/site-content";

export default function About() {
  const { content } = useSiteContent();
  const about = content.about;

  return (
    <>
      <SEO title={about.pageTitle} description={about.pageDescription} />

      <PageHeader
        title={about.pageTitle}
        description={about.pageDescription}
        breadcrumb={[
          {
            label: about.pageTitle,
          },
        ]}
      />

      <AboutStory />
      <MissionVision />
      <CoreValues />
      <JourneyTimeline />
      <AboutFAQ />
      <AboutCTA />

      {/* We'll add the remaining sections after we create them */}
    </>
  );
}
