import { MapPinned, Navigation } from "lucide-react";

export default function GoogleMap() {
  return (
    <section className="bg-gray-50 pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#0B3D91]/10 px-4 py-2 text-[#0B3D91]">
            <MapPinned size={18} />
            <span className="font-semibold">Visit Our Office</span>
          </div>

          <h2 className="mt-4 text-4xl font-bold text-[#0B3D91]">
            Find Us on Google Maps
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Visit our office in Royapettah, Chennai. Our travel experts are
            ready to assist you with Umrah, Hajj, tourist visas, flight tickets,
            and holiday packages.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-xl">
          <iframe
            title="Al Ansar Tours & Travels Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.723765379647!2d80.26957227507788!3d13.053246987269652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526626b0db1dc3%3A0x7e898cfc0ab2e1f5!2s125%2F104%2C%20Dr%20Besant%20Rd%2C%20Triplicane%2C%20Chennai%2C%20Greater%20Chennai%2C%20Tamil%20Nadu%20600014!5e0!3m2!1sen!2sin!4v1784367347797!5m2!1sen!2sin"
            width="100%"
            height="500"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="https://maps.google.com/?q=125+Dr+Besant+Road+Royapettah+Chennai+600014"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[#0B3D91] px-6 py-3 font-semibold text-white transition hover:bg-[#082d6d]"
          >
            <Navigation size={18} />
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}