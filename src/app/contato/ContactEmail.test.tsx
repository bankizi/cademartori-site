import { render } from '@react-email/render';
import { describe, expect, it } from 'vitest';
import { ContactEmail } from './ContactEmail';

describe('ContactEmail', () => {
  it('renderiza os dados como texto seguro no HTML do e-mail', async () => {
    const html = await render(
      <ContactEmail
        name="Maria <script>alert(1)</script>"
        email="maria@example.com"
        subject="Dúvida & suporte"
        message={'Primeira linha\nSegunda linha'}
      />
    );

    expect(html).toContain('Maria &lt;script&gt;alert(1)&lt;/script&gt;');
    expect(html).not.toContain('<script>alert(1)</script>');
    expect(html).toContain('Dúvida &amp; suporte');
    expect(html).toContain('Primeira linha\nSegunda linha');
  });
});
