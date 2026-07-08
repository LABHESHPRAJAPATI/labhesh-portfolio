import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { useCountUp, useReducedMotion } from '@/hooks';
import { Card } from '@/components/ui/Card';
import { RevealOnScroll } from '@/components/animation/RevealOnScroll';

function StatCard({ stat, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const shouldReduceMotion = useReducedMotion();
  const count = useCountUp(stat.value ?? 0, 2000, isInView);

  return (
    <RevealOnScroll direction="up" delay={index * 0.1}>
      <div ref={ref}>
        <Card variant="glass" hover className="flex flex-col items-center justify-center p-3 text-center md:p-4">
          <div className="text-lg font-bold tracking-tight text-foreground sm:text-xl md:text-2xl">
            {stat.value !== null ? (
              <span aria-label={`${stat.value}${stat.suffix} ${stat.label}`}>
                {shouldReduceMotion ? stat.value : count}
                {stat.suffix}
              </span>
            ) : (
              <span className="gradient-text break-words">{stat.text}</span>
            )}
          </div>
          <p className="mt-1 text-[10px] text-muted md:text-xs">{stat.label}</p>
        </Card>
      </div>
    </RevealOnScroll>
  );
}

/**
 * Premium animated statistics cards.
 */
export function HeroStats({ stats }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:gap-5">
      {stats.map((stat, index) => (
        <StatCard key={stat.label} stat={stat} index={index} />
      ))}
    </div>
  );
}
