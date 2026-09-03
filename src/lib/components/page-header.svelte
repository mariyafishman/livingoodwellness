<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    eyebrow?: string;
    title: string;
    lede?: string;
    children?: Snippet;
  }

  let { eyebrow, title, lede, children }: Props = $props();
</script>

<section class="relative overflow-hidden border-b-2 border-ink">
  <div class="pointer-events-none absolute -top-24 -right-24 size-56 rounded-full bg-secondary sm:size-80" aria-hidden="true"></div>
  <div class="pointer-events-none absolute -right-8 top-40 hidden size-32 rounded-full bg-accent sm:block" aria-hidden="true"></div>
  <div class="container-site relative flex flex-col gap-5 py-14 sm:py-20">
    {#if eyebrow}
      <p class="eyebrow flex items-center gap-2 text-muted-foreground">
        <span class="inline-block size-2.5 rounded-full bg-accent ring-2 ring-ink" aria-hidden="true"></span>
        {eyebrow}
      </p>
    {/if}
    <h1 class="max-w-3xl text-5xl sm:text-6xl lg:text-7xl">{title}</h1>
    {#if lede}
      <p class="max-w-2xl text-lg text-muted-foreground sm:text-xl">{lede}</p>
    {/if}
    {@render children?.()}
  </div>
</section>
