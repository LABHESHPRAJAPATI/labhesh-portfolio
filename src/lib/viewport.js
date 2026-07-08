/**
 * Viewport detection helpers.
 */

export function getViewportSize() {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

/**
 * Check if an element is currently in the viewport.
 */
export function isInViewport(element, threshold = 0) {
  if (!element) return false;
  const rect = element.getBoundingClientRect();
  return (
    rect.top < window.innerHeight - threshold &&
    rect.bottom > threshold
  );
}

/**
 * Check if the current viewport width is considered mobile.
 */
export function isMobile(width = window.innerWidth) {
  return width < 768;
}
