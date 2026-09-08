<script lang="ts">
  import type { Snippet } from 'svelte';

  /**
   * Opening butter band for inner pages. Merges with the header so the page
   * starts the same way the home hero does.
   */
  interface Props {
    title: string;
    lead?: string;
    children?: Snippet;
  }

  let { title, lead, children }: Props = $props();
</script>

<div class="bg-secondary text-secondary-foreground">
  <div class="wrap pt-6 pb-12 md:pt-14 md:pb-20">
    <h1 class="display-1">{title}</h1>
    {#if lead}
      <p class="lead mt-5 max-w-[30rem] md:mt-8">{lead}</p>
    {/if}
    {@render children?.()}
  </div>
</div>
