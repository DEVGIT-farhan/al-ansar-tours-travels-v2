import { CheckCircle2, XCircle } from "lucide-react";

import type { TravelPackageWithCategory } from "@/shared/types/package.types";

interface PackageInclusionsProps {
  travelPackage: TravelPackageWithCategory;
}

export default function PackageInclusions({
  travelPackage,
}: PackageInclusionsProps) {
  const inclusions = travelPackage.inclusions ?? [];
  const exclusions = travelPackage.exclusions ?? [];

  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">What's Included</h2>

        <p className="mt-2 text-gray-600">
          Review everything that's included in your package before booking.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Inclusions */}
        <div className="rounded-xl border border-green-200 bg-green-50 p-6">
          <h3 className="mb-6 flex items-center gap-2 text-xl font-semibold text-green-700">
            <CheckCircle2 className="h-6 w-6" />
            Included
          </h3>

          {inclusions.length === 0 ? (
            <p className="text-gray-500">No inclusions available.</p>
          ) : (
            <ul className="space-y-4">
              {inclusions.map((item) => (
                <li key={item.id} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-green-600" />

                  <span className="text-gray-700">{item.description}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Exclusions */}
        <div className="rounded-xl border border-red-200 bg-red-50 p-6">
          <h3 className="mb-6 flex items-center gap-2 text-xl font-semibold text-red-700">
            <XCircle className="h-6 w-6" />
            Not Included
          </h3>

          {exclusions.length === 0 ? (
            <p className="text-gray-500">No exclusions available.</p>
          ) : (
            <ul className="space-y-4">
              {exclusions.map((item) => (
                <li key={item.id} className="flex items-start gap-3">
                  <XCircle className="mt-1 h-5 w-5 shrink-0 text-red-600" />

                  <span className="text-gray-700">{item.description}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
