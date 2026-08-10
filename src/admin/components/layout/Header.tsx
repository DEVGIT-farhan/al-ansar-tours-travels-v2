import { FiBell, FiUser } from "react-icons/fi";

import { useAuth } from "@/admin/hooks/useAuth";

export default function Header() {
  const { user } = useAuth();

  return (
    <header className="sticky top-0 z-40 flex h-20 items-center justify-between border-b border-slate-200/80 bg-white/85 px-5 backdrop-blur-xl sm:px-8">
      {/* Left */}

      <div>
        <h1 className="text-xl font-bold text-[#102a43]">Content Studio</h1>

        <p className="text-sm text-slate-500">
          Manage your travel business in one place
        </p>
      </div>

      {/* Right */}

      <div className="flex items-center gap-3 sm:gap-6">
        {/* Notification */}

        <button
          className="relative rounded-full border border-slate-200 p-2.5 transition hover:bg-slate-50"
          type="button"
        >
          <FiBell className="h-5 w-5 text-slate-600" />

          <span className="absolute right-1 top-1 h-2.5 w-2.5 rounded-full bg-red-500" />
        </button>

        {/* User */}

        <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-3 py-2 shadow-sm">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#102a43] text-white">
            <FiUser className="h-5 w-5" />
          </div>

          <div>
            <p className="font-semibold text-slate-900">Administrator</p>

            <p className="max-w-40 truncate text-xs text-slate-500">
              {user?.email ?? "No Email"}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
