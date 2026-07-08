import { useReducedMotion } from '@/hooks';

/**
 * Premium animated background for the Hero section.
 * Includes gradients, glowing orbs, floating shapes, grid, and noise overlay.
 */
export function HeroBackground() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.12),transparent_50%),radial-gradient(ellipse_at_bottom_left,hsl(var(--secondary)/0.10),transparent_50%),radial-gradient(ellipse_at_center,hsl(var(--accent)/0.05),transparent_60%)]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glowing orbs */}
      <div
        className={`absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-primary/20 blur-[100px] ${shouldReduceMotion ? '' : 'animate-float'}`}
      />
      <div
        className={`absolute right-0 top-1/3 h-96 w-96 rounded-full bg-secondary/15 blur-[120px] ${shouldReduceMotion ? '' : 'animate-float-delayed'}`}
      />
      <div
        className={`absolute bottom-1/4 left-1/3 h-64 w-64 rounded-full bg-accent/10 blur-[100px] ${shouldReduceMotion ? '' : 'animate-float'}`}
      />

      {/* Floating rings */}
      <div
        className={`absolute right-[15%] top-[20%] h-24 w-24 rounded-full border border-primary/20 ${shouldReduceMotion ? '' : 'animate-float-delayed'}`}
      />
      <div
        className={`absolute left-[10%] bottom-[25%] h-16 w-16 rounded-full border border-secondary/20 ${shouldReduceMotion ? '' : 'animate-float'}`}
      />
      <div
        className={`absolute right-[25%] bottom-[15%] h-10 w-10 rounded-full border border-accent/20 ${shouldReduceMotion ? '' : 'animate-float-delayed'}`}
      />

      {/* Light particles */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(12)].map((_, i) => (
          <span
            key={i}
            className={`absolute h-1 w-1 rounded-full bg-foreground/40 ${shouldReduceMotion ? '' : 'animate-ping-slow'}`}
            style={{
              top: `${10 + (i * 7) % 80}%`,
              left: `${5 + (i * 11) % 90}%`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      {/* Noise overlay */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.025]" aria-hidden="true">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
    </div>
  );
}
