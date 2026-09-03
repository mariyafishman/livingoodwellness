export const site = {
	name: 'Livingood Wellness Center',
	shortName: 'Livingood',
	tagline: 'Find your balance.',
	description:
		'Massage therapy in Hudson, MA. Over 30 years of experience with seniors, athletes, children and everyone in between.',
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
	mapsHref: 'https://maps.google.com/?q=157+Marlboro+Street,+Hudson,+MA+01749',

	hours: [
		{ days: 'Mon, Wed, Fri', time: '9:00 AM – 7:00 PM' },
		{ days: 'Tue, Thu', time: '2:00 PM – 7:00 PM' },
		{ days: 'Sat', time: 'By appointment' },
		{ days: 'Sun', time: 'Closed' }
	],

	/** Placeholder until the MassageBook account exists. */
	bookingUrl: 'https://www.massagebook.com/'
} as const;

export type Site = typeof site;

export const navLinks = [
	{ title: 'Services', href: '/services' },
	{ title: 'About', href: '/about' },
	{ title: 'Contact', href: '/contact' }
] as const;
