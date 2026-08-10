import type { ReactNode } from "react";

import Sidebar from "./Sidebar";
import Header from "./Header";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="flex min-h-screen bg-[#f5f7fa]">
      {/* Sidebar */}

      <Sidebar />

      {/* Main */}

      <div className="flex flex-1 flex-col">
        <Header />

        <main className="flex-1 overflow-y-auto p-5 sm:p-8">
          <div className="mx-auto max-w-7xl page-enter">{children}</div>
        </main>
      </div>
    </div>
  );
}
