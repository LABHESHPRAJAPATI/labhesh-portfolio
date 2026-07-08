import { cn } from '@/lib/utils';

const headingStyles = {
  h1: 'text-display font-bold tracking-tight',
  h2: 'text-heading-1 font-bold tracking-tight',
  h3: 'text-heading-2 font-semibold',
  h4: 'text-heading-3 font-semibold',
  h5: 'text-heading-4 font-semibold',
  h6: 'text-lg font-semibold',
};

/**
 * Global heading component.
 * Renders a semantic heading with consistent typography.
 */
export function Heading({
  as: Component = 'h2',
  gradient = false,
  className,
  children,
  ...props
}) {
  return (
    <Component
      className={cn(
        headingStyles[Component] || headingStyles.h2,
        gradient && 'gradient-text',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
