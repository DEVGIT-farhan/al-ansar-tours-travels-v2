import {
  CalendarDays,
  Phone,
  Star,
  MessageCircle,
} from "lucide-react";

import Button from "@/components/ui/Button";

import type { PackageDetails } from "../types/packageDetails";
import { COMPANY } from "@/constants/COMPANY";

interface PackageHeroProps {
  packageData: PackageDetails;
}

export default function PackageHero({
  packageData,
}: PackageHeroProps) {
  const whatsappUrl = `https://wa.me/${
    COMPANY.whatsapp
  }?text=${encodeURIComponent(packageData.whatsappMessage)}`;

  return (
    <section className="overflow-hidden rounded-3xl bg-white shadow-xl">
      <div className="grid lg:grid-cols-2">
        {/* Image */}

        <div className="overflow-hidden">
          <img
            src={packageData.heroImage}
            alt={packageData.title}
            loading="eager"
            decoding="async"
            className="h-full min-h-100 w-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>

        {/* Content */}

        <div className="flex flex-col justify-center p-8 lg:p-12">
          <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-[#F4B400]/10 px-4 py-2">
            <Star
              className="h-4 w-4 fill-[#F4B400] text-[#F4B400]"
              aria-hidden="true"
            />

            <span className="font-semibold text-[#0B3D91]">
              {packageData.rating} Rating
            </span>
          </div>

          <h1 className="text-4xl font-extrabold text-[#0B3D91] lg:text-5xl">
            {packageData.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            {packageData.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <CalendarDays
                className="h-5 w-5 text-[#0B3D91]"
                aria-hidden="true"
              />

              <span className="font-medium">
                {packageData.duration}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Star
                className="h-5 w-5 fill-[#F4B400] text-[#F4B400]"
                aria-hidden="true"
              />

              <span className="font-medium">
                {packageData.rating}
              </span>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-sm uppercase tracking-wide text-gray-500">
              Starting From
            </p>

            <h2 className="mt-1 text-4xl font-extrabold text-[#0B3D91]">
              {packageData.price}
            </h2>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Button className="flex-1">
              Book Now
            </Button>

            <Button
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              className="flex-1"
            >
              <MessageCircle
                className="mr-2 h-5 w-5"
                aria-hidden="true"
              />
              WhatsApp
            </Button>

            <Button
              href={`tel:${COMPANY.phone}`}
              variant="outline"
              className="flex-1"
            >
              <Phone
                className="mr-2 h-5 w-5"
                aria-hidden="true"
              />
              Call Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}