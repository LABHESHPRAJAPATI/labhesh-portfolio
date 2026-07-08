import { Container } from '@/components/layout/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { RevealOnScroll } from '@/components/animation/RevealOnScroll';
import { SECTION_IDS } from '@/constants/sections';
import { educationSection, education, academicHighlights } from '@/data/education';
import { EducationBackground } from './education/EducationBackground';
import { EducationCard } from './education/EducationCard';

/**
 * Education section.
 * Elegant education card with academic highlights.
 */
export function Education() {
  return (
    <section
      id={SECTION_IDS.EDUCATION}
      className="relative overflow-hidden section"
      aria-label="Education"
    >
      <EducationBackground />

      <Container className="relative z-10">
        <div className="flex flex-col gap-12 md:gap-16">
          <RevealOnScroll direction="up" className="mx-auto max-w-2xl text-center">
            <SectionTitle
              title={educationSection.title}
              subtitle={educationSection.subtitle}
              align="center"
              as="h2"
            />
          </RevealOnScroll>

          <div className="mx-auto w-full max-w-3xl">
            <EducationCard education={education[0]} highlights={academicHighlights} />
          </div>
        </div>
      </Container>
    </section>
  );
}
