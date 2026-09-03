/**
 * Services and prices. Draft prices from docs/site-content.md; Mariya will correct them.
 * Packages and membership are bought on MassageBook, so anything that sells links to /book.
 */

export interface PriceRow {
  duration: number; // minutes
  price: number; // USD
  savings?: number; // USD, packages only
}

export const massage = {
  name: 'Massage therapy',
  summary:
    'Swedish, deep tissue, sports and gentle work, adapted to the person on the table. Every session is one-on-one with Mariya.',
  prices: [
    { duration: 60, price: 90 },
    { duration: 90, price: 120 },
    { duration: 120, price: 160 }
  ] satisfies PriceRow[],
  modalities: [
    'Swedish and relaxation',
    'Deep tissue and therapeutic',
    'Sports and recovery',
    'Gentle massage for seniors',
    'Infant-massage instruction for parents',
    'Lymphatic drainage (trained in)'
  ],
  clients: ['Seniors', 'Athletes', 'Children and parents', 'Chronic pain', 'Post-injury recovery', 'Relaxation']
};

export const packages = {
  name: 'Packages',
  summary: 'Six sessions, prepaid. Pick the length that suits you and save on every visit.',
  sessions: 6,
  tiers: [
    { duration: 45, price: 350, savings: 40 },
    { duration: 60, price: 435, savings: 45 },
    { duration: 75, price: 550, savings: 50 },
    { duration: 90, price: 660, savings: 60 },
    { duration: 120, price: 850, savings: 80 }
  ] satisfies PriceRow[]
};

export const membership = {
  name: 'Membership',
  price: 80,
  period: 'month',
  summary: 'One 60-minute massage each month, with extra sessions at the member rate.'
};

export const bemer = {
  name: 'Bemer circulation session',
  price: 250,
  duration: 30,
  summary:
    'A pulsed electromagnetic (PEMF) session that temporarily improves local blood circulation and supports muscle recovery.',
  disclaimer: 'BEMER is not intended to diagnose, treat, cure or prevent any disease. Individual results vary.'
};

export const goodToKnow = [
  {
    title: 'By appointment',
    text: 'Sessions happen in a quiet home studio in Hudson. No walk-ins, no waiting room.'
  },
  {
    title: 'Receipts provided',
    text: 'For insurance reimbursement or your HSA/FSA.'
  },
  {
    title: 'A short intake form',
    text: 'New clients get one by email from MassageBook after booking, so the first visit starts with a conversation, not paperwork.'
  },
  {
    title: 'Pay how you like',
    text: 'In person (cash, Venmo, card) or online when you book.'
  }
];

export const audiences = [
  {
    title: 'Seniors',
    text: 'Gentle, steady work to keep you moving comfortably and sleeping well.'
  },
  {
    title: 'Athletes',
    text: 'Sports and recovery massage so you can recover faster and play longer.'
  },
  {
    title: 'Parents and children',
    text: 'Calm sessions for kids, and hands-on lessons for parents who want to massage their babies.'
  },
  {
    title: 'Recovery and chronic pain',
    text: 'Patient care after an injury, or when pain has settled in and needs unhurried attention.'
  }
];

export const formatPrice = (amount: number) => `$${amount.toLocaleString('en-US')}`;
