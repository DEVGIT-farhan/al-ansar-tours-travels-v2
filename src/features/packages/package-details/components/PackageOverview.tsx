import { CheckCircle2 } from "lucide-react";

import Card from "@/components/ui/Card";

import type { PackageDetails } from "../types/packageDetails";

interface PackageOverviewProps {
  packageData: PackageDetails;
}

export default function PackageOverview({
  packageData,
}: PackageOverviewProps) {
  return (
    <section className="mt-12">
      <Card className="p-8 lg:p-10">
        <h2 className="text-3xl font-bold text-[#0B3D91]">
          Package Overview
        </h2>

        <p className="mt-6 leading-8 text-gray-600">
          {packageData.overview}
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {packageData.includes.slice(0, 6).map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-xl bg-slate-50 p-4"
            >
              <CheckCircle2
                className="h-6 w-6 text-green-600"
                aria-hidden="true"
              />

              <span className="font-medium text-gray-700">
                {item}
              </span>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}