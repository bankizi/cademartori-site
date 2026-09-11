import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

const { sendMock } = vi.hoisted(() => ({ sendMock: vi.fn() }));

vi.mock('resend', () => ({
  Resend: class {
    emails = { send: sendMock };
  },
}));

import { POST } from './route';

const VALID_PAYLOAD = {
  name: 'Maria da Silva',
  email: 'maria@example.com',
  subject: 'Quero saber mais',
  message: 'Gostaria de conhecer os serviços oferecidos.',
  website: '',
};

function makeRequest(body: string = JSON.stringify(VALID_PAYLOAD)) {
  return new Request('http://localhost/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body,
  });
}

describe('POST /api/contact', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.stubEnv('RESEND_API_KEY', 're_test');
    vi.stubEnv('RESEND_FROM_EMAIL', 'Cademartori Z <onboarding@resend.dev>');
    vi.stubEnv('CONTACT_EMAIL_TO', 'contato@cademartori.com.br');
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllEnvs();
  });

  it('envia a mensagem e permite responder ao visitante', async () => {
    sendMock.mockResolvedValue({ data: { id: 'email-id' }, error: null });

    const response = await POST(makeRequest());

    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual({
      status: 'success',
      message: 'Mensagem enviada com sucesso. Em breve entraremos em contato.',
    });
    expect(sendMock).toHaveBeenCalledWith(
      expect.objectContaining({
        from: 'Cademartori Z <onboarding@resend.dev>',
        to: ['contato@cademartori.com.br'],
        replyTo: 'maria@example.com',
        subject: '[Contato do site] Quero saber mais',
        react: expect.any(Object),
      })
    );
  });

  it('retorna 422 com erros por campo sem chamar o Resend', async () => {
    const response = await POST(
      makeRequest(JSON.stringify({ ...VALID_PAYLOAD, email: 'invalido' }))
    );

    expect(response.status).toBe(422);
    await expect(response.json()).resolves.toEqual({
      status: 'validationError',
      message: 'Revise os campos destacados e tente novamente.',
      fieldErrors: { email: 'Informe um e-mail válido.' },
    });
    expect(sendMock).not.toHaveBeenCalled();
  });

  it('descarta honeypots preenchidos sem revelar o bloqueio', async () => {
    const response = await POST(
      makeRequest(JSON.stringify({ ...VALID_PAYLOAD, website: 'https://spam.example' }))
    );

    expect(response.status).toBe(200);
    expect((await response.json()).status).toBe('success');
    expect(sendMock).not.toHaveBeenCalled();
  });

  it('retorna 400 para JSON inválido', async () => {
    const response = await POST(makeRequest('{'));

    expect(response.status).toBe(400);
    await expect(response.json()).resolves.toEqual({
      status: 'sendError',
      message: 'Não foi possível processar sua solicitação.',
    });
    expect(sendMock).not.toHaveBeenCalled();
  });

  it('retorna 413 para um corpo acima de 32 KB', async () => {
    const response = await POST(makeRequest(JSON.stringify({ content: 'A'.repeat(33 * 1024) })));

    expect(response.status).toBe(413);
    await expect(response.json()).resolves.toEqual({
      status: 'sendError',
      message: 'A mensagem excede o tamanho permitido.',
    });
    expect(sendMock).not.toHaveBeenCalled();
  });

  it('retorna erro genérico quando a integração não está configurada', async () => {
    vi.stubEnv('RESEND_API_KEY', '');
    vi.spyOn(console, 'error').mockImplementation(() => undefined);

    const response = await POST(makeRequest());

    expect(response.status).toBe(500);
    const body = await response.json();
    expect(body.status).toBe('sendError');
    expect(body.message).not.toContain('RESEND_API_KEY');
    expect(sendMock).not.toHaveBeenCalled();
  });

  it('não expõe detalhes de falhas do Resend', async () => {
    sendMock.mockResolvedValue({
      data: null,
      error: { name: 'validation_error', message: 'sensitive provider detail' },
    });
    vi.spyOn(console, 'error').mockImplementation(() => undefined);

    const response = await POST(makeRequest());

    expect(response.status).toBe(500);
    await expect(response.json()).resolves.toEqual({
      status: 'sendError',
      message: 'Não foi possível enviar sua mensagem. Tente novamente em instantes.',
    });
  });

  it('trata exceções de transporte sem expor detalhes', async () => {
    sendMock.mockRejectedValue(new Error('network detail'));
    vi.spyOn(console, 'error').mockImplementation(() => undefined);

    const response = await POST(makeRequest());

    expect(response.status).toBe(500);
    const body = await response.json();
    expect(body.status).toBe('sendError');
    expect(body.message).not.toContain('network detail');
  });
});
