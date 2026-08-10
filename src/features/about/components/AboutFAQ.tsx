import SectionHeading from "@/components/common/SectionHeading";
import { AccordionItem, Section } from "@/components/ui";
import { useSiteContent } from "@/features/site-content";

export default function AboutFAQ() {
  const { content } = useSiteContent();
  const section = content.about.faq;

  return (
    <Section className="bg-gray-50">
      <SectionHeading
        badge={section.badge}
        title={section.title}
        description={section.description}
      />

      <div className="mx-auto mt-16 max-w-4xl" data-aos="fade-up">
        <div className="space-y-5">
          {section.items.map((faq) => (
            <AccordionItem key={faq.question} title={faq.question}>
              {faq.answer}
            </AccordionItem>
          ))}
        </div>
      </div>
    </Section>
  );
}
