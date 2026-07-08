import { ExternalLink, Github } from 'lucide-react';

/**
 * Project action buttons.
 * Only renders buttons when a URL is provided.
 */
export function ProjectActions({ liveUrl, githubUrl }) {
  const hasLive = Boolean(liveUrl);
  const hasGithub = Boolean(githubUrl);

  if (!hasLive && !hasGithub) {
    return null;
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      {hasLive && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
          aria-label="Open live demo"
        >
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
          Live Demo
        </a>
      )}

      {hasGithub && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline"
          aria-label="View source on GitHub"
        >
          <Github className="h-4 w-4" aria-hidden="true" />
          GitHub
        </a>
      )}
    </div>
  );
}
