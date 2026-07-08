import { memo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Building2, MapPin, Calendar, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { CheckList } from './CheckList';
import { AchievementCards } from './AchievementCards';
import { ExperienceTech } from './ExperienceTech';

const ExperienceCardComponent = function ExperienceCard({ experience, index, labels }) {
  const shouldReduceMotion = useReducedMotion();
  const isCurrent = experience.endDate?.toLowerCase() === 'present';
  const duration = `${experience.startDate} - ${experience.endDate}`;
  const employmentType = experience.type || 'Full-Time';
  const hasAchievements = experience.achievements && experience.achievements.length > 0;
  const hasTechnologies = experience.technologies && experience.technologies.length > 0;

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={
        shouldReduceMotion
          ? {}
          : {
              y: -4,
              transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
            }
      }
      className="w-full"
    >
      <Card
        variant="glass"
        hover={false}
        className="relative flex flex-col gap-7 overflow-hidden p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-card-hover md:p-8 lg:p-10"
      >
        {/* Subtle gradient orb */}
        <div className="absolute -right-12 -top-12 h-56 w-56 rounded-full bg-primary/5 blur-3xl" aria-hidden="true" />

        {/* Header */}
        <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-glow-primary/30">
              <Building2 className="h-7 w-7" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-heading-3 font-semibold text-foreground sm:text-heading-2">{experience.role}</h3>
              <p className="text-lg font-medium text-primary">{experience.company}</p>
              <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-muted">
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                  {employmentType}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                  {duration}
                </span>
                <span className="inline-flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                  {experience.location}
                </span>
              </div>
            </div>
          </div>

          {isCurrent && (
            <Badge variant="success" size="sm">
              Current
            </Badge>
          )}
        </div>

        {/* Summary */}
        <p className="relative max-w-4xl text-body text-muted">{experience.description}</p>

        {/* Responsibilities */}
        <div className="relative space-y-4">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
            {labels.responsibilitiesLabel}
          </h4>
          <CheckList items={experience.responsibilities} />
        </div>

        {/* Achievements */}
        {hasAchievements && (
          <div className="relative space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              {labels.achievementsLabel}
            </h4>
            <AchievementCards items={experience.achievements} />
          </div>
        )}

        {/* Technologies */}
        {hasTechnologies && (
          <div className="relative space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              {labels.technologiesLabel}
            </h4>
            <ExperienceTech technologies={experience.technologies} />
          </div>
        )}
      </Card>
    </motion.div>
  );
};

export const ExperienceCard = memo(ExperienceCardComponent);
