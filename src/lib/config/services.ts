/**
 * Prices exactly as printed on Mariya's price sheet. Do not "fix" numbers here;
 * discrepancies are tracked in the (gitignored) project docs and resolved with her.
 */

export const singleSessions = [
  { minutes: 60, price: 90 },
  { minutes: 90, price: 120 },
  { minutes: 120, price: 160 }
] as const;

export const packages = [
  { minutes: 45, price: 350, save: 40 },
  { minutes: 60, price: 435, save: 45 },
  { minutes: 75, price: 550, save: 50 },
  { minutes: 90, price: 660, save: 60 },
  { minutes: 120, price: 850, save: 80 }
] as const;

export const packageSessions = 6;

export const membership = {
  price: 80,
  period: 'month',
  includes: [
    'One 60-minute massage every month',
    'Additional sessions in the same month at the member rate',
    'Billed monthly through the booking page'
  ]
} as const;

export const bemer = {
  name: 'Bemer circulation session',
  minutes: 30,
  price: 250,
  description:
    'A quiet session on the Bemer mat, a low-intensity pulsed electromagnetic field device. It is designed to temporarily improve local blood circulation and support muscle recovery. Often paired with a massage, or booked on its own.',
  disclaimer:
    'BEMER is not intended to diagnose, treat, cure or prevent any disease. Individual results vary.'
} as const;

export const modalities = [
  {
    name: 'Therapeutic and deep tissue',
    text: 'Focused work on tight, sore or overworked muscles, at a pressure you are comfortable with.'
  },
  {
    name: 'Swedish and relaxation',
    text: 'Long, unhurried strokes to settle the nervous system and ease everyday tension.'
  },
  {
    name: 'Sports and recovery',
    text: 'For athletes of any age who want to recover faster and keep playing.'
  },
  {
    name: 'Gentle massage for seniors',
    text: 'Lighter, patient work that respects joints, skin and circulation.'
  },
  {
    name: 'Infant massage instruction',
    text: 'Parents learn simple, safe ways to massage their own babies.'
  },
  {
    name: 'Lymphatic drainage',
    text: 'Light, rhythmic work to encourage lymph flow. Mariya is trained in manual lymphatic drainage.'
  }
] as const;

export const audiences = [
  {
    title: 'Seniors',
    text: 'Gentle, patient work for older adults who want to keep moving comfortably.'
  },
  {
    title: 'Athletes',
    text: 'Recovery and maintenance for people who want to play longer, at any age.'
  },
  {
    title: 'Parents and children',
    text: 'Massage for all ages, and lessons for parents who want to massage their babies.'
  },
  {
    title: 'Recovering from injury',
    text: 'Steady hands-on care when the body needs time and attention to heal.'
  }
] as const;

export const practicalNotes = [
  'All sessions are by appointment in a private home studio in Hudson, MA.',
  'Receipts are provided for insurance reimbursement or HSA/FSA claims.',
  'New clients receive a short intake form by email after booking, so the first visit starts on time.',
  'Cash, Venmo and credit or debit cards are accepted.'
] as const;
