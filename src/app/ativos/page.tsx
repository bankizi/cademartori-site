import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { AssetsContent } from './AssetsContent';

export const metadata: Metadata = {
  title: 'Ativos Listados',
  description:
    'Lista de ativos virtuais disponíveis para negociação na Cademartori Z. Conheça os critérios de listagem e riscos associados.',
};

export default function AtivosPage() {
  return (
    <>
      <PageHero
        eyebrow="Ativos Virtuais"
        title="Ativos Disponíveis"
        subtitle="Conheça os ativos virtuais disponíveis para negociação em nossa plataforma, seus critérios de listagem e riscos associados."
      />
      <AssetsContent />
    </>
  );
}
