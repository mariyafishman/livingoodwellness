/**
 * Services and prices from docs/site-content.md. Prices are a draft Mariya will correct.
 * Packages and membership are bought on MassageBook, so anything that sells links to /book.
 */

export interface PriceRow {
  /** minutes */
  duration: number;
  /** USD */
  price: number;
  /** USD, packages only */
  savings?: number;
}

export const massage = {
  name: 'Massage therapy',
  summary: 'Sixty, ninety or one hundred twenty minutes, tailored to what your body needs that day.',
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
    'Infant-massage instruction',
    'Lymphatic drainage'
  ],
  goodFor: 'Seniors, athletes, children and parents, chronic pain, post-injury recovery, relaxation.'
};

export const packages = {
  name: 'Packages',
  summary: 'Six sessions, prepaid, at a saving. Bought on MassageBook when you book.',
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
  summary: 'One 60-minute massage each month, and extra sessions at the member rate.'
};

export const bemer = {
  name: 'Bemer circulation session',
  price: 250,
  duration: 30,
  summary:
    'A pulsed electromagnetic (PEMF) session that temporarily improves local blood circulation and supports muscle recovery.',
  /** Required wording. Keep verbatim. */
  disclaimer:
    'BEMER is not intended to diagnose, treat, cure or prevent any disease. Individual results vary.'
};

export const goodToKnow = [
  { title: 'By appointment', body: 'In a quiet home studio in Hudson. Call, text or book online.' },
  { title: 'Receipts provided', body: 'For insurance reimbursement or your HSA or FSA.' },
  { title: 'A short intake form', body: 'New clients receive one from MassageBook after booking.' },
  { title: 'Pay your way', body: 'In person by cash, Venmo or card, or online when you book.' }
];

export const clients = [
  { mark: 'disc', title: 'Seniors', body: 'Keep moving comfortably, with gentle work that respects how you feel today.' },
  { mark: 'bar', title: 'Athletes', body: 'Recover faster and play longer. Sports and deep-tissue work between seasons and races.' },
  { mark: 'half', title: 'Parents and children', body: 'Learn to massage your baby. Calm, practical instruction you take home with you.' },
  { mark: 'quarter', title: 'After an injury', body: 'Patient, hands-on care and good circulation while your body does what it knows how to do.' }
] as const;
