import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Icon } from './Icon';

const baseStyles =
  'inline-flex items-center justify-center rounded-full p-2.5 text-muted transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background';

const variantStyles = {
  ghost: 'hover:bg-surface hover:text-foreground',
  glass: 'glass hover:bg-surface/80',
  solid: 'bg-surface hover:bg-elevated text-foreground border border-border',
};

/**
 * Reusable social button.
 * Renders an accessible external link or a disabled placeholder.
 */
export function SocialButton({
  href,
  icon,
  label,
  variant = 'ghost',
  disabled = false,
  className,
  ...props
}) {
  const isExternal = !disabled && href?.startsWith('http');

  if (disabled) {
    return (
      <motion.button
        type="button"
        disabled
        aria-label={label}
        className={cn(baseStyles, variantStyles[variant], 'cursor-not-allowed opacity-50', className)}
        {...props}
      >
        <Icon icon={icon} size="md" />
      </motion.button>
    );
  }

  return (
    <motion.a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      aria-label={label}
      className={cn(baseStyles, variantStyles[variant], className)}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      {...props}
    >
      <Icon icon={icon} size="md" />
    </motion.a>
  );
}
