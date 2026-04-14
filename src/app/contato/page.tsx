import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { ContactContent } from './ContactContent';

export const metadata: Metadata = {
  title: 'Contato',
  description:
    'Entre em contato com a Cademartori Z. Informações de contato, formulário e dados do DPO para questões de privacidade.',
};

export default function ContatoPage() {
  return (
    <>
      <PageHero
        eyebrow="Fale Conosco"
        title="Entre em Contato"
        subtitle="Estamos prontos para atendê-lo. Escolha o canal de comunicação que preferir."
      />
      <ContactContent />
    </>
  );
}
