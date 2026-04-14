'use client';

import { AlertTriangle } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import { RISKS } from '@/lib/constants';

export function RiskDisclosure() {
  return (
    <section className="py-16 lg:py-20 bg-brand-offwhite">
      <Container>
        <ScrollReveal>
          <div className="mb-10 flex items-center gap-3">
            <AlertTriangle className="h-6 w-6 text-brand-gold-dark" />
            <h2 className="text-2xl font-bold text-brand-blue">
              Riscos Associados
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {RISKS.map((risk, i) => (
            <ScrollReveal key={risk.title} delay={i * 0.1}>
              <div className="rounded-lg border border-border-light bg-white p-6">
                <h3 className="mb-2 font-semibold text-text-primary">
                  {risk.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {risk.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
