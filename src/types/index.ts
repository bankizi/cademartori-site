export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface CryptoAsset {
  name: string;
  ticker: string;
  category: string;
}

export interface FeeItem {
  service: string;
  trigger: string;
  value: string;
  observation: string;
}

export interface RiskItem {
  title: string;
  description: string;
}
