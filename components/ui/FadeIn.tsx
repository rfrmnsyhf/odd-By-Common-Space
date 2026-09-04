'use client';

import { motion, useReducedMotion, type HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
} & Omit<HTMLMotionProps<'div'>, 'ref'>;

/**
 * Ponytail note: no carousel, no parallax. Just one translateY fade-up.
 * Once visible, no further motion.
 */
export function FadeIn({
  children,
  delay = 0,
  y = 16,
  className,
  ...rest
}: Props) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
