import { motion, useReducedMotion } from 'framer-motion';

/**
 * Animated timeline node with glow.
 */
export function TimelineNode({ isActive = false }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { scale: 1 } : { scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex h-7 w-7 items-center justify-center"
      aria-hidden="true"
    >
      <span className="absolute h-full w-full rounded-full bg-primary/40 blur-md" />
      <span className="absolute h-full w-full rounded-full bg-primary/20 animate-ping" />
      <span
        className={`relative h-4 w-4 rounded-full border-2 border-background shadow-glow-primary ${
          isActive ? 'bg-primary' : 'bg-surface'
        }`}
      />
    </motion.div>
  );
}
