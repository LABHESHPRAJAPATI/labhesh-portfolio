import { memo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import { Card } from '@/components/ui/Card';

const AchievementCardsComponent = function AchievementCards({ items }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2" aria-label="Achievements">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: index * 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <Card
            variant="glass"
            hover={false}
            className="flex items-start gap-3 border-success/20 bg-success/[0.03] p-3 transition-colors hover:border-success/20"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-success/10 text-success">
              <Trophy className="h-4 w-4" aria-hidden="true" />
            </span>
            <p className="text-sm leading-relaxed text-muted">{item}</p>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export const AchievementCards = memo(AchievementCardsComponent);
