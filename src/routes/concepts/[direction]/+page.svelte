<script lang="ts">
  import Home from '#lib/design/Home.svelte';
  import type { PageData } from './$types';
  let { data }: { data: PageData } = $props();
</script>
<svelte:head>
  <title>{data.direction.name} — Livingood Wellness Center</title>
  <meta name="robots" content="noindex" />
</svelte:head>
<Home variant={data.direction.id} />
