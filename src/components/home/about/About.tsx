 import { aboutStats } from "../../../data/aboutStats";
import { aboutFeatures } from "../../../data/aboutFeatures";
import SectionHeading from "../../common/SectionHeading";
import Button from "../../ui/Button";
import { aboutImages } from "../../../data/aboutImages";
import ImageSlider from "../../common/ImageSlider";

export default function About() {
  return (
   <section className="py-20">
  <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">

    {/* Left */}

    <div>
      <SectionHeading
        badge="Who We Are"
        title="Your Trusted Travel Partner"
        description="We help thousands of travellers with flights, visa assistance, Umrah packages and holiday tours."
      />

      <p className="mt-6 text-gray-600">
        AL ANSAR TOURS & TRAVELS is committed to providing reliable travel
        services with affordable pricing and excellent customer support.
      </p>
      <div className="mt-8 space-y-5">{aboutFeatures.map((feature) =>{const Icon = feature.icon; return (
          <div key={feature.title}className="flex items-center gap-4">
              <Icon className="h-6 w-6 text-[#0B3D91]" /><span className="text-gray-700">{feature.title}</span>
           </div>);})}
      </div>
     

      <div className="mt-10 grid grid-cols-3 gap-6">
         {aboutStats.map((stat) => (
         <div key={stat.label}>
           <h3 className="text-3xl font-bold text-[#0B3D91]">
             {stat.value}
           </h3>

            <p className="mt-1 text-sm text-gray-500">
              {stat.label}
           </p>
          </div>))}
       </div>
      <Button to="/about" className="mt-8">
        Learn More
      </Button>
    </div>
    

    {/* Right */}
     
    <ImageSlider
     images={aboutImages} 
      className="rounded-3xl shadow-2xl"
    />

  </div>
</section>
  );
}