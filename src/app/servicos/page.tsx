import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { ServicesDetail } from './ServicesDetail';
import { RiskDisclosure } from '@/components/ui/RiskDisclosure';

export const metadata: Metadata = {
  title: 'Serviços',
  description:
    'Conheça nossos serviços de intermediação de ativos virtuais e integração via API para negócios.',
};

export default function ServicosPage() {
  return (
    <>
      <PageHero
        eyebrow="Nossos Serviços"
        title="Soluções completas em ativos virtuais"
        subtitle="Oferecemos serviços regulamentados que combinam tecnologia de ponta com conformidade regulatória para atender suas necessidades."
      />
      <ServicesDetail />
      <RiskDisclosure title="Riscos que você precisa conhecer" isCompact />
    </>
  );
}
