import { Link } from "react-router-dom";

import logo from "@/assets/logos/logo.png";
import { COMPANY } from "@/constants/COMPANY";

export default function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center gap-3"
      aria-label={`${COMPANY.name} Home`}
    >
      <img
        src={logo}
        alt={`${COMPANY.name} Logo`}
        draggable={false}
        className="h-12 w-auto shrink-0 object-contain lg:h-14"
      />

      {/* Hide text on small screens */}
      <div className="hidden sm:block">
        <h1 className="text-base font-bold leading-tight text-[#0B3D91] lg:text-lg">
          {COMPANY.name}
        </h1>

        <p className="text-xs text-gray-500">
          {COMPANY.tagline}
        </p>
      </div>
    </Link>
  );
}