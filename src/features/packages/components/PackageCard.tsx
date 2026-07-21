import { Check, Clock, Star } from "lucide-react";

import { Button, Card } from "@/components/ui";
import { COMPANY } from "@/constants/COMPANY";

import type { Package } from "../types/package";

interface PackageCardProps {
  packageData: Package;
}

export default function PackageCard({
  packageData,
}: PackageCardProps) {
 const whatsappUrl = `https://wa.me/${
  COMPANY.whatsapp
}?text=${encodeURIComponent(packageData.whatsappMessage)}`;

  return (
    <Card className="group flex h-full flex-col overflow-hidden border border-gray-200 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-[#0B3D91] hover:shadow-2xl">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={packageData.image}
          alt={packageData.title}
          loading="lazy"
          decoding="async"
          className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Badge */}
        <span className="absolute left-4 top-4 rounded-full bg-[#F4B400] px-4 py-1 text-xs font-semibold uppercase tracking-wide text-black shadow-lg">
          {packageData.badge}
        </span>

        {/* Rating */}
        <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white px-3 py-1 shadow-md">
          <Star
            aria-hidden="true"
            className="h-4 w-4 fill-[#F4B400] text-[#F4B400]"
          />
          <span className="text-sm font-semibold">
            {packageData.rating}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex grow flex-col p-6">
        <h3 className="text-2xl font-bold text-[#0B3D91] transition-colors duration-300 group-hover:text-[#082d6d]">
          {packageData.title}
        </h3>

        <div className="mt-4 flex items-center gap-2 text-gray-600">
          <Clock
            aria-hidden="true"
            className="h-5 w-5"
          />
          <span>{packageData.duration}</span>
        </div>

        {/* Package Includes */}
        <div className="mt-6 space-y-3">
          {packageData.includes.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2"
            >
              <Check
                aria-hidden="true"
                className="h-5 w-5 shrink-0 text-green-600"
              />

              <span className="text-gray-700">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Price */}
        <div className="mt-6">
          <p className="text-sm font-medium uppercase tracking-wide text-gray-500">
            Starting From
          </p>

          <p className="mt-1 text-3xl font-bold text-[#0B3D91]">
            {packageData.price}
          </p>
        </div>

        {/* Actions */}
        <div className="mt-8 flex gap-3">
          <Button
  href={whatsappUrl}
  variant="primary"
  className="flex-1"
>
  Book Now
</Button>

          <Button
            to={`/package-details/${packageData.slug}`}
            variant="outline"
            className="flex-1"
          >
            View Details
          </Button>
        </div>
      </div>
    </Card>
  );
}