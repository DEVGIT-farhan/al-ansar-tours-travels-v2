import { Building2, MapPin, Star } from "lucide-react";

import Card from "@/components/ui/Card";

import type { PackageDetails } from "../types/packageDetails";

interface PackageHotelsProps {
  packageData: PackageDetails;
}

export default function PackageHotels({
  packageData,
}: PackageHotelsProps) {
  return (
    <section className="mt-12">
      <Card className="p-8 lg:p-10">
        <h2 className="text-3xl font-bold text-[#0B3D91]">
          Accommodation
        </h2>

        <p className="mt-3 text-gray-600">
          Stay in carefully selected premium hotels
          close to the Holy Mosques for a comfortable
          pilgrimage.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {packageData.hotels.map((hotel) => (
            <div
              key={hotel.name}
              className="rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <Building2
                      className="h-6 w-6 text-[#0B3D91]"
                      aria-hidden="true"
                    />

                    <h3 className="text-xl font-bold text-[#0B3D91]">
                      {hotel.name}
                    </h3>
                  </div>

                  <div className="mt-3 flex items-center gap-2 text-gray-600">
                    <MapPin
                      className="h-4 w-4"
                      aria-hidden="true"
                    />

                    {hotel.city}
                  </div>
                </div>

                <div className="flex items-center gap-1 rounded-full bg-[#F4B400]/10 px-3 py-1">
                  <Star
                    className="h-4 w-4 fill-[#F4B400] text-[#F4B400]"
                    aria-hidden="true"
                  />

                  <span className="font-semibold">
                    {hotel.stars}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}