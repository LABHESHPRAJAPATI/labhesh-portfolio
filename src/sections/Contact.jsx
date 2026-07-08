import { Container } from '@/components/layout/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { RevealOnScroll } from '@/components/animation/RevealOnScroll';
import { SECTION_IDS } from '@/constants/sections';
import { contactSection, contact } from '@/data/contact';
import { socials } from '@/data/socials';
import { ContactBackground } from './contact/ContactBackground';
import { ContactIntro } from './contact/ContactIntro';
import { ContactCards } from './contact/ContactCards';
import { ContactActions } from './contact/ContactActions';
import { ContactSocials } from './contact/ContactSocials';

const contactItems = [
  {
    id: 'email',
    title: contactSection.emailLabel,
    value: contact.email,
    href: `mailto:${contact.email}`,
    label: 'Send an email',
    external: false,
  },
  {
    id: 'phone',
    title: contactSection.phoneLabel,
    value: contact.phone,
    href: `tel:${contact.phone}`,
    label: 'Make a phone call',
    external: false,
  },
  {
    id: 'whatsapp',
    title: contactSection.whatsappLabel,
    value: contact.phone,
    href: contact.whatsapp,
    label: 'Chat on WhatsApp',
    external: true,
  },
  {
    id: 'location',
    title: contactSection.locationLabel,
    value: contact.location,
    href: '',
    label: 'Location',
    external: false,
  },
];

/**
 * Contact section.
 * Professional introduction, contact cards, CTAs, and social links.
 */
export function Contact() {
  return (
    <section
      id={SECTION_IDS.CONTACT}
      className="relative overflow-hidden section"
      aria-label="Contact"
    >
      <ContactBackground />

      <Container className="relative z-10">
        <div className="flex flex-col gap-12 md:gap-16">
          <RevealOnScroll direction="up" className="mx-auto max-w-2xl text-center">
            <SectionTitle
              title={contactSection.title}
              subtitle={contactSection.subtitle}
              align="center"
              as="h2"
            />
          </RevealOnScroll>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left */}
            <RevealOnScroll direction="up" delay={0.1}>
              <div className="flex flex-col gap-8">
                <ContactIntro
                  introduction={contactSection.introduction}
                  availability={contact.availability}
                  location={contact.location}
                  labels={contactSection}
                />
                <ContactActions
                  email={contact.email}
                  phone={contact.phone}
                  emailLabel={contactSection.emailCta}
                  phoneLabel={contactSection.phoneCta}
                />
              </div>
            </RevealOnScroll>

            {/* Right */}
            <RevealOnScroll direction="up" delay={0.2}>
              <div className="flex flex-col gap-8">
                <ContactCards items={contactItems} />
                <ContactSocials socials={socials} />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </Container>
    </section>
  );
}
