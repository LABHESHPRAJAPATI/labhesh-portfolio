import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { RevealOnScroll } from '@/components/animation/RevealOnScroll';
import { SECTION_IDS } from '@/constants/sections';
import { experienceSection, experiences, experienceHighlights } from '@/data/experience';
import { ExperienceBackground } from './experience/ExperienceBackground';
import { TimelineNode } from './experience/TimelineNode';
import { ExperienceCard } from './experience/ExperienceCard';
import { ExperienceHighlights } from './experience/ExperienceHighlights';

/**
 * Experience section.
 * Premium timeline card with a strong visual hierarchy and polished highlights.
 */
export function Experience() {
  return (
    <section
      id={SECTION_IDS.EXPERIENCE}
      className="relative overflow-hidden py-16 md:py-24 lg:py-28"
      aria-label="Professional experience"
    >
      <ExperienceBackground />

      <Container className="relative z-10">
        <div className="flex flex-col gap-12 md:gap-16">
          <RevealOnScroll direction="up" className="mx-auto max-w-2xl text-center">
            <SectionTitle
              title={experienceSection.title}
              subtitle={experienceSection.subtitle}
              align="center"
              as="h2"
            />
          </RevealOnScroll>

          {/* Timeline */}
          <div className="relative mx-auto w-full max-w-5xl">
            {/* Animated connector line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-0 start-6 top-0 w-px origin-top bg-gradient-to-b from-primary via-secondary to-accent/30 md:start-8"
              aria-hidden="true"
            />

            {/* Timeline node */}
            <div className="absolute start-6 top-0 z-10 -translate-x-1/2 md:start-8">
              <TimelineNode isActive />
            </div>

            <div className="ps-14 md:ps-20">
              {experiences.map((experience, index) => (
                <ExperienceCard
                  key={experience.id}
                  experience={experience}
                  index={index}
                  labels={experienceSection}
                />
              ))}
            </div>
          </div>

          <RevealOnScroll direction="up">
            <div className="space-y-6">
              <h3 className="text-center text-heading-3 font-semibold text-foreground">
                {experienceSection.highlightsTitle}
              </h3>
              <ExperienceHighlights highlights={experienceHighlights} />
            </div>
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
}
