/**
 * Minimal loading fallback for Suspense.
 */
export function LoadingScreen({ message = 'Loading' }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
      <p className="text-sm font-medium uppercase tracking-widest">{message}...</p>
    </div>
  );
}
