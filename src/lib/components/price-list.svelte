<script lang="ts">
  import { Badge } from '#lib/components/ui/badge/index.ts';
  import { formatPrice, type PriceRow } from '#lib/config/services.ts';
  import { cn } from '#lib/utils.ts';

  interface Props {
    rows: readonly PriceRow[];
    /** Accessible caption for the list. */
    label: string;
    class?: string;
  }

  let { rows, label, class: className }: Props = $props();
</script>

<dl class={cn('divide-y divide-border', className)} aria-label={label}>
  {#each rows as row (row.duration)}
    <div class="flex items-baseline justify-between gap-4 py-4 first:pt-0 last:pb-0">
      <dt class="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span class="font-display text-2xl font-medium tracking-tight sm:text-3xl">{row.duration} min</span>
        {#if row.savings}
          <Badge variant="highlight">Save {formatPrice(row.savings)}</Badge>
        {/if}
      </dt>
      <dd class="font-display text-2xl font-light tabular-nums sm:text-3xl">{formatPrice(row.price)}</dd>
    </div>
  {/each}
</dl>
