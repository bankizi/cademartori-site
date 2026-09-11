'use client';

import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import { StaggerContainer } from '@/components/animation/StaggerContainer';
import { StaggerItem } from '@/components/animation/StaggerItem';
import { Card } from '@/components/ui/Card';
import { RiskDisclosure } from '@/components/ui/RiskDisclosure';
import { CRYPTO_ASSETS } from '@/lib/constants';
import { Info, ListChecks } from 'lucide-react';

const categoryColors: Record<string, string> = {
  Criptomoeda: 'bg-brand-blue/10 text-brand-blue',
  Token: 'bg-purple-100 text-purple-700',
  Stablecoin: 'bg-green-100 text-green-700',
};

export function AssetsContent() {
  return (
    <>
      <section className="py-16 lg:py-24">
        <Container>
          {/* Asset grid */}
          <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CRYPTO_ASSETS.map((asset) => (
              <StaggerItem key={asset.ticker}>
                <Card className="text-center" padding="lg">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-offwhite">
                    <Image
                      src={asset.icon}
                      alt=""
                      width={40}
                      height={40}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-text-primary">{asset.name}</h3>
                  <p className="mt-1 text-sm font-medium text-text-muted">{asset.ticker}</p>
                  <span
                    className={`mt-3 inline-block rounded-full px-3 py-1 text-xs font-medium ${
                      categoryColors[asset.category] || 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {asset.category}
                  </span>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Listing criteria */}
          <ScrollReveal className="mt-16">
            <div className="rounded-2xl bg-surface-secondary border border-border-light p-8">
              <div className="flex items-center gap-3 mb-6">
                <ListChecks className="h-6 w-6 text-brand-blue" />
                <h2 className="text-xl font-bold text-brand-blue">
                  Critérios de Listagem
                </h2>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-text-secondary">
                <p>
                  A seleção de ativos virtuais disponíveis para negociação segue critérios rigorosos
                  que incluem:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-blue flex-shrink-0" />
                    Análise de conformidade regulatória e classificação do ativo
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-blue flex-shrink-0" />
                    Avaliação de liquidez e volume de negociação em mercados globais
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-blue flex-shrink-0" />
                    Análise técnica do protocolo, segurança e governança
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-blue flex-shrink-0" />
                    Due diligence sobre o projeto, sua governança e histórico disponível
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-blue flex-shrink-0" />
                    Revisão periódica e possibilidade de deslistagem conforme critérios internos
                  </li>
                </ul>
              </div>
            </div>
          </ScrollReveal>

          {/* Disclaimer */}
          <ScrollReveal className="mt-8">
            <div className="flex items-start gap-3 rounded-xl bg-brand-gold/10 border border-brand-gold/20 p-5">
              <Info className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-gold-dark" />
              <p className="text-sm text-text-secondary">
                A disponibilidade de ativos pode ser alterada a qualquer momento, sem aviso prévio,
                por motivos regulatórios, de segurança ou de mercado. A listagem de um ativo não
                constitui recomendação de investimento.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <RiskDisclosure title="Riscos que você precisa conhecer" isCompact />
    </>
  );
}
