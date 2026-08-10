import aboutStoryImage from "@/assets/images/about/about1.jpg";
import SectionHeading from "@/components/common/SectionHeading";
import { Section } from "@/components/ui";
import { useSiteContent } from "@/features/site-content";

export default function AboutStory() {
  const { content } = useSiteContent();
  const story = content.about.story;

  return (
    <Section>
      <SectionHeading
        badge={story.badge}
        title={story.title}
        description={story.description}
      />

      <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
        <div data-aos="fade-right">
          <img
            src={story.imageUrl || aboutStoryImage}
            alt={story.imageAlt}
            loading="lazy"
            className="w-full rounded-3xl object-cover shadow-2xl"
          />
        </div>

        <div
          className="space-y-6 text-lg leading-8 text-gray-600"
          data-aos="fade-left"
        >
          {story.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </Section>
  );
}
