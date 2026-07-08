import { personal } from './personal';

/**
 * Reusable SEO metadata.
 */

export const seo = {
  name: personal.name,
  siteName: `${personal.name} — Portfolio`,
  defaultTitle: `${personal.name} | ${personal.title}`,
  titleTemplate: `%s | ${personal.name}`,
  defaultDescription: `${personal.name} — ${personal.title} with ${personal.experience} years of experience building scalable web applications with Laravel, PHP, Vue.js, React, and MySQL.`,
  keywordsTemplate: `%s, ${personal.name}, ${personal.title}, Laravel Developer, PHP Developer, Vue.js Developer, Full Stack Developer, Web Developer, Surat, India`,
  url: 'https://example.com',
  ogImage: '/og-image.png',
  twitterHandle: '',
  locale: 'en_US',
  themeColor: '#050816',
};

export function generateTitle(title) {
  if (!title) return seo.defaultTitle;
  return seo.titleTemplate.replace('%s', title);
}

export function generateDescription(description) {
  return description || seo.defaultDescription;
}

export function generateKeywords(keywords) {
  return seo.keywordsTemplate.replace('%s', keywords || 'Laravel, PHP, React, MySQL');
}

export function generateCanonical(path = '') {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${seo.url}${cleanPath}`;
}
