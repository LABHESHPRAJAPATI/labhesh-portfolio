import { useReducedMotion } from '@/hooks';

/**
 * Subtle background for the Education section.
 */
export function EducationBackground() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--secondary)/0.08),transparent_55%),radial-gradient(ellipse_at_bottom_left,hsl(var(--primary)/0.06),transparent_55%)]" />

      <div
        className={`absolute left-1/3 top-1/4 h-72 w-72 rounded-full bg-secondary/10 blur-[120px] ${shouldReduceMotion ? '' : 'animate-float'}`}
        aria-hidden="true"
      />
      <div
        className={`absolute bottom-1/4 right-1/4 h-56 w-56 rounded-full bg-accent/10 blur-[100px] ${shouldReduceMotion ? '' : 'animate-float-delayed'}`}
        aria-hidden="true"
      />
    </div>
  );
}
