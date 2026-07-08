import { useReducedMotion as useFramerReducedMotion } from 'framer-motion';

/**
 * Returns true if the user prefers reduced motion.
 */
export function useReducedMotion() {
  return useFramerReducedMotion() ?? false;
}
