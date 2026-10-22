<script lang="ts">
  import { massage } from '#lib/config/site.ts';

  /**
   * The three massage rates in a row: a hairline across the top, hairlines
   * between the columns, the length in small type and the price set large.
   */
</script>

<dl class="grid border-t sm:grid-cols-3">
  {#each massage.sessions as { duration, price }, i (duration)}
    {@const minutes = duration.replace(/\D/g, '')}
    <div
      class={[
        'flex flex-col gap-2 py-6 sm:pt-7 sm:pb-2',
        i > 0 && 'border-t sm:border-t-0 sm:border-l sm:pl-8',
        i < massage.sessions.length - 1 && 'sm:pr-8'
      ]}
    >
      <dt class="text-muted-foreground">{minutes} minutes</dt>
      <dd class="price">{price}</dd>
    </div>
  {/each}
</dl>
