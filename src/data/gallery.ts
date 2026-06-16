export interface GalleryImage {
  src: string;
  alt: string;
  title: string;
  category: string;
  description: string;
  type?: 'image' | 'video';
  poster?: string;
}

export const galleryImages: GalleryImage[] = [
  {
    src: '/images/gallery/service-1.jpeg',
    alt: 'GIE mobile test bench container at an industrial site',
    title: 'Mobile Test Bench Container',
    category: 'Mobile Workshop',
    description: '20ft mobile test bench container (200 Bar) deployed on-site for valve testing.',
  },
  {
    src: '/images/gallery/service-2.jpeg',
    alt: 'Interior of GIE mobile workshop with testing equipment',
    title: 'On-Site Testing Facility',
    category: 'Mobile Workshop',
    description: 'Portable testing and calibration equipment ready for field operations.',
  },
  {
    src: '/images/gallery/service-3.jpg',
    alt: 'GIE technicians performing pilot valve testing',
    title: 'Pilot Valve Testing',
    category: 'Pilot Valve Testing',
    description: 'Precision testing and verification of pilot valves at client facilities.',
  },
  {
    src: '/images/gallery/service-4.jpg',
    alt: 'Safety valve lapping and servicing by GIE',
    title: 'Safety Valve Lapping',
    category: 'Safety Valve Lapping',
    description: 'Ventil in situ lapping for safety valves to restore seal integrity.',
  },
  {
    src: '/images/gallery/service-5.jpg',
    alt: 'GIE engineer working on safety valve equipment',
    title: 'Safety Valve Overhaul',
    category: 'Safety Valve Servicing',
    description: 'Hands-on servicing and inspection of critical safety valve assemblies.',
  },
  {
    src: '/images/gallery/service-6.jpg',
    alt: 'In situ valve reconditioning by GIE team',
    title: 'In Situ Valve Recondition',
    category: 'In Situ Recondition',
    description: 'On-site valve reconditioning without removing equipment from the line.',
  },
  {
    src: '/images/gallery/service-7.jpg',
    alt: 'GIE valve training session for plant personnel',
    title: 'Valve Training Program',
    category: 'Valve Training',
    description: 'Control and safety valve training with standard compliance certification.',
  },
  {
    src: '/images/working/working-site-1.jpeg',
    alt: 'GIE engineers on-site at an industrial facility',
    title: 'On-Site Field Service',
    category: 'Field Operations',
    description: 'GIE field team deployed at a client industrial facility.',
  },
  {
    src: '/images/working/working-evt-testing.png',
    alt: 'GIE technicians performing EVT preventive testing',
    title: 'EVT (Prevent Test)',
    category: 'Field Operations',
    description: 'Electric valve testing and preventive testing on-site.',
  },
  {
    src: '/images/working/working-site-3.jpeg',
    alt: 'GIE technicians working on industrial equipment',
    title: 'Equipment Servicing',
    category: 'Field Operations',
    description: 'Hands-on mechanical servicing by GIE technicians.',
  },
  {
    src: '/images/gallery/on-site-machining-work.jpeg',
    alt: 'GIE technicians performing on-site flange machining at an industrial plant',
    title: 'On Site Machining Work',
    category: 'In Situ Machining',
    description: 'Portable flange machining equipment deployed on-site for precision field work.',
  },
  {
    src: '/videos/onsite-machining.mp4',
    alt: 'On-site machining operation video',
    title: 'Onsite Machining',
    category: 'In Situ Machining',
    description: 'Field machining setup and operation at a client facility.',
    type: 'video',
    poster: '/images/gallery/on-site-machining-work.jpeg',
  },
  {
    src: '/videos/insitu-steam-bypass-control-valve-servicing.mp4',
    alt: 'In situ steam bypass control valve servicing video',
    title: 'Insitu Steam ByPass Control Valve Servicing',
    category: 'Control Valve Servicing',
    description: 'On-site servicing of a steam bypass control valve assembly.',
    type: 'video',
    poster: '/images/gallery/on-site-machining-work.jpeg',
  },
  {
    src: '/images/team/gie-team.png',
    alt: 'Global Infrastructure Engineering team',
    title: 'The GIE Team',
    category: 'Our Team',
    description: 'Global Infrastructure Engineering field engineers and technicians.',
  },
];

export const galleryPhotos = galleryImages.filter((image) => image.type !== 'video');
export const galleryVideos = galleryImages.filter((image) => image.type === 'video');
