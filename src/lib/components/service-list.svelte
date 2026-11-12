<script lang="ts">
  import { massage } from '#lib/config/site.ts';

  /** The massage modalities as hairline rows, two columns wide when there is room. */
</script>

<ul class="grid gap-x-12 md:grid-cols-2">
  {#each massage.modalities as { name, tagline } (name)}
    <li class="flex flex-col gap-0.5 border-t py-5">
      <span class="row-title">{name}</span>
      <span class="text-muted-foreground">{tagline}</span>
    </li>
  {/each}
</ul>
