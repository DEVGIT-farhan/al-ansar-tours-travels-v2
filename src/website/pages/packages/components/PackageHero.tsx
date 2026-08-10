import type { TravelPackageWithCategory } from "@/shared/types/package.types";
import { MapPin, CalendarDays, Tag } from "lucide-react";

interface PackageHeroProps {
  travelPackage: TravelPackageWithCategory;
}

export default function PackageHero({ travelPackage }: PackageHeroProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl">
      {/* Cover Image */}
      <div className="relative h-112.5 w-full">
        <img
          src={
            travelPackage.cover_image ??
            "https://placehold.co/1600x900?text=Travel+Package"
          }
          alt={travelPackage.title}
          className="h-full w-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="absolute inset-0 flex items-end">
          <div className="w-full p-8 text-white md:p-12">
            {travelPackage.category && (
              <span className="mb-4 inline-flex rounded-full bg-white/20 px-4 py-2 text-sm backdrop-blur">
                {travelPackage.category.name}
              </span>
            )}

            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              {travelPackage.title}
            </h1>

            <p className="mb-6 max-w-3xl text-lg text-gray-200">
              {travelPackage.short_description}
            </p>

            <div className="flex flex-wrap gap-6 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                {travelPackage.destination}
              </div>

              <div className="flex items-center gap-2">
                <CalendarDays size={18} />
                {travelPackage.duration}
              </div>

              <div className="flex items-center gap-2">
                <Tag size={18} />
                {travelPackage.currency} {travelPackage.price}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
