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

const compliancePolicies = [
  {
    id: 'politica-de-kyc',
    title: 'Política de KYC – Conheça seu cliente',
    description:
      'Todos os clientes passam por um processo estruturado de identificação, verificação e qualificação antes do início das operações. O KYC é um procedimento legal obrigatório que garante a rastreabilidade das transações, previne o uso da plataforma para fins ilícitos e assegura que os recursos envolvidos tenham origem lícita e comprovada, em conformidade com a Lei nº 14.478/2022 e as Resoluções BCB nº 519 e 520/2025.',
  },
  {
    id: 'politica-de-pld',
    title:
      'Política de PLD/FT – Prevenção à Lavagem de Dinheiro e ao Financiamento ao Terrorismo',
    description:
      'A Cademartori Z mantém políticas estruturadas de prevenção à lavagem de dinheiro e ao financiamento do terrorismo, em conformidade com a Lei nº 9.613/1998, a Circular BCB nº 3.978/2020 e as Resoluções BCB nº 519 e 520/2025. Todos os colaboradores, parceiros e prestadores de serviços estão sujeitos a essas diretrizes, que abrangem identificação de clientes, monitoramento de operações e comunicação de situações suspeitas ao COAF.',
  },
  {
    id: 'politica-de-elegibilidade',
    title: 'Política de Elegibilidade e Listagem de Ativos Virtuais',
    description:
      'Critérios técnicos, regulatórios e de integridade orientam a seleção, listagem, revisão e eventual suspensão dos ativos virtuais disponibilizados aos clientes. Cada ativo passa por avaliação estruturada de riscos tecnológicos, operacionais, de liquidez e de conformidade com as normas de PLD/FT, conduzida por um Comitê interno multidisciplinar. Somente ativos com documentação adequada, rastreabilidade de transações e histórico íntegro são elegíveis para oferta.',
  },
  {
    id: 'termos-de-uso',
    title: 'Termos de Uso',
    description:
      'O acesso e uso da plataforma estão condicionados à leitura e aceitação destes termos, que regulam os direitos e obrigações do usuário na utilização dos serviços de intermediação de ativos virtuais. O usuário declara estar ciente dos riscos inerentes ao mercado de ativos virtuais, incluindo volatilidade, liquidez e riscos tecnológicos, sendo integralmente responsável pelas operações realizadas.',
  },
  {
    id: 'politica-de-cookies',
    title: 'Política de Cookies',
    description:
      'Cookies são utilizados para garantir o correto funcionamento da plataforma, personalizar a experiência de navegação e aprimorar continuamente os serviços oferecidos. Os dados coletados são tratados em conformidade com a Lei Geral de Proteção de Dados (LGPD), e o usuário pode gerenciar suas preferências de cookies a qualquer momento diretamente pelo navegador ou dispositivo.',
  },
  {
    id: 'politica-de-privacidade',
    title: 'Política de Privacidade',
    description:
      'Os dados pessoais coletados durante o uso da plataforma são tratados exclusivamente para as finalidades declaradas, como identificação cadastral, execução de operações, prevenção a fraudes e cumprimento de obrigações legais e regulatórias. Todo o tratamento é realizado em conformidade com a Lei Geral de Proteção de Dados (LGPD) e demais normas aplicáveis, assegurando ao titular o direito de acessar, corrigir e solicitar a exclusão de suas informações.',
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
              {compliancePolicies.map((policy) => (
                <div id={policy.id} key={policy.id} className="scroll-mt-28">
                  <h3 className="mb-2 font-semibold text-text-primary">
                    {policy.title}
                  </h3>
                  <p>{policy.description}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Update date */}
        <div className="mt-10 flex items-center justify-center gap-2 text-xs text-text-muted">
          <Calendar className="h-3.5 w-3.5" />
          Última atualização: Setembro de 2026
        </div>
      </Container>
    </section>
  );
}
