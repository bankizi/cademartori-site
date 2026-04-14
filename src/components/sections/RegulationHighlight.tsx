'use client';

import { ShieldCheck, Scale, FileText, ArrowRight } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import { StaggerContainer } from '@/components/animation/StaggerContainer';
import { StaggerItem } from '@/components/animation/StaggerItem';
import { Button } from '@/components/ui/Button';

const highlights = [
  {
    icon: ShieldCheck,
    title: 'VASP Autorizada',
    description: 'Prestadora de Serviços de Ativos Virtuais com autorização do Banco Central do Brasil.',
  },
  {
    icon: Scale,
    title: 'Compliance Ativo',
    description: 'Políticas robustas de PLD/FTP e KYC em total conformidade com a regulamentação vigente.',
  },
  {
    icon: FileText,
    title: 'Base Legal',
    description: 'Operações fundamentadas na Lei nº 14.478/2022 e Resolução BCB nº 338/2023.',
  },
];

export function RegulationHighlight() {
  return (
    <section className="py-20 lg:py-28 bg-surface-secondary">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: text content */}
          <div>
            <ScrollReveal direction="left">
              <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold-dark">
                Conformidade Regulatória
              </span>
              <h2 className="text-2xl font-bold leading-tight text-brand-blue md:text-3xl lg:text-4xl">
                Transparência e segurança em cada operação
              </h2>
              <p className="mt-4 text-base leading-relaxed text-text-secondary md:text-lg">
                A Cademartori Z opera sob supervisão do Banco Central do Brasil,
                garantindo que todas as operações com ativos virtuais sigam os mais
                altos padrões de conformidade e governança.
              </p>
              <div className="mt-8">
                <Button href="/regulatorio" variant="outline">
                  Informações regulatórias
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: feature cards */}
          <StaggerContainer className="space-y-4" staggerDelay={0.15}>
            {highlights.map((item) => (
              <StaggerItem key={item.title}>
                <div className="flex items-start gap-4 rounded-xl bg-white p-5 border border-border-light shadow-sm">
                  <div className="flex-shrink-0 rounded-lg bg-brand-blue-lighter p-3">
                    <item.icon className="h-5 w-5 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-blue">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                      {item.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Container>
    </section>
  );
}
