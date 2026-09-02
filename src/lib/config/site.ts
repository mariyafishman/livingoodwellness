/**
 * Business facts for Livingood Wellness Center. Everything client-facing
 * (booking, payment, intake) happens on MassageBook; the site only links out.
 */
export const site = {
  name: 'Livingood Wellness Center',
  shortName: 'Livingood',
  tagline: 'Find your balance.',
  description:
    'Massage therapy in Hudson, MA. Mariya Fishman brings 31 years of experience to seniors, athletes, parents and everyone between, in a quiet home studio. By appointment.',
  url: 'https://livingoodwellness.com',

  /** Every "Book" action points here. Replace with the MassageBook booking page once it exists. */
  bookingUrl: '/contact',

  owner: 'Mariya Fishman',
  ownerTitle: 'Licensed Massage Therapist',
  yearsInPractice: 31,
  /** Placeholder until Mariya's renewed license number arrives. */
  licenseNumber: '____',

  phone: '978-493-6171',
  phoneHref: 'tel:+19784936171',
  smsHref: 'sms:+19784936171',
  email: 'mariyafishmanavatar@gmail.com',

  address: {
    street: '157 Marlboro Street',
    city: 'Hudson',
    state: 'MA',
    zip: '01749'
  },
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=157+Marlboro+Street+Hudson+MA+01749',
  appleMapsUrl: 'https://maps.apple.com/?q=157+Marlboro+Street+Hudson+MA+01749',

  hours: [
    { day: 'Monday', short: 'Mon', open: '9:00 AM', close: '7:00 PM' },
    { day: 'Tuesday', short: 'Tue', open: '2:00 PM', close: '7:00 PM' },
    { day: 'Wednesday', short: 'Wed', open: '9:00 AM', close: '7:00 PM' },
    { day: 'Thursday', short: 'Thu', open: '2:00 PM', close: '7:00 PM' },
    { day: 'Friday', short: 'Fri', open: '9:00 AM', close: '7:00 PM' },
    { day: 'Saturday', short: 'Sat', open: null, close: null, note: 'By request' },
    { day: 'Sunday', short: 'Sun', open: null, close: null, note: 'Closed' }
  ] as const,
  /** One-line summary for the hero and footer. */
  hoursSummary: 'Mon, Wed, Fri 9–7 · Tue, Thu 2–7 · Sat by request',

  serviceArea: ['Hudson', 'Marlborough', 'Stow', 'Bolton', 'Sudbury', 'Berlin', 'Maynard', 'Northborough'],

  paymentMethods: ['Cash', 'Venmo', 'Card']
} as const;

export function isExternal(href: string) {
  return /^https?:\/\//.test(href);
}
