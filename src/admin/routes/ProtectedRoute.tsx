import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

import { useAuth } from "@/admin/hooks/useAuth";

interface ProtectedRouteProps {
  children: ReactNode;
}

function LoadingScreen() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#0B3D91] border-t-transparent" />

        <p className="text-sm text-gray-500">
          Loading...
        </p>
      </div>
    </div>
  );
}

export default function ProtectedRoute({
  children,
}: ProtectedRouteProps) {
  const {
    loading,
    isAuthenticated,
  } = useAuth();

  if (loading) {
    return <LoadingScreen />;
  }

  if (!isAuthenticated) {
    return (
      <Navigate
        to="/admin/login"
        replace
      />
    );
  }

  return <>{children}</>;
}