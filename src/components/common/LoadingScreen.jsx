import { motion, useReducedMotion } from 'framer-motion';
import { Spinner } from '@/components/ui/Spinner';

/**
 * Global loading screen.
 * Used as a Suspense fallback and initial loader.
 */
export function LoadingScreen({ message = 'Loading' }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4 bg-background/95 backdrop-blur-md"
      role="status"
      aria-live="polite"
      aria-label={message}
    >
      <Spinner size="xl" label={message} />
      <span className="text-sm font-medium text-muted">{message}</span>
    </motion.div>
  );
}
