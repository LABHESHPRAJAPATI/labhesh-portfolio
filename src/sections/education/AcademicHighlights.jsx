import { memo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Card } from '@/components/ui/Card';

const AcademicHighlightsComponent = function AcademicHighlights({ highlights }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="grid grid-cols-3 gap-2 sm:gap-3" aria-label="Academic highlights">
      {highlights.map((item, index) => (
        <motion.div
          key={item.label}
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: index * 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
          whileHover={shouldReduceMotion ? {} : { y: -4 }}
        >
          <Card
            variant="glass"
            hover={false}
            className="flex flex-col items-center gap-1 p-4 text-center transition-colors hover:border-primary/30 hover:bg-surface/80"
          >
            <span className="text-xl font-bold text-foreground">{item.value}</span>
            <span className="text-[10px] uppercase tracking-wider text-muted">{item.label}</span>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export const AcademicHighlights = memo(AcademicHighlightsComponent);
