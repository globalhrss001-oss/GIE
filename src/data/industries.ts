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
    image: '/images/working/working-site-1.jpeg',
    imageAlt: 'GIE engineers servicing equipment at a power generation facility',
  },
  {
    id: 'oil-gas',
    name: 'Oil & Gas',
    description:
      'Specialized servicing for upstream, midstream, and downstream oil and gas operations.',
    image: '/images/working/working-site-2.jpeg',
    imageAlt: 'GIE team performing valve servicing at an oil and gas plant',
  },
  {
    id: 'offshore',
    name: 'Offshore',
    description:
      'Field services and equipment support for offshore platforms, FPSO, and marine installations.',
    image: '/images/working/working-site-3.jpeg',
    imageAlt: 'GIE technicians working on industrial equipment at a client site',
  },
  {
    id: 'petrochemical',
    name: 'Petrochemical',
    description:
      'Valve automation and mechanical services for petrochemical and process plant operations.',
    image: '/images/working/working-recondition.jpg',
    imageAlt: 'In situ valve reconditioning at a process plant',
  },
  {
    id: 'food',
    name: 'Food',
    description:
      'Instrumentation calibration and valve servicing for food and beverage production facilities.',
    image: '/images/working/working-testing.jpg',
    imageAlt: 'Pilot valve testing and calibration for production facilities',
  },
];

export const industriesStrip = industries.map((i) => i.name).join(' · ');
