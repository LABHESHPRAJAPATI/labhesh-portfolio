import { memo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { TechIcon } from '@/components/ui/TechIcon';

const EnjoyedTechComponent = function EnjoyedTech({ technologies }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-wrap justify-center gap-3"
      aria-label="Technologies I enjoy working with"
    >
      {technologies.map((tech, index) => (
        <motion.div
          key={tech}
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.35,
            delay: index * 0.04,
            ease: [0.16, 1, 0.3, 1],
          }}
          whileHover={shouldReduceMotion ? {} : { y: -4, transition: { duration: 0.2 } }}
          className="group"
        >
          <div className="flex items-center gap-2 rounded-full glass-strong px-4 py-2 text-sm font-medium text-foreground shadow-glass transition-colors hover:border-primary/30 hover:bg-surface/80">
            <TechIcon name={tech} className="h-4 w-4 text-muted transition-colors group-hover:text-primary" />
            <span>{tech}</span>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export const EnjoyedTech = memo(EnjoyedTechComponent);
