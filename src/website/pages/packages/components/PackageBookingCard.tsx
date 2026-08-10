import { CalendarDays, MapPin, Phone, MessageCircle, Tag } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { COMPANY } from "@/constants/COMPANY";
import { useWebsite } from "@/hooks/useWebsite";
import Button from "@/shared/components/Button";

import type { TravelPackageWithCategory } from "@/shared/types/package.types";

interface PackageBookingCardProps {
  travelPackage: TravelPackageWithCategory;
}

export default function PackageBookingCard({
  travelPackage,
}: PackageBookingCardProps) {
  const navigate = useNavigate();
  const { settings } = useWebsite();
  const whatsappNumber = (
    settings?.whatsapp?.trim() || COMPANY.whatsapp
  ).replace(/[^\d]/g, "");
  const phoneNumber = (settings?.phone?.trim() || COMPANY.phone).replace(
    /[^\d+]/g,
    "",
  );
  const enquiryUrl = `/contact?package=${encodeURIComponent(travelPackage.title)}&destination=${encodeURIComponent(travelPackage.destination ?? "")}`;

  const whatsappMessage = encodeURIComponent(
    `Hello, I am interested in the ${travelPackage.title} package${travelPackage.destination ? ` for ${travelPackage.destination}` : ""}. Please share departure dates, inclusions and availability.`,
  );

  return (
    <aside className="sticky top-24 rounded-2xl border border-gray-200 bg-white p-6 shadow-lg">
      <p className="text-sm font-medium uppercase tracking-wide text-gray-500">
        Starting From
      </p>

      <h2 className="mt-2 text-4xl font-bold text-blue-600">
        {travelPackage.currency} {travelPackage.price}
      </h2>

      <div className="my-6 h-px bg-gray-200" />

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <CalendarDays className="h-5 w-5 text-blue-600" />
          <div>
            <p className="text-xs uppercase text-gray-500">Duration</p>
            <p className="font-medium">{travelPackage.duration}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <MapPin className="h-5 w-5 text-blue-600" />
          <div>
            <p className="text-xs uppercase text-gray-500">Destination</p>
            <p className="font-medium">{travelPackage.destination}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Tag className="h-5 w-5 text-blue-600" />
          <div>
            <p className="text-xs uppercase text-gray-500">Category</p>
            <p className="font-medium">
              {travelPackage.category?.name ?? "General"}
            </p>
          </div>
        </div>
      </div>

      <div className="my-6 h-px bg-gray-200" />

      <div className="space-y-3">
        <Button className="w-full" onClick={() => navigate(enquiryUrl)}>
          Enquire Now
        </Button>

        <a
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <Button
            type="button"
            className="flex w-full items-center justify-center gap-2 bg-green-600 hover:bg-green-700"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp
          </Button>
        </a>

        <a href={`tel:${phoneNumber}`} className="block">
          <Button
            type="button"
            className="flex w-full items-center justify-center gap-2 border border-gray-300 bg-white text-gray-900 hover:bg-gray-100"
          >
            <Phone className="h-5 w-5" />
            Call Now
          </Button>
        </a>
      </div>

      <div className="mt-6 rounded-xl bg-gray-50 p-4">
        <h3 className="font-semibold text-gray-900">Need Assistance?</h3>

        <p className="mt-2 text-sm text-gray-600">
          Our travel experts are available to help you choose the perfect
          package and answer any questions.
        </p>
      </div>
    </aside>
  );
}
