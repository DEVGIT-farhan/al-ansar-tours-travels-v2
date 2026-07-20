import { useEffect, useRef, useState } from "react";

import logo from "@/assets/logos/logo.png";
import { COMPANY } from "@/constants/COMPANY";

const SHOW_DURATION = 700;
const FADE_DURATION = 600;

export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const showTimer = useRef<number | null>(null);
  const hideTimer = useRef<number | null>(null);

  useEffect(() => {
    const handleLoad = () => {
      showTimer.current = window.setTimeout(() => {
        setFadeOut(true);

        hideTimer.current = window.setTimeout(() => {
          setVisible(false);
        }, FADE_DURATION);
      }, SHOW_DURATION);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad, { once: true });
    }

    return () => {
      window.removeEventListener("load", handleLoad);

      if (showTimer.current !== null) {
        clearTimeout(showTimer.current);
      }

      if (hideTimer.current !== null) {
        clearTimeout(hideTimer.current);
      }
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy="true"
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white/95 backdrop-blur-md transition-opacity duration-700 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <img
        src={logo}
        alt={`${COMPANY.name} Logo`}
        draggable={false}
        className="mb-6 h-28 w-28 animate-[logoFloat_2s_ease-in-out_infinite]"
      />

      <h1 className="text-3xl font-extrabold tracking-wide text-[#0B3D91]">
        {COMPANY.name}
      </h1>

      <p className="mt-2 text-sm uppercase tracking-[4px] text-[#F4B400]">
        Preparing Your Journey...
      </p>

      <div
        className="mt-10 h-2 w-64 overflow-hidden rounded-full bg-gray-200"
        aria-hidden="true"
      >
        <div className="h-full origin-left animate-[loading_0.7s_linear] rounded-full bg-[#F4B400]" />
      </div>
    </div>
  );
}