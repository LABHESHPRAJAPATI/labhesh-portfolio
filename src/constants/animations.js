/**
 * Reusable Framer Motion variants and animation constants.
 * No portfolio content — pure animation system.
 */

export const EASING = {
  spring: [0.16, 1, 0.3, 1],
  smooth: [0.25, 0.1, 0.25, 1],
  bounce: [0.68, -0.55, 0.265, 1.55],
  easeOut: [0, 0, 0.2, 1],
  easeInOut: [0.4, 0, 0.2, 1],
};

export const DURATION = {
  fast: 0.2,
  normal: 0.4,
  slow: 0.6,
  slower: 0.8,
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATION.slow, ease: EASING.spring },
  },
};

export const fadeInFast = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATION.normal, ease: EASING.spring },
  },
};

export const slideUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.slow, ease: EASING.spring },
  },
};

export const slideDown = {
  hidden: { opacity: 0, y: -24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.slow, ease: EASING.spring },
  },
};

export const slideLeft = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATION.slow, ease: EASING.spring },
  },
};

export const slideRight = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATION.slow, ease: EASING.spring },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: DURATION.normal, ease: EASING.spring },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const staggerContainerFast = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.02,
    },
  },
};

export const staggerContainerSlow = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export const pageTransition = {
  initial: { opacity: 0, y: 16 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.slow, ease: EASING.spring },
  },
  exit: {
    opacity: 0,
    y: -16,
    transition: { duration: DURATION.normal, ease: EASING.smooth },
  },
};

export const revealUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.slow, ease: EASING.spring },
  },
};

export const revealScale = {
  hidden: { opacity: 0, scale: 0.95, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: DURATION.slow, ease: EASING.spring },
  },
};

export const hoverLift = {
  rest: { y: 0, boxShadow: '0 8px 32px -12px rgba(0, 0, 0, 0.5)' },
  hover: {
    y: -4,
    boxShadow: '0 16px 48px -12px rgba(0, 0, 0, 0.6)',
    transition: { duration: DURATION.normal, ease: EASING.spring },
  },
};

export const tapScale = {
  tap: { scale: 0.98 },
};

export const buttonHover = {
  rest: { scale: 1 },
  hover: { scale: 1.02, transition: { duration: DURATION.fast, ease: EASING.spring } },
  tap: { scale: 0.98 },
};

export const spinnerSpin = {
  animate: {
    rotate: 360,
    transition: { repeat: Infinity, duration: 1, ease: 'linear' },
  },
};
