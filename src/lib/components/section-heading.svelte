<script lang="ts">
  import type { Snippet } from 'svelte';
  import { cn } from '#lib/utils.ts';

  interface Props {
    /** id for the heading element, so sections can use aria-labelledby. */
    id?: string;
    eyebrow?: string;
    title: string;
    /** Rendered as the level of the heading element. */
    level?: 1 | 2 | 3;
    /** Lede paragraph under the title. */
    children?: Snippet;
    /** Placed to the right of the heading on wide screens (a link or button). */
    aside?: Snippet;
    align?: 'start' | 'center';
    tone?: 'paper' | 'ink';
    class?: string;
  }

  let {
    id,
    eyebrow,
    title,
    level = 2,
    children,
    aside,
    align = 'start',
    tone = 'paper',
    class: className
  }: Props = $props();
</script>

<div
  class={cn(
    'flex flex-col gap-6 md:flex-row md:items-end md:justify-between',
    align === 'center' && 'items-center text-center md:flex-col md:items-center',
    className
  )}
>
  <div class={cn('flex max-w-2xl flex-col gap-4', align === 'center' && 'items-center')}>
    {#if eyebrow}
      <p class={cn('eyebrow', tone === 'ink' && 'text-highlight')}>{eyebrow}</p>
    {/if}
    <svelte:element
      this={`h${level}`}
      {id}
      class={cn(
        'font-display font-medium text-balance',
        level === 1 ? 'text-5xl sm:text-6xl lg:text-7xl' : 'text-3xl sm:text-4xl lg:text-5xl',
        tone === 'ink' ? 'text-ink-foreground' : 'text-foreground'
      )}
    >
      {title}
    </svelte:element>
    {#if children}
      <div
        class={cn(
          'max-w-prose text-base leading-relaxed sm:text-lg',
          tone === 'ink' ? 'text-ink-muted' : 'text-muted-foreground'
        )}
      >
        {@render children()}
      </div>
    {/if}
  </div>
  {#if aside}
    <div class="shrink-0">
      {@render aside()}
    </div>
  {/if}
</div>
