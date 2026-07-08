import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { RevealOnScroll } from '@/components/animation/RevealOnScroll';
import { scrollToSection } from '@/lib/scroll';
import { SECTION_IDS } from '@/constants/sections';
import { useReducedMotion } from '@/hooks';
import { personal, about, socials } from '@/data';
import { HeroBackground } from './hero/HeroBackground';
import { HeroTypewriter } from './hero/HeroTypewriter';
import { HeroStats } from './hero/HeroStats';
import { HeroImage } from './hero/HeroImage';
import { HeroSocials } from './hero/HeroSocials';
import { ScrollIndicator } from './hero/ScrollIndicator';

/**
 * Hero section for Labhesh Prajapati.
 * Premium Awwwards-inspired design with animations, stats, and a profile image.
 */
export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const heroBadges = about.favoriteTechnologies.slice(0, 6);

  return (
    <section
      id={SECTION_IDS.HOME}
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
      aria-label="Introduction"
    >
      <HeroBackground />

      <Container className="relative z-10 py-14 md:py-20 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          {/* Left content */}
          <div className="order-2 flex flex-col gap-7 lg:order-1">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-3"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted sm:text-sm">
                {personal.greeting}
              </span>
              <h1 className="text-heading-1 font-bold tracking-tight text-foreground md:text-display lg:text-display-xl">
                {personal.name}
              </h1>
              <p className="text-heading-3 font-semibold text-foreground md:text-heading-2">
                {personal.title}
              </p>
              <div className="pt-1">
                <HeroTypewriter titles={personal.animatedTitles} />
              </div>
            </motion.div>

            <RevealOnScroll direction="up" delay={0.2}>
              <p className="max-w-xl text-sm leading-relaxed text-muted sm:text-base">
                {about.shortDescription}
              </p>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={0.3}>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={personal.resume}
                  download
                  className="btn btn-primary sm:btn-lg"
                  aria-label="Download resume as PDF"
                >
                  <Download className="h-5 w-5" aria-hidden="true" />
                  Download Resume
                </a>
                <Button
                  variant="outline"
                  size="md"
                  className="sm:btn-lg"
                  onClick={() => scrollToSection(SECTION_IDS.CONTACT)}
                  aria-label="Scroll to contact section"
                >
                  Contact Me
                </Button>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={0.4}>
              <HeroSocials socials={socials} />
            </RevealOnScroll>

            <div className="pt-2">
              <HeroStats stats={personal.stats} />
            </div>
          </div>

          {/* Right image */}
          <div className="order-1 flex justify-center lg:order-2">
            <HeroImage
              image={personal.image}
              imageHover={personal.imageHover}
              name={personal.name}
              badges={heroBadges}
            />
          </div>
        </div>
      </Container>

      <ScrollIndicator target={SECTION_IDS.ABOUT} />
    </section>
  );
}
