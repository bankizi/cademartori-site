import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Container } from './Container';
import { COMPANY, NAV_LINKS, FOOTER_LEGAL_LINKS, FGC_WARNING } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="bg-brand-blue text-white" role="contentinfo">
      {/* Main footer content */}
      <Container className="py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Company info */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white font-bold text-xl mb-4"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-brand-blue font-bold text-lg">
                CZ
              </div>
              <span>Cademartori Z</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-brand-blue-light">
              Prestadora de serviços de ativos virtuais regulada pelo Banco Central do Brasil.
            </p>
            <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/20 px-3 py-1.5 text-xs font-medium text-white">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              VASP Regulada
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-gold mb-4">
              Navegação
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-blue-light hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-gold mb-4">
              Legal
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-blue-light hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-gold mb-4">
              Contato
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-gold" />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-sm text-brand-blue-light hover:text-white transition-colors"
                >
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-gold" />
                <a
                  href={`tel:${COMPANY.phone.replace(/\D/g, '')}`}
                  className="text-sm text-brand-blue-light hover:text-white transition-colors"
                >
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-gold" />
                <span className="text-sm text-brand-blue-light">{COMPANY.address}</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      {/* FGC Warning bar */}
      <div className="border-t border-white/10 bg-brand-blue-dark">
        <Container className="py-4">
          <p className="text-xs leading-relaxed text-brand-blue-light/80">
            <strong className="text-brand-gold">AVISO FGC:</strong>{' '}
            {FGC_WARNING}
          </p>
        </Container>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <Container className="py-4">
          <div className="flex flex-col items-center justify-between gap-3 text-xs text-brand-blue-light/60 md:flex-row">
            <div className="text-center md:text-left">
              <p>{COMPANY.name} — CNPJ: {COMPANY.cnpj}</p>
              <p className="mt-0.5">{COMPANY.address}</p>
            </div>
            <p>{COMPANY.regulation.legalBasis}</p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
