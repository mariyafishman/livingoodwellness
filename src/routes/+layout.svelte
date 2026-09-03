<script lang="ts">
  import './layout.css';
  import favicon from '#lib/assets/favicon.svg';
  import { ModeWatcher } from 'mode-watcher';
  import Header from '#lib/components/header.svelte';
  import Footer from '#lib/components/footer.svelte';
  import { site } from '#lib/config/site.ts';

  let { children } = $props();

  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HealthAndBeautyBusiness'],
    '@id': `${site.url}/#business`,
    name: site.name,
    slogan: site.tagline,
    description: site.description,
    url: site.url,
    telephone: site.phone.tel,
    email: site.email,
    image: `${site.url}/favicon.svg`,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: 'US'
    },
    founder: {
      '@type': 'Person',
      name: site.practitioner.name,
      jobTitle: site.practitioner.title
    },
    openingHoursSpecification: site.openingHours.map((spec) => ({
      '@type': 'OpeningHoursSpecification',
      ...spec
    })),
    potentialAction: {
      '@type': 'ReserveAction',
      target: `${site.url}/book`
    }
  };

  const jsonLd = `<script type="application/ld+json">${JSON.stringify(localBusiness)}<\/script>`;
</script>

<svelte:head>
  <link rel="icon" href={favicon} type="image/svg+xml" />
  <meta name="theme-color" content="#faf6ec" media="(prefers-color-scheme: light)" />
  <meta name="theme-color" content="#1a221d" media="(prefers-color-scheme: dark)" />
  {@html jsonLd}
</svelte:head>

<ModeWatcher defaultMode="light" />

<a
  href="#main"
  class="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
>
  Skip to content
</a>

<div class="flex min-h-svh flex-col">
  <Header />

  <main id="main" class="flex-1">
    {@render children()}
  </main>

  <Footer />
</div>
