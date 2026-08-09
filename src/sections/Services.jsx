import { RevealOnScroll } from '@/components/animation/RevealOnScroll';
import { SECTION_IDS } from '@/constants/sections';
import { services, servicesSection } from '@/data';

function ServiceCard({ service, index }) {
  return (
    <RevealOnScroll delay={index * 0.06} className="h-full">
      <div className="group relative flex h-full flex-col border-t-2 border-border bg-surface p-6 pt-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-t-accent hover:bg-surface/80 hover:shadow-md sm:p-8 sm:pt-9">
        <span className="font-display mb-4 block text-[11px] font-medium text-muted-light">
          {service.number}
        </span>
        <h3 className="font-display relative mb-3 inline-block text-base font-semibold transition-colors duration-300 group-hover:text-accent">
          {service.title}
          <span
            className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full"
            aria-hidden="true"
          />
        </h3>
        <p className="flex-1 text-sm leading-relaxed text-muted-light">
          {service.description}
        </p>
      </div>
    </RevealOnScroll>
  );
}

/**
 * Services section.
 * Light section with top-border cards and underline hover accent.
 */
export function Services() {
  return (
    <section
      id={SECTION_IDS.SERVICES}
      className="section bg-background"
      aria-label="Services"
    >
      <div className="container-main">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <RevealOnScroll>
              <span className="section-label">06 — SERVICES</span>
            </RevealOnScroll>
            <RevealOnScroll delay={0.05}>
              <h2 className="section-title">What I Offer</h2>
            </RevealOnScroll>
            <RevealOnScroll delay={0.08}>
              <div className="mt-4 h-1 w-16 bg-accent" aria-hidden="true" />
            </RevealOnScroll>
          </div>
          <RevealOnScroll delay={0.1}>
            <p className="max-w-md text-sm leading-relaxed text-muted-light sm:text-right">
              {servicesSection.subtitle}
            </p>
          </RevealOnScroll>
        </div>

        <div className="grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
