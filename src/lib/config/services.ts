/** Draft prices; Mariya will correct after seeing the site. */

export const massageRates = [
  { duration: '60 min', price: 90 },
  { duration: '90 min', price: 120 },
  { duration: '120 min', price: 160 }
] as const;

export const modalities = [
  'Swedish and relaxation',
  'Deep tissue and therapeutic',
  'Sports and recovery',
  'Gentle massage for seniors',
  'Infant-massage instruction for parents',
  'Lymphatic drainage (trained in)'
] as const;

export const clientGroups = [
  {
    title: 'Seniors',
    text: 'Gentle, patient work to keep you moving comfortably and sleeping well.',
    shape: 'circle'
  },
  {
    title: 'Athletes',
    text: 'Sports and recovery massage so you can recover faster and play longer.',
    shape: 'half'
  },
  {
    title: 'Parents and children',
    text: 'Calm sessions for kids, and instruction so you can massage your own baby.',
    shape: 'quarter'
  },
  {
    title: 'Recovery and chronic pain',
    text: 'Therapeutic and deep-tissue work after injury, or for pain that has stayed too long.',
    shape: 'ring'
  }
] as const;

export const packages = [
  { duration: '45 min', price: 350, savings: 40 },
  { duration: '60 min', price: 435, savings: 45 },
  { duration: '75 min', price: 550, savings: 50 },
  { duration: '90 min', price: 660, savings: 60 },
  { duration: '120 min', price: 850, savings: 80 }
] as const;

export const membership = {
  price: 80,
  period: 'month',
  text: 'One 60-minute massage each month; extra sessions at the member rate.'
} as const;

export const bemer = {
  price: 250,
  duration: '30 min',
  text: 'A pulsed electromagnetic (PEMF) session that temporarily improves local blood circulation and supports muscle recovery.',
  disclaimer: 'BEMER is not intended to diagnose, treat, cure or prevent any disease. Individual results vary.'
} as const;

export const goodToKnow = [
  { title: 'By appointment', text: 'In a quiet home studio in Hudson.' },
  { title: 'Receipts provided', text: 'For insurance reimbursement or HSA/FSA.' },
  { title: 'Short intake form', text: 'New clients get one from MassageBook after booking.' },
  { title: 'Pay your way', text: 'In person (cash, Venmo, card) or online when booking.' }
] as const;

export const usd = (n: number) => `$${n.toLocaleString('en-US')}`;
