import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3">
      <img
        src="/logo.png"
        alt="AL ANSAR TOURS & TRAVELS"
        className="h-12 w-auto"
      />

      <div>
        <h1 className="text-xl font-bold text-[#0B3D91]">
          AL ANSAR
        </h1>

        <p className="text-sm text-gray-500">
          Tours & Travels
        </p>
      </div>
    </Link>
  );
}