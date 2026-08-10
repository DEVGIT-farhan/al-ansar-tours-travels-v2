import { GripVertical, Trash2 } from "lucide-react";

import type { DraggableAttributes } from "@dnd-kit/core";
import type { SyntheticListenerMap } from "@dnd-kit/core/dist/hooks/utilities";

import Button from "@/shared/components/Button";

interface ItineraryCardProps {
  dayNumber: number;

  title: string;

  description: string;

  deleting?: boolean;

  onTitleChange: (value: string) => void;

  onDescriptionChange: (value: string) => void;

  onDelete: () => void;

  dragAttributes?: DraggableAttributes;

  dragListeners?: SyntheticListenerMap;
}

export default function ItineraryCard({
  dayNumber,
  title,
  description,
  deleting,
  onTitleChange,
  onDescriptionChange,
  onDelete,
  dragAttributes,
  dragListeners,
}: ItineraryCardProps) {
  return (
    <div className="rounded-lg border bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="cursor-grab rounded-md p-2 hover:bg-gray-100 active:cursor-grabbing"
            {...dragAttributes}
            {...dragListeners}
          >
            <GripVertical className="h-5 w-5 text-gray-500" />
          </button>

          <h3 className="text-lg font-semibold">Day {dayNumber}</h3>
        </div>

        <Button
          type="button"
          variant="danger"
          size="sm"
          disabled={deleting}
          onClick={onDelete}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>

      <div className="space-y-4">
        <div>
          <label className="mb-1 block text-sm font-medium">Title</label>

          <input
            type="text"
            value={title}
            onChange={(e) => onTitleChange(e.target.value)}
            placeholder="Arrival in Dubai"
            className="w-full rounded-md border px-3 py-2"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">Description</label>

          <textarea
            rows={4}
            value={description}
            onChange={(e) => onDescriptionChange(e.target.value)}
            placeholder="Describe the activities for this day..."
            className="w-full rounded-md border px-3 py-2"
          />
        </div>
      </div>
    </div>
  );
}
