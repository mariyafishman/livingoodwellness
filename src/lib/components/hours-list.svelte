<script lang="ts">
  import { site } from '#lib/config/site.ts';

  interface Props {
    class?: string;
  }

  let { class: className }: Props = $props();
</script>

<dl class={['flex flex-col divide-y divide-border', className]}>
  {#each site.hours as { days, time } (days)}
    <div class="flex items-baseline justify-between gap-4 py-3">
      <dt class="font-medium">{days}</dt>
      <dd class="text-right whitespace-nowrap text-muted-foreground tabular-nums">{time}</dd>
    </div>
  {/each}
</dl>
