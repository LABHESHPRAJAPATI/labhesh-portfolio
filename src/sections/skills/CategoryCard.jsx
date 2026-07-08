import { memo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Server, Layout, Database, Cloud, GitBranch, Sparkles, Code, Wrench } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { SkillPill } from './SkillPill';

const categoryIcons = {
  'programming-languages': Code,
  backend: Server,
  frontend: Layout,
  database: Database,
  cloud: Cloud,
  'version-control': GitBranch,
  tools: Wrench,
  'ai-tools': Sparkles,
};

const CategoryCardComponent = function CategoryCard({ category, index }) {
  const shouldReduceMotion = useReducedMotion();
  const Icon = categoryIcons[category.id] || Server;

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={
        shouldReduceMotion
          ? {}
          : {
              y: -6,
              transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
            }
      }
      className="h-full"
    >
      <Card
        variant="glass"
        hover={false}
        className="group relative flex h-full flex-col gap-5 overflow-hidden p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-card-hover hover:[transform:perspective(1000px)_rotateX(2deg)]"
      >
        <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/5 blur-3xl transition-opacity group-hover:opacity-70" aria-hidden="true" />

        <div className="relative flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <h3 className="text-heading-4 font-semibold text-foreground">{category.name}</h3>
            <p className="text-caption text-muted">{category.skills.length} technologies</p>
          </div>
        </div>

        <p className="relative text-sm leading-relaxed text-muted">{category.description}</p>

        <div className="relative mt-auto flex flex-col gap-2">
          {category.skills.map((skill) => (
            <SkillPill key={skill.name} name={skill.name} level={skill.level} />
          ))}
        </div>
      </Card>
    </motion.div>
  );
};

export const CategoryCard = memo(CategoryCardComponent);
