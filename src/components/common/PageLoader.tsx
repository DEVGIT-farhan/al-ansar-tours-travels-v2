import { useEffect, useState } from "react";
import logo from "@/assets/logos/logo.png";

export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      // Wait a little so the logo is visible
      setTimeout(() => {
        setFadeOut(true);

        // Remove loader after fade animation
        setTimeout(() => {
          setVisible(false);
        }, 600);
      }, 700);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);

      return () =>
        window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (!visible) return null;

  return (
   <div
  className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white/95 backdrop-blur-md transition-opacity duration-700 ${
    fadeOut ? "opacity-0" : "opacity-100"
  }`}
>
      <img
        src={logo}
        alt="AL ANSAR TOURS & TRAVELS"
        className="mb-6 h-28 w-28 animate-[logoFloat_2s_ease-in-out_infinite]"
      />

      <h1 className="text-3xl font-extrabold tracking-wide text-[#0B3D91]">
        AL ANSAR
      </h1>

      <p className="mt-1 text-lg text-gray-600">
        TOURS & TRAVELS
      </p>

     <p className="mt-2 text-sm uppercase tracking-[4px] text-[#F4B400]">
  Preparing Your Journey...
</p>

      <div className="mt-10 h-2 w-64 overflow-hidden rounded-full bg-gray-200">
        <div className="h-full origin-left animate-[loading_0.7s_linear] rounded-full bg-[#F4B400]" />
      </div>
    </div>
  );
}