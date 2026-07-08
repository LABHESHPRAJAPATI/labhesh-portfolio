/**
 * Design tokens for portfolio1.
 * Keep this file content-free; it only defines the visual system.
 */

export const COLORS = {
  background: '#050816',
  surface: '#0B1120',
  elevated: '#0F172A',
  primary: '#F97316',
  secondary: '#A855F7',
  accent: '#22D3EE',
  success: '#22C55E',
  foreground: '#FFFFFF',
  muted: '#94A3B8',
  border: 'rgba(255, 255, 255, 0.10)',
};

export const HSL_COLORS = {
  background: '229 63% 5%',
  surface: '223 49% 8%',
  elevated: '222 45% 12%',
  primary: '24 95% 55%',
  secondary: '270 75% 60%',
  accent: '186 90% 48%',
  success: '142 71% 45%',
  foreground: '0 0% 100%',
  muted: '215 20% 65%',
};

export const TYPOGRAPHY = {
  fontFamily: {
    sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
    mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
  },
  sizes: {
    'display-xl': { fontSize: '5.5rem', lineHeight: '1.05', letterSpacing: '-0.04em', fontWeight: '700' },
    display: { fontSize: '4.5rem', lineHeight: '1.08', letterSpacing: '-0.035em', fontWeight: '700' },
    'display-sm': { fontSize: '3.5rem', lineHeight: '1.12', letterSpacing: '-0.03em', fontWeight: '700' },
    'heading-1': { fontSize: '2.75rem', lineHeight: '1.12', letterSpacing: '-0.025em', fontWeight: '700' },
    'heading-2': { fontSize: '2.25rem', lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '600' },
    'heading-3': { fontSize: '1.625rem', lineHeight: '1.3', letterSpacing: '-0.015em', fontWeight: '600' },
    'heading-4': { fontSize: '1.25rem', lineHeight: '1.4', letterSpacing: '-0.01em', fontWeight: '600' },
    'body-lg': { fontSize: '1.125rem', lineHeight: '1.75' },
    body: { fontSize: '1rem', lineHeight: '1.7' },
    sm: { fontSize: '0.875rem', lineHeight: '1.6' },
    caption: { fontSize: '0.75rem', lineHeight: '1.5', letterSpacing: '0.02em' },
  },
};

export const SPACING = {
  section: {
    sm: '4rem',
    md: '6rem',
    lg: '7rem',
  },
  scale: {
    18: '4.5rem',
    22: '5.5rem',
    26: '6.5rem',
    30: '7.5rem',
    34: '8.5rem',
    38: '9.5rem',
    42: '10.5rem',
    46: '11.5rem',
  },
};

export const RADII = {
  sm: '0.375rem',
  md: '0.5rem',
  lg: '0.75rem',
  xl: '1rem',
  '2xl': '1.25rem',
  '3xl': '1.5rem',
  '4xl': '2rem',
  full: '9999px',
};

export const SHADOWS = {
  glow: '0 0 40px -10px hsl(24 95% 55% / 0.3)',
  glowPrimary: '0 0 24px -4px hsl(24 95% 55% / 0.45)',
  glowSecondary: '0 0 24px -4px hsl(270 75% 60% / 0.45)',
  glowAccent: '0 0 24px -4px hsl(186 90% 48% / 0.45)',
  card: '0 8px 32px -12px rgba(0, 0, 0, 0.5)',
  cardHover: '0 16px 48px -12px rgba(0, 0, 0, 0.6)',
  glass: '0 8px 32px -12px rgba(0, 0, 0, 0.4)',
  soft: '0 4px 20px -8px rgba(0, 0, 0, 0.4)',
  nav: '0 4px 30px -10px rgba(0, 0, 0, 0.5)',
};

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

export const CONTAINER_WIDTHS = {
  default: '75rem',
  sm: '64rem',
  lg: '80rem',
  xl: '90rem',
};

export const TRANSITIONS = {
  fast: '200ms cubic-bezier(0.16, 1, 0.3, 1)',
  normal: '300ms cubic-bezier(0.16, 1, 0.3, 1)',
  slow: '500ms cubic-bezier(0.16, 1, 0.3, 1)',
  smooth: '300ms cubic-bezier(0.25, 0.1, 0.25, 1)',
  spring: 'cubic-bezier(0.16, 1, 0.3, 1)',
};
