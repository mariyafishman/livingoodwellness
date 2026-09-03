<script lang="ts">
  import { page } from '$app/state';
  import { site } from '#lib/config/site.ts';

  interface Props {
    title?: string;
    description?: string;
  }

  let { title, description = site.description }: Props = $props();

  const fullTitle = $derived(title ? `${title} · ${site.name}` : `${site.name} · ${site.tagline}`);
  const canonical = $derived(`${site.url}${page.url.pathname === '/' ? '' : page.url.pathname}`);
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
  <meta property="og:locale" content="en_US" />
  <meta property="og:image" content="{site.url}/og.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="{site.name}. {site.tagline} Massage therapy in Hudson, MA." />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image" content="{site.url}/og.png" />
  <meta name="twitter:title" content={fullTitle} />
  <meta name="twitter:description" content={description} />
</svelte:head>
