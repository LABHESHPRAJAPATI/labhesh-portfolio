import { Check } from 'lucide-react';
import { RevealOnScroll } from '@/components/animation/RevealOnScroll';
import { SECTION_IDS } from '@/constants/sections';
import { experiences } from '@/data/experience';

function ExperienceItem({ experience, index }) {
  const { startDate, endDate, role, company, description, responsibilities } = experience;

  return (
    <RevealOnScroll delay={index * 0.12}>
      <div className="relative pl-10 pb-12 last:pb-0">
        {/* Timeline dot with ring */}
        <span
          className="absolute left-0 top-2 flex h-4 w-4 items-center justify-center rounded-full border-2 border-accent bg-background"
          aria-hidden="true"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        </span>

        {/* Date badge */}
        <span className="font-display mb-3 inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-accent">
          {startDate} — {endDate}
        </span>

        <div className="mb-4">
          <h3 className="font-display text-xl font-semibold md:text-2xl">{role}</h3>
          <span className="block text-sm font-medium text-muted">{company}</span>
        </div>

        <p className="mb-5 text-sm leading-relaxed text-muted md:text-base">{description}</p>

        {responsibilities.length > 0 && (
          <>
            <span className="font-display mb-3 block text-[11px] font-semibold uppercase tracking-[0.1em] text-accent">
              Key Responsibilities
            </span>
            <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {responsibilities.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-light">
                  <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Check className="h-2.5 w-2.5" aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </RevealOnScroll>
  );
}

/**
 * Experience section.
 * Vertical timeline layout with gradient accent line and refined date badges.
 */
export function Experience() {
  return (
    <section
      id={SECTION_IDS.EXPERIENCE}
      className="section bg-background"
      aria-label="Professional experience"
    >
      <div className="container-main grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <RevealOnScroll>
            <span className="section-label">04 — EXPERIENCE</span>
          </RevealOnScroll>
          <RevealOnScroll delay={0.05}>
            <h2 className="section-title">
              2 Years
              <br />
              Building
              <br />
              Solutions
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.08}>
            <div className="mt-4 h-1 w-16 bg-accent" aria-hidden="true" />
          </RevealOnScroll>
        </div>

        <div className="lg:col-span-8">
          {/* Timeline line */}
          <div className="relative">
            <div
              className="absolute left-[7px] top-2 h-[calc(100%-24px)] w-px bg-gradient-to-b from-accent via-border to-transparent"
              aria-hidden="true"
            />
            {experiences.map((experience, index) => (
              <ExperienceItem
                key={experience.id}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
