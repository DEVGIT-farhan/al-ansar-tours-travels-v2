import { FiBell, FiUser } from "react-icons/fi";

export default function Header() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-gray-200 bg-white px-8">
      <div>
        <h2 className="text-2xl font-bold text-[#0B3D91]">
          Dashboard
        </h2>

        <p className="text-sm text-gray-500">
          Welcome back 👋
        </p>
      </div>

      <div className="flex items-center gap-6">
        <button className="relative rounded-full bg-gray-100 p-3 hover:bg-gray-200">
          <FiBell className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0B3D91] text-white">
            <FiUser />
          </div>

          <div>
            <p className="font-semibold">
              Administrator
            </p>

            <p className="text-xs text-gray-500">
              Super Admin
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}