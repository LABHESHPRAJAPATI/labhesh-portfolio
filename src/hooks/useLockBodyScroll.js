import { useEffect } from 'react';

/**
 * Lock or unlock body scroll.
 */
export function useLockBodyScroll(locked) {
  useEffect(() => {
    if (typeof document === 'undefined') return;

    const originalStyle = document.body.style.overflow;
    document.body.style.overflow = locked ? 'hidden' : originalStyle;

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [locked]);
}
