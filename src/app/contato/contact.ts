export const CONTACT_FIELD_LIMITS = {
  name: { min: 2, max: 100 },
  email: { max: 254 },
  subject: { min: 3, max: 150 },
  message: { min: 10, max: 5000 },
} as const;

export type ContactInput = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type ContactRequest = ContactInput & {
  website: string;
};

export type ContactFieldErrors = Partial<Record<keyof ContactInput, string>>;

export type ContactFormState =
  | { status: 'idle'; message: '' }
  | { status: 'validationError'; message: string; fieldErrors: ContactFieldErrors }
  | { status: 'sendError'; message: string }
  | { status: 'success'; message: string };

export type ContactApiResponse = Exclude<ContactFormState, { status: 'idle' }>;

export const INITIAL_CONTACT_FORM_STATE: ContactFormState = {
  status: 'idle',
  message: '',
};

export function isContactApiResponse(value: unknown): value is ContactApiResponse {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) {
    return false;
  }

  const response = value as Record<string, unknown>;
  if (typeof response.message !== 'string') {
    return false;
  }

  if (response.status === 'success' || response.status === 'sendError') {
    return true;
  }

  if (
    response.status !== 'validationError' ||
    typeof response.fieldErrors !== 'object' ||
    response.fieldErrors === null ||
    Array.isArray(response.fieldErrors)
  ) {
    return false;
  }

  return Object.values(response.fieldErrors).every((error) => typeof error === 'string');
}

type ContactValidationResult =
  | { success: true; data: ContactInput }
  | { success: false; isSpam: true }
  | { success: false; isSpam: false; fieldErrors: ContactFieldErrors };

function readField(payload: unknown, field: keyof ContactRequest) {
  if (typeof payload !== 'object' || payload === null || Array.isArray(payload)) {
    return '';
  }

  const value = (payload as Record<string, unknown>)[field];
  return typeof value === 'string' ? value.trim() : '';
}

function hasValidEmailFormat(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function validateContactForm(payload: unknown): ContactValidationResult {
  if (readField(payload, 'website')) {
    return { success: false, isSpam: true };
  }

  const data: ContactInput = {
    name: readField(payload, 'name'),
    email: readField(payload, 'email'),
    subject: readField(payload, 'subject'),
    message: readField(payload, 'message'),
  };
  const fieldErrors: ContactFieldErrors = {};

  if (
    data.name.length < CONTACT_FIELD_LIMITS.name.min ||
    data.name.length > CONTACT_FIELD_LIMITS.name.max
  ) {
    fieldErrors.name = 'Informe um nome entre 2 e 100 caracteres.';
  }

  if (
    !hasValidEmailFormat(data.email) ||
    data.email.length > CONTACT_FIELD_LIMITS.email.max
  ) {
    fieldErrors.email = 'Informe um e-mail válido.';
  }

  if (
    data.subject.length < CONTACT_FIELD_LIMITS.subject.min ||
    data.subject.length > CONTACT_FIELD_LIMITS.subject.max ||
    /[\r\n]/.test(data.subject)
  ) {
    fieldErrors.subject = 'Informe um assunto entre 3 e 150 caracteres.';
  }

  if (
    data.message.length < CONTACT_FIELD_LIMITS.message.min ||
    data.message.length > CONTACT_FIELD_LIMITS.message.max
  ) {
    fieldErrors.message = 'Escreva uma mensagem entre 10 e 5.000 caracteres.';
  }

  if (Object.keys(fieldErrors).length > 0) {
    return { success: false, isSpam: false, fieldErrors };
  }

  return { success: true, data };
}
