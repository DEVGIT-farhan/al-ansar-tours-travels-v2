import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/website/Home";
import About from "./pages/website/About";
import Packages from "./pages/website/Packages";
import Contact from "./pages/website/Contact";
import Gallery from "./pages/website/Gallery";
import PackageDetails from "./pages/website/PackageDetails";
import NotFound from "./pages/website/NotFound";


export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/package-details" element={<PackageDetails />} />
        <Route path="*" element={<NotFound />} />

      </Route>
    </Routes>
  );
}