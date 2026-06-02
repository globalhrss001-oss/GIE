export interface GalleryImage {
  src: string;
  alt: string;
  title: string;
  category: string;
  description: string;
}

export const galleryImages: GalleryImage[] = [
  {
    src: '/images/gallery/service-1.jpeg',
    alt: 'GIE mobile workshop container at an industrial site',
    title: 'Mobile Workshop Unit',
    category: 'Mobile Workshop',
    description: 'Fully equipped mobile workshop deployed on-site for valve and equipment servicing.',
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
    description: 'Expert lapping and overhaul of safety valves to restore seal integrity.',
  },
  {
    src: '/images/gallery/service-5.jpg',
    alt: 'GIE engineer working on safety valve equipment',
    title: 'Safety Valve Overhaul',
    category: 'Safety Valve Lapping',
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
    description: 'Technical training and certification for valve operation and maintenance.',
  },
];
