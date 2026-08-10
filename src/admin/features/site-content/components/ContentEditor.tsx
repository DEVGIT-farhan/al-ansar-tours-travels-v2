import ImageUpload from "@/admin/components/forms/ImageUpload";

export type ContentValue =
  string | number | boolean | ContentObject | ContentValue[];

export interface ContentObject {
  [key: string]: ContentValue;
}

interface ContentEditorProps {
  value: ContentObject;
  onChange(value: ContentObject): void;
  hiddenFields?: readonly string[];
}

interface ContentFieldProps {
  fieldName: string;
  value: ContentValue;
  onChange(value: ContentValue): void;
}

function isContentObject(value: ContentValue): value is ContentObject {
  return typeof value === "object" && !Array.isArray(value);
}

function labelFor(fieldName: string) {
  return fieldName
    .replace(/([A-Z])/g, " $1")
    .replace(/Url/g, "URL")
    .replace(/^./, (character) => character.toUpperCase());
}

function isImageField(fieldName: string) {
  return /(image|logo|favicon)/i.test(fieldName);
}

function isLongTextField(fieldName: string, value: string) {
  return (
    /(?:answer|body|description|paragraph|review|message|address|content)/i.test(
      fieldName,
    ) || value.length > 120
  );
}

function emptyCopy(value: ContentValue): ContentValue {
  if (Array.isArray(value)) {
    return [];
  }

  if (isContentObject(value)) {
    return Object.fromEntries(
      Object.entries(value).map(([key, entry]) => [
        key,
        key === "id" ? crypto.randomUUID() : emptyCopy(entry),
      ]),
    );
  }

  if (typeof value === "number") {
    return 0;
  }

  if (typeof value === "boolean") {
    return false;
  }

  return "";
}

function ArrayEditor({
  fieldName,
  value,
  onChange,
}: {
  fieldName: string;
  value: ContentValue[];
  onChange(value: ContentValue[]): void;
}) {
  const template = value[0];

  function updateEntry(index: number, nextValue: ContentValue) {
    onChange(
      value.map((entry, entryIndex) =>
        entryIndex === index ? nextValue : entry,
      ),
    );
  }

  return (
    <fieldset className="rounded-2xl border border-slate-200 bg-[#fbfcfd] p-5">
      <legend className="px-2 text-sm font-semibold text-slate-800">
        {labelFor(fieldName)}
      </legend>

      <div className="space-y-5">
        {value.map((entry, index) => (
          <div
            key={`${fieldName}-${index}`}
            className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
          >
            <div className="mb-4 flex items-center justify-between gap-4">
              <p className="text-sm font-semibold text-slate-700">
                {labelFor(fieldName)} {index + 1}
              </p>

              <button
                type="button"
                onClick={() =>
                  onChange(
                    value.filter((_, entryIndex) => entryIndex !== index),
                  )
                }
                className="text-sm font-medium text-red-600 transition hover:text-red-700"
              >
                Remove
              </button>
            </div>

            {isContentObject(entry) ? (
              <ContentEditor
                value={entry}
                onChange={(nextValue) => updateEntry(index, nextValue)}
              />
            ) : (
              <ContentField
                fieldName={`${fieldName} ${index + 1}`}
                value={entry}
                onChange={(nextValue) => updateEntry(index, nextValue)}
              />
            )}
          </div>
        ))}
      </div>

      {template !== undefined && (
        <button
          type="button"
          onClick={() => onChange([...value, emptyCopy(template)])}
          className="mt-5 rounded-xl border border-[#102a43]/20 px-4 py-2 text-sm font-semibold text-[#102a43] transition hover:bg-[#fff8e9]"
        >
          Add {labelFor(fieldName).replace(/s$/, "")}
        </button>
      )}
    </fieldset>
  );
}

function ContentField({ fieldName, value, onChange }: ContentFieldProps) {
  if (Array.isArray(value)) {
    return (
      <ArrayEditor fieldName={fieldName} value={value} onChange={onChange} />
    );
  }

  if (isContentObject(value)) {
    return (
      <fieldset className="rounded-2xl border border-slate-200 bg-[#fbfcfd] p-5">
        <legend className="px-2 text-sm font-semibold text-slate-800">
          {labelFor(fieldName)}
        </legend>

        <ContentEditor value={value} onChange={onChange} />
      </fieldset>
    );
  }

  if (typeof value === "boolean") {
    return (
      <label className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700">
        <input
          type="checkbox"
          checked={value}
          onChange={(event) => onChange(event.target.checked)}
          className="h-4 w-4 rounded border-slate-300 text-[#102a43]"
        />
        {labelFor(fieldName)}
      </label>
    );
  }

  if (typeof value === "number") {
    return (
      <label className="block text-sm font-medium text-slate-700">
        {labelFor(fieldName)}
        <input
          type="number"
          value={value}
          onChange={(event) => onChange(Number(event.target.value))}
          className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#102a43] focus:ring-2 focus:ring-[#d9a441]/25"
        />
      </label>
    );
  }

  if (isImageField(fieldName)) {
    return (
      <div>
        <ImageUpload
          label={labelFor(fieldName)}
          bucket="website-assets"
          folder="site-content"
          value={value}
          onChange={onChange}
        />

        <label className="mt-4 block text-sm font-medium text-slate-700">
          Or paste an image URL
          <input
            type="url"
            value={value}
            onChange={(event) => onChange(event.target.value)}
            className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#102a43] focus:ring-2 focus:ring-[#d9a441]/25"
          />
        </label>
      </div>
    );
  }

  if (isLongTextField(fieldName, value)) {
    return (
      <label className="block text-sm font-medium text-slate-700">
        {labelFor(fieldName)}
        <textarea
          value={value}
          onChange={(event) => onChange(event.target.value)}
          rows={4}
          className="mt-2 w-full resize-y rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#102a43] focus:ring-2 focus:ring-[#d9a441]/25"
        />
      </label>
    );
  }

  return (
    <label className="block text-sm font-medium text-slate-700">
      {labelFor(fieldName)}
      <input
        type={fieldName.toLowerCase().includes("url") ? "url" : "text"}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#102a43] focus:ring-2 focus:ring-[#d9a441]/25"
      />
    </label>
  );
}

export default function ContentEditor({
  value,
  onChange,
  hiddenFields = [],
}: ContentEditorProps) {
  return (
    <div className="space-y-5">
      {Object.entries(value)
        .filter(([fieldName]) => !hiddenFields.includes(fieldName))
        .map(([fieldName, fieldValue]) => (
          <ContentField
            key={fieldName}
            fieldName={fieldName}
            value={fieldValue}
            onChange={(nextValue) =>
              onChange({
                ...value,
                [fieldName]: nextValue,
              })
            }
          />
        ))}
    </div>
  );
}
