import { useMemo, useState } from "react";
import { ArrowUpRight, Images } from "lucide-react";

import { Section } from "@/components/ui";
import GalleryLightbox from "./GalleryLightbox";
import { galleryItems } from "../data/gallery";
import { useSiteContent } from "@/features/site-content";

export default function GalleryPageSection() {
  const { content } = useSiteContent();
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const editableGalleryItems = content.gallery.items.flatMap((item, index) => {
    const image = item.imageUrl || galleryItems[index]?.image;

    return image
      ? [
          {
            id: index + 1,
            title: item.title,
            category: item.category || "Gallery",
            image,
          },
        ]
      : [];
  });
  const gallerySections = useMemo(() => {
    const sections = new Map<string, typeof editableGalleryItems>();

    editableGalleryItems.forEach((item) => {
      sections.set(item.category, [
        ...(sections.get(item.category) ?? []),
        item,
      ]);
    });

    return Array.from(sections, ([name, items]) => ({ name, items }));
  }, [editableGalleryItems]);
  const activeSection = gallerySections.find(
    (section) => section.name === selectedSection,
  );
  const slides = (activeSection?.items ?? []).map((item) => ({
    src: item.image,
    alt: item.title,
    width: 1600,
    height: 900,
  }));

  return (
    <Section className="bg-white pt-0">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9b6a18]">
          Browse by collection
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#102a43] sm:text-4xl">
          Choose a gallery section
        </h2>
        <p className="mt-4 leading-7 text-slate-600">
          Select a collection to view its photos in a full-screen slider.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {gallerySections.map((section, index) => {
          const cover = section.items[0]!;

          return (
            <button
              key={section.name}
              type="button"
              onClick={() => setSelectedSection(section.name)}
              data-aos="zoom-in"
              data-aos-delay={Math.min(index * 80, 400)}
              className="group relative min-h-95 overflow-hidden rounded-3xl bg-[#102a43] text-left shadow-[0_20px_40px_-28px_rgba(16,42,67,0.7)] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#d9a441]"
            >
              <img
                src={cover.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,20,36,0.08),rgba(5,20,36,0.88))]" />
              <div className="relative flex min-h-95 flex-col justify-end p-6 text-white">
                <span className="mb-auto inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-bold backdrop-blur">
                  <Images className="h-3.5 w-3.5" /> {section.items.length}{" "}
                  photo{section.items.length === 1 ? "" : "s"}
                </span>
                <h3 className="mt-12 text-3xl font-bold tracking-tight">
                  {section.name}
                </h3>
                <p className="mt-2 text-sm text-slate-200">Open collection</p>
                <span className="absolute bottom-6 right-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 transition group-hover:bg-[#d9a441] group-hover:text-[#102a43]">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {gallerySections.length === 0 && (
        <div className="mt-12 rounded-3xl border border-dashed border-slate-300 p-12 text-center text-slate-600">
          No gallery sections have been published yet.
        </div>
      )}

      <GalleryLightbox
        open={selectedSection !== null}
        close={() => setSelectedSection(null)}
        index={0}
        slides={slides}
      />
    </Section>
  );
}
