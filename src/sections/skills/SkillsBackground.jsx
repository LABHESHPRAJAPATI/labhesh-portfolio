import { useReducedMotion } from '@/hooks';

/**
 * Subtle background for the Skills section.
 */
export function SkillsBackground() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,hsl(var(--primary)/0.08),transparent_55%),radial-gradient(ellipse_at_bottom_right,hsl(var(--accent)/0.06),transparent_55%)]" />

      <div
        className={`absolute left-1/4 top-1/3 h-72 w-72 rounded-full bg-primary/10 blur-[120px] ${shouldReduceMotion ? '' : 'animate-float'}`}
        aria-hidden="true"
      />
      <div
        className={`absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-secondary/10 blur-[100px] ${shouldReduceMotion ? '' : 'animate-float-delayed'}`}
        aria-hidden="true"
      />
    </div>
  );
}
