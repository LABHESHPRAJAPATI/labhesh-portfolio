import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

const sizes = {
  sm: 'w-4 h-4 border-2',
  md: 'w-6 h-6 border-2',
  lg: 'w-8 h-8 border-4',
  xl: 'w-12 h-12 border-4',
};

/**
 * Loading spinner component.
 * Respects reduced-motion preferences.
 */
export function Spinner({ size = 'md', className, label = 'Loading' }) {
  const shouldReduceMotion = useReducedMotion();

  const spinner = (
    <div
      className={cn(
        'rounded-full border-muted/20 border-t-primary',
        sizes[size],
        className
      )}
    />
  );

  if (shouldReduceMotion) {
    return (
      <div className="inline-flex items-center justify-center" role="status" aria-label={label}>
        {spinner}
        <span className="sr-only">{label}</span>
      </div>
    );
  }

  return (
    <motion.div
      className="inline-flex items-center justify-center"
      role="status"
      aria-label={label}
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
    >
      {spinner}
      <span className="sr-only">{label}</span>
    </motion.div>
  );
}
