<script lang="ts">
  import { massage } from '#lib/config/site.ts';

  /** Numbered hairline list of massage modalities. */
</script>

<ol class="border-t">
  {#each massage.modalities as { name, tagline }, i (name)}
    <li
      class="grid gap-x-6 border-b py-3.5 md:grid-cols-[3rem_1fr_auto] md:items-baseline md:py-5"
    >
      <span class="hidden font-display text-xs font-bold md:block">{String(i + 1).padStart(2, '0')}</span>
      <span class="row-title">{name}</span>
      <span class="mt-0.5 text-sm text-muted-foreground md:mt-0 md:text-base">{tagline}</span>
    </li>
  {/each}
</ol>
