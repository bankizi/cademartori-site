export const COMPANY = {
  name: 'CADEMARTORI Z SOCIEDADE PRESTADORA DE SERVIÇOS DE ATIVOS VIRTUAIS LTDA',
  shortName: 'Cademartori Z',
  cnpj: '51.039.021/0001-51',
  address: 'Rio de Janeiro, RJ – Brasil',
  email: 'cademartorizs1@gmail.com',
  phone: '+55 (55) 99976-5175',
  dpo: {
    name: 'Encarregado de Proteção de Dados',
    email: 'cademartorizs1@gmail.com',
  },
  regulation: {
    authority: 'Banco Central do Brasil',
    status: 'Em processo de autorização perante o Banco Central do Brasil',
    type: 'SPSAV – Sociedade Prestadora de Serviços de Ativos Virtuais',
    modalities: ['Intermediação de Ativos Virtuais'],
    legalBasis: 'Os serviços descritos são prestados em conformidade com a Lei nº 14.478/2022 e as Resoluções BCB nº 519, 520 e 521/2025.',
  },
} as const;

export const NAV_LINKS = [
  { label: 'Início', href: '/' },
  { label: 'Serviços', href: '/servicos' },
  { label: 'Conformidade', href: '/regulatorio' },
  { label: 'Ativos', href: '/ativos' },
  { label: 'Contato', href: '/contato' },
] as const;

export const FOOTER_LEGAL_LINKS = [
  { label: 'Manual de KYC', href: '/regulatorio#politica-de-kyc' },
  { label: 'Termos de Uso', href: '/regulatorio#termos-de-uso' },
  { label: 'Política de PLD', href: '/regulatorio#politica-de-pld' },
  { label: 'Política de Privacidade', href: '/regulatorio#politica-de-privacidade' },
  { label: 'Política de Cookies', href: '/regulatorio#politica-de-cookies' },
  { label: 'Política de Elegibilidade', href: '/regulatorio#politica-de-elegibilidade' },
] as const;

export const FGC_WARNING = `ATENÇÃO: Os serviços prestados pela ${COMPANY.name} envolvendo ativos virtuais NÃO possuem cobertura do Fundo Garantidor de Créditos (FGC). Ativos virtuais não são moeda de curso legal, não são garantidos pelo governo federal e estão sujeitos a riscos, incluindo a possibilidade de perda total do capital investido.`;

export const SERVICES = [
  {
    id: 'intermediacao',
    title: 'Compra e Venda',
    description: 'Facilitamos a negociação de ativos virtuais de forma ágil, segura e transparente.',
    icon: 'ArrowLeftRight',
  },
  {
    id: 'custodia',
    title: 'Conexão com o Mercado',
    description: 'Acesso direto às melhores oportunidades do mercado de ativos virtuais por meio de uma intermediária dedicada.',
    icon: 'Network',
  },
  {
    id: 'staking',
    title: 'Operações Seguras',
    description: 'Cada operação realizada com rastreabilidade, conformidade e total clareza para o cliente.',
    icon: 'ShieldCheck',
  },
] as const;

export const CRYPTO_ASSETS = [
  { name: 'Bitcoin', ticker: 'BTC', category: 'Criptomoeda', icon: '/icons/crypto/bitcoin.svg' },
  { name: 'Ethereum', ticker: 'ETH', category: 'Criptomoeda', icon: '/icons/crypto/ethereum.svg' },
  { name: 'Solana', ticker: 'SOL', category: 'Criptomoeda', icon: '/icons/crypto/solana.svg' },
  { name: 'Cardano', ticker: 'ADA', category: 'Criptomoeda', icon: '/icons/crypto/cardano.svg' },
  { name: 'Polygon', ticker: 'POL', category: 'Token', icon: '/icons/crypto/polygon.svg' },
  { name: 'Chainlink', ticker: 'LINK', category: 'Token', icon: '/icons/crypto/chainlink.svg' },
  { name: 'USD Coin', ticker: 'USDC', category: 'Stablecoin', icon: '/icons/crypto/usdc.svg' },
  { name: 'Tether', ticker: 'USDT', category: 'Stablecoin', icon: '/icons/crypto/tether.svg' },
] as const;

export const RISKS = [
  {
    title: 'Risco Regulatório',
    description: 'O mercado de ativos virtuais está sujeito a alterações regulatórias que podem impactar a operação, o valor e a liquidez dos ativos.',
  },
  {
    title: 'Volatilidade',
    description: 'Ativos virtuais podem apresentar variações significativas de preço em curtos períodos, podendo resultar em perdas substanciais.',
  },
  {
    title: 'Risco de Liquidez',
    description: 'Em determinadas condições de mercado, pode não ser possível liquidar posições nos prazos ou preços desejados.',
  },
  {
    title: 'Riscos Tecnológicos',
    description: 'Vulnerabilidades em protocolos, falhas de software, ataques cibernéticos e perda de chaves privadas podem resultar em perda total dos ativos.',
  },
] as const;
