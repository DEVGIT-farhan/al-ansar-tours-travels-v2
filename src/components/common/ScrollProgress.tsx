import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollHeight, clientHeight } = document.documentElement;

      const totalHeight = scrollHeight - clientHeight;

      if (totalHeight <= 0) {
        setProgress(0);
        return;
      }

      const percentage = (window.scrollY / totalHeight) * 100;

      setProgress(Math.min(100, Math.max(0, percentage)));
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed left-0 top-0 z-[9999] h-1 bg-[#F4B400] transition-all duration-150"
      style={{ width: `${progress}%` }}
    />
  );
}
