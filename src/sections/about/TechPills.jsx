import { motion, useReducedMotion } from 'framer-motion';
import { TechIcon } from '@/components/ui/TechIcon';

/**
 * Premium technology pills with icons.
 */
export function TechPills({ technologies, delay = 0 }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-wrap gap-2"
      aria-label="Favorite technologies"
    >
      {technologies.map((tech, index) => (
        <motion.div
          key={tech}
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.35,
            delay: delay + index * 0.04,
            ease: [0.16, 1, 0.3, 1],
          }}
          whileHover={shouldReduceMotion ? {} : { y: -3, transition: { duration: 0.2 } }}
          className="group"
        >
          <div className="flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-foreground shadow-glass backdrop-blur-md transition-colors hover:border-primary/30 hover:bg-surface/80">
            <TechIcon name={tech} className="h-4 w-4 text-muted transition-colors group-hover:text-primary" />
            <span>{tech}</span>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
