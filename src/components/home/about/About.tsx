import { Button, Section } from "@/components/ui";
import ImageSlider from "@/components/common/ImageSlider";
import SectionHeading from "@/components/common/SectionHeading";

import { aboutFeatures } from "@/data/aboutFeatures";
import { aboutImages } from "@/data/aboutImages";
import { useSiteContent } from "@/features/site-content";

export default function About() {
  const { content } = useSiteContent();
  const aboutContent = content.home.about;
  const editableImages = aboutContent.imageUrls.filter(Boolean);

  return (
    <Section
      className="py-20"
      containerClassName="grid items-center gap-12 lg:grid-cols-2"
    >
      <div>
        <SectionHeading
          badge={aboutContent.badge}
          title={aboutContent.title}
          description={aboutContent.description}
        />

        <p className="mt-6 text-gray-600">{aboutContent.body}</p>

        <div className="mt-8 space-y-5">
          {aboutContent.features.map((title, index) => {
            const Icon = aboutFeatures[index]?.icon ?? aboutFeatures[0]!.icon;

            return (
              <div key={title} className="flex items-center gap-4">
                <Icon className="h-6 w-6 text-[#0B3D91]" aria-hidden="true" />

                <span className="text-gray-700">{title}</span>
              </div>
            );
          })}
        </div>

        <div className="mt-10 grid grid-cols-3 gap-6 text-center">
          {aboutContent.stats.map(({ value, label }) => (
            <div key={label}>
              <h3 className="text-3xl font-bold text-[#0B3D91]">{value}</h3>

              <p className="mt-1 text-sm text-gray-500">{label}</p>
            </div>
          ))}
        </div>

        <Button to="/about" className="mt-8">
          {aboutContent.buttonLabel}
        </Button>
      </div>

      <ImageSlider
        images={editableImages.length > 0 ? editableImages : aboutImages}
        className="rounded-3xl shadow-2xl"
      />
    </Section>
  );
}
