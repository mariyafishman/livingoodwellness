/**
 * Stock placeholder (Unsplash) until Mariya's own studio and working photos arrive.
 * Subjects must match her audience and practice: hands-on therapeutic work in a plain
 * room. No resort-spa scenes (stones, orchids, robes) and no AI-generated people.
 */
const unsplash = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const stock = {
  /** Home hero: a therapist's hands working on a client's back, soft daylight. */
  hero: {
    src: unsplash('photo-1519823551278-64ac92734fb1'),
    alt: 'A massage therapist’s hands working on a client’s back in a calm, softly lit room'
  }
} as const;
