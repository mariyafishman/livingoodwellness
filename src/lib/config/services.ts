/**
 * Prices exactly as printed on Mariya's price sheet (Aug 2026).
 * Known open questions: the package "save" figures imply slightly different
 * single-session prices, and the Bemer price may be a package or a typo.
 * Publish as printed until she corrects them.
 */
export interface PriceRow {
  label: string;
  minutes: number;
  price: number;
}

export const singleSessions: PriceRow[] = [
  { label: '60 minutes', minutes: 60, price: 90 },
  { label: '90 minutes', minutes: 90, price: 120 },
  { label: '120 minutes', minutes: 120, price: 160 }
];

export interface PackageRow {
  minutes: number;
  price: number;
  save: number;
}

/** Six prepaid sessions. */
export const packages: PackageRow[] = [
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
  includes: 'One 60-minute massage every month',
  extra: 'Additional sessions in the same month at the member rate'
};

export const bemer = {
  name: 'Bemer circulation session',
  minutes: 30,
  price: 250,
  description:
    'A quiet half hour on the BEMER mat, a low-intensity pulsed electromagnetic field device that temporarily improves local blood circulation and supports muscle recovery. Often booked alongside a massage by athletes and people recovering from injury.',
  disclaimer:
    'BEMER is not intended to diagnose, treat, cure or prevent any disease. Individual results vary.'
};

export const modalities = [
  { name: 'Swedish and relaxation massage', note: 'Long, even strokes. Good for a first visit.' },
  { name: 'Deep tissue and therapeutic massage', note: 'Slower, focused work on the areas that need it.' },
  { name: 'Sports and recovery massage', note: 'For training bodies, before and after the season.' },
  { name: 'Gentle massage for seniors', note: 'Lighter pressure, more time, careful positioning.' },
  { name: 'Infant massage instruction', note: 'Mariya teaches parents; the baby stays with you.' },
  { name: 'Manual lymphatic drainage', note: 'Trained in; certification in progress.' }
];

export const audiences = [
  'Seniors who want to keep moving comfortably',
  'Athletes and weekend athletes',
  'Parents and children',
  'People with chronic or long-standing pain',
  'People recovering after an injury',
  'Anyone who just needs an hour of quiet'
];

export function money(n: number) {
  return `$${n.toLocaleString('en-US')}`;
}

export function perSession(row: PackageRow) {
  return `$${(row.price / packageSessions).toFixed(2).replace(/\.00$/, '')}`;
}
