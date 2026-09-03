<script lang="ts">
  import './layout.css';
  import type { Snippet } from 'svelte';
  import favicon from '#lib/assets/favicon.svg';
  import { ModeWatcher } from 'mode-watcher';
  import Header from '#lib/components/header.svelte';
  import Footer from '#lib/components/footer.svelte';
  let { children }: { children: Snippet } = $props();
</script>
<svelte:head>
  <link rel="icon" href={favicon} type="image/svg+xml" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@1,400;1,500&family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
</svelte:head>
<ModeWatcher defaultMode="light" />
<div id="top" class="site-shell">
  <a class="skip-link" href="#main">Skip to content</a>
  <Header />
  <main id="main" tabindex="-1">{@render children()}</main>
  <Footer />
</div>
