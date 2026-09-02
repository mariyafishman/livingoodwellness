<script lang="ts">
  import { page } from '$app/state';
  import { site } from '#lib/config/site.ts';

  interface Props {
    title?: string;
    description?: string;
  }

  let { title, description = site.description }: Props = $props();

  const fullTitle = $derived(title ? `${title} - ${site.name}` : `${site.name} - ${site.tagline}`);
  const canonical = $derived(`${site.url}${page.url.pathname === '/' ? '' : page.url.pathname}`);

  function to24h(t: string) {
    const [time, meridiem] = t.split(' ');
    let [hour, minute] = time.split(':').map(Number);
    if (meridiem === 'PM' && hour < 12) hour += 12;
    if (meridiem === 'AM' && hour === 12) hour = 0;
    return `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
  }

  const openingHours = site.hours
    .filter((h) => h.open && h.close)
    .map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.day,
      opens: to24h(h.open!),
      closes: to24h(h.close!)
    }));

  // Built entirely from our own config (no user input), then escaped so it can never break out of the tag.
  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'HealthAndBeautyBusiness',
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: `+1-${site.phone}`,
    email: site.email,
    priceRange: '$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: 'US'
    },
    areaServed: site.serviceArea.map((town) => ({ '@type': 'City', name: town })),
    founder: { '@type': 'Person', name: site.owner, jobTitle: site.ownerTitle },
    openingHoursSpecification: openingHours
  }).replace(/</g, '\\u003c');

  // Assembled here so the markup never contains a literal script tag.
  const jsonLdTag = `<script type="application/ld+json">${jsonLd}<\/script>`;
</script>

<svelte:head>
  <title>{fullTitle}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={canonical} />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content={site.name} />
  <meta property="og:title" content={fullTitle} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={canonical} />
  <meta name="twitter:card" content="summary" />
  {@html jsonLdTag}
</svelte:head>
