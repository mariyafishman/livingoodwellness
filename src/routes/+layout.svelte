<script lang="ts">
  import './layout.css';
  import favicon from '#lib/assets/favicon.svg';
  import portrait from '#lib/assets/mariya.jpg';
  import { ModeWatcher } from 'mode-watcher';
  import Header from '#lib/components/header.svelte';
  import Footer from '#lib/components/footer.svelte';
  import { site } from '#lib/config/site.ts';
  import { massage, bemer } from '#lib/config/services.ts';

  let { children } = $props();

  // LocalBusiness structured data, once for the whole site.
  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'HealthAndBeautyBusiness',
    name: site.name,
    slogan: site.tagline,
    description: site.description,
    url: site.url,
    image: new URL(portrait, site.url).href,
    telephone: site.phone.tel,
    email: site.email,
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
    openingHoursSpecification: site.openingHours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.dayOfWeek,
      opens: h.opens,
      closes: h.closes
    })),
    priceRange: `$${massage.prices[0].price}–$${bemer.price}`,
    currenciesAccepted: 'USD',
    paymentAccepted: 'Cash, Venmo, Credit Card',
    hasMap: site.mapsUrl
  });
</script>

<svelte:head>
  <link rel="icon" href={favicon} type="image/svg+xml" />
  <meta name="theme-color" content="#f4f0e6" media="(prefers-color-scheme: light)" />
  <meta name="theme-color" content="#131d17" media="(prefers-color-scheme: dark)" />
  {@html `<script type="application/ld+json">${jsonLd}</${'script'}>`}
</svelte:head>

<ModeWatcher defaultMode="light" />

<div class="flex min-h-svh flex-col">
  <a
    class="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
    href="#main"
  >
    Skip to content
  </a>
  <Header />

  <main id="main" class="flex-1">
    {@render children()}
  </main>

  <Footer />
</div>
