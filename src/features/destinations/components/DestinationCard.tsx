import { ArrowUpRight, Clock } from "lucide-react";

import { Link } from "react-router-dom";

import type { Destination } from "../types/destination";

interface DestinationCardProps {
  destination: Destination;
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <article className="group relative min-h-105 overflow-hidden rounded-3xl bg-[#102a43] shadow-[0_20px_40px_-28px_rgba(16,42,67,0.7)]">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,20,36,0.05)_20%,rgba(5,20,36,0.88)_100%)]" />

      <div className="relative flex min-h-105 flex-col justify-end p-6 text-white">
        <span className="absolute left-6 top-6 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur">
          {destination.badge}
        </span>
        <h3 className="text-3xl font-bold tracking-tight">
          {destination.name}
        </h3>

        <div className="mt-3 flex items-center gap-2 text-sm text-slate-200">
          <Clock aria-hidden="true" className="h-5 w-5" />

          <span>{destination.duration}</span>
        </div>

        <Link
          to={`/packages?destination=${encodeURIComponent(destination.name)}`}
          className="mt-6 inline-flex items-center justify-between border-t border-white/20 pt-4 text-sm font-bold text-[#f4d28b] transition group-hover:text-white"
        >
          <span>{destination.price}</span>
          <span className="flex items-center gap-1">
            View packages{" "}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </span>
        </Link>
      </div>
    </article>
  );
}
