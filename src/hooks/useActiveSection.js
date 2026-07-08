import { useState, useEffect } from 'react';

/**
 * Track which section is currently in view using IntersectionObserver.
 */
export function useActiveSection(sectionIds, options = {}) {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !sectionIds.length) return;

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
        ...options,
      }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [sectionIds, options]);

  return activeId;
}
