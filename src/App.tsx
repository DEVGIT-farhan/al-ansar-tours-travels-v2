import { lazy, Suspense, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import MainLayout from "./layouts/MainLayout";

import Services from "./pages/website/Services";

import WebsiteSeo from "@/components/common/WebsiteSeo";

import ProtectedRoute from "@/admin/routes/ProtectedRoute";
import AdminLayout from "@/admin/components/layout/AdminLayout";
import PackageItineraryPage from "@/admin/features/package-itinerary/pages/PackageItineraryPage";

const Home = lazy(() => import("./pages/website/Home"));
const About = lazy(() => import("./pages/website/About"));
const Packages = lazy(() => import("./pages/website/Packages"));
const Destinations = lazy(() => import("./pages/website/Destinations"));
const Gallery = lazy(() => import("./pages/website/Gallery"));
const Contact = lazy(() => import("./pages/website/Contact"));
const NotFound = lazy(() => import("./pages/website/NotFound"));

const PackageDetailsPage = lazy(
  () => import("@/website/pages/packages/PackageDetailsPage"),
);

// ================= Admin =================

const Login = lazy(() => import("@/admin/features/auth/pages/Login"));

const ForgotPassword = lazy(
  () => import("@/admin/features/auth/pages/ForgotPassword"),
);

const ResetPassword = lazy(
  () => import("@/admin/features/auth/pages/ResetPassword"),
);

const SiteContentPage = lazy(
  () => import("@/admin/features/site-content/pages/SiteContentPage"),
);

const GalleryContentPage = lazy(
  () => import("@/admin/features/site-content/pages/GalleryContentPage"),
);

const DashboardPage = lazy(
  () => import("@/admin/features/dashboard/pages/DashboardPage"),
);

const PackagesPage = lazy(
  () => import("@/admin/features/packages/pages/PackagesPage"),
);

const AddPackagePage = lazy(
  () => import("@/admin/features/packages/pages/AddPackagePage"),
);

const EditPackagePage = lazy(
  () => import("@/admin/features/packages/pages/EditPackagePage"),
);

const PackageImagesPage = lazy(
  () => import("@/admin/features/package-images/pages/PackageImagesPage"),
);

const SettingsPage = lazy(
  () => import("@/admin/features/settings/pages/SettingsPage"),
);

const EnquiriesPage = lazy(
  () => import("@/admin/features/enquiries/pages/EnquiriesPage"),
);

function PageFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#0B3D91] border-t-transparent" />
    </div>
  );
}

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });

    AOS.refresh();
  }, []);

  return (
    <Suspense fallback={<PageFallback />}>
      <WebsiteSeo />

      <Routes>
        {/* ================= Website ================= */}

        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/services" element={<Services />} />

          <Route path="/packages" element={<Packages />} />

          <Route path="/packages/:slug" element={<PackageDetailsPage />} />

          <Route path="/destinations" element={<Destinations />} />

          <Route path="/gallery" element={<Gallery />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<NotFound />} />
        </Route>

        {/* ================= Admin ================= */}

        <Route path="/admin/login" element={<Login />} />

        <Route path="/admin/forgot-password" element={<ForgotPassword />} />

        <Route path="/admin/reset-password" element={<ResetPassword />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <DashboardPage />
              </AdminLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/home"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <SiteContentPage
                  section="home"
                  title="Homepage Content"
                  description="Edit the hero, home sections, enquiry prompts, map and call-to-action copy."
                />
              </AdminLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/about"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <SiteContentPage
                  section="about"
                  title="About Page Content"
                  description="Manage the company story, mission, values, timeline, FAQs and call to action."
                />
              </AdminLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/services"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <SiteContentPage
                  section="services"
                  title="Services Content"
                  description="Add or update your services, process steps, reasons to choose you and service-page copy."
                />
              </AdminLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/packages"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <PackagesPage />
              </AdminLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/destinations"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <SiteContentPage
                  section="destinations"
                  title="Destinations Content"
                  description="Destination cards are created automatically from active packages. Manage travel styles, best-time guidance, travel tips and page copy here."
                  hiddenFields={["items"]}
                />
              </AdminLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/gallery"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <GalleryContentPage />
              </AdminLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/testimonials"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <SiteContentPage
                  section="testimonials"
                  title="Testimonials"
                  description="Publish customer reviews, ratings, locations and profile images on the homepage."
                />
              </AdminLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/faqs"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <SiteContentPage
                  section="faq"
                  title="Frequently Asked Questions"
                  description="Manage the questions and answers displayed in the public website FAQ section."
                />
              </AdminLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/contact"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <SiteContentPage
                  section="contact"
                  title="Contact Page Content"
                  description="Edit the contact-page title, description and enquiry form wording."
                />
              </AdminLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/enquiries"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <EnquiriesPage />
              </AdminLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/footer"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <SiteContentPage
                  section="footer"
                  title="Footer Content"
                  description="Manage footer highlights, navigation links and section labels. Company and contact details are edited in Settings."
                />
              </AdminLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/navigation"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <SiteContentPage
                  section="navigation"
                  title="Navigation Content"
                  description="Manage the public website menu and WhatsApp button label."
                />
              </AdminLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/packages/new"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <AddPackagePage />
              </AdminLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/packages/:id/edit"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <EditPackagePage />
              </AdminLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/packages/:id/images"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <PackageImagesPage />
              </AdminLayout>
            </ProtectedRoute>
          }
        />

        {/* NEW ROUTE */}
        <Route
          path="/admin/packages/:id/itinerary"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <PackageItineraryPage />
              </AdminLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/settings"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <SettingsPage />
              </AdminLayout>
            </ProtectedRoute>
          }
        />

        <Route path="/admin/*" element={<Navigate to="/admin" replace />} />
      </Routes>
    </Suspense>
  );
}
