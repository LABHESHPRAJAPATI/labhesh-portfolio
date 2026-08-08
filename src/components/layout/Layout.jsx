import { BackToTop, ButtonRipple, CursorBubbles } from '@/components/common';
import { Header } from './Header';
import { BottomNav } from './BottomNav';

/**
 * Application shell layout.
 * Provides the fixed header, bottom desktop nav, main content area, and back-to-top button.
 */
export function Layout({ children }) {
  return (
    <>
      <a
        href="#main-content"
        className="fixed left-1/2 top-4 z-[100] -translate-x-1/2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background opacity-0 transition-opacity focus:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        Skip to main content
      </a>

      <CursorBubbles />
      <ButtonRipple />

      <Header />
      <BottomNav />
      <BackToTop />

      <main id="main-content" className="relative flex-1 pb-24 outline-none" tabIndex={-1}>
        {children}
      </main>
    </>
  );
}
