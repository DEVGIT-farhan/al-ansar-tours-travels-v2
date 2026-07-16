import Button from "../ui/Button";

export default function SearchSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl rounded-3xl bg-white p-8 shadow-xl">
        <h2 className="text-3xl font-bold text-[#0B3D91]">
          Find Your Perfect Trip
        </h2>

        <p className="mt-2 text-gray-600">
          Search our holiday, Umrah and international travel packages.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-4">
          <select className="rounded-xl border p-3">
            <option>Destination</option>
            <option>Dubai</option>
            <option>Singapore</option>
            <option>Malaysia</option>
            <option>Turkey</option>
            <option>Maldives</option>
          </select>

          <select className="rounded-xl border p-3">
            <option>Travel Type</option>
            <option>Holiday</option>
            <option>Umrah</option>
            <option>Corporate</option>
          </select>

          <select className="rounded-xl border p-3">
            <option>Budget</option>
            <option>₹25,000+</option>
            <option>₹50,000+</option>
            <option>₹1,00,000+</option>
          </select>

          <Button>Search Packages</Button>
        </div>
      </div>
    </section>
  );
}