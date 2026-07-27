import { Link } from "react-router-dom";

import defaultLogo from "@/assets/logos/logo.png";
import { useWebsite } from "@/hooks/useWebsite";

export default function Logo() {
  const { settings } = useWebsite();

  const companyName =
    settings?.company_name?.trim() ??
    "AL ANSAR TOURS & TRAVELS";

  const tagline =
    settings?.tagline?.trim() ??
    "Your Trusted Travel Partner";

  const logo =
    settings?.logo_url?.trim() || defaultLogo;

  return (
    <Link
      to="/"
      className="flex items-center gap-3"
      aria-label={`${companyName} Home`}
    >
      <img
        src={logo}
        alt={`${companyName} Logo`}
        draggable={false}
        loading="eager"
        className="h-12 w-auto shrink-0 object-contain lg:h-14"
        onError={(e) => {
          e.currentTarget.src = defaultLogo;
        }}
      />

      <div className="hidden sm:block">
        <h1 className="text-base font-bold leading-tight text-[#0B3D91] lg:text-lg">
          {companyName}
        </h1>

        <p className="text-xs text-gray-500">
          {tagline}
        </p>
      </div>
    </Link>
  );
}