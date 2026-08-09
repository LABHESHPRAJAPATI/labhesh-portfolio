import { ArrowRight } from 'lucide-react';
import { RevealOnScroll } from '@/components/animation/RevealOnScroll';
import { SECTION_IDS } from '@/constants/sections';
import { projects, projectsSection } from '@/data/projects';

function ProjectItem({ project, index, isLast }) {
  const number = String(index + 1).padStart(2, '0');

  return (
    <RevealOnScroll delay={index * 0.1}>
      <article className="group relative grid grid-cols-1 items-start gap-6 py-8 transition-all duration-300 sm:grid-cols-12 sm:gap-6 sm:py-10">
        {/* Vertical line */}
        {!isLast && (
          <div
            className="absolute bottom-0 left-[22px] top-[72px] hidden w-px bg-background/10 sm:block"
            aria-hidden="true"
          />
        )}

        {/* Number column */}
        <div className="relative sm:col-span-2">
          <span className="font-display flex h-11 w-11 items-center justify-center rounded-full border border-background/10 bg-background/5 text-lg font-bold text-background/40 transition-all duration-300 group-hover:border-accent/30 group-hover:text-accent sm:h-12 sm:w-12">
            {number}
          </span>
        </div>

        {/* Content column */}
        <div className="sm:col-span-6">
          <span className="font-display mb-2 block text-[10px] font-medium uppercase tracking-[0.08em] text-muted-light">
            {project.tagline}
          </span>
          <h3 className="font-display mb-3 flex items-center gap-2 text-xl font-semibold text-background transition-colors duration-300 group-hover:text-accent sm:text-2xl">
            {project.name}
            <ArrowRight className="h-4 w-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1" aria-hidden="true" />
          </h3>
          <p className="text-sm leading-relaxed text-background/70 md:text-base">
            {project.description}
          </p>
        </div>

        {/* Tags column */}
        <div className="sm:col-span-4 sm:text-right">
          <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.1em] text-muted-light sm:hidden">
            Technologies
          </span>
          <div className="flex flex-wrap gap-2 sm:justify-end">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-background/10 bg-background/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.04em] text-background/60"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom border */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px bg-background/10 transition-colors duration-300 group-hover:bg-accent/30"
          aria-hidden="true"
        />
      </article>
    </RevealOnScroll>
  );
}

/**
 * Projects section.
 * Dark section with a stylish editorial numbered list.
 */
export function Projects() {
  return (
    <section
      id={SECTION_IDS.PROJECTS}
      className="section section-dark"
      aria-label="Featured projects"
    >
      <div className="container-main">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <RevealOnScroll>
              <span className="section-label">05 — PROJECTS</span>
            </RevealOnScroll>
            <RevealOnScroll delay={0.05}>
              <h2 className="section-title">Selected Work</h2>
            </RevealOnScroll>
            <RevealOnScroll delay={0.08}>
              <div className="mt-4 h-1 w-16 bg-accent" aria-hidden="true" />
            </RevealOnScroll>
          </div>
          <RevealOnScroll delay={0.1}>
            <p className="max-w-md text-sm leading-relaxed text-muted-light sm:text-right">
              {projectsSection.subtitle}
            </p>
          </RevealOnScroll>
        </div>

        <div>
          {projects.map((project, index) => (
            <ProjectItem
              key={project.id}
              project={project}
              index={index}
              isLast={index === projects.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
