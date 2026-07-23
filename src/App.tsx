import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Services from "./pages/website/Services";
import MainLayout from "./layouts/MainLayout";
import Login from "@/admin/pages/Login";
import Dashboard from "@/admin/pages/Dashboard";
import ProtectedRoute from "@/admin/routes/ProtectedRoute";

const Home = lazy(() => import("./pages/website/Home"));
const About = lazy(() => import("./pages/website/About"));
const Packages = lazy(() => import("./pages/website/Packages"));
const PackageDetails = lazy(
  () => import("./pages/website/PackageDetails")
);
const Destinations = lazy(
  () => import("./pages/website/Destinations")
);
const Gallery = lazy(() => import("./pages/website/Gallery"));
const Contact = lazy(() => import("./pages/website/Contact"));
const NotFound = lazy(() => import("./pages/website/NotFound"));

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
      <Routes>
  {/* ---------- Public Website ---------- */}

  <Route element={<MainLayout />}>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/services" element={<Services />} />
    <Route path="/packages" element={<Packages />} />

    <Route
      path="/package-details/:slug"
      element={<PackageDetails />}
    />

    <Route
      path="/destinations"
      element={<Destinations />}
    />

    <Route path="/gallery" element={<Gallery />} />

    <Route path="/contact" element={<Contact />} />

    <Route path="*" element={<NotFound />} />
  </Route>

  {/* ---------- Admin ---------- */}

  <Route
    path="/admin/login"
    element={<Login />}
  />

  <Route
    path="/admin"
    element={
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    }
  />
</Routes>
    </Suspense>
  );
}