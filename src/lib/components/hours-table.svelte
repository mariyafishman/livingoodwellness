<script lang="ts">
  import { site } from '#lib/config/site.ts';

  interface Props {
    compact?: boolean;
  }

  let { compact = false }: Props = $props();
</script>

<dl class="flex flex-col">
  {#each site.hours as { days, time } (days)}
    <div
      class={[
        'flex justify-between gap-4 border-b border-border',
        compact ? 'py-3 text-[15px]' : 'py-4 text-body'
      ]}
    >
      <dt class="text-muted-foreground">{days}</dt>
      <dd class="font-medium text-foreground">{time}</dd>
    </div>
  {/each}
</dl>
