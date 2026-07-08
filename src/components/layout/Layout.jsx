import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollProgress } from '@/components/common/ScrollProgress';
import { BackToTop } from '@/components/common/BackToTop';

/**
 * Application shell layout.
 * Provides header, main content area, footer, scroll progress, and back-to-top.
 */
export function Layout({ children }) {
  return (
    <>
      <a
        href="#main-content"
        className="fixed left-1/2 top-4 z-[100] -translate-x-1/2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white opacity-0 shadow-lg transition-opacity focus:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        Skip to main content
      </a>
      <ScrollProgress />
      <Header />

      <main id="main-content" className="relative flex-1 outline-none" tabIndex={-1}>
        {children}
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
