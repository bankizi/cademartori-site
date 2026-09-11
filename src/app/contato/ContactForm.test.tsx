// @vitest-environment jsdom

import { cleanup, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { ContactForm } from './ContactForm';

const VALID_FORM = {
  name: 'Maria da Silva',
  email: 'maria@example.com',
  subject: 'Quero saber mais',
  message: 'Gostaria de conhecer os serviços oferecidos.',
};

async function fillForm() {
  const user = userEvent.setup();
  await user.type(screen.getByLabelText('Nome completo'), VALID_FORM.name);
  await user.type(screen.getByLabelText('E-mail'), VALID_FORM.email);
  await user.type(screen.getByLabelText('Assunto'), VALID_FORM.subject);
  await user.type(screen.getByLabelText('Mensagem'), VALID_FORM.message);
  return user;
}

function mockApiResponse(body: unknown, status = 200) {
  return vi.fn().mockResolvedValue(
    new Response(JSON.stringify(body), {
      status,
      headers: { 'Content-Type': 'application/json' },
    })
  );
}

describe('ContactForm', () => {
  afterEach(() => {
    cleanup();
    vi.unstubAllGlobals();
  });

  it('envia JSON para a API e limpa os campos após sucesso', async () => {
    const fetchMock = mockApiResponse({
      status: 'success',
      message: 'Mensagem enviada com sucesso. Em breve entraremos em contato.',
    });
    vi.stubGlobal('fetch', fetchMock);
    render(<ContactForm />);
    const user = await fillForm();

    await user.click(screen.getByRole('button', { name: 'Enviar mensagem' }));

    expect((await screen.findByRole('status')).textContent).toContain('Mensagem enviada com sucesso.');
    expect(fetchMock).toHaveBeenCalledWith('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...VALID_FORM, website: '' }),
    });
    expect((screen.getByLabelText('Nome completo') as HTMLInputElement).value).toBe('');
    expect((screen.getByLabelText('Mensagem') as HTMLTextAreaElement).value).toBe('');
  });

  it('mostra erros por campo e preserva os dados após resposta 422', async () => {
    vi.stubGlobal(
      'fetch',
      mockApiResponse(
        {
          status: 'validationError',
          message: 'Revise os campos destacados e tente novamente.',
          fieldErrors: { email: 'Informe um e-mail válido.' },
        },
        422
      )
    );
    render(<ContactForm />);
    const user = await fillForm();

    await user.click(screen.getByRole('button', { name: 'Enviar mensagem' }));

    expect(await screen.findByText('Informe um e-mail válido.')).toBeTruthy();
    expect(screen.getByLabelText('E-mail').getAttribute('aria-invalid')).toBe('true');
    expect((screen.getByLabelText('Nome completo') as HTMLInputElement).value).toBe(
      VALID_FORM.name
    );
    expect((screen.getByLabelText('Mensagem') as HTMLTextAreaElement).value).toBe(
      VALID_FORM.message
    );
  });

  it('mostra erro genérico e preserva os dados quando a rede falha', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('network detail')));
    render(<ContactForm />);
    const user = await fillForm();

    await user.click(screen.getByRole('button', { name: 'Enviar mensagem' }));

    await waitFor(() => {
      expect(screen.getByRole('status').textContent).toContain(
        'Não foi possível enviar sua mensagem. Tente novamente em instantes.'
      );
    });
    expect(screen.getByRole('status').textContent).not.toContain('network detail');
    expect((screen.getByLabelText('Nome completo') as HTMLInputElement).value).toBe(
      VALID_FORM.name
    );
  });

  it('trata uma resposta inesperada da API como erro genérico', async () => {
    vi.stubGlobal('fetch', mockApiResponse({ unexpected: true }));
    render(<ContactForm />);
    const user = await fillForm();

    await user.click(screen.getByRole('button', { name: 'Enviar mensagem' }));

    await waitFor(() => {
      expect(screen.getByRole('status').textContent).toContain(
        'Não foi possível enviar sua mensagem. Tente novamente em instantes.'
      );
    });
    expect((screen.getByLabelText('Nome completo') as HTMLInputElement).value).toBe(
      VALID_FORM.name
    );
  });
});
