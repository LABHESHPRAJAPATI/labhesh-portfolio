import { Container } from '@/components/layout/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { RevealOnScroll } from '@/components/animation/RevealOnScroll';
import { SECTION_IDS } from '@/constants/sections';
import { skillCategories, enjoyedTechnologies, skillsSection } from '@/data/skills';
import { SkillsBackground } from './skills/SkillsBackground';
import { CategoryCard } from './skills/CategoryCard';
import { EnjoyedTech } from './skills/EnjoyedTech';

/**
 * Skills section.
 * Category-based glass cards with circular level indicators.
 */
export function Skills() {
  return (
    <section
      id={SECTION_IDS.SKILLS}
      className="relative overflow-hidden section"
      aria-label="Skills and technologies"
    >
      <SkillsBackground />

      <Container className="relative z-10">
        <div className="flex flex-col gap-12 md:gap-16">
          <RevealOnScroll direction="up" className="mx-auto max-w-2xl text-center">
            <SectionTitle
              title={skillsSection.title}
              subtitle={skillsSection.subtitle}
              align="center"
              as="h2"
            />
          </RevealOnScroll>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category, index) => (
              <CategoryCard key={category.id} category={category} index={index} />
            ))}
          </div>

          <div className="flex flex-col items-center gap-6">
            <RevealOnScroll direction="up">
              <h3 className="text-heading-3 font-semibold text-foreground">
                {skillsSection.enjoyedTitle}
              </h3>
            </RevealOnScroll>
            <EnjoyedTech technologies={enjoyedTechnologies} />
          </div>
        </div>
      </Container>
    </section>
  );
}
