import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const variants = {
  default: 'card',
  glass: 'card-glass',
};

/**
 * Reusable card component.
 * Supports solid surface and glassmorphism styles with optional lift hover.
 */
export function Card({
  variant = 'default',
  hover = true,
  className,
  children,
  ...props
}) {
  return (
    <motion.div
      className={cn(
        variants[variant],
        variant === 'default' && hover && 'card-hover',
        variant === 'glass' && hover && 'card-glass-hover',
        className
      )}
      whileHover={hover ? { y: -4, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } } : undefined}
      {...props}
    >
      {children}
    </motion.div>
  );
}
