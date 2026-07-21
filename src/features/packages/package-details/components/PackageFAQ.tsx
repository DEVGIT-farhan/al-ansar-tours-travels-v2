import { useState } from "react";
import { ChevronDown } from "lucide-react";

import Card from "@/components/ui/Card";
import { cn } from "@/lib/cn";

import type { PackageDetails } from "../types/packageDetails";

interface PackageFAQProps {
  packageData: PackageDetails;
}

export default function PackageFAQ({
  packageData,
}: PackageFAQProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="mt-12">
      <Card className="p-8 lg:p-10">
        <h2 className="text-3xl font-bold text-[#0B3D91]">
          Frequently Asked Questions
        </h2>

        <div className="mt-8 space-y-4">
          {packageData.faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={cn(
                  "overflow-hidden rounded-2xl border transition-all duration-300",
                  isOpen
                    ? "border-[#0B3D91]"
                    : "border-gray-200"
                )}
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(
                      isOpen ? -1 : index
                    )
                  }
                  className="flex w-full items-center justify-between p-6 text-left hover:bg-blue-50"
                >
                  <span className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={cn(
                      "transition-transform duration-300",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>

                <div
                  className={cn(
                    "grid transition-all duration-300",
                    isOpen
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 leading-7 text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Card>
    </section>
  );
}