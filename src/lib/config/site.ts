export const site = {
  name: 'Livingood Wellness Center',
  tagline: 'Find your balance.',
  description: 'Massage therapy in Hudson, MA. Over 30 years of experience with seniors, athletes, children and everyone in between.',
  practitioner: 'Mariya Fishman',
  phone: '978-493-6171',
  phoneHref: 'tel:+19784936171',
  textHref: 'sms:+19784936171',
  email: 'mariyafishmanavatar@gmail.com',
  street: '157 Marlboro Street',
  locality: 'Hudson, MA 01749',
  directionsUrl: 'https://www.google.com/maps/search/?api=1&query=157+Marlboro+Street+Hudson+MA+01749',
  // Add the real MassageBook account URL when it is available, then rebuild.
  bookingUrl: '',
};
export const hours = [
  ['Mon, Wed, Fri', '9:00 AM – 7:00 PM'],
  ['Tue, Thu', '2:00 PM – 7:00 PM'],
  ['Saturday', 'By appointment'],
  ['Sunday', 'Closed'],
] as const;
