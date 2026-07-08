import { memo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useTheme } from '@context/ThemeContext';

const CheckListComponent = function CheckList({ items }) {
  const shouldReduceMotion = useReducedMotion();
  const { direction } = useTheme();
  const isRTL = direction === 'rtl';
  const multiColumn = items.length > 3;

  return (
    <ul
      className={`flex flex-col gap-2.5 ${multiColumn ? 'md:grid md:grid-cols-2 md:gap-x-8' : ''}`}
      aria-label="Responsibilities"
    >
      {items.map((item, index) => (
        <motion.li
          key={index}
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: isRTL ? 12 : -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.35,
            delay: index * 0.05,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex items-start gap-3"
        >
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Check className="h-3 w-3" aria-hidden="true" />
          </span>
          <span className="text-sm leading-relaxed text-muted">{item}</span>
        </motion.li>
      ))}
    </ul>
  );
};

export const CheckList = memo(CheckListComponent);
