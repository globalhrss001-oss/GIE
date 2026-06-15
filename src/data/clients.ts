export interface ClientGroup {
  country: string;
  clients: string[];
}

/** Client list aligned with GIE company profile — grouped by region */
export const clientGroups: ClientGroup[] = [
  {
    country: 'Singapore',
    clients: [
      'Jurong Engineering Limited',
      'Veolia ES Hazardous Waste Management',
      'Va Tech Wabag (Water Plant)',
      'Electromech Water (Water)',
      'Waterchem (Life Science)',
      'AGS Flow Solution Pte Ltd',
    ],
  },
  {
    country: 'Philippines',
    clients: ['GN Thermal Power Plant'],
  },
  {
    country: 'Myanmar',
    clients: [
      'POSCO DAEWOO',
      'Sembcorp Power Plant',
      'JFE Waste Energy Plant',
      'Heineken Myanmar Limited',
      'Daw Nyein Gas Terminal MOGE',
      'Power China Thakada Power Plant',
      'Power China Kyauk Phyu',
      'Max Power',
      'Puma Energy',
      'Denko',
      'Max Energy',
      'Thatone Power',
      'GE (Fieldcare)',
      'Jurong Engineering (Myanmar)',
      'ASRU Pangpat',
    ],
  },
  {
    country: 'Vietnam',
    clients: ['Nhi Son Power Plant', 'AES Power Plant Muon Doung Power'],
  },
  {
    country: 'Thailand',
    clients: ['Rojana Power Plant 3'],
  },
  {
    country: 'Dubai',
    clients: ['PEC Process Systems', 'Drydocks FPSO'],
  },
];
