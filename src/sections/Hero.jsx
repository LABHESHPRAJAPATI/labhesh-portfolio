import { useReducedMotion } from 'framer-motion';
import { Download } from 'lucide-react';
import { RevealOnScroll } from '@/components/animation/RevealOnScroll';
import { SECTION_IDS } from '@/constants/sections';
import { personal } from '@/data';
import { useTypewriter } from '@/hooks';

/**
 * Hero section for Labhesh Prajapati.
 * Two-column layout with editorial accent line, display type, and framed profile image.
 */
export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const { text } = useTypewriter(personal.tagline, { typingSpeed: 60 });

  const [firstName, lastName] = personal.name.split(' ');

  return (
    <section
      id={SECTION_IDS.HOME}
      className="section section-dark relative flex min-h-screen items-center pb-24 pt-32 lg:pb-32 lg:pt-40"
      aria-label="Introduction"
    >
      <div className="container-main grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left content */}
        <div className="order-2 flex flex-col gap-6 lg:order-1">
          <RevealOnScroll>
            <div className="flex items-center gap-4">
              <span className="section-label mb-0">{personal.greeting}</span>
              <span
                className="hidden h-px flex-1 bg-gradient-to-r from-accent/50 to-transparent md:block"
                aria-hidden="true"
              />
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.05}>
            <h1 className="font-display text-[clamp(48px,7vw,84px)] font-bold leading-[1.05] tracking-[-0.04em]">
              <span className="block">{firstName}</span>
              <span className="block">{lastName}</span>
            </h1>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <p className="min-h-[3.5rem] text-base leading-relaxed text-muted md:text-lg">
              {text}
              {!shouldReduceMotion && (
                <span className="ml-1 inline-block animate-blink text-accent" aria-hidden="true">
                  |
                </span>
              )}
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.15}>
            <a
              href={personal.resume}
              download
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-accent px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.08em] text-white shadow-[0_10px_30px_rgba(249,115,22,0.25)] transition-all duration-300 hover:shadow-[0_15px_40px_rgba(249,115,22,0.35)]"
              aria-label="Download resume as PDF"
            >
              <span className="relative z-10">Download CV</span>
              <span className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-y-0.5">
                <Download className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              <span
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-accent-hover to-accent transition-transform duration-500 group-hover:translate-x-0"
                aria-hidden="true"
              />
            </a>
          </RevealOnScroll>
        </div>

        {/* Right image */}
        <RevealOnScroll delay={0.2} className="order-1 flex justify-center lg:order-2">
          <div className="group relative">
            {/* Outer soft glow */}
            <div
              className="absolute -inset-3 rounded-[28px] border border-accent/20 bg-accent/5 transition-all duration-500 group-hover:-inset-4 group-hover:border-accent/30 md:-inset-4 md:rounded-[32px] md:group-hover:-inset-5"
              aria-hidden="true"
            />

            {/* Frame with double border */}
            <div className="relative h-[380px] w-[300px] overflow-hidden rounded-2xl border border-white/10 bg-elevated p-2 shadow-2xl transition-colors duration-500 group-hover:border-accent/40 md:h-[480px] md:w-[380px]">
              <div className="relative h-full w-full overflow-hidden rounded-xl border border-white/10">
                <img
                  src={personal.image}
                  alt={`${personal.name} — ${personal.title}`}
                  className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  loading="eager"
                />
              </div>
            </div>

            {/* Experience badge */}
            <div className="absolute -left-4 bottom-10 flex items-center gap-3 rounded-full bg-accent px-5 py-3 text-white shadow-2xl shadow-accent/20 md:-left-8">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-lg font-bold">
                {personal.experience}
              </span>
              <span className="h-8 w-px bg-white/25" aria-hidden="true" />
              <span className="font-display text-[11px] font-semibold uppercase tracking-[0.06em] leading-snug whitespace-nowrap">
                Years of
                <br />
                Experience
              </span>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
