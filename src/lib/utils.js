import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges Tailwind classes safely.
 * Use this everywhere className is composed.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
