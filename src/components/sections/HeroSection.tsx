'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { heroStagger, heroItem } from '@/lib/animations';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/layout/Container';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-offwhite via-white to-brand-blue-lighter">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,74,144,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,74,144,1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
        {/* Floating shapes */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -right-20 top-20 h-64 w-64 rounded-full bg-brand-blue/5 blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [0, -3, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -left-10 bottom-20 h-48 w-48 rounded-full bg-brand-gold/10 blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute right-1/4 bottom-1/4 h-32 w-32 rounded-full bg-brand-blue-light/20 blur-2xl"
        />
      </div>

      <Container className="relative py-20 md:py-28 lg:py-36">
        <motion.div
          variants={heroStagger}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-4xl text-center"
        >
          {/* Badge */}
          <motion.div variants={heroItem} className="mb-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm border border-brand-blue-light/50 px-4 py-2 text-sm font-medium text-brand-blue shadow-sm">
              <ShieldCheck className="h-4 w-4 text-green-600" />
              VASP Regulada pelo Banco Central do Brasil
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={heroItem}
            className="text-3xl font-bold leading-tight tracking-tight text-brand-blue md:text-5xl lg:text-6xl"
          >
            Soluções em{' '}
            <span className="relative">
              <span className="relative z-10">criptoativos</span>
              <span className="absolute bottom-1 left-0 z-0 h-3 w-full bg-brand-gold/30 md:h-4" />
            </span>
            <br />
            com segurança e conformidade
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={heroItem}
            className="mt-6 text-base leading-relaxed text-text-secondary md:text-lg lg:text-xl"
          >
            Intermediação, custódia e staking de ativos virtuais com a confiança
            de uma empresa regulada e comprometida com a transparência.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={heroItem}
            className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <Button href="#" variant="primary" size="lg">
              Abrir conta
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button href="/servicos" variant="outline" size="lg">
              Conheça nossos serviços
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={heroItem}
            className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-text-muted"
          >
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              Regulada pelo BACEN
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-brand-blue" />
              Lei nº 14.478/2022
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-brand-gold" />
              Compliance ativo
            </div>
          </motion.div>
        </motion.div>
      </Container>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
