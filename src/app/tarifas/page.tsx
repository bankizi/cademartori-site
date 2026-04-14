import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { FeeTable } from '@/components/ui/FeeTable';
import { Container } from '@/components/layout/Container';

export const metadata: Metadata = {
  title: 'Tarifas',
  description:
    'Consulte a tabela completa de tarifas dos serviços de intermediação, custódia e staking de criptoativos da Cademartori Z.',
};

export default function TarifasPage() {
  return (
    <>
      <PageHero
        eyebrow="Transparência"
        title="Tabela de Tarifas"
        subtitle="Conheça todas as taxas e custos dos nossos serviços. Transparência total em cada operação."
      />

      <section className="py-16 lg:py-24">
        <Container>
          <FeeTable />

          <div className="mt-10 space-y-4">
            <div className="rounded-xl bg-brand-offwhite border border-border-light p-6">
              <h3 className="mb-2 font-semibold text-brand-blue">Observações Importantes</h3>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>
                  • As tarifas podem ser alteradas mediante aviso prévio de 30 dias aos clientes.
                </li>
                <li>
                  • Taxas de rede (gas fees) são variáveis e definidas pela blockchain utilizada, não pela Cademartori Z.
                </li>
                <li>
                  • Operações de alto volume podem ser elegíveis a condições diferenciadas. Consulte nossa equipe comercial.
                </li>
                <li>
                  • Todas as tarifas incluem os impostos aplicáveis conforme legislação vigente.
                </li>
              </ul>
            </div>

            <p className="text-xs text-text-muted text-center">
              Última atualização: Abril de 2026. Para mais informações, consulte nossos{' '}
              <a href="/termos" className="text-brand-gold-dark hover:underline">
                Termos de Uso
              </a>.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
