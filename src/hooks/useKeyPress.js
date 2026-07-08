import { useEffect, useCallback } from 'react';

/**
 * Trigger a callback when a specific key is pressed.
 */
export function useKeyPress(targetKey, callback) {
  const handler = useCallback(
    (event) => {
      if (event.key === targetKey) {
        callback(event);
      }
    },
    [targetKey, callback]
  );

  useEffect(() => {
    if (typeof document === 'undefined') return;

    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [handler]);
}
