import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";

import ItineraryCard from "./ItineraryCard";

interface SortableItineraryProps {
  id: string;

  dayNumber: number;

  title: string;

  description: string;

  deleting?: boolean;

  onTitleChange: (value: string) => void;

  onDescriptionChange: (value: string) => void;

  onDelete: () => void;
}

export default function SortableItinerary({
  id,
  dayNumber,
  title,
  description,
  deleting,
  onTitleChange,
  onDescriptionChange,
  onDelete,
}: SortableItineraryProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id,
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style}>
      <ItineraryCard
        dayNumber={dayNumber}
        title={title}
        description={description}
        deleting={deleting}
        onTitleChange={onTitleChange}
        onDescriptionChange={onDescriptionChange}
        onDelete={onDelete}
        dragAttributes={attributes}
        dragListeners={listeners}
      />
    </div>
  );
}
