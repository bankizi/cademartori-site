'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, ShieldCheck, Send, Clock } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import { StaggerContainer } from '@/components/animation/StaggerContainer';
import { StaggerItem } from '@/components/animation/StaggerItem';
import { Button } from '@/components/ui/Button';
import { COMPANY } from '@/lib/constants';

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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${COMPANY.email}?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Nome: ${formData.name}\nE-mail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

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
            <div className="rounded-2xl bg-white border border-border-light p-6 md:p-8 shadow-sm">
              <h2 className="mb-6 text-xl font-bold text-brand-blue">
                Envie uma mensagem
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-text-primary"
                  >
                    Nome completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full rounded-lg border border-border-medium bg-white px-4 py-3 text-sm text-text-primary placeholder:text-text-muted transition-all"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-text-primary"
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full rounded-lg border border-border-medium bg-white px-4 py-3 text-sm text-text-primary placeholder:text-text-muted transition-all"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-1.5 block text-sm font-medium text-text-primary"
                  >
                    Assunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full rounded-lg border border-border-medium bg-white px-4 py-3 text-sm text-text-primary placeholder:text-text-muted transition-all"
                    placeholder="Assunto da mensagem"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-text-primary"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full rounded-lg border border-border-medium bg-white px-4 py-3 text-sm text-text-primary placeholder:text-text-muted transition-all resize-none"
                    placeholder="Escreva sua mensagem..."
                  />
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Enviar mensagem
                </Button>

                <p className="text-xs text-text-muted text-center">
                  Ao enviar, você será redirecionado para seu cliente de e-mail.
                  Seus dados serão tratados conforme nossa{' '}
                  <a href="/termos#privacidade" className="text-brand-gold-dark hover:underline">
                    Política de Privacidade
                  </a>.
                </p>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
