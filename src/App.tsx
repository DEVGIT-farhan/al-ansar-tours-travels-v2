import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import MainLayout from "./layouts/MainLayout";

import About from "./pages/website/About";
import Contact from "./pages/website/Contact";
import Gallery from "./pages/website/Gallery";
import Home from "./pages/website/Home";
import NotFound from "./pages/website/NotFound";
import PackageDetails from "./pages/website/PackageDetails";
import Packages from "./pages/website/Packages";

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
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
       <Route path="/package-details/:slug"element={<PackageDetails />}/>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}