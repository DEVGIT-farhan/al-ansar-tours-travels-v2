import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { adminNavigation } from "../../data/navigation";
import { auth } from "@/lib/supabase/auth";

export default function Sidebar() {
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      const { error } = await auth.signOut();

      if (error) {
        toast.error(error.message);
        return;
      }

      toast.success("Logged out successfully");

      navigate("/admin/login", {
        replace: true,
      });
    } catch {
      toast.error("Failed to logout.");
    }
  }

  return (
    <aside className="flex h-screen w-72 flex-col border-r border-gray-200 bg-white shadow-sm">
      {/* Logo */}

      <div className="border-b border-gray-200 px-6 py-8">
        <h1 className="text-2xl font-bold text-[#0B3D91]">
          AL ANSAR CMS
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Tours & Travels
        </p>
      </div>

      {/* Navigation */}

      <nav className="flex-1 overflow-y-auto px-4 py-6">
        <ul className="space-y-2">
          {adminNavigation.map((item) => {
            const Icon = item.icon;

            if (item.action === "logout") {
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-gray-600 transition-all duration-200 hover:bg-red-50 hover:text-red-600"
                  >
                    <Icon size={20} />

                    <span className="font-medium">
                      {item.label}
                    </span>
                  </button>
                </li>
              );
            }

            return (
              <li key={item.id}>
                <NavLink
                  to={item.path!}
                  className={({ isActive }) =>
                    [
                      "flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200",
                      isActive
                        ? "bg-[#0B3D91] text-white shadow-md"
                        : "text-gray-600 hover:bg-gray-100",
                    ].join(" ")
                  }
                >
                  <Icon size={20} />

                  <span className="font-medium">
                    {item.label}
                  </span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}

      <div className="border-t border-gray-200 px-6 py-5">
        <p className="text-xs text-gray-400">
          Version 1.0.0
        </p>

        <p className="mt-1 text-xs text-gray-500">
          © {new Date().getFullYear()}
          <br />
          AL ANSAR TOURS & TRAVELS
        </p>
      </div>
    </aside>
  );
}