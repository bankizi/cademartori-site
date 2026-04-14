'use client';

import { motion } from 'framer-motion';
import { heroStagger, heroItem } from '@/lib/animations';
import { Container } from '@/components/layout/Container';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-blue via-brand-blue to-brand-blue-dark py-16 md:py-20 lg:py-24">
      {/* Decorative elements */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/5" />
        <div className="absolute -left-10 bottom-0 h-48 w-48 rounded-full bg-brand-gold/10" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <Container className="relative">
        <motion.div
          variants={heroStagger}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {eyebrow && (
            <motion.span
              variants={heroItem}
              className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold"
            >
              {eyebrow}
            </motion.span>
          )}
          <motion.h1
            variants={heroItem}
            className="text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              variants={heroItem}
              className="mt-4 text-base leading-relaxed text-brand-blue-light md:text-lg"
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
