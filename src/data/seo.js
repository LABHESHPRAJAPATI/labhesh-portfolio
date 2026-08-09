import { personal } from './personal';

/**
 * Reusable SEO metadata.
 */

export const seo = {
  name: personal.name,
  siteName: personal.name,
  defaultTitle: 'Labhesh Prajapati | Laravel & Full Stack Developer',
  titleTemplate: 'Labhesh Prajapati | Laravel & Full Stack Developer',
  defaultDescription:
    'Labhesh Prajapati is a Laravel and Full Stack Developer specializing in scalable web applications, REST APIs, third-party integrations, and modern web and mobile solutions.',
  keywordsTemplate: `%s, ${personal.name}, Laravel Developer, Full Stack Developer, PHP Developer, Vue.js Developer, React Developer, Web Developer, Surat, India`,
  url: 'https://labhesh-prajapati.vercel.app/',
  ogImage: '/og-image.png',
  twitterHandle: '',
  locale: 'en_US',
  themeColor: '#0f172a',
  author: personal.name,
};

export function generateTitle(title) {
  if (!title) return seo.defaultTitle;
  return seo.titleTemplate.replace('%s', title);
}

export function generateDescription(description) {
  return description || seo.defaultDescription;
}

export function generateKeywords(keywords) {
  return seo.keywordsTemplate.replace('%s', keywords || 'Laravel, PHP, Vue.js, MySQL, React, Full Stack Development');
}

export function generateCanonical(path = '') {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${seo.url}${cleanPath}`;
}
