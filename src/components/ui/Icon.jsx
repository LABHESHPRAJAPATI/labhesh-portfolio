import { cn } from '@/lib/utils';

const sizes = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
  xl: 'w-8 h-8',
};

/**
 * Reusable icon wrapper.
 * Accepts a Lucide icon component and applies consistent sizing.
 */
export function Icon({
  icon: IconComponent,
  size = 'md',
  className,
  ...props
}) {
  if (!IconComponent) return null;

  return (
    <IconComponent
      className={cn('shrink-0', sizes[size], className)}
      aria-hidden="true"
      {...props}
    />
  );
}
