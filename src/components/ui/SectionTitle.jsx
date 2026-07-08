import { cn } from '@/lib/utils';
import { Heading } from './Heading';

const alignments = {
  left: 'text-start',
  center: 'text-center mx-auto',
  right: 'text-end ms-auto',
};

/**
 * Reusable section title component.
 * Pairs a heading with an optional subtitle.
 */
export function SectionTitle({
  title,
  subtitle,
  align = 'left',
  as = 'h2',
  gradient = false,
  className,
}) {
  return (
    <div className={cn('space-y-4', alignments[align], className)}>
      <Heading as={as} gradient={gradient}>
        {title}
      </Heading>
      {subtitle ? (
        <p className={cn('text-muted text-body', align === 'center' && 'mx-auto max-w-2xl')}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
