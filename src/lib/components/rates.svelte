<script lang="ts">
  import { massage } from '#lib/config/site.ts';

  /**
   * The three massage rates in a row: a hairline across the top, hairlines
   * between the columns, the length in small type, the price set large and a
   * link to the book page. The link stretches over its whole column, so the
   * rate itself is the thing to press.
   */
</script>

<dl class="grid border-t sm:grid-cols-3">
  {#each massage.sessions as { duration, price }, i (duration)}
    {@const minutes = duration.replace(/\D/g, '')}
    <div
      class={[
        'relative flex flex-col items-start gap-2 py-6 sm:pt-7 sm:pb-3',
        i > 0 && 'border-t sm:border-t-0 sm:border-l sm:pl-8',
        i < massage.sessions.length - 1 && 'sm:pr-8',
      ]}
    >
      <dt class="text-muted-foreground">{minutes} minutes</dt>
      <dd class="price">{price}</dd>
      <dd class="mt-2 md:mt-3">
        <a href="/book" class="text-link text-[0.9375rem] after:absolute after:inset-0">
          Book your time<span class="sr-only">, {minutes} minutes</span>
        </a>
      </dd>
    </div>
  {/each}
</dl>
