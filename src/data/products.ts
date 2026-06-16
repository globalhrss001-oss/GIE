export interface Product {
  id: string;
  name: string;
  description: string;
}

export const productHeroImage = {
  src: '/images/products/gie-products.jpeg',
  alt: 'GIE gasket and sealing products',
};

export const products: Product[] = [
  {
    id: 'insulating-gasket',
    name: 'Insulating Gasket',
    description:
      'Flange insulation kits for corrosion protection and electrical isolation in pipeline systems.',
  },
  {
    id: 'ptfe-products',
    name: 'PTFE Products',
    description:
      'PTFE-based sealing solutions for chemical-resistant and high-performance applications.',
  },
  {
    id: 'joint-material',
    name: 'Joint Material',
    description:
      'Joint sealing materials for reliable flange and equipment connections in industrial service.',
  },
  {
    id: 'customized-gasket-fabrication',
    name: 'Customized Gasket Fabrication',
    description:
      'Tailor-made gaskets fabricated to customer drawings, specifications, and operating conditions.',
  },
  {
    id: 'spiral-wound-gasket',
    name: 'Spiral Wound Gasket',
    description:
      'Spiral wound gaskets for high-pressure and high-temperature flange sealing applications.',
  },
  {
    id: 'metallic-gasket',
    name: 'Metallic Gasket',
    description:
      'Metal and semi-metallic gaskets for critical sealing in process and pipeline equipment.',
  },
  {
    id: 'ring-joint',
    name: 'Ring Joint',
    description:
      'Ring type joint gaskets for API flange connections in oil, gas, and petrochemical service.',
  },
  {
    id: 'heat-exchanger-gasket',
    name: 'Heat Exchanger Gasket',
    description:
      'Gaskets for heat exchanger service, including plate and shell-and-tube applications.',
  },
];
