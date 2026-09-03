export const copy = {
	oneLiner:
		'Massage therapy in Hudson, MA. Over 30 years of experience with seniors, athletes, children and everyone in between.',
	meetLead:
		'I have been a massage therapist for more than thirty years. Before that I was a mechanical engineer, and before that I was a girl in Belarus who wanted to be a doctor.',
	meetShort:
		'Mariya Fishman has practiced massage therapy for over 30 years. She works with seniors, athletes, children and everyone in between from her home studio in Hudson, MA, and offers Bemer circulation sessions to support recovery.',
	livingood:
		'The name is a reminder to live well, in balance: a healthy body, good food, and a clear mind. That balance is what I try to bring to every session.',
	studio:
		'Sessions are by appointment in my quiet home studio in Hudson, Massachusetts.',
	bemer:
		'A pulsed electromagnetic (PEMF) session that temporarily improves local blood circulation and supports muscle recovery.',
	disclaimer:
		'BEMER is not intended to diagnose, treat, cure or prevent any disease. Individual results vary.',
	payNote:
		'Receipts for insurance, HSA and FSA. Pay in person or online when booking.',
	goodToKnow: [
		'By appointment, in a quiet home studio in Hudson.',
		'Receipts provided for insurance reimbursement or HSA/FSA.',
		'New clients receive a short intake form from MassageBook after booking.',
		'Pay in person (cash, Venmo, card) or online when booking.'
	]
} as const;

export const who = [
	{
		title: 'Seniors',
		body: 'Keep moving comfortably, with unhurried, gentle work.',
		tone: 'butter' as const
	},
	{
		title: 'Athletes',
		body: 'Recover faster and play longer — sports and therapeutic.',
		tone: 'lilac' as const
	},
	{
		title: 'Families',
		body: 'Children, parents, and infant-massage instruction.',
		tone: 'mint' as const
	}
] as const;

export const modalities = [
	'Swedish and relaxation',
	'Deep tissue and therapeutic',
	'Sports and recovery',
	'Gentle massage for seniors',
	'Infant-massage instruction',
	'Lymphatic drainage'
] as const;

export const rates = [
	{ mins: '60 min', price: '$90' },
	{ mins: '90 min', price: '$120' },
	{ mins: '120 min', price: '$160' }
] as const;

export const packages = [
	{ mins: '45 min', price: '$350', save: '$40' },
	{ mins: '60 min', price: '$435', save: '$45' },
	{ mins: '75 min', price: '$550', save: '$50' },
	{ mins: '90 min', price: '$660', save: '$60' },
	{ mins: '120 min', price: '$850', save: '$80' }
] as const;

export const membership = {
	price: '$80 / month',
	detail: 'One 60-minute massage each month; extra sessions at the member rate.'
} as const;

export const about = {
	meet: [
		'I have been a massage therapist for more than thirty years. Before that I was a mechanical engineer, and before that I was a girl in Belarus who wanted to be a doctor. When I came to America I trained at the Muscular Therapy Institute in Cambridge and found the work I was meant to do: helping people feel at home in their bodies.',
		'Seven years ago I fell and broke my leg, my wrist and my back. For a long time I could not work. What brought me back was the same thing I now offer my clients: patient hands-on care, good circulation, and the belief that the body knows how to heal when you give it what it needs. My husband asked if maybe it was time to retire. I said no. I love my work.'
	],
	who: 'Everyone from newborns to great-grandparents. My favorite clients are seniors who want to keep moving comfortably, athletes who want to recover faster and play longer, and parents who want to learn how to massage their babies. Every year I volunteer on the massage team at the Pan-Mass Challenge, working with cancer survivors.'
} as const;

export const bookHow = [
	'Pick a service and time on MassageBook.',
	'Pay online or in person.',
	'New clients get a short intake form by email before the visit.'
] as const;
