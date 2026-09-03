// Service facts and prices. Prices are a draft Mariya will correct after seeing the site.

export const massage = {
  title: 'Massage therapy',
  intro:
    'One-on-one sessions shaped around what your body needs that day: slow and quiet, or focused and deep.',
  sessions: [
    { duration: '60 min', minutes: 60, price: 90 },
    { duration: '90 min', minutes: 90, price: 120 },
    { duration: '120 min', minutes: 120, price: 160 }
  ],
  modalities: [
    { name: 'Swedish and relaxation', note: 'Long, easy strokes to settle the nervous system.' },
    { name: 'Deep tissue and therapeutic', note: 'Focused work on the places that hold tension.' },
    { name: 'Sports and recovery', note: 'Recover faster, play longer.' },
    { name: 'Gentle massage for seniors', note: 'Keep moving comfortably.' },
    { name: 'Infant-massage instruction', note: 'Learn to massage your own baby.' },
    { name: 'Lymphatic drainage', note: 'Light, rhythmic work she is trained in.' }
  ],
  goodFor: ['Seniors', 'Athletes', 'Children and parents', 'Chronic pain', 'Post-injury recovery', 'Relaxation']
};

export const packages = {
  title: 'Packages',
  subtitle: '6 sessions, prepaid',
  intro: 'Six sessions bought together. Good for a season of regular care.',
  items: [
    { duration: '45 min', price: 350, savings: 40 },
    { duration: '60 min', price: 435, savings: 45 },
    { duration: '75 min', price: 550, savings: 50 },
    { duration: '90 min', price: 660, savings: 60 },
    { duration: '120 min', price: 850, savings: 80 }
  ]
};

export const membership = {
  title: 'Membership',
  price: 80,
  per: 'month',
  intro: 'One 60-minute massage each month; extra sessions at the member rate.'
};

export const bemer = {
  title: 'Bemer circulation session',
  price: 250,
  duration: '30 min',
  intro:
    'A pulsed electromagnetic (PEMF) session that temporarily improves local blood circulation and supports muscle recovery.',
  disclaimer: 'BEMER is not intended to diagnose, treat, cure or prevent any disease. Individual results vary.'
};

export const goodToKnow = [
  { title: 'By appointment', text: 'In a quiet home studio in Hudson.' },
  { title: 'Receipts provided', text: 'For insurance reimbursement or HSA/FSA.' },
  { title: 'A short intake form', text: 'New clients receive one from MassageBook after booking.' },
  { title: 'Pay how you like', text: 'In person (cash, Venmo, card) or online when booking.' }
];

export const whoFor = [
  { title: 'Seniors', text: 'who want to keep moving comfortably.' },
  { title: 'Athletes', text: 'who want to recover faster and play longer.' },
  { title: 'Parents and children', text: 'including instruction in massaging your baby.' },
  { title: 'People in recovery', text: 'from injury, surgery or a long stretch of pain.' }
];

export const formatPrice = (n: number) => `$${n}`;
