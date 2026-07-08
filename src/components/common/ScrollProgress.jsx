import { motion, useReducedMotion } from 'framer-motion';
import { useScrollProgress } from '@/hooks';
import { useTheme } from '@context/ThemeContext';
import { cn } from '@/lib/utils';

/**
 * Animated scroll progress bar fixed to the top of the viewport.
 * Direction-aware so it grows from the correct edge in RTL.
 */
export function ScrollProgress() {
  const progress = useScrollProgress();
  const shouldReduceMotion = useReducedMotion();
  const { direction } = useTheme();
  const isRTL = direction === 'rtl';

  return (
    <div
      className="fixed inset-x-0 top-0 z-[60] h-[2px] bg-transparent"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress * 100)}
      aria-label="Scroll progress"
    >
      <motion.div
        className={cn(
          'h-full from-primary via-secondary to-accent',
          isRTL ? 'bg-gradient-to-l' : 'bg-gradient-to-r'
        )}
        initial={false}
        animate={{ scaleX: progress }}
        transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.1 }}
        style={{ originX: isRTL ? 1 : 0 }}
      />
    </div>
  );
}
