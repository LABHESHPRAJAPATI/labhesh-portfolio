import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { scrollToSection } from '@/lib/scroll';
import { NAV_ITEMS } from '@/constants/navigation';
import { useActiveSection } from '@/hooks';

/**
 * Compact rounded bottom nav that matches the header and adapts to theme.
 * Visible on all screen sizes; the header hamburger menu remains as an
 * alternative on smaller screens.
 */
export function BottomNav() {
  const activeId = useActiveSection(NAV_ITEMS.map((item) => item.id));
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = (event, id) => {
    event.preventDefault();
    scrollToSection(id);
  };

  if (!mounted) return null;

  return (
    <nav
      className="fixed bottom-4 left-1/2 z-50 hidden max-w-[calc(100%-24px)] -translate-x-1/2 items-center gap-1 rounded-full border border-border/80 bg-surface/95 p-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.1)] backdrop-blur-md lg:flex lg:max-w-none"
      aria-label="Main navigation"
    >
      {NAV_ITEMS.map((item) => {
        const isActive = activeId === item.id;

        return (
          <a
            key={item.id}
            href={item.href}
            onClick={(event) => handleClick(event, item.id)}
            className={cn(
              'relative rounded-full px-2.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.05em] transition-all duration-300 font-display sm:px-4 sm:py-2 sm:text-[10px]',
              isActive
                ? 'bg-accent text-white'
                : 'text-muted hover:bg-elevated hover:text-foreground'
            )}
            aria-current={isActive ? 'page' : undefined}
          >
            {item.label}
          </a>
        );
      })}
    </nav>
  );
}
