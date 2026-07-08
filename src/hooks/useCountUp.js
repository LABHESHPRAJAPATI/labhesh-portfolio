import { useState, useEffect, useRef } from 'react';

function easeOutQuart(t) {
  return 1 - Math.pow(1 - t, 4);
}

/**
 * Animates a numeric value from 0 to target.
 */
export function useCountUp(target, duration = 2000, startOnMount = true) {
  const [value, setValue] = useState(0);
  const startTimeRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!startOnMount) return;

    const animate = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutQuart(progress);

      setValue(Math.floor(eased * target));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setValue(target);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target, duration, startOnMount]);

  return value;
}
