import { Helmet } from "react-helmet-async";
import { useWebsite } from "@/hooks/useWebsite";

export default function WebsiteSeo() {
  const { settings } = useWebsite();

  const companyName =
    settings?.company_name?.trim() ||
    "AL ANSAR TOURS & TRAVELS";

  const title =
    settings?.seo_title?.trim() ||
    companyName;

  const description =
    settings?.seo_description?.trim() ||
    settings?.tagline?.trim() ||
    "Your Trusted Travel Partner";

  const keywords =
    settings?.seo_keywords?.trim() ||
    "";

  const favicon =
    settings?.favicon_url?.trim() ||
    "/favicon.svg";

  return (
    <Helmet>
      {/* Page Title */}
      <title>{title}</title>

      {/* Basic SEO */}
      <meta
        name="description"
        content={description}
      />

      <meta
        name="keywords"
        content={keywords}
      />

      <meta
        name="author"
        content={companyName}
      />

      {/* Theme */}
      <meta
        name="theme-color"
        content="#0B3D91"
      />

      {/* Favicon */}
      <link
        rel="icon"
        href={favicon}
      />

      {/* Open Graph */}
      <meta
        property="og:title"
        content={title}
      />

      <meta
        property="og:description"
        content={description}
      />

      {settings?.logo_url && (
        <meta
          property="og:image"
          content={settings.logo_url}
        />
      )}

      {/* Twitter */}
      <meta
        name="twitter:title"
        content={title}
      />

      <meta
        name="twitter:description"
        content={description}
      />

      {settings?.logo_url && (
        <meta
          name="twitter:image"
          content={settings.logo_url}
        />
      )}
    </Helmet>
  );
}