import { memo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ProjectPreview } from './ProjectPreview';
import { ProjectStats } from './ProjectStats';
import { ProjectFeatureChips } from './ProjectFeatureChips';
import { ProjectResponsibilities } from './ProjectResponsibilities';
import { ProjectTechStack } from './ProjectTechStack';
import { ProjectActions } from './ProjectActions';

const statusVariants = {
  Completed: 'success',
  'In Progress': 'accent',
  Current: 'accent',
};

const ProjectCardComponent = function ProjectCard({ project, index, labels }) {
  const shouldReduceMotion = useReducedMotion();
  const statusVariant = statusVariants[project.status] || 'primary';
  const hasRole = Boolean(project.role);
  const hasFeatures = project.features && project.features.length > 0;
  const hasResponsibilities = project.responsibilities && project.responsibilities.length > 0;
  const hasStats = Object.values(project.stats || {}).some(Boolean);

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={
        shouldReduceMotion
          ? {}
          : { y: -6, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } }
      }
      className="h-full"
    >
      <Card
        variant="glass"
        hover={false}
        className="relative flex h-full flex-col gap-7 overflow-hidden p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-card-hover md:p-8"
      >
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/5 blur-3xl" aria-hidden="true" />

        <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
          {/* Content */}
          <div className="order-2 flex flex-col gap-6 lg:order-1">
            {/* Header */}
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-heading-3 font-semibold text-foreground sm:text-heading-2">{project.name}</h3>
                <Badge variant={statusVariant} size="sm">
                  {project.status}
                </Badge>
              </div>
              <p className="text-lg font-medium text-primary">{project.tagline}</p>
              {hasRole && <p className="text-sm text-muted">{project.role}</p>}
            </div>

            {/* Description */}
            <p className="text-body text-muted">{project.description}</p>

            {/* Features */}
            {hasFeatures && (
              <div className="space-y-3">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                  {labels.featuresLabel}
                </h4>
                <ProjectFeatureChips features={project.features} />
              </div>
            )}

            {/* Responsibilities */}
            {hasResponsibilities && (
              <ProjectResponsibilities items={project.responsibilities} label={labels.responsibilitiesLabel} />
            )}

            {/* Tech stack */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                {labels.technologiesLabel}
              </h4>
              <ProjectTechStack technologies={project.technologies} />
            </div>

            {/* Stats */}
            {hasStats && <ProjectStats stats={project.stats} />}

            {/* Actions */}
            <ProjectActions liveUrl={project.link} githubUrl={project.github} />
          </div>

          {/* Preview */}
          <div className="order-1 lg:order-2">
            <ProjectPreview type={project.previewType} />
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export const ProjectCard = memo(ProjectCardComponent);
