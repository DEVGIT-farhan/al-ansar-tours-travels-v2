import { CheckCircle2, XCircle } from "lucide-react";

import Card from "@/components/ui/Card";

import type { PackageDetails } from "../types/packageDetails";

interface PackageIncludesProps {
  packageData: PackageDetails;
}

export default function PackageIncludes({
  packageData,
}: PackageIncludesProps) {
  return (
    <section className="mt-12">
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Includes */}

        <Card className="p-8">
          <h2 className="mb-8 text-3xl font-bold text-[#0B3D91]">
            What's Included
          </h2>

          <div className="space-y-5">
            {packageData.includes.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3"
              >
                <CheckCircle2
                  className="mt-0.5 h-6 w-6 shrink-0 text-green-600"
                  aria-hidden="true"
                />

                <span className="leading-7 text-gray-700">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </Card>

        {/* Excludes */}

        <Card className="p-8">
          <h2 className="mb-8 text-3xl font-bold text-[#0B3D91]">
            Not Included
          </h2>

          <div className="space-y-5">
            {packageData.excludes.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3"
              >
                <XCircle
                  className="mt-0.5 h-6 w-6 shrink-0 text-red-500"
                  aria-hidden="true"
                />

                <span className="leading-7 text-gray-700">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}