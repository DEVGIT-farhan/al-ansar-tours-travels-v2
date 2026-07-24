import { FiBell, FiUser } from "react-icons/fi";

import { useAuth } from "@/admin/hooks/useAuth";

export default function Header() {
  const { user } = useAuth();

  return (
    <header className="sticky top-0 z-40 flex h-20 items-center justify-between border-b border-gray-200 bg-white px-8">
      {/* Left */}

      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Admin Dashboard
        </h1>

        <p className="text-sm text-gray-500">
          Welcome back to AL ANSAR TOURS & TRAVELS CMS
        </p>
      </div>

      {/* Right */}

      <div className="flex items-center gap-6">
        {/* Notification */}

        <button
          className="relative rounded-full p-2 transition hover:bg-gray-100"
          type="button"
        >
          <FiBell className="h-6 w-6 text-gray-600" />

          <span className="absolute right-1 top-1 h-2.5 w-2.5 rounded-full bg-red-500" />
        </button>

        {/* User */}

        <div className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-2">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0B3D91] text-white">
            <FiUser className="h-5 w-5" />
          </div>

          <div>
            <p className="font-semibold text-gray-900">
              Administrator
            </p>

            <p className="text-sm text-gray-500">
              {user?.email ?? "No Email"}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}