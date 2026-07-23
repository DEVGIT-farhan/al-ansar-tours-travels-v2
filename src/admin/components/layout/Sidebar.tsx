import { NavLink } from "react-router-dom";

import { adminNavigation } from "../../data/navigation";

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-72 flex-col border-r border-gray-200 bg-white">
      {/* Logo */}

      <div className="border-b border-gray-200 p-6">
        <h1 className="text-2xl font-bold text-[#0B3D91]">
          AL ANSAR CMS
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Travel Management System
        </p>
      </div>

      {/* Navigation */}

      <nav className="flex-1 space-y-2 p-4">
        {adminNavigation.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 transition-all ${
                  isActive
                    ? "bg-[#0B3D91] text-white shadow-lg"
                    : "text-gray-600 hover:bg-gray-100"
                }`
              }
            >
              <Icon className="h-5 w-5" />

              <span className="font-medium">
                {item.label}
              </span>
            </NavLink>
          );
        })}
      </nav>

      {/* Footer */}

      <div className="border-t border-gray-200 p-4">
        <p className="text-center text-xs text-gray-500">
          © {new Date().getFullYear()}
          <br />
          AL ANSAR TOURS & TRAVELS
        </p>
      </div>
    </aside>
  );
}