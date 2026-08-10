import { Helmet } from "react-helmet-async";

import { SEO as DEFAULT_SEO } from "@/constants/seo";
import { useWebsite } from "@/hooks/useWebsite";

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
  const { settings } = useWebsite();
  const siteName = settings?.company_name?.trim() || DEFAULT_SEO.siteName;
  const defaultTitle = settings?.seo_title?.trim() || DEFAULT_SEO.defaultTitle;
  const defaultDescription =
    settings?.seo_description?.trim() || DEFAULT_SEO.defaultDescription;
  const defaultKeywords = settings?.seo_keywords?.trim()
    ? settings.seo_keywords.split(",").map((keyword) => keyword.trim())
    : DEFAULT_SEO.defaultKeywords;
  const defaultImage = settings?.logo_url?.trim() || DEFAULT_SEO.defaultImage;

  const pageTitle = title ? `${title} | ${siteName}` : defaultTitle;

  const pageDescription = description ?? defaultDescription;

  const pageKeywords = (keywords ?? defaultKeywords).join(", ");

  const pageUrl = new URL(url ?? "/", DEFAULT_SEO.siteUrl).toString();

  const pageImage = new URL(
    image ?? defaultImage,
    DEFAULT_SEO.siteUrl,
  ).toString();

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: siteName,
    url: DEFAULT_SEO.siteUrl,
    logo: pageImage,
    image: pageImage,
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: DEFAULT_SEO.siteUrl,
  };

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: pageTitle,
    url: pageUrl,
    description: pageDescription,
  };

  return (
    <Helmet prioritizeSeoTags>
      {/* Primary */}

      <title>{pageTitle}</title>

      <meta name="description" content={pageDescription} />

      <meta name="keywords" content={pageKeywords} />

      <meta name="robots" content="index,follow" />

      <meta name="author" content={siteName} />

      <meta name="theme-color" content="#0B3D91" />

      <link rel="canonical" href={pageUrl} />

      {/* Open Graph */}

      <meta property="og:type" content={type} />

      <meta property="og:site_name" content={siteName} />

      <meta property="og:locale" content={DEFAULT_SEO.locale} />

      <meta property="og:title" content={pageTitle} />

      <meta property="og:description" content={pageDescription} />

      <meta property="og:url" content={pageUrl} />

      <meta property="og:image" content={pageImage} />

      <meta property="og:image:alt" content={pageTitle} />

      <meta property="og:image:width" content="1200" />

      <meta property="og:image:height" content="630" />

      {/* Twitter */}

      <meta name="twitter:card" content={DEFAULT_SEO.twitterCard} />

      <meta name="twitter:title" content={pageTitle} />

      <meta name="twitter:description" content={pageDescription} />

      <meta name="twitter:image" content={pageImage} />

      <meta name="twitter:image:alt" content={pageTitle} />

      <meta name="twitter:site" content="@alansartravels" />

      <meta name="twitter:creator" content="@alansartravels" />

      {/* Structured Data */}

      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>

      <script type="application/ld+json">
        {JSON.stringify(webpageSchema)}
      </script>
    </Helmet>
  );
}
