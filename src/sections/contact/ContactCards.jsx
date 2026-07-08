import { memo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Mail, Phone, MessageCircle, MapPin } from 'lucide-react';
import { Icon } from '@/components/ui/Icon';

const iconMap = {
  email: Mail,
  phone: Phone,
  whatsapp: MessageCircle,
  location: MapPin,
};

const ContactCardsComponent = function ContactCards({ items }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2" aria-label="Contact information">
      {items.map((item, index) => {
        const IconComponent = iconMap[item.id];
        const isAvailable = Boolean(item.href);

        const content = (
          <>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
              <Icon icon={IconComponent} size="md" />
            </span>
            <div className="min-w-0">
              <p className="text-caption text-muted">{item.title}</p>
              <p className="break-words text-base font-medium text-foreground">{item.value}</p>
            </div>
          </>
        );

        return (
          <motion.div
            key={item.id}
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={shouldReduceMotion ? {} : { y: -4 }}
          >
            {isAvailable ? (
              <a
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="group flex h-full items-center gap-4 rounded-2xl border border-border bg-surface p-5 shadow-glass backdrop-blur-md transition-all hover:border-primary/30 hover:bg-surface/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label={item.label}
              >
                {content}
              </a>
            ) : (
              <div className="group flex h-full items-center gap-4 rounded-2xl border border-border bg-surface p-5 shadow-glass backdrop-blur-md">
                {content}
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

export const ContactCards = memo(ContactCardsComponent);
