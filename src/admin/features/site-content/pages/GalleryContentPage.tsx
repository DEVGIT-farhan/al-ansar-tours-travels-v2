import { useMemo, useRef, useState } from "react";
import {
  FolderPlus,
  ImagePlus,
  Loader2,
  Pencil,
  Trash2,
  Upload,
} from "lucide-react";
import toast from "react-hot-toast";

import { uploadFile } from "@/lib/supabase/storage";
import { useSiteContent, useUpdateSiteContent } from "@/features/site-content";
import type { SiteContent } from "@/features/site-content";

const MAX_FILE_SIZE = 5 * 1024 * 1024;
type GalleryItem = SiteContent["gallery"]["items"][number];

function cloneValue<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}

export default function GalleryContentPage() {
  const { content, error } = useSiteContent();
  const updateSiteContent = useUpdateSiteContent();
  const inputRef = useRef<HTMLInputElement>(null);
  const [draftItems, setDraftItems] = useState<GalleryItem[] | null>(null);
  const [draftSections, setDraftSections] = useState<string[] | null>(null);
  const [selectedSection, setSelectedSection] = useState("All");
  const [newSection, setNewSection] = useState("");
  const [uploading, setUploading] = useState(false);
  const items = draftItems ?? cloneValue(content.gallery.items);
  const sections = draftSections ?? cloneValue(content.gallery.sections);
  const visibleItems =
    selectedSection === "All"
      ? items
      : items.filter((item) => item.category === selectedSection);
  const imageCountBySection = useMemo(
    () =>
      Object.fromEntries(
        sections.map((section) => [
          section,
          items.filter((item) => item.category === section).length,
        ]),
      ),
    [items, sections],
  );

  function updateItems(nextItems: GalleryItem[]) {
    setDraftItems(nextItems);
  }

  function updateSections(nextSections: string[]) {
    setDraftSections(nextSections);
  }

  function addSection() {
    const section = newSection.trim();

    if (!section) {
      toast.error("Enter a section name first.");
      return;
    }

    if (
      sections.some(
        (existing) => existing.toLowerCase() === section.toLowerCase(),
      )
    ) {
      toast.error("That gallery section already exists.");
      return;
    }

    updateSections([...sections, section]);
    setSelectedSection(section);
    setNewSection("");
  }

  function renameSection(index: number, nextName: string) {
    const previousName = sections[index]!;
    const name = nextName.trim();

    if (!name || name === previousName) return;

    if (
      sections.some(
        (section, sectionIndex) =>
          sectionIndex !== index &&
          section.toLowerCase() === name.toLowerCase(),
      )
    ) {
      toast.error("That gallery section already exists.");
      return;
    }

    updateSections(
      sections.map((section, sectionIndex) =>
        sectionIndex === index ? name : section,
      ),
    );
    updateItems(
      items.map((item) =>
        item.category === previousName ? { ...item, category: name } : item,
      ),
    );
    if (selectedSection === previousName) setSelectedSection(name);
  }

  function removeSection(section: string) {
    const imageCount = imageCountBySection[section] ?? 0;

    if (imageCount) {
      toast.error(
        `Move or remove the ${imageCount} image${imageCount === 1 ? "" : "s"} in ${section} first.`,
      );
      return;
    }

    updateSections(sections.filter((existing) => existing !== section));
    if (selectedSection === section) setSelectedSection("All");
  }

  function updateItem(index: number, changes: Partial<GalleryItem>) {
    updateItems(
      items.map((item, itemIndex) =>
        itemIndex === index ? { ...item, ...changes } : item,
      ),
    );
  }

  async function uploadImages(files: FileList | File[]) {
    if (selectedSection === "All") {
      toast.error("Select a gallery section before uploading images.");
      return;
    }

    const validFiles = Array.from(files).filter((file) => {
      if (!file.type.startsWith("image/")) {
        toast.error(`${file.name} is not an image.`);
        return false;
      }
      if (file.size > MAX_FILE_SIZE) {
        toast.error(`${file.name} is larger than 5 MB.`);
        return false;
      }
      return true;
    });
    if (!validFiles.length) return;

    try {
      setUploading(true);
      const uploaded = await Promise.all(
        validFiles.map(async (file) => ({
          title: file.name.replace(/\.[^/.]+$/, "").replace(/[-_]+/g, " "),
          category: selectedSection,
          imageUrl: await uploadFile({
            bucket: "website-assets",
            folder: "gallery",
            file,
          }),
        })),
      );
      updateItems([...items, ...uploaded]);
      toast.success(
        `${uploaded.length} image${uploaded.length === 1 ? "" : "s"} added. Publish changes when ready.`,
      );
    } catch (uploadError) {
      toast.error(
        uploadError instanceof Error
          ? uploadError.message
          : "Some images could not be uploaded.",
      );
    } finally {
      setUploading(false);
    }
  }

  function publishChanges() {
    updateSiteContent.mutate(
      {
        ...content,
        gallery: { ...content.gallery, sections, items },
      } as SiteContent,
      {
        onSuccess: () => {
          setDraftItems(null);
          setDraftSections(null);
        },
      },
    );
  }

  return (
    <div className="space-y-8">
      <section className="flex flex-col gap-5 rounded-3xl border border-[#d9a441]/25 bg-[#fff8e9] p-6 sm:flex-row sm:items-end sm:justify-between sm:p-8">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9b6a18]">
            Live website editor
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#102a43]">
            Gallery Manager
          </h1>
          <p className="mt-3 leading-7 text-slate-600">
            Create named collections, upload many photos to each one, and
            publish when ready.
          </p>
        </div>
        <button
          type="button"
          onClick={publishChanges}
          disabled={updateSiteContent.isPending || uploading}
          className="rounded-xl bg-[#102a43] px-6 py-3 font-semibold text-white shadow-lg shadow-[#102a43]/20 transition hover:-translate-y-0.5 hover:bg-[#163b5c] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {updateSiteContent.isPending ? "Publishing..." : "Publish changes"}
        </button>
      </section>

      {error && (
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
          Gallery publishing is unavailable until the CMS database connection is
          available.
        </div>
      )}

      <section className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-[0_16px_42px_-32px_rgba(16,42,67,0.45)] sm:p-8">
        <div className="flex flex-col gap-4 border-b border-slate-200 pb-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9b6a18]">
              Gallery sections
            </p>
            <h2 className="mt-2 text-xl font-bold text-[#102a43]">
              Create and rename collections
            </h2>
          </div>
          <div className="flex gap-2">
            <input
              value={newSection}
              onChange={(event) => setNewSection(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  addSection();
                }
              }}
              placeholder="New section name"
              className="min-w-0 rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-[#102a43]"
            />
            <button
              type="button"
              onClick={addSection}
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#102a43] px-4 py-2.5 text-sm font-semibold text-white"
            >
              <FolderPlus className="h-4 w-4" /> Add section
            </button>
          </div>
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {sections.map((section, index) => (
            <div
              key={section}
              className={`rounded-2xl border p-4 transition ${selectedSection === section ? "border-[#d9a441] bg-[#fff8e9]" : "border-slate-200 bg-[#fbfcfd]"}`}
            >
              <div className="flex items-center gap-2">
                <Pencil className="h-4 w-4 shrink-0 text-[#9b6a18]" />
                <input
                  defaultValue={section}
                  onBlur={(event) => renameSection(index, event.target.value)}
                  className="min-w-0 grow bg-transparent text-sm font-bold text-[#102a43] outline-none"
                />
                <button
                  type="button"
                  onClick={() => removeSection(section)}
                  className="rounded-lg p-1.5 text-slate-400 hover:bg-red-50 hover:text-red-600"
                  aria-label={`Remove ${section} section`}
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
              <button
                type="button"
                onClick={() => setSelectedSection(section)}
                className="mt-3 text-xs font-semibold text-slate-500 hover:text-[#102a43]"
              >
                {imageCountBySection[section] ?? 0} image
                {imageCountBySection[section] === 1 ? "" : "s"} · Open section
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-[0_16px_42px_-32px_rgba(16,42,67,0.45)] sm:p-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9b6a18]">
              Add images
            </p>
            <h2 className="mt-2 text-xl font-bold text-[#102a43]">
              {selectedSection === "All"
                ? "Choose a section to upload images"
                : `Upload images to ${selectedSection}`}
            </h2>
          </div>
          <select
            value={selectedSection}
            onChange={(event) => setSelectedSection(event.target.value)}
            className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-medium text-slate-700 outline-none focus:border-[#102a43]"
          >
            <option value="All">Choose a section</option>
            {sections.map((section) => (
              <option key={section} value={section}>
                {section}
              </option>
            ))}
          </select>
        </div>
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={uploading || selectedSection === "All"}
          className="mt-6 flex w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#d9a441]/45 bg-[#fffaf0] px-6 py-10 text-center transition hover:border-[#102a43]/45 hover:bg-[#fff8e9] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {uploading ? (
            <Loader2 className="h-8 w-8 animate-spin text-[#102a43]" />
          ) : (
            <Upload className="h-8 w-8 text-[#9b6a18]" />
          )}
          <span className="mt-3 font-bold text-[#102a43]">
            {uploading
              ? "Uploading images..."
              : "Choose multiple images to upload"}
          </span>
          <span className="mt-1 text-sm text-slate-500">
            PNG, JPG, JPEG or WEBP · up to 5 MB each
          </span>
        </button>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          multiple
          hidden
          onChange={(event) => {
            if (event.target.files) void uploadImages(event.target.files);
            event.target.value = "";
          }}
        />
      </section>

      <section className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-[0_16px_42px_-32px_rgba(16,42,67,0.45)] sm:p-8">
        <div className="flex flex-col gap-4 border-b border-slate-200 pb-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9b6a18]">
              Gallery library
            </p>
            <h2 className="mt-2 text-xl font-bold text-[#102a43]">
              {visibleItems.length} image{visibleItems.length === 1 ? "" : "s"}{" "}
              shown
            </h2>
          </div>
          <button
            type="button"
            onClick={() => setSelectedSection("All")}
            className="text-sm font-semibold text-[#102a43] underline decoration-[#d9a441] decoration-2 underline-offset-4"
          >
            Show all images
          </button>
        </div>
        {visibleItems.length ? (
          <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {visibleItems.map((item) => {
              const index = items.indexOf(item);
              return (
                <article
                  key={`${item.imageUrl}-${index}`}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                >
                  {item.imageUrl ? (
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="h-48 w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-48 items-center justify-center bg-slate-100 text-slate-400">
                      <ImagePlus className="h-8 w-8" />
                    </div>
                  )}
                  <div className="space-y-3 p-4">
                    <input
                      value={item.title}
                      onChange={(event) =>
                        updateItem(index, { title: event.target.value })
                      }
                      placeholder="Image title"
                      className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-[#102a43] outline-none focus:border-[#102a43]"
                    />
                    <select
                      value={item.category}
                      onChange={(event) =>
                        updateItem(index, { category: event.target.value })
                      }
                      className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-[#102a43]"
                    >
                      <option value="">Choose a section</option>
                      {sections.map((section) => (
                        <option key={section} value={section}>
                          {section}
                        </option>
                      ))}
                    </select>
                    <button
                      type="button"
                      onClick={() =>
                        updateItems(
                          items.filter((_, itemIndex) => itemIndex !== index),
                        )
                      }
                      className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 transition hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4" /> Remove image
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="mt-6 flex flex-col items-center rounded-2xl border border-dashed border-slate-300 px-6 py-14 text-center">
            <ImagePlus className="h-9 w-9 text-slate-400" />
            <p className="mt-3 font-semibold text-[#102a43]">
              No images in this section yet
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Choose a section above and upload as many images as you need.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
