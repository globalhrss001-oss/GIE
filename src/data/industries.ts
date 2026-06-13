export interface Industry {
  id: string;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
}

export const industries: Industry[] = [
  {
    id: 'power',
    name: 'Power',
    description:
      'Valve and instrumentation services for power generation plants, thermal facilities, and utilities.',
    image: '/images/working/working-safety-valve.jpg',
    imageAlt: 'Safety valve overhaul for power generation facilities',
  },
  {
    id: 'oil-gas',
    name: 'Oil & Gas',
    description:
      'Specialized servicing for upstream, midstream, and downstream oil and gas operations.',
    image: '/images/working/working-lapping.jpg',
    imageAlt: 'Safety valve lapping at an oil and gas plant',
  },
  {
    id: 'offshore',
    name: 'Offshore',
    description:
      'Field services and equipment support for offshore platforms, FPSO, and marine installations.',
    image: '/images/working/working-recondition.jpg',
    imageAlt: 'In situ valve reconditioning at an industrial site',
  },
  {
    id: 'petrochemical',
    name: 'Petrochemical',
    description:
      'Valve automation and mechanical services for petrochemical and process plant operations.',
    image: '/images/working/working-testing.jpg',
    imageAlt: 'Pilot valve testing at a process plant',
  },
  {
    id: 'food',
    name: 'Food',
    description:
      'Instrumentation calibration and valve servicing for food and beverage production facilities.',
    image: '/images/working/working-training.jpg',
    imageAlt: 'GIE valve training and calibration for production facilities',
  },
];

export const industriesStrip = industries.map((i) => i.name).join(' · ');
