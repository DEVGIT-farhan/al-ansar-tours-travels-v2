import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import type { PackageImage } from "@/shared/types/packageImage.types";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface PackageGalleryProps {
  images: PackageImage[];
}

export default function PackageGallery({ images }: PackageGalleryProps) {
  if (images.length === 0) {
    return (
      <section>
        <h2 className="mb-4 text-2xl font-semibold">Gallery</h2>

        <p>No gallery images available.</p>
      </section>
    );
  }

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Gallery</h2>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        slidesPerView={1}
        spaceBetween={16}
        className="overflow-hidden rounded-xl"
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <img
              src={image.image_url}
              alt={image.alt_text ?? "Package image"}
              loading="lazy"
              className="aspect-video w-full rounded-xl object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
