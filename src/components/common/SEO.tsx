import { Helmet } from "react-helmet-async";

import { SEO as DEFAULT_SEO } from "@/constants/seo";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: "website" | "article";
}

export default function SEO({
  title,
  description,
  keywords,
  image,
  url,
  type = "website",
}: SEOProps) {
  const pageTitle = title
    ? `${title} | ${DEFAULT_SEO.siteName}`
    : DEFAULT_SEO.defaultTitle;

  const pageDescription =
    description ?? DEFAULT_SEO.defaultDescription;

  const pageKeywords = (
    keywords ?? DEFAULT_SEO.defaultKeywords
  ).join(", ");

  const pageUrl = new URL(
    url ?? "/",
    DEFAULT_SEO.siteUrl
  ).toString();

  const pageImage = new URL(
    image ?? DEFAULT_SEO.defaultImage,
    DEFAULT_SEO.siteUrl
  ).toString();

  return (
    <Helmet prioritizeSeoTags>
      {/* Primary SEO */}
      <title>{pageTitle}</title>

      <meta
        name="description"
        content={pageDescription}
      />

      <meta
        name="keywords"
        content={pageKeywords}
      />

      <meta
        name="robots"
        content="index, follow"
      />

      <meta
        name="author"
        content={DEFAULT_SEO.siteName}
      />

      <link
        rel="canonical"
        href={pageUrl}
      />

      {/* Open Graph */}
      <meta
        property="og:type"
        content={type}
      />

      <meta
        property="og:site_name"
        content={DEFAULT_SEO.siteName}
      />

      <meta
        property="og:locale"
        content={DEFAULT_SEO.locale}
      />

      <meta
        property="og:title"
        content={pageTitle}
      />

      <meta
        property="og:description"
        content={pageDescription}
      />

      <meta
        property="og:url"
        content={pageUrl}
      />

      <meta
        property="og:image"
        content={pageImage}
      />

      {/* Twitter */}
      <meta
        name="twitter:card"
        content={DEFAULT_SEO.twitterCard}
      />

      <meta
        name="twitter:title"
        content={pageTitle}
      />

      <meta
        name="twitter:description"
        content={pageDescription}
      />

      <meta
        name="twitter:image"
        content={pageImage}
      />

      {/* Theme */}
      <meta
        name="theme-color"
        content="#0B3D91"
      />
    </Helmet>
  );
}