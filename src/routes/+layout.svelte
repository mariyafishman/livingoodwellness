<script lang="ts">
  import './layout.css';
  import favicon from '#lib/assets/favicon.svg';
  import { ModeWatcher } from 'mode-watcher';
  import Header from '#lib/components/header.svelte';
  import Footer from '#lib/components/footer.svelte';
  import { site } from '#lib/config/site.ts';

  let { children } = $props();

  // LocalBusiness structured data. Hours map from site.hours; Saturday is by appointment so it is omitted.
  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': ['HealthAndBeautyBusiness', 'LocalBusiness'],
    name: site.name,
    slogan: site.tagline,
    description: site.description,
    url: site.url,
    telephone: '+1-978-493-6171',
    email: site.email,
    image: `${site.url}/og.png`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: 'US'
    },
    areaServed: 'Hudson, MA',
    founder: { '@type': 'Person', name: site.practitioner.name, jobTitle: site.practitioner.title },
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Wednesday', 'Friday'], opens: '09:00', closes: '19:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Tuesday', 'Thursday'], opens: '14:00', closes: '19:00' }
    ],
    priceRange: '$$'
  });
  const jsonLdTag = `<script type="application/ld+json">${jsonLd}<\/script>`;
</script>

<svelte:head>
  <link rel="icon" href={favicon} type="image/svg+xml" />
  <meta name="theme-color" content="#2f5a3e" />
  {@html jsonLdTag}
</svelte:head>

<ModeWatcher defaultMode="system" />

<a
  href="#main"
  class="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
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
