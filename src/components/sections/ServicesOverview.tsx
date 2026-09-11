'use client';

import { ArrowLeftRight, Network, ShieldCheck, ArrowRight } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { StaggerContainer } from '@/components/animation/StaggerContainer';
import { StaggerItem } from '@/components/animation/StaggerItem';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import { SERVICES } from '@/lib/constants';
import Link from 'next/link';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ArrowLeftRight,
  Network,
  ShieldCheck,
};

export function ServicesOverview() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <Container>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Nossos Serviços"
            title="Soluções completas em ativos virtuais"
            subtitle="Atuamos como sua intermediária no mercado de ativos virtuais, conectando você às melhores operações."
          />
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <StaggerItem key={service.id}>
                <Card className="group h-full" padding="lg">
                  <div className="mb-5 inline-flex items-center justify-center rounded-xl bg-brand-blue-lighter p-3">
                    {Icon && (
                      <Icon className="h-6 w-6 text-brand-blue" />
                    )}
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-brand-blue">
                    {service.title}
                  </h3>
                  <p className="mb-5 text-sm leading-relaxed text-text-secondary">
                    {service.description}
                  </p>
                  <Link
                    href="/servicos"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-gold-dark hover:text-brand-blue transition-colors"
                  >
                    Saiba mais
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
}
