import SEO from "@/components/common/SEO";
import PageHeader from "@/components/common/PageHeader";
import MissionVision from "@/features/about/components/MissionVision";
import AboutStory from "@/features/about/components/AboutStory";
import CoreValues from "@/features/about/components/CoreValues";
import JourneyTimeline from "@/features/about/components/JourneyTimeline";
import AboutCTA from "@/features/about/components/AboutCTA";
import AboutFAQ from "@/features/about/components/AboutFAQ";

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Discover our journey, our values, and why thousands of travellers trust AL ANSAR TOURS & TRAVELS."
      />

      <PageHeader
        title="About Us"
        description="Discover our journey, our values, and why thousands of travellers trust AL ANSAR TOURS & TRAVELS."
        breadcrumb={[
          {
            label: "About Us",
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