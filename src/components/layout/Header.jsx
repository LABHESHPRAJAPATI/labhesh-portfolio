import { useState } from 'react';
import { Moon, Palette, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';
import { scrollToSection } from '@/lib/scroll';
import { SECTION_IDS } from '@/constants/sections';
import { useTheme } from '@context/ThemeContext';
import { personal } from '@/data/personal';
import { NAV_ITEMS } from '@/constants/navigation';

function PaletteToggle() {
  const { palette, togglePalette } = useTheme();
  const isClassic = palette === 'classic';

  return (
    <button
      type="button"
      onClick={togglePalette}
      className="relative flex h-8 w-14 items-center rounded-full border border-border bg-elevated p-1 transition-colors duration-300 hover:border-accent"
      aria-label={isClassic ? 'Switch to modern palette' : 'Switch to classic palette'}
      aria-pressed={isClassic}
    >
      <span className="sr-only">
        {isClassic ? 'Switch to modern palette' : 'Switch to classic palette'}
      </span>

      <span className="absolute left-2 text-[8px] font-bold uppercase tracking-wider text-foreground/60">
        M
      </span>
      <span className="absolute right-2 text-[8px] font-bold uppercase tracking-wider text-foreground/60">
        C
      </span>

      <span
        className={cn(
          'relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-foreground text-background shadow-sm transition-transform duration-300',
          isClassic ? 'translate-x-6' : 'translate-x-0'
        )}
      >
        <Palette className="h-3 w-3" aria-hidden="true" />
      </span>
    </button>
  );
}

function ModeToggle() {
  const { mode, toggleMode } = useTheme();
  const isDark = mode === 'dark';

  return (
    <button
      type="button"
      onClick={toggleMode}
      className="relative flex h-8 w-14 items-center rounded-full border border-border bg-elevated p-1 transition-colors duration-300 hover:border-accent"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
    >
      <span className="sr-only">
        {isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      </span>

      <span className="absolute left-2 flex items-center justify-center text-foreground/60">
        <Sun className="h-3.5 w-3.5" aria-hidden="true" />
      </span>
      <span className="absolute right-2 flex items-center justify-center text-foreground/60">
        <Moon className="h-3.5 w-3.5" aria-hidden="true" />
      </span>

      <span
        className={cn(
          'relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-foreground text-background shadow-sm transition-transform duration-300',
          isDark ? 'translate-x-6' : 'translate-x-0'
        )}
      >
        {isDark ? (
          <Moon className="h-3.5 w-3.5" aria-hidden="true" />
        ) : (
          <Sun className="h-3.5 w-3.5" aria-hidden="true" />
        )}
      </span>
    </button>
  );
}

/**
 * Floating rounded header that adapts to palette and mode.
 * Matches the bottom nav pill style.
 */
export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { mode } = useTheme();
  const isDarkMode = mode === 'dark';

  const handleNavClick = (event, id) => {
    event.preventDefault();
    setIsMobileMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <>
      <header className="fixed left-1/2 top-4 z-[100] w-[calc(100%-32px)] max-w-[1100px] -translate-x-1/2 rounded-full border border-border/80 bg-surface/95 px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.1)] backdrop-blur-md md:px-6">
        <div className="flex items-center justify-between">
          <a
            href={`#${SECTION_IDS.HOME}`}
            onClick={(event) => handleNavClick(event, SECTION_IDS.HOME)}
            className="group flex items-center gap-2.5"
            aria-label={`${personal.name} - Back to home`}
          >
            {/* Brand icon badge */}
            <img
              src={isDarkMode ? '/lp-icon-cream.svg' : '/lp-icon-navy.svg'}
              alt={personal.name}
              className="h-9 w-9 rounded-full"
            />

            {/* Desktop: brand name */}
            <span className="hidden text-lg font-semibold tracking-[-0.03em] text-foreground sm:inline">
              {personal.name}
              <span className="ml-0.5 text-accent">.</span>
            </span>
          </a>

          <div className="flex items-center gap-3">
            <PaletteToggle />
            <ModeToggle />

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="flex h-8 w-8 flex-col items-center justify-center gap-1 rounded-full text-foreground lg:hidden"
              aria-label="Open menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="block h-0.5 w-4 rounded-full bg-current" />
              <span className="block h-0.5 w-4 rounded-full bg-current" />
              <span className="block h-0.5 w-4 rounded-full bg-current" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          'fixed inset-0 z-[200] lg:hidden',
          isMobileMenuOpen ? 'visible' : 'invisible'
        )}
      >
        {/* Backdrop */}
        <div
          className={cn(
            'absolute inset-0 bg-foreground/60 backdrop-blur-sm transition-opacity duration-300',
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          )}
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Slide-in panel */}
        <div
          className={cn(
            'absolute right-0 top-0 bottom-0 w-[min(320px,85vw)] bg-background shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]',
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <div className="flex h-full flex-col p-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <span className="font-display text-sm font-semibold uppercase tracking-[0.1em] text-muted">
                Menu
              </span>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors duration-300 hover:border-accent hover:text-accent"
                aria-label="Close menu"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Navigation */}
            <nav className="mt-10 flex flex-col gap-1" aria-label="Mobile navigation">
              {NAV_ITEMS.map((item, index) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(event) => handleNavClick(event, item.id)}
                  className="group flex items-center justify-between rounded-xl px-4 py-3.5 transition-colors duration-300 hover:bg-elevated"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-display text-[10px] font-medium text-muted">
                      {item.number}
                    </span>
                    <span className="font-display text-sm font-semibold uppercase tracking-[0.06em] text-foreground transition-colors duration-300 group-hover:text-accent">
                      {item.label}
                    </span>
                  </div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              ))}
            </nav>

            {/* Footer info */}
            <div className="mt-auto border-t border-border pt-6">
              <p className="mb-3 text-xs text-muted">
                {personal.title}
              </p>
              <a
                href={`mailto:${personal.email}`}
                className="text-sm font-medium text-foreground transition-colors duration-300 hover:text-accent"
              >
                {personal.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
