import { useMemo, useState } from "react";

interface EditableItem {
  id: string;
  description: string;
}

export function useEditableList<T extends EditableItem>(
  key: string,
  serverItems: T[],
) {
  const [editedItems, setEditedItems] = useState<Record<string, T[]>>({});

  const items = useMemo(() => {
    return editedItems[key] ?? serverItems;
  }, [editedItems, key, serverItems]);

  function updateItems(next: T[]) {
    setEditedItems((previous) => ({
      ...previous,
      [key]: next,
    }));
  }

  function changeItem(index: number, description: string) {
    updateItems(
      items.map((item, i) =>
        i === index
          ? {
              ...item,
              description,
            }
          : item,
      ),
    );
  }

  function addItem(item: T) {
    updateItems([...items, item]);
  }

  function removeItem(index: number) {
    updateItems(items.filter((_, i) => i !== index));
  }

  function replaceItems(next: T[]) {
    updateItems(next);
  }

  function reset() {
    setEditedItems((previous) => {
      const copy = {
        ...previous,
      };

      delete copy[key];

      return copy;
    });
  }

  return {
    items,
    addItem,
    changeItem,
    removeItem,
    replaceItems,
    reset,
  };
}
