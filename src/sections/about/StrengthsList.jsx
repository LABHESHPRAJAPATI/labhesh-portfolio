import { motion, useReducedMotion } from 'framer-motion';
import { Badge } from '@/components/ui/Badge';

/**
 * Responsive strength chips with hover animations.
 */
export function StrengthsList({ strengths, delay = 0 }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-wrap gap-2"
      aria-label="Strengths"
    >
      {strengths.map((strength, index) => (
        <motion.div
          key={strength}
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.35,
            delay: delay + index * 0.05,
            ease: [0.16, 1, 0.3, 1],
          }}
          whileHover={shouldReduceMotion ? {} : { y: -3, transition: { duration: 0.2 } }}
        >
          <Badge
            variant="glass"
            size="md"
            className="glass-strong cursor-default shadow-glass transition-colors hover:border-primary/30 hover:bg-surface/80"
          >
            {strength}
          </Badge>
        </motion.div>
      ))}
    </motion.div>
  );
}
