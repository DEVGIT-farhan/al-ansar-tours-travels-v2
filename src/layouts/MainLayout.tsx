import { Outlet } from "react-router-dom";
import TopBar from "../components/layout/TopBar";
import Navbar from "../components/layout/Navbar";
import { Footer } from "@/features/footer";
import { WhatsAppButton } from "@/features/whatsapp";
import { ScrollToTopButton } from "@/features/scroll-to-top";

export default function MainLayout() {
  return (
    <>
      <TopBar />

      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
      <WhatsAppButton />
      <ScrollToTopButton />
    </>
  );
}