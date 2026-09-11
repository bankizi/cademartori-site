'use client';

import {
  Building2,
  FileText,
  MapPin,
  ShieldCheck,
  Scale,
  Calendar,
  Briefcase,
  BookOpen,
} from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import { StaggerContainer } from '@/components/animation/StaggerContainer';
import { StaggerItem } from '@/components/animation/StaggerItem';
import { Badge } from '@/components/ui/Badge';
import { COMPANY } from '@/lib/constants';

const companyInfo = [
  {
    icon: Building2,
    label: 'Razão Social',
    value: COMPANY.name,
  },
  {
    icon: FileText,
    label: 'CNPJ',
    value: COMPANY.cnpj,
  },
  {
    icon: MapPin,
    label: 'Endereço',
    value: COMPANY.address,
  },
  {
    icon: Briefcase,
    label: 'Tipo',
    value: COMPANY.regulation.type,
  },
  {
    icon: ShieldCheck,
    label: 'Status',
    value: COMPANY.regulation.status,
  },
  {
    icon: Scale,
    label: 'Base Legal',
    value: COMPANY.regulation.legalBasis,
  },
];

export function RegulatoryContent() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        {/* Badge */}
        <ScrollReveal className="mb-12 text-center">
          <Badge variant="large" />
        </ScrollReveal>

        {/* Company information grid */}
        <StaggerContainer className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {companyInfo.map((item) => (
            <StaggerItem key={item.label}>
              <div className="flex items-start gap-4 rounded-xl border border-border-light bg-white p-6 h-full">
                <div className="flex-shrink-0 rounded-lg bg-brand-blue-lighter p-3">
                  <item.icon className="h-5 w-5 text-brand-blue" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm font-medium text-text-primary">
                    {item.value}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Modalities */}
        <ScrollReveal className="mt-16">
          <div className="rounded-2xl bg-surface-secondary border border-border-light p-8">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="h-6 w-6 text-brand-blue" />
              <h2 className="text-xl font-bold text-brand-blue">
                Modalidade em processo de autorização
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {COMPANY.regulation.modalities.map((modality) => (
                <div
                  key={modality}
                  className="flex items-center gap-3 rounded-lg bg-white border border-border-light p-4"
                >
                  <div className="h-3 w-3 rounded-full bg-brand-gold flex-shrink-0" />
                  <span className="text-sm font-medium text-text-primary">
                    {modality}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Compliance policies */}
        <ScrollReveal className="mt-12">
          <div className="rounded-2xl bg-white border border-border-light p-8">
            <h2 className="mb-6 text-xl font-bold text-brand-blue">
              Políticas de Conformidade
            </h2>
            <div className="space-y-6 text-sm leading-relaxed text-text-secondary">
              <div>
                <h3 className="mb-2 font-semibold text-text-primary">
                  Prevenção à Lavagem de Dinheiro (PLD/FTP)
                </h3>
                <p>
                  Mantemos políticas rigorosas de Prevenção à Lavagem de Dinheiro e ao Financiamento
                  do Terrorismo, em conformidade com as diretrizes do COAF e do Banco Central do Brasil.
                  Todos os clientes passam por procedimentos de Know Your Customer (KYC) e monitoramento
                  contínuo de transações.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-text-primary">
                  Governança Corporativa
                </h3>
                <p>
                  Nossa estrutura de governança garante segregação de funções, controles internos robustos
                  e processos de tomada de decisão transparentes, alinhados às melhores práticas do mercado
                  financeiro.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-text-primary">
                  Segurança da Informação
                </h3>
                <p>
                  Adotamos padrões elevados de segurança cibernética, incluindo criptografia de dados,
                  monitoramento 24/7, testes de penetração periódicos e plano de resposta a incidentes.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Update date */}
        <div className="mt-10 flex items-center justify-center gap-2 text-xs text-text-muted">
          <Calendar className="h-3.5 w-3.5" />
          Última atualização: Abril de 2026
        </div>
      </Container>
    </section>
  );
}
