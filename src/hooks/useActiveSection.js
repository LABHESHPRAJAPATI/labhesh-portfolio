import { useState, useEffect } from 'react';

/**
 * Track which section is currently in view based on scroll position.
 * The active section is the one whose top edge is nearest to the top of
 * the viewport, considering a small offset for the fixed header.
 */
export function useActiveSection(sectionIds, options = {}) {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !sectionIds.length) return;

    const { offset = 120 } = options;

    const updateActive = () => {
      const scrollPosition = window.scrollY + offset;
      const scrollBottom = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const isNearBottom = scrollBottom >= documentHeight - 20;

      // If near the bottom of the page, the last section is active.
      if (isNearBottom) {
        setActiveId(sectionIds[sectionIds.length - 1]);
        return;
      }

      let current = sectionIds[0];
      let currentTop = Number.NEGATIVE_INFINITY;

      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (!element) return;

        const top = element.offsetTop;
        if (top <= scrollPosition && top > currentTop) {
          current = id;
          currentTop = top;
        }
      });

      setActiveId(current);
    };

    updateActive();

    window.addEventListener('scroll', updateActive, { passive: true });
    window.addEventListener('resize', updateActive);

    return () => {
      window.removeEventListener('scroll', updateActive);
      window.removeEventListener('resize', updateActive);
    };
  }, [sectionIds, options]);

  return activeId;
}
