import { RevealOnScroll } from '@/components/animation/RevealOnScroll';
import { SECTION_IDS } from '@/constants/sections';
import { projects } from '@/data/projects';

function ProjectCard({ project, index }) {
  const number = String(index + 1).padStart(2, '0');

  return (
    <RevealOnScroll delay={index * 0.1} className="h-full">
      <article className="card group relative flex h-full flex-col overflow-hidden hover:border-accent/40">
        {/* Large number badge */}
        <span className="font-display absolute right-5 top-4 text-[64px] font-bold leading-none text-background/10 transition-colors duration-300 group-hover:text-accent/10 sm:right-6 sm:top-5">
          {number}
        </span>

        <div className="relative flex flex-1 flex-col gap-4">
          <div>
            <span className="font-display mb-2 block text-[11px] font-medium text-muted-light">
              Featured Project
            </span>
            <h3 className="font-display text-xl font-semibold text-background transition-colors duration-300 group-hover:text-accent">
              {project.name}
            </h3>
          </div>

          <p className="flex-1 text-sm leading-relaxed text-background/70 md:text-base">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-background/20 bg-background/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.04em] text-background/80"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </article>
    </RevealOnScroll>
  );
}

/**
 * Projects section.
 * Dark section with large numbered feature cards and tech tags.
 */
export function Projects() {
  return (
    <section
      id={SECTION_IDS.PROJECTS}
      className="section section-dark"
      aria-label="Featured projects"
    >
      <div className="container-main">
        <div className="mb-12">
          <RevealOnScroll>
            <span className="section-label">05 — Projects</span>
          </RevealOnScroll>
          <RevealOnScroll delay={0.05}>
            <h2 className="section-title">
              Selected Work
            </h2>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
