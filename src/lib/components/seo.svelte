<script lang="ts">
  import { page } from '$app/state';
  import { site, fullAddress } from '#lib/config/site.ts';

  interface Props {
    title?: string;
    description?: string;
    /** Absolute or root-relative image URL for social previews. */
    image?: string;
  }

  let { title, description = site.description, image = '/og-image.jpg' }: Props = $props();

  const fullTitle = $derived(title ? `${title} - ${site.name}` : `${site.name} - ${site.tagline}`);
  const canonical = $derived(`${site.url}${page.url.pathname === '/' ? '/' : page.url.pathname}`);
  const imageUrl = $derived(image.startsWith('http') ? image : `${site.url}${image}`);

  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'HealthAndBeautyBusiness',
    '@id': `${site.url}/#business`,
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: `+1-${site.phone}`,
    email: site.email,
    image: `${site.url}/og-image.jpg`,
    logo: `${site.url}/favicon.svg`,
    priceRange: '$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: 'US'
    },
    openingHoursSpecification: site.openingHours.map(({ days, opens, closes }) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: days,
      opens,
      closes
    })),
    areaServed: site.serviceArea.map((name) => ({ '@type': 'City', name })),
    founder: { '@type': 'Person', name: site.owner, jobTitle: site.ownerTitle },
    sameAs: []
  };

  // Serialized once; `<` is escaped so the JSON can never close the script tag early.
  const jsonLd = JSON.stringify(localBusiness).replaceAll('<', '\\u003c');
</script>

<svelte:head>
  <title>{fullTitle}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={canonical} />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content={site.name} />
  <meta property="og:locale" content="en_US" />
  <meta property="og:url" content={canonical} />
  <meta property="og:title" content={fullTitle} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={imageUrl} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content={`${site.owner}, ${site.ownerTitle} at ${site.name}, ${fullAddress}`} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={fullTitle} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={imageUrl} />
  <meta name="geo.region" content="US-MA" />
  <meta name="geo.placename" content={site.address.city} />
  {@html `<script type="application/ld+json">${jsonLd}</script>`}
</svelte:head>
