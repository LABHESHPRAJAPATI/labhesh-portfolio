import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Container } from '@/components/layout/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { RevealOnScroll } from '@/components/animation/RevealOnScroll';
import { SECTION_IDS } from '@/constants/sections';
import { projectsSection, projects } from '@/data/projects';
import { useTheme } from '@context/ThemeContext';
import { ProjectsBackground } from './projects/ProjectsBackground';
import { ProjectCard } from './projects/ProjectCard';

import 'swiper/css';
import 'swiper/css/pagination';

/**
 * Projects section.
 * Swiper slider showcasing project cards with autoplay, pagination, and responsive slides.
 */
export function Projects() {
  const swiperRef = useRef(null);
  const { direction } = useTheme();
  const enableLoop = projects.length > 2;

  return (
    <section
      id={SECTION_IDS.PROJECTS}
      className="relative overflow-hidden py-16 md:py-24 lg:py-28"
      aria-label="Featured projects"
    >
      <ProjectsBackground />

      <Container className="relative z-10">
        <div className="flex flex-col gap-10 md:gap-14">
          <RevealOnScroll direction="up" className="mx-auto max-w-2xl text-center">
            <SectionTitle
              title={projectsSection.title}
              subtitle={projectsSection.subtitle}
              align="center"
              as="h2"
            />
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.1}>
            <div
              onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
              onMouseLeave={() => swiperRef.current?.autoplay?.start()}
              className="projects-swiper-wrapper"
            >
              <Swiper
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                dir={direction}
                modules={[Autoplay, Pagination]}
                slidesPerView={1}
                spaceBetween={24}
                loop={enableLoop}
                speed={700}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                grabCursor
                breakpoints={{
                  768: {
                    spaceBetween: 28,
                  },
                  1280: {
                    spaceBetween: 32,
                  },
                }}
                className="!pb-14"
              >
                {projects.map((project, index) => (
                  <SwiperSlide key={project.id} className="!h-auto">
                    <ProjectCard project={project} index={index} labels={projectsSection} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
}
