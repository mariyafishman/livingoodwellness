<script lang="ts">
  import { site, openingHours } from '#lib/config/site.ts';

  /** schema.org LocalBusiness for the studio. Rendered once from the layout. */
  const data = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${site.url}/#business`,
    name: site.name,
    slogan: site.tagline,
    description: site.description,
    url: site.url,
    telephone: site.phone.e164,
    email: site.email,
    image: `${site.url}/og.png`,
    priceRange: '$90 - $250',
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: 'US'
    },
    areaServed: `${site.address.city}, ${site.address.state}`,
    openingHoursSpecification: openingHours.map(({ days, opens, closes }) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: days,
      opens,
      closes
    })),
    founder: {
      '@type': 'Person',
      name: site.practitioner.name,
      jobTitle: site.practitioner.title
    },
    potentialAction: {
      '@type': 'ReserveAction',
      target: site.bookingUrl
    }
  };

  // `<` is escaped so the JSON can never close the script tag early.
  const json = JSON.stringify(data).replaceAll('<', '\\u003c');
</script>

<svelte:head>
  {@html `<script type="application/ld+json">${json}</script>`}
</svelte:head>
