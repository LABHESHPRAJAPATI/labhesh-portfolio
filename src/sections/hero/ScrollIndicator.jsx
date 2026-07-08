import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { scrollToSection } from '@/lib/scroll';
import { useReducedMotion } from '@/hooks';

/**
 * Animated scroll indicator for the hero section.
 */
export function ScrollIndicator({ target, label = 'Scroll' }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.button
      type="button"
      onClick={() => scrollToSection(target)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted transition-colors hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md"
      aria-label={`Scroll to ${target} section`}
    >
      <span className="text-caption uppercase tracking-widest">{label}</span>
      <motion.div
        animate={shouldReduceMotion ? {} : { y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown className="h-5 w-5" aria-hidden="true" />
      </motion.div>
    </motion.button>
  );
}
