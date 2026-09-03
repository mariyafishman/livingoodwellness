<script lang="ts">
 import { site } from '#lib/config/site.js';
 let { title, description = site.description }: { title?: string; description?: string } = $props();
 const fullTitle = $derived(title ? title + ' — ' + site.name : site.name + ' — ' + site.tagline);
</script>
<svelte:head>
 <title>{fullTitle}</title>
 <meta name="description" content={description} />
 <meta property="og:title" content={fullTitle} />
 <meta property="og:description" content={description} />
 <meta property="og:type" content="website" />
 <meta property="og:site_name" content={site.name} />
 <meta property="og:locale" content="en_US" />
 <meta name="twitter:card" content="summary" />
 <meta name="twitter:title" content={fullTitle} />
 <meta name="twitter:description" content={description} />
</svelte:head>
