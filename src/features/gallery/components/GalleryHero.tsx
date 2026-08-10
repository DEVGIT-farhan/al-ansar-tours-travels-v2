import { Section } from "@/components/ui";
import SectionHeading from "@/components/common/SectionHeading";
import { useSiteContent } from "@/features/site-content";

export default function GalleryHero() {
  const { content } = useSiteContent();
  const hero = content.gallery.hero;

  return (
    <Section className="bg-slate-50 py-20">
      <SectionHeading
        badge={hero.badge}
        title={hero.title}
        description={hero.description}
      />
    </Section>
  );
}
