import { useState } from "react";

import SectionHeading from "@/components/common/SectionHeading";
import { Section } from "@/components/ui";

import { useSiteContent } from "@/features/site-content";
import FAQItem from "./FAQItem";

export default function FAQSection() {
  const { content } = useSiteContent();
  const section = content.home.faq;
  const faqs = content.faq.items.map((faq, index) => ({
    ...faq,
    id: index + 1,
  }));
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <Section className="bg-gray-50">
      <SectionHeading
        badge={section.badge}
        title={section.title}
        description={section.description}
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
