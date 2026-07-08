import { useReducedMotion } from '@/hooks';

/**
 * Subtle background for the Experience section.
 */
export function ExperienceBackground() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.07),transparent_55%),radial-gradient(ellipse_at_bottom_left,hsl(var(--secondary)/0.06),transparent_55%)]" />

      <div
        className={`absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-[140px] ${shouldReduceMotion ? '' : 'animate-float'}`}
        aria-hidden="true"
      />
    </div>
  );
}
