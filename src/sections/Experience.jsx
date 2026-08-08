import { RevealOnScroll } from '@/components/animation/RevealOnScroll';
import { SECTION_IDS } from '@/constants/sections';
import { experiences } from '@/data/experience';

function ExperienceItem({ experience, index }) {
  const { startDate, endDate, role, company, description, responsibilities } = experience;

  return (
    <RevealOnScroll delay={index * 0.12}>
      <div className="relative pl-8 pb-10 last:pb-0">
        {/* Timeline dot */}
        <span
          className="absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-background"
          aria-hidden="true"
        />

        {/* Date badge */}
        <span className="font-display mb-2 inline-block rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-accent">
          {startDate} — {endDate}
        </span>

        <h3 className="font-display text-lg font-semibold md:text-xl">{role}</h3>
        <span className="mb-4 block text-sm text-muted">{company}</span>

        <p className="mb-4 text-sm leading-relaxed text-muted md:text-base">{description}</p>

        {responsibilities.length > 0 && (
          <ul className="flex flex-col gap-2">
            {responsibilities.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-muted-light">
                <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </RevealOnScroll>
  );
}

/**
 * Experience section.
 * Vertical timeline layout with accent line and date badges.
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
            <span className="section-label">04 — Experience</span>
          </RevealOnScroll>
          <RevealOnScroll delay={0.05}>
            <h2 className="section-title">
              2+ Years<br />Building<br />Solutions
            </h2>
          </RevealOnScroll>
        </div>

        <div className="lg:col-span-8">
          {/* Timeline line */}
          <div className="relative">
            <div
              className="absolute left-[5px] top-2 h-[calc(100%-16px)] w-px bg-border"
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
