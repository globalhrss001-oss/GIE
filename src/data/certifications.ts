export interface Certification {
  name: string;
  type: string;
}

export const certifications: Certification[] = [
  { name: 'bizSAFE Star', type: 'Workplace Safety' },
  { name: 'ISO 9001:2015', type: 'Quality Management' },
  { name: 'ISO 14001:2015', type: 'Environmental Management' },
  { name: 'ISO 45001:2018', type: 'Occupational Health & Safety' },
];
