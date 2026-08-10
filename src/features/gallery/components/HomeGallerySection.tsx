import SectionHeading from "@/components/common/SectionHeading";
import Button from "@/components/ui/Button";
import { Section } from "@/components/ui";

import { galleryItems } from "../data/gallery";
import { useSiteContent } from "@/features/site-content";
import GalleryCard from "./GalleryCard";

const PREVIEW_COUNT = 6;

export default function HomeGallerySection() {
  const { content } = useSiteContent();
  const section = content.home.gallery;
  const editableGalleryItems = content.gallery.items.flatMap((item, index) => {
    const image = item.imageUrl || galleryItems[index]?.image;

    if (!image) {
      return [];
    }

    return [
      {
        id: index + 1,
        title: item.title,
        category: item.category,
        image,
        thumbnail: image,
      },
    ];
  });

  return (
    <Section className="bg-white">
      <SectionHeading
        badge={section.badge}
        title={section.title}
        description={section.description}
      />

      <ul className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {editableGalleryItems.slice(0, PREVIEW_COUNT).map((item, index) => (
          <li
            key={item.id}
            data-aos="zoom-in"
            data-aos-delay={Math.min(index * 100, 500)}
          >
            <GalleryCard item={item} />
          </li>
        ))}
      </ul>

      <div className="mt-12 flex justify-center">
        <Button to="/gallery" variant="secondary">
          {section.buttonLabel}
        </Button>
      </div>
    </Section>
  );
}
