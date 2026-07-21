import Card from "@/components/ui/Card";

import type { PackageDetails } from "../types/packageDetails";

interface PackageItineraryProps {
  packageData: PackageDetails;
}

export default function PackageItinerary({
  packageData,
}: PackageItineraryProps) {
  return (
    <section className="mt-12">
      <Card className="p-8 lg:p-10">
        <h2 className="text-3xl font-bold text-[#0B3D91]">
          Day-wise Itinerary
        </h2>

        <div className="relative mt-10">
          {/* Timeline Line */}
          <div className="absolute left-5 top-0 h-full w-0.5 bg-[#0B3D91]/20" />

          <div className="space-y-10">
            {packageData.itinerary.map((day) => (
              <div
                key={day.day}
                className="relative flex gap-6"
                data-aos="fade-up"
              >
                {/* Day Badge */}
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0B3D91] font-bold text-white shadow-lg">
                  {day.day}
                </div>

                {/* Content */}
                <div className="flex-1 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg">
                  <h3 className="text-xl font-bold text-[#0B3D91]">
                    {day.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    {day.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </section>
  );
}