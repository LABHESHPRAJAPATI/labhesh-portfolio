import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { EASING, DURATION } from '@/constants/animations';

/**
 * Page transition wrapper.
 * Render inside an AnimatePresence wrapper for route transitions.
 */
export function PageTransition({ children, className }) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: DURATION.slow, ease: EASING.spring }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
