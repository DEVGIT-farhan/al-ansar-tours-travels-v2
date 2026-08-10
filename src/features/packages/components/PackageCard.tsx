import { Check, Clock } from "lucide-react";

import { Button, Card } from "@/components/ui";
import { COMPANY } from "@/constants/company";
import { useWebsite } from "@/hooks/useWebsite";

import type { TravelPackageWithCategory } from "@/shared/types/package.types";

interface PackageCardProps {
  packageData: TravelPackageWithCategory;
}

export default function PackageCard({ packageData }: PackageCardProps) {
  const { settings } = useWebsite();
  const whatsapp = (settings?.whatsapp?.trim() || COMPANY.whatsapp).replace(
    /[^\d]/g,
    "",
  );
  const whatsappUrl = `https://wa.me/${whatsapp}?text=${encodeURIComponent(
    `Hello, I'm interested in the "${packageData.title}" package.`,
  )}`;

  return (
    <Card className="group flex h-full flex-col overflow-hidden border-slate-200 shadow-[0_18px_42px_-30px_rgba(16,42,67,0.45)] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={packageData.cover_image ?? "/images/package-placeholder.jpg"}
          alt={packageData.title}
          loading="lazy"
          decoding="async"
          className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Badge */}
        <span className="absolute left-4 top-4 rounded-full bg-[#102a43] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-lg">
          {packageData.category?.name ?? "Tour Package"}
        </span>
      </div>

      {/* Content */}
      <div className="flex grow flex-col p-6">
        <h3 className="text-2xl font-bold tracking-tight text-[#102a43] transition-colors duration-300 group-hover:text-[#9b6a18]">
          {packageData.title}
        </h3>

        <div className="mt-4 flex items-center gap-2 text-gray-600">
          <Clock aria-hidden="true" className="h-5 w-5" />
          <span>{packageData.duration}</span>
        </div>

        {/* Package Includes */}
        <div className="mt-6 space-y-3">
          {packageData.inclusions.map((item) => (
            <div key={item.id} className="flex items-center gap-2">
              <Check
                aria-hidden="true"
                className="h-5 w-5 shrink-0 text-green-600"
              />

              <span className="text-gray-700">{item.description}</span>
            </div>
          ))}
        </div>

        {/* Price */}
        <div className="mt-6">
          <p className="text-sm font-medium uppercase tracking-wide text-gray-500">
            Starting From
          </p>

          <p className="mt-1 text-3xl font-bold text-[#102a43]">
            {packageData.currency} {packageData.price ?? "Contact Us"}
          </p>
        </div>

        {/* Actions */}
        <div className="mt-8 flex gap-3">
          <Button href={whatsappUrl} variant="primary" className="flex-1">
            Book Now
          </Button>

          <Button
            to={`/packages/${packageData.slug}`}
            variant="outline"
            className="flex-1"
          >
            View Details
          </Button>
        </div>
      </div>
    </Card>
  );
}
