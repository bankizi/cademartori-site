'use client';

import { useState, type FormEvent } from 'react';
import { LoaderCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import {
  CONTACT_FIELD_LIMITS,
  INITIAL_CONTACT_FORM_STATE,
  isContactApiResponse,
  type ContactFieldErrors,
  type ContactFormState,
  type ContactRequest,
} from './contact';

const EMPTY_FORM = { name: '', email: '', subject: '', message: '' };
const SEND_ERROR_STATE: ContactFormState = {
  status: 'sendError',
  message: 'Não foi possível enviar sua mensagem. Tente novamente em instantes.',
};

export function ContactForm() {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [state, setState] = useState<ContactFormState>(INITIAL_CONTACT_FORM_STATE);
  const [isPending, setIsPending] = useState(false);
  const fieldErrors: ContactFieldErrors =
    state.status === 'validationError' ? state.fieldErrors : {};

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isPending) return;

    const submittedData = new FormData(event.currentTarget);
    const website = submittedData.get('website');
    const payload: ContactRequest = {
      ...formData,
      website: typeof website === 'string' ? website : '',
    };

    setIsPending(true);
    setState(INITIAL_CONTACT_FORM_STATE);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result: unknown = await response.json();

      if (!isContactApiResponse(result)) {
        setState(SEND_ERROR_STATE);
        return;
      }

      setState(result);
      if (response.ok && result.status === 'success') {
        setFormData(EMPTY_FORM);
      }
    } catch {
      setState(SEND_ERROR_STATE);
    } finally {
      setIsPending(false);
    }
  }

  return (
    <div className="rounded-2xl bg-white border border-border-light p-6 md:p-8 shadow-sm">
      <h2 className="mb-6 text-xl font-bold text-brand-blue">Envie uma mensagem</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-text-primary">
            Nome completo
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            minLength={CONTACT_FIELD_LIMITS.name.min}
            maxLength={CONTACT_FIELD_LIMITS.name.max}
            autoComplete="name"
            value={formData.name}
            onChange={(event) =>
              setFormData((current) => ({ ...current, name: event.target.value }))
            }
            aria-invalid={Boolean(fieldErrors.name)}
            aria-describedby={fieldErrors.name ? 'name-error' : undefined}
            className="w-full rounded-lg border border-border-medium bg-white px-4 py-3 text-sm text-text-primary placeholder:text-text-muted transition-all"
            placeholder="Seu nome"
          />
          {fieldErrors.name && (
            <p id="name-error" className="mt-1.5 text-xs text-red-700">
              {fieldErrors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-text-primary">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            maxLength={CONTACT_FIELD_LIMITS.email.max}
            autoComplete="email"
            value={formData.email}
            onChange={(event) =>
              setFormData((current) => ({ ...current, email: event.target.value }))
            }
            aria-invalid={Boolean(fieldErrors.email)}
            aria-describedby={fieldErrors.email ? 'email-error' : undefined}
            className="w-full rounded-lg border border-border-medium bg-white px-4 py-3 text-sm text-text-primary placeholder:text-text-muted transition-all"
            placeholder="seu@email.com"
          />
          {fieldErrors.email && (
            <p id="email-error" className="mt-1.5 text-xs text-red-700">
              {fieldErrors.email}
            </p>
          )}
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
            name="subject"
            required
            minLength={CONTACT_FIELD_LIMITS.subject.min}
            maxLength={CONTACT_FIELD_LIMITS.subject.max}
            value={formData.subject}
            onChange={(event) =>
              setFormData((current) => ({ ...current, subject: event.target.value }))
            }
            aria-invalid={Boolean(fieldErrors.subject)}
            aria-describedby={fieldErrors.subject ? 'subject-error' : undefined}
            className="w-full rounded-lg border border-border-medium bg-white px-4 py-3 text-sm text-text-primary placeholder:text-text-muted transition-all"
            placeholder="Assunto da mensagem"
          />
          {fieldErrors.subject && (
            <p id="subject-error" className="mt-1.5 text-xs text-red-700">
              {fieldErrors.subject}
            </p>
          )}
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
            name="message"
            required
            rows={5}
            minLength={CONTACT_FIELD_LIMITS.message.min}
            maxLength={CONTACT_FIELD_LIMITS.message.max}
            value={formData.message}
            onChange={(event) =>
              setFormData((current) => ({ ...current, message: event.target.value }))
            }
            aria-invalid={Boolean(fieldErrors.message)}
            aria-describedby={fieldErrors.message ? 'message-error' : undefined}
            className="w-full rounded-lg border border-border-medium bg-white px-4 py-3 text-sm text-text-primary placeholder:text-text-muted transition-all resize-none"
            placeholder="Escreva sua mensagem..."
          />
          {fieldErrors.message && (
            <p id="message-error" className="mt-1.5 text-xs text-red-700">
              {fieldErrors.message}
            </p>
          )}
        </div>

        <div
          className="absolute -left-[9999px] h-px w-px overflow-hidden"
          aria-hidden="true"
        >
          <label htmlFor="website">Não preencha este campo</label>
          <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <Button type="submit" variant="primary" size="lg" className="w-full" disabled={isPending}>
          {isPending ? (
            <LoaderCircle className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
          ) : (
            <Send className="mr-2 h-4 w-4" aria-hidden="true" />
          )}
          {isPending ? 'Enviando…' : 'Enviar mensagem'}
        </Button>

        <p
          role="status"
          aria-live="polite"
          className={
            state.status === 'success'
              ? 'text-center text-sm font-medium text-green-700'
              : state.status === 'validationError' || state.status === 'sendError'
                ? 'text-center text-sm font-medium text-red-700'
                : 'sr-only'
          }
        >
          {state.message}
        </p>

        <p className="text-xs text-text-muted text-center">
          Ao enviar, seus dados serão usados para responder à sua solicitação e tratados conforme
          nossa{' '}
          <a
            href="/regulatorio#politica-de-privacidade"
            className="text-brand-gold-dark hover:underline"
          >
            Política de Privacidade
          </a>.
        </p>
      </form>
    </div>
  );
}
