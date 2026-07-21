import { CalendarDays, MessageCircle, Phone, Star } from "lucide-react";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { COMPANY } from "@/constants/COMPANY";

import type { PackageDetails } from "../types/packageDetails";

interface StickyBookingCardProps {
  packageData: PackageDetails;
}

export default function StickyBookingCard({
  packageData,
}: StickyBookingCardProps) {
  const whatsappUrl = `https://wa.me/${
    COMPANY.whatsapp
  }?text=${encodeURIComponent(packageData.whatsappMessage)}`;

  return (
    <aside className="lg:sticky lg:top-28">
      <Card className="p-6 shadow-xl">
        <p className="text-sm uppercase tracking-wide text-gray-500">
          Starting From
        </p>

        <h2 className="mt-2 text-4xl font-bold text-[#0B3D91]">
          {packageData.price}
        </h2>

        <div className="mt-6 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Duration</span>

            <div className="flex items-center gap-2">
              <CalendarDays
                className="h-5 w-5 text-[#0B3D91]"
                aria-hidden="true"
              />

              <span className="font-semibold">
                {packageData.duration}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-600">Rating</span>

            <div className="flex items-center gap-2">
              <Star
                className="h-5 w-5 fill-[#F4B400] text-[#F4B400]"
                aria-hidden="true"
              />

              <span className="font-semibold">
                {packageData.rating}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-3">
          <Button className="w-full">
            Book Now
          </Button>

          <Button
            href={whatsappUrl}
            variant="secondary"
            className="w-full"
          >
            <MessageCircle
              className="mr-2 h-5 w-5"
              aria-hidden="true"
            />

            WhatsApp
          </Button>

          <Button
            href={`tel:${COMPANY.phone}`}
            variant="outline"
            className="w-full"
          >
            <Phone
              className="mr-2 h-5 w-5"
              aria-hidden="true"
            />

            Call Now
          </Button>
        </div>
      </Card>
    </aside>
  );
}