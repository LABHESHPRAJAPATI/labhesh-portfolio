import { ArrowUp } from 'lucide-react';
import { Container } from './Container';
import { SocialLinks } from '@/components/common/SocialLinks';
import { scrollToSection, scrollToTop } from '@/lib/scroll';
import { NAV_ITEMS } from '@/constants/navigation';
import { personal } from '@/data/personal';
import { socials } from '@/data/socials';

/**
 * Premium footer.
 * Includes logo, tagline, navigation, social links, back-to-top, and copyright.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-surface/50 py-12 backdrop-blur-md">
      <Container>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            <div className="space-y-1">
              <p className="text-xl font-bold tracking-tight text-foreground">
                {personal.name}
              </p>
              <p className="text-sm text-primary">{personal.title}</p>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              {personal.footer.tagline}
            </p>
            <SocialLinks socials={socials} />
          </div>

          {/* Quick links */}
          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Quick Links
            </p>
            <nav aria-label="Footer navigation">
              <ul className="flex flex-col gap-2">
                {NAV_ITEMS.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(event) => {
                        event.preventDefault();
                        scrollToSection(item.id);
                      }}
                      className="rounded text-sm text-muted transition-colors hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Back to top / credits */}
          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Back to Top
            </p>
            <button
              type="button"
              onClick={scrollToTop}
              className="group inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm text-foreground shadow-glass transition-all hover:border-primary/30 hover:bg-surface/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" aria-hidden="true" />
              Top
            </button>
            <p className="text-xs text-muted">{personal.footer.credits}</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted">
            © {year} {personal.footer.copyrightName}. All rights reserved.
          </p>
          <p className="text-sm text-muted">{personal.footer.closingNote}</p>
        </div>
      </Container>
    </footer>
  );
}
