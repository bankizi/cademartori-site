'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { fadeInUp } from '@/lib/animations';

export function CTASection() {
  return (
    <section className="relative py-20 lg:py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-gold via-brand-gold to-brand-gold-dark" />

      {/* Decorative shapes */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10" />
        <div className="absolute -left-10 -bottom-10 h-48 w-48 rounded-full bg-brand-blue/10" />
      </div>

      <Container className="relative text-center">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-brand-blue md:text-3xl lg:text-4xl">
            Comece agora com a Cademartori Z
          </h2>
          <p className="mt-4 text-base text-brand-blue/70 md:text-lg mx-auto max-w-2xl">
            Abra sua conta e tenha acesso a serviços de criptoativos regulamentados
            pelo Banco Central do Brasil.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="#" variant="primary" size="lg">
              Abrir conta
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button href="/contato" variant="ghost" size="lg" className="text-brand-blue hover:bg-brand-blue/5">
              Fale conosco
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
