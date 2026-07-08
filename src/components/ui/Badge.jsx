import { cn } from '@/lib/utils';

const variants = {
  primary: 'bg-primary/10 text-primary border-primary/20',
  secondary: 'bg-secondary/10 text-secondary border-secondary/20',
  accent: 'bg-accent/10 text-accent border-accent/20',
  success: 'bg-success/10 text-success border-success/20',
  outline: 'bg-transparent text-muted border-border',
  ghost: 'bg-transparent text-muted border-transparent',
  glass: 'bg-surface/80 text-foreground border-border backdrop-blur-md',
};

const sizes = {
  sm: 'px-2 py-0.5 text-caption',
  md: 'px-3 py-1 text-sm',
  lg: 'px-4 py-1.5 text-sm',
};

/**
 * Reusable badge component for labels, tags, and status indicators.
 */
export function Badge({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center justify-center rounded-full border font-medium transition-colors',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
