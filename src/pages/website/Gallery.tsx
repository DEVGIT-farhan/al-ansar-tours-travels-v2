import GalleryHero from "@/features/gallery/components/GalleryHero";
import GalleryPageSection from "@/features/gallery/components/GalleryPageSection";
import PageHeader from "@/components/common/PageHeader";

export default function Gallery() {
  return (
    <>
      <PageHeader
        title="Gallery"
        description="Take a look at our collection of stunning travel moments."
        breadcrumb={[
          {
            label: "Gallery",
          },
        ]}
      />
      <GalleryHero />
      <GalleryPageSection />
    </>
  );
}