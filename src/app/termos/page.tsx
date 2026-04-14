import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { TermsContent } from './TermsContent';

export const metadata: Metadata = {
  title: 'Termos de Uso',
  description:
    'Termos de uso, política de privacidade e condições gerais dos serviços da Cademartori Z Soluções LTDA.',
};

export default function TermosPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Termos de Uso"
        subtitle="Leia atentamente os termos e condições que regem a utilização dos nossos serviços."
      />
      <TermsContent />
    </>
  );
}
