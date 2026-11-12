<script lang="ts">
  import './layout.css';
  import favicon from '#lib/assets/favicon.svg';
  import { ModeWatcher } from 'mode-watcher';
  import Header from '#lib/components/header.svelte';
  import Footer from '#lib/components/footer.svelte';
  import JsonLd from '#lib/components/json-ld.svelte';

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} type="image/svg+xml" />
</svelte:head>

<JsonLd />

<!-- Cream paper in light, deep plum page in dark: matches the browser chrome to each. -->
<ModeWatcher defaultMode="light" themeColors={{ light: '#fbf4ec', dark: '#2a1830' }} />

<a
  href="#main"
  class="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-primary focus:px-5 focus:py-3 focus:font-semibold focus:text-primary-foreground"
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
