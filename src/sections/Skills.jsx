import { RevealOnScroll } from '@/components/animation/RevealOnScroll';
import { SocialIcon } from '@/components/common';
import { SECTION_IDS } from '@/constants/sections';
import { enjoyedTechnologies } from '@/data';
import { socials } from '@/data/socials';

function SkillItem({ name, index }) {
  return (
    <RevealOnScroll delay={index * 0.03}>
      <div className="group flex items-center gap-4 border-b border-border/40 py-4 transition-colors duration-300 hover:border-accent/40">
        <span className="h-1.5 w-1.5 rounded-full bg-accent transition-transform duration-300 group-hover:scale-125" aria-hidden="true" />
        <span className="font-display text-sm font-medium uppercase tracking-[0.04em] text-foreground transition-colors duration-300 group-hover:text-accent">
          {name}
        </span>
      </div>
    </RevealOnScroll>
  );
}

/**
 * Skills section.
 * Single classic list without category separation.
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
              <span className="section-label">03 — Skills</span>
            </RevealOnScroll>
            <RevealOnScroll delay={0.05}>
              <h2 className="section-title">
                Technologies<br />I work with
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-muted-light">
                A curated set of tools and technologies I use to build modern, scalable applications.
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

          {/* Skills list */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
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
