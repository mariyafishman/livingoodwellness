<script lang="ts">
  import { site } from '#lib/config/site.ts';

  /** Weekly hours as a simple two-column list. Colours inherit from the parent. */
  interface Props {
    class?: string;
  }

  let { class: className }: Props = $props();
</script>

<dl class={['grid grid-cols-[auto_1fr] gap-x-6 gap-y-1.5', className]}>
  {#each site.hours as h (h.day)}
    <dt class="font-semibold">{h.day}</dt>
    <dd class={['tabular-nums', !h.open && 'opacity-75']}>
      {#if h.open && h.close}
        {h.open} – {h.close}
      {:else}
        {h.note}
      {/if}
    </dd>
  {/each}
</dl>
