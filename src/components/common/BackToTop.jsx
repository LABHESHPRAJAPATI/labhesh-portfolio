import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { scrollToSection } from '@/lib/scroll';
import { SECTION_IDS } from '@/constants/sections';

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > window.innerHeight * 0.5);
    };

    toggleVisibility();
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleClick = () => {
    scrollToSection(SECTION_IDS.HOME);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn(
        'fixed bottom-20 right-5 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-foreground shadow-lg transition-all duration-300 hover:border-accent hover:text-accent lg:bottom-8 lg:right-8',
        visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'
      )}
      aria-label="Back to top"
    >
      <ArrowUp className="h-4 w-4" aria-hidden="true" />
    </button>
  );
}
