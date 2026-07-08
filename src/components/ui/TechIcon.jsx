import { Cloud, Bot, Sparkles, Code } from 'lucide-react';
import {
  siLaravel,
  siPhp,
  siReact,
  siVuedotjs,
  siJavascript,
  siMysql,
  siTailwindcss,
  siBootstrap,
  siGit,
  siGithub,
  siWasabi,
  siHtml5,
  siPostman,
  siClaude,
} from 'simple-icons';

const simpleIconMap = {
  Laravel: siLaravel,
  'Laravel Features': siLaravel,
  PHP: siPhp,
  'Vue.js': siVuedotjs,
  'React (AI-assisted)': siReact,
  JavaScript: siJavascript,
  'JavaScript (ES6+)': siJavascript,
  MySQL: siMysql,
  'Tailwind CSS': siTailwindcss,
  Bootstrap: siBootstrap,
  Git: siGit,
  GitHub: siGithub,
  Wasabi: siWasabi,
  HTML5: siHtml5,
  Postman: siPostman,
  'Claude AI': siClaude,
};

const lucideIconMap = {
  'AWS S3': Cloud,
  'REST APIs': Cloud,
  'REST API Development': Cloud,
  ChatGPT: Bot,
  'Claude AI': Bot,
  'Cursor AI': Sparkles,
  Gemini: Sparkles,
  Antigravity: Sparkles,
};

/**
 * Render a technology icon by name.
 */
export function TechIcon({ name, className }) {
  const simpleIcon = simpleIconMap[name];

  if (simpleIcon) {
    return (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill="currentColor"
        aria-hidden="true"
      >
        <path d={simpleIcon.path} />
      </svg>
    );
  }

  const LucideIcon = lucideIconMap[name] || Code;
  return <LucideIcon className={className} aria-hidden="true" />;
}
