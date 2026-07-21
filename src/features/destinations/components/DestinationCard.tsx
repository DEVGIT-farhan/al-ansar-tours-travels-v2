import { Star, Clock } from "lucide-react";

import { Button, Card } from "@/components/ui";

import type { Destination } from "../types/destination";

interface DestinationCardProps {
  destination: Destination;
}

export default function DestinationCard({
  destination,
}: DestinationCardProps) {
  return (
    <Card className="group flex h-full flex-col overflow-hidden border border-gray-200 transition-all duration-300 hover:-translate-y-2 hover:border-[#0B3D91] hover:shadow-2xl">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          loading="lazy"
          decoding="async"
          className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Badge */}
        <span className="absolute left-4 top-4 rounded-full bg-[#F4B400] px-4 py-1 text-xs font-semibold uppercase tracking-wide text-black shadow-lg transition-transform duration-300 group-hover:scale-105">
          {destination.badge}
        </span>
      </div>

      {/* Content */}
      <div className="flex grow flex-col p-6">
        <h3 className="text-2xl font-bold text-[#0B3D91]">
          {destination.name}
        </h3>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-600">
            <Clock
              aria-hidden="true"
              className="h-5 w-5"
            />

            <span>{destination.duration}</span>
          </div>

          <div className="flex items-center gap-1">
            <Star
              aria-hidden="true"
              className="h-5 w-5 fill-[#F4B400] text-[#F4B400]"
            />

            <span className="font-semibold text-gray-700">
              {destination.rating}
            </span>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-sm font-medium uppercase tracking-wide text-gray-500">
            Starting From
          </p>

          <p className="mt-1 text-2xl font-bold text-[#0B3D91]">
            {destination.price}
          </p>
        </div>

        <Button
          to={`/packages?destination=${destination.slug}`}
          className="mt-8 w-full"
        >
          View Packages
        </Button>
      </div>
    </Card>
  );
}