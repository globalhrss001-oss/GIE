export interface NavLinkItem {
  label: string;
  href: string;
}

export interface NavColumn {
  heading: string;
  links: NavLinkItem[];
}

export interface NavItem {
  id: string;
  label: string;
  href?: string;
  /** Path segments that mark this item active (e.g. `/about/`) */
  matchPaths?: string[];
  columns?: NavColumn[];
}

export const mainNavigation: NavItem[] = [
  {
    id: 'home',
    label: 'Home',
    href: '/',
    matchPaths: ['/'],
  },
  {
    id: 'about',
    label: 'About Us',
    href: '/about/',
    matchPaths: ['/about/', '/offices/', '/industries/'],
    columns: [
      {
        heading: 'ABOUT G.I.E.',
        links: [
          { label: 'Who we are', href: '/about/' },
          { label: 'Certifications', href: '/about/#certifications' },
          { label: 'Manufacturer expertise', href: '/about/#manufacturers' },
          { label: 'Our client record', href: '/about/#clients' },
        ],
      },
      {
        heading: 'PEOPLE & PLACES',
        links: [
          { label: 'Our offices', href: '/offices/' },
          { label: 'Industries we serve', href: '/industries/' },
          { label: 'Contact us', href: '/contact/' },
        ],
      },
    ],
  },
  {
    id: 'gallery',
    label: 'Gallery',
    href: '/gallery/',
    matchPaths: ['/gallery/'],
  },
  {
    id: 'services',
    label: 'Services',
    href: '/services/',
    matchPaths: ['/services/'],
    columns: [
      {
        heading: 'VALVE & ACTUATOR',
        links: [
          { label: 'Motorized valve integration', href: '/services/#motorized-valve' },
          { label: 'Control valve servicing', href: '/services/#control-valve' },
          { label: 'Safety valve testing', href: '/services/#safety-valve' },
          { label: 'Actuators & electrical actuators', href: '/services/#actuators' },
          { label: 'Flange management & machining', href: '/services/#in-situ-machining' },
        ],
      },
      {
        heading: 'FIELD & TRAINING',
        links: [
          { label: 'Field instrument calibration', href: '/services/#field-instrument' },
          { label: 'Control & safety valve training', href: '/services/#training' },
          { label: 'On-site commissioning', href: '/services/#commissioning' },
          { label: 'Total valve management', href: '/services/#valves-management' },
          { label: 'View all services', href: '/services/' },
        ],
      },
    ],
  },
  {
    id: 'contact',
    label: 'Contact',
    href: '/contact/',
    matchPaths: ['/contact/'],
  },
];

/** Flat list for footer and other simple link lists */
export const flatNavLinks = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About' },
  { href: '/gallery/', label: 'Gallery' },
  { href: '/services/', label: 'Services' },
  { href: '/industries/', label: 'Industries' },
  { href: '/offices/', label: 'Offices' },
  { href: '/contact/', label: 'Contact' },
] as const;
