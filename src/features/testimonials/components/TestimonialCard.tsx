import type { Testimonial } from "../types/testimonial";
import { Star, Quote } from "lucide-react";
import Card from "@/components/ui/Card";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({
  testimonial,
}: TestimonialCardProps) {
  return (
    <Card className="p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl">
      <Quote className="mb-6 h-10 w-10 text-[#0B3D91]/20" />

      {/* Review */}
      <p className="leading-7 text-gray-600 italic">
        "{testimonial.review}"
      </p>

      {/* Rating */}
      <div className="mt-6 flex">
        {[...Array(testimonial.rating)].map((_, index) => (
          <Star
            key={index}
            className="h-5 w-5 fill-[#F4B400] text-[#F4B400]"
          />
        ))}
      </div>

      {/* Customer */}
      <div className="mt-8 flex items-center gap-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="h-16 w-16 rounded-full object-cover border-2 border-[#0B3D91]"
        />

        <div>
          <h3 className="font-bold text-[#0B3D91]">
            {testimonial.name}
          </h3>

          <p className="text-sm text-gray-500">
            {testimonial.location}
          </p>
        </div>
      </div>
    </Card>
  );
}