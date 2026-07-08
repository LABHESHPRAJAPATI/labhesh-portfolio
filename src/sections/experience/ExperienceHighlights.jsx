import { memo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Calendar, Briefcase, Award, Code } from 'lucide-react';
import { Card } from '@/components/ui/Card';

const iconMap = {
  'Years Experience': Calendar,
  Started: Calendar,
  Projects: Briefcase,
  Specialist: Award,
  Developer: Code,
  Building: Code,
};

const ExperienceHighlightsComponent = function ExperienceHighlights({ highlights }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4" aria-label="Professional highlights">
      {highlights.map((item, index) => {
        const Icon = iconMap[item.label] || Award;

        return (
          <motion.div
            key={item.label}
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={shouldReduceMotion ? {} : { y: -4 }}
          >
            <Card
              variant="glass"
              hover={false}
              className="flex flex-col items-center gap-3 p-5 text-center transition-all duration-300 hover:border-primary/30 hover:shadow-card-hover"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary shadow-glow-primary/30">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="text-2xl font-bold text-foreground">{item.value}</p>
              <p className="text-caption text-muted">{item.label}</p>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
};

export const ExperienceHighlights = memo(ExperienceHighlightsComponent);
