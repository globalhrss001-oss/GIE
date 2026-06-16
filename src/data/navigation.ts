export interface NavLinkItem {
  label: string;
  href?: string;
  /** Opens in-app UI instead of navigating to a page */
  action?: 'org-chart';
}

export interface NavItem {
  id: string;
  label: string;
  href?: string;
  /** Path segments that mark this item active (e.g. `/about/`) */
  matchPaths?: string[];
  dropdownLinks?: NavLinkItem[];
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
    matchPaths: ['/about/', '/offices/'],
    dropdownLinks: [
      { label: 'Who we are', href: '/about/' },
      { label: 'Organization Chart', action: 'org-chart' },
      { label: 'Certifications', href: '/about/#certifications' },
      { label: 'Our client record', href: '/about/#clients' },
    ],
  },
  {
    id: 'gallery',
    label: 'Gallery',
    href: '/gallery/',
    matchPaths: ['/gallery/'],
    dropdownLinks: [
      { label: 'Photos', href: '/gallery/#photos' },
      { label: 'Videos', href: '/gallery/#videos' },
    ],
  },
  {
    id: 'services',
    label: 'Services',
    href: '/services/',
    matchPaths: ['/services/', '/industries/', '/products/'],
    dropdownLinks: [
      { label: 'Our Services', href: '/services/#our-services' },
      { label: 'Industries We Serve', href: '/industries/' },
      { label: 'Products', href: '/products/' },
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
