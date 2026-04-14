import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <section className="flex flex-1 items-center justify-center py-20">
      <Container className="text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-gold-dark">
          Erro 404
        </p>
        <h1 className="mt-3 text-4xl font-bold text-brand-blue md:text-5xl">
          Página não encontrada
        </h1>
        <p className="mt-4 text-text-secondary">
          A página que você procura não existe ou foi movida.
        </p>
        <div className="mt-8">
          <Button href="/" variant="primary">
            Voltar ao início
          </Button>
        </div>
      </Container>
    </section>
  );
}
