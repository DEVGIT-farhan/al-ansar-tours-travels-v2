import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scroll =
        (window.scrollY / totalHeight) * 100;

      setProgress(scroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed left-0 top-0 z-[9999] h-1 bg-[#F4B400] transition-all duration-150"
      style={{ width: `${progress}%` }}
    />
  );
}