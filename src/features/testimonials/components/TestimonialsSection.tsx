import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, A11y } from "swiper/modules";

import SectionHeading from "@/components/common/SectionHeading";
import { Section } from "@/components/ui";

import { testimonials } from "../data/testimonials";
import { useSiteContent } from "@/features/site-content";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialsSection() {
  const { content } = useSiteContent();
  const section = content.home.testimonials;
  const editableTestimonials = content.testimonials.items.flatMap(
    (testimonial, index) => {
      const image = testimonial.imageUrl || testimonials[index]?.image;

      if (!image) {
        return [];
      }

      return [
        {
          id: index + 1,
          name: testimonial.name,
          location: testimonial.location,
          rating: testimonial.rating,
          review: testimonial.review,
          image,
        },
      ];
    },
  );

  return (
    <Section className="bg-gray-50">
      <SectionHeading
        badge={section.badge}
        title={section.title}
        description={section.description}
      />

      <div className="mt-16">
        <Swiper
          modules={[Autoplay, Pagination, A11y]}
          slidesPerView={1}
          spaceBetween={30}
          loop
          grabCursor
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
          }}
          a11y={{
            enabled: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {editableTestimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Section>
  );
}
