import { Link } from 'react-router-dom';

/**
 * 404 placeholder page.
 */
export function NotFound() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="text-display-xl font-bold text-foreground">404</h1>
      <p className="mt-4 max-w-md text-body text-muted">
        The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="btn btn-primary mt-8"
      >
        Go back home
      </Link>
    </section>
  );
}
