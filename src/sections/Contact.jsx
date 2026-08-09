import { Mail, MapPin } from 'lucide-react';
import { RevealOnScroll } from '@/components/animation/RevealOnScroll';
import { SocialIcon } from '@/components/common';
import { SECTION_IDS } from '@/constants/sections';
import { contact, contactSection, personal, socials } from '@/data';

/**
 * Contact section.
 * Dark section with a clean, classic contact layout.
 */
export function Contact() {
  const year = new Date().getFullYear();
  const socialLinks = socials.filter((s) => s.url);

  return (
    <section
      id={SECTION_IDS.CONTACT}
      className="section section-dark"
      aria-label="Contact"
    >
      <div className="container-main">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Headline */}
          <div className="lg:col-span-7">
            <RevealOnScroll>
              <span className="section-label">07 — CONTACT</span>
            </RevealOnScroll>
            <RevealOnScroll delay={0.05}>
              <h2 className="section-title">
                Let&apos;s Build Something Great
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={0.08}>
              <div className="mt-5 h-1 w-16 bg-accent" aria-hidden="true" />
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <p className="mt-8 max-w-lg text-base leading-relaxed text-muted-light md:text-lg">
                {contactSection.introduction}
              </p>
            </RevealOnScroll>
          </div>

          {/* Contact details */}
          <div className="lg:col-span-5">
            <RevealOnScroll delay={0.1}>
              <div className="flex flex-col gap-8">
                <a
                  href={`mailto:${contact.email}`}
                  className="group block border-b border-background/10 pb-8 transition-colors duration-300"
                >
                  <span className="mb-2 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-light">
                    <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                    Email
                  </span>
                  <span className="block text-lg font-medium text-background transition-colors duration-300 group-hover:text-accent sm:text-xl">
                    {contact.email}
                  </span>
                </a>

                <div className="flex items-start gap-4 border-b border-background/10 pb-8">
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted-light" aria-hidden="true" />
                  <div>
                    <span className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-light">
                      Location
                    </span>
                    <span className="block text-lg font-medium text-background">{contact.location}</span>
                    <span className="text-sm text-muted-light">Open to remote opportunities</span>
                  </div>
                </div>

                <div>
                  <span className="mb-3 block text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-light">
                    Connect
                  </span>
                  <div className="flex items-center gap-3">
                    {socialLinks.map((social) => (
                      <SocialIcon key={social.id} social={social} />
                    ))}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>

        {/* Bottom bar */}
        <RevealOnScroll delay={0.2}>
          <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-background/10 pt-8 sm:flex-row">
            <p className="text-sm text-muted-light">
              © {year} {personal.name}. All rights reserved.
            </p>
            <p className="font-display text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-light">
              Designed & Built with care
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
