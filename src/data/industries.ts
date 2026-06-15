export interface Industry {
  id: string;
  name: string;
  description: string;
}

/** Four field photos for homepage industries showcase (2×2 grid) */
export const industryShowcasePhotos = [
  {
    src: '/images/working/working-site-1.jpeg',
    alt: 'GIE field service at a power generation facility',
  },
  {
    src: '/images/working/working-site-2.jpeg',
    alt: 'GIE team at an oil and gas plant',
  },
  {
    src: '/images/working/working-recondition.jpg',
    alt: 'In situ valve reconditioning at an industrial site',
  },
  {
    src: '/images/working/working-safety-valve.jpg',
    alt: 'Safety valve servicing for process industries',
  },
] as const;

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
