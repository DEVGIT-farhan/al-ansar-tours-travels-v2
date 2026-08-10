import { FiImage, FiMail, FiMapPin, FiPackage } from "react-icons/fi";
import { Link } from "react-router-dom";

import StatsCard from "../components/StatsCard";
import AdminButton from "@/admin/components/ui/AdminButton";
import { usePackages } from "@/admin/features/packages/hooks/usePackages";
import { useEnquiries } from "@/features/enquiries";
import { useSiteContent } from "@/features/site-content";

export default function DashboardPage() {
  const { data: packages = [] } = usePackages();
  const { data: enquiries = [] } = useEnquiries();
  const { content } = useSiteContent();
  const destinations = new Set(
    packages
      .filter((pkg) => pkg.active && pkg.destination?.trim())
      .map((pkg) => pkg.destination!.trim().toLowerCase()),
  ).size;

  return (
    <div className="space-y-8">
      <section className="relative overflow-hidden rounded-3xl bg-[#102a43] p-7 text-white shadow-xl shadow-[#102a43]/20 sm:p-10">
        <div className="absolute -right-10 -top-20 h-64 w-64 rounded-full bg-[#d9a441]/20 blur-2xl" />
        <div className="relative max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#e8ba62]">
            AL ANSAR CMS
          </p>
          <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
            Your travel business, beautifully organised.
          </h1>

          <p className="mt-3 max-w-xl leading-7 text-slate-300">
            Keep packages, website content and brand details accurate from one
            focused workspace.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/admin/packages/new">
              <AdminButton>Add a package</AdminButton>
            </Link>
            <Link to="/admin/home">
              <AdminButton variant="secondary">Edit homepage</AdminButton>
            </Link>
          </div>
        </div>
      </section>

      <div>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9b6a18]">
          Overview
        </p>
        <h2 className="mt-2 text-2xl font-bold text-[#102a43]">
          Website at a glance
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatsCard title="Packages" value={packages.length} icon={FiPackage} />

        <StatsCard
          title="Destinations"
          value={destinations}
          icon={FiMapPin}
          color="#16A34A"
        />

        <StatsCard
          title="Gallery Images"
          value={content.gallery.items.length}
          icon={FiImage}
          color="#F59E0B"
        />

        <StatsCard
          title="Enquiries"
          value={enquiries.length}
          icon={FiMail}
          color="#DC2626"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9b6a18]">
            Quick start
          </p>
          <h2 className="mt-3 text-xl font-bold text-[#102a43]">
            Keep your website current
          </h2>
          <p className="mt-2 leading-7 text-slate-600">
            Add packages first. Their destinations automatically appear on the
            public destination page.
          </p>
          <Link
            to="/admin/packages"
            className="mt-5 inline-block text-sm font-bold text-[#102a43] underline decoration-[#d9a441] decoration-2 underline-offset-4"
          >
            Manage packages
          </Link>
        </div>
        <div className="rounded-3xl border border-[#d9a441]/30 bg-[#fffaf0] p-7">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9b6a18]">
            Publishing tip
          </p>
          <h2 className="mt-3 text-xl font-bold text-[#102a43]">
            Every change is live when saved
          </h2>
          <p className="mt-2 leading-7 text-slate-600">
            Use Homepage, Footer and Settings to keep your brand, contact
            details and calls to action up to date.
          </p>
        </div>
      </div>
    </div>
  );
}
