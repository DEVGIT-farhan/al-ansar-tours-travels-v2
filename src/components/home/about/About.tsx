import { Button, Section } from "@/components/ui";
import ImageSlider from "@/components/common/ImageSlider";
import SectionHeading from "@/components/common/SectionHeading";

import { COMPANY } from "@/constants/COMPANY";
import { aboutFeatures } from "@/data/aboutFeatures";
import { aboutImages } from "@/data/aboutImages";
import { aboutStats } from "@/data/aboutStats";

export default function About() {
  return (
    <Section
      className="py-20"
      containerClassName="grid items-center gap-12 lg:grid-cols-2"
    >
      <div>
        <SectionHeading
          badge="Who We Are"
          title="Your Trusted Travel Partner"
          description="We help thousands of travellers with flights, visa assistance, Umrah packages and holiday tours."
        />

        <p className="mt-6 text-gray-600">
          {COMPANY.name} is committed to providing reliable travel
          services with affordable pricing and excellent customer
          support.
        </p>

        <div className="mt-8 space-y-5">
          {aboutFeatures.map(({ icon: Icon, title }) => (
            <div
              key={title}
              className="flex items-center gap-4"
            >
              <Icon
                className="h-6 w-6 text-[#0B3D91]"
                aria-hidden="true"
              />

              <span className="text-gray-700">
                {title}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-3 gap-6 text-center">
          {aboutStats.map(({ value, label }) => (
            <div key={label}>
              <h3 className="text-3xl font-bold text-[#0B3D91]">
                {value}
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                {label}
              </p>
            </div>
          ))}
        </div>

        <Button
          to="/about"
          className="mt-8"
        >
          Discover Our Story
        </Button>
      </div>

      <ImageSlider
        images={aboutImages}
        className="rounded-3xl shadow-2xl"
      />
    </Section>
  );
}