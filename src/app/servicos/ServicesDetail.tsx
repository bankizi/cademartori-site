'use client';

import {
  ArrowLeftRight,
  Braces,
  CheckCircle2,
} from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { ScrollReveal } from '@/components/animation/ScrollReveal';

const services = [
  {
    icon: ArrowLeftRight,
    title: 'Intermediação de Ativos Virtuais',
    description:
      'Facilitamos a compra e venda de ativos virtuais de forma segura e regulamentada. Nossa plataforma conecta compradores e vendedores com transparência total em cada operação.',
    features: [
      'Execução de ordens de compra e venda',
      'Preços competitivos com spreads reduzidos',
      'Liquidação rápida e segura',
      'Total transparência nas operações',
      'Relatórios detalhados de transações',
    ],
  },
  {
    icon: Braces,
    title: 'API para Negócios',
    description:
      'Consulte cotações, defina ordens e execute operações com ativos virtuais diretamente da sua própria plataforma, de forma personalizada e integrada ao seu negócio.',
    features: [
      'Cotações em tempo real via API',
      'Criação e gestão de ordens pela sua plataforma',
      'Notificações automáticas de status das operações',
      'Ambiente de testes para homologação',
      'Documentação técnica completa',
      'Suporte dedicado para integração',
    ],
  },
];

export function ServicesDetail() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <div className="space-y-20 lg:space-y-28">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                i % 2 === 1 ? 'lg:[direction:rtl]' : ''
              }`}
            >
              {/* Text content */}
              <ScrollReveal direction={i % 2 === 0 ? 'left' : 'right'}>
                <div className={i % 2 === 1 ? 'lg:[direction:ltr]' : ''}>
                  <div className="mb-5 inline-flex items-center justify-center rounded-xl bg-brand-blue-lighter p-4">
                    <service.icon className="h-8 w-8 text-brand-blue" />
                  </div>
                  <h2 className="text-2xl font-bold text-brand-blue md:text-3xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-text-secondary">
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>

              {/* Features list */}
              <ScrollReveal direction={i % 2 === 0 ? 'right' : 'left'} delay={0.15}>
                <div className={`rounded-2xl bg-surface-secondary border border-border-light p-8 ${i % 2 === 1 ? 'lg:[direction:ltr]' : ''}`}>
                  <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-brand-gold-dark">
                    Características
                  </h3>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                        <span className="text-sm text-text-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-16 rounded-xl bg-brand-offwhite border border-border-light p-6 text-center">
          <p className="text-sm text-text-muted">
            Os serviços descritos acima são prestados em conformidade com a Lei nº 14.478/2022
            e a Resolução BCB nº 338/2023. A rentabilidade passada não é garantia de resultados futuros.
            Investimentos em ativos virtuais envolvem riscos, incluindo a possibilidade de perda total do capital investido.
          </p>
        </div>
      </Container>
    </section>
  );
}
