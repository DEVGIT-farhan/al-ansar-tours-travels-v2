import type { Package } from "../types/package";
import Button from "../../../components/ui/Button";
import { Star, Clock, Check } from "lucide-react";
import Card from "../../../components/ui/Card";

interface PackageCardProps {
  packageData: Package;
}

export default function PackageCard({
  packageData,
}: PackageCardProps) {
  return (
    <Card className="group overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-2xl">
      
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={packageData.image}
          alt={packageData.title}
          className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white px-3 py-1 shadow-md">
          <Star className="h-4 w-4 fill-[#F4B400] text-[#F4B400]" />
          <span className="text-sm font-semibold">
            {packageData.rating}
          </span>
        </div>
      </div>

      {/* Content */}

      <div className="p-6">

        <h3 className="text-2xl font-bold text-[#0B3D91]">
          {packageData.title}
        </h3>

        <div className="mt-4 flex items-center gap-2 text-gray-600">
          <Clock className="h-5 w-5" />
          <span>{packageData.duration}</span>
        </div>

        <div className="mt-6 space-y-3">
          {packageData.includes.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2"
            >
              <Check className="h-5 w-5 text-green-600" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm text-gray-500">
          Starting From
        </p>

        <h4 className="text-3xl font-bold text-[#0B3D91]">
          {packageData.price}
        </h4>

        <div className="mt-6 flex gap-3">
          <Button
            variant="primary"
            className="flex-1"
          >
            Book Now
          </Button>

          <Button
            variant="outline"
            className="flex-1"
          >
            Details
          </Button>
        </div>

      </div>

    </Card>
  );
}