import { personal } from './personal';

/**
 * Reusable SEO metadata.
 */

export const seo = {
  name: personal.name,
  siteName: `${personal.name} — Portfolio`,
  defaultTitle: `${personal.name} | ${personal.title}`,
  titleTemplate: `%s | ${personal.name}`,
  defaultDescription: `${personal.name} — ${personal.title} with ${personal.experience} years of experience building scalable web applications with Laravel, PHP, Vue.js, and MySQL.`,
  keywordsTemplate: `%s, ${personal.name}, ${personal.title}, Laravel Developer, PHP Developer, Vue.js Developer, Full Stack Developer, Web Developer, Surat, India`,
  url: 'https://labheshprajapati.dev',
  ogImage: '/og-image.png',
  twitterHandle: '',
  locale: 'en_US',
  themeColor: '#0a0f1c',
};

export function generateTitle(title) {
  if (!title) return seo.defaultTitle;
  return seo.titleTemplate.replace('%s', title);
}

export function generateDescription(description) {
  return description || seo.defaultDescription;
}

export function generateKeywords(keywords) {
  return seo.keywordsTemplate.replace('%s', keywords || 'Laravel, PHP, Vue.js, MySQL');
}

export function generateCanonical(path = '') {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${seo.url}${cleanPath}`;
}
