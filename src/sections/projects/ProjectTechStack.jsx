import { memo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { TechIcon } from '@/components/ui/TechIcon';

const ProjectTechStackComponent = function ProjectTechStack({ technologies }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="flex flex-wrap gap-2" aria-label="Technology stack">
      {technologies.map((tech, index) => (
        <motion.div
          key={tech}
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.3,
            delay: index * 0.04,
            ease: [0.16, 1, 0.3, 1],
          }}
          whileHover={shouldReduceMotion ? {} : { y: -2 }}
          className="group"
        >
          <div className="flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-foreground shadow-glass backdrop-blur-md transition-colors hover:border-primary/30 hover:bg-surface/80">
            <TechIcon name={tech} className="h-3.5 w-3.5 text-muted transition-colors group-hover:text-primary" />
            <span>{tech}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export const ProjectTechStack = memo(ProjectTechStackComponent);
