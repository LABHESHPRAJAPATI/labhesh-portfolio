import { useEffect } from 'react';

/**
 * Adds a material-style ripple effect on click for buttons and links.
 */
export function ButtonRipple() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    const selectors = ['button', 'a', '[role="button"]'];

    const handleClick = (event) => {
      const element = event.currentTarget;
      const rect = element.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 1.5;
      const x = event.clientX - rect.left - size / 2;
      const y = event.clientY - rect.top - size / 2;

      const ripple = document.createElement('span');
      ripple.className = 'pointer-events-none absolute rounded-full opacity-40 animate-ripple';
      ripple.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: currentColor;
      `;

      const computedPosition = window.getComputedStyle(element).position;
      if (computedPosition === 'static') {
        element.style.position = 'relative';
      }
      element.style.overflow = 'hidden';

      element.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    };

    const elements = [];

    const attach = () => {
      document.querySelectorAll(selectors.join(', ')).forEach((element) => {
        if (!elements.includes(element)) {
          element.addEventListener('click', handleClick);
          elements.push(element);
        }
      });
    };

    attach();

    const observer = new MutationObserver(() => {
      attach();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      elements.forEach((element) => element.removeEventListener('click', handleClick));
    };
  }, []);

  return null;
}
