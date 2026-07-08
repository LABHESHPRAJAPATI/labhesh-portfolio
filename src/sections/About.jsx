import {
  Calendar,
  Building2,
  Briefcase,
  MapPin,
  Clock,
  Globe,
} from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { RevealOnScroll } from '@/components/animation/RevealOnScroll';
import { SECTION_IDS } from '@/constants/sections';
import { personal, about } from '@/data';
import { AboutBackground } from './about/AboutBackground';
import { HighlightedText } from './about/HighlightedText';
import { AboutInfoCard } from './about/AboutInfoCard';
import { CareerGoalCard } from './about/CareerGoalCard';
import { StrengthsList } from './about/StrengthsList';
import { TechPills } from './about/TechPills';

const infoItems = [
  { icon: Calendar, label: 'Experience', value: `${personal.experience} Years` },
  { icon: Building2, label: 'Current Company', value: personal.company },
  { icon: Briefcase, label: 'Current Role', value: personal.title },
  { icon: MapPin, label: 'Location', value: personal.location },
  { icon: Clock, label: 'Availability', value: personal.availability },
  { icon: Globe, label: 'Languages', value: personal.languages.join(' / ') },
];

/**
 * About section.
 * Premium glassmorphism design driven entirely by data.
 */
export function About() {
  return (
    <section
      id={SECTION_IDS.ABOUT}
      className="relative overflow-hidden section"
      aria-label="About"
    >
      <AboutBackground />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
          {/* Left column */}
          <div className="flex flex-col gap-8">
            <RevealOnScroll direction="up">
              <SectionTitle
                title={about.title}
                subtitle={about.subtitle}
                as="h2"
              />
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={0.1}>
              <HighlightedText
                text={about.summary}
                terms={about.highlightTerms}
                className="max-w-2xl text-body-lg text-muted"
              />
            </RevealOnScroll>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {infoItems.map((item, index) => (
                <AboutInfoCard
                  key={item.label}
                  icon={item.icon}
                  label={item.label}
                  value={item.value}
                  delay={index * 0.05}
                />
              ))}
            </div>

            <CareerGoalCard title={about.careerGoalTitle} text={about.careerGoal} delay={0.3} />

            <RevealOnScroll direction="up" delay={0.4}>
              <div className="space-y-3">
                <h3 className="text-heading-4 font-semibold text-foreground">
                  {about.strengthsTitle}
                </h3>
                <StrengthsList strengths={about.strengths} delay={0.45} />
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={0.5}>
              <div className="space-y-3">
                <h3 className="text-heading-4 font-semibold text-foreground">
                  {about.technologiesTitle}
                </h3>
                <TechPills technologies={about.favoriteTechnologies} delay={0.55} />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </Container>
    </section>
  );
}
