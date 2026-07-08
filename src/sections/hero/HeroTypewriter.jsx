import { useTypewriter } from '@/hooks';

/**
 * Animated typing effect for the hero subtitle.
 * The animated text is hidden from assistive technologies; a static list is provided instead.
 */
export function HeroTypewriter({ titles }) {
  const { text } = useTypewriter(titles, {
    typingSpeed: 90,
    deletingSpeed: 50,
    pauseDuration: 2200,
  });

  return (
    <span className="inline-flex items-center gap-1 text-lg font-medium text-muted sm:text-xl md:text-2xl">
      <span className="sr-only">
        I am a {titles.join(', ')}
      </span>
      <span aria-hidden="true">
        A{' '}
        <span className="gradient-text min-w-0 max-w-full font-semibold">{text}</span>
      </span>
      <span className="h-6 w-0.5 animate-pulse bg-primary" aria-hidden="true" />
    </span>
  );
}
