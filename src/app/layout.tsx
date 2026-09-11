import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://cademartori.com.br'),
  title: {
    default: 'CADEMARTORI Z | Soluções em Criptoativos',
    template: '%s | CADEMARTORI Z',
  },
  description:
    'Prestadora de serviços de ativos virtuais (VASP) regulada pelo Banco Central do Brasil. Intermediação, custódia e staking de criptoativos com segurança e conformidade.',
  keywords: [
    'criptoativos',
    'VASP',
    'Banco Central',
    'custódia',
    'staking',
    'bitcoin',
    'ethereum',
    'ativos virtuais',
    'regulação',
  ],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'CADEMARTORI Z Soluções',
    title: 'CADEMARTORI Z | Soluções em Criptoativos',
    description:
      'Prestadora de serviços de ativos virtuais (VASP) regulada pelo Banco Central do Brasil.',
  },
  robots: { index: true, follow: true },
};

// JSON-LD structured data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'CADEMARTORI Z SOLUÇÕES LTDA',
  url: 'https://cademartori.com.br',
  description: 'Prestadora de serviços de ativos virtuais (VASP) regulada pelo Banco Central do Brasil.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Rio de Janeiro',
    addressRegion: 'RJ',
    addressCountry: 'BR',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'cademartorizs1@gmail.com',
    contactType: 'customer service',
    availableLanguage: 'Portuguese',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-[family-name:var(--font-poppins)]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
