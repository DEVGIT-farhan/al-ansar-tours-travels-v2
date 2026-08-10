import { Outlet } from "react-router-dom";
import TopBar from "../components/layout/TopBar";
import Navbar from "../components/layout/Navbar";
import { Footer } from "@/features/footer";
import { WhatsAppButton } from "@/features/whatsapp";
import { ScrollToTopButton } from "@/features/scroll-to-top";
import ScrollProgress from "@/components/common/ScrollProgress";
import PageLoader from "@/components/common/PageLoader";

export default function MainLayout() {
  return (
    <>
      <PageLoader />
      <ScrollProgress />
      <TopBar />

      <Navbar />

      <main className="page-enter overflow-hidden">
        <Outlet />
      </main>

      <Footer />
      <WhatsAppButton />
      <ScrollToTopButton />
    </>
  );
}
