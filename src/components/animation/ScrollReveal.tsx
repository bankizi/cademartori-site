'use client';

import { motion, type Variants } from 'framer-motion';
import { type ReactNode } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right';

interface ScrollRevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  once?: boolean;
  className?: string;
}

const getVariants = (direction: Direction, duration: number): Variants => {
  const isHorizontal = direction === 'left' || direction === 'right';
  const offset = direction === 'down' || direction === 'right' ? -30 : 30;

  if (isHorizontal) {
    return {
      hidden: { opacity: 0, x: offset },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration, ease: [0.25, 0.4, 0, 1] },
      },
    };
  }

  return {
    hidden: { opacity: 0, y: offset },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration, ease: [0.25, 0.4, 0, 1] },
    },
  };
};

export function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  once = true,
  className,
}: ScrollRevealProps) {
  const variants = getVariants(direction, duration);

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-50px' }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
