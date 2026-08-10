import { useParams } from "react-router-dom";

import CrudHeader from "@/admin/components/crud/CrudHeader";
import ItineraryEditor from "../components/ItineraryEditor";

export default function PackageItineraryPage() {
  const { id } = useParams<{
    id: string;
  }>();

  if (!id) {
    return <div className="p-6">Package not found.</div>;
  }

  return (
    <div className="space-y-7">
      <CrudHeader
        title="Package Itinerary"
        description="Organise the day-by-day experiences included in this package."
      />
      <div className="rounded-3xl border border-slate-200/80 bg-[#fdfcf9] p-4 shadow-sm sm:p-6">
        <ItineraryEditor packageId={id} />
      </div>
    </div>
  );
}
