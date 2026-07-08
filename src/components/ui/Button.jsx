import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const variants = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  accent: 'btn-accent',
  outline: 'btn-outline',
  ghost: 'btn-ghost',
};

const sizes = {
  sm: 'btn-sm',
  md: '',
  lg: 'btn-lg',
};

/**
 * Reusable button component.
 * Supports multiple visual variants and sizes with premium motion feedback.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  disabled = false,
  type = 'button',
  ...props
}) {
  return (
    <motion.button
      type={type}
      disabled={disabled}
      className={cn('btn', variants[variant], sizes[size], className)}
      whileHover={disabled ? undefined : { scale: 1.02 }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
