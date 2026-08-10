export interface SimpleListItem {
  id: string;
  description: string;
}

export interface SimpleListEditorProps {
  title: string;
  addButtonLabel: string;

  items: SimpleListItem[];

  loading?: boolean;
  saveDisabled?: boolean;

  onAdd: () => Promise<void> | void;
  onDelete: (index: number) => Promise<void> | void;
  onChange: (index: number, value: string) => void;
  onSave: () => Promise<void> | void;
}
