import { error } from '@sveltejs/kit';
import { directions } from '#lib/design/content.js';
import type { PageLoad, EntryGenerator } from './$types';
export const entries: EntryGenerator = () => directions.map(({ id }) => ({ direction: id }));
export const load: PageLoad = ({ params }) => {
  const direction = directions.find(({ id }) => id === params.direction);
  if (!direction) error(404, 'Design direction not found');
  return { direction };
};

