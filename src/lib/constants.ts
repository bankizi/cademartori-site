export const COMPANY = {
  name: 'CADEMARTORI Z SOLUÇÕES LTDA',
  shortName: 'Cademartori Z',
  cnpj: '00.000.000/0001-00', // Placeholder - atualizar com CNPJ real
  address: 'São Paulo, SP - Brasil', // Placeholder - atualizar com endereço real
  email: 'contato@cademartori.com.br',
  phone: '+55 (11) 0000-0000',
  dpo: {
    name: 'Encarregado de Proteção de Dados',
    email: 'dpo@cademartori.com.br',
  },
  regulation: {
    authority: 'Banco Central do Brasil',
    status: 'Regulada',
    type: 'VASP - Prestadora de Serviços de Ativos Virtuais',
    modalities: ['Intermediação de Ativos Virtuais', 'Custódia de Ativos Virtuais', 'Staking'],
    legalBasis: 'Lei nº 14.478/2022 e Resolução BCB nº 338/2023',
  },
} as const;

export const NAV_LINKS = [
  { label: 'Início', href: '/' },
  { label: 'Serviços', href: '/servicos' },
  { label: 'Tarifas', href: '/tarifas' },
  { label: 'Conformidade', href: '/regulatorio' },
  { label: 'Ativos', href: '/ativos' },
  { label: 'Contato', href: '/contato' },
] as const;

export const FOOTER_LEGAL_LINKS = [
  { label: 'Regulatório', href: '/regulatorio' },
  { label: 'Termos de Uso', href: '/termos' },
  { label: 'Política de Privacidade', href: '/termos#privacidade' },
  { label: 'Tarifas', href: '/tarifas' },
] as const;

export const FGC_WARNING = `ATENÇÃO: Os serviços prestados pela ${COMPANY.name} envolvendo ativos virtuais NÃO possuem cobertura do Fundo Garantidor de Créditos (FGC). Ativos virtuais não são moeda de curso legal, não são garantidos pelo governo federal e estão sujeitos a riscos, incluindo a possibilidade de perda total do capital investido.`;

export const SERVICES = [
  {
    id: 'intermediacao',
    title: 'Intermediação',
    description: 'Facilitamos a compra e venda de ativos virtuais com segurança, transparência e conformidade regulatória.',
    icon: 'ArrowLeftRight',
  },
  {
    id: 'custodia',
    title: 'Custódia',
    description: 'Armazenamento seguro dos seus ativos virtuais com infraestrutura de nível institucional e proteção avançada.',
    icon: 'Shield',
  },
  {
    id: 'staking',
    title: 'Staking',
    description: 'Participe da validação de redes blockchain e obtenha recompensas de forma regulamentada e transparente.',
    icon: 'Layers',
  },
] as const;

export const CRYPTO_ASSETS = [
  { name: 'Bitcoin', ticker: 'BTC', category: 'Criptomoeda' },
  { name: 'Ethereum', ticker: 'ETH', category: 'Criptomoeda' },
  { name: 'Solana', ticker: 'SOL', category: 'Criptomoeda' },
  { name: 'Cardano', ticker: 'ADA', category: 'Criptomoeda' },
  { name: 'Polygon', ticker: 'POL', category: 'Token' },
  { name: 'Chainlink', ticker: 'LINK', category: 'Token' },
  { name: 'USD Coin', ticker: 'USDC', category: 'Stablecoin' },
  { name: 'Tether', ticker: 'USDT', category: 'Stablecoin' },
] as const;

export const FEE_TABLE = [
  {
    service: 'Intermediação (Compra)',
    trigger: 'Execução de ordem de compra',
    value: 'A partir de 0,5%',
    observation: 'Sobre o valor da operação',
  },
  {
    service: 'Intermediação (Venda)',
    trigger: 'Execução de ordem de venda',
    value: 'A partir de 0,5%',
    observation: 'Sobre o valor da operação',
  },
  {
    service: 'Custódia',
    trigger: 'Manutenção mensal',
    value: 'Isento',
    observation: 'Sem taxa de custódia',
  },
  {
    service: 'Transferência (Entrada)',
    trigger: 'Depósito de ativos virtuais',
    value: 'Isento',
    observation: 'Sujeito a taxa de rede (gas fee)',
  },
  {
    service: 'Transferência (Saída)',
    trigger: 'Saque de ativos virtuais',
    value: 'Taxa de rede + R$ 5,00',
    observation: 'Variável conforme a blockchain',
  },
  {
    service: 'Staking',
    trigger: 'Distribuição de recompensas',
    value: '10% sobre rendimentos',
    observation: 'Sobre as recompensas recebidas',
  },
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
