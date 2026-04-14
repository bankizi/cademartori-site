import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { RegulatoryContent } from './RegulatoryContent';

export const metadata: Metadata = {
  title: 'Conformidade Regulatória',
  description:
    'Informações regulatórias da Cademartori Z Soluções LTDA, VASP regulada pelo Banco Central do Brasil. Razão social, CNPJ, modalidades e base legal.',
};

export default function RegulatorioPage() {
  return (
    <>
      <PageHero
        eyebrow="Conformidade"
        title="Informações Regulatórias"
        subtitle="Transparência e conformidade são a base de nossas operações. Conheça nosso perfil regulatório completo."
      />
      <RegulatoryContent />
    </>
  );
}
