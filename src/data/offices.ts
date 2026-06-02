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
    id: 'myanmar',
    country: 'Myanmar',
    entity: 'Global Infrastructure Engineering Co. Ltd',
  },
];

export const primaryOffice = offices[0];
