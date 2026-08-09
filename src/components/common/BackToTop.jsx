import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { scrollToSection } from '@/lib/scroll';
import { SECTION_IDS } from '@/constants/sections';

const RADIUS = 18;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setProgress(Math.min(scrollPercent, 100));
      setVisible(scrollTop > window.innerHeight * 0.5);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    scrollToSection(SECTION_IDS.HOME);
  };

  const dashOffset = CIRCUMFERENCE - (progress / 100) * CIRCUMFERENCE;

  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn(
        'fixed bottom-20 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-foreground shadow-lg transition-all duration-300 hover:border-accent hover:text-accent lg:bottom-8 lg:right-8',
        visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'
      )}
      aria-label="Back to top"
    >
      {/* Circular progress ring */}
      <svg
        className="absolute inset-0 h-full w-full -rotate-90"
        viewBox="0 0 44 44"
        aria-hidden="true"
      >
        <circle
          cx="22"
          cy="22"
          r={RADIUS}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-border"
        />
        <circle
          cx="22"
          cy="22"
          r={RADIUS}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="text-accent transition-all duration-150"
          style={{
            strokeDasharray: CIRCUMFERENCE,
            strokeDashoffset: dashOffset,
          }}
        />
      </svg>

      <ArrowUp className="relative h-4 w-4" aria-hidden="true" />
    </button>
  );
}
