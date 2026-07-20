import { Section } from "@/components/ui";
import SectionHeading from "@/components/common/SectionHeading";

export default function GalleryHero() {
  return (
    <Section className="bg-slate-50 py-20">
      <SectionHeading
        badge="Gallery"
        title="Explore Our Travel Moments"
        description="Discover unforgettable journeys, spiritual experiences, and holiday memories with AL ANSAR TOURS & TRAVELS."
      />
    </Section>
  );
}