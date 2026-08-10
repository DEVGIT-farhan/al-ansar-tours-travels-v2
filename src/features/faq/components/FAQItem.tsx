import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/cn";

import type { FAQ } from "../types/faq";

interface FAQItemProps {
  faq: FAQ;
  isOpen: boolean;
  onClick: () => void;
}

export default function FAQItem({ faq, isOpen, onClick }: FAQItemProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border bg-white transition-all duration-300",
        isOpen ? "border-[#0B3D91] shadow-md" : "border-gray-200",
      )}
    >
      <button
        type="button"
        onClick={onClick}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${faq.id}`}
        className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4B400] focus-visible:ring-inset"
      >
        <h3
          className={cn(
            "text-xl font-semibold transition-colors",
            isOpen ? "text-[#0B3D91]" : "text-gray-900",
          )}
        >
          {faq.question}
        </h3>

        <ChevronDown
          aria-hidden="true"
          className={cn(
            "h-5 w-5 text-gray-500 transition-all duration-500",
            isOpen && "rotate-180 text-[#0B3D91]",
          )}
        />
      </button>

      <div
        id={`faq-answer-${faq.id}`}
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 text-base leading-8 text-gray-600">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}
