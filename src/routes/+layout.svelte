<script lang="ts">
  import './layout.css';
  import favicon from '#lib/assets/favicon.svg';
  import { ModeWatcher } from 'mode-watcher';
  import { Toaster } from '#lib/components/ui/sonner/index.ts';
  import Header from '#lib/components/header.svelte';
  import Footer from '#lib/components/footer.svelte';
  import { site } from '#lib/config/site.ts';

  let { children } = $props();

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HealthAndBeautyBusiness'],
    '@id': `${site.url}/#business`,
    name: site.name,
    slogan: site.tagline,
    description: site.description,
    url: site.url,
    telephone: '+1-978-493-6171',
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
    openingHoursSpecification: site.openingHours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes
    })),
    potentialAction: {
      '@type': 'ReserveAction',
      target: `${site.url}/book`
    }
  });
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <meta name="theme-color" content="#f8f4e9" media="(prefers-color-scheme: light)" />
  <meta name="theme-color" content="#14302a" media="(prefers-color-scheme: dark)" />
  {@html `<script type="application/ld+json">${jsonLd}</script>`}
</svelte:head>

<ModeWatcher defaultMode="light" />

<Toaster richColors />

<a
  href="#main"
  class="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-lg focus:border-2 focus:border-ink focus:bg-accent focus:px-4 focus:py-2 focus:font-semibold focus:text-accent-foreground"
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
