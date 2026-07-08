import { CheckList } from '@/sections/experience/CheckList';

/**
 * Project responsibilities checklist.
 * Reuses the animated CheckList component from the Experience section.
 */
export function ProjectResponsibilities({ items, label }) {
  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">{label}</h4>
      <CheckList items={items} />
    </div>
  );
}
