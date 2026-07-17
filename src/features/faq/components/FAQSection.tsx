import { useState } from "react";

import { Section } from "@/components/ui";
import SectionHeading from "@/components/common/SectionHeading";

import FAQItem from "./FAQItem";
import { faqs } from "../data/faqs";

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(1);

  const handleToggle = (id: number) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <Section className="bg-gray-50">
      <SectionHeading
        badge="Frequently Asked Questions"
        title="Everything You Need to Know"
        description="Find answers to the most common questions about our Umrah, visa, and travel services."
      />

      <div className="mx-auto mt-16 max-w-5xl space-y-6">
        {faqs.map((faq) => (
          <FAQItem
            key={faq.id}
            faq={faq}
            isOpen={openId === faq.id}
            onClick={() => handleToggle(faq.id)}
          />
        ))}
      </div>
    </Section>
  );
}