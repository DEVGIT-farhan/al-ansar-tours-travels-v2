import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () =>
      window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-24 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#0B3D91] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#072f70] active:scale-95 md:bottom-28 md:right-6 md:h-14 md:w-14 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <ArrowUp size={22} />
    </button>
  );
}