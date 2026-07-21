import { CheckCircle, Quote, Star } from "lucide-react";

import Card from "@/components/ui/Card";

import type { Testimonial } from "../types/testimonial";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({
  testimonial,
}: TestimonialCardProps) {
  return (
    <Card className="group border border-gray-200 p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-[#0B3D91] hover:shadow-2xl">
      <Quote
        aria-hidden="true"
        className="mb-6 h-12 w-12 text-[#0B3D91]/20"
      />

      <p className="italic leading-7 text-gray-600">
        "{testimonial.review}"
      </p>

      <div className="mt-6 flex">
        {Array.from({ length: testimonial.rating }).map((_, index) => (
          <Star
            key={index}
            aria-hidden="true"
            className="h-5 w-5 fill-[#F4B400] text-[#F4B400]"
          />
        ))}
      </div>

      <div className="mt-8 flex items-center gap-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          loading="lazy"
          decoding="async"
          className="h-16 w-16 rounded-full border-4 border-[#0B3D91] object-cover"
        />

        <div>
          <h3 className="font-bold text-[#0B3D91]">
            {testimonial.name}
          </h3>

          <div className="mt-1 flex items-center gap-1 text-sm text-green-600">
            <CheckCircle
              aria-hidden="true"
              className="h-4 w-4"
            />
            <span>Verified Traveller</span>
          </div>

          <p className="mt-1 text-sm text-gray-500">
            {testimonial.location}
          </p>
        </div>
      </div>
    </Card>
  );
}