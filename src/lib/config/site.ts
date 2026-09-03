export const site = {
  name: 'Livingood Wellness Center',
  tagline: 'Find your balance.',
  description:
    'Massage therapy in Hudson, MA. Mariya Fishman, Licensed Massage Therapist, brings over 30 years of experience to seniors, athletes, children and everyone in between. By appointment in a quiet home studio.',
  // Public URL of the site. Update when the domain is confirmed.
  url: 'https://livingoodwellness.com',

  practitioner: {
    name: 'Mariya Fishman',
    title: 'Licensed Massage Therapist',
    // Placeholder until the license number is supplied.
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
  mapsHref: 'https://maps.google.com/?q=157+Marlboro+Street,+Hudson,+MA+01749',

  hours: [
    { days: 'Mon, Wed, Fri', time: '9:00 AM – 7:00 PM' },
    { days: 'Tue, Thu', time: '2:00 PM – 7:00 PM' },
    { days: 'Sat', time: 'By appointment' },
    { days: 'Sun', time: 'Closed' }
  ],

  // Placeholder until the MassageBook account exists.
  bookingUrl: 'https://www.massagebook.com/'
};

export type Site = typeof site;
