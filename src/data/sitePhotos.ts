export const teamPhoto = {
  src: '/images/team/gie-team.png',
  alt: 'Global Infrastructure Engineering team photo',
  caption: 'The GIE team — field engineers and technicians serving clients across Asia Pacific.',
};

export const certificatePhoto = {
  src: '/images/certifications/gie-certificates.png',
  alt: 'GIE ISO and bizSAFE Star certification badges',
};

export interface WorkingPhoto {
  src: string;
  alt: string;
  title: string;
}

export const workingPhotos: WorkingPhoto[] = [
  {
    src: '/images/working/working-site-1.jpeg',
    alt: 'GIE engineers on-site at an industrial facility',
    title: 'On-Site Field Service',
  },
  {
    src: '/images/working/working-evt-testing.png',
    alt: 'GIE technicians performing EVT preventive testing',
    title: 'EVT (prevent test)',
  },
  {
    src: '/images/working/working-site-3.jpeg',
    alt: 'GIE technicians working on industrial equipment',
    title: 'Equipment Servicing',
  },
  {
    src: '/images/working/working-testing.jpg',
    alt: 'Pilot valve testing by GIE technicians',
    title: 'Valve Testing',
  },
  {
    src: '/images/working/working-lapping.jpg',
    alt: 'Safety valve lapping operation',
    title: 'Safety Valve Lapping',
  },
  {
    src: '/images/working/working-safety-valve.jpg',
    alt: 'Safety valve overhaul on-site',
    title: 'Safety Valve Overhaul',
  },
  {
    src: '/images/working/working-recondition.jpg',
    alt: 'In situ valve reconditioning',
    title: 'In Situ Reconditioning',
  },
  {
    src: '/images/working/working-training.jpg',
    alt: 'GIE valve training session',
    title: 'Valve Training',
  },
];

/** Featured photos for homepage showcase */
export const featuredPhotos = workingPhotos.slice(0, 3);
