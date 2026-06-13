export interface ClientGroup {
  country: string;
  clients: string[];
}

export const clientGroups: ClientGroup[] = [
  {
    country: 'Singapore',
    clients: [
      'GN Thermal Power Plant',
      'Jurong Engineering Limited',
      'Veolia ES Hazardous Waste Management',
      'Va Tech Wabag (Water Plant)',
      'Electromech Water',
      'Waterchem (Life Science)',
      'AGS Flow Solution Pte Ltd',
      'PEC Process Systems',
      'Drydocks FPSO',
      'POSCO DAEWOO',
      'Sembcorp Power Plant',
      'JFE Waste Energy Plant',
      'GE (Fieldcare)',
    ],
  },
  {
    country: 'Myanmar',
    clients: [
      'Heineken Myanmar Limited',
      'Daw Nyein Gas Terminal MOGE',
      'Power China Thakada Power Plant',
      'Power China Kyauk Phyu',
      'Max Power',
      'Puma Energy',
      'Denko',
      'Max Energy',
      'Thatone Power',
      'Jurong Engineering (Myanmar)',
      'ASRU Pangpat',
    ],
  },
  {
    country: 'Philippines',
    clients: ['Rojana Power Plant 3', 'Nhi Son Power Plant'],
  },
  {
    country: 'Vietnam',
    clients: ['AES Power Plant', 'Muon Doung Power'],
  },
  {
    country: 'Thailand',
    clients: ['PT McDermott'],
  },
  {
    country: 'Dubai',
    clients: ['Interlog Valve Commissioning'],
  },
];
