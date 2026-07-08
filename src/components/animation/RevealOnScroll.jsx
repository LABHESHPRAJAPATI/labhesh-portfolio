import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { EASING, DURATION } from '@/constants/animations';

const directionVariants = {
  up: { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } },
  down: { hidden: { opacity: 0, y: -32 }, visible: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: 32 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: -32 }, visible: { opacity: 1, x: 0 } },
  start: { hidden: { opacity: 0, x: 32 }, visible: { opacity: 1, x: 0 } },
  end: { hidden: { opacity: 0, x: -32 }, visible: { opacity: 1, x: 0 } },
  fade: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  scale: {
    hidden: { opacity: 0, scale: 0.95, y: 16 },
    visible: { opacity: 1, scale: 1, y: 0 },
  },
};

/**
 * Reveal on scroll animation wrapper.
 * Animates children into view once with configurable direction.
 */
export function RevealOnScroll({
  children,
  direction = 'up',
  delay = 0,
  className,
  as: Component = motion.div,
}) {
  const shouldReduceMotion = useReducedMotion();
  const variants = directionVariants[direction] || directionVariants.up;

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <Component
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={variants}
      transition={{
        duration: DURATION.slow,
        ease: EASING.spring,
        delay,
      }}
    >
      {children}
    </Component>
  );
}
