import type { TravelPackageWithCategory } from "@/shared/types/package.types";
import { CalendarDays, MapPin } from "lucide-react";

import type { PackageItinerary } from "@/shared/types/packageItinerary.types";
interface PackageItineraryProps {
  travelPackage: TravelPackageWithCategory;
}

export default function PackageItinerary({
  travelPackage,
}: PackageItineraryProps) {
  const itinerary: PackageItinerary[] = travelPackage.itinerary ?? [];

  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Travel Itinerary</h2>

        <p className="mt-2 text-gray-600">
          Day-by-day schedule of your journey.
        </p>
      </div>

      {itinerary.length === 0 ? (
        <div className="rounded-xl border border-dashed border-gray-300 p-8 text-center text-gray-500">
          No itinerary has been added yet.
        </div>
      ) : (
        <div className="space-y-8">
          {itinerary.map((item, index) => (
            <div key={index} className="relative flex gap-6">
              {/* Timeline */}
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                  {item.day_number}
                </div>

                {index !== itinerary.length - 1 && (
                  <div className="mt-2 h-full w-0.5 bg-gray-300" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 rounded-xl border border-gray-200 p-6 transition hover:shadow-md">
                <div className="mb-3 flex items-center gap-2">
                  <CalendarDays className="h-5 w-5 text-blue-600" />

                  <h3 className="text-xl font-semibold">
                    Day {item.day_number} — {item.title}
                  </h3>
                </div>

                <div className="flex items-start gap-2">
                  <MapPin className="mt-1 h-5 w-5 text-gray-400" />

                  <p className="leading-7 text-gray-600">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
