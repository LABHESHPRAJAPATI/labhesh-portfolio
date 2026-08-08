import { RevealOnScroll } from '@/components/animation/RevealOnScroll';
import { SECTION_IDS } from '@/constants/sections';
import { services } from '@/data';

function ServiceCard({ service, index }) {
  return (
    <RevealOnScroll delay={index * 0.06} className="h-full">
      <div className="group relative flex h-full flex-col rounded-xl border border-border bg-surface p-6 pt-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg sm:p-8 sm:pt-9">
        {/* Top accent line */}
        <span
          className="absolute left-0 right-0 top-0 h-1 rounded-t-xl bg-accent transition-all duration-300 group-hover:h-1.5"
          aria-hidden="true"
        />

        <span className="font-display mb-4 block text-[11px] font-medium text-muted-light">
          {service.number}
        </span>
        <h3 className="font-display mb-3 text-base font-semibold transition-colors duration-300 group-hover:text-accent">
          {service.title}
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
 * Light section with card grid and top accent border.
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
              <span className="section-label">06 — Services</span>
            </RevealOnScroll>
            <RevealOnScroll delay={0.05}>
              <h2 className="section-title">
                What I Offer
              </h2>
            </RevealOnScroll>
          </div>
          <RevealOnScroll delay={0.1}>
            <p className="max-w-md text-sm leading-relaxed text-muted-light sm:text-right">
              End-to-end development services tailored to your product needs.
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
