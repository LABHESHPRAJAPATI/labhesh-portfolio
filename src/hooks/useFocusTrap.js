import { useEffect, useRef } from 'react';

const FOCUSABLE_SELECTORS = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'textarea:not([disabled])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(', ');

/**
 * Trap focus inside the referenced element while it is active.
 * Optionally focuses the first focusable element on activation.
 */
export function useFocusTrap(active, shouldFocusFirst = true) {
  const ref = useRef(null);

  useEffect(() => {
    if (!active || typeof document === 'undefined') return;

    const container = ref.current;
    if (!container) return;

    const focusableElements = Array.from(container.querySelectorAll(FOCUSABLE_SELECTORS));
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (shouldFocusFirst && firstElement) {
      firstElement.focus();
    }

    const handleKeyDown = (event) => {
      if (event.key !== 'Tab') return;

      if (focusableElements.length === 0) {
        event.preventDefault();
        return;
      }

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    container.addEventListener('keydown', handleKeyDown);
    return () => container.removeEventListener('keydown', handleKeyDown);
  }, [active, shouldFocusFirst]);

  return ref;
}
