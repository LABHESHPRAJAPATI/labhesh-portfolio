import { motion, useReducedMotion } from 'framer-motion';

function BrowserChrome({ children }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-surface to-elevated shadow-card">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-error/60" />
        <span className="h-3 w-3 rounded-full bg-warning/60" />
        <span className="h-3 w-3 rounded-full bg-success/60" />
        <div className="ms-4 h-5 flex-1 rounded-md bg-surface/80" />
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

function AccountingMock() {
  return (
    <BrowserChrome>
      <div className="space-y-5">
        <div className="flex items-end gap-3">
          {[60, 85, 45, 70, 95, 55, 80].map((height, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              whileInView={{ height: `${height}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="min-h-[2rem] flex-1 rounded-t-lg bg-gradient-to-t from-primary/40 to-secondary/40"
              style={{ maxHeight: '6rem' }}
            />
          ))}
        </div>
        <div className="space-y-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="h-2.5 w-2.5 rounded-full bg-muted/30" />
              <div className="h-2 w-1/3 rounded bg-surface/80" />
              <div className="ms-auto h-2 w-16 rounded bg-surface/80" />
            </div>
          ))}
        </div>
      </div>
    </BrowserChrome>
  );
}

function EcommerceMock() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-surface to-elevated p-5 shadow-card">
      <div className="mb-4 flex items-center justify-between">
        <div className="h-3 w-20 rounded bg-surface" />
        <div className="flex gap-2">
          <div className="h-8 w-8 rounded-lg bg-surface/80" />
          <div className="h-8 w-8 rounded-lg bg-surface/80" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {[1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="space-y-2 rounded-xl border border-border bg-surface p-3"
          >
            <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20" />
            <div className="h-2 w-3/4 rounded bg-surface/80" />
            <div className="h-2 w-1/2 rounded bg-surface/80" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/**
 * Render a premium mock project preview based on project type.
 */
export function ProjectPreview({ type }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="w-full"
      aria-hidden="true"
    >
      {type === 'accounting' ? <AccountingMock /> : <EcommerceMock />}
    </motion.div>
  );
}
