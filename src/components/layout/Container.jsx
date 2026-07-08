import { cn } from '@/lib/utils';

const maxWidths = {
  default: 'max-w-container',
  sm: 'max-w-container-sm',
  lg: 'max-w-container-lg',
  xl: 'max-w-container-xl',
};

/**
 * Global container component.
 * Centers content and applies responsive horizontal padding.
 */
export function Container({ size = 'default', className, children, ...props }) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-4 sm:px-6 lg:px-8',
        maxWidths[size] || maxWidths.default,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
