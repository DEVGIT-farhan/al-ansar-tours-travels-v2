import { Section } from "@/components/ui";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/common/SectionHeading";
import GalleryCard from "./GalleryCard";
import { galleryItems } from "../data/gallery";

export default function HomeGallerySection() {
  return (
    <Section className="bg-white">
      <SectionHeading
        badge="Gallery"
        title="Moments That Inspire Travel"
        description="Take a glimpse at unforgettable journeys with AL ANSAR TOURS & TRAVELS."
      />

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {galleryItems.slice(0, 6).map((item, index) => (
          <div
            key={item.id}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <GalleryCard item={item} />
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Button to="/gallery" variant="secondary">
          View Full Gallery
        </Button>
      </div>
    </Section>
  );
}