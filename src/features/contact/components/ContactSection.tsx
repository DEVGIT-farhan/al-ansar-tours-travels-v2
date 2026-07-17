import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { Button, Card, Section } from "@/components/ui";
import SectionHeading from "@/components/common/SectionHeading";

import { contactInfo } from "../data/contactInfo";

const icons = {
  phone: Phone,
  mail: Mail,
  map: MapPin,
  clock: Clock,
};

export default function ContactSection() {
  return (
    <Section className="bg-gray-50">
      <SectionHeading
        badge="Contact Us"
        title="Let's Plan Your Next Journey"
        description="Have questions about Umrah, visas, or holiday packages? Our travel experts are here to help."
      />

      <div className="mt-16 grid gap-10 lg:grid-cols-2">
        {/* Contact Information */}
        <div className="space-y-5">
          {contactInfo.map((item) => {
            const Icon = icons[item.icon as keyof typeof icons];

            return (
              <Card
  key={item.title}
  className="p-6 hover:-translate-y-1 hover:shadow-lg"
>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-[#0B3D91]/10 p-3">
                    <Icon className="h-7 w-7 text-[#0B3D91]" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#0B3D91]">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-gray-600">
                      {item.value}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Contact Form */}
        <Card className="p-8">
          <h3 className="mb-6 text-2xl font-bold text-[#0B3D91]">
            Send an Enquiry
          </h3>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full rounded-xl border border-gray-300 p-4 focus:border-[#0B3D91] focus:outline-none"
            />

            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full rounded-xl border border-gray-300 p-4 focus:border-[#0B3D91] focus:outline-none"
            />

            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full rounded-xl border border-gray-300 p-4 focus:border-[#0B3D91] focus:outline-none"
            />
            <select
  className="w-full rounded-xl border border-gray-300 p-4 focus:border-[#0B3D91] focus:outline-none"
  defaultValue=""
>
  <option value="" disabled>
    Select your destination
  </option>
  <option>Umrah</option>
  <option>Dubai</option>
  <option>Malaysia</option>
  <option>Thailand</option>
  <option>Turkey</option>
</select>

            <textarea
              rows={5}
              placeholder="Tell us about your preferred destination, travel dates, and number of travellers."
              className="w-full rounded-xl border border-gray-300 p-4 focus:border-[#0B3D91] focus:outline-none"
            />

            <Button className="w-full">
              Send Enquiry
            </Button>
          </form>
        </Card>
      </div>
    </Section>
  );
}