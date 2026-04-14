'use client';

import { Container } from '@/components/layout/Container';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import { COMPANY } from '@/lib/constants';

const sections = [
  {
    id: 'termos',
    title: '1. Termos Gerais',
    content: `Ao utilizar os serviços da ${COMPANY.name}, o usuário declara ter lido, compreendido e aceito integralmente estes Termos de Uso. A utilização de qualquer serviço implica na aceitação automática de todas as condições aqui estabelecidas.

A ${COMPANY.shortName} é uma Prestadora de Serviços de Ativos Virtuais (VASP) devidamente autorizada pelo Banco Central do Brasil, nos termos da ${COMPANY.regulation.legalBasis}.`,
  },
  {
    id: 'custodia',
    title: '2. Custódia de Ativos',
    content: `A ${COMPANY.shortName} atua como custodiante dos ativos virtuais dos clientes, mantendo-os em infraestrutura de segurança segregada. Os ativos sob custódia permanecem como propriedade exclusiva do cliente.

A empresa adota procedimentos de segurança que incluem, mas não se limitam a: armazenamento em cold wallets, criptografia de dados, autenticação multifator e auditorias periódicas.

Em caso de falência ou liquidação da empresa, os ativos virtuais sob custódia não integram a massa falida, sendo restituídos aos respectivos titulares, nos termos da lei.`,
  },
  {
    id: 'responsabilidades',
    title: '3. Responsabilidades',
    content: `A ${COMPANY.shortName} se compromete a:

• Prestar os serviços com diligência, boa-fé e transparência;
• Manter a segregação patrimonial dos ativos dos clientes;
• Fornecer informações claras e completas sobre os serviços e riscos;
• Cumprir todas as obrigações regulatórias aplicáveis;
• Reportar operações suspeitas conforme políticas de PLD/FTP.

O cliente é responsável por:

• Fornecer informações cadastrais verdadeiras e atualizadas;
• Manter a segurança de suas credenciais de acesso;
• Declarar a origem lícita dos recursos utilizados;
• Cumprir suas obrigações tributárias;
• Comunicar imediatamente qualquer acesso não autorizado à sua conta.`,
  },
  {
    id: 'conflitos',
    title: '4. Conflitos de Interesse',
    content: `A ${COMPANY.shortName} mantém política de gestão de conflitos de interesse, assegurando que:

• As operações por conta própria da empresa são segregadas das operações dos clientes;
• Nenhum colaborador pode utilizar informações privilegiadas em benefício próprio;
• Existe segregação de funções entre áreas de operação, compliance e gestão de riscos;
• Todas as situações de potencial conflito são identificadas, documentadas e mitigadas.

O Comitê de Compliance é responsável por monitorar e tratar situações de conflito de interesse, reportando diretamente à diretoria.`,
  },
  {
    id: 'privacidade',
    title: '5. Política de Privacidade e LGPD',
    content: `A ${COMPANY.shortName} trata os dados pessoais de seus clientes em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).

Dados coletados e finalidades:
• Dados cadastrais (nome, CPF/CNPJ, endereço): cumprimento de obrigações regulatórias e KYC;
• Dados de transação: registro e monitoramento de operações conforme exigências do BACEN;
• Dados de acesso: segurança e prevenção a fraudes.

Direitos do titular:
• Acesso aos dados pessoais armazenados;
• Correção de dados incompletos ou desatualizados;
• Eliminação de dados desnecessários;
• Portabilidade dos dados;
• Revogação do consentimento.

Encarregado de Proteção de Dados (DPO):
${COMPANY.dpo.name}
E-mail: ${COMPANY.dpo.email}

As solicitações relacionadas à proteção de dados devem ser encaminhadas ao DPO e serão respondidas no prazo legal de 15 dias úteis.`,
  },
  {
    id: 'disposicoes',
    title: '6. Disposições Finais',
    content: `Estes Termos de Uso podem ser alterados a qualquer tempo, mediante aviso prévio aos clientes. A continuidade na utilização dos serviços após a alteração implica na aceitação dos novos termos.

O foro da Comarca de São Paulo/SP é eleito para dirimir quaisquer controvérsias decorrentes destes Termos, com renúncia expressa a qualquer outro, por mais privilegiado que seja.

Toda informação publicada neste site constitui compromisso regulatório imediato perante o Banco Central do Brasil. A ${COMPANY.shortName} se compromete a manter todas as informações atualizadas e em conformidade com a regulamentação vigente.`,
  },
];

export function TermsContent() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <div className="lg:grid lg:grid-cols-[250px_1fr] lg:gap-12">
          {/* Table of contents — desktop sidebar */}
          <nav className="hidden lg:block" aria-label="Índice">
            <div className="sticky top-28">
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-text-muted">
                Índice
              </h3>
              <ul className="space-y-2 border-l-2 border-border-light">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="block border-l-2 -ml-[2px] border-transparent pl-4 text-sm text-text-secondary hover:text-brand-blue hover:border-brand-blue transition-colors py-1"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Mobile TOC */}
          <div className="mb-10 lg:hidden rounded-xl bg-surface-secondary border border-border-light p-5">
            <h3 className="mb-3 text-sm font-semibold text-brand-blue">Índice</h3>
            <ul className="space-y-1.5">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-sm text-text-secondary hover:text-brand-blue transition-colors"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Content */}
          <article className="space-y-12">
            {sections.map((section) => (
              <ScrollReveal key={section.id}>
                <div id={section.id} className="scroll-mt-28">
                  <h2 className="mb-4 text-xl font-bold text-brand-blue">
                    {section.title}
                  </h2>
                  <div className="whitespace-pre-line text-sm leading-relaxed text-text-secondary">
                    {section.content}
                  </div>
                </div>
              </ScrollReveal>
            ))}

            <div className="border-t border-border-light pt-8 text-xs text-text-muted">
              <p>Última atualização: Abril de 2026</p>
              <p className="mt-1">{COMPANY.name} — CNPJ: {COMPANY.cnpj}</p>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}
