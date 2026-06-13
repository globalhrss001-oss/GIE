export interface Workshop {
  name: string;
  address: string[];
  phone?: string;
}

export interface Office {
  id: string;
  country: string;
  entity: string;
  contactPerson?: string;
  title?: string;
  address?: string[];
  phone?: string;
  fax?: string;
  mobile?: string;
  email?: string;
  workshop?: Workshop;
}

export const offices: Office[] = [
  {
    id: 'singapore',
    country: 'Singapore',
    entity: 'GLOBAL INFRASTRUCTURE ENGINEERING PTE LTD',
    contactPerson: 'Josephine Chin',
    title: 'Director',
    address: [
      '111 North Bridge Road',
      '#03-31 Peninsula Plaza',
      'Singapore 179098',
    ],
    phone: '6338 4566',
    fax: '6338 3266',
    mobile: '(65) 9062 2272',
    email: 'jc@giesg.com',
  },
  {
    id: 'malaysia',
    country: 'Malaysia',
    entity: 'Global Alliance Engineering Sdn Bhd',
  },
  {
    id: 'thailand',
    country: 'Thailand',
    entity: 'Global Infrastructure Engineering (Thailand)',
  },
  {
    id: 'myanmar',
    country: 'Myanmar',
    entity: 'Global Infrastructure Engineering Co. Ltd',
    address: [
      'No. SH001 Thitsar Road',
      '8 Quarter, South Okklarpa Township',
      'Yangon, Myanmar',
    ],
    mobile: '(+95) 9445657343',
    email: 'jc@giesg.com',
    workshop: {
      name: 'G.I.E Workshop',
      address: [
        'No. 489–490, Set Hmu (8) Street',
        '(144) Industrial Zone, South Dagon Township',
        'Yangon, Myanmar',
      ],
      phone: '(951) 3560017 / (951) 3560018',
    },
  },
];

export const primaryOffice = offices[0];
