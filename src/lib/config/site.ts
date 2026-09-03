export const site = {
  name: 'Livingood Wellness Center',
  shortName: 'Livingood',
  tagline: 'Find your balance.',
  description:
    'Massage therapy in Hudson, MA. Mariya Fishman, Licensed Massage Therapist, brings over 30 years of experience to seniors, athletes, children and everyone in between. By appointment in a quiet home studio.',
  /** Canonical site URL. An assumption until the domain is confirmed. */
  url: 'https://livingoodwellness.com',

  practitioner: {
    name: 'Mariya Fishman',
    title: 'Licensed Massage Therapist',
    /** Placeholder until the license number is supplied. */
    license: 'MA License #____'
  },

  phone: {
    display: '978-493-6171',
    tel: '+19784936171'
  },
  email: 'mariyafishmanavatar@gmail.com',

  address: {
    street: '157 Marlboro Street',
    city: 'Hudson',
    state: 'MA',
    zip: '01749',
    note: 'A private home with a dedicated studio'
  },
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=157+Marlboro+Street%2C+Hudson%2C+MA+01749',

  /** Placeholder until the MassageBook account exists. */
  bookingUrl: 'https://www.massagebook.com/',

  hours: [
    { days: 'Mon, Wed, Fri', time: '9:00 AM – 7:00 PM' },
    { days: 'Tue, Thu', time: '2:00 PM – 7:00 PM' },
    { days: 'Saturday', time: 'By appointment' },
    { days: 'Sunday', time: 'Closed' }
  ],
  /** One-line version for the footer. */
  hoursSummary: ['Mon, Wed, Fri 9–7', 'Tue, Thu 2–7', 'Sat by appointment'],

  /** For LocalBusiness JSON-LD. */
  openingHours: [
    { dayOfWeek: ['Monday', 'Wednesday', 'Friday'], opens: '09:00', closes: '19:00' },
    { dayOfWeek: ['Tuesday', 'Thursday'], opens: '14:00', closes: '19:00' }
  ]
} as const;

export type Site = typeof site;
