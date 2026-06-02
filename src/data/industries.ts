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
      'Valve and instrumentation services supporting power generation facilities and utilities.',
  },
  {
    id: 'oil-gas',
    name: 'Oil & Gas',
    description:
      'Specialized servicing for upstream, midstream, and downstream oil and gas operations.',
  },
  {
    id: 'offshore-marine',
    name: 'Offshore & Marine',
    description:
      'Field services and equipment support for offshore platforms and marine installations.',
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    description:
      'Maintenance and calibration services for manufacturing plants and production facilities.',
  },
  {
    id: 'process-plants',
    name: 'Process Plants',
    description:
      'Comprehensive valve and instrument support for chemical and process plant operations.',
  },
];

export const industriesStrip = industries.map((i) => i.name).join(' · ');
