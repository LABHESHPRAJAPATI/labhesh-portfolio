import { useReducedMotion } from '@/hooks';

/**
 * Very subtle background for the About section.
 */
export function AboutBackground() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,hsl(var(--secondary)/0.08),transparent_50%),radial-gradient(ellipse_at_bottom_right,hsl(var(--accent)/0.06),transparent_50%)]" />

      <div
        className={`absolute right-0 top-1/4 h-80 w-80 rounded-full bg-secondary/10 blur-[120px] ${shouldReduceMotion ? '' : 'animate-float'}`}
        aria-hidden="true"
      />
      <div
        className={`absolute bottom-1/3 left-0 h-64 w-64 rounded-full bg-primary/10 blur-[100px] ${shouldReduceMotion ? '' : 'animate-float-delayed'}`}
        aria-hidden="true"
      />
    </div>
  );
}
