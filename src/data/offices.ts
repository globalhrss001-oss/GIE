export interface Office {
  id: string;
  country: string;
  entity: string;
  enabled?: boolean;
  contactPerson?: string;
  title?: string;
  address?: string[];
  phone?: string;
  fax?: string;
  mobile?: string;
  email?: string;
  workshop?: Workshop;
}

export interface Workshop {
  name: string;
  address: string[];
  phone?: string;
}

export const offices: Office[] = [
  {
    id: 'singapore',
    country: 'Singapore',
    entity: 'GLOBAL INFRASTRUCTURE ENGINEERING PTE LTD',
    enabled: true,
    address: [
      '111 North Bridge Road',
      '#03-31 Peninsula Plaza',
      'Singapore 179098',
    ],
    phone: '(65) 6338 4566',
    fax: '(65) 6338 3266',
    mobile: '(65) 9062 2272',
    email: 'jc@giesg.com',
  },
  {
    id: 'malaysia',
    country: 'Malaysia',
    entity: 'GLOBAL ALLIANCE ENGINEERING (MALAYSIA) SDN BHD',
    enabled: true,
    address: [
      'No. 18A Jalan Impian Emas 4',
      'Taman Impian Emas',
      '81300 Johor Bahru',
    ],
    mobile: '(65) 9062 2272',
    email: 'jc@giesg.com',
  },
  {
    id: 'thailand',
    country: 'Thailand',
    entity: 'Global Infrastructure Engineering (Thailand)',
    enabled: false,
  },
  {
    id: 'myanmar',
    country: 'Myanmar',
    entity: 'Global Infrastructure Engineering Co. Ltd',
    enabled: true,
    address: [
      'No. SH001 Thitsar Road',
      '8 Quarter, South Okklarpa Township',
      'Yangon, Myanmar',
    ],
    mobile: '(95) 9445657343',
    email: 'minthan@giesg.com',
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

/** Offices shown on the website (TH hidden until contact details are ready) */
export const activeOffices = offices.filter((office) => office.enabled !== false);

export const primaryOffice = offices[0];
