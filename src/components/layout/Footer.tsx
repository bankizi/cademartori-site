import Image from 'next/image';
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
              className="inline-flex items-center mb-4"
              aria-label="Cademartori Zamudio — Página inicial"
            >
              <Image
                src="/images/logo-branco.png"
                alt=""
                width={2715}
                height={642}
                className="h-11 w-auto sm:h-12"
              />
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-brand-blue-light">
              Prestadora de serviços de ativos virtuais em processo de regulação pelo Banco Central do Brasil.
            </p>
            <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/20 px-3 py-1.5 text-xs font-medium text-white">
              <span className="h-2 w-2 rounded-full bg-brand-gold" />
              PSAV em processo de regulação
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

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <Container className="py-4">
          <div className="grid gap-3 text-center text-xs text-brand-blue-light/60 md:grid-cols-2 md:text-left">
            <div>
              <p>{COMPANY.name} — CNPJ: {COMPANY.cnpj}</p>
              <p className="mt-0.5">{COMPANY.address}</p>
            </div>
            <p>
              Os serviços descritos são prestados em conformidade com a Lei nº
              14.478/2022 e as Resoluções BCB nº 519, 520 e 521/2025.
            </p>
          </div>
        </Container>
      </div>

      {/* FGC Warning bar */}
      <div className="border-t border-white/10 bg-brand-blue-dark">
        <Container className="py-3">
          <p className="text-[0.625rem] leading-relaxed text-brand-blue-light/80">
            <strong className="text-brand-gold">AVISO FGC:</strong>{' '}
            {FGC_WARNING}
          </p>
        </Container>
      </div>
    </footer>
  );
}
