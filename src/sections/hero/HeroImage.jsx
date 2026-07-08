import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Badge } from '@/components/ui/Badge';
import { useReducedMotion } from '@/hooks';

const badgePositions = [
  '-top-3 start-[10%]',
  '-top-3 end-[10%]',
  'top-[38%] -start-2 md:-start-4',
  'top-[44%] -end-2 md:-end-4',
  '-bottom-3 start-[10%]',
  '-bottom-3 end-[10%]',
];

const springConfig = { stiffness: 300, damping: 25, mass: 0.8 };

/**
 * Premium interactive profile image with 3D tilt, smooth hover crossfade,
 * gradient border, glow, and floating tech badges.
 * Uses object-contain so the full portrait is always visible.
 */
export function HeroImage({ image, imageHover, name, badges = [] }) {
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  const webpImage = image.replace(/\.(png|jpe?g)$/i, '.webp');

  // Mouse position for subtle 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), springConfig);
  const glowX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-20, 20]), springConfig);
  const glowY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-20, 20]), springConfig);

  const handleMouseMove = (e) => {
    if (shouldReduceMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={containerRef}
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="relative mx-auto flex w-full max-w-md items-center justify-center lg:max-w-lg xl:max-w-xl"
      style={{ perspective: 1000 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onFocus={() => setIsHovered(true)}
      onBlur={handleMouseLeave}
      tabIndex={0}
    >
      {/* Ambient glow */}
      <motion.div
        className="absolute h-[95%] w-[95%] rounded-3xl bg-gradient-to-tr from-primary/30 via-secondary/20 to-accent/20 blur-[100px]"
        style={{ x: glowX, y: glowY }}
        animate={{ opacity: isHovered ? 0.8 : 0.5, scale: isHovered ? 1.08 : 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        aria-hidden="true"
      />

      {/* Static gradient border */}
      <motion.div
        animate={{ scale: isHovered ? 1.02 : 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute h-[96%] w-[96%] rounded-3xl bg-gradient-to-tr from-primary via-secondary to-accent p-[2px]"
      >
        <div className="h-full w-full rounded-3xl bg-background" />
      </motion.div>

      {/* Image container with 3D tilt */}
      <motion.div
        animate={shouldReduceMotion ? {} : { y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
        className="relative w-full max-w-[15rem] overflow-hidden rounded-3xl border-4 border-background bg-surface shadow-glow-primary transition-shadow duration-500 hover:shadow-[0_0_48px_-6px_hsl(var(--primary)/0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:max-w-[18rem] md:max-w-[22rem] lg:max-w-[26rem] xl:max-w-[30rem] aspect-[2/3]"
      >
        {/* Primary image */}
        <motion.picture
          initial={false}
          animate={{
            opacity: isHovered ? 0 : 1,
            scale: isHovered ? 1.08 : 1,
            filter: isHovered ? 'blur(4px)' : 'blur(0px)',
          }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 h-full w-full"
        >
          <source srcSet={webpImage} type="image/webp" />
          <img
            src={image}
            alt={`${name} professional photo`}
            width="479"
            height="720"
            className="h-full w-full object-contain"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </motion.picture>

        {/* Hover image */}
        {imageHover && (
          <motion.div
            initial={false}
            animate={{
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1 : 0.92,
            }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 h-full w-full"
          >
            <img
              src={imageHover}
              alt={`${name} alternate photo`}
              width="479"
              height="720"
              className="h-full w-full object-contain"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
        )}

        {/* Subtle overlay vignette on hover */}
        <motion.div
          initial={false}
          animate={{ opacity: isHovered ? 0.15 : 0 }}
          transition={{ duration: 0.5 }}
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"
          aria-hidden="true"
        />
      </motion.div>

      {/* Floating badges */}
      {badges.slice(0, badgePositions.length).map((badge, index) => (
        <motion.div
          key={badge}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 + index * 0.2, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className={`absolute ${badgePositions[index]}`}
        >
          <motion.div
            animate={shouldReduceMotion ? {} : { y: [0, -6, 0] }}
            transition={{
              duration: 4 + index * 0.2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: index * 0.2,
            }}
          >
            <Badge variant="glass" size="sm" className="glass-strong shadow-glass">
              {badge}
            </Badge>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
}
