export const company = {
  name: 'Global Infrastructure Engineering',
  shortName: 'GIE',
  tagline: 'Engineering solutions for critical infrastructure across Asia and beyond.',
  description:
    'Global Infrastructure Engineering provides valve servicing, actuators, pumps, field instrumentation, and training for power, oil & gas, offshore & marine, manufacturing, and process plant industries.',
  website: 'https://www.giesg.com',
  email: 'jc@giesg.com',
  logo: '/images/logo/gie-logo.png',
  logoAlt: 'Global Infrastructure Engineering logo',
  copyright: `© ${new Date().getFullYear()} Global Infrastructure Engineering Pte Ltd. All rights reserved.`,
} as const;

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About' },
  { href: '/services/', label: 'Services' },
  { href: '/industries/', label: 'Industries' },
  { href: '/offices/', label: 'Offices' },
  { href: '/gallery/', label: 'Gallery' },
  { href: '/contact/', label: 'Contact' },
] as const;
