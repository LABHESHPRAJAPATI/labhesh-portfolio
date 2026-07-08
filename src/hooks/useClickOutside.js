import { useEffect } from 'react';

/**
 * Trigger a callback when a click happens outside the referenced element.
 */
export function useClickOutside(ref, handler) {
  useEffect(() => {
    if (typeof document === 'undefined') return;

    const listener = (event) => {
      const element = ref?.current;
      if (!element || element.contains(event.target)) return;
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}
