import { cn } from '@/lib/utils';

/**
 * Skeleton placeholder component.
 * Use while content is loading.
 */
export function Skeleton({ className, ...props }) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-lg bg-surface',
        className
      )}
      {...props}
    />
  );
}
