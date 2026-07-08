import { motion, useReducedMotion } from 'framer-motion';
import { Target } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Icon } from '@/components/ui/Icon';

/**
 * Premium glass card for the career goal statement.
 */
export function CareerGoalCard({ title, text, delay = 0 }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <Card variant="glass" className="relative overflow-hidden p-6 md:p-8">
        <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-secondary/10 blur-2xl" aria-hidden="true" />

        <div className="relative flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
              <Icon icon={Target} size="md" />
            </div>
            <h3 className="text-heading-4 font-semibold text-foreground">{title}</h3>
          </div>

          <blockquote className="border-s-2 border-secondary/40 ps-4 text-body-lg italic text-muted">
            &ldquo;{text}&rdquo;
          </blockquote>
        </div>
      </Card>
    </motion.div>
  );
}
