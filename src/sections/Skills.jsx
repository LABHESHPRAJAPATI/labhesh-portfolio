import {
  Braces,
  Code2,
  Database,
  GitBranch,
  Github,
  LayoutGrid,
  Mail,
  Palette,
  Server,
  Smartphone,
  Sparkles,
  Terminal,
  Wind,
} from 'lucide-react';
import { RevealOnScroll } from '@/components/animation/RevealOnScroll';
import { SocialIcon } from '@/components/common';
import { SECTION_IDS } from '@/constants/sections';
import { enjoyedTechnologies, skillsSection } from '@/data';
import { socials } from '@/data/socials';

const SKILL_ICONS = {
  Laravel: Server,
  PHP: Code2,
  JavaScript: Braces,
  'Vue.js': Code2,
  React: Code2,
  jQuery: Code2,
  MySQL: Database,
  SQL: Database,
  'REST APIs': Terminal,
  Git: GitBranch,
  GitHub: Github,
  Postman: Mail,
  'Tailwind CSS': Wind,
  Bootstrap: LayoutGrid,
  HTML: Code2,
  CSS: Palette,
  'AI-Assisted Development': Sparkles,
};

function SkillItem({ name, index }) {
  const Icon = SKILL_ICONS[name] || Code2;

  return (
    <RevealOnScroll delay={index * 0.03}>
      <div className="group flex items-center gap-3 rounded-xl border border-background/10 bg-background/5 px-4 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:bg-background/10">
        <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
          <Icon className="h-3.5 w-3.5" aria-hidden="true" />
        </span>
        <span className="font-display text-sm font-medium uppercase tracking-[0.04em] text-background transition-colors duration-300 group-hover:text-accent">
          {name}
        </span>
      </div>
    </RevealOnScroll>
  );
}

/**
 * Skills section.
 * Premium grid of skill chips with icons.
 */
export function Skills() {
  const socialLinks = socials.filter((s) => s.url);

  return (
    <section
      id={SECTION_IDS.SKILLS}
      className="section section-dark"
      aria-label="Skills and technologies"
    >
      <div className="container-main">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Title */}
          <div className="lg:col-span-4">
            <RevealOnScroll>
              <span className="section-label">03 — SKILLS</span>
            </RevealOnScroll>
            <RevealOnScroll delay={0.05}>
              <h2 className="section-title">
                Technologies
                <br />
                I work with
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={0.08}>
              <div className="mt-4 h-1 w-16 bg-accent" aria-hidden="true" />
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-muted-light">
                {skillsSection.subtitle}
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.15}>
              <div className="mt-8 flex items-center gap-3">
                {socialLinks.map((social) => (
                  <SocialIcon key={social.id} social={social} size={16} />
                ))}
              </div>
            </RevealOnScroll>
          </div>

          {/* Skills grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {enjoyedTechnologies.map((skill, index) => (
                <SkillItem key={skill} name={skill} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
