import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { adminNavigation } from "@/admin/constants/adminNavigation";
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
    <aside className="flex h-screen w-72 flex-col bg-[#102a43] text-white shadow-2xl shadow-[#102a43]/20">
      {/* Logo */}

      <div className="border-b border-white/10 px-6 py-8">
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#d9a441] text-sm font-black text-[#102a43]">
          AA
        </div>
        <h1 className="text-xl font-bold tracking-tight text-white">
          AL ANSAR CMS
        </h1>

        <p className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
          Tours & Travels
        </p>
      </div>

      {/* Navigation */}

      <nav className="flex-1 overflow-y-auto px-4 py-6">
        <p className="mb-3 px-3 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
          Workspace
        </p>
        <ul className="space-y-1.5">
          {adminNavigation.map((item) => {
            const Icon = item.icon;

            if (item.action === "logout") {
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-slate-300 transition-all duration-200 hover:bg-red-500/15 hover:text-red-200"
                  >
                    <Icon size={20} />

                    <span className="font-medium">{item.label}</span>
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
                      "flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition-all duration-200",
                      isActive
                        ? "bg-white text-[#102a43] shadow-lg shadow-black/10"
                        : "text-slate-300 hover:bg-white/10 hover:text-white",
                    ].join(" ")
                  }
                >
                  <Icon size={20} />

                  <span className="font-medium">{item.label}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}

      <div className="border-t border-white/10 px-6 py-5">
        <p className="text-xs text-slate-500">Version 1.0.0</p>

        <p className="mt-1 text-xs leading-5 text-slate-400">
          © {new Date().getFullYear()}
          <br />
          AL ANSAR TOURS & TRAVELS
        </p>
      </div>
    </aside>
  );
}
