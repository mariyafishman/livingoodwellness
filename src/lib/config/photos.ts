/**
 * Stock placeholders until Mariya sends her own photos. Hotlinked from Unsplash
 * (free license, hotlinking permitted) so nothing is committed to the repo and
 * each one is swapped by editing a single line. None are AI-generated; all are
 * by named photographers. Every photo is shown through the duotone treatment.
 */
export interface Photo {
  src: string;
  alt: string;
  credit: string;
  creditUrl: string;
}

function unsplash(id: string, width = 1600): string {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=70`;
}

export const photos = {
  hero: {
    src: unsplash('photo-1519823551278-64ac92734fb1', 1800),
    alt: "A massage therapist's hands working across a client's upper back",
    credit: 'Toa Heftiba',
    creditUrl: 'https://unsplash.com/photos/a9pFSC8dTlo'
  },
  hands: {
    src: unsplash('photo-1611073615830-9f76902c10fe'),
    alt: 'A hand massage on a soft brown towel',
    credit: 'THLT LCX',
    creditUrl: 'https://unsplash.com/photos/ubeslMfS1lk'
  },
  seniors: {
    src: unsplash('photo-1702648159899-0eb73a9f3452', 1200),
    alt: 'An older woman pushing a wheelbarrow through her garden',
    credit: 'Centre for Ageing Better',
    creditUrl: 'https://unsplash.com/photos/3ot-fdd1bxE'
  },
  athletes: {
    src: unsplash('photo-1668422550557-f096364b72b4', 1200),
    alt: "A therapist stretching a client's leg on the table",
    credit: 'Diana Light',
    creditUrl: 'https://unsplash.com/photos/L98od1dnObo'
  },
  parents: {
    src: unsplash('photo-1510154221590-ff63e90a136f', 1200),
    alt: "A parent's hands holding a baby's feet",
    credit: 'Omar Lopez',
    creditUrl: 'https://unsplash.com/photos/vTknj2OxDVg'
  },
  walk: {
    src: unsplash('photo-1625690987114-86f5af994b49'),
    alt: 'An older couple walking arm in arm down a quiet road',
    credit: 'Hector Reyes',
    creditUrl: 'https://unsplash.com/photos/GrSfB6-OPoY'
  }
} satisfies Record<string, Photo>;
