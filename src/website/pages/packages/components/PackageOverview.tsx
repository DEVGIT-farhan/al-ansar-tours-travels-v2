import type { TravelPackageWithCategory } from "@/shared/types/package.types";
import { Clock3, Globe2, MapPinned, Plane } from "lucide-react";

interface PackageOverviewProps {
  travelPackage: TravelPackageWithCategory;
}

export default function PackageOverview({
  travelPackage,
}: PackageOverviewProps) {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
      <div className="mb-8">
        <h2 className="mb-3 text-3xl font-bold text-gray-900">
          Package Overview
        </h2>

        <p className="leading-8 text-gray-600">{travelPackage.description}</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl bg-gray-50 p-5">
          <Clock3 className="mb-3 h-8 w-8 text-blue-600" />

          <p className="text-sm text-gray-500">Duration</p>

          <h3 className="mt-1 font-semibold text-gray-900">
            {travelPackage.duration}
          </h3>
        </div>

        <div className="rounded-xl bg-gray-50 p-5">
          <MapPinned className="mb-3 h-8 w-8 text-blue-600" />

          <p className="text-sm text-gray-500">Destination</p>

          <h3 className="mt-1 font-semibold text-gray-900">
            {travelPackage.destination}
          </h3>
        </div>

        <div className="rounded-xl bg-gray-50 p-5">
          <Globe2 className="mb-3 h-8 w-8 text-blue-600" />

          <p className="text-sm text-gray-500">Category</p>

          <h3 className="mt-1 font-semibold text-gray-900">
            {travelPackage.category?.name ?? "General"}
          </h3>
        </div>

        <div className="rounded-xl bg-gray-50 p-5">
          <Plane className="mb-3 h-8 w-8 text-blue-600" />

          <p className="text-sm text-gray-500">Starting Price</p>

          <h3 className="mt-1 font-semibold text-blue-600">
            {travelPackage.currency} {travelPackage.price}
          </h3>
        </div>
      </div>
    </section>
  );
}
