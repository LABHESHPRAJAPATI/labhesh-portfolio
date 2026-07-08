import { motion, useReducedMotion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Icon } from '@/components/ui/Icon';

/**
 * Single glass card for the about information panel.
 */
export function AboutInfoCard({ icon, label, value, delay = 0 }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <Card variant="glass" hover className="flex items-center gap-4 p-4 md:p-5">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon icon={icon} size="md" />
        </div>
        <div className="min-w-0">
          <p className="text-caption text-muted">{label}</p>
          <p className="text-base font-semibold text-foreground break-words">{value}</p>
        </div>
      </Card>
    </motion.div>
  );
}
