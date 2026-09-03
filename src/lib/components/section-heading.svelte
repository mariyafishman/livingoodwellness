<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    id?: string;
    eyebrow?: string;
    title: string;
    lede?: string;
    align?: 'start' | 'center';
    as?: 'h1' | 'h2';
    class?: string;
    children?: Snippet;
  }

  let { id, eyebrow, title, lede, align = 'start', as = 'h2', class: className, children }: Props = $props();
</script>

<div class={['flex max-w-2xl flex-col gap-3', align === 'center' && 'mx-auto items-center text-center', className]}>
  {#if eyebrow}
    <span class="eyebrow">{eyebrow}</span>
  {/if}
  <svelte:element this={as} {id} class={as === 'h1' ? 'text-display-lg' : 'text-display-md'}>{title}</svelte:element>
  {#if lede}
    <p class="text-lg text-muted-foreground">{lede}</p>
  {/if}
  {@render children?.()}
</div>
