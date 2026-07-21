import { useState } from "react";

import SectionHeading from "@/components/common/SectionHeading";
import { Section } from "@/components/ui";

import { faqs } from "../data/faqs";
import FAQItem from "./FAQItem";

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenId((current) =>
      current === id ? null : id
    );
  };

  return (
    <Section className="bg-gray-50">
      <SectionHeading
        badge="Frequently Asked Questions"
        title="Everything You Need to Know"
        description="Find answers to the most common questions about our Umrah, visa and travel services."
      />

      <ul className="mx-auto mt-16 max-w-5xl space-y-6">
        {faqs.map((faq) => (
          <li key={faq.id}>
            <FAQItem
              faq={faq}
              isOpen={openId === faq.id}
              onClick={() => toggleFaq(faq.id)}
            />
          </li>
        ))}
      </ul>
    </Section>
  );
}