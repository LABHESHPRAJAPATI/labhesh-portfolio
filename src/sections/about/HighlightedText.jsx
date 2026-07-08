import { cn } from '@/lib/utils';

/**
 * Highlights specified terms inside a text block with a gradient.
 */
export function HighlightedText({ text, terms, className }) {
  if (!terms.length) return <p className={className}>{text}</p>;

  // Sort by length descending so longer phrases are matched first.
  const sortedTerms = [...terms].sort((a, b) => b.length - a.length);
  const escaped = sortedTerms.map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const pattern = new RegExp(`(${escaped.join('|')})`, 'gi');

  const parts = text.split(pattern);

  return (
    <p className={cn('leading-relaxed', className)}>
      {parts.map((part, index) => {
        const isHighlight = sortedTerms.some(
          (term) => term.toLowerCase() === part.toLowerCase()
        );

        return isHighlight ? (
          <span key={index} className="gradient-text font-semibold">
            {part}
          </span>
        ) : (
          <span key={index}>{part}</span>
        );
      })}
    </p>
  );
}
