'use client';

import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { cardHover, cardTap } from '@/lib/animations';
import { type ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

const paddingStyles = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

export function Card({
  children,
  className,
  hover = true,
  padding = 'md',
}: CardProps) {
  if (!hover) {
    return (
      <div
        className={clsx(
          'rounded-[8px] border border-border-light bg-white',
          paddingStyles[padding],
          className
        )}
      >
        {children}
      </div>
    );
  }

  return (
    <motion.div
      whileHover={cardHover}
      whileTap={cardTap}
      className={clsx(
        'rounded-[8px] border border-border-light bg-white cursor-pointer',
        'transition-colors duration-200',
        paddingStyles[padding],
        className
      )}
    >
      {children}
    </motion.div>
  );
}
