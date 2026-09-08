/**
 * Single source of truth for business facts used across the site.
 * Facts come from docs/site-content.md (private, not committed).
 */

export const site = {
  name: 'Livingood Wellness Center',
  tagline: 'Find your balance.',
  description:
    'Massage therapy in Hudson, MA. Mariya Fishman, Licensed Massage Therapist, brings over 30 years of experience with seniors, athletes, children and everyone in between.',
  /** Canonical site URL. Used for Open Graph and JSON-LD. */
  url: 'https://livingoodwellness.com',
  practitioner: {
    name: 'Mariya Fishman',
    title: 'Licensed Massage Therapist',
    /** Placeholder until the license number is supplied. */
    license: 'MA License #____'
  },
  phone: {
    display: '978-493-6171',
    e164: '+19784936171',
    tel: 'tel:+19784936171',
    sms: 'sms:+19784936171'
  },
  email: 'mariyafishmanavatar@gmail.com',
  address: {
    street: '157 Marlboro Street',
    city: 'Hudson',
    state: 'MA',
    zip: '01749',
    note: 'Private home with a dedicated studio. By appointment only.'
  },
  /** Placeholder until the MassageBook account exists. */
  bookingUrl: 'https://www.massagebook.com/'
} as const;

export const hours = [
  { days: 'Mon, Wed, Fri', time: '9:00 AM – 7:00 PM' },
  { days: 'Tue, Thu', time: '2:00 PM – 7:00 PM' },
  { days: 'Sat', time: 'By appointment' },
  { days: 'Sun', time: 'Closed' }
] as const;

/** schema.org OpeningHoursSpecification input. */
export const openingHours = [
  { days: ['Monday', 'Wednesday', 'Friday'], opens: '09:00', closes: '19:00' },
  { days: ['Tuesday', 'Thursday'], opens: '14:00', closes: '19:00' }
] as const;

export const massage = {
  sessions: [
    { duration: '60 min', price: '$90' },
    { duration: '90 min', price: '$120' },
    { duration: '120 min', price: '$160' }
  ],
  modalities: [
    'Swedish and relaxation',
    'Deep tissue and therapeutic',
    'Sports and recovery',
    'Gentle massage for seniors',
    'Infant-massage instruction for parents',
    'Lymphatic drainage'
  ],
  audiences: [
    'Seniors',
    'Athletes',
    'Children and parents',
    'Chronic pain',
    'Post-injury recovery',
    'Relaxation'
  ]
} as const;

export const packages = {
  note: '6 sessions, prepaid',
  items: [
    { duration: '45 min', price: '$350', savings: 'Save $40' },
    { duration: '60 min', price: '$435', savings: 'Save $45' },
    { duration: '75 min', price: '$550', savings: 'Save $50' },
    { duration: '90 min', price: '$660', savings: 'Save $60' },
    { duration: '120 min', price: '$850', savings: 'Save $80' }
  ]
} as const;

export const membership = {
  price: '$80',
  period: 'month',
  description: 'One 60-minute massage each month; extra sessions at the member rate.'
} as const;

export const bemer = {
  name: 'Bemer circulation session',
  price: '$250',
  duration: '30 min',
  description:
    'A pulsed electromagnetic (PEMF) session that temporarily improves local blood circulation and supports muscle recovery.',
  disclaimer: 'BEMER is not intended to diagnose, treat, cure or prevent any disease. Individual results vary.'
} as const;

export const goodToKnow = [
  'By appointment, in a quiet home studio in Hudson.',
  'Receipts provided for insurance reimbursement or HSA/FSA.',
  'New clients receive a short intake form from MassageBook after booking.',
  'Pay in person (cash, Venmo, card) or online when booking.'
] as const;
