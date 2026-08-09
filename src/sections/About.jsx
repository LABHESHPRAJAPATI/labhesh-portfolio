import { RevealOnScroll } from '@/components/animation/RevealOnScroll';
import { SECTION_IDS } from '@/constants/sections';
import { about } from '@/data';

const HIGHLIGHTS = [
  { value: '2+', label: 'Years Experience' },
  { value: 'Laravel', label: 'Backend Specialist' },
];

/**
 * About section.
 * Light section with highlight cards and editorial text.
 */
export function About() {
  return (
    <section
      id={SECTION_IDS.ABOUT}
      className="section bg-background"
      aria-label="About"
    >
      <div className="container-main grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <RevealOnScroll>
            <span className="section-label">02 — {about.subtitle}</span>
          </RevealOnScroll>
          <RevealOnScroll delay={0.05}>
            <h2 className="section-title">
              Building reliable digital solutions with Laravel and modern web technologies.
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {HIGHLIGHTS.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-border bg-surface p-5 text-center transition-all duration-300 hover:border-accent/40"
                >
                  <span className="font-display block text-xl font-bold text-foreground">
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

        <div className="lg:col-span-7 lg:pt-12">
          {about.paragraphs.map((paragraph, index) => (
            <RevealOnScroll key={index} delay={0.1 + index * 0.05}>
              <p className="mb-6 text-base leading-relaxed text-muted-light md:text-lg">
                {paragraph}
              </p>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
