import { describe, expect, it } from 'vitest';
import { validateContactForm } from './contact';

function makePayload(overrides: Record<string, unknown> = {}) {
  return {
    name: '  Maria da Silva  ',
    email: '  maria@example.com  ',
    subject: '  Quero saber mais  ',
    message: '  Gostaria de conhecer os serviços oferecidos.  ',
    website: '',
    ...overrides,
  };
}

describe('validateContactForm', () => {
  it('normaliza e aceita uma mensagem válida', () => {
    expect(validateContactForm(makePayload())).toEqual({
      success: true,
      data: {
        name: 'Maria da Silva',
        email: 'maria@example.com',
        subject: 'Quero saber mais',
        message: 'Gostaria de conhecer os serviços oferecidos.',
      },
    });
  });

  it.each([
    ['name', 'A'],
    ['name', 'A'.repeat(101)],
    ['email', 'email-invalido'],
    ['email', `${'a'.repeat(245)}@example.com`],
    ['subject', 'Oi'],
    ['subject', 'Assunto\r\nBcc: attacker@example.com'],
    ['subject', 'A'.repeat(151)],
    ['message', 'Curta'],
    ['message', 'A'.repeat(5001)],
  ])('rejeita o campo %s fora do contrato', (field, value) => {
    const result = validateContactForm(makePayload({ [field]: value }));

    expect(result.success).toBe(false);
    if (!result.success && !result.isSpam) {
      expect(result.fieldErrors[field as keyof typeof result.fieldErrors]).toBeDefined();
    }
  });

  it('identifica silenciosamente submissões que preenchem o honeypot', () => {
    expect(validateContactForm(makePayload({ website: 'https://spam.example' }))).toEqual({
      success: false,
      isSpam: true,
    });
  });

  it.each([null, [], 'texto', 42])('rejeita payload não estruturado: %j', (payload) => {
    const result = validateContactForm(payload);

    expect(result.success).toBe(false);
    if (!result.success && !result.isSpam) {
      expect(Object.keys(result.fieldErrors)).toHaveLength(4);
    }
  });
});
