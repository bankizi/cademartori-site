import { Resend } from 'resend';
import { ContactEmail } from '../../contato/ContactEmail';
import {
  type ContactApiResponse,
  validateContactForm,
} from '../../contato/contact';

export const runtime = 'nodejs';

const MAX_BODY_BYTES = 32 * 1024;
const SUCCESS_MESSAGE = 'Mensagem enviada com sucesso. Em breve entraremos em contato.';
const BAD_REQUEST_MESSAGE = 'Não foi possível processar sua solicitação.';
const PAYLOAD_TOO_LARGE_MESSAGE = 'A mensagem excede o tamanho permitido.';
const SEND_ERROR_MESSAGE = 'Não foi possível enviar sua mensagem. Tente novamente em instantes.';

function json(body: ContactApiResponse, status: number) {
  return Response.json(body, { status });
}

async function readBody(request: Request): Promise<string | null> {
  const contentLength = Number(request.headers.get('content-length'));

  if (Number.isFinite(contentLength) && contentLength > MAX_BODY_BYTES) {
    return null;
  }

  if (!request.body) {
    return '';
  }

  const reader = request.body.getReader();
  const decoder = new TextDecoder();
  let size = 0;
  let body = '';

  while (true) {
    const { done, value } = await reader.read();

    if (done) {
      return body + decoder.decode();
    }

    size += value.byteLength;
    if (size > MAX_BODY_BYTES) {
      await reader.cancel();
      return null;
    }

    body += decoder.decode(value, { stream: true });
  }
}

export async function POST(request: Request) {
  const rawBody = await readBody(request);

  if (rawBody === null) {
    return json({ status: 'sendError', message: PAYLOAD_TOO_LARGE_MESSAGE }, 413);
  }

  let payload: unknown;
  try {
    payload = JSON.parse(rawBody);
  } catch {
    return json({ status: 'sendError', message: BAD_REQUEST_MESSAGE }, 400);
  }

  const validation = validateContactForm(payload);

  if (!validation.success) {
    if (validation.isSpam) {
      return json({ status: 'success', message: SUCCESS_MESSAGE }, 200);
    }

    return json(
      {
        status: 'validationError',
        message: 'Revise os campos destacados e tente novamente.',
        fieldErrors: validation.fieldErrors,
      },
      422
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.CONTACT_EMAIL_TO;

  if (!apiKey || !from || !to) {
    console.error('Contact email configuration is incomplete.');
    return json({ status: 'sendError', message: SEND_ERROR_MESSAGE }, 500);
  }

  try {
    const { error } = await new Resend(apiKey).emails.send({
      from,
      to: [to],
      replyTo: validation.data.email,
      subject: `[Contato do site] ${validation.data.subject}`,
      react: ContactEmail(validation.data),
    });

    if (error) {
      console.error('Resend rejected a contact email.', { name: error.name });
      return json({ status: 'sendError', message: SEND_ERROR_MESSAGE }, 500);
    }
  } catch (error) {
    console.error('Contact email delivery failed.', {
      name: error instanceof Error ? error.name : 'UnknownError',
    });
    return json({ status: 'sendError', message: SEND_ERROR_MESSAGE }, 500);
  }

  return json({ status: 'success', message: SUCCESS_MESSAGE }, 200);
}
