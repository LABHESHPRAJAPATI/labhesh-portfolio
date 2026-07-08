import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, AlignLeft, AlignRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { scrollToSection } from '@/lib/scroll';
import { NAV_ITEMS } from '@/constants/navigation';
import { SECTIONS, SECTION_IDS } from '@/constants/sections';
import {
  useActiveSection,
  useClickOutside,
  useFocusTrap,
  useKeyPress,
  useLockBodyScroll,
  useMediaQuery,
  useReducedMotion,
  useScrollDirection,
} from '@/hooks';
import { useTheme } from '@context/ThemeContext';
import { personal } from '@/data/personal';
import { Container } from './Container';

const SCROLL_HIDE_THRESHOLD = 100;

function NavLink({ item, isActive, onClick }) {
  return (
    <a
      href={`#${item.id}`}
      onClick={onClick}
      className={cn(
        'relative rounded-md px-1 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        isActive ? 'text-foreground' : 'text-muted hover:text-foreground'
      )}
      aria-current={isActive ? 'page' : undefined}
    >
      {item.label}
      {isActive && (
        <motion.div
          layoutId="activeNavUnderline"
          className="absolute -bottom-1 inset-x-0 h-0.5 rounded-full bg-gradient-to-r from-primary to-secondary"
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          aria-hidden="true"
        />
      )}
    </a>
  );
}

function ThemeToggle({ className }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const Icon = isDark ? Sun : Moon;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        'flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-all duration-200 hover:bg-surface hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        className
      )}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
    >
      <Icon className="h-[1.125rem] w-[1.125rem]" aria-hidden="true" />
    </button>
  );
}

function DirectionToggle({ className }) {
  const { direction, toggleDirection } = useTheme();
  const isLtr = direction === 'ltr';
  const Icon = isLtr ? AlignRight : AlignLeft;

  return (
    <button
      type="button"
      onClick={toggleDirection}
      className={cn(
        'flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-all duration-200 hover:bg-surface hover:text-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        className
      )}
      aria-label={isLtr ? 'Switch to RTL' : 'Switch to LTR'}
      title={isLtr ? 'RTL' : 'LTR'}
    >
      <Icon className="h-[1.125rem] w-[1.125rem]" aria-hidden="true" />
    </button>
  );
}

export function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollDirection = useScrollDirection(10);
  const activeId = useActiveSection(SECTIONS);
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const shouldReduceMotion = useReducedMotion();
  const { direction } = useTheme();
  const menuRef = useFocusTrap(isMobileMenuOpen, true);
  const toggleRef = useRef(null);

  useLockBodyScroll(isMobileMenuOpen);
  useClickOutside(menuRef, (event) => {
    if (toggleRef.current?.contains(event.target)) return;
    setIsMobileMenuOpen(false);
  });
  useKeyPress('Escape', () => setIsMobileMenuOpen(false));

  // Close mobile menu on desktop breakpoint
  useEffect(() => {
    if (isDesktop && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [isDesktop, isMobileMenuOpen]);

  // Track scroll state for glass effect
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeSection = activeId || SECTION_IDS.HOME;

  const handleNavClick = (event, id) => {
    event.preventDefault();
    setIsMobileMenuOpen(false);

    if (location.pathname !== '/') {
      return;
    }

    scrollToSection(id);
  };

  const isHidden =
    scrollDirection === 'down' &&
    isScrolled &&
    !isMobileMenuOpen &&
    typeof window !== 'undefined' &&
    window.scrollY > SCROLL_HIDE_THRESHOLD;

  const isRTL = direction === 'rtl';
  const menuAnimation = shouldReduceMotion
    ? {}
    : {
        closed: { opacity: 0, x: isRTL ? '-100%' : '100%' },
        open: { opacity: 1, x: 0 },
      };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: isHidden ? '-100%' : 0,
          opacity: 1,
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          'fixed top-0 inset-x-0 z-50 transition-colors duration-300',
          isScrolled ? 'glass border-b border-black/5 bg-background/70 dark:border-white/[0.04]' : 'bg-transparent'
        )}
      >
        <Container>
          <nav
            className="flex h-20 items-center justify-between"
            aria-label="Main navigation"
          >
            <Link
              to="/"
              className="rounded-md text-lg font-bold tracking-tight text-foreground transition-opacity hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              onClick={() => scrollToSection(SECTION_IDS.HOME)}
            >
              {personal.name}
            </Link>

            {/* Desktop navigation */}
            <div className="hidden items-center gap-6 lg:flex">
              <ul className="flex items-center gap-8">
                {NAV_ITEMS.map((item) => (
                  <li key={item.id}>
                    <NavLink
                      item={item}
                      isActive={activeSection === item.id}
                      onClick={(event) => handleNavClick(event, item.id)}
                    />
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-1 border-s border-border ps-4">
                <DirectionToggle />
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile controls */}
            <div className="flex items-center gap-1 lg:hidden">
              <DirectionToggle />
              <ThemeToggle />

              <button
                ref={toggleRef}
                type="button"
                className="relative z-[60] flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full text-foreground transition-all duration-200 hover:bg-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                onClick={() => setIsMobileMenuOpen((open) => !open)}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                <motion.span
                  animate={
                    isMobileMenuOpen
                      ? { rotate: 45, y: 7, width: 24 }
                      : { rotate: 0, y: 0, width: 24 }
                  }
                  className="block h-0.5 rounded-full bg-current"
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  aria-hidden="true"
                />
                <motion.span
                  animate={
                    isMobileMenuOpen
                      ? { opacity: 0, width: 0 }
                      : { opacity: 1, width: 16 }
                  }
                  className="block h-0.5 rounded-full bg-current"
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  aria-hidden="true"
                />
                <motion.span
                  animate={
                    isMobileMenuOpen
                      ? { rotate: -45, y: -7, width: 24 }
                      : { rotate: 0, y: 0, width: 24 }
                  }
                  className="block h-0.5 rounded-full bg-current"
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  aria-hidden="true"
                />
              </button>
            </div>
          </nav>
        </Container>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              ref={menuRef}
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuAnimation}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="absolute end-0 top-0 h-full w-[min(80vw,20rem)] glass-strong p-6 pt-24"
            >
              <ul className="flex flex-col gap-2">
                {NAV_ITEMS.map((item, index) => (
                  <motion.li
                    key={item.id}
                    initial={shouldReduceMotion ? {} : { opacity: 0, x: isRTL ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: shouldReduceMotion ? 0 : index * 0.05,
                      duration: 0.3,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <a
                      href={`#${item.id}`}
                      onClick={(event) => handleNavClick(event, item.id)}
                      className={cn(
                        'block w-full rounded-lg px-4 py-3 text-start text-lg font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                        activeSection === item.id
                          ? 'bg-surface text-foreground'
                          : 'text-muted hover:bg-surface hover:text-foreground'
                      )}
                      aria-current={activeSection === item.id ? 'page' : undefined}
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
