import type { GalleryItem } from "../types/gallery";
import Card from "@/components/ui/Card";

interface GalleryCardProps {
  item: GalleryItem;
  onClick?: () => void;
}

export default function GalleryCard({ item, onClick }: GalleryCardProps) {
  return (
    <Card
      {...(onClick && {
        role: "button",
        tabIndex: 0,
        onClick,
        onKeyDown: (event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onClick();
          }
        },
      })}
      className={`group relative overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
        onClick
          ? "cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#F4B400]"
          : ""
      }`}
    >
      <img
        src={item.image}
        alt={item.title}
        loading="lazy"
        decoding="async"
        className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="absolute bottom-0 left-0 w-full translate-y-8 p-6 text-white transition-all duration-300 group-hover:translate-y-0">
        <span className="rounded-full bg-[#F4B400] px-3 py-1 text-xs font-semibold text-black">
          {item.category}
        </span>

        <h3 className="mt-3 text-2xl font-bold">{item.title}</h3>
      </div>
    </Card>
  );
}
