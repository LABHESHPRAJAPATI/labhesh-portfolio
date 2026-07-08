import { memo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const ProjectFeatureChipsComponent = function ProjectFeatureChips({ features }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="flex flex-wrap gap-2" aria-label="Project features">
      {features.map((feature, index) => (
        <motion.div
          key={feature}
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.3,
            delay: index * 0.05,
            ease: [0.16, 1, 0.3, 1],
          }}
          whileHover={shouldReduceMotion ? {} : { y: -2 }}
          className="group inline-flex items-center gap-1.5 rounded-full border border-secondary/20 bg-secondary/5 px-3 py-1.5 text-sm text-foreground backdrop-blur-sm transition-colors hover:bg-secondary/10"
        >
          <Sparkles className="h-3.5 w-3.5 text-secondary" aria-hidden="true" />
          <span>{feature}</span>
        </motion.div>
      ))}
    </div>
  );
};

export const ProjectFeatureChips = memo(ProjectFeatureChipsComponent);
