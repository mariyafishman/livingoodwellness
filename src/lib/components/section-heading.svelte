<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    eyebrow?: string;
    title: string;
    lede?: string;
    align?: 'start' | 'center';
    class?: string;
    children?: Snippet;
  }

  let { eyebrow, title, lede, align = 'start', class: className, children }: Props = $props();
</script>

<div class={['flex max-w-2xl flex-col gap-3', align === 'center' && 'mx-auto items-center text-center', className]}>
  {#if eyebrow}
    <p class="eyebrow flex items-center gap-2 text-muted-foreground">
      <span class="inline-block size-2.5 rounded-full bg-accent ring-2 ring-ink" aria-hidden="true"></span>
      {eyebrow}
    </p>
  {/if}
  <h2 class="text-3xl sm:text-4xl lg:text-5xl">{title}</h2>
  {#if lede}
    <p class="text-lg text-muted-foreground">{lede}</p>
  {/if}
  {@render children?.()}
</div>
