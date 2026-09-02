<script lang="ts">
  import type { Snippet } from 'svelte';

  /** Numbered section heading in the broadside style: "§ 02 — Kicker", big title, margin note. */
  interface Props {
    number: string;
    kicker: string;
    title: string;
    note?: string;
    children?: Snippet;
    class?: string;
  }

  let { number, kicker, title, note, children, class: className }: Props = $props();
</script>

<div class={['grid gap-4 md:grid-cols-12 md:items-end', className]}>
  <div class="md:col-span-8">
    <p class="label">
      <span class="text-foreground">§ {number}</span>
      <span aria-hidden="true"> — </span>
      {kicker}
    </p>
    <h2 class="mt-3 text-4xl sm:text-5xl md:text-6xl">{title}</h2>
  </div>
  {#if note || children}
    <div class="text-muted-foreground md:col-span-4 md:pb-1 md:text-right">
      {#if children}
        {@render children()}
      {:else}
        <p>{note}</p>
      {/if}
    </div>
  {/if}
</div>
