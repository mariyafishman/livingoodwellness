export const site = {
  name: 'Livingood Wellness Center',
  tagline: 'Find your balance.',
  description:
    'Massage therapy in Hudson, MA. Mariya Fishman, Licensed Massage Therapist, brings over 30 years of experience with seniors, athletes, children and everyone in between. By appointment in a quiet home studio.',
  url: 'https://livingoodwellness.com',
  practitioner: {
    name: 'Mariya Fishman',
    title: 'Licensed Massage Therapist',
    license: 'MA License #____'
  },
  phone: '978-493-6171',
  phoneHref: 'tel:+19784936171',
  smsHref: 'sms:+19784936171',
  email: 'mariyafishmanavatar@gmail.com',
  address: {
    street: '157 Marlboro Street',
    city: 'Hudson',
    state: 'MA',
    zip: '01749',
    note: 'Private home with a dedicated studio'
  },
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=157+Marlboro+Street+Hudson+MA+01749',
  /** Placeholder until the MassageBook account exists. */
  bookingUrl: 'https://www.massagebook.com/',
  hours: [
    { days: 'Mon, Wed, Fri', time: '9:00 AM – 7:00 PM' },
    { days: 'Tue, Thu', time: '2:00 PM – 7:00 PM' },
    { days: 'Sat', time: 'By appointment' },
    { days: 'Sun', time: 'Closed' }
  ],
  /** Structured hours for schema.org OpeningHoursSpecification. */
  openingHours: [
    { days: ['Monday', 'Wednesday', 'Friday'], opens: '09:00', closes: '19:00' },
    { days: ['Tuesday', 'Thursday'], opens: '14:00', closes: '19:00' }
  ]
} as const;

export const nav = [
  { title: 'Services', href: '/services' },
  { title: 'About', href: '/about' },
  { title: 'Contact', href: '/contact' }
] as const;
