import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <button className="rounded-lg bg-[#0B3D91] px-5 py-3 font-semibold text-white transition hover:bg-[#082d6d]">
      {children}
    </button>
  );
}