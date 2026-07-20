import { useMemo, useState } from "react";
import { Section } from "@/components/ui";
import GalleryCard from "./GalleryCard";
import GalleryFilters from "./GalleryFilters";
import GalleryLightbox from "./GalleryLightbox";

import { galleryItems } from "../data/gallery";

export default function GalleryPageSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const categories = useMemo(
    () => [
      "All",
      ...new Set(galleryItems.map((item) => item.category)),
    ],
    []
  );

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") {
      return galleryItems;
    }

    return galleryItems.filter(
      (item) => item.category === activeCategory
    );
  }, [activeCategory]);

  const slides = filteredItems.map((item) => ({
  src: item.image,
  alt: item.title,
  width: 1600,
  height: 900,
}));

  return (
    <Section className="bg-white pt-0">
      <GalleryFilters
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            data-aos="zoom-in"
            data-aos-delay={index * 80}
          >
            <GalleryCard
              item={item}
              onClick={() => setSelectedIndex(index)}
            />
          </div>
        ))}
      </div>

      <GalleryLightbox
        open={selectedIndex !== null}
        close={() => setSelectedIndex(null)}
        index={selectedIndex ?? 0}
        slides={slides}
      />
    </Section>
  );
}