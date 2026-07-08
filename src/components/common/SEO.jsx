import { Helmet } from 'react-helmet-async';
import { personal } from '@/data/personal';
import { socials } from '@/data/socials';
import {
  siteConfig,
  generateTitle,
  generateDescription,
  generateKeywords,
  generateCanonical,
} from '@/config/site';

function generatePersonSchema(pathname = '') {
  const canonical = generateCanonical(pathname);
  const sameAs = socials
    .map((s) => s.url)
    .filter(Boolean)
    .filter((url) => !url.startsWith('mailto:') && !url.startsWith('tel:'));

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: personal.name,
    jobTitle: personal.title,
    worksFor: {
      '@type': 'Organization',
      name: personal.company,
    },
    url: canonical,
    image: `${siteConfig.url}${personal.image}`,
    email: `mailto:${personal.email}`,
    telephone: personal.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Surat',
      addressRegion: 'Gujarat',
      addressCountry: 'India',
    },
    knowsLanguage: personal.languages,
    sameAs,
  };
}

/**
 * Reusable SEO component.
 */
export function SEO({
  title,
  description,
  keywords,
  image,
  pathname = '',
  noindex = false,
  type = 'website',
}) {
  const pageTitle = generateTitle(title);
  const pageDescription = generateDescription(description);
  const pageKeywords = generateKeywords(keywords);
  const canonical = generateCanonical(pathname);
  const ogImage = image || `${siteConfig.url}${siteConfig.ogImage}`;
  const schema = generatePersonSchema(pathname);

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      <link rel="canonical" href={canonical} />
      <meta name="theme-color" content={siteConfig.themeColor} />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content={siteConfig.locale} />
      <meta property="og:site_name" content={siteConfig.siteName} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={siteConfig.twitterHandle} />
      <meta name="twitter:creator" content={siteConfig.twitterHandle} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={ogImage} />

      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
