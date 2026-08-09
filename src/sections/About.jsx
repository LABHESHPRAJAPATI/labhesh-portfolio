import { RevealOnScroll } from '@/components/animation/RevealOnScroll';
import { SECTION_IDS } from '@/constants/sections';
import { about } from '@/data';

const HIGHLIGHTS = [
  { value: '2+', label: 'Years Experience' },
  { value: 'Laravel', label: 'Backend Specialist' },
];

/**
 * About section.
 * Light section with vertical divider, refined highlight cards, and editorial text.
 */
export function About() {
  return (
    <section
      id={SECTION_IDS.ABOUT}
      className="section bg-background"
      aria-label="About"
    >
      <div className="container-main">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Left column */}
          <div className="lg:col-span-5">
            <RevealOnScroll>
              <span className="section-label">02 — {about.subtitle}</span>
            </RevealOnScroll>
            <RevealOnScroll delay={0.05}>
              <h2 className="section-title">
                Building reliable digital solutions with Laravel and modern web technologies.
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={0.08}>
              <div className="mt-4 h-1 w-16 bg-accent" aria-hidden="true" />
            </RevealOnScroll>

            <RevealOnScroll delay={0.12}>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {HIGHLIGHTS.map((item) => (
                  <div
                    key={item.label}
                    className="group relative overflow-hidden rounded-xl border border-border bg-surface p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-md"
                  >
                    <span
                      className="absolute left-0 right-0 top-0 h-1 bg-accent transition-all duration-300 group-hover:h-1.5"
                      aria-hidden="true"
                    />
                    <span className="font-display block text-2xl font-bold text-foreground">
                      {item.value}
                    </span>
                    <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.06em] text-muted-light">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>

          {/* Vertical divider */}
          <div
            className="hidden lg:col-span-1 lg:flex lg:justify-center"
            aria-hidden="true"
          >
            <div className="h-full w-px bg-gradient-to-b from-transparent via-border to-transparent" />
          </div>

          {/* Right column */}
          <div className="lg:col-span-6">
            {about.paragraphs.map((paragraph, index) => (
              <RevealOnScroll key={index} delay={0.1 + index * 0.05}>
                <p className="mb-6 text-base leading-relaxed text-muted-light md:text-lg">
                  {paragraph}
                </p>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
