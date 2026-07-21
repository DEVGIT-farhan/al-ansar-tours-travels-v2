import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, A11y } from "swiper/modules";

import SectionHeading from "@/components/common/SectionHeading";
import { Section } from "@/components/ui";

import { testimonials } from "../data/testimonials";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialsSection() {
  return (
    <Section className="bg-gray-50">
      <SectionHeading
        badge="Testimonials"
        title="What Our Customers Say"
        description="Thousands of happy travellers have trusted AL ANSAR TOURS & TRAVELS for unforgettable journeys."
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
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <TestimonialCard
                testimonial={testimonial}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Section>
  );
}