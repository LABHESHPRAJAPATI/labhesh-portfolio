import { Layout } from '@/components/layout/Layout';
import { SEO } from '@/components/common/SEO';
import { NotFound } from '@/components/common/NotFound';

/**
 * 404 page.
 */
export default function NotFoundPage() {
  return (
    <Layout>
      <SEO title="Page Not Found" />
      <NotFound />
    </Layout>
  );
}
