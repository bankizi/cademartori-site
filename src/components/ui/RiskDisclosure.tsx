'use client';

import { AlertTriangle } from 'lucide-react';
import { clsx } from 'clsx';
import { Container } from '@/components/layout/Container';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import { RISKS } from '@/lib/constants';

interface RiskDisclosureProps {
  title?: string;
  isCompact?: boolean;
}

export function RiskDisclosure({
  title = 'Riscos Associados',
  isCompact = false,
}: RiskDisclosureProps) {
  return (
    <section
      className={clsx(
        'bg-brand-offwhite',
        isCompact ? 'py-8 lg:py-10' : 'py-16 lg:py-20'
      )}
    >
      <Container>
        <ScrollReveal>
          <div
            className={clsx(
              'flex items-center',
              isCompact ? 'mb-4 gap-2' : 'mb-10 gap-3'
            )}
          >
            <AlertTriangle
              className={clsx(
                'text-brand-gold-dark',
                isCompact ? 'h-4 w-4' : 'h-6 w-6'
              )}
            />
            <h2
              className={clsx(
                'text-brand-blue',
                isCompact ? 'text-lg font-semibold' : 'text-2xl font-bold'
              )}
            >
              {title}
            </h2>
          </div>
        </ScrollReveal>

        <div
          className={clsx(
            'grid grid-cols-1 md:grid-cols-2',
            isCompact ? 'gap-2' : 'gap-4'
          )}
        >
          {RISKS.map((risk, i) => (
            <ScrollReveal key={risk.title} delay={i * 0.1}>
              <div
                className={clsx(
                  'rounded-lg border border-border-light bg-white',
                  isCompact ? 'p-3' : 'p-6'
                )}
              >
                <h3
                  className={clsx(
                    'text-text-primary',
                    isCompact ? 'mb-1 text-sm font-medium' : 'mb-2 font-semibold'
                  )}
                >
                  {risk.title}
                </h3>
                <p
                  className={clsx(
                    'leading-relaxed text-text-secondary',
                    isCompact ? 'text-xs' : 'text-sm'
                  )}
                >
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
