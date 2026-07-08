/**
 * Smooth scroll helpers.
 */

export const NAVBAR_HEIGHT = 80;

/**
 * Scroll to a section by id, offset by the sticky navbar height.
 */
export function scrollToSection(id, offset = NAVBAR_HEIGHT) {
  const element = document.getElementById(id);
  if (!element) return;

  const top = element.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: 'smooth' });
}

/**
 * Scroll to the top of the page.
 */
export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Get the vertical offset needed to align an element below the sticky navbar.
 */
export function getScrollOffset(element, offset = NAVBAR_HEIGHT) {
  if (!element) return 0;
  return element.getBoundingClientRect().top + window.scrollY - offset;
}
