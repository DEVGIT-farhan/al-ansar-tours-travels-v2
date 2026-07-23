import SectionHeading from "@/components/common/SectionHeading";
import { AccordionItem, Section } from "@/components/ui";

const faqs = [
  {
    question: "Why should I choose AL ANSAR TOURS & TRAVELS?",
    answer:
      "We are committed to providing reliable, transparent, and personalized travel services. Our experienced team assists customers with Umrah, visa processing, flight bookings, holiday packages, and complete travel planning while ensuring comfort and peace of mind.",
  },
  {
    question: "What makes your company different from other travel agencies?",
    answer:
      "Our approach is built on trust, honest guidance, competitive pricing, and dedicated customer support. We focus on understanding every traveller's requirements and providing tailored travel solutions rather than one-size-fits-all packages.",
  },
  {
    question: "What services do you offer?",
    answer:
      "We provide Umrah and Hajj packages, tourist and visit visa assistance, international holiday packages, flight ticket booking, hotel reservations, travel consultation, and customized travel planning.",
  },
  {
    question: "Do you provide personalized travel assistance?",
    answer:
      "Yes. Every traveller has unique requirements. Our consultants work closely with you to recommend suitable destinations, travel plans, accommodation, and services that match your preferences and budget.",
  },
  {
    question: "How can I contact your team?",
    answer:
      "You can reach us through our Contact page, WhatsApp, email, or by visiting our office. Our travel consultants are always ready to assist you with your enquiries.",
  },
];

export default function AboutFAQ() {
  return (
    <Section className="bg-gray-50">
      <SectionHeading
        badge="Frequently Asked Questions"
        title="Have Questions About Our Company?"
        description="Here are answers to some of the most common questions about AL ANSAR TOURS & TRAVELS."
      />

      <div
        className="mx-auto mt-16 max-w-4xl"
        data-aos="fade-up"
      >
        <div className="space-y-5">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.question}
              title={faq.question}
            >
              {faq.answer}
            </AccordionItem>
          ))}
        </div>
      </div>
    </Section>
  );
}