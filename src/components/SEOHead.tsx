import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  keywords?: string;
  schema?: Record<string, unknown> | Record<string, unknown>[];
  noindex?: boolean;
}

const SITE_URL = 'https://astasymantenimiento.com';
const SITE_NAME = 'Astas y Mantenimiento';
const DEFAULT_IMAGE = `${SITE_URL}/logo.png`;
const DEFAULT_KEYWORDS = 'astas banderas México, fabricación de astas, mantenimiento de astas monumentales, instalación de astas en CDMX, astas para banderas Estado de México, mantenimiento correctivo de astas, ingeniería de astas monumentales, astas banderas nacionales, licitaciones de astas México';

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  path = '/',
  ogImage = DEFAULT_IMAGE,
  ogType = 'website',
  keywords = DEFAULT_KEYWORDS,
  schema,
  noindex = false,
}) => {
  const url = path === '/' ? SITE_URL : `${SITE_URL}${path}`;
  const fullTitle = path === '/'
    ? title
    : `${title} | ${SITE_NAME}`;

  return (
    <Helmet>
      {/* Título único por página */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      )}
      <meta name="author" content={SITE_NAME} />

      {/* Canonical único por página */}
      <link rel="canonical" href={url} />

      {/* Hreflang — región MX */}
      <link rel="alternate" hreflang="es-MX" href={url} />
      <link rel="alternate" hreflang="x-default" href={`${SITE_URL}${path}`} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:secure_url" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:type" content={ogType} />
      <meta property="og:locale" content="es_MX" />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={fullTitle} />

      {/* Schema JSON-LD opcional por página */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};
