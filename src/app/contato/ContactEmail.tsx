import type { ContactInput } from './contact';

const labelStyle = {
  color: '#52606d',
  fontSize: '12px',
  fontWeight: 700,
  letterSpacing: '0.04em',
  margin: '24px 0 6px',
  textTransform: 'uppercase' as const,
};

const valueStyle = {
  color: '#102a43',
  fontSize: '16px',
  lineHeight: 1.6,
  margin: 0,
};

export function ContactEmail({ name, email, subject, message }: ContactInput) {
  return (
    <html lang="pt-BR">
      <body
        style={{
          backgroundColor: '#f5f7fa',
          fontFamily: 'Arial, sans-serif',
          margin: 0,
          padding: '32px 16px',
        }}
      >
        <main
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            margin: '0 auto',
            maxWidth: '600px',
            padding: '32px',
          }}
        >
          <h1 style={{ color: '#0b3b60', fontSize: '24px', margin: '0 0 8px' }}>
            Nova mensagem pelo site
          </h1>
          <p style={{ color: '#52606d', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>
            Uma nova solicitação foi enviada pelo formulário de contato da Cademartori Z.
          </p>

          <p style={labelStyle}>Nome</p>
          <p style={valueStyle}>{name}</p>

          <p style={labelStyle}>E-mail</p>
          <p style={valueStyle}>{email}</p>

          <p style={labelStyle}>Assunto</p>
          <p style={valueStyle}>{subject}</p>

          <p style={labelStyle}>Mensagem</p>
          <p style={{ ...valueStyle, whiteSpace: 'pre-wrap' }}>{message}</p>
        </main>
      </body>
    </html>
  );
}
