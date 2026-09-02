/**
 * Prices exactly as printed on Mariya's price sheet (Aug 2026).
 * Known open questions: the package "save" figures imply slightly different
 * single-session prices, and the Bemer price may be a package or a typo.
 * Published as printed until she corrects them.
 */
export interface Session {
  minutes: number;
  price: number;
  note: string;
}

export const sessions: Session[] = [
  { minutes: 60, price: 90, note: 'The classic. Full body, or one area that needs the time.' },
  { minutes: 90, price: 120, note: 'Room to slow down. Most popular for chronic tension.' },
  { minutes: 120, price: 160, note: 'The whole afternoon off. Nothing is rushed.' }
];

export interface Package {
  minutes: number;
  price: number;
  save: number;
}

/** Six prepaid sessions. */
export const packages: Package[] = [
  { minutes: 45, price: 350, save: 40 },
  { minutes: 60, price: 435, save: 45 },
  { minutes: 75, price: 550, save: 50 },
  { minutes: 90, price: 660, save: 60 },
  { minutes: 120, price: 850, save: 80 }
];

export const packageSessions = 6;

export const membership = {
  price: 80,
  period: 'month',
  includes: 'One 60-minute massage every month.',
  extra: 'Extra sessions that month at the same member rate.'
};

export const bemer = {
  name: 'Bemer circulation session',
  minutes: 30,
  price: 250,
  description:
    'A quiet half hour on the BEMER mat, a low-intensity pulsed electromagnetic field device that temporarily improves local blood circulation and supports muscle recovery. Often added to a massage by athletes and people recovering from injury.',
  disclaimer:
    'BEMER is not intended to diagnose, treat, cure or prevent any disease. Individual results vary.'
};

export interface Modality {
  name: string;
  note: string;
}

export const modalities: Modality[] = [
  { name: 'Swedish and relaxation', note: 'Long, even strokes. Good for a first visit.' },
  { name: 'Deep tissue and therapeutic', note: 'Slower, focused work on the areas that need it.' },
  { name: 'Sports and recovery', note: 'For training bodies, before and after the season.' },
  { name: 'Gentle massage for seniors', note: 'Lighter pressure, more time, careful positioning.' },
  { name: 'Infant massage for parents', note: 'Mariya teaches you; the baby stays with you.' },
  { name: 'Lymphatic drainage', note: 'Trained in; certification in progress.' }
];

export interface Audience {
  title: string;
  line: string;
  photo: 'seniors' | 'athletes' | 'parents' | 'anyone';
}

export const audiences: Audience[] = [
  { title: 'Seniors', line: 'Keep moving comfortably.', photo: 'seniors' },
  { title: 'Athletes', line: 'Recover faster, play longer.', photo: 'athletes' },
  { title: 'Parents & babies', line: 'Learn to massage your baby.', photo: 'parents' },
  { title: 'Anyone in pain', line: 'Old injuries, long days, tight backs.', photo: 'anyone' }
];

export function money(n: number) {
  return `$${n.toLocaleString('en-US')}`;
}

export function perSession(row: Package) {
  const each = row.price / packageSessions;
  return `$${Number.isInteger(each) ? each : each.toFixed(2)}`;
}
