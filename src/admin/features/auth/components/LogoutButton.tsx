import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { auth } from "@/lib/supabase/auth";

export default function LogoutButton() {
  const navigate = useNavigate();

  async function handleLogout() {
    const { error } = await auth.signOut();

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Logged out successfully");

    navigate("/admin/login", {
      replace: true,
    });
  }

  return (
    <button
      onClick={handleLogout}
      className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left transition hover:bg-red-50 hover:text-red-600"
    >
      <LogOut size={18} />
      Logout
    </button>
  );
}
