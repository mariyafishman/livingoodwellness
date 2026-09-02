export const site = {
  name: 'Livingood Wellness Center',
  tagline: 'Find your balance.',
  description:
    'Massage therapy in Hudson, MA. Mariya Fishman brings over 30 years of experience to seniors, athletes, parents and children from her calm home studio. By appointment.',
  /**
   * Planned domain (see docs). Used for canonical/OG URLs and JSON-LD.
   * Update once the domain is purchased and pointed at Cloudflare.
   */
  url: 'https://livingoodwellnesscenter.com',
  /**
   * Every "Book" CTA and every price links here. Replace with the MassageBook
   * booking page URL once the account is live; until then it points at /contact.
   */
  bookingUrl: '/contact',
  owner: 'Mariya Fishman',
  ownerTitle: 'Licensed Massage Therapist',
  /** Placeholder until Mariya's renewed license number is confirmed. */
  license: 'MA License #____',
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
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=157+Marlboro+Street,+Hudson,+MA+01749',
  mapsEmbedUrl: 'https://www.google.com/maps?q=157+Marlboro+Street,+Hudson,+MA+01749&z=15&output=embed',
  /** Displayed on the site; keep in sync with `openingHours` below. */
  hours: [
    { days: 'Monday, Wednesday, Friday', time: '9:00 AM – 7:00 PM' },
    { days: 'Tuesday, Thursday', time: '2:00 PM – 7:00 PM' },
    { days: 'Saturday', time: 'By appointment' },
    { days: 'Sunday', time: 'Closed' }
  ],
  hoursSummary: 'Mon, Wed, Fri 9–7 · Tue, Thu 2–7 · Sat by appointment',
  /** Machine-readable hours for JSON-LD (schema.org OpeningHoursSpecification). */
  openingHours: [
    { days: ['Monday', 'Wednesday', 'Friday'], opens: '09:00', closes: '19:00' },
    { days: ['Tuesday', 'Thursday'], opens: '14:00', closes: '19:00' }
  ],
  serviceArea: ['Hudson', 'Marlborough', 'Stow', 'Bolton', 'Sudbury', 'Berlin', 'Maynard', 'Northborough']
} as const;

export const nav = [
  { title: 'Services', href: '/services' },
  { title: 'About', href: '/about' },
  { title: 'Contact', href: '/contact' }
] as const;

/** True once `bookingUrl` points at the external booking page. */
export const bookingIsLive = site.bookingUrl.startsWith('http');

export const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}`;
