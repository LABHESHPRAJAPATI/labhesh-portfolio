import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

/**
 * Bubble trail that follows the cursor.
 * Spawns small bubbles at the cursor position as it moves.
 */
export function CursorBubbles() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (prefersReducedMotion || isTouch) return;

    const container = containerRef.current;
    if (!container) return;

    let lastX = 0;
    let lastY = 0;
    let lastTime = 0;

    const spawnBubble = (x, y) => {
      const bubble = document.createElement('span');
      const size = Math.random() * 10 + 6;
      const duration = Math.random() * 0.8 + 0.7;
      const driftX = (Math.random() - 0.5) * 60;
      const driftY = -Math.random() * 80 - 40;

      bubble.className = 'pointer-events-none absolute rounded-full';
      bubble.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: hsl(var(--accent));
        box-shadow: 0 0 ${size * 2}px hsl(var(--accent) / 0.8);
        opacity: 0.85;
        z-index: 60;
        animation: cursorBubble ${duration}s ease-out forwards;
      `;
      bubble.style.setProperty('--tx', `${driftX}px`);
      bubble.style.setProperty('--ty', `${driftY}px`);

      container.appendChild(bubble);
      setTimeout(() => bubble.remove(), duration * 1000);
    };

    const handleMouseMove = (event) => {
      const now = Date.now();
      const distance = Math.hypot(event.clientX - lastX, event.clientY - lastY);

      // Spawn a bubble every ~15px of cursor movement and at most every 30ms
      if (distance > 15 && now - lastTime > 30) {
        spawnBubble(event.clientX, event.clientY);
        lastX = event.clientX;
        lastY = event.clientY;
        lastTime = now;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn('pointer-events-none fixed inset-0 z-[60] overflow-hidden', 'hidden lg:block')}
      aria-hidden="true"
    />
  );
}
