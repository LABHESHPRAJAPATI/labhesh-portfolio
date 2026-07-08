/**
 * Image optimization helpers.
 */

/**
 * Generate a srcSet string for responsive images.
 */
export function generateSrcSet(src, widths = [400, 800, 1200, 1600]) {
  return widths.map((width) => `${src}?w=${width} ${width}w`).join(', ');
}

/**
 * Default sizes attribute for responsive images.
 */
export function generateSizes(sizes = '(max-width: 768px) 100vw, 50vw') {
  return sizes;
}

/**
 * Create a tiny base64 SVG blur placeholder.
 */
export function createBlurPlaceholder(width = 32, height = 32, color = '#0B1120') {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}"><rect width="100%" height="100%" fill="${color}"/></svg>`;
  return `data:image/svg+xml;base64,${typeof window !== 'undefined' ? btoa(svg) : Buffer.from(svg).toString('base64')}`;
}
