'use client';

import { Mail, Phone, MapPin, ShieldCheck, Clock } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import { StaggerContainer } from '@/components/animation/StaggerContainer';
import { StaggerItem } from '@/components/animation/StaggerItem';
import { COMPANY } from '@/lib/constants';
import { ContactForm } from './ContactForm';

const contactChannels = [
  {
    icon: Mail,
    title: 'E-mail',
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
    description: 'Envie-nos um e-mail para dúvidas gerais',
  },
  {
    icon: Phone,
    title: 'Telefone',
    value: COMPANY.phone,
    href: `tel:${COMPANY.phone.replace(/\D/g, '')}`,
    description: 'Segunda a sexta, das 9h às 18h',
  },
  {
    icon: MapPin,
    title: 'Endereço',
    value: COMPANY.address,
    href: '#',
    description: 'Atendimento presencial com agendamento',
  },
  {
    icon: Clock,
    title: 'Horário',
    value: 'Seg-Sex: 9h — 18h',
    href: '#',
    description: 'Horário de atendimento comercial',
  },
];

export function ContactContent() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          {/* Contact info */}
          <div>
            <StaggerContainer className="space-y-4">
              {contactChannels.map((channel) => (
                <StaggerItem key={channel.title}>
                  <a
                    href={channel.href}
                    className="flex items-start gap-4 rounded-xl border border-border-light bg-white p-5 transition-all hover:border-brand-blue-light hover:shadow-sm"
                  >
                    <div className="flex-shrink-0 rounded-lg bg-brand-blue-lighter p-3">
                      <channel.icon className="h-5 w-5 text-brand-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary">
                        {channel.title}
                      </h3>
                      <p className="mt-0.5 text-sm font-medium text-brand-blue">
                        {channel.value}
                      </p>
                      <p className="mt-0.5 text-xs text-text-muted">
                        {channel.description}
                      </p>
                    </div>
                  </a>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* LGPD section */}
            <ScrollReveal className="mt-8">
              <div className="rounded-xl bg-brand-blue-lighter/50 border border-brand-blue-light/30 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <ShieldCheck className="h-5 w-5 text-brand-blue" />
                  <h3 className="font-semibold text-brand-blue">
                    Proteção de Dados (LGPD)
                  </h3>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Para exercer seus direitos como titular de dados pessoais
                  (acesso, correção, eliminação, portabilidade), entre em
                  contato com nosso Encarregado de Proteção de Dados:
                </p>
                <div className="mt-3 space-y-1 text-sm">
                  <p className="font-medium text-text-primary">{COMPANY.dpo.name}</p>
                  <a
                    href={`mailto:${COMPANY.dpo.email}`}
                    className="text-brand-blue hover:underline"
                  >
                    {COMPANY.dpo.email}
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Contact form */}
          <ScrollReveal direction="right">
            <ContactForm />
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
