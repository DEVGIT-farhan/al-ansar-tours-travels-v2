import GalleryHero from "@/features/gallery/components/GalleryHero";
import GalleryPageSection from "@/features/gallery/components/GalleryPageSection";
import PageHeader from "@/components/common/PageHeader";
import { useSiteContent } from "@/features/site-content";

export default function Gallery() {
  const { content } = useSiteContent();
  const gallery = content.gallery;

  return (
    <>
      <PageHeader
        title={gallery.pageTitle}
        description={gallery.pageDescription}
        breadcrumb={[
          {
            label: gallery.pageTitle,
          },
        ]}
      />
      <GalleryHero />
      <GalleryPageSection />
    </>
  );
}
