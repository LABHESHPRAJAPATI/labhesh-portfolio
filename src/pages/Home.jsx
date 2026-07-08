import { Layout } from '@/components/layout/Layout';
import { SEO } from '@/components/common/SEO';
import { Hero, About, Skills, Experience, Projects, Education, Contact } from '@/sections';

/**
 * Home page.
 * Renders all portfolio sections.
 */
export default function Home() {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </Layout>
  );
}
