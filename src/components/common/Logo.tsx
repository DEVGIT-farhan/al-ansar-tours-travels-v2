import { Link } from "react-router-dom";
import logo from "../../assets/logos/logo.png";
import { company } from "../../data/company";

export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3">
      <img
        src={logo}
        alt={company.name}
        className="h-14 w-auto object-contain shrink-0"
      />

      <div>
        <h1 className="text-lg font-bold text-[#0B3D91]">
          {company.name}
        </h1>

        <p className="text-xs text-gray-500">
          {company.tagline}
        </p>
      </div>
    </Link>
  );
}