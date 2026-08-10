import { Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import Button from "@/shared/components/Button";

import type { TravelPackageWithCategory } from "@/shared/types/package.types";

interface PackageCardProps {
  package: TravelPackageWithCategory;
}

export default function PackageCard({ package: pkg }: PackageCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link to={`/packages/${pkg.slug}`}>
        <div className="relative aspect-4/3 overflow-hidden">
          <img
            src={
              pkg.cover_image || "https://placehold.co/800x600?text=No+Image"
            }
            alt={pkg.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {pkg.featured && (
            <span className="absolute left-4 top-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
              Featured
            </span>
          )}
        </div>
      </Link>

      <div className="p-6">
        <div className="flex items-center justify-between text-sm text-slate-500">
          <span>{pkg.category?.name}</span>

          <span className="flex items-center gap-1">
            <Clock size={16} />
            {pkg.duration}
          </span>
        </div>

        <Link to={`/packages/${pkg.slug}`}>
          <h3 className="mt-3 text-xl font-semibold text-slate-900 transition-colors group-hover:text-blue-600">
            {pkg.title}
          </h3>
        </Link>

        <p className="mt-3 line-clamp-2 text-slate-600">
          {pkg.short_description}
        </p>

        <div className="mt-6 flex items-end justify-between">
          <div>
            <p className="text-sm text-slate-500">Starting From</p>

            <p className="text-2xl font-bold text-blue-600">${pkg.price}</p>
          </div>

          <Link to={`/packages/${pkg.slug}`}>
            <Button size="sm" rightIcon={<ArrowRight />}>
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </article>
  );
}
