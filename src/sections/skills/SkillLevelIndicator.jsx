import { useRef, useId } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

const SIZE = 36;
const STROKE = 3;
const RADIUS = (SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

/**
 * Circular skill level indicator.
 * Animates the ring fill when scrolled into view.
 */
export function SkillLevelIndicator({ level, name }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const shouldReduceMotion = useReducedMotion();
  const gradientId = useId();

  const offset = CIRCUMFERENCE - (level / 100) * CIRCUMFERENCE;

  return (
    <div
      ref={ref}
      className="relative flex h-9 w-9 items-center justify-center"
      role="img"
      aria-label={name ? `${name} proficiency: ${level} percent` : `Proficiency: ${level} percent`}
    >
      <svg width={SIZE} height={SIZE} className="-rotate-90 transform">
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--secondary))" />
          </linearGradient>
        </defs>
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          fill="none"
          stroke="hsl(var(--muted) / 0.2)"
          strokeWidth={STROKE}
        />
        <motion.circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth={STROKE}
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          initial={{ strokeDashoffset: CIRCUMFERENCE }}
          animate={{ strokeDashoffset: isInView || shouldReduceMotion ? offset : CIRCUMFERENCE }}
          transition={{ duration: shouldReduceMotion ? 0 : 1.2, ease: 'easeOut' }}
        />
      </svg>
      <span className="absolute text-[10px] font-semibold text-foreground">{level}</span>
    </div>
  );
}
