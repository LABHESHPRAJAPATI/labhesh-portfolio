import { useState, useEffect, useRef } from 'react';

/**
 * Returns the current scroll progress as a value between 0 and 1.
 * Updates are batched with requestAnimationFrame to avoid excessive re-renders.
 */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  const rafRef = useRef(null);
  const latestProgressRef = useRef(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const value = docHeight > 0 ? scrollTop / docHeight : 0;
      latestProgressRef.current = Math.min(Math.max(value, 0), 1);

      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(() => {
          setProgress(latestProgressRef.current);
          rafRef.current = null;
        });
      }
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();

    return () => {
      window.removeEventListener('scroll', updateProgress);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return progress;
}
