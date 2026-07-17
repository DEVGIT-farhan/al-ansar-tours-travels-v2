import type { GalleryItem } from "../types/gallery";
import Card from "../../../components/ui/Card";


interface GalleryCardProps {
  item: GalleryItem;
}

export default function GalleryCard({
  item,
}: GalleryCardProps) {
  return (
    <Card className="group relative overflow-hidden shadow-lg">
      <img
        src={item.image}
        alt={item.title}
        className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="absolute bottom-0 left-0 w-full translate-y-8 p-6 text-white transition-all duration-300 group-hover:translate-y-0">
        <span className="rounded-full bg-[#F4B400] px-3 py-1 text-xs font-semibold text-black">
          {item.category}
        </span>

        <h3 className="mt-3 text-2xl font-bold">
          {item.title}
        </h3>
      </div>
    </Card>
  );
}