import { TechIcon } from '@/components/ui/TechIcon';
import { SkillLevelIndicator } from './SkillLevelIndicator';

/**
 * Premium technology pill with icon and circular level indicator.
 */
export function SkillPill({ name, level }) {
  return (
    <div className="group flex items-center justify-between gap-3 rounded-xl border border-border bg-surface px-3 py-2 shadow-glass backdrop-blur-md transition-colors hover:border-primary/30 hover:bg-surface/80">
      <div className="flex min-w-0 items-center gap-2.5">
        <TechIcon name={name} className="h-4 w-4 shrink-0 text-muted transition-colors group-hover:text-primary" />
        <span className="break-words text-sm font-medium text-foreground">{name}</span>
      </div>
      <SkillLevelIndicator level={level} name={name} />
    </div>
  );
}
