export const directions = [
  { id: 'fieldnotes', number: '01', name: 'Fieldnotes', mood: 'Grounded. Tactile. Personal.',
    note: 'An independent journal of living well. Warm paper, confident olive, fine rules, and a hand-drawn butterfly. Close-up photography makes the work feel human.',
    palette: 'Olive · warm paper · clay', type: 'Fraunces + DM Sans', rhythm: '8px base · 96px sections · square edges' },
  { id: 'company', number: '02', name: 'Good Company', mood: 'Warm. Upbeat. Down to earth.',
    note: 'Mariya, front and center. Bold green type, generous rounded shapes, and a butterfly with a little personality. An open, friendly invitation to feel at home.',
    palette: 'Bottle green · butter · lilac', type: 'Manrope + Lora italic', rhythm: '8px base · 80px sections · 32px corners' },
  { id: 'stillwater', number: '03', name: 'Stillwater', mood: 'Quiet. Spacious. Assured.',
    note: 'A slower pace, right from the first screen. Light through leaves, expressive serif type, and fine-line details. Deep pine and mist make space for Mariya’s experience.',
    palette: 'Deep pine · mist · celadon', type: 'Cormorant Garamond + Jost', rhythm: '12px base · 120px sections · fine rules' }
] as const;
export type Direction = (typeof directions)[number]['id'];
export const modalities = [
  { name: 'Swedish & relaxation', detail: 'Time to slow down.' },
  { name: 'Deep tissue & therapeutic', detail: 'Focused, hands-on care.' },
  { name: 'Sports & recovery', detail: 'For your active life.' },
  { name: 'Gentle massage for seniors', detail: 'Care at your pace.' },
  { name: 'Infant-massage instruction', detail: 'For parents and little ones.' },
  { name: 'Lymphatic drainage', detail: 'A gentle, trained approach.' }
];
export const sessions = [ { minutes: 60, price: 90 }, { minutes: 90, price: 120 }, { minutes: 120, price: 160 } ];
export const packages = [
  { minutes: 45, price: 350, savings: 40 }, { minutes: 60, price: 435, savings: 45 },
  { minutes: 75, price: 550, savings: 50 }, { minutes: 90, price: 660, savings: 60 },
  { minutes: 120, price: 850, savings: 80 }
];
export const hours = [ ['Mon, Wed, Fri', '9:00 AM – 7:00 PM'], ['Tue, Thu', '2:00 PM – 7:00 PM'], ['Saturday', 'By appointment'], ['Sunday', 'Closed'] ];
export const visits = [
  { title: 'Choose your time.', text: 'Pick a service and an appointment on MassageBook. Prefer to talk? Call or text Mariya.' },
  { title: 'A little about you.', text: 'New clients receive a short intake form by email before the visit.' },
  { title: 'Come as you are.', text: 'Visit the quiet home studio in Hudson. Pay online or in person with cash, Venmo, or card.' }
];
export const references = [
  { name: 'Kalstore', focus: 'Personal biography, balanced image and type', url: 'https://mobbin.com/sites/sections/5e1e6047-eef1-417c-b42b-c7ab44205e35' },
  { name: 'Function', focus: 'Warm editorial typography and transparent pricing', url: 'https://mobbin.com/sites/sections/f5d5c740-7af0-4718-9893-3b8e80e39eed' },
  { name: 'Headspace Health', focus: 'Expressive geometry and a human face', url: 'https://mobbin.com/sites/sections/436b4325-7a04-40f6-93b9-bd45c883c276' },
  { name: 'Open', focus: 'Immersive nature photography and restrained navigation', url: 'https://mobbin.com/screens/084d5db1-92f7-45dd-8fde-76e63893d492' },
  { name: 'Fresha', focus: 'Scannable service details and a visible booking action', url: 'https://mobbin.com/screens/eddf7b74-cc51-4701-8d9e-282f68eb6697' },
  { name: 'Little Amps Coffee', focus: 'Neighborly contact copy and a real sense of place', url: 'https://mobbin.com/sites/sections/7779ce52-eea3-4981-8d82-b097f9ede54b' },
  { name: 'KÖPPEN', focus: 'Asymmetric image crops and small editorial labels', url: 'https://mobbin.com/sites/sections/540eb76e-09ed-4538-9caf-3201ee806bdb' }
];
