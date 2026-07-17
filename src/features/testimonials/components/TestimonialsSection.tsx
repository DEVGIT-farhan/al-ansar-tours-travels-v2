import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import SectionHeading from "../../../components/common/SectionHeading";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "../data/testimonials";

export default function TestimonialsSection() {
  return (
    <section
      className="bg-gray-50 py-24"
      data-aos="fade-up"
    >
      <div className="mx-auto max-w-7xl px-6">

        <SectionHeading
          badge="Testimonials"
          title="What Our Customers Say"
          description="Thousands of happy travellers have trusted AL ANSAR TOURS & TRAVELS for unforgettable journeys."
        />

        <div className="mt-16">
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={30}
            loop
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
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
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}