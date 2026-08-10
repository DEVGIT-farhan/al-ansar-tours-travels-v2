import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { useAuth } from "@/admin/hooks/useAuth";
import { auth } from "@/lib/supabase/auth";

export default function ResetPassword() {
  const navigate = useNavigate();
  const { isAuthenticated, loading: sessionLoading } = useAuth();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (password.length < 8) {
      toast.error("Use a password with at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    setSubmitting(true);

    try {
      const { error } = await auth.updatePassword(password);

      if (error) {
        toast.error(error.message);
        return;
      }

      await auth.signOut();
      toast.success("Password updated. Please sign in.");
      navigate("/admin/login", { replace: true });
    } catch {
      toast.error("Unable to update the password.");
    } finally {
      setSubmitting(false);
    }
  }

  if (sessionLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#0B3D91] border-t-transparent" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-slate-100 to-blue-100 px-4">
        <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-xl">
          <h1 className="text-2xl font-bold text-[#0B3D91]">
            Reset link required
          </h1>

          <p className="mt-3 text-gray-500">
            Open the password reset link from your email to continue.
          </p>

          <Link
            to="/admin/forgot-password"
            className="mt-6 inline-block font-medium text-[#0B3D91] transition hover:text-[#082f70]"
          >
            Send another reset link
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-slate-100 to-blue-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-[#0B3D91]">
            Choose a new password
          </h1>

          <p className="mt-2 text-gray-500">Use at least 8 characters.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="new-password"
              className="mb-2 block text-sm font-medium"
            >
              New password
            </label>

            <input
              id="new-password"
              type="password"
              autoComplete="new-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-[#0B3D91] focus:ring-2 focus:ring-[#0B3D91]/20"
            />
          </div>

          <div>
            <label
              htmlFor="confirm-password"
              className="mb-2 block text-sm font-medium"
            >
              Confirm password
            </label>

            <input
              id="confirm-password"
              type="password"
              autoComplete="new-password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-[#0B3D91] focus:ring-2 focus:ring-[#0B3D91]/20"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-lg bg-[#0B3D91] py-3 font-semibold text-white transition hover:bg-[#082f70] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? "Updating password..." : "Update password"}
          </button>
        </form>
      </div>
    </div>
  );
}
