<script lang="ts">
  import type { Snippet } from 'svelte';

  /**
   * Opening of an inner page: the title and lead set straight on the paper,
   * the way the home hero starts, with room for buttons underneath.
   */
  interface Props {
    title: string;
    lead?: string;
    children?: Snippet;
  }

  let { title, lead, children }: Props = $props();
</script>

<div class="wrap flex flex-col items-start gap-6 pt-6 md:gap-8 md:pt-10">
  <h1 class="display-1 max-w-[12ch]">{title}</h1>
  {#if lead}
    <p class="lead max-w-[30rem]">{lead}</p>
  {/if}
  {@render children?.()}
</div>
