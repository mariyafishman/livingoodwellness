<script lang="ts">
  import { site } from '#lib/config/site.ts';

  interface Props {
    title?: string;
    description?: string;
  }

  let {
    title,
    description = `${site.description}`
  }: Props = $props();

  const fullTitle = $derived(
    title ? `${title} - ${site.name}` : `${site.name} - ${site.tagline}`
  )
</script>

<svelte:head>
  <title>{fullTitle}</title>
  <meta name="description" content="{description}" />
  <meta property="og:title" content="{fullTitle}" />
  <meta property="og:description" content="{description}" />
</svelte:head>
