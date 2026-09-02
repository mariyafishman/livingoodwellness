<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    eyebrow?: string;
    title: string;
    lead?: string;
    children?: Snippet;
  }

  let { eyebrow, title, lead, children }: Props = $props();
</script>

<header class="container-page pt-12 pb-8 sm:pt-20 sm:pb-12">
  <div class="flex max-w-3xl flex-col gap-4">
    {#if eyebrow}
      <p class="text-sm font-semibold tracking-[0.14em] text-clay uppercase">{eyebrow}</p>
    {/if}
    <h1 class="text-4xl sm:text-5xl lg:text-6xl">{title}</h1>
    {#if lead}
      <p class="text-lg text-muted-foreground sm:text-xl">{lead}</p>
    {/if}
    {@render children?.()}
  </div>
</header>
