import SEO from "@/components/common/SEO";
import PageHeader from "@/components/common/PageHeader";

import PackagesPage from "@/website/pages/packages/PackagesPage";
import { useSiteContent } from "@/features/site-content";

export default function Packages() {
  const { content } = useSiteContent();
  const packagesContent = content.home.packagesPage;

  return (
    <>
      <SEO
        title={packagesContent.title}
        description={packagesContent.seoDescription}
      />

      <PageHeader
        title={packagesContent.title}
        description={packagesContent.description}
        breadcrumb={[
          {
            label: packagesContent.title,
          },
        ]}
      />

      <PackagesPage />
    </>
  );
}
