import { useState, useEffect, useRef } from 'react';

/**
 * Detects the current vertical scroll direction.
 * Returns 'up' or 'down'.
 */
export function useScrollDirection(threshold = 10) {
  const [direction, setDirection] = useState('up');
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const diff = currentScrollY - lastScrollY.current;

        if (Math.abs(diff) > threshold) {
          setDirection(diff > 0 ? 'down' : 'up');
          lastScrollY.current = currentScrollY;
        }

        ticking.current = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return direction;
}
