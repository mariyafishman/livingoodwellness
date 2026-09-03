<script lang="ts">
  import { site } from '#lib/config/site.ts';
  import { cn } from '#lib/utils.ts';

  interface Props {
    /** `paper` for page surfaces, `ink` for the deep band. */
    tone?: 'paper' | 'ink';
    class?: string;
  }

  let { tone = 'paper', class: className }: Props = $props();
</script>

<dl class={cn('grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 text-sm', className)}>
  {#each site.hours as { days, time } (days)}
    <dt class={cn('font-medium', tone === 'ink' ? 'text-ink-foreground' : 'text-foreground')}>{days}</dt>
    <dd class={cn('tabular-nums', tone === 'ink' ? 'text-ink-muted' : 'text-muted-foreground')}>{time}</dd>
  {/each}
</dl>
