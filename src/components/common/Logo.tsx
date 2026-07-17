import { Link } from "react-router-dom";
import { company } from "../../data/company";

export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3">
      <img
        src="/logo.png"
        alt={company.name}
        className="h-12 w-auto"
      />

      <div>
        <h1 className="text-lg font-extrabold text-[#0B3D91]">
          {company.name}
        </h1>

        <p className="text-xs text-gray-500">
          {company.tagline}
        </p>
      </div>
    </Link>
  );
}