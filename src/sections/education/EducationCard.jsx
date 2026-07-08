import { memo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { AcademicHighlights } from './AcademicHighlights';

const EducationCardComponent = function EducationCard({ education, highlights }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      whileHover={
        shouldReduceMotion
          ? {}
          : { y: -6, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } }
      }
    >
      <Card
        variant="glass"
        hover={false}
        className="relative flex flex-col gap-6 overflow-hidden p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-card-hover md:p-8"
      >
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-secondary/5 blur-3xl" aria-hidden="true" />

        <div className="relative flex items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
            <GraduationCap className="h-7 w-7" aria-hidden="true" />
          </div>
          <div className="space-y-1">
            <h3 className="text-heading-4 font-semibold text-foreground sm:text-heading-3">{education.degree}</h3>
            <p className="text-lg font-medium text-primary">{education.institution}</p>
            <p className="text-sm text-muted">{education.university}</p>
          </div>
        </div>

        <div className="relative flex flex-wrap items-center gap-4 text-sm text-muted">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            {education.location}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-4 w-4" aria-hidden="true" />
            {education.year}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Award className="h-4 w-4" aria-hidden="true" />
            {education.grade}
          </span>
        </div>

        <p className="relative text-body text-muted">{education.description}</p>

        <AcademicHighlights highlights={highlights} />
      </Card>
    </motion.div>
  );
};

export const EducationCard = memo(EducationCardComponent);
