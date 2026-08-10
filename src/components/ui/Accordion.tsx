import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItemProps {
  title: string;
  children: ReactNode;
}

export function AccordionItem({ title, children }: AccordionItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 ${
        open
          ? "border-[#0B3D91] shadow-xl"
          : "border-gray-200 hover:border-[#0B3D91]/40"
      }`}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-6 py-5 text-left"
      >
        <span
          className={`text-lg font-semibold transition-colors ${
            open ? "text-[#0B3D91]" : "text-gray-800"
          }`}
        >
          {title}
        </span>

        <ChevronDown
          className={`h-5 w-5 transition-all duration-300 ${
            open ? "rotate-180 text-[#0B3D91]" : "text-gray-500"
          }`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6 leading-8 text-gray-600">{children}</div>
        </div>
      </div>
    </div>
  );
}
