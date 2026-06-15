export interface Industry {
  id: string;
  name: string;
  description: string;
}

export const industries: Industry[] = [
  {
    id: 'power',
    name: 'Power',
    description:
      'Valve and instrumentation services for power generation plants, thermal facilities, and utilities.',
  },
  {
    id: 'oil-gas',
    name: 'Oil & Gas',
    description:
      'Specialized servicing for upstream, midstream, and downstream oil and gas operations.',
  },
  {
    id: 'offshore',
    name: 'Offshore',
    description:
      'Field services and equipment support for offshore platforms, FPSO, and marine installations.',
  },
  {
    id: 'petrochemical',
    name: 'Petrochemical',
    description:
      'Valve automation and mechanical services for petrochemical and process plant operations.',
  },
  {
    id: 'food',
    name: 'Food & Beverage',
    description:
      'Instrumentation calibration and valve servicing for food and beverage production facilities.',
  },
  {
    id: 'water-treatment',
    name: 'Water Treatment',
    description:
      'Valve and instrumentation support for water treatment plants, desalination, and municipal water systems.',
  },
  {
    id: 'pharmaceutical',
    name: 'Pharmaceutical',
    description:
      'Calibration and valve servicing for pharmaceutical and life science manufacturing facilities.',
  },
];

export const industriesStrip = industries.map((i) => i.name).join(' · ');
