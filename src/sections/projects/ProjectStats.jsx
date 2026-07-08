import { memo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Layers, Clock, Activity } from 'lucide-react';

const ProjectStatsComponent = function ProjectStats({ stats }) {
  const shouldReduceMotion = useReducedMotion();

  const items = [
    { icon: Layers, label: 'Modules', value: stats.modules },
    { icon: Activity, label: 'Status', value: stats.status },
    { icon: Clock, label: 'Duration', value: stats.duration },
  ];

  return (
    <div className="grid grid-cols-3 gap-2" aria-label="Project statistics">
      {items.map((item, index) => (
        <motion.div
          key={item.label}
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.35,
            delay: index * 0.06,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex flex-col items-center rounded-xl border border-border bg-surface p-3 text-center backdrop-blur-sm"
        >
          <item.icon className="mb-1.5 h-4 w-4 text-primary" aria-hidden="true" />
          <span className="break-words text-sm font-semibold text-foreground">{item.value}</span>
          <span className="break-words text-[10px] uppercase tracking-wider text-muted">{item.label}</span>
        </motion.div>
      ))}
    </div>
  );
};

export const ProjectStats = memo(ProjectStatsComponent);
