import type { Destination } from "../types/destination";
import Button from "../../../components/ui/Button";
import { Star, Clock } from "lucide-react";

interface DestinationCardProps {
  destination: Destination;
}

export default function DestinationCard({
  destination,
}: DestinationCardProps) {
  return (
    <div className="group overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-[#0B3D91]">
          {destination.name}
        </h3>

        <div className="mt-4 flex items-center justify-between text-gray-600">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            <span>{destination.duration}</span>
          </div>

          <div className="flex items-center gap-1 text-[#F4B400]">
            <Star className="h-5 w-5 fill-current" />
            <span className="font-semibold text-gray-700">
              {destination.rating}
            </span>
          </div>
        </div>

       <p className="mt-5 text-sm font-medium text-gray-500">
  Starting From
</p>

<p className="text-2xl font-bold text-[#0B3D91]">
  {destination.price}
</p>

        <Button
          className="mt-6 w-full"
          variant="primary"
        >
          Explore
        </Button>
      </div>
    </div>
  );
}