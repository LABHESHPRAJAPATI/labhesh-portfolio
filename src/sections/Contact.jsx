import { Mail, MapPin } from 'lucide-react';
import { RevealOnScroll } from '@/components/animation/RevealOnScroll';
import { SocialIcon } from '@/components/common';
import { SECTION_IDS } from '@/constants/sections';
import { contact, contactSection, personal, socials } from '@/data';

/**
 * Contact section.
 * Dark section with a contact info card.
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
      <div className="container-main grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <RevealOnScroll>
            <span className="section-label">07 — Contact</span>
          </RevealOnScroll>
          <RevealOnScroll delay={0.05}>
            <h2 className="section-title">
              Let&apos;s Build<br />Something<br />Great
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <p className="mt-6 text-sm text-muted-light">
              © {year} {personal.name}. All rights reserved.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.15}>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => (
                <SocialIcon key={social.id} social={social} />
              ))}
            </div>
          </RevealOnScroll>
        </div>

        <div className="lg:col-span-7 lg:pt-4">
          <RevealOnScroll delay={0.1}>
            <div className="rounded-2xl border border-background/20 bg-background/5 p-6 sm:p-8">
              <p className="mb-2 text-lg font-semibold text-background">
                {contact.availability}
              </p>
              <p className="mb-8 text-base leading-relaxed text-muted-light">
                {contactSection.introduction}
              </p>

              <div className="flex flex-col gap-5">
                <a
                  href={`mailto:${contact.email}`}
                  className="group flex items-center gap-4 text-background transition-colors duration-300 hover:text-accent"
                >
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-background/20 transition-colors duration-300 group-hover:border-accent">
                    <Mail className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-base font-medium sm:text-lg">{contact.email}</span>
                </a>

                <div className="flex items-start gap-4 text-background">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-background/20">
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <span className="block text-base font-medium sm:text-lg">{contact.location}</span>
                    <span className="text-sm text-muted-light">Open to Remote & On-site Opportunities</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-background/10 pt-6">
                <p className="font-display text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-light">
                  Designed & Built with care
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
