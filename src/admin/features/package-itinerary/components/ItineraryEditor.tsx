import { useCallback, useEffect } from "react";

import {
  closestCenter,
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useFieldArray, useForm, useWatch } from "react-hook-form";

import Button from "@/shared/components/Button";

import SortableItinerary from "./SortableItinerary";

import { useCreatePackageItinerary } from "../hooks/useCreatePackageItinerary";
import { useDeletePackageItinerary } from "../hooks/useDeletePackageItinerary";
import { usePackageItinerary } from "../hooks/usePackageItinerary";
import { useReorderPackageItinerary } from "../hooks/useReorderPackageItinerary";
import { useUpdatePackageItineraryBatch } from "../hooks/useUpdatePackageItineraryBatch";

interface ItineraryEditorProps {
  packageId: string;
}

interface ItineraryFormItem {
  id: string;

  package_id: string;

  day_number: number;

  title: string;

  description: string;
}

interface FormValues {
  itinerary: ItineraryFormItem[];
}

export default function ItineraryEditor({ packageId }: ItineraryEditorProps) {
  const { data: itinerary = [], isLoading } = usePackageItinerary(packageId);

  const createMutation = useCreatePackageItinerary(packageId);

  const deleteMutation = useDeletePackageItinerary(packageId);

  const reorderMutation = useReorderPackageItinerary(packageId);

  const saveMutation = useUpdatePackageItineraryBatch(packageId);

  const { getValues, reset, setValue, handleSubmit, control } =
    useForm<FormValues>({
      defaultValues: {
        itinerary: [],
      },
    });

  const { fields, append, remove, move } = useFieldArray({
    control,
    name: "itinerary",
    keyName: "fieldId",
  });

  useEffect(() => {
    reset({
      itinerary,
    });
  }, [itinerary, reset]);

  const sensors = useSensors(useSensor(PointerSensor));

  const formValues =
    useWatch({
      control,
      name: "itinerary",
    }) ?? [];

  const handleAddDay = useCallback(async () => {
    const created = await createMutation.mutateAsync({
      package_id: packageId,
      day_number: fields.length + 1,
      title: "",
      description: "",
    });

    append(created);
  }, [append, createMutation, fields.length, packageId]);

  const handleDelete = useCallback(
    async (index: number) => {
      const item = fields[index];

      if (!item) {
        return;
      }

      await deleteMutation.mutateAsync(item.id);

      remove(index);

      const updated = getValues("itinerary")
        .filter((_, i) => i !== index)
        .map((item, idx) => ({
          id: item.id,
          day_number: idx + 1,
        }));

      await reorderMutation.mutateAsync(updated);
    },
    [deleteMutation, fields, remove, reorderMutation, getValues],
  );

  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      const { active, over } = event;

      if (!over || active.id === over.id) {
        return;
      }

      const oldIndex = fields.findIndex((item) => item.fieldId === active.id);

      const newIndex = fields.findIndex((item) => item.fieldId === over.id);

      move(oldIndex, newIndex);

      const reordered = getValues("itinerary");

      reordered.forEach((_, index) => {
        setValue(`itinerary.${index}.day_number`, index + 1);
      });
    },
    [fields, move, setValue, getValues],
  );

  const onSubmit = handleSubmit(async (data) => {
    await saveMutation.mutateAsync(
      data.itinerary.map((item) => ({
        id: item.id,
        day_number: item.day_number,
        title: item.title,
        description: item.description,
      })),
    );
  });
  if (isLoading) {
    return <div className="py-10 text-center">Loading itinerary...</div>;
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Package Itinerary</h2>

          <p className="text-sm text-gray-500">
            Manage the day-wise itinerary for this package.
          </p>
        </div>

        <div className="flex gap-3">
          <Button
            type="button"
            onClick={handleAddDay}
            disabled={createMutation.isPending}
          >
            Add Day
          </Button>

          <Button type="submit" disabled={saveMutation.isPending}>
            Save Changes
          </Button>
        </div>
      </div>

      {fields.length === 0 ? (
        <div className="rounded-lg border border-dashed py-12 text-center">
          <p className="text-gray-500">No itinerary added yet.</p>
        </div>
      ) : (
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={fields.map((field) => field.fieldId)}
            strategy={verticalListSortingStrategy}
          >
            <div className="space-y-4">
              {fields.map((field, index) => (
                <SortableItinerary
                  key={field.fieldId}
                  id={field.fieldId}
                  dayNumber={formValues[index]?.day_number ?? index + 1}
                  title={formValues[index]?.title ?? ""}
                  description={formValues[index]?.description ?? ""}
                  deleting={deleteMutation.isPending}
                  onTitleChange={(value) =>
                    setValue(`itinerary.${index}.title`, value)
                  }
                  onDescriptionChange={(value) =>
                    setValue(`itinerary.${index}.description`, value)
                  }
                  onDelete={() => handleDelete(index)}
                />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      )}
    </form>
  );
}
